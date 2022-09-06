import { Dialog, Disclosure, Transition } from '@headlessui/react';
import {
  CalendarIcon,
  ChartBarIcon,
  FolderIcon,
  HomeIcon,
  InboxIcon,
  UsersIcon,
  XIcon,
} from '@heroicons/react/outline';
import { useRouter } from 'next/router';
import { Fragment, useEffect, useState } from 'react';
import { HiChevronRight } from 'react-icons/hi';

const navigation = [
  { name: 'Dashboard', href: '#', icon: HomeIcon, current: true },
  { name: 'Team', href: '#', icon: UsersIcon, current: false },
  { name: 'Projects', href: '#', icon: FolderIcon, current: false },
  { name: 'Calendar', href: '#', icon: CalendarIcon, current: false },
  { name: 'Documents', href: '#', icon: InboxIcon, current: false },
  {
    name: 'Pages',
    href: '#',
    icon: ChartBarIcon,
    current: false,
    children: [
      { name: 'Login', href: '/login', current: false },
      { name: 'Members', href: '#', current: false },
      { name: 'Calendar', href: '#', current: false },
      {
        name: 'Settings',
        href: '#',
        children: [
          { name: 'Login', href: '#', current: false },
          { name: 'Members', href: '#', current: false },
          { name: 'Calendar', href: '#', current: false },
          { name: 'Settings', href: '#', current: false },
        ],
      },
    ],
  },
];

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ');
}

type ISidebarProps = {
  isOpen: boolean;
  setSidebarState: (_bool: boolean) => void;
};

const Sidebar = (props: ISidebarProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(props.isOpen);
  const setParentState = props.setSidebarState;

  const router = useRouter();

  useEffect(() => {
    setSidebarOpen(props.isOpen);
  }, [props.isOpen]);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
    setParentState(!sidebarOpen);
  };

  return (
    <>
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-40 flex md:hidden"
          onClose={() => toggleSidebar()}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-75" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <div className="bg-brand-gradient relative flex w-full max-w-xs flex-1 flex-col bg-purple-500 pt-5 pb-4">
              <Transition.Child
                as={Fragment}
                enter="ease-in-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in-out duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="absolute top-0 right-0 -mr-12 pt-2">
                  <button
                    type="button"
                    className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                    onClick={() => toggleSidebar()}
                  >
                    <span className="sr-only">Close sidebar</span>
                    <XIcon className="h-6 w-6 text-white" aria-hidden="true" />
                  </button>
                </div>
              </Transition.Child>
              <div className="flex shrink-0 items-center justify-center px-4 text-white">
                <button type="button" className="flex items-center gap-2">
                  <img
                    alt="Logo"
                    src={`${router.basePath}/assets/logos/logo.png`}
                  />
                  SmartAdmin WebApp
                </button>
              </div>
              <div className="mt-5 h-0 flex-1 overflow-y-auto">
                <div className="relative flex h-40 items-center justify-center px-6 py-9">
                  <div className="z-10 flex justify-center gap-4">
                    <img
                      className="h-10 w-10 rounded-full"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                    <div className="grow flex-col items-center text-white">
                      <div className="flex w-full text-sm font-semibold">
                        Cuong V. Le
                      </div>
                      <span className="flex w-full text-xs">
                        Hanoi, Vietnam
                      </span>
                    </div>
                  </div>
                  <img
                    alt="cover"
                    src={`${router.basePath}/assets/images/cover-2-lg.png`}
                    className="absolute inset-0 z-0 h-auto"
                  />
                </div>
                <nav className="space-y-1 px-0">
                  {navigation.map((item) =>
                    !item.children ? (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? 'bg-white border-l-2 bg-opacity-5 text-white font-bold text-opacity-100 hover:bg-black hover:bg-opacity-10'
                            : 'text-gray-200 hover:bg-black hover:bg-opacity-10',
                          'group flex items-center px-2 py-2 text-sm font-normal'
                        )}
                      >
                        <item.icon
                          className="mr-3 h-5 w-5 shrink-0 text-[#876fab]"
                          aria-hidden="true"
                        />
                        {item.name}
                      </a>
                    ) : (
                      <Disclosure
                        as="div"
                        key={item.name}
                        className="space-y-0"
                      >
                        {({ open }) => (
                          <>
                            <Disclosure.Button
                              className={classNames(
                                item.current
                                  ? 'bg-white bg-opacity-5 text-white'
                                  : 'text-gray-200 hover:bg-black hover:bg-opacity-10',
                                'group w-full flex items-center pl-2 pr-1 py-2 text-left text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500'
                              )}
                            >
                              <item.icon
                                className="mr-3 h-6 w-6 shrink-0 text-[#876fab] group-hover:text-gray-500"
                                aria-hidden="true"
                              />
                              <span className="flex-1">{item.name}</span>
                              <HiChevronRight
                                className={classNames(
                                  open
                                    ? 'text-gray-400 rotate-90'
                                    : 'text-gray-300',
                                  'ml-3 flex-shrink-0 h-5 w-5 transform group-hover:text-gray-400 transition-colors ease-in-out duration-150'
                                )}
                              />
                            </Disclosure.Button>
                            <Disclosure.Panel className="space-y-0 bg-[rgba(0,0,0,.1)]">
                              <div className="ml-5 border-l-[1px] border-l-[#876fab]">
                                {item.children.map((subItem) =>
                                  !subItem.children ? (
                                    <a
                                      key={subItem.name}
                                      href={subItem.href}
                                      className={classNames(
                                        subItem.current
                                          ? 'bg-white border-l-2 bg-opacity-5 text-white font-bold text-opacity-100 hover:bg-black hover:bg-opacity-10'
                                          : 'text-gray-200 hover:bg-black hover:bg-opacity-10',
                                        'group flex items-center -ml-5 pl-9 pr-2 py-2 text-sm font-normal before:border-[1px] before:border-solid before:border-[#333333] before:bg-[#876fab] before:rounded-full before:-ml-5 before:w-[8px] before:h-[8px]'
                                      )}
                                    >
                                      <span className="ml-5">
                                        {subItem.name}
                                      </span>
                                    </a>
                                  ) : (
                                    <Disclosure
                                      as="div"
                                      key={subItem.name}
                                      className="-ml-5 space-y-0"
                                    >
                                      {({ open: open2 }) => (
                                        <>
                                          <div className="ml-0">
                                            <Disclosure.Button
                                              className={classNames(
                                                subItem.current
                                                  ? 'bg-white bg-opacity-5 text-white'
                                                  : 'text-gray-200 hover:bg-black hover:bg-opacity-10',
                                                'group w-full flex items-center pl-9 pr-2 py-2 text-left text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500  before:border-[1px] before:border-solid before:border-[#333333] before:bg-[#876fab] before:rounded-full before:-ml-5 before:w-[8px] before:h-[8px]'
                                              )}
                                            >
                                              <span className="ml-5 flex-1">
                                                {subItem.name}
                                              </span>
                                              <HiChevronRight
                                                className={classNames(
                                                  open2
                                                    ? 'text-gray-400 rotate-90'
                                                    : 'text-gray-300',
                                                  'ml-3 h-5 w-5 shrink-0 transition-colors duration-150 ease-in-out group-hover:text-gray-400'
                                                )}
                                              />
                                            </Disclosure.Button>
                                          </div>
                                          <Disclosure.Panel className="space-y-0">
                                            {subItem.children.map(
                                              (sub2Item) => (
                                                <Disclosure.Button
                                                  key={sub2Item.name}
                                                  as="a"
                                                  href={sub2Item.href}
                                                  className="group flex w-full items-center rounded-md py-2 pl-14 pr-2 text-sm font-medium text-gray-200 hover:bg-black hover:bg-opacity-10"
                                                >
                                                  {sub2Item.name}
                                                </Disclosure.Button>
                                              )
                                            )}
                                          </Disclosure.Panel>
                                        </>
                                      )}
                                    </Disclosure>
                                  )
                                )}
                              </div>
                            </Disclosure.Panel>
                          </>
                        )}
                      </Disclosure>
                    )
                  )}
                </nav>
              </div>
            </div>
          </Transition.Child>
          <div className="w-14 shrink-0" aria-hidden="true">
            {/* Dummy element to force sidebar to shrink to fit close icon */}
          </div>
        </Dialog>
      </Transition.Root>

      {/* Static sidebar for desktop */}
      <div className="hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col">
        {/* Sidebar component, swap this element with another sidebar if you like */}
        <div className="bg-brand-gradient flex grow flex-col overflow-y-auto">
          <div className="bg-brand-gradient flex h-16 shrink-0 items-center justify-center bg-purple-500 px-4">
            <button
              type="button"
              className="flex items-center gap-2 text-white"
            >
              <img
                alt="Logo"
                src={`${router.basePath}/assets/logos/logo.png`}
              />
              SmartAdmin WebApp
            </button>
          </div>
          <div className="mt-0 flex flex-1 flex-col">
            <div className="relative flex h-32 items-center justify-center px-6 py-3">
              <div className="z-10 flex justify-center gap-4">
                <img
                  className="h-10 w-10 rounded-full"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
                <div className="grow flex-col items-center text-white">
                  <div className="flex w-full text-sm font-semibold">
                    Cuong V. Le
                  </div>
                  <span className="flex w-full text-xs">Hanoi, Vietnam</span>
                </div>
              </div>
              <img
                alt="cover"
                src={`${router.basePath}/assets/images/cover-2-lg.png`}
                className="absolute inset-0 z-0 h-auto"
              />
            </div>
            <nav className="flex-1 space-y-0 px-0 pb-4">
              {navigation.map((item) =>
                !item.children ? (
                  <a
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      item.current
                        ? 'bg-white border-l-2 bg-opacity-5 text-white font-bold text-opacity-100 hover:bg-black hover:bg-opacity-10'
                        : 'text-gray-200 hover:bg-black hover:bg-opacity-10',
                      'group flex items-center px-2 py-2 text-sm font-normal'
                    )}
                  >
                    <item.icon
                      className="mr-3 h-5 w-5 shrink-0 text-[#876fab]"
                      aria-hidden="true"
                    />
                    {item.name}
                  </a>
                ) : (
                  <Disclosure as="div" key={item.name} className="space-y-0">
                    {({ open }) => (
                      <>
                        <Disclosure.Button
                          className={classNames(
                            item.current
                              ? 'bg-white bg-opacity-5 text-white'
                              : 'text-gray-200 hover:bg-black hover:bg-opacity-10',
                            'group w-full flex items-center pl-2 pr-1 py-2 text-left text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500'
                          )}
                        >
                          <item.icon
                            className="mr-3 h-6 w-6 shrink-0 text-[#876fab] group-hover:text-gray-500"
                            aria-hidden="true"
                          />
                          <span className="flex-1">{item.name}</span>
                          <HiChevronRight
                            className={classNames(
                              open
                                ? 'text-gray-400 rotate-90'
                                : 'text-gray-300',
                              'ml-3 flex-shrink-0 h-5 w-5 transform group-hover:text-gray-400 transition-colors ease-in-out duration-150'
                            )}
                          />
                        </Disclosure.Button>
                        <Disclosure.Panel className="space-y-0 bg-[rgba(0,0,0,.1)]">
                          <div className="ml-5 border-l-[1px] border-l-[#876fab]">
                            {item.children.map((subItem) =>
                              !subItem.children ? (
                                <a
                                  key={subItem.name}
                                  href={subItem.href}
                                  className={classNames(
                                    subItem.current
                                      ? 'bg-white border-l-2 bg-opacity-5 text-white font-bold text-opacity-100 hover:bg-black hover:bg-opacity-10'
                                      : 'text-gray-200 hover:bg-black hover:bg-opacity-10',
                                    'group flex items-center -ml-5 pl-9 pr-2 py-2 text-sm font-normal before:border-[1px] before:border-solid before:border-[#333333] before:bg-[#876fab] before:rounded-full before:-ml-5 before:w-[8px] before:h-[8px]'
                                  )}
                                >
                                  <span className="ml-5">{subItem.name}</span>
                                </a>
                              ) : (
                                <Disclosure
                                  as="div"
                                  key={subItem.name}
                                  className="-ml-5 space-y-0"
                                >
                                  {({ open: open2 }) => (
                                    <>
                                      <div className="ml-0">
                                        <Disclosure.Button
                                          className={classNames(
                                            subItem.current
                                              ? 'bg-white bg-opacity-5 text-white'
                                              : 'text-gray-200 hover:bg-black hover:bg-opacity-10',
                                            'group w-full flex items-center pl-9 pr-2 py-2 text-left text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500  before:border-[1px] before:border-solid before:border-[#333333] before:bg-[#876fab] before:rounded-full before:-ml-5 before:w-[8px] before:h-[8px]'
                                          )}
                                        >
                                          <span className="ml-5 flex-1">
                                            {subItem.name}
                                          </span>
                                          <HiChevronRight
                                            className={classNames(
                                              open2
                                                ? 'text-gray-400 rotate-90'
                                                : 'text-gray-300',
                                              'ml-3 h-5 w-5 shrink-0 transition-colors duration-150 ease-in-out group-hover:text-gray-400'
                                            )}
                                          />
                                        </Disclosure.Button>
                                      </div>
                                      <Disclosure.Panel className="space-y-0">
                                        {subItem.children.map((sub2Item) => (
                                          <Disclosure.Button
                                            key={sub2Item.name}
                                            as="a"
                                            href={sub2Item.href}
                                            className="group flex w-full items-center rounded-md py-2 pl-14 pr-2 text-sm font-medium text-gray-200 hover:bg-black hover:bg-opacity-10"
                                          >
                                            {sub2Item.name}
                                          </Disclosure.Button>
                                        ))}
                                      </Disclosure.Panel>
                                    </>
                                  )}
                                </Disclosure>
                              )
                            )}
                          </div>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                )
              )}
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
