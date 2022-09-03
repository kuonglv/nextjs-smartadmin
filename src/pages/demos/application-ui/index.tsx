import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const Index = () => {
  return (
    <Main
      meta={
        <Meta
          title="Application UI"
          description="Next js Boilerplate is the perfect starter code for your project. Build your React application with the Next.js framework."
        />
      }
    >
      <div className="bg-gradient-to-r from-purple-800 to-indigo-700">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:pt-20 sm:pb-24 lg:max-w-7xl lg:px-8 lg:pt-24">
          <h2 className="text-3xl font-extrabold tracking-tight text-white">
            Application UI
          </h2>
          <p className="mt-4 max-w-3xl text-lg text-purple-200">
            Form layouts, tables, modal dialogs — everything you need to build
            beautiful responsive web applications.
          </p>
        </div>
      </div>
      <div className="mx-auto max-w-4xl px-4 py-6 sm:p-6 lg:max-w-7xl lg:px-8">
        <div className="mt-10 divide-y divide-slate-100 border-t border-slate-100 lg:mt-12">
          <section className="grid scroll-mt-12 grid-cols-1 gap-x-8 gap-y-10 py-10 lg:py-12 xl:grid-cols-4">
            <h3 className="text-base font-semibold text-slate-900">
              Application Shells
            </h3>
            <ul className="col-span-3 grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 md:grid-cols-3 xl:gap-x-8">
              <li>
                <div className="group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100">
                  <div className="relative aspect-[2/1] overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10">
                    <img
                      src="/assets/thumbnails/stacked.png"
                      alt=""
                      className="absolute inset-0 h-full w-full"
                    />
                  </div>
                  <h4 className="mt-4 text-sm font-medium text-slate-900 group-hover:text-indigo-600">
                    <a>
                      <span className="absolute -inset-2.5 z-10"></span>
                      <span className="relative">Stacked Layouts</span>
                    </a>
                  </h4>
                  <p className="relative mt-1.5 text-xs font-medium text-slate-500">
                    9 components
                  </p>
                </div>
              </li>
              <li>
                <div className="group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100">
                  <div className="relative aspect-[2/1] overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10">
                    <img
                      src="/assets/thumbnails/sidebar.png"
                      alt=""
                      className="absolute inset-0 h-full w-full"
                    />
                  </div>
                  <h4 className="mt-4 text-sm font-medium text-slate-900 group-hover:text-indigo-600">
                    <a href="/demos/application-ui/application-shells/sidebar">
                      <span className="absolute -inset-2.5 z-10"></span>
                      <span className="relative">Sidebar Layouts</span>
                    </a>
                  </h4>
                  <p className="relative mt-1.5 text-xs font-medium text-slate-500">
                    8 components
                  </p>
                </div>
              </li>
              <li>
                <div className="group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100">
                  <div className="relative aspect-[2/1] overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10">
                    <img
                      src="/assets/thumbnails/multi-column.png"
                      alt=""
                      className="absolute inset-0 h-full w-full"
                    />
                  </div>
                  <h4 className="mt-4 text-sm font-medium text-slate-900 group-hover:text-indigo-600">
                    <a href="/demos/application-ui/application-shells/multi-column">
                      <span className="absolute -inset-2.5 z-10"></span>
                      <span className="relative">Multi-Column Layouts</span>
                    </a>
                  </h4>
                  <p className="relative mt-1.5 text-xs font-medium text-slate-500">
                    7 components
                  </p>
                </div>
              </li>
            </ul>
          </section>
          <section
            id="product-application-ui-headings"
            className="grid scroll-mt-12 grid-cols-1 gap-x-8 gap-y-10 py-10 lg:py-12 xl:grid-cols-4"
          >
            <h3 className="text-base font-semibold text-slate-900">Headings</h3>
            <ul className="col-span-3 grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 md:grid-cols-3 xl:gap-x-8">
              <li>
                <div className="group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100">
                  <div className="relative aspect-[2/1] overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10">
                    <img
                      src="/assets/thumbnails/page-headings.png"
                      alt=""
                      className="absolute inset-0 h-full w-full"
                    />
                  </div>
                  <h4 className="mt-4 text-sm font-medium text-slate-900 group-hover:text-indigo-600">
                    <a href="/components/application-ui/headings/page-headings">
                      <span className="absolute -inset-2.5 z-10"></span>
                      <span className="relative">Page Headings</span>
                    </a>
                  </h4>
                  <p className="relative mt-1.5 text-xs font-medium text-slate-500">
                    11 components
                  </p>
                </div>
              </li>
              <li>
                <div className="group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100">
                  <div className="relative aspect-[2/1] overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10">
                    <img
                      src="/assets/thumbnails/card-headings.png"
                      alt=""
                      className="absolute inset-0 h-full w-full"
                    />
                  </div>
                  <h4 className="mt-4 text-sm font-medium text-slate-900 group-hover:text-indigo-600">
                    <a href="/components/application-ui/headings/card-headings">
                      <span className="absolute -inset-2.5 z-10"></span>
                      <span className="relative">Card Headings</span>
                    </a>
                  </h4>
                  <p className="relative mt-1.5 text-xs font-medium text-slate-500">
                    6 components
                  </p>
                </div>
              </li>
              <li>
                <div className="group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100">
                  <div className="relative aspect-[2/1] overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10">
                    <img
                      src="/assets/thumbnails/section-headings.png"
                      alt=""
                      className="absolute inset-0 h-full w-full"
                    />
                  </div>
                  <h4 className="mt-4 text-sm font-medium text-slate-900 group-hover:text-indigo-600">
                    <a href="/components/application-ui/headings/section-headings">
                      <span className="absolute -inset-2.5 z-10"></span>
                      <span className="relative">Section Headings</span>
                    </a>
                  </h4>
                  <p className="relative mt-1.5 text-xs font-medium text-slate-500">
                    10 components
                  </p>
                </div>
              </li>
            </ul>
          </section>
          <section
            id="product-application-ui-data-display"
            className="grid scroll-mt-12 grid-cols-1 gap-x-8 gap-y-10 py-10 lg:py-12 xl:grid-cols-4"
          >
            <h3 className="text-base font-semibold text-slate-900">
              Data Display
            </h3>
            <ul className="col-span-3 grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 md:grid-cols-3 xl:gap-x-8">
              <li>
                <div className="group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100">
                  <div className="relative aspect-[2/1] overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10">
                    <img
                      src="/assets/thumbnails/description-lists.png"
                      alt=""
                      className="absolute inset-0 h-full w-full"
                    />
                  </div>
                  <h4 className="mt-4 text-sm font-medium text-slate-900 group-hover:text-indigo-600">
                    <a href="/components/application-ui/data-display/description-lists">
                      <span className="absolute -inset-2.5 z-10"></span>
                      <span className="relative">Description Lists</span>
                    </a>
                  </h4>
                  <p className="relative mt-1.5 text-xs font-medium text-slate-500">
                    5 components
                  </p>
                </div>
              </li>
              <li>
                <div className="group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100">
                  <div className="relative aspect-[2/1] overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10">
                    <img
                      src="/assets/thumbnails/stats.png"
                      alt=""
                      className="absolute inset-0 h-full w-full"
                    />
                  </div>
                  <h4 className="mt-4 text-sm font-medium text-slate-900 group-hover:text-indigo-600">
                    <a href="/components/application-ui/data-display/stats">
                      <span className="absolute -inset-2.5 z-10"></span>
                      <span className="relative">Stats</span>
                    </a>
                  </h4>
                  <p className="relative mt-1.5 text-xs font-medium text-slate-500">
                    3 components
                  </p>
                </div>
              </li>
              <li>
                <div className="group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100">
                  <div className="relative aspect-[2/1] overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10">
                    <img
                      src="/assets/thumbnails/calendars.png"
                      alt=""
                      className="absolute inset-0 h-full w-full"
                    />
                  </div>
                  <h4 className="mt-4 text-sm font-medium text-slate-900 group-hover:text-indigo-600">
                    <a href="/components/application-ui/data-display/calendars">
                      <span className="absolute -inset-2.5 z-10"></span>
                      <span className="relative">Calendars</span>
                    </a>
                  </h4>
                  <p className="relative mt-1.5 text-xs font-medium text-slate-500">
                    8 components
                  </p>
                </div>
              </li>
            </ul>
          </section>
          <section
            id="product-application-ui-lists"
            className="grid scroll-mt-12 grid-cols-1 gap-x-8 gap-y-10 py-10 lg:py-12 xl:grid-cols-4"
          >
            <h3 className="text-base font-semibold text-slate-900">Lists</h3>
            <ul className="col-span-3 grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 md:grid-cols-3 xl:gap-x-8">
              <li>
                <div className="group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100">
                  <div className="relative aspect-[2/1] overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10">
                    <img
                      src="/assets/thumbnails/tables.png"
                      alt=""
                      className="absolute inset-0 h-full w-full"
                    />
                  </div>
                  <h4 className="mt-4 text-sm font-medium text-slate-900 group-hover:text-indigo-600">
                    <a href="/components/application-ui/lists/tables">
                      <span className="absolute -inset-2.5 z-10"></span>
                      <span className="relative">Tables</span>
                    </a>
                  </h4>
                  <p className="relative mt-1.5 text-xs font-medium text-slate-500">
                    16 components
                  </p>
                </div>
              </li>
              <li>
                <div className="group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100">
                  <div className="relative aspect-[2/1] overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10">
                    <img
                      src="/assets/thumbnails/stacked-lists.png"
                      alt=""
                      className="absolute inset-0 h-full w-full"
                    />
                  </div>
                  <h4 className="mt-4 text-sm font-medium text-slate-900 group-hover:text-indigo-600">
                    <a href="/components/application-ui/lists/stacked-lists">
                      <span className="absolute -inset-2.5 z-10"></span>
                      <span className="relative">Stacked Lists</span>
                    </a>
                  </h4>
                  <p className="relative mt-1.5 text-xs font-medium text-slate-500">
                    8 components
                  </p>
                </div>
              </li>
              <li>
                <div className="group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100">
                  <div className="relative aspect-[2/1] overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10">
                    <img
                      src="/assets/thumbnails/grid-lists.png"
                      alt=""
                      className="absolute inset-0 h-full w-full"
                    />
                  </div>
                  <h4 className="mt-4 text-sm font-medium text-slate-900 group-hover:text-indigo-600">
                    <a href="/components/application-ui/lists/grid-lists">
                      <span className="absolute -inset-2.5 z-10"></span>
                      <span className="relative">Grid Lists</span>
                    </a>
                  </h4>
                  <p className="relative mt-1.5 text-xs font-medium text-slate-500">
                    6 components
                  </p>
                </div>
              </li>
              <li>
                <div className="group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100">
                  <div className="relative aspect-[2/1] overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10">
                    <img
                      src="/assets/thumbnails/feeds.png"
                      alt=""
                      className="absolute inset-0 h-full w-full"
                    />
                  </div>
                  <h4 className="mt-4 text-sm font-medium text-slate-900 group-hover:text-indigo-600">
                    <a href="/components/application-ui/lists/feeds">
                      <span className="absolute -inset-2.5 z-10"></span>
                      <span className="relative">Feeds</span>
                    </a>
                  </h4>
                  <p className="relative mt-1.5 text-xs font-medium text-slate-500">
                    3 components
                  </p>
                </div>
              </li>
            </ul>
          </section>
          <section
            id="product-application-ui-forms"
            className="grid scroll-mt-12 grid-cols-1 gap-x-8 gap-y-10 py-10 lg:py-12 xl:grid-cols-4"
          >
            <h3 className="text-base font-semibold text-slate-900">Forms</h3>
            <ul className="col-span-3 grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 md:grid-cols-3 xl:gap-x-8">
              <li>
                <div className="group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100">
                  <div className="relative aspect-[2/1] overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10">
                    <img
                      src="/assets/thumbnails/form-layouts.png"
                      alt=""
                      className="absolute inset-0 h-full w-full"
                    />
                  </div>
                  <h4 className="mt-4 text-sm font-medium text-slate-900 group-hover:text-indigo-600">
                    <a href="/components/application-ui/forms/form-layouts">
                      <span className="absolute -inset-2.5 z-10"></span>
                      <span className="relative">Form Layouts</span>
                    </a>
                  </h4>
                  <p className="relative mt-1.5 text-xs font-medium text-slate-500">
                    5 components
                  </p>
                </div>
              </li>
              <li>
                <div className="group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100">
                  <div className="relative aspect-[2/1] overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10">
                    <img
                      src="/assets/thumbnails/input-groups.png"
                      alt=""
                      className="absolute inset-0 h-full w-full"
                    />
                  </div>
                  <h4 className="mt-4 text-sm font-medium text-slate-900 group-hover:text-indigo-600">
                    <a href="/components/application-ui/forms/input-groups">
                      <span className="absolute -inset-2.5 z-10"></span>
                      <span className="relative">Input Groups</span>
                    </a>
                  </h4>
                  <p className="relative mt-1.5 text-xs font-medium text-slate-500">
                    20 components
                  </p>
                </div>
              </li>
              <li>
                <div className="group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100">
                  <div className="relative aspect-[2/1] overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10">
                    <img
                      src="/assets/thumbnails/select-menus.png"
                      alt=""
                      className="absolute inset-0 h-full w-full"
                    />
                  </div>
                  <h4 className="mt-4 text-sm font-medium text-slate-900 group-hover:text-indigo-600">
                    <a href="/components/application-ui/forms/select-menus">
                      <span className="absolute -inset-2.5 z-10"></span>
                      <span className="relative">Select Menus</span>
                    </a>
                  </h4>
                  <p className="relative mt-1.5 text-xs font-medium text-slate-500">
                    7 components
                  </p>
                </div>
              </li>
              <li>
                <div className="group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100">
                  <div className="relative aspect-[2/1] overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10">
                    <img
                      src="/assets/thumbnails/sign-in-forms.png"
                      alt=""
                      className="absolute inset-0 h-full w-full"
                    />
                  </div>
                  <h4 className="mt-4 text-sm font-medium text-slate-900 group-hover:text-indigo-600">
                    <a href="/components/application-ui/forms/sign-in-forms">
                      <span className="absolute -inset-2.5 z-10"></span>
                      <span className="relative">Sign-in and Registration</span>
                    </a>
                  </h4>
                  <p className="relative mt-1.5 text-xs font-medium text-slate-500">
                    3 components
                  </p>
                </div>
              </li>
              <li>
                <div className="group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100">
                  <div className="relative aspect-[2/1] overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10">
                    <img
                      src="/assets/thumbnails/textareas.png"
                      alt=""
                      className="absolute inset-0 h-full w-full"
                    />
                  </div>
                  <h4 className="mt-4 text-sm font-medium text-slate-900 group-hover:text-indigo-600">
                    <a href="/components/application-ui/forms/textareas">
                      <span className="absolute -inset-2.5 z-10"></span>
                      <span className="relative">Textareas</span>
                    </a>
                  </h4>
                  <p className="relative mt-1.5 text-xs font-medium text-slate-500">
                    5 components
                  </p>
                </div>
              </li>
              <li>
                <div className="group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100">
                  <div className="relative aspect-[2/1] overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10">
                    <img
                      src="/assets/thumbnails/radio-groups.png"
                      alt=""
                      className="absolute inset-0 h-full w-full"
                    />
                  </div>
                  <h4 className="mt-4 text-sm font-medium text-slate-900 group-hover:text-indigo-600">
                    <a href="/components/application-ui/forms/radio-groups">
                      <span className="absolute -inset-2.5 z-10"></span>
                      <span className="relative">Radio Groups</span>
                    </a>
                  </h4>
                  <p className="relative mt-1.5 text-xs font-medium text-slate-500">
                    12 components
                  </p>
                </div>
              </li>
              <li>
                <div className="group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100">
                  <div className="relative aspect-[2/1] overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10">
                    <img
                      src="/assets/thumbnails/checkboxes.png"
                      alt=""
                      className="absolute inset-0 h-full w-full"
                    />
                  </div>
                  <h4 className="mt-4 text-sm font-medium text-slate-900 group-hover:text-indigo-600">
                    <a href="/components/application-ui/forms/checkboxes">
                      <span className="absolute -inset-2.5 z-10"></span>
                      <span className="relative">Checkboxes</span>
                    </a>
                  </h4>
                  <p className="relative mt-1.5 text-xs font-medium text-slate-500">
                    4 components
                  </p>
                </div>
              </li>
              <li>
                <div className="group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100">
                  <div className="relative aspect-[2/1] overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10">
                    <img
                      src="/assets/thumbnails/toggles.png"
                      alt=""
                      className="absolute inset-0 h-full w-full"
                    />
                  </div>
                  <h4 className="mt-4 text-sm font-medium text-slate-900 group-hover:text-indigo-600">
                    <a href="/components/application-ui/forms/toggles">
                      <span className="absolute -inset-2.5 z-10"></span>
                      <span className="relative">Toggles</span>
                    </a>
                  </h4>
                  <p className="relative mt-1.5 text-xs font-medium text-slate-500">
                    5 components
                  </p>
                </div>
              </li>
              <li>
                <div className="group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100">
                  <div className="relative aspect-[2/1] overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10">
                    <img
                      src="/assets/thumbnails/action-panels.png"
                      alt=""
                      className="absolute inset-0 h-full w-full"
                    />
                  </div>
                  <h4 className="mt-4 text-sm font-medium text-slate-900 group-hover:text-indigo-600">
                    <a href="/components/application-ui/forms/action-panels">
                      <span className="absolute -inset-2.5 z-10"></span>
                      <span className="relative">Action Panels</span>
                    </a>
                  </h4>
                  <p className="relative mt-1.5 text-xs font-medium text-slate-500">
                    8 components
                  </p>
                </div>
              </li>
              <li>
                <div className="group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100">
                  <div className="relative aspect-[2/1] overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10">
                    <img
                      src="/assets/thumbnails/comboboxes.png"
                      alt=""
                      className="absolute inset-0 h-full w-full"
                    />
                  </div>
                  <h4 className="mt-4 text-sm font-medium text-slate-900 group-hover:text-indigo-600">
                    <a href="/components/application-ui/forms/comboboxes">
                      <span className="absolute -inset-2.5 z-10"></span>
                      <span className="relative">Comboboxes</span>
                    </a>
                  </h4>
                  <p className="relative mt-1.5 text-xs font-medium text-slate-500">
                    5 components
                  </p>
                </div>
              </li>
            </ul>
          </section>
          <section
            id="product-application-ui-feedback"
            className="grid scroll-mt-12 grid-cols-1 gap-x-8 gap-y-10 py-10 lg:py-12 xl:grid-cols-4"
          >
            <h3 className="text-base font-semibold text-slate-900">Feedback</h3>
            <ul className="col-span-3 grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 md:grid-cols-3 xl:gap-x-8">
              <li>
                <div className="group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100">
                  <div className="relative aspect-[2/1] overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10">
                    <img
                      src="/assets/thumbnails/alerts.png"
                      alt=""
                      className="absolute inset-0 h-full w-full"
                    />
                  </div>
                  <h4 className="mt-4 text-sm font-medium text-slate-900 group-hover:text-indigo-600">
                    <a href="/components/application-ui/feedback/alerts">
                      <span className="absolute -inset-2.5 z-10"></span>
                      <span className="relative">Alerts</span>
                    </a>
                  </h4>
                  <p className="relative mt-1.5 text-xs font-medium text-slate-500">
                    6 components
                  </p>
                </div>
              </li>
              <li>
                <div className="group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100">
                  <div className="relative aspect-[2/1] overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10">
                    <img
                      src="/assets/thumbnails/empty-states.png"
                      alt=""
                      className="absolute inset-0 h-full w-full"
                    />
                  </div>
                  <h4 className="mt-4 text-sm font-medium text-slate-900 group-hover:text-indigo-600">
                    <a href="/components/application-ui/feedback/empty-states">
                      <span className="absolute -inset-2.5 z-10"></span>
                      <span className="relative">Empty States</span>
                    </a>
                  </h4>
                  <p className="relative mt-1.5 text-xs font-medium text-slate-500">
                    6 components
                  </p>
                </div>
              </li>
            </ul>
          </section>
          <section
            id="product-application-ui-navigation"
            className="grid scroll-mt-12 grid-cols-1 gap-x-8 gap-y-10 py-10 lg:py-12 xl:grid-cols-4"
          >
            <h3 className="text-base font-semibold text-slate-900">
              Navigation
            </h3>
            <ul className="col-span-3 grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 md:grid-cols-3 xl:gap-x-8">
              <li>
                <div className="group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100">
                  <div className="relative aspect-[2/1] overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10">
                    <img
                      src="/assets/thumbnails/navbars.png"
                      alt=""
                      className="absolute inset-0 h-full w-full"
                    />
                  </div>
                  <h4 className="mt-4 text-sm font-medium text-slate-900 group-hover:text-indigo-600">
                    <a href="/components/application-ui/navigation/navbars">
                      <span className="absolute -inset-2.5 z-10"></span>
                      <span className="relative">Navbars</span>
                    </a>
                  </h4>
                  <p className="relative mt-1.5 text-xs font-medium text-slate-500">
                    11 components
                  </p>
                </div>
              </li>
              <li>
                <div className="group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100">
                  <div className="relative aspect-[2/1] overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10">
                    <img
                      src="/assets/thumbnails/pagination.png"
                      alt=""
                      className="absolute inset-0 h-full w-full"
                    />
                  </div>
                  <h4 className="mt-4 text-sm font-medium text-slate-900 group-hover:text-indigo-600">
                    <a href="/components/application-ui/navigation/pagination">
                      <span className="absolute -inset-2.5 z-10"></span>
                      <span className="relative">Pagination</span>
                    </a>
                  </h4>
                  <p className="relative mt-1.5 text-xs font-medium text-slate-500">
                    3 components
                  </p>
                </div>
              </li>
              <li>
                <div className="group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100">
                  <div className="relative aspect-[2/1] overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10">
                    <img
                      src="/assets/thumbnails/tabs.png"
                      alt=""
                      className="absolute inset-0 h-full w-full"
                    />
                  </div>
                  <h4 className="mt-4 text-sm font-medium text-slate-900 group-hover:text-indigo-600">
                    <a href="/components/application-ui/navigation/tabs">
                      <span className="absolute -inset-2.5 z-10"></span>
                      <span className="relative">Tabs</span>
                    </a>
                  </h4>
                  <p className="relative mt-1.5 text-xs font-medium text-slate-500">
                    8 components
                  </p>
                </div>
              </li>
              <li>
                <div className="group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100">
                  <div className="relative aspect-[2/1] overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10">
                    <img
                      src="/assets/thumbnails/vertical-navigation.png"
                      alt=""
                      className="absolute inset-0 h-full w-full"
                    />
                  </div>
                  <h4 className="mt-4 text-sm font-medium text-slate-900 group-hover:text-indigo-600">
                    <a href="/components/application-ui/navigation/vertical-navigation">
                      <span className="absolute -inset-2.5 z-10"></span>
                      <span className="relative">Vertical Navigation</span>
                    </a>
                  </h4>
                  <p className="relative mt-1.5 text-xs font-medium text-slate-500">
                    6 components
                  </p>
                </div>
              </li>
              <li>
                <div className="group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100">
                  <div className="relative aspect-[2/1] overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10">
                    <img
                      src="/assets/thumbnails/sidebar-navigation.png"
                      alt=""
                      className="absolute inset-0 h-full w-full"
                    />
                  </div>
                  <h4 className="mt-4 text-sm font-medium text-slate-900 group-hover:text-indigo-600">
                    <a href="/components/application-ui/navigation/sidebar-navigation">
                      <span className="absolute -inset-2.5 z-10"></span>
                      <span className="relative">Sidebar Navigation</span>
                    </a>
                  </h4>
                  <p className="relative mt-1.5 text-xs font-medium text-slate-500">
                    8 components
                  </p>
                </div>
              </li>
              <li>
                <div className="group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100">
                  <div className="relative aspect-[2/1] overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10">
                    <img
                      src="/assets/thumbnails/breadcrumbs.png"
                      alt=""
                      className="absolute inset-0 h-full w-full"
                    />
                  </div>
                  <h4 className="mt-4 text-sm font-medium text-slate-900 group-hover:text-indigo-600">
                    <a href="/components/application-ui/navigation/breadcrumbs">
                      <span className="absolute -inset-2.5 z-10"></span>
                      <span className="relative">Breadcrumbs</span>
                    </a>
                  </h4>
                  <p className="relative mt-1.5 text-xs font-medium text-slate-500">
                    4 components
                  </p>
                </div>
              </li>
              <li>
                <div className="group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100">
                  <div className="relative aspect-[2/1] overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10">
                    <img
                      src="/assets/thumbnails/steps.png"
                      alt=""
                      className="absolute inset-0 h-full w-full"
                    />
                  </div>
                  <h4 className="mt-4 text-sm font-medium text-slate-900 group-hover:text-indigo-600">
                    <a href="/components/application-ui/navigation/steps">
                      <span className="absolute -inset-2.5 z-10"></span>
                      <span className="relative">Steps</span>
                    </a>
                  </h4>
                  <p className="relative mt-1.5 text-xs font-medium text-slate-500">
                    8 components
                  </p>
                </div>
              </li>
              <li>
                <div className="group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100">
                  <div className="relative aspect-[2/1] overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10">
                    <img
                      src="/assets/thumbnails/command-palettes.png"
                      alt=""
                      className="absolute inset-0 h-full w-full"
                    />
                  </div>
                  <h4 className="mt-4 text-sm font-medium text-slate-900 group-hover:text-indigo-600">
                    <a href="/components/application-ui/navigation/command-palettes">
                      <span className="absolute -inset-2.5 z-10"></span>
                      <span className="relative">Command Palettes</span>
                    </a>
                  </h4>
                  <p className="relative mt-1.5 text-xs font-medium text-slate-500">
                    9 components
                  </p>
                </div>
              </li>
            </ul>
          </section>
          <section
            id="product-application-ui-overlays"
            className="grid scroll-mt-12 grid-cols-1 gap-x-8 gap-y-10 py-10 lg:py-12 xl:grid-cols-4"
          >
            <h3 className="text-base font-semibold text-slate-900">Overlays</h3>
            <ul className="col-span-3 grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 md:grid-cols-3 xl:gap-x-8">
              <li>
                <div className="group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100">
                  <div className="relative aspect-[2/1] overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10">
                    <img
                      src="/assets/thumbnails/modals.png"
                      alt=""
                      className="absolute inset-0 h-full w-full"
                    />
                  </div>
                  <h4 className="mt-4 text-sm font-medium text-slate-900 group-hover:text-indigo-600">
                    <a href="/components/application-ui/overlays/modals">
                      <span className="absolute -inset-2.5 z-10"></span>
                      <span className="relative">Modals</span>
                    </a>
                  </h4>
                  <p className="relative mt-1.5 text-xs font-medium text-slate-500">
                    6 components
                  </p>
                </div>
              </li>
              <li>
                <div className="group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100">
                  <div className="relative aspect-[2/1] overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10">
                    <img
                      src="/assets/thumbnails/slide-overs.png"
                      alt=""
                      className="absolute inset-0 h-full w-full"
                    />
                  </div>
                  <h4 className="mt-4 text-sm font-medium text-slate-900 group-hover:text-indigo-600">
                    <a href="/components/application-ui/overlays/slide-overs">
                      <span className="absolute -inset-2.5 z-10"></span>
                      <span className="relative">Slide-overs</span>
                    </a>
                  </h4>
                  <p className="relative mt-1.5 text-xs font-medium text-slate-500">
                    12 components
                  </p>
                </div>
              </li>
              <li>
                <div className="group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100">
                  <div className="relative aspect-[2/1] overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10">
                    <img
                      src="/assets/thumbnails/notifications.png"
                      alt=""
                      className="absolute inset-0 h-full w-full"
                    />
                  </div>
                  <h4 className="mt-4 text-sm font-medium text-slate-900 group-hover:text-indigo-600">
                    <a href="/components/application-ui/overlays/notifications">
                      <span className="absolute -inset-2.5 z-10"></span>
                      <span className="relative">Notifications</span>
                    </a>
                  </h4>
                  <p className="relative mt-1.5 text-xs font-medium text-slate-500">
                    6 components
                  </p>
                </div>
              </li>
            </ul>
          </section>
          <section
            id="product-application-ui-elements"
            className="grid scroll-mt-12 grid-cols-1 gap-x-8 gap-y-10 py-10 lg:py-12 xl:grid-cols-4"
          >
            <h3 className="text-base font-semibold text-slate-900">Elements</h3>
            <ul className="col-span-3 grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 md:grid-cols-3 xl:gap-x-8">
              <li>
                <div className="group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100">
                  <div className="relative aspect-[2/1] overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10">
                    <img
                      src="/assets/thumbnails/avatars.png"
                      alt=""
                      className="absolute inset-0 h-full w-full"
                    />
                  </div>
                  <h4 className="mt-4 text-sm font-medium text-slate-900 group-hover:text-indigo-600">
                    <a href="/components/application-ui/elements/avatars">
                      <span className="absolute -inset-2.5 z-10"></span>
                      <span className="relative">Avatars</span>
                    </a>
                  </h4>
                  <p className="relative mt-1.5 text-xs font-medium text-slate-500">
                    11 components
                  </p>
                </div>
              </li>
              <li>
                <div className="group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100">
                  <div className="relative aspect-[2/1] overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10">
                    <img
                      src="/assets/thumbnails/dropdowns.png"
                      alt=""
                      className="absolute inset-0 h-full w-full"
                    />
                  </div>
                  <h4 className="mt-4 text-sm font-medium text-slate-900 group-hover:text-indigo-600">
                    <a href="/components/application-ui/elements/dropdowns">
                      <span className="absolute -inset-2.5 z-10"></span>
                      <span className="relative">Dropdowns</span>
                    </a>
                  </h4>
                  <p className="relative mt-1.5 text-xs font-medium text-slate-500">
                    5 components
                  </p>
                </div>
              </li>
              <li>
                <div className="group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100">
                  <div className="relative aspect-[2/1] overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10">
                    <img
                      src="/assets/thumbnails/badges.png"
                      alt=""
                      className="absolute inset-0 h-full w-full"
                    />
                  </div>
                  <h4 className="mt-4 text-sm font-medium text-slate-900 group-hover:text-indigo-600">
                    <a href="/components/application-ui/elements/badges">
                      <span className="absolute -inset-2.5 z-10"></span>
                      <span className="relative">Badges</span>
                    </a>
                  </h4>
                  <p className="relative mt-1.5 text-xs font-medium text-slate-500">
                    7 components
                  </p>
                </div>
              </li>
              <li>
                <div className="group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100">
                  <div className="relative aspect-[2/1] overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10">
                    <img
                      src="/assets/thumbnails/buttons.png"
                      alt=""
                      className="absolute inset-0 h-full w-full"
                    />
                  </div>
                  <h4 className="mt-4 text-sm font-medium text-slate-900 group-hover:text-indigo-600">
                    <a href="/components/application-ui/elements/buttons">
                      <span className="absolute -inset-2.5 z-10"></span>
                      <span className="relative">Buttons</span>
                    </a>
                  </h4>
                  <p className="relative mt-1.5 text-xs font-medium text-slate-500">
                    7 components
                  </p>
                </div>
              </li>
              <li>
                <div className="group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100">
                  <div className="relative aspect-[2/1] overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10">
                    <img
                      src="/assets/thumbnails/button-groups.png"
                      alt=""
                      className="absolute inset-0 h-full w-full"
                    />
                  </div>
                  <h4 className="mt-4 text-sm font-medium text-slate-900 group-hover:text-indigo-600">
                    <a href="/components/application-ui/elements/button-groups">
                      <span className="absolute -inset-2.5 z-10"></span>
                      <span className="relative">Button Groups</span>
                    </a>
                  </h4>
                  <p className="relative mt-1.5 text-xs font-medium text-slate-500">
                    5 components
                  </p>
                </div>
              </li>
            </ul>
          </section>
          <section
            id="product-application-ui-layout"
            className="grid scroll-mt-12 grid-cols-1 gap-x-8 gap-y-10 py-10 lg:py-12 xl:grid-cols-4"
          >
            <h3 className="text-base font-semibold text-slate-900">Layout</h3>
            <ul className="col-span-3 grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 md:grid-cols-3 xl:gap-x-8">
              <li>
                <div className="group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100">
                  <div className="relative aspect-[2/1] overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10">
                    <img
                      src="/assets/thumbnails/containers.png"
                      alt=""
                      className="absolute inset-0 h-full w-full"
                    />
                  </div>
                  <h4 className="mt-4 text-sm font-medium text-slate-900 group-hover:text-indigo-600">
                    <a href="/components/application-ui/layout/containers">
                      <span className="absolute -inset-2.5 z-10"></span>
                      <span className="relative">Containers</span>
                    </a>
                  </h4>
                  <p className="relative mt-1.5 text-xs font-medium text-slate-500">
                    5 components
                  </p>
                </div>
              </li>
              <li>
                <div className="group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100">
                  <div className="relative aspect-[2/1] overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10">
                    <img
                      src="/assets/thumbnails/panels.png"
                      alt=""
                      className="absolute inset-0 h-full w-full"
                    />
                  </div>
                  <h4 className="mt-4 text-sm font-medium text-slate-900 group-hover:text-indigo-600">
                    <a href="/components/application-ui/layout/panels">
                      <span className="absolute -inset-2.5 z-10"></span>
                      <span className="relative">Panels</span>
                    </a>
                  </h4>
                  <p className="relative mt-1.5 text-xs font-medium text-slate-500">
                    10 components
                  </p>
                </div>
              </li>
              <li>
                <div className="group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100">
                  <div className="relative aspect-[2/1] overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10">
                    <img
                      src="/assets/thumbnails/list-containers.png"
                      alt=""
                      className="absolute inset-0 h-full w-full"
                    />
                  </div>
                  <h4 className="mt-4 text-sm font-medium text-slate-900 group-hover:text-indigo-600">
                    <a href="/components/application-ui/layout/list-containers">
                      <span className="absolute -inset-2.5 z-10"></span>
                      <span className="relative">List containers</span>
                    </a>
                  </h4>
                  <p className="relative mt-1.5 text-xs font-medium text-slate-500">
                    7 components
                  </p>
                </div>
              </li>
              <li>
                <div className="group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100">
                  <div className="relative aspect-[2/1] overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10">
                    <img
                      src="/assets/thumbnails/media-objects.png"
                      alt=""
                      className="absolute inset-0 h-full w-full"
                    />
                  </div>
                  <h4 className="mt-4 text-sm font-medium text-slate-900 group-hover:text-indigo-600">
                    <a href="/components/application-ui/layout/media-objects">
                      <span className="absolute -inset-2.5 z-10"></span>
                      <span className="relative">Media Objects</span>
                    </a>
                  </h4>
                  <p className="relative mt-1.5 text-xs font-medium text-slate-500">
                    8 components
                  </p>
                </div>
              </li>
              <li>
                <div className="group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100">
                  <div className="relative aspect-[2/1] overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10">
                    <img
                      src="/assets/thumbnails/dividers.png"
                      alt=""
                      className="absolute inset-0 h-full w-full"
                    />
                  </div>
                  <h4 className="mt-4 text-sm font-medium text-slate-900 group-hover:text-indigo-600">
                    <a href="/components/application-ui/layout/dividers">
                      <span className="absolute -inset-2.5 z-10"></span>
                      <span className="relative">Dividers</span>
                    </a>
                  </h4>
                  <p className="relative mt-1.5 text-xs font-medium text-slate-500">
                    8 components
                  </p>
                </div>
              </li>
            </ul>
          </section>
          <section
            id="product-application-ui-page-examples"
            className="grid scroll-mt-12 grid-cols-1 gap-x-8 gap-y-10 py-10 lg:py-12 xl:grid-cols-4"
          >
            <h3 className="text-base font-semibold text-slate-900">
              Page Examples
            </h3>
            <ul className="col-span-3 grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 md:grid-cols-3 xl:gap-x-8">
              <li>
                <div className="group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100">
                  <div className="relative aspect-[2/1] overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10">
                    <img
                      src="/assets/thumbnails/home-screens.png"
                      alt=""
                      className="absolute inset-0 h-full w-full"
                    />
                  </div>
                  <h4 className="mt-4 text-sm font-medium text-slate-900 group-hover:text-indigo-600">
                    <a href="/components/application-ui/page-examples/home-screens">
                      <span className="absolute -inset-2.5 z-10"></span>
                      <span className="relative">Home Screens</span>
                    </a>
                  </h4>
                  <p className="relative mt-1.5 text-xs font-medium text-slate-500">
                    5 components
                  </p>
                </div>
              </li>
              <li>
                <div className="group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100">
                  <div className="relative aspect-[2/1] overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10">
                    <img
                      src="/assets/thumbnails/detail-screens.png"
                      alt=""
                      className="absolute inset-0 h-full w-full"
                    />
                  </div>
                  <h4 className="mt-4 text-sm font-medium text-slate-900 group-hover:text-indigo-600">
                    <a href="/components/application-ui/page-examples/detail-screens">
                      <span className="absolute -inset-2.5 z-10"></span>
                      <span className="relative">Detail Screens</span>
                    </a>
                  </h4>
                  <p className="relative mt-1.5 text-xs font-medium text-slate-500">
                    6 components
                  </p>
                </div>
              </li>
              <li>
                <div className="group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100">
                  <div className="relative aspect-[2/1] overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10">
                    <img
                      src="/assets/thumbnails/settings-screens.png"
                      alt=""
                      className="absolute inset-0 h-full w-full"
                    />
                  </div>
                  <h4 className="mt-4 text-sm font-medium text-slate-900 group-hover:text-indigo-600">
                    <a href="/components/application-ui/page-examples/settings-screens">
                      <span className="absolute -inset-2.5 z-10"></span>
                      <span className="relative">Settings Screens</span>
                    </a>
                  </h4>
                  <p className="relative mt-1.5 text-xs font-medium text-slate-500">
                    5 components
                  </p>
                </div>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </Main>
  );
};

export default Index;
