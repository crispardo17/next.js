import CalendarPage from '@/app/ui/calendario/fullcalendar';
import { inter } from '@/app/ui/fonts';
import { Suspense } from 'react';
import {
  CardsSkeleton,
} from '@/app/ui/skeletons';

export default async function Page() {
  

  return (
    <main >
      <div className="flex w-full items-center justify-between">
        <h1 className={`${inter.className} text-1xl text-1xl border-b-2 border-blue-900 `}>Calendario</h1>
      </div>
      <div className="md:h-80 mt-4">
        <Suspense fallback={<CardsSkeleton />}>
        <CalendarPage />
        </Suspense>
      </div>
    </main>
  );
}