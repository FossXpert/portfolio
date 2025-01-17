import React from 'react'
import vectorImage from '../../assets/Vector.svg'


type Props = {}
const bo = 'border border-solid border-white'

const Carousel = (props: Props) => {
  return (
    <div className={`flex w-full h-[60%] mt-[5%] ${bo}`}>
      <div className={`${bo} flex flex-[1/4] w-[35%]`}>
        <img src={vectorImage} alt='vector' className={`w-[100%] h-[100%]`} />
      </div>
      <div className={`${bo} flex flex-[3/4] w-[65%]`}>
        
      </div>
    </div>
  )
}

export default Carousel