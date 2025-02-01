import React from 'react';
import projectList from './projects.json'
import bannerImage from '../../assets/Group39.png';


type ProjectProps = {
  title?: string;
  description?: string;
  technologies?: string[];
  image?: string;
  github?: string;
  liveDemo?: string;
};

const ProjectCard: React.FC<ProjectProps> = ({ title, description, technologies, image, github, liveDemo }) => {
  return (
    <div className="w-[350px] h-[450px] bg-purple-700 rounded-2xl p-2 shadow-lg overflow-hidden transition-transform transform hover:scale-105">
      <video src={image} className="w-full h-[60%] object-cover rounded-t-xl" autoPlay loop muted />
      
      <div className="p-4 flex flex-col justify-between h-[40%] rounded-b-xl">
        <h3 className="text-xl font-semibold text-purple-400">{title}</h3>
        <p className="text-gray-300 text-sm">{description}</p>

        <div className="flex flex-wrap gap-2 mt-2">
          {technologies && technologies.map((tech, index) => (
            <span key={index} className="text-xs bg-purple-700 text-white px-2 py-1 rounded-full">{tech}</span>
          ))}
        </div>

        <div className="mt-4 flex justify-start gap-4 ">
          <a href={github} target="_blank" className="text-blue-400 hover:underline">GitHub</a>
          <a href={liveDemo} target="_blank" className="text-green-400 hover:underline">Live Demo</a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

// {
//     projectList.projects.map((value,index) =>(
//         <div key={value.id} className={`${bo} flex flex-col w-[40%] h-[80%] rounded-[16px] overflow-clip`}>
//             <img src={bannerImage} className={`${bo} !border-yellow-500 w-[100%] h-[70%] overflow-hidden`}/>
//             <p className={`${bo} text-purple-500`}>{value.title}</p>
//             <p className={`${bo} text-purple-500`}>{value.title}</p>
            
//         </div>
//     ))
// }