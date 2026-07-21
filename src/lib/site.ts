export const site = {
  name: "HEROCK E-VILLE ACADEMY",
  shortName: "HEROCK E-VILLE",
  tagline: "Empowering minds. Building futures.",
  motto: "Learn Anywhere. Grow Everywhere. Succeed Without Limits.",
  logoTagline: "innovative learning for excellence",
  description:
    "A dynamic online learning institution committed to transforming education through innovation, accessibility, and excellence for secondary and tertiary students.",
  email: "admissions@herockeville.com",
  supportEmail: "support@herockeville.com",
  phone: "+234 800 000 0000",
  whatsapp: "+234 800 000 0000",
  address: "Online Campus: Serving learners worldwide",
  socials: {
    facebook: "#",
    twitter: "#",
    instagram: "#",
    linkedin: "#",
    youtube: "#",
  },
};

export const mainNav = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Programs", href: "/programs" },
  { label: "Admissions", href: "/admissions" },
  { label: "E-Learning Portal", href: "/e-learning" },
  { label: "E-Library", href: "/e-library" },
  { label: "News & Blog", href: "/news" },
  { label: "Events", href: "/events" },
  { label: "Contact Us", href: "/contact" },
] as const;

export const features = [
  { title: "Quality Education", description: "Curricula aligned with national and international standards." },
  { title: "Flexible Learning", description: "Study anywhere with live and recorded lessons." },
  { title: "Affordable Fees", description: "Accessible tuition with scholarship pathways." },
  { title: "Certified Programs", description: "Diplomas, certificates, and verified digital badges." },
  { title: "Student Support", description: "Mentoring, forums, and continuous academic guidance." },
] as const;

export const programTracks = [
  {
    slug: "secondary-education",
    title: "Secondary Education",
    summary:
      "Junior and Senior Secondary pathways with interactive lessons, assessments, and mentoring for academic excellence.",
    accent: "navy" as const,
    href: "/programs#secondary",
    cta: "View Programs",
  },
  {
    slug: "tertiary-programs",
    title: "Tertiary Programs",
    summary:
      "Diploma programs and degree pathways designed for the demands of today's digital workforce.",
    accent: "navy" as const,
    href: "/programs#tertiary",
    cta: "View Programs",
  },
  {
    slug: "professional-courses",
    title: "Professional Courses",
    summary:
      "Industry-focused certifications in Data Analytics, AI, Cybersecurity, Digital Marketing, and more.",
    accent: "navy" as const,
    href: "/programs#professional",
    cta: "View Courses",
  },
] as const;

export const stats = [
  { value: "1,250+", label: "Students" },
  { value: "85+", label: "Courses" },
  { value: "60+", label: "Instructors" },
  { value: "94%", label: "Graduation Rate" },
] as const;

export const quickAccess = [
  { label: "Student Portal", href: "/e-learning", tone: "navy" as const },
  { label: "Parent Portal", href: "/e-learning#parents", tone: "orange" as const },
  { label: "E-Library", href: "/e-library", tone: "navy" as const },
  { label: "Apply Now", href: "/admissions", tone: "orange" as const },
  { label: "Certificate Verify", href: "/certificates", tone: "navy" as const },
  { label: "Careers", href: "/careers", tone: "orange" as const },
] as const;

export const upcomingEvent = {
  title: "Career Talk Webinar",
  date: "Aug 12, 2026",
  time: "4:00 PM WAT",
  href: "/events",
};

export const newsItems = [
  {
    title: "New Data Analytics cohort opens for enrolment",
    date: "Jul 10, 2026",
    href: "/news",
  },
  {
    title: "Secondary exam prep workshops announced",
    date: "Jul 4, 2026",
    href: "/news",
  },
  {
    title: "Scholarship applications now open for Fall term",
    date: "Jun 28, 2026",
    href: "/news",
  },
] as const;

export const coreValues = [
  "Excellence",
  "Innovation",
  "Integrity",
  "Accessibility",
  "Lifelong Learning",
  "Leadership",
  "Inclusivity",
  "Sustainability",
] as const;

export const secondaryLevels = {
  junior: ["JSS1", "JSS2", "JSS3"],
  senior: ["SS1", "SS2", "SS3"],
  subjects: [
    "Mathematics",
    "English Language",
    "Physics",
    "Chemistry",
    "Biology",
    "Economics",
    "Literature",
    "Government",
    "Civic Education",
    "Agricultural Science",
    "Computer Studies",
  ],
};

export const diplomaPrograms = [
  "Data Science",
  "Business Administration",
  "Environmental Management",
  "Computer Science",
];

export const professionalCourses = [
  "Data Analytics",
  "Project Management",
  "Digital Marketing",
  "Graphic Design",
  "Artificial Intelligence",
  "Cybersecurity",
];

export const degreePathways = [
  "Undergraduate preparation",
  "University foundation programs",
];

export const admissionFaqs = [
  {
    q: "Who can apply to HEROCK E-VILLE ACADEMY?",
    a: "Secondary and tertiary learners who meet the entry requirements for their chosen pathway. Applications are open to students regardless of location.",
  },
  {
    q: "Is learning fully online?",
    a: "Yes. We deliver live virtual classrooms, recorded lectures, digital resources, assessments, and student support through our e-learning portal.",
  },
  {
    q: "Do you offer certificates?",
    a: "Yes. Completing eligible programs earns certificates or diplomas, with digital badges and QR-code verification available for selected awards.",
  },
  {
    q: "Are scholarships available?",
    a: "Limited scholarships and financial aid options are offered based on merit and need. Details are shared during the admissions cycle.",
  },
] as const;
