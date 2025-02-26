import React, { forwardRef } from 'react';
import vectorImage from './Vector2.png'
import exp from  './experience.json'
import { LuDot } from 'react-icons/lu';
import { GoDash } from 'react-icons/go';
import { bo } from '../Home/Home';
import { useDownloadPdf } from '../../Utills/utill';


type Props = {};
const expp = "Here, you can know me a little more and see my whole experience as a Front-End Software Engineer";

// Forward ref to the Experience component
const Experience = forwardRef<HTMLDivElement>((props: Props, ref) => {
  const {downloadPdf,isLoading} = useDownloadPdf();
  return (
    <div ref={ref} className={`${bo} justify-start items-center text-white flex flex-col max-w-[100vw] h-auto`}>
      <div className={`${bo} relative items-center justify-center flex flex-col w-[auto] h-[300px] gap-8 mt-8 `}>
        <img className={`${bo} w-[100%] bg-transparent absolute h-[100%]`} src={vectorImage} alt='vector'/>
        <p className={`${bo} text-center text-gray-400 p-2 font-light leading-[40px] lg:leading-[48px] text-[1.3rem] lg:text-[1.5rem] w-[98%] lg:w-[616px] h-[auto] lg:h-[96px]`}>{expp}</p>
        <button disabled={isLoading} onClick={()=>downloadPdf()} className={` absolute border border-solid border-[#A60683] mt-[14rem] lg:mt-0 lg:relative w-[10rem]  lg:w-[184px] h-[46px] lg:h-[46px] text-gray-900 bg-white rounded-full`}>{isLoading?`Downloading...`:`Download CV`}</button>
      </div>
      <div className={`${bo} flex flex-col justify-center items-center w-[88vw] lg:w-[80vw] h-[full]`}>
        {
          exp.experience.filter((item) => item.enable === 'true').map((value,index) => (
            <div key={index} className={`${bo} justify-center items-center !border-red-600 flex w-[100%] h-[auto] mt-2 rounded-[60px]`}>
            <div className={`${bo} flex w-[100%] lg:w-[90%] h-[90%]`}>
                <div className={`${bo} w-[40%] h-[100%]`}>
                  <div className={`${bo} w-[100%] h-[40%]`}>
                    <h1 className={`${bo} font-semibold text-[22px]`}>{value.title}</h1>
                    <p className={`${bo} font-normal text-[18px] text-purple-300 mt-3`}>{value.contract}</p>
                    <div className={`${bo} flex items-center font-light text-[12px] text-gray-400`}>
                      {value.startYear}<LuDot className={`text-xl text-green-500`}/>{value.endYear}
                    </div>
                    <p className={`${bo} flex items-center font-light text-[12px] gap-1 text-gray-400`}>
                      {value.country}
                      <GoDash className={`text-xs`}/>
                      {value.city}
                    </p>
                  </div>
                </div>
                <div className={`${bo} flex flex-col w-[60%] gap-[17px] h-[100%]`}>
                  <p className={`${bo} font-semibold text-[20px] text-purple-300`}>{value.company}</p>
                  <div className={`${bo} flex flex-col gap-4`}>
                    {
                      value.description.map((value1,index1) => (
                        <p key={index1} className={`${bo} flex items-center font-light text-[18px] text-gray-400`} >
                          {value1}
                        </p>
                      ))
                    }
                  </div>
                </div>
            </div>
          </div>
          ))
        }
      </div>
    </div>
  );
});

export default Experience;