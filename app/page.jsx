import Link from "next/link"
import Navbar from "@/components/Navbar";

export default function HomePage() {
  return (
    <div>
      <h1 className={`text-3xl`}>Welcome to HomePage</h1>
      <Link href="/properties">Go to Properties</Link>
    </div>
  );
}