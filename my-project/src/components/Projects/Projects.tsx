import React, { forwardRef } from 'react'
import { bo } from '../Home/Home';

type Props = {}



const Projects = forwardRef<HTMLDivElement>((props: Props,ref) => {

    return (
        <div ref={ref} className={`${bo} justify-start items-center text-white flex flex-col max-w-[100vw] h-[800px]`}>
            
        </div>
      );
});

export default Projects