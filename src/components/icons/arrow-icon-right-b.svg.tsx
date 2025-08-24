import { FC, SVGProps } from 'react'

export const ArrowIconRightBSvg: FC<SVGProps<any>> = ({ ...props }) => {
  return (
    <svg
      width="5"
      height="5"
      viewBox="0 0 5 5"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M3.5 0.5V4H0" stroke="white" strokeWidth="0.8" />
    </svg>
  )
}
