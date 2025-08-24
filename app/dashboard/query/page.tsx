export default async function Page() {
  const query = await fetch('http://localhost:3000/query');
  const data = await query.json();

  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
