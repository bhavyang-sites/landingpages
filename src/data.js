import { FaHome, FaGraduationCap, FaChartLine, FaShieldAlt, FaStar, FaQuoteLeft, FaCheck, FaChevronDown } from 'react-icons/fa';

export const templateData = {
  header: {
    logoName: "Chirag Patel",
    logoImage: "/InsuteWithChirag-Transparent.png",
    navItems: [
      { id: "home", label: "Home" },
      { id: "services", label: "Services" },
      { id: "stats", label: "Impact" },
      { id: "about", label: "About" },
      { id: "testimonials", label: "Reviews" },
      { id: "faq", label: "FAQ" },
      { id: "contact", label: "Contact" },
    ],
    ctaText: "Book a Free Consultation"
  },
  hero: {
    id: "home",
    headline: "Secure Your Family's Financial Future with Confidence",
    subheadline: "Expert wealth management, tailored insurance, and strategic planning for families navigating the dynamic Brampton market and beyond.",
    ctaText: "Start Your Free Consultation",
    secondaryCtaText: "Learn More",
    backgroundImage: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
  },
  stats: {
    id: "stats",
    title: "Our Impact",
    subtitle: "Trusted by hundreds of families across Canada",
    items: [
      { number: "500+", label: "Families Served", icon: FaHome },
      { number: "$2.5B+", label: "Assets Managed", icon: FaChartLine },
      { number: "15+", label: "Years Experience", icon: FaStar },
      { number: "98%", label: "Client Satisfaction", icon: FaCheck }
    ]
  },
  services: {
    id: "services",
    title: "Comprehensive Financial Solutions",
    subtitle: "Tailored strategies to protect your assets and grow your wealth.",
    items: [
      {
        icon: FaHome,
        title: "First-Home Savings (FHSA)",
        description: "Navigate the local real estate market with tax-free savings strategies designed to accelerate your down payment.",
        benefits: ["Tax-free withdrawals", "Flexible contribution limits", "Government matching"]
      },
      {
        icon: FaChartLine,
        title: "Retirement Planning (RRSP)",
        description: "Maximize your tax returns today while building a robust, diversified portfolio for a comfortable tomorrow.",
        benefits: ["Tax deductions", "Compound growth", "Expert diversification"]
      },
      {
        icon: FaGraduationCap,
        title: "Education Funds (RESP)",
        description: "Secure government grants and build a growing fund to ensure your children's educational dreams are fully funded.",
        benefits: ["Government grants", "Tax-free growth", "CESG matching"]
      },
      {
        icon: FaShieldAlt,
        title: "Life & Critical Insurance",
        description: "Comprehensive coverage options that guarantee your family's lifestyle and assets are protected no matter what.",
        benefits: ["Comprehensive coverage", "Competitive rates", "Peace of mind"]
      }
    ]
  },
  about: {
    id: "about",
    title: "About Chirag Patel",
    subtitle: "Certified Financial Planner | Wealth Management Specialist",
    content: "With over a decade of deep expertise in Canadian tax strategies and wealth generation, I provide dedicated financial oversight to my clients. Whether you are aiming to purchase a new property, secure your family's safety net, or optimize your investment accounts, my goal is to turn complex financial data into a clear, actionable roadmap for your success.\n\nI specialize in comprehensive financial planning that addresses all aspects of your wealth journey—from tax optimization to investment growth to insurance protection.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    credentials: ["CFP - Certified Financial Planner", "15+ Years Financial Services", "Specializing in Tax Optimization", "Insurance & Investment Expert"]
  },
  testimonials: {
    id: "testimonials",
    title: "What Our Clients Say",
    subtitle: "Real stories from families we've helped plan their financial future",
    items: [
      {
        name: "Sarah & Michael Johnson",
        role: "Young Professionals",
        content: "Chirag helped us navigate FHSA and RRSP strategies that saved us over $15,000 in taxes while we saved for our first home. Highly recommended!",
        rating: 5,
        icon: FaQuoteLeft
      },
      {
        name: "Priya Desai",
        role: "Business Owner",
        content: "Outstanding service. Chirag's expertise in retirement planning gave me the confidence to grow my business without worrying about my family's financial security.",
        rating: 5,
        icon: FaQuoteLeft
      },
      {
        name: "Robert Chen",
        role: "IT Professional",
        content: "The comprehensive life insurance strategy protected my family while optimizing my tax situation. Chirag's attention to detail is exceptional.",
        rating: 5,
        icon: FaQuoteLeft
      },
      {
        name: "Jessica Martinez",
        role: "Educator",
        content: "Set up my kids' education funds with government matching. Chirag made the whole process simple and transparent. Truly impressive expertise.",
        rating: 5,
        icon: FaQuoteLeft
      }
    ]
  },
  faq: {
    id: "faq",
    title: "Frequently Asked Questions",
    subtitle: "Find answers to common questions about our services",
    items: [
      {
        question: "How much does a consultation cost?",
        answer: "Our initial consultation is completely free! We discuss your financial goals, current situation, and how we can help. There are no obligations.",
        icon: FaChevronDown
      },
      {
        question: "What qualifications do you have?",
        answer: "I'm a Certified Financial Planner (CFP) with 15+ years of experience in Canadian wealth management, tax optimization, and insurance planning. I stay current with all regulatory requirements and continuing education.",
        icon: FaChevronDown
      },
      {
        question: "How do you charge for services?",
        answer: "We offer flexible fee structures including fee-for-service consultations, hourly rates for ongoing advice, and percentage-based asset management fees for larger portfolios. We discuss what works best for your situation.",
        icon: FaChevronDown
      },
      {
        question: "What is your investment philosophy?",
        answer: "We believe in diversified, long-term strategies tailored to your risk tolerance and time horizon. We focus on tax-efficient investing with a mix of growth and stability based on your personal goals.",
        icon: FaChevronDown
      },
      {
        question: "How often should I review my plan?",
        answer: "We recommend annual reviews to ensure your plan stays aligned with your life changes—promotions, family changes, major purchases, or market shifts. More frequent reviews can be arranged as needed.",
        icon: FaChevronDown
      },
      {
        question: "Do you work with clients outside Brampton?",
        answer: "Yes! We work with clients across Canada. We offer virtual consultations and can manage portfolios nationwide. Your location is no barrier to getting expert financial guidance.",
        icon: FaChevronDown
      }
    ]
  }
};