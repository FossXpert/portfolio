import React, { forwardRef } from 'react'
import { bo } from '../Home/Home';
import bannerImage from '../../assets/Group39.png';
import IconComponenet from '../Header/IconComponenet';
import projectList from './projects.json'
import ProjectCard from './ProjectCard';



type Props = {
    title?: string;
    description?: string;
    technologies: string[];
    image?: string;
    github?: string;
    liveDemo?: string;
};


const Projects = forwardRef<HTMLDivElement, Props>((props: Props, ref) => {

    return (
        <div ref={ref} className={`${bo} flex justify-center items-center text-white max-w-[100vw] h-[700px]`}>
            <div className={`${bo} relative flex w-[80vw] h-[600px] mt-[2%]`}>
                <div className={`${bo} flex flex-col  items-center w-[30%] h-[full] bg-[#211F23]/35 rounded-[16px]`} >
                    <img src={"https://sprl.in/y6k8ibZ"} className={`${bo} bg-transparent w-[240px] h-[280px] mt-[2rem] rounded-[16px] overflow-hidden object-cover`} />
                    <h1 className={`${bo} w-[100%] h-[auto] bg-transparent text-[2rem] font-bold p-1 text-center text-gray-100`}>Rahul Ray </h1>
                    <p className={`${bo} w-[90%] h-[auto] bg-transparent text-[1.2rem] font-light text-center text-gray-400`}>Front-End Developer & Engineer</p>
                    <p className={`${bo} w-[90%] h-[auto] bg-transparent text-[1.2rem] font-light text-center text-gray-400`}>Varanasi, India</p>
                    <div className={`mt-4`}><IconComponenet className='!h-[30px] !rounded-none !gap-12' /></div>
                    <div className={`${bo} flex justify-center items-center text-[14px] font-semibold w-[180px] h-[44px] p-2 bg-purple-500 hover:bg-purple-700 mt-14 rounded-[10px]`}>Let's Talk</div>
                </div>
                <div className={`${bo} flex flex-col w-[70%] h-[full]`} >
                    <h1 className={`${bo} w-[100%] h-[auto] bg-transparent text-[2rem] font-bold p-1 text-center text-gray-100`}>Recent Projects and<p className={`${bo} text-purple-500`}>Achievements</p></h1>
                    <div className={`${bo} flex justify-center items-center gap-8 w-[100%] h-[100%] rounded-[16px] p-4 flex-wrap overflow-auto`}>
                        {
                            projectList.projects.filter((item)=>item.active === 'true').map((value, index) => (
                                <ProjectCard 
                                key={index} 
                                title={value.title} 
                                description={value.description} 
                                image={value.image} 
                                technologies={value.technologies} 
                                github={value.github} 
                                liveDemo={value.liveDemo} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
});

export default Projects