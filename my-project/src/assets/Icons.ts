import { FaGithubAlt, FaLinkedin } from "react-icons/fa";
import { FaCodepen, FaFigma, FaMedium } from "react-icons/fa";
import { IconType } from "react-icons/lib";

const Icons: Record<string, IconType> = {
    github_icon: FaGithubAlt,
    linkedin_icon: FaLinkedin,
    medium_icon: FaMedium,
    figma_icon: FaFigma,
    codepen_icon: FaCodepen
};

export default Icons;
