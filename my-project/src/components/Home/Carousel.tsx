import React from 'react'
import vectorImage from '../../assets/Vector.svg'
import Card from '../Cards/Card'
import cardData from '../Cards/cardDetails.json'
import { getIcon, getIconSvg } from '../Header/Header'

type Props = {}
const bo = 'border border-solid border-white'

const Carousel = (props: Props) => {
  return (
    <div className={`flex w-auto h-[60%] mt-[5%] ${bo}`}>
      <div className={`${bo} relative flex w-[35%]`}>
        <img className={`w-[100%] h-[100%]`} src={vectorImage} alt='vector'/>
        <div className={`flex flex-col absolute bg-transparent opacity-100 top-1/2 left-0 transform translate-x-1/2 translate-y-[-50%] w-[250px] h-[175px]`}>
          <p className={`text-gray-400 font-light bg-inherit text-[1rem]`}>4 Years of</p>
          <p className={`text-white bg-inherit font-bold text-8xl`}>XP</p>
          <p className={`text-gray-400 font-light bg-inherit !border-yellow-500 text-[1rem]`}>with the most popular ecosystem frontend</p>
        </div>
      </div>
      <div className={`${bo}carousel justify-center items-center flex flex-[3/4] flex-col w-[65%]`}>
          <div className={`${bo} flex w-full h-[auto] mt-4 overflow-x-auto p-4 gap-6`}>
            {cardData.card.map((value,index) => (
              <Card key={index} color={value.color} name={value.name} icon={getIconSvg(value.icon)}/>
            ))}
          </div>
          <div className={`${bo} w-[20%] h-[15px]`}>

          </div>
      </div>
    </div>
  )
}

export default Carousel;