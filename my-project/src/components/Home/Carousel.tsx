import React, { ReactNode, useEffect } from 'react'
import vectorImage from '../../assets/Vector.svg'
import Card from '../Cards/Card'
import cardData from '../Cards/cardDetails.json'
import { getIcon, getIconSvg } from '../Header/Header'
import { useRef } from 'react'
import { bo } from './Home'
import useIsMobile from '../../redux/features/hook/useIsMobile'
import { GoDotFill } from 'react-icons/go'



// Key Properties in scrollLeft, clientWidth, and scrollWidth
// scrollLeft → The number of pixels the container has been scrolled from the left.
// clientWidth → The visible width of the container (excluding any overflow).
// scrollWidth → The total width of the scrollable content.

type Props = {}
const Carousel = (props: Props) => {

  const cardContainerRef = useRef<HTMLDivElement | null>(null);
  console.log(cardContainerRef.current);

  const scrollLeft = () => {
    if (cardContainerRef.current) {
      const width = cardContainerRef.current.clientWidth;
      cardContainerRef.current.scrollBy({ left: -width, behavior: 'smooth' })
    }
  }
  const scrollRight = () => {
    if (cardContainerRef.current) {
      const width = cardContainerRef.current.clientWidth;
      cardContainerRef.current.scrollBy({ left: width, behavior: 'smooth' });

      // // Check if we reached the end and reset smoothly
      // setTimeout(() => {
      //   if (
      //     cardContainerRef.current &&
      //     cardContainerRef.current.scrollLeft + cardContainerRef.current.clientWidth >= cardContainerRef.current.scrollWidth
      //   ) {
      //     cardContainerRef.current.scrollBy({ left: -width, behavior: 'smooth' }); // Instant reset to start
      //   }
      // }, 7000); // Adjust delay to match scrolling duration
    }
  };

  useEffect(() => {
    // const interval = setInterval(scrollRight, 6000);
    // const interval1 = setInterval(scrollLeft, 2000);
    // return () => clearInterval(interval);
  }, []);

  const {isMobile}= useIsMobile();

  return (
    <>
    {!isMobile &&
    <div className={`flex max-w-[100vw] mt-[5%] !border-green-500 ${bo}`}>
      <div className={`${bo} relative flex w-[35%]`}>
        <img className={`w-[100%] h-[100%]`} src={vectorImage} alt='vector' />
        <div className={`flex flex-col absolute bg-transparent opacity-100 top-1/2 left-0 transform translate-x-1/2 translate-y-[-50%] w-[250px] h-[175px]`}>
          <p onClick={() => scrollLeft()} className={`text-gray-400 font-light bg-inherit text-[1rem]`}>3 Years of</p>
          <p onClick={() => scrollRight()} className={`text-white bg-inherit font-bold text-8xl`}>XP</p>
          <p className={`text-gray-400 font-light bg-inherit !border-yellow-500 text-[1rem]`}>with the most popular ecosystem frontend</p>
        </div> 
      </div>
      <div className={`${bo} carousel justify-center items-center flex flex-[3/4] flex-col w-[65%]`}>
        <div ref={cardContainerRef} className={`${bo} flex w-full h-[auto] mt-4 overflow-x-auto p-4 gap-6`}>
          {cardData.card.filter((item)=>item.active === true).map((value, index) => (
            <Card key={index} color={value.color} name={value.name} icon={getIconSvg(value.icon)} />
          ))}
        </div>
        <div className={`${ bo} flex items-center w-[auto] h-[15px]`}>
        {cardData.card.filter((item)=>item.active === true).map((value,index)=>(
            <GoDotFill key={index} className={`text-gray-300 text-xl bg-transparent `}/>
        ))}
      </div>
      </div>
    </div>}
    {isMobile &&
    <div className={`flex flex-col max-w-[100vw] mt-[5%] !border-green-500 ${bo}`}>
    <div className={`${bo} relative flex w-[full] justify-center`}>
      <img className={`h-[20rem]`} src={vectorImage} alt='vector' />
      <div className={` ${bo} flex flex-col absolute bg-transparent opacity-100 text-xl top-[20%] w-[250px] h-[175px] `}>
        <p className={`text-gray-400 font-light bg-inherit text-[1rem]`}>3 Years of</p>
        <p className={`text-white bg-inherit font-bold text-8xl`}>XP</p>
        <p className={`text-gray-400 font-light bg-inherit !border-yellow-500 text-[1rem]`}>with the most popular ecosystem frontend</p>
      </div> 
    </div>
    <div className={`${bo} carousel justify-center items-center flex flex-col`}>
      <div ref={cardContainerRef} className={`${bo} flex w-full h-[auto] mt-4 overflow-x-auto p-3 lg:p-4 gap-6`}>
        {cardData.card.filter((item)=>item.active === true).map((value, index) => (
          <Card key={index} color={value.color} name={value.name} icon={getIconSvg(value.icon)} />
        ))}
      </div>
      <div className={`${ bo} flex items-center w-[auto] h-[15px]`}>
        {cardData.card.filter((item)=>item.active === true).map((value,index)=>(
            <GoDotFill key={index} className={`text-gray-300 text-xl bg-transparent `}/>
        ))}
      </div>
    </div>
  </div>}
    </>

  )
}

export default Carousel;