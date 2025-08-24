import { FC, SVGProps } from 'react'

export const ArrowDownSvg: FC<SVGProps<any>> = ({ ...props }) => {
  return (
    <svg
      width="6"
      height="23"
      viewBox="0 0 6 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M0.333334 20C0.333334 21.4728 1.52724 22.6667 3 22.6667C4.47276 22.6667 5.66667 21.4728 5.66667 20C5.66667 18.5272 4.47276 17.3333 3 17.3333C1.52724 17.3333 0.333334 18.5272 0.333334 20ZM3 0L2.5 2.18557e-08L2.5 20L3 20L3.5 20L3.5 -2.18557e-08L3 0Z"
        fill="white"
        fillOpacity="0.8"
      />
    </svg>
  )
}
