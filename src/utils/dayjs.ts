import dayjs, { Dayjs } from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import 'dayjs/locale/id';

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(localizedFormat);

const LOCALE = 'id';

function formatDate(date: Dayjs, format: string | null = null): string {
  const dateInLocale = date.tz('Asia/Jakarta').locale(LOCALE);

  if (format) return dateInLocale.format(format);
  return dateInLocale.format('YYYY-M-D');
}

export function convertDate(
  date: string | number | Date,
  format: string | null = null,
): string {
  return formatDate(dayjs(date), format);
}

export function dayjsFormat(
  date: string | number | Date | undefined,
  format: string | null = null,
): string {
  return formatDate(dayjs(date), format);
}

export function last7Hours(
  date: string | number | Date | undefined,
  format: string | null = null,
): string {
  return formatDate(dayjs(date).subtract(7, 'hours'), format);
}

export function now(format: string | null = null): string {
  return formatDate(dayjs(), format);
}
