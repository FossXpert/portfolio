import React, { useRef } from 'react'
import Banner from './Banner'
import Carousel from './Carousel';
import Experience from '../Experience/Experience';
import Header from '../Header/Header';
import Projects from '../Projects/Projects';
import Contactme from '../Contactme/Contactme';
import { Analytics } from "@vercel/analytics/react"
import Footer from '../Footer/footer';

type Props = {}
export const bo = ''

const Home = (props: Props) => {
  <Analytics />
  const title = "Hi, I’m Rahul";
  const description = "During these 3 years as Front-End Software Engineer. My role has extended beyond coding to effective communication with various departments, to define new features and spearheading the development of new apps";
  
  //All useref hooks
  const experienceRef = useRef<HTMLDivElement | null>(null);
  const projectRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);
  const homeRef = useRef<HTMLDivElement | null>(null);
  
  return (
    <>
    <div ref={homeRef} className={`flex flex-col max-w-[99vw] px-[1%] h-[auto] ${bo} !border-yellow-500 justify-center`}>
       <div><Header experienceRef={experienceRef} projectRef={projectRef} contactRef={contactRef} homeRef={homeRef} /></div>
       <div><Banner title={title} description={description} experienceRef={experienceRef}/></div>
       <div><Carousel/></div>
       <div><Experience ref={experienceRef} /></div> {/* Pass ref to Experience */}
       <div><Projects ref={projectRef} technologies={[]}/></div>
       <div><Contactme ref={contactRef}/></div>
       <div><Footer/></div>
    </div>
    </>
    
  )
}

export default Home