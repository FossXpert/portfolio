import React, { FC } from 'react'

type Props = {
  name: string;
  icon: any;
  color: string;
}

const bo = 'border border-solid border-white'
const Card = (props: Props) => {
  return (
    <div className={` flex flex-col min-w-[380px] h-[237px] rounded-[60px] justify-center items-start pl-8 gap-2`} style={{ background: props.color }}>
      <img className={`bg-transparent`} src={props.icon} width={50} height={50}/>
      <p className={`bg-transparent text-gray-800 font-bold text-[24px]`}>{props.name}</p>
    </div>
  )
}

export default Card