import { useEffect, useRef } from "react";
// import { FaDownload } from "react-icons/fa";


interface setActive {
    setAbout: React.Dispatch<React.SetStateAction<boolean>>;
}

const About: React.FC<setActive> = ({setAbout}) => {
    const aboutRef = useRef<HTMLDivElement | null>(null);
    // const [currentSection, setCurrentSection] = useState<string>("");

    useEffect(() => {
        if (!aboutRef.current) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setAbout(true);
                    }
                     else {
                    setAbout(false); 
                }
                });
            },
            { threshold: 0.3 } // Trigger when 25% of the section is visible
        );

        observer.observe(aboutRef.current);

        return () => observer.disconnect();
    }, [setAbout]);

    return (
        <div id="about" ref={aboutRef} className="text-white font-Poppin  text-sm">
            <div className="flex flex-col gap-3 p-3 lg:px-3 opacity-50">
                <p>
                    Specializing in <strong>JavaScript</strong>, <strong>React</strong>, <strong>HTML</strong> and <strong>CSS</strong>, I have a solid background in developing user-friendly and functional web applications. I use <strong>React</strong> to build interactive user interfaces, making sure that users have a smooth experience across different devices.
                </p>
                <p>
                    I keep myself updated with the latest trends in web development, allowing me to incorporate new technologies into my work. My focus on modern web tools drives me to deliver creative results that meet user needs and project goals. I pay close attention to detail, testing and optimizing my applications to ensure they work well and efficiently.
                </p>
                <p>
                    My strong <strong>problem-solving skills</strong> help me address challenges and find practical solutions that improve functionality and user satisfaction. By working closely with teams, I can bring together different ideas and perspectives, contributing to the overall success of the projects I am involved in.
                </p>
                {/* <a href="/assets/images/NewWork.pdf" download  className="flex font-Poppin gap-2 items-center">
                    <FaDownload /> Download cv
                </a> */}
            </div>
        </div>
    );
}

export default About;
