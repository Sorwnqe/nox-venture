import { FC, SVGProps } from 'react'

export const ArrowIconLeftBSvg: FC<SVGProps<any>> = ({ ...props }) => {
  return (
    <svg
      width="5"
      height="5"
      viewBox="0 0 5 5"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M1 0.5V4H4.5" stroke="white" strokeWidth="0.8" />
    </svg>
  )
}
