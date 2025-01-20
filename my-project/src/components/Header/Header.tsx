import React, { useState } from 'react';
import headerData from '../../assets/header.json';
import {
  HOME, ABOUT, CONTACT,
  GITHUB,JSICON,REACTICON,NEXTJSICON
} from '../../Constants/constant';
import { BaseHeaderProps } from '@/models/models';
import About from '../About';
import Contact from '../Contact';
import Icons from '../../assets/Icons';
import svgIcons from '../../assets/icons-svg/icon-image'
import { BsToggleOff, BsToggleOn } from 'react-icons/bs';
import Experience from '../Experience/Experience';

type Props = {};
const bo = 'border border-solid border-white'


export const getIcon = (iconName: string) => {
  return Icons[iconName];
};

export const getIconSvg = (iconName:string) => {
  switch (iconName){
    case JSICON:
      return svgIcons["jsIcon"];
    case REACTICON:
      return svgIcons["reactIcon"];
    case NEXTJSICON:
      return svgIcons["nextjsIcon"];
  }
}

export const getHeaderComponent = (header: BaseHeaderProps) => {
  switch (header.label) {
    case ABOUT:
      return <Experience />;
    case CONTACT:
      return <Contact />;
  }
};

const Header = (props: Props) => {
  const [activeTabComponent, setActiveTabComponent] = useState<string>(
    headerData.header.navigation.find((item) => item.active === 'true')?.label || HOME
  );
  const [nightMode,setNightMode] = useState(true);
  return (
    <>
      <div className={`${bo} flex justify-center w-[full] mt-[25px] gap-6`}>
        {/* intead of opacity write alpha value  */}
        <div className="large flex flex-[70%] bg-[#211F23]/35 gap-20 text-purple-300 max-w-[55%] h-[55px] rounded-[100px] justify-center items-center">
          {headerData.header.navigation
            .filter((nav) => nav.active === 'true')
            .map((value, index) => (
              <button
                key={value.id}
                onClick={() => setActiveTabComponent(value.label)}
                className={`${activeTabComponent === value.label ? 'text-white':"text-purple-300"}`}
              >
                {value.label}
              </button>
            ))}
        </div>
        <div className="small flex min-w-[180px] h-[55px] gap-8 bg-[#211F23]/35 text-purple-300 rounded-[100px]  justify-center items-center">
      {headerData.icon_header.navigation
        .filter((item) => item.active === "true")
        .map((value, index) => {
          const IconComponent = getIcon(value.icon);
          return (
            <button key={value.id} className={``} onClick={()=>window.open(value.link,"_blank")}>
              {IconComponent && <IconComponent className='text-xl bg-transparent' />}
            </button>
          );
        })}
        </div>
        <div className="small flex min-w-[80px] h-[55px] gap-8 bg-[#211F23]/35 text-purple-300 rounded-[100px]  justify-center items-center">
            <button onClick={()=>setNightMode(!nightMode)}>
            {nightMode ? <BsToggleOn className='text-xl bg-transparent'/>:<BsToggleOff className='text-xl bg-transparent'/>}
            </button>
        </div>
      </div>
      {/* <div className="mt-4">
        {getHeaderComponent({ label: activeTabComponent })}
      </div> */}
    </>
  );
};

export default Header;
