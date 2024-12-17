import { Link } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";

interface ProjectCardProps {
    time: string
    title: string;
    link: string;
    description: string;
    technologies: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({time,  title, link, description, technologies }) => {
    return (
        <Link target="_blank" to={link} className="flex flex-col lg:flex-row gap-5 cursor-pointer hover:shadow-md group text-white font-Poppin transition-all duration-300 ease-in-out p-3 rounded-md hover:bg-gray-600 hover:bg-opacity-10">
            <div className="opacity-50 uppercase text-[13px] pt-[3px]">
                <img src={time} className="lg:h-14 lg:w-24  rounded-md lg:hover:scale-125 transition-all duration-500 lg:hover:-rotate-6" />
            </div>
            <div className="w-full lg:w-[75%] flex flex-col group-hover:group gap-2">
                <Link target="_blank" to={link} className="flex group-hover:text-teal-300 transition-all duration-300 gap-2 items-center">
                    {title} <FiArrowUpRight />
                </Link>
                <p className="text-[14px] opacity-50">{description}</p>
                <div className="flex flex-wrap gap-2">
                    {technologies.map((tech, index) => (
                        <div key={index} className="text-teal-300 bg-teal-300 bg-opacity-10 p-1 rounded-xl text-sm">
                            {tech}
                        </div>
                    ))}
                </div>
            </div>
        </Link>
    );
};

export default ProjectCard;
