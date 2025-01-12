import React, { useState } from 'react'
import headerData from '../../assets/header.json'
import {
  HOME, ABOUT, CONTACT
} from '../../Constants/constant'
import { BaseHeaderProps } from '@/models/models'
import Home from '../Home'
import About from '../About'
import Contact from '../Contact'

type Props = {}


const getHeaderComponent = (header: BaseHeaderProps) => {
  switch(header.label){
    case HOME:
      return <Home />
    case ABOUT:
      return <About />
    case CONTACT:
      return <Contact />
    default:
      return <Home /> 
  }
}

const Header = (props: Props) => {

  return (
    <div className='flex w-[622px] h-[55px] rounded-[100px] overflow-hidden justify-center items-center bg-[#211F23]'>
      
    </div>
  )
}

export default Header