import clsx from 'clsx';
import { DetailedHTMLProps, HTMLAttributes } from 'react';

// Time in ms from 1970-01-01 UTC. e.g. '00:05' => 300000 (ms)
const getTimeMs = (time: string) => Date.parse(`1970-01-01T${time}Z`);

export default function TimeInput({
  label,
  invalid,
  onChange,
  ...props
}: TimeInputProps) {
  const camelCaseLabel = label
    .split(' ')
    .map((str, idx) => (!idx ? str.toLowerCase() : str))
    .join('');

  return (
    <div {...props}>
      <label htmlFor={camelCaseLabel} className="text-sm font-medium">
        {label}
        <input
          type="time"
          name={camelCaseLabel}
          id={camelCaseLabel}
          className={clsx(
            'block mt-1 border-gray-300 rounded-md shadow-sm select-none',
            invalid && 'border-red-500'
          )}
          onChange={(e) => onChange(getTimeMs(e.target.value))}
        />
      </label>
    </div>
  );
}

type TimeInputProps = {
  label: string;
  invalid: boolean;
  onChange: (time: number) => void;
} & Omit<
  DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  'onChange'
>;
