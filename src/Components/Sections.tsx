interface activesection {
  about : boolean,
  projects: boolean,
  details: boolean
}
const Sections: React.FC<activesection> = ({ about , projects , details}) => {

  const handleSmoothScroll = (event: React.MouseEvent, id: string) => {
    event.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };
 
  return (
    <div className="hidden lg:flex text-white gap-6 font-Poppin cursor-pointer  flex-col opacity-60 font-medium text-[12px] tracking-widest w-[23%]">
      <a href="#about" onClick={(e) => handleSmoothScroll(e, "about")}  className="flex items-center group  gap-3">
        <hr className={`w-[25px] transition-all ease-in-out duration-500 ${about && 'w-[65px]'}`} /> ABOUT
      </a>
      <a href="#projects" onClick={(e) => handleSmoothScroll(e, "projects")} className="flex items-center gap-3 group cursor-pointer">
        <hr className={`w-[25px] transition-all ease-in-out duration-500 ${projects && 'w-[65px]'}`} /> PROJECTS
      </a>
      <a href="#details" onClick={(e) => handleSmoothScroll(e, "details")} className="flex items-center gap-3 group cursor-pointer uppercase">
        <hr className={`w-[25px] transition-all ease-in-out duration-500 ${details && 'w-[65px]'}`} /> Details
    </a>
    </div>
  )
}

export default Sections
