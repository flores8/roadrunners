// This file contains all editable content for the Roadrunners Track Club website
// Update text, links, and program information here without touching component code

export const siteContent = {
  // SEO and Meta Information
  seo: {
    title: "Roadrunners Track Club - Youth Track & Field Training",
    description: "Join Roadrunners Track Club for professional youth track and field training. Build speed, strength, and confidence in a positive environment.",
    url: "https://roadrunnerstrack.club", // Update with actual domain
    image: "/images/og-image.jpg", // Update with actual OG image
  },

  // Hero Section
  hero: {
    headline: "Run Fast. Train Smart. Build Champions.",
    subheadline: "Professional track & field training for youth athletes ages 8-18",
    cta1: {
      text: "See Programs",
      link: "#programs", // Scroll to programs section
    },
    cta2: {
      text: "Try a Free Practice",
      link: "https://roadrunners-track.cheddarup.com/free-trial", // Replace with actual Cheddar Up link
    },
    backgroundImage: "/images/hero-bg.jpg", // Replace with actual hero image
  },

  // Programs Section
  programs: {
    title: "Our Programs",
    subtitle: "Choose the perfect program for your young athlete",
    list: [
      {
        name: "Elementary Speed (Ages 8-10)",
        bullets: [
          "Fundamentals of running form",
          "Introduction to track events",
          "Fun, game-based training",
        ],
        registrationLink: "https://roadrunners-track.cheddarup.com/elementary-speed", // Replace with actual link
        price: "$150/month",
      },
      {
        name: "Middle School Elite (Ages 11-14)",
        bullets: [
          "Advanced technique development",
          "Event specialization options",
          "Competition preparation",
        ],
        registrationLink: "https://roadrunners-track.cheddarup.com/middle-school-elite", // Replace with actual link
        price: "$175/month",
      },
      {
        name: "High School Performance (Ages 14-18)",
        bullets: [
          "College recruitment support",
          "Personalized training plans",
          "Strength & conditioning program",
        ],
        registrationLink: "https://roadrunners-track.cheddarup.com/high-school-performance", // Replace with actual link
        price: "$200/month",
      },
      {
        name: "Summer Sprint Camp",
        bullets: [
          "Intensive 6-week program",
          "Speed development focus",
          "Video analysis included",
        ],
        registrationLink: "https://roadrunners-track.cheddarup.com/summer-camp", // Replace with actual link
        price: "$450/session",
      },
    ],
  },

  // What to Expect Section
  whatToExpect: {
    title: "What to Expect",
    subtitle: "Excellence in every aspect of training",
    features: [
      {
        icon: "🏃‍♂️", // Can be replaced with actual icon component
        title: "Expert Coaching",
        description: "USATF certified coaches with competitive backgrounds",
      },
      {
        icon: "⚡", // Can be replaced with actual icon component
        title: "Speed & Strength",
        description: "Proven methods to build explosive power and endurance",
      },
      {
        icon: "🌟", // Can be replaced with actual icon component
        title: "Positive Culture",
        description: "Supportive environment that builds confidence and character",
      },
      {
        icon: "🛡️", // Can be replaced with actual icon component
        title: "Injury Prevention",
        description: "Safe training protocols with proper warm-up and recovery",
      },
    ],
  },

  // Schedule Section
  schedule: {
    title: "Weekly Schedule",
    subtitle: "Training sessions at City Track Stadium",
    sessions: [
      {
        day: "Monday",
        time: "4:00 PM - 6:00 PM",
        groups: "All Groups",
        focus: "Speed Development",
      },
      {
        day: "Tuesday",
        time: "4:00 PM - 5:30 PM",
        groups: "Elementary & Middle School",
        focus: "Technique Work",
      },
      {
        day: "Wednesday",
        time: "4:00 PM - 6:00 PM",
        groups: "All Groups",
        focus: "Endurance Training",
      },
      {
        day: "Thursday",
        time: "4:00 PM - 5:30 PM",
        groups: "High School Only",
        focus: "Event Specific",
      },
      {
        day: "Saturday",
        time: "9:00 AM - 11:00 AM",
        groups: "All Groups",
        focus: "Competition Prep",
      },
    ],
  },

  // Coaches Section
  coaches: {
    title: "Meet Our Coaches",
    subtitle: "Dedicated professionals committed to your athlete's success",
    list: [
      {
        name: "Jenn Houser",
        image: "/images/jenn-houser.jpg",
        title: "Sprints & Hurdles",
        bio: "Focuses on sprint mechanics, block starts, and efficient hurdle technique. USATF certified with a passion for developing speed and confidence.",
      },
      {
        name: "Leah Britt",
        image: "/images/leah-britt.jpg",
        title: "Middle Distance & Endurance",
        bio: "Builds aerobic base, pacing strategy, and race tactics for 800m–3200m. Emphasizes progressive training and injury prevention.",
      },
      {
        name: "Mike West",
        image: "/images/mike-west.jpg",
        title: "Strength & Speed Development",
        bio: "Leads strength, mobility, and sprint power development. Designs age-appropriate lifting and plyometric routines to support performance.",
      },
      {
        name: "Tiffany Simmons",
        image: "/images/tiffany-simmons.jpg",
        title: "Jumps & Multis",
        bio: "Specializes in long/triple jump approach, takeoff mechanics, and multi-event fundamentals. Known for technical cues and positive coaching style.",
      },
    ],
  },

  // Testimonials Section
  testimonials: {
    title: "What Parents & Athletes Say",
    list: [
      {
        quote: "My daughter's confidence and speed have improved dramatically. The coaches truly care about each athlete's development.",
        author: "Jennifer M.",
        role: "Parent",
      },
      {
        quote: "Best decision we made for our son. He loves practice and has made great friends while improving his times.",
        author: "Robert K.",
        role: "Parent",
      },
      {
        quote: "Coach Marcus helped me earn a track scholarship to college. Forever grateful for Roadrunners!",
        author: "Alex T.",
        role: "Alumni Athlete",
      },
    ],
  },

  // FAQs Section
  faqs: {
    title: "Frequently Asked Questions",
    list: [
      {
        question: "What equipment does my child need?",
        answer: "Athletes need running shoes (spikes optional), water bottle, and comfortable athletic clothing. We provide all training equipment.",
      },
      {
        question: "Do you offer financial aid?",
        answer: "Yes! We believe every child deserves access to quality training. Apply for our scholarship program.",
        linkText: "Apply for Financial Aid",
        link: "https://roadrunners-track.cheddarup.com/financial-aid", // Replace with actual link
      },
      {
        question: "Can my child try a practice before committing?",
        answer: "Absolutely! We offer a free trial practice for all new athletes. Sign up on our website or contact us directly.",
      },
      {
        question: "What if my child has never done track before?",
        answer: "No problem! We welcome athletes of all skill levels. Our coaches will assess your child and place them in the appropriate training group.",
      },
      {
        question: "Do you compete in meets?",
        answer: "Yes, we participate in local and regional track meets throughout the season. Competition is optional but encouraged for athlete development.",
      },
      {
        question: "What's your weather policy?",
        answer: "We train rain or shine! Practice is only cancelled for lightning or extreme weather. Updates are sent via email and posted on Instagram.",
      },
    ],
  },

  // Location & Contact Section
  location: {
    title: "Location & Contact",
    subtitle: "Find us at City Track Stadium",
    address: "123 Stadium Way, Runner City, RC 12345",
    mapLink: "https://maps.google.com/?q=City+Track+Stadium", // Replace with actual Google Maps link
    email: "info@roadrunnerstrack.club", // Replace with actual email
    phone: "(555) 123-4567", // Replace with actual phone
    instagram: "@roadrunnerstrack", // Replace with actual Instagram handle
    instagramLink: "https://instagram.com/roadrunnerstrack", // Replace with actual link
  },

  // Footer Section
  footer: {
    copyright: "© 2024 Roadrunners Track Club. All rights reserved.",
    links: [
      { text: "Programs", href: "#programs" },
      { text: "Schedule", href: "#schedule" },
      { text: "Coaches", href: "#coaches" },
      { text: "Contact", href: "#contact" },
    ],
    socialLinks: [
      {
        platform: "Instagram",
        url: "https://instagram.com/roadrunnerstrack", // Replace with actual link
      },
      {
        platform: "Facebook",
        url: "https://facebook.com/roadrunnerstrack", // Replace with actual link
      },
    ],
  },
}
