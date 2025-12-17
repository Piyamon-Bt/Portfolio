import { useState, useEffect, type ReactNode } from 'react';
import {
  Menu,
  X,
  Code,
  Briefcase,
  User,
  MessageSquare,
  Mail,
  Linkedin,
  Github,
  ExternalLink,
  Sparkles,
  Calendar,
  Plus,
  Star,
} from 'lucide-react';

// ================== Types ==================
type CardProps = {
  title: string;
  description: string;
  color: string;
  isExpanded: boolean;
  onClick?: () => void;
  onHover?: () => void;
  github?: string;
};

type MobileCardProps = {
  title: string;
  description: string;
  color: string;
  github?: string;
};

type ActivityCardProps = {
  image: string;
  title: string;
  description: string;
  link?: string;
  color: string;
  date: string;
};

type TimelineItem = {
  period: string;
  title: string;
  subtitle?: string;
};

type SoftwareItem = {
  label: string;
  brand?: string;
  level: number; // 0-5
  badge: string; // short text badge
};

type HobbyItem = {
  label: string;
  icon: ReactNode;
};

// ================== Card Component ==================
const Card = ({ title, description, color, isExpanded, onClick, onHover, github }: CardProps) => {
  return (
    <div
      onMouseEnter={onHover}
      onClick={onClick}
      className={`rounded-3xl p-8 transition-all duration-700 ease-out cursor-pointer relative overflow-hidden ${isExpanded ? 'shadow-2xl scale-105' : 'shadow-lg hover:shadow-xl hover:scale-105'
        }`}
      style={{
        backgroundColor: isExpanded ? 'white' : color,
        minHeight: '420px',
        width: '340px',
      }}
    >
      <div className="flex flex-col h-full justify-between">
        <div>
          <h3
            className={`text-2xl font-bold mb-4 transition-all duration-500 ${isExpanded ? 'text-gray-900' : 'text-gray-800'
              }`}
          >
            {title}
          </h3>

          <div
            className={`text-gray-600 transition-all duration-700 whitespace-pre-line ${isExpanded ? 'opacity-100 max-h-[300px] overflow-y-auto pr-2' : 'opacity-0 max-h-0 overflow-hidden'
              }`}
          >
            {description}
          </div>
        </div>

        <div className="flex items-center justify-between mt-6">
          {github && isExpanded ? (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-gray-700 to-gray-900 px-4 py-2 text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300 text-sm hover:gap-3"
            >
              <Github size={16} />
              View Code
            </a>
          ) : (
            <span
              className={`font-semibold text-sm transition-all duration-500 ${isExpanded ? 'text-orange-500' : 'text-gray-700'
                }`}
            >
              {isExpanded ? '✓ Expanded' : 'View Details'}
            </span>
          )}

          <div
            className={`rounded-full p-2.5 transition-all duration-500 ${isExpanded ? 'bg-gradient-to-r from-orange-400 to-pink-500 rotate-45' : 'bg-white/80 hover:bg-white'
              }`}
          >
            <Sparkles className={`w-5 h-5 ${isExpanded ? 'text-white' : 'text-gray-700'}`} />
          </div>
        </div>
      </div>
    </div>
  );
};

// ================== Mobile Card ==================
const MobileCard = ({ title, description, color, github }: MobileCardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      onClick={() => setIsOpen(!isOpen)}
      className="rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
      style={{ backgroundColor: isOpen ? 'white' : color }}
    >
      <h3 className="text-xl font-bold mb-3 text-gray-900">{title}</h3>

      <div
        className={`text-gray-600 text-sm whitespace-pre-line transition-all duration-500 ${isOpen ? 'max-h-96 opacity-100 mt-3' : 'max-h-0 opacity-0 overflow-hidden'
          }`}
      >
        {description}
      </div>

      {github && isOpen && (
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="inline-flex items-center gap-2 bg-gradient-to-r from-gray-700 to-gray-900 px-4 py-2 text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300 text-sm mt-4"
        >
          <Github size={16} />
          View Code
        </a>
      )}

      <div className="flex items-center justify-end mt-4">
        <span className="text-sm font-semibold text-orange-500">{isOpen ? 'Tap to close' : 'Tap to expand'}</span>
      </div>
    </div>
  );
};

// ================== Activity Card ==================
const ActivityCard = ({ image, title, description, link, color, date }: ActivityCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white"
    >
      {/* Certificate-style decorative corners */}
      <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-orange-300 opacity-30 rounded-tl-3xl" />
      <div className="absolute top-0 right-0 w-16 h-16 border-t-4 border-r-4 border-pink-300 opacity-30 rounded-tr-3xl" />
      <div className="absolute bottom-0 left-0 w-16 h-16 border-b-4 border-l-4 border-orange-300 opacity-30 rounded-bl-3xl" />
      <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-pink-300 opacity-30 rounded-br-3xl" />

      {/* Decorative sparkles */}
      <div
        className={`absolute top-4 right-4 transition-all duration-500 ${isHovered ? 'scale-125 rotate-12' : 'scale-100'
          }`}
      >
        <Sparkles className="w-5 h-5 text-orange-400" />
      </div>

      <div className="relative overflow-hidden h-56">
        <div className="absolute inset-0 opacity-20" style={{ backgroundColor: color }} />

        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

        {/* Event date badge (hover -> show date) */}
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-2 shadow-lg">
          <Calendar className="w-4 h-4 text-orange-500" />
          <span className="text-xs font-semibold text-gray-700 transition-all duration-300">
            {isHovered ? date : 'Event'}
          </span>
        </div>
      </div>

      <div className="p-6 relative">
        <h3 className="font-bold text-xl text-gray-900 mb-3 leading-tight group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-orange-500 group-hover:to-pink-500 group-hover:bg-clip-text transition-all duration-300">
          {title}
        </h3>

        <div className="w-12 h-1 bg-gradient-to-r from-orange-400 to-pink-500 rounded-full mb-3 group-hover:w-20 transition-all duration-500" />

        <p className="text-sm text-gray-600 leading-relaxed mb-5 min-h-[60px]">{description}</p>

        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-400 to-pink-500 px-5 py-2.5 text-white rounded-full font-semibold hover:shadow-xl transition-all duration-300 text-sm hover:gap-3 hover:px-6 group/button"
          >
            <span>Watch Vlog</span>
            <ExternalLink size={16} className="group-hover/button:rotate-12 transition-transform duration-300" />
          </a>
        )}
      </div>
    </div>
  );
};

// ================== About (CV Style) Helpers ==================
function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <h3 className="text-2xl md:text-3xl font-extrabold tracking-wide text-black uppercase">
      {children}
    </h3>
  );
}

function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <div className="space-y-6">
      {items.map((it, idx) => (
        <div key={idx} className="flex gap-3">
          <div className="pt-1">
            <Plus className="w-5 h-5 text-orange-400" />
          </div>
          <div>
            <div className="text-sm text-gray-500 font-semibold">{it.period}</div>
            <div className="text-lg font-bold text-gray-900">{it.title}</div>
            {it.subtitle && <div className="text-sm text-gray-600 leading-relaxed whitespace-pre-line">{it.subtitle}</div>}
          </div>
        </div>
      ))}
    </div>
  );
}

function StarRating({ value }: { value: number }) {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${i < value ? 'fill-pink-500 text-pink-500' : 'text-pink-200'}`}
        />
      ))}
    </div>
  );
}

function SoftwareGrid({ items }: { items: SoftwareItem[] }) {
  return (
    <div className="space-y-4">
      {items.map((s, idx) => (
        <div key={idx} className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-10 h-10 rounded-xl bg-indigo-900 text-white flex items-center justify-center font-bold">
              {s.badge}
            </div>
            <div className="min-w-0">
              <div className="text-sm text-gray-500 leading-none">{s.brand ?? ''}</div>
              <div className="font-semibold text-gray-900 truncate">{s.label}</div>
            </div>
          </div>
          <StarRating value={s.level} />
        </div>
      ))}
    </div>
  );
}

// ================== Main Component ==================
export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [projectIndex, setProjectIndex] = useState<number | null>(0);
  const [skillIndex, setSkillIndex] = useState(1);

  const projects = [
    {
      title: 'Carefeine',
      description:
        'An application that recommends appropriate caffeine intake for general users, individuals undergoing therapy, and those with caffeine restrictions.\n\n• Designed intuitive UX/UI\n• Responsible for Graphic Design\n• Implemented user-friendly interface',
      color: '#FFE4E4',
      github: 'https://github.com/Ing3567/CareFeine.git',
    },
    {
      title: 'SilentVoice',
      description:
        'A ML program to detect American sign language alphabet with text-to-speech output.\n\n• Prepared data-preprocessing pipeline using MediaPipe\n• Trained custom ML model\n• Implemented real-time detection',
      color: '#FFF5E0',
      github: 'https://github.com/FolkJustSleep/SilentVoice.git',
    },
    {
      title: 'PrecisionPGx',
      description:
        'A web application that predicts pharmacogenomics output from gene data.\n\n• Responsible for backend development\n• Created report and note API for prediction summary\n• Built with NEXT.js framework',
      color: '#E8FFE8',
      github: 'https://github.com/YKUNAKORN/PrecisionPGx.git',
    },
    {
      title: 'Pinyin Converter',
      description:
        'Built an ML-powered API that transliterates Chinese text into Pinyin.\n\n• Helps beginner learners practice spoken Chinese\n• Character and sentence support\n• RESTful API implementation',
      color: '#F0E6FF',
      github: 'https://github.com/Piyamon-Bt/ML-pinyin-converter.git',
    },
    {
      title: 'Web Scrapping',
      description:
        'Developed an academic project that collects data via web scraping with BeautifulSoup and presents insights through data visualization',
      color: '#FFE4E4',
      github: 'https://github.com/Piyamon-Bt/Web-Scrapping.git',
    },
    {
      title: 'Image Processing Self-Study',
      description:
        'Studied core image processing concepts and implemented basic techniques using NumPy, OpenCV, Pillow, and Matplotlib.',
      color: '#FFF5E0',
      github: 'https://github.com/Piyamon-Bt/image-processing-study.git',
    },
  ];

  const skills = [
    {
      title: 'Technical Skills',
      description:
        'Front-End: Bootstrap, React, Angular, Tailwind CSS\n\nBack-End: PHP, Java, C, JavaScript, C#, Python, NEXT.js, Node.js\n\nDatabase: MySQL, Supabase, PostgreSQL\n\nTools: Figma, phpMyAdmin, Postman, Locust, Unity, GitHub, GitLab\n\nGraphic Tools: Blender',
      color: '#FFE4E4',
    },
    {
      title: 'Languages',
      description:
        'English: Professional working proficiency\n• TOEIC Score: 665\n• Technical documentation\n• Business communication\n\nChinese: HSK Level 4\n• Reading and writing\n• Basic conversation\n• Cultural understanding',
      color: '#E0F2FF',
    },
    {
      title: 'Soft Skills',
      description:
        'Communication: Strong verbal and written skills across multicultural teams\n\nProblem Solving: Analytical thinking and creative solution development\n\nTeamwork: Collaborative approach with diverse groups\n\nAdaptability: Quick learner in new environments\n\nLeadership: Project coordination and task delegation',
      color: '#FFF5E0',
    },
  ];

  const activities = [
    {
      image: '/image/engineer.jpeg',
      title: 'International Engineering EXPO 2024',
      description: 'Worked in multicultural team, handling registrations and assisting foreign participants',
      color: '#F0E6FF',
      date: 'July 2024',
    },
    {
      image: '/image/icp.jpeg',
      title: 'Chain Fusion Event at FYI Center',
      description:
        'Attended blockchain workshop arranged by ICP, developing foundational understanding of blockchain concepts',
      color: '#E0F2FF',
      date: 'November 2024',
    },
    {
      image: '/image/India.jpeg',
      title: 'AI-DRIVEN INNOVATIONS at IIT Gandhinagar',
      description:
        'Received a scholarship to attend the Indo–Thailand Workshop on AI-Driven Innovations, organized by IIT Gandhinagar, Gujarat, India',
      link: 'https://youtu.be/dtPujzeNN6A?si=LUGys61p_7mdHoUc',
      color: '#FFE4E4',
      date: 'March 2025',
    },
    {
      image: '/image/metaverse.JPG',
      title: 'SWU Metaverse Workshop',
      description: 'Contributed to SWU Metaverse competition and gained proficiency in Blender for 3D creation',
      color: '#FFE4E4',
      date: 'March 2025',
    },
    {
      image: '/image/kmutt.png',
      title: 'Cyber Warrior Hackathon 2025',
      description: 'Participated in cybersecurity hackathon, developing knowledge in security practices',
      color: '#E8FFE8',
      date: 'June 2025',
    },
    {
      image: '/image/HTcon.png',
      title: 'Healthcare Innovation Presentation',
      description: 'Delivered oral presentation on ASL Alphabet Detection research demonstrating AI applications',
      color: '#E0F2FF',
      date: 'November 2025',
    },
  ];

  // ===== About CV-style data =====
  const education: TimelineItem[] = [
    {
      period: '2013 - 2022',
      title: 'Saint Joseph Bangna School (SJB)',
      subtitle: 'English Program, Science-Math',
    },
    {
      period: '2023 - Present',
      title: 'Srinakharinwirot University (SWU)',
      subtitle: 'Engineering, Computer Engineering',
    },
  ];

  const experience: TimelineItem[] = [
    {
      period: 'May - Jul 2024',
      title: 'Ananda Development Internship',
      subtitle: 'IT department internship at FYI Center\nC# backend services + Angular frontend',
    },
  ];

 const position: TimelineItem[] = [
  { period: '', title: 'AI Engineer' },
  { period: '', title: 'Software Engineer' },
  { period: '', title: 'DevOps' },
  { period: '', title: 'Full Stack Developer' },
  { period: '', title: 'Data Analyst' },
  { period: '', title: 'Data Scientist' },
];

  const scrollToSection = (sectionId: string) => {
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
    { id: 'project', label: 'Projects', icon: Code },
    { id: 'contact', label: 'Contact', icon: MessageSquare },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-blue-50 via-purple-50 to-orange-50">
      {/* ✅ Vite ใช้ <style> ไม่ใช้ <style jsx> */}
      <style>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-lg shadow-sm z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
              Myfolio
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`transition-all duration-300 font-medium relative ${activeSection === item.id ? 'text-gray-900' : 'text-gray-600 hover:text-gray-900'
                    }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-orange-400 to-pink-500" />
                  )}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-600 hover:text-gray-900 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-lg border-t border-gray-100">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors duration-300 ${activeSection === item.id
                        ? 'bg-gradient-to-r from-orange-50 to-pink-50 text-gray-900'
                        : 'text-gray-600 hover:bg-gray-50'
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
      <section id="home" className="min-h-screen flex items-center justify-center pt-16 px-4">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-6 inline-block">
            <span className="px-4 py-2 bg-gradient-to-r from-orange-100 to-pink-100 rounded-full text-sm font-semibold text-gray-700">
              Welcome to my portfolio ✨
            </span>
          </div>
          <h1 className="text-6xl md:text-8xl font-bold text-gray-900 mb-6 leading-tight">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">Piyamon</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
            Full Stack Developer & Designer
            <br />
            <span className="text-lg text-gray-500">Creating beautiful digital experiences</span>
          </p>
          <button
            onClick={() => scrollToSection('contact')}
            className="bg-gradient-to-r from-orange-400 to-pink-500 px-8 py-4 text-white rounded-full font-semibold hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:scale-105"
          >
            Get In Touch →
          </button>
        </div>
      </section>

      {/* ✅ About Section (CV Style like your image) */}
      <section id="about" className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-7xl w-full">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-12 text-center">
            <span className="inline-block animate-pulse mr-3">✦</span>
            About Me
            <span className="inline-block animate-pulse ml-3">✦</span>
          </h2>

          <div className="p-8 md:p-2 m-[120px]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
              {/* LEFT COLUMN */}
              <div className="space-y-10">
                <div>
                  <SectionTitle>EDUCATION</SectionTitle>
                  <div className="mt-5">
                    <Timeline items={education} />
                  </div>
                </div>

                <div>
                  <SectionTitle>EXPERIENCE</SectionTitle>
                  <div className="mt-5">
                    <Timeline items={experience} />
                  </div>
                </div>
              </div>

              {/* RIGHT COLUMN */}
              <div className="flex justify-center space-y-10 ml-auto ">
                <div>
                  <SectionTitle>Target Position</SectionTitle>
                  <div className="mt-5">
                    <Timeline items={position} />
                  </div>
                </div>
                {/* <div>
                  <SectionTitle>HOBBIES</SectionTitle>
                  <div className="mt-5 grid grid-cols-2 sm:grid-cols-3 gap-6">
                    {hobbies.map((h, idx) => (
                      <div key={idx} className="text-center">
                        <div className="mx-auto w-16 h-16 flex items-center justify-center">
                          {h.icon}
                        </div>
                        <div className="mt-2 text-sm font-semibold text-indigo-900">{h.label}</div>
                      </div>
                    ))}
                  </div>
                </div> */}
              </div>
              {/* END RIGHT */}
            </div>
          </div>
        </div>
      </section>

      {/* Activity Section */}
      <section id="activity" className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-7xl w-full">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-12 text-center">
            <span className="inline-block animate-pulse mr-3">✦</span>
            Activities
            <span className="inline-block animate-pulse ml-3">✦</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activities.map((activity, index) => (
              <ActivityCard
                key={index}
                image={activity.image}
                title={activity.title}
                description={activity.description}
                link={activity.link}
                color={activity.color}
                date={activity.date}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-7xl w-full">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-12 text-center">
            <span className="inline-block animate-pulse mr-3">✦</span>
            Skills
            <span className="inline-block animate-pulse ml-3">✦</span>
          </h2>

          {/* Desktop */}
          <div className="hidden md:flex justify-center items-center gap-6">
            {skills.map((item, index) => (
              <Card
                key={index}
                title={item.title}
                description={item.description}
                color={item.color}
                isExpanded={skillIndex === index}
                onHover={() => setSkillIndex(index)}
              />
            ))}
          </div>

          {/* Mobile */}
          <div className="md:hidden grid grid-cols-1 gap-6">
            {skills.map((skill, index) => (
              <MobileCard key={index} title={skill.title} description={skill.description} color={skill.color} />
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="project" className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-7xl w-full">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-12 text-center">
            <span className="inline-block animate-pulse mr-3">✦</span>
            Projects
            <span className="inline-block animate-pulse ml-3">✦</span>
          </h2>

          {/* Desktop */}
          <div className="hidden md:block">
            <div className="flex gap-6 overflow-x-auto scrollbar-hide pb-8 px-4 snap-x snap-mandatory">
              {projects.map((project, index) => (
                <div key={index} className="flex-shrink-0 snap-center">
                  <Card
                    title={project.title}
                    description={project.description}
                    color={project.color}
                    isExpanded={projectIndex === index}
                    onClick={() => setProjectIndex(projectIndex === index ? null : index)}
                    github={project.github}
                  />
                </div>
              ))}
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-4">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setProjectIndex(index)}
                  className={`transition-all duration-300 rounded-full ${projectIndex === index ? 'w-8 h-2 bg-gradient-to-r from-orange-400 to-pink-500' : 'w-2 h-2 bg-gray-300 hover:bg-gray-400'
                    }`}
                />
              ))}
            </div>
          </div>

          {/* Mobile */}
          <div className="md:hidden grid grid-cols-1 gap-6">
            {projects.map((project, index) => (
              <MobileCard
                key={index}
                title={project.title}
                description={project.description}
                color={project.color}
                github={project.github}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-4xl w-full">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-12 text-center">
            <span className="inline-block animate-pulse mr-3">✦</span>
            Get In Touch
            <span className="inline-block animate-pulse ml-3">✦</span>
          </h2>

          <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-10 shadow-xl">
            <p className="text-center text-gray-600 mb-10 text-lg">Let's connect and create something amazing together!</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <a
                href="mailto:piyamon.chuenpaew@gmail.com"
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-orange-50 to-pink-50 p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-pink-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                <div className="flex items-center gap-4">
                  <div className="bg-gradient-to-r from-orange-400 to-pink-500 p-3 rounded-xl group-hover:scale-110 transition-transform duration-300">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Email</p>
                    <p className="text-sm text-gray-600 break-all">piyamon.chuenpaew@gmail.com</p>
                  </div>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/piyamon-chuenpaew/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                <div className="flex items-center gap-4">
                  <div className="bg-gradient-to-r from-blue-400 to-indigo-500 p-3 rounded-xl group-hover:scale-110 transition-transform duration-300">
                    <Linkedin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">LinkedIn</p>
                    <p className="text-sm text-gray-600">piyamon-chuenpaew</p>
                  </div>
                </div>
              </a>

              <a
                href="https://github.com/Piyamon-Bt"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-50 to-slate-50 p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-gray-700 to-slate-700 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                <div className="flex items-center gap-4">
                  <div className="bg-gradient-to-r from-gray-700 to-slate-700 p-3 rounded-xl group-hover:scale-110 transition-transform duration-300">
                    <Github className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">GitHub</p>
                    <p className="text-sm text-gray-600">Piyamon-Bt</p>
                  </div>
                </div>
              </a>

              <a
                href="https://gitlab.com/piyamon.chuenpaew"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-orange-50 to-amber-50 p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-amber-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                <div className="flex items-center gap-4">
                  <div className="bg-gradient-to-r from-orange-600 to-amber-600 p-3 rounded-xl group-hover:scale-110 transition-transform duration-300">
                    <Code className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">GitLab</p>
                    <p className="text-sm text-gray-600">piyamon.chuenpaew</p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-900 to-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-300 mb-2">Made by Piyamon</p>
          <p className="text-gray-500 text-sm">&copy; 2025 All rights reserved</p>
        </div>
      </footer>
    </div>
  );
}
