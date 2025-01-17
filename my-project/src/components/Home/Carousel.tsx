import React from 'react'

type Props = {}
const bo = 'border border-solid border-white'

const Carousel = (props: Props) => {
  return (
    <div className={`flex w-full h-[60%] mt-[5%] ${bo}`}>
      <div className={`${bo} flex flex-[1/4] w-[35%]`}>
        <img src='../../assets/Vector.svg' width={100} height={100} />
      </div>
      <div className={`${bo} flex flex-[3/4] w-[65%]`}>

      </div>
    </div>
  )
}

export default Carousel