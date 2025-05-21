export default function PropertyPage({params, searchParams}) {
  return (
    <>
        <h2>Property Page</h2>
        <h2>Property ID: {params.id}</h2>
        <h2>Property Name: {searchParams.name}</h2>
    </>
  )
}