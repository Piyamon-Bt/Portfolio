import React from "react";

const softwares = ["Ps", "Ai", "Ae", "Id", "Blender"];

const abilities = [
  {
    label: "Hand & digital drawing",
    icon: "🖊️",
  },
  {
    label: "English speaking",
    icon: "💬",
  },
  {
    label: "Teamworking",
    icon: "👥",
  },
  {
    label: "Brainstorming",
    icon: "💡",
  },
];

const interests = [
  { label: "Reading", icon: "📚" },
  { label: "Drawing", icon: "✏️" },
  { label: "Gaming", icon: "🎮" },
  { label: "Researching", icon: "🔍" },
];

const educations = [
  {
    date: "3/2021",
    title: "GRADUATED",
    school: "University of Architecture\nHo Chi Minh City",
  },
  {
    date: "5/2024",
    title: "GRADUATED",
    school: "INDIECAT 3D BLENDER",
  },
];

const experiences = [
  {
    company: "OZAMA GROUP",
    role: "Graphic designer",
    date: "6/2023 – 10/2023",
    desc: "POD products design",
  },
  {
    company: "3 RÂU HOUSE",
    role: "Graphic designer – Leader",
    date: "11/2022 – 2/2024",
    desc: "Manage project plan, control quality of project.\nDesign & layout POSM, social media posts.\nSupport creative team brainstorming campaigns & events.",
  },
  {
    company: "24H STATION",
    role: "Graphic designer",
    date: "10/2023 – 2/2024",
    desc: "Manage project plan, control quality of project.\nDesign POSM, social media posts.",
  },
  {
    company: "BOMINES",
    role: "Graphic designer",
    date: "10/2023",
    desc: "Design social banners for online platforms.",
  },
  {
    company: "RỪA VÀNG",
    role: "Illustrator",
    date: "2022 – 2024",
    desc: "Drawing comics for children magazines.",
  },
  {
    company: "VANI JUICE",
    role: "Graphic design freelancer",
    date: "2/2024 – 5/2024",
    desc: "Design banners for Shopee, Facebook, website.",
  },
];

const SkillPage: React.FC = () => {
  return (
    <div className="min-h-screen w-full bg-[#fdf6ec] flex justify-center px-4 py-10">
      <div className="w-full max-w-6xl bg-[#fdf6ec] text-[#333333]">
        {/* Layout wrapper */}
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1.4fr]">
          {/* LEFT COLUMN */}
          <div className="space-y-10">
            {/* Profile Card */}
            <div className="bg-[#fdf6ec]">
              <div className="relative rounded-3xl overflow-hidden bg-[#fdf6ec]">
                {/* Orange shape behind image */}
                <div className="absolute -top-10 -left-8 h-[230px] w-[210px] rounded-[60px] bg-[#f26a4f]" />
                {/* Photo */}
                <div className="relative z-10 flex items-end justify-center pt-10 pb-6">
                  {/* Replace src with your image path */}
                  <img
                    src="https://via.placeholder.com/300x360.png?text=Your+Photo"
                    alt="Portrait"
                    className="h-64 w-48 object-cover rounded-[40px] border-4 border-[#fdf6ec]"
                  />
                </div>
              </div>

              {/* Name & Title */}
              <div className="mt-4">
                <h1 className="text-3xl font-extrabold tracking-[0.08em] text-[#f26a4f]">
                  LE THI HOAI ANH
                </h1>
                <p className="mt-1 text-xs tracking-[0.3em] uppercase text-gray-500">
                  Illustrator & Designer
                </p>
              </div>

              {/* About */}
              <p className="mt-4 text-sm leading-relaxed text-gray-700">
                I&apos;m a designer and illustrator working in Ho Chi Minh City,
                with over a year of professional experience. My strong point is
                designing and illustrating children products or cute concepts.
                I&apos;m excellent in concentrating and performing under
                pressure. With a growth mindset, my primary objective is to
                deliver high quality results to the company.
              </p>
            </div>

            {/* Contact */}
            <div>
              <h2 className="text-sm font-semibold tracking-[0.25em] uppercase text-[#f26a4f]">
                Contact
              </h2>
              <div className="mt-3 space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <span className="text-lg">📞</span>
                  <span>0931875996</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-lg">✉️</span>
                  <a
                    href="mailto:hoaianhleart19@gmail.com"
                    className="hover:underline"
                  >
                    hoaianhleart19@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-lg">🌐</span>
                  <a
                    href="https://behance.net/hoaianhlea95e0"
                    className="truncate hover:underline"
                  >
                    behance.net/hoaianhlea95e0
                  </a>
                </div>
              </div>
            </div>

            {/* Interest */}
            <div>
              <h2 className="text-sm font-semibold tracking-[0.25em] uppercase text-[#f26a4f]">
                Interest
              </h2>
              <div className="mt-4 grid grid-cols-4 gap-3 max-sm:grid-cols-2">
                {interests.map((item) => (
                  <div
                    key={item.label}
                    className="flex flex-col items-center gap-1 text-center"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#f26a4f]/10 text-xl">
                      <span>{item.icon}</span>
                    </div>
                    <span className="text-xs font-medium">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <h2 className="text-sm font-semibold tracking-[0.25em] uppercase text-[#f26a4f]">
                Education
              </h2>
              <div className="mt-4 space-y-4">
                {educations.map((edu) => (
                  <div key={edu.date} className="flex gap-4 text-sm">
                    <div className="w-20 text-xs font-semibold text-gray-500">
                      {edu.date}
                    </div>
                    <div>
                      <p className="font-semibold">{edu.title}</p>
                      <p className="whitespace-pre-line text-xs text-gray-700">
                        {edu.school}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="space-y-8">
            {/* Softwares */}
            <section>
              <div className="flex items-center justify-between">
                <h2 className="text-sm font-semibold tracking-[0.25em] uppercase text-[#f26a4f]">
                  Softwares
                </h2>
                <div className="h-px flex-1 ml-4 bg-[#f3d9c9]" />
              </div>
              <div className="mt-5 flex flex-wrap gap-3">
                {softwares.map((item) => (
                  <div
                    key={item}
                    className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f26a4f] text-sm font-semibold text-[#fdf6ec]"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </section>

            {/* Abilities */}
            <section>
              <div className="flex items-center justify-between">
                <h2 className="text-sm font-semibold tracking-[0.25em] uppercase text-[#f26a4f]">
                  Abilities
                </h2>
                <div className="h-px flex-1 ml-4 bg-[#f3d9c9]" />
              </div>

              <div className="mt-6 grid grid-cols-2 gap-6 max-md:grid-cols-1">
                {abilities.map((ability) => (
                  <div
                    key={ability.label}
                    className="flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-sm"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f26a4f]/10 text-2xl">
                      {ability.icon}
                    </div>
                    <p className="text-sm font-medium">{ability.label}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Experiences */}
            <section>
              <div className="flex items-center justify-between">
                <h2 className="text-sm font-semibold tracking-[0.25em] uppercase text-[#f26a4f]">
                  Experiences
                </h2>
                <div className="h-px flex-1 ml-4 bg-[#f3d9c9]" />
              </div>

              <div className="mt-6 space-y-5 text-sm">
                {experiences.map((exp) => (
                  <div key={exp.company}>
                    <p className="text-xs font-semibold uppercase text-[#f26a4f] tracking-[0.18em]">
                      {exp.company}
                    </p>
                    <p className="text-xs italic text-gray-500">
                      {exp.role}
                    </p>
                    <p className="text-[11px] text-gray-500 mb-1">
                      {exp.date}
                    </p>
                    <p className="whitespace-pre-line text-xs leading-relaxed text-gray-700">
                      {exp.desc}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillPage;
