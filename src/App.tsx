import { useState, useEffect } from 'react';
import { Menu, X, Code, Briefcase, User, MessageSquare, ArrowUpRight } from 'lucide-react';

const ProjectCard = ({ title, description, image, isExpanded, onHover, color }) => {
  return (
    <div
      onMouseEnter={onHover}
      className={`rounded-3xl p-8 transition-all duration-500 ease-in-out cursor-pointer relative overflow-hidden border border-black ${isExpanded ? 'flex-[2] bg-white' : 'flex-1 bg-opacity-40'
        }`}
      style={{
        backgroundColor: isExpanded ? 'white' : color,
      }}
    >
      <div className="flex flex-col h-full justify-between">
        <div>
          <h3 className={`text-2xl font-semibold mb-4 transition-colors duration-500 ${isExpanded ? 'text-gray-800' : 'text-gray-700'
            }`}>
            {title}
          </h3>

          <p className={`text-gray-600 mb-6 transition-all duration-500 ${isExpanded ? 'opacity-100 max-h-40' : 'opacity-0 max-h-0 overflow-hidden'
            }`}>
            {description}
          </p>
        </div>

        {isExpanded && image && (
          <div className="mb-6 transition-all duration-500">
            <img
              src={image}
              alt={title}
              className="w-full h-48 object-cover rounded-2xl"
            />
          </div>
        )}

        <div className="flex items-center justify-between">
          <span className={`font-medium transition-colors duration-500 ${isExpanded ? 'text-gray-700' : 'text-gray-600'
            }`}>
            Read More
          </span>
          <div className={`rounded-full p-2 transition-all duration-500 border ${isExpanded ? 'bg-[#f58b05]' : 'bg-white'
            }`}>
            <ArrowUpRight className={`w-5 h-5 transition-colors duration-500 ${isExpanded ? 'text-black' : 'text-gray-600'
              }`} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [projectHoveredIndex, setProjectHoveredIndex] = useState(0);
  const [skillsHoveredIndex, setSkillsHoveredIndex] = useState(0);


  const expertiseData = [
    {
      title: "FRONT-END",
      skills: [
        "HTML",
        "CSS",
        "Bootstrap",
        "Angular"
      ],
    },
    {
      title: "BACK-END",
      skills: [
        "PHP",
        "Java",
        "C, C#",
        "Python",
        "NEXT.js"
      ],
    },
    {
      title: "DATABASE",
      skills: [
        "MySQL",
      ],
    },
    {
      title: "TOOLS",
      skills: [
        "Figma",
        "MySQL Workbench",
        "phpMyAdmin",
        "Postman",
        "Unity",
        "GitHub",
      ],
    },
    {
      title: "GRAPHIC TOOLS",
      skills: [
        "Blender",
      ],
    },
    {
      title: "Language",
      skills: [
        "Thai",
        "English (TOEIC:665)",
        "Chinese",
      ],
    }
  ];

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce web application built with React, Node.js, and MongoDB. Features include user authentication, product management, shopping cart, and payment integration.',
      image: '/image/project1.jpg',
      color: '#c8eef7',
    },
    {
      title: 'AI Chatbot Assistant',
      description: 'An intelligent chatbot powered by machine learning that can answer customer queries, provide recommendations, and handle support tickets automatically.',
      image: '/image/project2.jpg',
      color: '#ffe485',
    },
    {
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website showcasing projects and skills. Built with React and Tailwind CSS with smooth animations and interactive elements.',
      image: '/image/project3.jpg',
      color: '#fed14c',
    },
  ];

  const skills = [
    {
      title: 'Coding',
      description: 'A full-stack e-commerce web application built with React, Node.js, and MongoDB. Features include user authentication, product management, shopping cart, and payment integration.',
      image: '/image/project1.jpg',
      color: '#c8eef7',
    },
    {
      title: 'Language',
      description: 'An intelligent chatbot powered by machine learning that can answer customer queries, provide recommendations, and handle support tickets automatically.',
      image: '/image/project2.jpg',
      color: '#ffe485',
    },
    {
      title: 'Soft Skills',
      description: 'A modern, responsive portfolio website showcasing projects and skills. Built with React and Tailwind CSS with smooth animations and interactive elements.',
      image: '/image/project3.jpg',
      color: '#fed14c',
    },
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'activity', 'skills', 'project', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home', icon: User },
    { id: 'about', label: 'About', icon: User },
    { id: 'activity', label: 'Activity', icon: Briefcase },
    { id: 'skills', label: 'Skills', icon: Code },
    { id: 'project', label: 'Project', icon: Code },
    { id: 'contact', label: 'Contact', icon: MessageSquare },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-[#7fbbbd] border-t border-b border-black z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl text-black">
              Portfolio
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`transition-colors duration-300 ${activeSection === item.id
                    ? 'text-black underline decoration-black underline-offset-6 decoration-3'
                    : 'text-black hover:text-black'
                    }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-black"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-orange-100 backdrop-blur-md">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`w-full flex items-center space-x-3 px-3 py-2 rounded-md transition-colors duration-300 ${activeSection === item.id
                      ? 'bg-orange-100 text-red border'
                      : 'text-black hover:bg-orange-200'
                      }`}
                  >
                    <Icon size={20} />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </nav>

      {/* Home Section */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-16">
        <div className="text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-black mb-6">
            Hi, I'm <span className="text-black">Piyamon</span>
          </h1>
          <p className="text-xl md:text-2xl text-black mb-8">
            Full Stack Developer & Designer
          </p>
          <button
            onClick={() => scrollToSection('contact')}
            className="bg-[#f58b05] border px-6 py-4 text-black rounded-full font-semibold hover:-translate-y-[2px] hover:shadow-[2px_2px_0_#000] transition-all duration-300 text-sm"
          >
            Get In Touch
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-8 text-center">
            <span className="text-[#ffe221] mr-2">✦</span>
            About Me
            <span className="text-[#ffe221] ml-2">✦</span>
          </h2>


          <div className="flex flex-col md:flex-row items-center gap-8 ">
            <div className="w-full md:w-1/2 flex justify-center">
              <img
                src="/image/character.png"
                alt="Profile"
                className="w-[2400px] max-w-md object-cover rounded-xl animate-bounce"
              />
            </div>
            <div className="w-full md:w-1/2 rounded-2xl p-8">
              <p className="text-black text-lg leading-relaxed mb-6">
                I'm a Computer Engineering student passionate about AI, Web Development, and UX/UI Design.
                I enjoy building practical projects that combine clean code, data-driven logic, and modern UI.
              </p>
              <p className="text-black text-lg leading-relaxed">
                I'm an open-minded learner who thrives in new environments and enjoys connecting with people.
                Exploring different teams and contexts has sharpened my communication, while I continue to improve
                my coding skills through practice, feedback, and real-world projects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Activity Section */}
      <section id="activity" className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-6xl w-full">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-8 text-center">
            <span className="text-[#ffe221] mr-2">✦</span>
            Activity
            <span className="text-[#ffe221] ml-2">✦</span>
          </h2>


          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-black p-6 flex gap-6">
              <img
                src="/image/India.jpeg"
                alt="India Workshop"
                className="w-48 h-36 object-cover rounded-xl flex-shrink-0"
              />
              <div className="flex flex-col justify-center">
                <h3 className="font-bold text-xl text-gray-900 mb-3">
                  AI-DRIVEN INNOVATIONS at IIT Gandhinagar, Gujarat, India
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  Attended Indo-Thailand Workshop on AI-DRIVEN INNOVATIONS arranged by IIT
                </p>
                <div className="flex gap-2">
                  <a
                    href="https://youtu.be/dtPujzeNN6A?si=LUGys61p_7mdHoUc" target="_blank"
                    rel="noopener noreferrer"
                    className="bg-red-400 border px-4 py-2 text-black rounded-full font-semibold hover:-translate-y-[2px] hover:shadow-[2px_2px_0_#000] transition-all duration-300 text-sm"
                  >
                    Watch Vlog
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-black p-6 flex gap-6">
              <img
                src="/image/icp.jpeg"
                alt="ICP Workshop"
                className="w-48 h-36 object-cover rounded-xl flex-shrink-0"
              />
              <div className="flex flex-col justify-center">
                <h3 className="font-bold text-xl text-gray-900 mb-3">
                  Attended Chain Fusion event arranged by ICP at FYI center, Thailand
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  Developed a foundational understanding of blockchain concepts and applications
                </p>
              </div>
            </div>

            <div className="rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-black p-6 flex gap-6">
              <img
                src="/image/engineer.jpeg"
                alt="Engineering Expo"
                className="w-48 h-36 object-cover rounded-xl flex-shrink-0"
              />
              <div className="flex flex-col justify-center">
                <h3 className="font-bold text-xl text-gray-900 mb-3">
                  The International Engineering EXPO 2024
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  Worked in a multicultural team, handling registrations and assisting foreign participants
                </p>
              </div>
            </div>

            <div className="rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-black p-6 flex gap-6">
              <img
                src="/image/intern.jpg"
                alt="Internship"
                className="w-48 h-36 object-cover rounded-xl flex-shrink-0"
              />
              <div className="flex flex-col justify-center">
                <h3 className="font-bold text-xl text-gray-900 mb-3">
                  Ananda Development Internship at FYI Center, Khlong Toei, Bangkok
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  Participated in the IT department developing web applications using C# for backend services and Angular for frontend interfaces
                </p>
              </div>
            </div>

            <div className="rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-black p-6 flex gap-6">
              <img
                src="/image/kmutt.png"
                alt="Hackathon"
                className="w-48 h-36 object-cover rounded-xl flex-shrink-0"
              />
              <div className="flex flex-col justify-center">
                <h3 className="font-bold text-xl text-gray-900 mb-3">
                  Attended Cyber Warrior Hackathon 2025
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  Developed new knowledge about cyber security and participated in joining hackathon
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-7xl w-full">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-8 text-center">
            <span className="text-[#ffe221] mr-2">✦</span>
            Skills
            <span className="text-[#ffe221] ml-2">✦</span>
          </h2>


          {/* Expandable Skills Cards */}
          <div className="flex gap-6 h-[500px] mb-8">
            {skills.map((item, index) => (
              <ProjectCard
                key={index}
                title={item.title}
                description={item.description}
                image={item.image}
                color={item.color}
                isExpanded={skillsHoveredIndex === index}
                onHover={() => setSkillsHoveredIndex(index)}
              />
            ))}

          </div>
        </div>
      </section>



      {/* Project Section */}
      <section id="project" className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-7xl w-full">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-8 text-center">
            <span className="text-[#ffe221] mr-2">✦</span>
            Projects
            <span className="text-[#ffe221] ml-2">✦</span>
          </h2>


          {/* Expandable Project Cards */}
          <div className="flex gap-6 h-[500px] mb-8">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                image={project.image}
                color={project.color}
                isExpanded={projectHoveredIndex === index}
                onHover={() => setProjectHoveredIndex(index)}
              />
            ))}

          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-2xl w-full">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-8 text-center">
            <span className="text-[#ffe221] mr-2">✦</span>
            Contact
            <span className="text-[#ffe221] ml-2">✦</span>
          </h2>

          <div className="rounded-2xl p-8 border shadow-lg hover:shadow-2xl transition-all duration-300 border-black">
            <div className="flex justify-center">
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <img
                    src="/image/gmail.png"
                    alt="Gmail"
                    className="w-8 h-8"
                  />
                  <a
                    href="#"
                    className="text-black hover:text-red-400 transition-colors duration-300"
                  >
                    piyamon.chuenpaew@gmail.com
                  </a>
                </li>

                <li className="flex items-center gap-3">
                  <img
                    src="/image/linkedin.png"
                    alt="LinkedIn"
                    className="w-8 h-8"
                  />
                  <a
                    href="https://www.linkedin.com/in/piyamon-chuenpaew/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black hover:text-red-400 transition-colors duration-300"
                  >
                    https://www.linkedin.com/in/piyamon-chuenpaew/
                  </a>
                </li>

                <li className="flex items-center gap-3">
                  <img
                    src="/image/github.png"
                    alt="GitHub"
                    className="w-8 h-8"
                  />
                  <a
                    href="https://github.com/Piyamon-Bt"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black hover:text-red-400 transition-colors duration-300"
                  >
                    https://github.com/Piyamon-Bt
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <img
                    src="/image/gitlab.png"
                    alt="GitLab"
                    className="w-8 h-8"
                  />
                  <a
                    href="https://gitlab.com/piyamon.chuenpaew"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black hover:text-red-400 transition-colors duration-300"
                  >
                    https://gitlab.com/piyamon.chuenpaew
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900/80 backdrop-blur-md border-t border-purple-500/20 py-6">
        <div className="max-w-7xl mx-auto px-4 text-center text-gray-400">
          <p>&copy; Copyright@2025: Designed by Piyamon</p>
        </div>
      </footer>
    </div>
  );
}