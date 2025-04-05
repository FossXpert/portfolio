import React, { FC } from 'react';
// import bannerImage from '../../assets/Group39.png';
import bannerImage from '../../assets/boy.png'
import { bo } from './Home';
import useIsMobile from '../../redux/features/hook/useIsMobile';
import { useDownloadPdf } from '../../Utills/utill';


type Props = {
  title: string;
  description: string;
  experienceRef: React.MutableRefObject<HTMLDivElement | null>;
};
const Banner: FC<Props> = ({ title, description }, experienceRef) => {
  const { isMobile } = useIsMobile();
  const { downloadPdf, isLoading } = useDownloadPdf();
  const scrollToExperience = () => {
    console.log(experienceRef)
    if (experienceRef.current) {
      experienceRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {isMobile &&
        <div className={`${bo} mx-[2%] text-white flex flex-col items-center mt-[8rem] lg:mt-[9rem]`}>
          <div className={`flex ${bo} w-[90%] items-center justify-center`}>
            <img src={bannerImage} alt='banner' className={`w-[70%] h-[70%]`} />
          </div>
          <h1 className={`text-5xl lg:text-7xl p-2 `}>{title}</h1>
          <p className={` text-center	text-gray-400 p-2 font-light leading-[30px] text-[1.2rem]`}>{description}</p>
          <div className={`${bo} flex gap-4 mt-5`}>
            <button disabled={isLoading} className={`w-[10rem] h-[46px] text-gray-900 bg-white rounded-full`}
              onClick={() => downloadPdf()}>{isLoading ? `Downloading...` : `Download CV`}</button>
            <button onClick={() => scrollToExperience()} className={`w-[10rem] h-[46px] text-purple-300 border border-solid border-[#A60683] rounded-full`}>See Experiences Below</button>
          </div>
        </div>}
      {!isMobile && <div className={`${bo} text-white flex justify-between items-center mt-[5rem] lg:mt-[9rem] mx-[15%]`}>
        <div className={` ${bo} flex flex-col w-[60%] h-[40%] `}>
          <h1 className={`${bo} text-7xl p-2 `}>{title}</h1>
          <p className={`${bo} mt-4 text-gray-400 p-2 font-light leading-[48px] text-[1.5rem]`}>{description}</p>
          <div className={`${bo} flex gap-4 mt-5`}>
            <button disabled={isLoading} className={`w-[184px] h-[46px] text-gray-900 bg-white rounded-full`}
              onClick={() => downloadPdf()}>{isLoading ? `Downloading...` : `Download CV`}</button>
            <button onClick={() => scrollToExperience()} className={`w-[197px] h-[46px] text-purple-300 border border-solid !border-[#A60683] rounded-full`}>See Experiences Below</button>
          </div>
        </div>
        <div className={`flex ${bo} w-[40%] h-[38%] items-center justify-center`}>
          <img src={bannerImage} alt='banner' className={`w-[70%] h-[70%]`} />
        </div>
      </div>}
    </>
  )
}

export default Banner