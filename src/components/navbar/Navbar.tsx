import { Menu, Transition } from '@headlessui/react';
import { BellIcon, SearchIcon } from '@heroicons/react/outline';
import { Fragment } from 'react';
import { BiCog, BiCube, BiGlobe } from 'react-icons/bi';

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ');
}
const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' },
];

const Navbar = () => {
  return (
    <div className="flex flex-1 justify-between px-4">
      <div className="flex flex-1">
        <form className="flex w-full md:ml-0" action="#" method="GET">
          <label htmlFor="search-field" className="sr-only">
            Search
          </label>
          <div className="relative w-full text-gray-400 focus-within:text-gray-600">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center">
              <SearchIcon className="h-5 w-5" aria-hidden="true" />
            </div>
            <input
              id="search-field"
              className="block h-full w-full border-transparent py-2 pl-8 pr-3 text-gray-900 placeholder:text-gray-500 focus:border-transparent focus:outline-none focus:ring-0 focus:placeholder:text-gray-400 sm:text-sm"
              placeholder="Search"
              type="search"
              name="search"
            />
          </div>
        </form>
      </div>
      <div className="ml-4 flex items-center gap-4 md:ml-6">
        <button
          type="button"
          className="rounded-full bg-white p-1 text-purple-500 hover:text-purple-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          <span className="sr-only">View notifications</span>
          <BiCog className="h-6 w-6" aria-hidden="true" />
        </button>
        <button
          type="button"
          className="rounded-full bg-white p-1 text-purple-500 hover:text-purple-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          <span className="sr-only">View notifications</span>
          <BiCube className="h-6 w-6" aria-hidden="true" />
        </button>
        <button
          type="button"
          className="rounded-full bg-white p-1 text-purple-500 hover:text-purple-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          <span className="sr-only">View notifications</span>
          <BiGlobe className="h-6 w-6" aria-hidden="true" />
        </button>

        {/* Notification dropdown */}
        <Menu as="div" className="relative">
          <div>
            <Menu.Button className="flex max-w-xs items-center rounded-full text-sm text-purple-500 hover:text-purple-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
              <span className="sr-only">Open user menu</span>
              <BellIcon className="h-6 w-6" aria-hidden="true" />
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 mt-2 w-80 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <Menu.Item>
                <div className="items-center justify-center gap-2 rounded-t-md bg-gradient-to-bl from-[#3e93d6] to-[#8a75aa] p-6 text-white">
                  <div className="flex items-center justify-center font-semibold">
                    11 New
                  </div>
                  <div className="flex items-center justify-center text-sm">
                    User Notifications
                  </div>
                </div>
              </Menu.Item>
              <Menu.Item>
                <div className="flex h-80 items-center justify-center p-4">
                  Notification list goes here!
                </div>
              </Menu.Item>
              <Menu.Item>
                <div className="flex justify-end border-t-[1px] bg-gray-100 p-2 text-xs font-medium text-violet-800">
                  view all notifications
                </div>
              </Menu.Item>
            </Menu.Items>
          </Transition>
        </Menu>

        {/* Profile dropdown */}
        <Menu as="div" className="relative">
          <div>
            <Menu.Button className="flex max-w-xs items-center rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
              <span className="sr-only">Open user menu</span>
              <img
                className="h-8 w-8 rounded-full"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 mt-2 w-72 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <Menu.Item>
                <div className="flex items-center gap-2 rounded-t-md bg-gradient-to-bl from-[#3e93d6] to-[#8a75aa] p-6">
                  <img
                    className="h-10 w-10 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                  <div className="grow flex-col items-center text-white">
                    <div className="w-full text-sm font-semibold">
                      Cuong V. Le
                    </div>
                    <span className="w-full text-xs">kuonglv@gmail.com</span>
                  </div>
                </div>
              </Menu.Item>
              {userNavigation.map((item) => (
                <Menu.Item key={item.name}>
                  {({ active }) => (
                    <a
                      href={item.href}
                      className={classNames(
                        active ? 'bg-gray-100' : '',
                        'block px-4 py-2 text-sm text-gray-700'
                      )}
                    >
                      {item.name}
                    </a>
                  )}
                </Menu.Item>
              ))}
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </div>
  );
};

export default Navbar;
