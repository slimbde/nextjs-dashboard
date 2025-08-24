import {
  fetchCardData,
  fetchLatestInvoices,
  fetchRevenue,
} from '@/app/lib/data';

export default async function Page() {
  const latestInvoicesData = fetchLatestInvoices();
  const revenueData = fetchRevenue();
  const cardData = fetchCardData();

  const [invoices, revenue, card] = await Promise.all([
    latestInvoicesData,
    revenueData,
    cardData,
  ]);

  return <p>Customers Page</p>;
}
