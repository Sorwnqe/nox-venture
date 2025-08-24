import { FC, SVGProps } from 'react'

export const ArrowIconRightTSvg: FC<SVGProps<any>> = ({ ...props }) => {
  return (
    <svg
      width="4"
      height="5"
      viewBox="0 0 4 5"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M3.5 4.5V1H0" stroke="white" strokeWidth="0.8" />
    </svg>
  )
}
