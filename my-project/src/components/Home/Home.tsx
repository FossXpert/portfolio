import React, { useRef } from 'react'
import Banner from './Banner'
import Carousel from './Carousel';
import Experience from '../Experience/Experience';
import Header from '../Header/Header';
import Projects from '../Projects/Projects';

type Props = {}
export const bo = ''

const Home = (props: Props) => {
  const title = "Hi, I’m Rahul";
  const description = "During these 2 years as Front-End Software Engineer. My role has extended beyond coding to effective communication with various departments, to define new features and spearheading the development of new apps";
  
  //All useref hooks
  const experienceRef = useRef<HTMLDivElement | null>(null);
  const projectRef = useRef<HTMLDivElement | null>(null);

  
  return (
    <>
    <div className={`flex flex-col max-w-[97vw] px-[1%] h-[auto] ${bo} !border-yellow-500 justify-center`}>
       <div><Header experienceRef={experienceRef} projectRef={projectRef} /></div>
       <div><Banner title={title} description={description}/></div>
       <div><Carousel/></div>
       <div><Experience ref={experienceRef} /></div> {/* Pass ref to Experience */}
       <div><Projects ref={projectRef} technologies={[]}/></div>
    </div>
    </>
    
  )
}

export default Home