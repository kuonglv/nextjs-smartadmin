import ProgressBar from '../progressbar/ProgressBar';
import LiveFeedChart from './LiveFeedChart';

const tabs = [
  { name: 'Live Stats', href: '#', current: true },
  { name: 'Revenue', href: '#', current: false },
];

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ');
}

const LiveFeed = () => {
  return (
    <div className="rounded-md border-b border-gray-200 bg-white shadow-md shadow-gray-300">
      <div className="flex flex-wrap items-end justify-between border-b-[1px] sm:flex-nowrap">
        <div className="py-2">
          <h3 className="px-4 text-sm font-medium leading-6 text-gray-900">
            Live Feeds
          </h3>
        </div>
        <div className="mx-4 mt-0 flex shrink-0 items-end">
          <nav className="-mb-px flex space-x-8" aria-label="Tabs">
            {tabs.map((tab) => (
              <a
                key={tab.name}
                href={tab.href}
                className={classNames(
                  tab.current
                    ? 'border-purple-600 text-purple-500'
                    : 'border-transparent text-gray-900 hover:text-gray-700 hover:border-gray-300',
                  'whitespace-nowrap px-1 border-b-2 font-medium text-sm'
                )}
                aria-current={tab.current ? 'page' : undefined}
              >
                {tab.name}
              </a>
            ))}
          </nav>
        </div>
      </div>
      <div className="gap-3 px-4 py-6 lg:flex">
        <div className="h-60 lg:w-2/3">
          <LiveFeedChart />
        </div>
        <div className="lg:w-1/3">
          <ProgressBar
            title="My tasks"
            progress={50}
            config={{ bgColor: '#bebebe', color: '#1dc9b7' }}
          />
          <ProgressBar
            title="Transfered"
            progress={80}
            config={{ bgColor: '#c6c6c6', color: '#000000' }}
          />
        </div>
      </div>
      <div className="flex flex-wrap items-end justify-between border-t-[1px] sm:flex-nowrap">
        <div className="px-4 py-2">Footer</div>
      </div>
    </div>
  );
};

export default LiveFeed;
