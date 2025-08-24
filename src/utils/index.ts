import dayjs from './dayjs'

export function truncateMiddle(
  str = '',
  takeLength = 6,
  tailLength = takeLength,
  pad = '...'
): string {
  if (takeLength + tailLength >= str.length) return str
  return `${str.slice(0, takeLength)}${pad}${str.slice(-tailLength)}`
}

export function jumpAnchor(target: string) {
  const anchorElement = document.getElementById(`${target}`)

  if (anchorElement) {
    anchorElement.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'start',
    })
  }
}

export function dayjsDiffNow(date?: Date) {
  const day = dayjs(date)
  const now = dayjs()
  const diff = day.diff(now)
  const d = dayjs.duration(diff).days()
  const h = dayjs.duration(diff).hours()
  const m = dayjs.duration(diff).minutes()
  const s = dayjs.duration(diff).seconds()

  return {
    isEnd: diff < 0,
    d: d >= 0 ? d : 0,
    h: h >= 0 ? h : 0,
    m: m >= 0 ? m : 0,
    s: s >= 0 ? s : 0,
  }
}
