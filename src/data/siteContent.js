// All editable site copy and data lives here.
// Update text, stats, and lists in this file — components read from it,
// so most content changes never require touching component code.
import digitalProgramImage from "../assets/images/digital.png";
export const programs = [
  {
    id: "digital",
    name: "Digital and Innovation Program",
    short: "DIP",
    image: digitalProgramImage,
    description:
      "From basic computer literacy to coding, design and data skills, plus the entrepreneurship support and creative media training that help young people turn skills into income.",
    focusAreas: [
      { title: "Digital Skills Training program", text: "Learn the digital skills that are in demand in Sierra Leone's economy, from basic computer literacy to coding, design and data skills." },
      { title: "Entrepreneurship", text: "Develop the entrepreneurial mindset and skills needed to start and grow a business." },
      { title: "Digital Storytelling", text: "Learn how to use digital tools to tell compelling stories that can drive social change." },
      { title: "Media for Peace", text: "Explore the role of media in promoting peace and conflict resolution in communities." },
    ],
    sdgs: ["No Poverty", "Quality Education", "Decent Work and Economic Growth", "Reduced Inequalities"],
  },
  {
    id: "leadership",
    name: "Leadership and Career Development",
    short: "LCD",
    image: digitalProgramImage,
    description:
      "Residential camps, mentorship and virtual learning that build the confidence and skills young people need to lead in their communities and careers.",
    focusAreas: [
      { title: "Aspire Youth Ambassador Leadership Camp", text: "Develop leadership skills and gain real-world experience through immersive residential camps." },
      { title: "Personal Career Development Mentorship", text: "Receive personalized guidance and support to navigate your career path." },
      { title: "Virtual Leadership Series", text: "Participate in online workshops and seminars to enhance your leadership capabilities." },
    ],
    sdgs: ["Quality Education", "Reduced Inequalities"],
  },
  {
    id: "advocacy",
    name: "Advocacy Engagement Program",
    short: "AEP",
    image: digitalProgramImage,
    description:
      "Youth-led campaigns and dialogues that tackle gender-based violence, substance abuse and climate change, and that bring young people into decision making.",
    focusAreas: [
      { title: "Gender-Based Violence", text: "Address the root causes and impacts of gender-based violence in our communities." },
      { title: "Substance Abuse", text: "Explore the effects of substance abuse and promote healthy coping mechanisms." },
      { title: "Peace and good Governance", text: "Understand the importance of peace and effective governance in building resilient communities." },
      { title: "Climate Justice", text: "Examine the intersection of climate change and social justice." },
    ],
    sdgs: [       
      "Gender-Based Violence",
      "Substance Abuse",
      "Peace and good Governance",
      "Climate Justice",
    ],
  },
];
export const nav = {
  links: [
    { label: "About", href: "/about" },
    { label: "Programs", href: "/programs" },
    { label: "Impact", href: "/impact" },
    { label: "Stories", href: "/stories" },
    { label: "Contact", href: "/contact" },
  ],
  cta: { label: "Get involved", href: "/contact" },
};

export const hero = {
  kicker: "Bo Southern, Sierra Leone",
  headline: "Young people are building what comes next.",
  sub: "Aspire! gives Sierra Leone's next generation the skills, mentors, and workspace to turn an idea into a livelihood in tech, business, media, and civic life.",
  primaryCta: { label: "Join a program", href: "/programs" },
  secondaryCta: { label: "Partner with us", href: "/contact" },
  stats: [
    { value: "1,200+", label: "youth trained since 2024" },
    { value: "65", label: "ventures launched" },
    { value: "40", label: "volunteer mentors" },
  ],
};

export const about = {
  headline: "Every young person deserves a place to build.",
  body:
    "Aspire! is a physical hub and a network of mentors in Bo where 15–29 year-olds learn a skill, build something real with it, and find the people who will back them. We started in 2021 with a single classroom and a handful of laptops. Today, cohorts move through four program tracks, and graduates come back to teach the next one.",
  pillars: [
    {
      title: "Learn",
      text: "Structured, cohort-based training in the skills the local economy is short on — from software to small-business finance.",
    },
    {
      title: "Build",
      text: "Every track ends in something real: a working app, a registered business, a published story, a community project.",
    },
    {
      title: "Lead",
      text: "Graduates mentor the next cohort. The hub is run, in large part, by the young people who came through it.",
    },
  ],
};


export const impact = {
  headline: "Nearly five years in, the numbers keep moving.",
  stats: [
    { value: "1,200+", label: "youth reached since 2021" },
    { value: "65", label: "youth-led ventures launched" },
    { value: "40", label: "active volunteer mentors" },
    { value: "8", label: "communities served across the Western Area" },
  ],
};

export const journey = {
  headline: "How to join",
  steps: [
    {
      title: "Apply",
      text: "Tell us who you are and what you want to build. The form takes about ten minutes.",
    },
    {
      title: "Orientation",
      text: "Meet your cohort and mentors in person at the hub, and pick the track that fits.",
    },
    {
      title: "Build",
      text: "Spend the program learning by doing — with feedback from mentors every week.",
    },
    {
      title: "Launch & lead",
      text: "Present what you built to the community, then come back to mentor the next cohort.",
    },
  ],
};

export const testimonials = [
  {
    quote:
      "I walked in knowing nothing about computers. Six months later I was building websites for local shops, and now I do it for a living.",
    name: "Aminata K.",
    role: "Digital Skills & Coding Lab, 2024",
  },
  {
    quote:
      "The bootcamp didn't just teach me to write a business plan — it taught me to actually run one. My solar-charging kiosk now employs two other young people.",
    name: "Mohamed S.",
    role: "Young Entrepreneurs Bootcamp, 2024",
  },
  {
    quote:
      "Aspire! is where I found my voice. I sit on my chiefdom's youth council now, and I still come back to mentor new fellows.",
    name: "Fatmata B.",
    role: "Civic Leadership Fellowship, 2023",
  },
];

export const cta = {
  headline: "Ready to build with us?",
  sub: "Whether you're 17 and ready to learn, or an organization that wants to back the next cohort — there's a place for you at Aspire!",
  primaryCta: { label: "Apply to a program", href: "#contact" },
  secondaryCta: { label: "Become a mentor or partner", href: "#contact" },
};

export const footer = {
  tagline: "Youth Power for Change.",
  address: "94 Dambala Road, Bo City, Sierra Leone",
  email: "aspireyouthempowerment2023@gmail.com",
  phone: "+232 76 648260",
  columns: [
    {
      heading: "Programs",
      links: programs.map((p) => ({ label: p.name, href: "/programs" })),
    },
    {
      heading: "Organization",
      links: [
        { label: "About", href: "/about" },
        { label: "Impact", href: "/impact" },
        { label: "Stories", href: "/stories" },
        { label: "Contact", href: "/contact" },
      ],
    },
  ],
  social: [
    { label: "Facebook", href: "#" },
    { label: "Instagram", href: "#" },
    { label: "X", href: "#" },
  ],
};
