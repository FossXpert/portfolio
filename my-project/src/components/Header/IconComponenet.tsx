import React from 'react';
import headerData from '../../assets/header.json';
import { getIcon } from './Header';


type Props = {
    className?:string;
}

const IconComponenet = (props: Props) => {
  return (
    <div className='bg-transparent'>
        <div className={`small flex min-w-[8rem] lg:min-w-[11rem] !bg-[#211F23]/35  lg:h-[55px] h-[45px] gap-[1rem] lg:gap-8 text-purple-300 rounded-[100px] justify-center items-center ${props.className}`}>
          {headerData.icon_header.navigation
            .filter((item) => item.active === "true")
            .map((value, index) => {
              const IconComponent = getIcon(value.icon);
              return (
                <button key={index} className={``} onClick={() => window.open(value.link, "_blank")}>
                  {IconComponent && <IconComponent className='lg:text-xl bg-transparent' />}
                </button>
              );
            })}
        </div>
    </div>
  )
}

export default IconComponenet