import '@/assets/styles/globals.css';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: 'Property Pulse',
  keywords: 'renteal, property, real estate',
  description: 'Find the perfect rental property',
};

function MainLayout({children}) {
  return (
    <html>
      <body>
        <Navbar/>
        <main>{children}</main>
        <Footer/>
      </body>
    </html>
  );
}

export default MainLayout;