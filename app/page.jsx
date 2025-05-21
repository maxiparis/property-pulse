import Link from "next/link"

function HomePage() {
    return (
        <div>
            <h1 className={`text-3xl`}>Welcome to HomePage</h1>
            {/*<Link href="/properties">Go to Properties</Link>*/}
            <Link href={{
                pathname: "/properties",
                query: { name: "test" },
            }}>
                Go to Properties
            </Link>
        </div>
    );
}

export default HomePage;