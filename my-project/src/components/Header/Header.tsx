import React, { useRef, useState } from 'react';
import headerData from '../../assets/header.json';
import {
  HOME, ABOUT, CONTACT,
  GITHUB, JSICON, REACTICON, NEXTJSICON,
  EXPERIENCE,
  PROJECTS
} from '../../Constants/constant';
import { BaseHeaderProps } from '@/models/models';
import About from '../About';
import Contact from '../Contact';
import Icons from '../../assets/Icons';
import svgIcons from '../../assets/icons-svg/icon-image'
import { BsToggleOff, BsToggleOn } from 'react-icons/bs';
import Experience from '../Experience/Experience';
import { bo } from '../Home/Home';
import IconComponenet from './IconComponenet';

type Props = {
  experienceRef: React.RefObject<HTMLDivElement>;
  projectRef: React.RefObject<HTMLDivElement>;
};


export const getIcon = (iconName: string) => {
  return Icons[iconName];
};

export const getIconSvg = (iconName: string) => {
  switch (iconName) {
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


const Header = ({ experienceRef, projectRef }: Props) => {
  const [activeTabComponent, setActiveTabComponent] = useState<string>(
    headerData.header.navigation.find((item) => item.active === 'true')?.label || HOME
  );
  const [nightMode, setNightMode] = useState(true);

  const scrollToComponent = (label: string) => {
    switch (label) {
      case HOME:
        return null;
      case EXPERIENCE:
        return experienceRef.current ? experienceRef.current.scrollIntoView({ behavior: 'smooth' }) : null;
      case PROJECTS:
        return projectRef.current ? projectRef.current.scrollIntoView({ behavior: 'smooth' }) : null;
    }
  }



  return (
    <>
      <div className={`${bo} fixed top-0 left-0 right-0 z-[1000] flex justify-center transform -translate-y-3 max-w-[100vw] mt-[25px] gap-6`}>
        <div className={` flex flex-[70%] bg-[#211F23]/35 gap-20 text-purple-300 max-w-[55%] h-[55px] rounded-[100px] justify-center items-center`}>
          {headerData.header.navigation
            .filter((nav) => nav.active === 'true')
            .map((value, index) => (
              <button
                key={index}
                onClick={() => scrollToComponent(value.label)}
                className={`${activeTabComponent === value.label ? 'text-white' : "text-purple-300"}`}
              >
                {value.label}
              </button>
            ))}
        </div>
        <IconComponenet/>
        <div className=" small flex min-w-[80px] h-[55px] gap-8 bg-[#211F23]/35 text-purple-300 rounded-[100px] justify-center items-center">
          <button onClick={() => setNightMode(!nightMode)}>
            {nightMode ? <BsToggleOn className='text-xl bg-transparent' /> : <BsToggleOff className='text-xl bg-transparent' />}
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

//coui
//cxmjobdetailui