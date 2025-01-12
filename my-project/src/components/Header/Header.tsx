import React, { useState } from 'react';
import headerData from '../../assets/header.json';
import {
  HOME, ABOUT, CONTACT,
  GITHUB
} from '../../Constants/constant';
import { BaseHeaderProps } from '@/models/models';
import Home from '../Home';
import About from '../About';
import Contact from '../Contact';
import Icons from '../../assets/Icons';

type Props = {};

const getHeaderComponent = (header: BaseHeaderProps) => {
  switch (header.label) {
    case HOME:
      return <Home />;
    case ABOUT:
      return <About />;
    case CONTACT:
      return <Contact />;
    default:
      return <Home />;
  }
};

const getIcon = (iconName: string) => {
  return Icons[iconName]; // Dynamically get the icon from Icons object
};

const Header = (props: Props) => {
  const [activeTabComponent, setActiveTabComponent] = useState<string>(
    headerData.header.navigation.find((item) => item.active === 'true')?.label || HOME
  );

  return (
    <>
      <div className="flex border border-solid border-black bg-[#211F23]">
        
        <div className="large flex flex-[70%] gap-16 right-[10px] w-[480px] h-[55px] rounded-[100px] overflow-hidden justify-center items-center">
          {headerData.header.navigation
            .filter((nav) => nav.isHide === 'false')
            .map((value, index) => (
              <button
                key={value.id}
                onClick={() => setActiveTabComponent(value.label)}
              >
                {value.label}
              </button>
            ))}
        </div>

        <div className="small flex min-w-[180px] h-[55px] rounded-[100px] overflow-hidden justify-center items-center">
      {headerData.icon_header.navigation
        .filter((item) => item.active === "true")
        .map((value, index) => {
          const IconComponent = getIcon(value.icon);
          return (
            <button key={value.id} className="flex items-center">
              {IconComponent && <IconComponent className="text-xl" />}
            </button>
          );
        })}
    </div>
      </div>

      <div className="mt-4">
        {getHeaderComponent({ label: activeTabComponent })}
      </div>
    </>
  );
};

export default Header;
