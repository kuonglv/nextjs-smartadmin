import { MenuAlt2Icon } from '@heroicons/react/outline';
import type { ReactNode } from 'react';
import { useState } from 'react';

import Navbar from '@/components/navbar/Navbar';
import Sidebar from '@/components/sidebar/Sidebar';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const setSidebarState = (b: boolean) => {
    setSidebarOpen(b);
  };

  return (
    <div>
      {props.meta}
      <Sidebar isOpen={sidebarOpen} setSidebarState={setSidebarState} />
      <div className="flex flex-1 flex-col md:pl-64">
        <div className="sticky top-0 z-10 flex h-16 shrink-0 bg-white shadow-md">
          <button
            type="button"
            className="border-r border-gray-200 px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden"
            onClick={() => setSidebarState(!sidebarOpen)}
          >
            <span className="sr-only">Open sidebar</span>
            <MenuAlt2Icon className="h-6 w-6" aria-hidden="true" />
          </button>
          <Navbar />
        </div>
        <main>
          <div className="bg-[#faf8fb] py-6">{props.children}</div>
        </main>
      </div>
    </div>
  );
};

export { Main };
