import { useEffect, useState } from 'react';

type IProgressBarProps = {
  title: string;
  value?: string;
  progress: number;
  config?: IConfig;
};

type IConfig = {
  color: string;
  bgColor: string;
};

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ');
}

const ProgressBar = (props: IProgressBarProps) => {
  const [bgColor, setBgColor] = useState('#f6f6f6');
  const [color, setColor] = useState('#bebebe');
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    setBgColor(props.config?.bgColor || '#bebebe');
  }, [props.config?.bgColor]);
  useEffect(() => {
    setColor(props.config?.color || '#000000');
  }, [props.config?.color]);
  useEffect(() => {
    setProgress(props.progress || 0);
  }, [props.progress]);

  return (
    <div className="my-2">
      <div className="flex justify-between">
        <div className="text-sm font-semibold text-gray-600">{props.title}</div>
        <div className="text-sm font-normal text-gray-500">{props.value}</div>
      </div>
      <div className="relative">
        <div
          style={{
            backgroundColor: props.config?.bgColor
              ? `${bgColor}`
              : 'bg-gray-200',
          }}
          className={classNames(
            props.config?.bgColor ? `bg-[${bgColor}]` : 'bg-gray-200',
            'h-2 w-full rounded-md'
          )}
        ></div>
        <div
          style={{
            backgroundColor: props.config?.color ? `${color}` : 'bg-gray-200',
            width: `${progress}%`,
          }}
          className={classNames(
            props.config?.color ? `bg-[${color}]` : 'bg-gray-800',
            `absolute inset-0 rounded-md`
          )}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
