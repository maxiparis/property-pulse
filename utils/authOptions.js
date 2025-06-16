import GoogleProvider from "next-auth/providers/google"
import User from "@/models/User";
import connectDB from "@/config/database";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: 'consent',
          access_type: 'offline',
          response_type: 'code'
        }
      }
    })
  ],
  callbacks: {
    // Invoked on successful sign in
    async signIn({profile}) {
      // 1. Connect to DB
      await connectDB()
      // 2. Check if user exists
      const userExists = await User.findOne({email: profile.email})
      // 3. If not, then create user
      if (!userExists) {
        await User.create({
          email: profile.email,
          username: profile.name.slice(0, 20),
          image: profile.picture
        })
      }
      // 4. Return true to allow sign in
      return true
    },
    // Session callback function that modifies the session object
    async session({session}) {
      // 1. Get user from DB
      const user = await User.findOne({email: session.user.email})
      // 2. Assign user id from the session
        session.user.id = user._id.toString()
      // 3. Return session
      return session
    }
  }
}