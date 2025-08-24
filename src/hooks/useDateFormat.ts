import dayjs from '../utils/dayjs'
import type { Dayjs } from '../utils/dayjs'

export const useDateFormat = () => {
  const formatToTZ = (date: Dayjs | null | undefined | string | number | Date) => {
    return dayjs(date).format('YYYY-MM-DD HH:mm')
  }
  return { formatToTZ }
}
