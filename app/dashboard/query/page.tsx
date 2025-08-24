import { headers } from 'next/headers';

async function getBaseUrl(): Promise<string> {
  const headersList = await headers();
  const host = headersList.get('host');
  const protocol = headersList.get('x-forwarded-proto') || 'http';
  return `${protocol}://${host}`;
}

export default async function Page() {
  const baseUrl = await getBaseUrl();
  const query = await fetch(`${baseUrl}/query`);
  const data = await query.json();

  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
