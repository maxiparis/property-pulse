import '@/assets/styles/globals.css';
import Navbar from "@/components/Navbar";

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
        <h1>{children}</h1>
      </body>
    </html>
  );
}

export default MainLayout;