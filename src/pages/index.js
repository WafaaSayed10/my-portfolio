import Head from "next/head";
import Image from "next/image";
import { RiSendPlaneLine } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { RiNextjsFill } from "react-icons/ri";
import { FiFacebook } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import { FiGithub } from "react-icons/fi";
import { FaHeart } from "react-icons/fa6";
import { FaRegCopyright } from "react-icons/fa";
import { MdOutlineLightMode } from "react-icons/md";
import { IoLanguage } from "react-icons/io5";
import { FiBriefcase } from "react-icons/fi";
import { HiOutlineBriefcase } from "react-icons/hi";
import { LuMessageCircle } from "react-icons/lu";
import { CgFileDocument } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { MdOutlineDarkMode } from "react-icons/md";
import { FiPlusCircle } from "react-icons/fi";
import { useEffect, useState } from 'react';
import { FaWhatsapp } from "react-icons/fa";
import { IoLogoVercel } from "react-icons/io5";
import { FaBootstrap } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaJsSquare } from "react-icons/fa";
import { SiFirebase } from "react-icons/si";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Home() {
  const [darkMode, setDarkMode] = useState('dark');
  const [toggleMenu, setToggleMenu] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [projects, setProjects] = useState([]);
  const [internships, setInternships] = useState([]);
  useEffect(() => {
    fetch('/api/projects')
      .then(res => res.json())
      .then(data => setProjects(data));
  }, []);
  useEffect(() => {
    fetch('/api/internship')
      .then(res => res.json())
      .then(data => setInternships(data));
  }, []);
  useEffect(() => {
    const savedMode = localStorage.getItem('theme');
    if (savedMode === 'dark') {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const toggleTheme = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    document.documentElement.classList.toggle('dark', newMode);
    localStorage.setItem('theme', newMode ? 'dark' : 'light');
  };
  const techIcons = {
    nextjs: <RiNextjsFill className="text-black text-[20px] lg:text-[25px]"/>,
    react: <FaReact className="text-[#0ec0f6] text-[20px]"/>,
    tailwind: <RiTailwindCssFill  className="text-blue-300 text-[20px] lg:text-[25px]"/>,
    vercel: <IoLogoVercel className="text-black text-[20px]"/>,
    bootstrap: <FaBootstrap className="text-[#7c2cf4] text-[20px] lg:text-[25px]"/>,
    firebase: <SiFirebase  className="text-[20px] lg:text-[25px]"/>,
    HTML: <FaHtml5  className="text-[#d74c07] text-[20px] lg:text-[25px]"/>,
    CSS: <FaCss3Alt className="text-[#3e11ef] text-[20px] lg:text-[25px]"/>,
    javascript: <FaJsSquare className="text-[#decf0a] text-[20px] lg:text-[25px]"/>
  };
  const desc= "Front-end Developer specializing in React.js and Next.js with extensive JavaScript experience"
  const descInWords= desc.split(" ")
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  return (
    <>
      <Head>
        <title>Wafaa Sayed | Fornt-end Developer</title>
        <meta name="description" content="Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/fav.png" />
      </Head>
      <nav className={`fixed top-0 left-0 w-full shadow-sm border-b dark:border-gray-700 border-gray-300 backdrop-blur transition-transform duration-300 z-50  flex items-center justify-between px-5 md:px-[200px] m-auto py-[12px] ${showNavbar ? 'translate-y-0' : '-translate-y-full'}`}>
        <a href="#home" className="font-bold bg-gradient-to-r from-purple-400 to-blue-500 text-transparent bg-clip-text cursor-pointer">Wafaa Sayed</a>
        <div className="lg:flex items-center gap-[20px] hidden dark:text-gray-200 text-gray-700">
          <div className="flex items-center gap-[8px]">
            <FiBriefcase className="text-[20px]"/>
            <a href="#experience">My Experience</a>
          </div>
          <div className="flex items-center gap-[8px]">
            <HiOutlineBriefcase className="text-[20px]"/>
            <a href="#work">My Work</a>
          </div>
          <div className="flex items-center gap-[8px]">
            <LuMessageCircle className="text-[20px]"/>
            <a href="#contact">Contact Me</a>
          </div>
          <div className="flex items-center gap-[8px]">
            <CgFileDocument className="text-[20px]"/>
            <a href="/Wafaa-Sayed-Mohamed-CV.pdf" download >Download CV</a>
          </div>
        </div>
        <div className="flex items-center gap-[20px] lg:gap-[30px]">
          {darkMode? 
          <MdOutlineLightMode onClick={toggleTheme} className="text-[22px] text-gray-500 hover:text-gray-300 transition duration-300 cursor-pointer"/>
          :<MdOutlineDarkMode onClick={toggleTheme} className="text-[22px] text-gray-500 hover:text-gray-600 transition duration-300 cursor-pointer"/>
          }
          <div className="flex items-center gap-[8px] py-[8px] px-[15px] text-[12px] dark:text-gray-200 text-gray-700 dark:hover:bg-[#00031942] hover:bg-[#e3e3e3] rounded-[10px] transition duration-300 cursor-pointer">
            <IoLanguage className="text-[20px]"/> EN
          </div>
          <div className="relative block lg:hidden">
            <FiPlusCircle className={toggleMenu? "dark:text-gray-100 text-gray-600" : "dark:text-gray-200 text-gray-700" } onClick={()=>setToggleMenu(!toggleMenu)}/>
            {toggleMenu&&
            <div className="absolute top-9 -right-2 pl-3 pr-20 py-2 dark:bg-[#000319] bg-white z-10 rounded-[8px] text-gray-800 dark:text-gray-200 text-[14px] flex flex-col gap-3 shadow-sm">
              <a href="https://www.facebook.com/wafaa.sayed.56" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 "><FiFacebook className="text-[20px] text-black dark:text-gray-100"/> Facebook</a>
              <a href="https://www.linkedin.com/in/wafaa-sayed10/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2"><FiLinkedin className="text-[20px] text-black dark:text-gray-100"/> Linkedin</a>
              <a href="https://github.com/WafaaSayed10" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2"><FiGithub className="text-[20px] text-black dark:text-gray-100"/> Github</a>
            </div>
            }
          </div>
          <div className="lg:flex items-center gap-[15px] hidden dark:text-gray-200 text-gray-700">
            <a href="https://www.facebook.com/wafaa.sayed.56" target="_blank" rel="noopener noreferrer"><FiFacebook className="text-[20px]"/></a>
            <a href="https://www.linkedin.com/in/wafaa-sayed10/" target="_blank" rel="noopener noreferrer"><FiLinkedin className="text-[20px]"/></a>
            <a href="https://github.com/WafaaSayed10" target="_blank" rel="noopener noreferrer"><FiGithub className="text-[20px]"/></a>
          </div>
        </div>
      </nav>
      <div className="lg:hidden items-center gap-[20px] flex justify-around py-3 text-[12px] dark:text-gray-200 text-gray-700 fixed bottom-0 left-0 w-full shadow-sm border-t dark:border-gray-700 border-gray-300 backdrop-blur transition-transform duration-300 z-50">
        <div className="flex flex-col items-center gap-[3px]">
          <FiBriefcase className="text-[20px]"/>
          <a href="#experience">My Experience</a>
        </div>
        <div className="flex flex-col items-center gap-[3px]">
          <HiOutlineBriefcase className="text-[20px]"/>
          <a href="#work">My Work</a>
        </div>
        <div className="flex flex-col items-center gap-[3px]">
          <LuMessageCircle className="text-[20px]"/>
          <a href="#contact">Contact Me</a>
        </div>
        <div className="flex flex-col items-center gap-[3px]">
          <CgFileDocument className="text-[20px]"/>
          <a href="/Wafaa-Sayed-Mohamed-CV.pdf" download >Download CV</a>
        </div>
      </div>
      <main>
        <header id="home" className="relative h-[530px] sm:h-[580px] lg:h-[680px] text-[#f4f4f5]">
          {darkMode?
            <img src="/images/bg1.jpg" alt="home image" className="w-full h-full "/>
            :<img src="/images/bg2.jpeg" alt="home image" className="w-full h-full "/>
          }
          <div className="absolute top-0 left-0 bottom-0 right-0 flex flex-col justify-center items-center p-[30px]">
            <p className="lg:text-[18px] dark:text-gray-200 text-gray-700">Greetings, my name is</p>
            <h1 className="text-[35px] lg:text-[60px] font-semibold text-gradient-animated w-fit">Wafaa Sayed</h1>
            <p className="text-[30px] lg:text-[70px] dark:from-gray-300 dark:via-gray-100 dark:bg-gradient-to-r dark:to-white bg-gradient-to-b from-gray-900 via-gray-700 to-gray-100 text-transparent bg-clip-text whitespace-nowrap">Front-end <span className="dark:text-gray-100 bg-gradient-to-b from-gray-900 via-gray-500 to-gray-100 text-transparent bg-clip-text">Developer</span></p>
            <div className="flex flex-wrap justify-center gap-[7px]">
              {descInWords.map((word, index)=><motion.span key={index} className=" text-[14px] font-semibold lg:text-[18px] text-center text-gray-700 dark:text-gray-200" 
              initial={{ opacity: 0, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}>{word}</motion.span>)}
            </div>
            <div className="flex flex-col items-center md:justify-center md:flex-row gap-[15px] mt-[30px] w-full">
              <button className="rounded-[20px] border border-gray-300 font-semibold px-[20px] md:px-[30px] py-[10px] w-full md:w-auto dark:text-gray-200 text-black dark:border-gray-600"><a href="https://github.com/WafaaSayed10" target="_blank" rel="noopener noreferrer">Check out my GitHub</a></button>
              <div className="relative rounded-[20px] p-[1px] bg-gradient-to-r from-blue-600 via-purple-600 to-white bg-[length:200%_200%] animate-gradient">
                <a href="mailto:fefesayed522@gmail.com?subject=استفسار&body=..." target="_blank" rel="noopener noreferrer" className="dark:bg-[#000319] bg-gray-100 dark:text-white text-purple-400 rounded-[20px] px-[20px] md:px-[50px] py-[10px] flex items-center gap-[8px]">Contact Me <RiSendPlaneLine className="text-[20px]"/></a>
              </div>
            </div>
          </div>
        </header>
        <section id="work" className="bg-[#fff] dark:bg-[#000319] text-[#f4f4f5] py-[30px] px-[30px] lg:px-7">
          <h2 className="text-[30px] lg:text-[50px] text-center font-semibold mb-[50px] m-auto lg:w-[80%] dark:text-gray-200 text-black">A small selection of <span className="text-blue-500">recent projects</span></h2>
          <div className="grid grid-cols-1 items-stretch lg:grid-cols-2 gap-[40px] m-auto lg:w-[80%] ">
            {projects?.map((project)=><div key={project.id}
              className="flex flex-col dark:hover:bg-[linear-gradient(to_bottom,_transparent,_transparent,_#191936)] hover:bg-[linear-gradient(to_bottom,_transparent,_#ecf5fd)] border dark:border-gray-600 border-gray-200 rounded-[15px] px-[20px] pt-[10px] pb-[25px] hover:scale-[102%] group/card transition duration-300">
              <div className="bg-[#16162F] relative rounded-[15px] px-[8px] pt-[5px] pb-[10px] lg:px-[15px] lg:pt-[10px] lg:pb-[25px]">
                <div className="absolute top-0 left-0 w-full h-1/2 bg-[linear-gradient(to_left,_transparent,_#35357a,_transparent)]"></div>
                <img src={project.image} alt={project.title} className="rounded-[15px] rotate-[4deg] group-hover/card:rotate-0 transition duration-300"/>
              </div>
              <div className="flex flex-col justify-between flex-1">
                <div>
                  <h3 className="mt-[25px] font-semibold text-[18px] lg:text-[25px] dark:text-gray-200 text-black">{project.title}</h3>
                  <p className="mb-[35px] mt-[10px] text-[16px] lg:text-[20px] dark:text-gray-200 text-gray-700 flex gap-[7px] flex-wrap">{project.description.split(" ").map((word,index)=><motion.span initial={{ opacity: 0, y: 0 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }} key={index}>{word}</motion.span>)}</p>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex relative">
                    {project.techStack.map((tech)=>
                    <div key={tech.id} className={`group h-[30px] lg:h-[40px] w-[30px] lg:w-[40px] border dark:border-gray-600 border-gray-200 rounded-full bg-white flex justify-center items-center ${tech.id !==1 ?'-ml-2':''} `}>{techIcons[tech.techTitle]}
                    <div className="absolute bottom-full capitalize mb-2 whitespace-nowrap hidden group-hover:block dark:bg-black bg-white dark:text-white text-black text-xs px-2 py-1 rounded shadow">
                      {tech.techTitle}
                    </div>
                    </div>
                    )}
                  </div>
                  <a href={project.vercel} target="_blank" className="flex items-center gap-2">
                    <p className="text-blue-500 text-[14px] lg:text-[18px]">Live Demo</p>
                    <RiSendPlaneLine className="text-[16px] lg:text-[20px] text-blue-500"/>
                  </a>
                </div>
              </div>
            </div>)}
          </div>
        </section>
        <section id="experience" className="bg-[#fff] dark:bg-[#000319] text-[#f4f4f5] py-[30px] px-[30px] lg:px-7">
          <h2 className="text-[30px] lg:text-[50px] text-center font-semibold mb-[50px] m-auto lg:w-[80%] dark:text-gray-200 text-black">My <span className="text-[#3c83f6]">work experience</span></h2>
          <div className=" grid grid-cols-1 lg:grid-cols-2 gap-[40px] m-auto lg:w-[80%]">
            {internships?.map((intern)=><div key={intern.id} className="relative overflow-hidden border dark:border-gray-800 border-gray-200 rounded-[30px] px-[15px] lg:px-[40px] pt-[30px] pb-[15px] grid grid-cols-1 lg:grid-cols-3 gap-[30px]">
              <div className="flex items-center relative z-10">
                <img src={intern.image} alt={intern.certificate} className="w-[50px] lg:w-full h-[50px] lg:h-[140px] rounded-full"/>
              </div>
              <div className="lg:col-span-2 relative z-10">
                <h3 className="text-[25px] font-semibold leading-none dark:text-gray-200 text-black">{intern.certificate}</h3>
                <p className="mb-[10px] text-gray-400" >{intern.title}</p>
                <p className="text-[14px] dark:text-gray-200 text-gray-700">{intern.description}</p>
                <p className="text-gray-400 text-[14px] mt-[10px]">{intern.date}</p>
              </div>
              <div className="origin-center animate-motion absolute top-0 left-0 h-[40px] w-[50px] rounded-br-full rounded-bl-full bg-purple-300 blur-md opacity-70 shadow-glow-purple " style={{ animationDelay: `${2 * intern.id}s` }}></div>
            </div>)}
          </div>
        </section>
        <section id="contact" className="bg-[#fff] dark:bg-[#000319] text-[#f4f4f5]">
          <div className="flex flex-col justify-center items-center py-[60px] px-[30px] lg:w-[50%] lg:leading-none m-auto text-center">
            <h2 className="text-[30px] lg:text-[50px] text-center font-semibold mb-[30px] m-auto dark:text-gray-200 text-black">Ready to take <span className="bg-gradient-to-r from-purple-100 via-purple-300 to-blue-500 text-transparent bg-clip-text">your</span> digital presence to the next level?</h2>
            <p className="mb-[20px] lg:mb-[40px] dark:text-gray-200 text-gray-500">Reech out to me today and let&apos;s discuss how I can help you achieve your goals.</p>
            <div
              className="
                relative
                rounded-[20px]
                p-[1px]
                bg-gradient-to-r
                from-blue-600
                via-purple-600
                to-white
                bg-[length:200%_200%]
                animate-gradient
              "
            >
              <a href="mailto:fefesayed522@gmail.com?subject=استفسار&body=..." target="_blank" rel="noopener noreferrer"><button className="dark:bg-[#000319] bg-gray-100 dark:text-white text-purple-400 rounded-[20px] px-[20px] lg:px-[50px] py-[10px] flex items-center gap-[8px]">Contact Me <RiSendPlaneLine className="text-[20px]"/></button></a>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-[#fff] dark:bg-[#000319] text-black dark:text-gray-200 flex flex-col lg:flex-row lg:justify-between gap-[20px] px-[30px] lg:px-[70px] pt-[10px] pb-[90px] md:pb-[30px]">
        <p className="flex items-center justify-center gap-2">Made with <FaHeart className="text-red-600"/> by Wafaa Sayed <FaRegCopyright /> 2025</p>
        <div className="flex justify-center items-center gap-5 text-[#f4f4f5] dark:text-[#f4f4f5]">
          <div className="w-[40px] h-[40px] rounded-[5px] flex items-center justify-center bg-gradient-to-t from-blue-400 to-purple-400">
            <a href="https://www.facebook.com/wafaa.sayed.56" target="_blank" rel="noopener noreferrer"><FiFacebook className="text-[20px]"/></a>
          </div>
          <div className="w-[40px] h-[40px] rounded-[5px] flex items-center justify-center bg-gradient-to-t from-blue-400 to-purple-400">
            <a href="https://www.linkedin.com/in/wafaa-sayed10/" target="_blank" rel="noopener noreferrer"><FiLinkedin className="text-[20px] "/></a>
          </div>
          <div className="w-[40px] h-[40px] rounded-[5px] flex items-center justify-center bg-gradient-to-t from-blue-400 to-purple-400">
            <a href="https://github.com/WafaaSayed10" target="_blank" rel="noopener noreferrer"><FiGithub className="text-[20px]"/></a>
          </div>
        </div>
      </footer>
      <div className="fixed bottom-10 right-10 z-50 bg-blue-500 text-white p-3 rounded-full shadow-lg">
        <a href="https://wa.me/201010620098?text=Hello" target="_blank" rel="noopener noreferrer" className="block">
          <FaWhatsapp size={28} />
        </a>
      </div>
    </>
  );
}
