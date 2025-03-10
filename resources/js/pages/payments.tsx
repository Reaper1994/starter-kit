import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { Payment, columns } from "@/components/payments/columns"
import { DataTable } from "@/components/payments/data-table"
import { useEffect, useState } from 'react';

// async function getData(): Promise<Payment[]> {
//     // Fetch data from your API here.
//     return [
//       {
//         id: "728ed52f",
//         amount: 100,
//         status: "pending",
//         email: "m@example.com",
//       },
//       // ...
//     ]
//   }

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Payments',
        href: '/dashboard',
    },
];

export default  function DemoPage({payments}: {payments:Payment[]}) {
//     const [data,setData] = useState<Payment[]>([]);

//     useEffect(()=> {
//         getData().then(setData);
// },[]);
   
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />
            <div className="container mx-auto py-10">
                <DataTable columns={columns} data={payments} />
            </div>
        </AppLayout>
    )
  }

