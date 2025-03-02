import { useEffect, useRef } from 'react';
import ProjectCard from './ProjectCard';

interface setActive {
    setProjects: React.Dispatch<React.SetStateAction<boolean>>;
}

const Projects: React.FC<setActive> = ({setProjects}) => {
    const projectRef = useRef<HTMLDivElement | null>(null);
    console.log(projectRef.current);
    

    useEffect(() => {
        if (!projectRef.current) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    
                    if (entry.isIntersecting) {
                        setProjects(true)                        
                    }
                    else if (!entry.isIntersecting) {
                        setProjects(false)
                    }
                });
            },
            { threshold: 0.3 }
        );

        observer.observe(projectRef.current);
        
        return () => observer.disconnect();
    }, [setProjects, projectRef.current]);
    
    const projects = [
        {
            time: "/assets/images/wild-oasis.png",
            title: 'The Wild Oasis',
            link: "https://the-wild-oasis-next-js-demo.vercel.app/",
            description: "Wild Oasis is a hotel reservation platform with a user system where guests can log in, reserve cabins, and manage their bookings. Users can update or cancel their reservations and edit personal details, providing a seamless and efficient booking experience.",
            technologies: ["Next.js", "React", "NextAuth", "Supabase" ]
        },
        {
            time: "/assets/images/baharatci.png",
            title: 'Baharatchi website clone',
            link: "https://baharatci-clone-ecru.vercel.app/",
            description: "Baharatchi is a fully functional e-commerce website where users can browse and purchase a variety of spices. The platform features a secure login and signup system, a basket system for managing selected items, and a beautiful overlay design that enhances the shopping experience. With its responsive layout, the site works seamlessly across all devices, ensuring accessibility and usability for every user.",
            technologies: ["JavaScript", "React", "React-Router", "Redux Toolkit", "Firebase", "AntDesign" ]
        },
        {
            time: '/assets/images/netflix.png',
            title: 'Netflix website clone',
            link: "https://netflix-clone-brown-mu.vercel.app/login",
            description: "This Netflix clone app offers a smooth login experience, allowing users to explore and enjoy a wide range of movies and TV shows. Built with modern web technologies, it delivers a sleek, responsive design and an intuitive user interface, closely resembling the original Netflix platform.",
            technologies: ["JavaScript", "TailwindCSS" , 'React' , 'Redux Toolkit' , "Firebase" , "React-Router" ]
        },
        {
            time: "/assets/images/mars.png",
            title: 'Universe website clone',
            link: "https://vite-project-rho-five.vercel.app/",
            description: "This Mars exploration app leverages modern web technologies to provide an interactive, immersive experience of the Red Planet. With responsive design, real-time data, and intuitive navigation, users can explore Mars' surface, track missions, and access planetary insights in a sleek, user-friendly interface.",
            technologies: ["JavaScript", "React", "React-Router"]
        },
        {
            time: "/assets/images/starbucks.png",
            title: 'Starbucks website clone',
            link: "https://starbucks-clone-xi.vercel.app/",
            description: "This Starbucks clone offers users a visually stunning and interactive experience, mirroring the official site’s aesthetic. Built with modern web technologies, it features a responsive layout for seamless browsing, smooth animations for an engaging user experience, and efficient state management for handling user interactions. The application is designed for performance and optimized for various devices.",
            technologies: ["JavaScript", "TailwindCSS"]
        },
        {
            time: "/assets/images/doggy.png",
            title: 'DoggyStickers website clone',
            link: "https://doggy-stickers-peach.vercel.app/",
            description: "Doggy Stickers is a vibrant and user-friendly e-commerce platform designed to brighten up homes with adorable dog-themed stickers. The webpage showcases a clean and modern layout with a focus on visual appeal and simplicity, making it easy for users to navigate and shop for their favorite dog stickers.",
            technologies: ["JavaScript", "CSS"]
        },
        {
            time: "/assets/images/apple.png",
            title: 'Apple website clone',
            link: "https://habibov97.github.io/Apple-clone/",
            description: "This project is a responsive clone of Apple's iPhone webpage, built using HTML and CSS. The website replicates Apple's clean and minimalistic design style, ensuring a pixel-perfect layout that mirrors the original.",
            technologies: ["HTML", "CSS"]
        },
    ];

    return (
        <div>
            <div ref={projectRef} id='projects' className="flex flex-col gap-10">
                {projects.map((project, index) => (
                    <ProjectCard
                        key={index}
                        time= {project.time}
                        title={project.title}
                        link={project.link}
                        description={project.description}
                        technologies={project.technologies}
                    />
                ))}
            </div>
        </div>
    );
};

export default Projects;
