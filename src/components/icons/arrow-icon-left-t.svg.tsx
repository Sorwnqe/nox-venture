import { FC, SVGProps } from 'react'

export const ArrowIconLeftTSvg: FC<SVGProps<any>> = ({ ...props }) => {
  return (
    <svg
      width="5"
      height="5"
      viewBox="0 0 5 5"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M1 4.5V1H4.5" stroke="white" strokeWidth="0.8" />
    </svg>
  )
}
