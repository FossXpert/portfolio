import React, { FC } from 'react';

type Props = {
  title:string;
  description:string;
}

const bo = 'border border-solid border-white'
const Banner:FC<Props> = ({title,description}) => {
  return (
    <>
        <div className={` !border-red-500 text-white flex justify-between items-center mt-20 mx-[15%]`}>
            <div className={` flex flex-col w-[60%] h-[40%] `}>
                <h1 className={` text-7xl p-2 `}>{title}</h1>
                <p className={`mt-4 text-gray-400 p-2 font-light leading-[48px] text-[1.5rem]`}>{description}</p>
                <div className={` flex gap-4 mt-5`}>
                  <button className={`w-[184px] h-[46px] text-gray-900 bg-white rounded-full`}>Download CV</button>
                  <button className={`w-[197px] h-[46px] text-purple-300 ${bo} !border-[#A60683] rounded-full`}>See Experiences</button>
                </div>
            </div>
            <div className={`flex ${bo} w-[40%] h-[38%] items-center justify-center`}>
              An image will be here
            </div>
        </div>  
    </>
  )
}

export default Banner