import SideNav from '@/app/ui/dashboard/sidenav';
import { lusitana } from '@/app/ui/fonts';

export default function Layout({
  cards,
  revenue,
  invoices,
}: {
  cards: React.ReactNode;
  revenue: React.ReactNode;
  invoices: React.ReactNode;
}) {
  return (
    <div className='flex h-screen flex-col md:flex-row md:overflow-hidden'>
      <div className='w-full flex-none md:w-64'>
        <SideNav />
      </div>
      <div className='flex-grow p-6 md:overflow-y-auto md:p-12'>
        <main>
          <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
            Dashboard
          </h1>

          {cards}

          <div className='mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8'>
            {revenue}
            {invoices}
          </div>
        </main>
      </div>
    </div>
  );
}
