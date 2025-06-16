import '@/assets/styles/globals.css';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AuthProvider from "@/components/AuthProvider";

export const metadata = {
  title: 'Property Pulse',
  keywords: 'renteal, property, real estate',
  description: 'Find the perfect rental property',
};

function MainLayout({children}) {
  return (
    <AuthProvider>
      <html>
        <body>
        <Navbar/>
        <main>
          { children }
        </main>
        <Footer/>
        </body>
      </html>
    </AuthProvider>
  );
}

export default MainLayout;