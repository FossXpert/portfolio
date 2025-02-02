import React from 'react';
import bannerImage from '../../assets/Group39.png';
import { bo } from '../Home/Home';


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
    <div className={`${bo} w-[350px] h-[450px] bg-purple-700 rounded-2xl p-2 shadow-lg overflow-hidden transition-transform transform hover:scale-105`}>
      <div className={`h-[60%] object-cover`}>
       <img src={image} alt="banner" className={`w-[100%] h-[100%] object-cover`}/>
      </div>
      <div className={`p-4 flex flex-col justify-between h-[40%] rounded-b-xl`}>
        <h3 className={`text-xl font-semibold text-purple-400`}>{title}</h3>
        <p className={`text-gray-300 text-sm`}>{description}</p>

        <div className={`flex flex-wrap gap-2 mt-2`}>
          {technologies && technologies.map((tech, index) => (
            <span key={index} className={`text-xs bg-purple-700 text-white px-2 py-1 rounded-full`}>
              {tech}
            </span>
          ))}
        </div>

        <div className={`mt-4 flex justify-start gap-4`}>
          <a href={github} target="_blank" className={`text-blue-400 hover:underline`}>GitHub</a>
          <a href={liveDemo} target="_blank" className={`text-green-400 hover:underline`}>Live Demo</a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
