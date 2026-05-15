import { FaHome, FaGraduationCap, FaChartLine, FaShieldAlt } from 'react-icons/fa';

export const templateData = {
  header: {
    logoName: "Chirag Patel",
    logoImage: "/InsureWithChiragv2-cropped.svg",
    navItems: [
      { id: "home", label: "Home" },
      { id: "services", label: "Services" },
      { id: "about", label: "About" },
      { id: "contact", label: "Contact" },
    ],
    ctaText: "Schedule Consultation"
  },
  hero: {
    id: "home",
    headline: "Secure Your Family's Financial Future with Confidence",
    subheadline: "Expert wealth management, tailored insurance, and strategic planning for families navigating the dynamic Brampton market and beyond.",
    ctaText: "Start Your Free Plan",
    // Premium financial architecture background
    backgroundImage: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
  },
  services: {
    id: "services",
    title: "Comprehensive Financial Solutions",
    subtitle: "Tailored strategies to protect your assets and grow your wealth.",
    items: [
      {
        icon: FaHome,
        title: "First-Home Savings (FHSA)",
        description: "Navigate the local real estate market with tax-free savings strategies designed to accelerate your down payment."
      },
      {
        icon: FaChartLine,
        title: "Retirement Planning (RRSP)",
        description: "Maximize your tax returns today while building a robust, diversified portfolio for a comfortable tomorrow."
      },
      {
        icon: FaGraduationCap,
        title: "Education Funds (RESP)",
        description: "Secure government grants and build a growing fund to ensure your children's educational dreams are fully funded."
      },
      {
        icon: FaShieldAlt,
        title: "Life & Critical Insurance",
        description: "Comprehensive coverage options that guarantee your family's lifestyle and assets are protected no matter what."
      }
    ]
  },
  about: {
    id: "about",
    title: "About Chirag Patel",
    content: "With over a decade of deep expertise in Canadian tax strategies and wealth generation, I provide dedicated financial oversight to my clients. Whether you are aiming to purchase a new property, secure your family's safety net, or optimize your investment accounts, my goal is to turn complex financial data into a clear, actionable roadmap for your success.",
    // Professional headshot placeholder
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  }
};