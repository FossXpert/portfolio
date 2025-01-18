import React, { FC } from 'react'

type Props = {
  name:string;
  icon:string;
  color:string;
}

const bo = 'border border-solid border-white'

const Card = (props:Props) => {
  return (
    <div className={`${bo} flex w-[409px] h-[277px] rounded-[60px]`}>
      
    </div>
  )
}

export default Card