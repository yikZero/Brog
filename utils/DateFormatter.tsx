import { format, parseISO } from "date-fns";

interface DateFormatterProps {
  date: string;
  showDay?: boolean;
}

const DateFormatter = ({ date, showDay = true }: DateFormatterProps) => {
  const dateFormat = showDay ? 'LLL d, yyyy' : 'LLL, yyyy';
  return format(parseISO(date), dateFormat);
};

export default DateFormatter;
