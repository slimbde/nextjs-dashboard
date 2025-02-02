import { lusitana } from '@/app/ui/fonts';
import { InvoicesTableSkeleton } from '@/app/ui/skeletons';

export default function Loading() {
  return (
    <div className='w-full'>
      <div className='flex w-full items-center justify-between'>
        <h1 className={`${lusitana.className} text-2xl`}>Invoices</h1>
      </div>
      <div className='mt-4 flex justify-between gap-2 md:mt-8 h-10'>
        <div className='flex-grow bg-gray-50 rounded-md'>&nbsp;</div>
        <div className='w-40 bg-gray-50 rounded-md'>&nbsp;</div>
      </div>

      <InvoicesTableSkeleton />

      <div className='mt-5 flex w-full justify-center h-12'>
        <div className='w-1/2 bg-gray-50'>&nbsp;</div>
      </div>
    </div>
  );
}
