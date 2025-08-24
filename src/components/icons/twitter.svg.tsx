import { FC, SVGProps } from 'react'

export const TwitterIconSvg: FC<SVGProps<any>> = ({ ...props }) => {
  return (
    <svg
      width="18"
      height="16"
      viewBox="0 0 18 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M13.7447 0.427917H16.2748L10.7473 6.74554L17.25 15.3424H12.1584L8.17053 10.1284L3.60746 15.3424H1.07582L6.98807 8.58499L0.75 0.427917H5.97083L9.57554 5.19367L13.7447 0.427917ZM12.8567 13.828H14.2587L5.20905 1.86277H3.7046L12.8567 13.828Z"
        fill="currentColor"
      />
    </svg>
  )
}
