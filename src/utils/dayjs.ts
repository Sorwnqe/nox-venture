import dayjs from 'dayjs'
import Dutation from 'dayjs/plugin/duration'
import UTC from 'dayjs/plugin/utc'
import Timezone from 'dayjs/plugin/timezone'
export type { Dayjs } from 'dayjs'

dayjs.extend(Dutation)
dayjs.extend(UTC)
dayjs.extend(Timezone)

export default dayjs
