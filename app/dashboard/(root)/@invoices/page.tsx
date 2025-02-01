import { fetchLatestInvoices } from '@/app/lib/data';
import LatestInvoices from '@/app/ui/dashboard/latest-invoices';

export default async function Page() {
  const latestInvoices = await fetchLatestInvoices();

  return <LatestInvoices latestInvoices={latestInvoices} />;
}
