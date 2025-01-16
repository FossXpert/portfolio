import React from 'react'
import Banner from './Banner'
import Carousel from './Carousel';

type Props = {}
const bo = 'border border-solid border-white'

const Home = (props: Props) => {
  const title = "Hi, I’m Rahul";
  const description = "During these 2 years as Front-End Software Engineer. My role has extended beyond coding to effective communication with various departments, to define new features and spearheading the development of new apps";
  return (
    <div className={`w-[full] h-[100vh] mx-2 ${bo} !border-yellow-500 justify-center`}>
       <Banner title={title} description={description}/>
       <Carousel/>
    </div>
  )
}

export default Home