// Get 'yyyy-mm-dd' as a string in the local time zone
function getLocalDate(date: Date) {
  const month = date.getMonth() + 1;
  return `${date.getFullYear()}-${
    month < 10 ? '0' : ''
  }${month}-${date.getDate()}`;
}

export default function DateDisplay({ date }: DateDisplayProps) {
  return (
    <label htmlFor="date" className="text-sm font-medium">
      Date
      <input
        type="date"
        name="date"
        id="date"
        className="block mt-1 w-1/3 border-gray-300 rounded-md shadow-sm"
        value={getLocalDate(date)}
        disabled // We are using the custom monthly day picker to select the day
      />
    </label>
  );
}

type DateDisplayProps = {
  date: Date;
};
