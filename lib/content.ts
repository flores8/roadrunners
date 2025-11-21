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
    subheadline: "Professional track & field training for youth athletes ages 7-18",
    cta1: {
      text: "See Programs",
      link: "#programs", // Scroll to programs section
    },
    backgroundImage: "/images/hero-bg.jpg", // Replace with actual hero image
  },

  // Programs Section
  programs: {
    title: "Our Programs",
    subtitle: "Choose the perfect program for your young athlete",
    note: "Returning athletes of any program receive a practice shirt.",
    track: {
      title: "Track & Field",
      seasons: [
        {
          active: false,
          name: "Season 1",
          dates: "Feb 1 – Apr 26",
          plans: [
            {
              name: "Practice Only",
              price: "$250",
              bullets: [
                "Team practices for the full season",
              ],
              registrationLink: "https://ovroadrunners.cheddarup.com", // Cheddar Up portal
            },
            {
              name: "Competition",
              price: "$300",
              bullets: [
                "All season practices",
                "Meet support and competition entries",
                "One additional weekly practice",
              ],
              registrationLink: "https://ovroadrunners.cheddarup.com", // Cheddar Up portal
            },
          ],
          groups: [
            {
              name: "Elementary (Ages 8 and under)",
              bullets: [
                "Sprint and distance training",
                "Form and fundamentals",
                "Form correction",
                "Javeline training",
                "Intro to long jump",
              ],
            },
            {
              name: "Middle School (Ages 9-13)",
              bullets: [
                "Sprint and distance training",
                "Form and fundamentals",
                "Javeline training",
                "Shotput training",
                "Long jump training",
                "Intro to hurdles",
                "Intro to high jump",
              ],
            },
            {
              name: "High School (Ages 14–18)",
              bullets: [
                "Sprint and distance training",
                "Form and fundamentals",
                "Javeline training",
                "Shotput training",
                "Hurdles training",
                "High jump training",
                "Long/triple jump training",
              ],
            },
          ],
        },
        {
          active: false,
          name: "Season 2",
          dates: "May 26 – Jun 31",
          plans: [
            {
              name: "Practice Only (Ages 13 and under)",
              price: "$150",
              bullets: [
                "Team practices twice a week",
              ],
              registrationLink: "https://ovroadrunners.cheddarup.com", // Cheddar Up portal
            },
            {
              name: "Competition  (Ages 13 and under)",
              price: "$200",
              bullets: [
                "Team practices twice a week",
                "Competition practice once a week",
                "Competition entry fees included",
                "Coaching at meets",
                "Does not include the required USATF youth membership fee and competition uniforms",
                // https://www.usatf.org/home-normal/top-utility-nav-content/membership/individual-youth-membership
              ],
              registrationLink: "https://ovroadrunners.cheddarup.com", // Cheddar Up portal
            },
            {
              name: "Practice Only (Ages 14+)",
              price: "$200",
              bullets: [
                "Team practices twice a week",
                "High school only practices once a week",
              ],
              registrationLink: "https://ovroadrunners.cheddarup.com", // Replace with actual link
            },
            {
              name: "Competition (Ages 14+)",
              price: "$250",
              bullets: [
                "Team practices twice a week",
                "Competition practice once a week",
                "Competition entry fees included",
                "Coaching at meets",
                "Does not include the required USATF youth membership fee and competition uniforms",
              ],
              registrationLink: "https://ovroadrunners.cheddarup.com", // Cheddar Up portal
            },
          ],
          groups: [
            {
              name: "Elementary (Ages 7–10)",
              bullets: [
                "Fundamentals of running form",
                "Introduction to track events",
                "Fun, game-based training",
              ],
            },
            {
              name: "Middle School (Ages 11–14)",
              bullets: [
                "Advanced technique development",
                "Event specialization options",
                "Competition preparation",
              ],
            },
            {
              name: "High School (Ages 14–18)",
              bullets: [
                "College recruitment support",
                "Personalized training plans",
                "Strength & conditioning program",
              ],
            },
            {
              name: "Small Group Specialized Coaching",
              bullets: [
                "Customized small-group sessions (max 4 athletes)",
                "Event-specific technical work",
                "Video analysis and targeted feedback",
              ],
            },
          ],
        },
        {
          active: true,
          name: "Small Group Specialized Coaching",
          dates: "Every 2 weeks",
          plans: [
            {
              name: "High school ages only",
              price: "$300",
              bullets: [
                "Customized small-group sessions (2-4 athletes)",
                "Sprints training",
                "Hurdles training",
                "Jumps training",
              ],
              registrationLink: "https://ovroadrunners.cheddarup.com-comp", // Replace with actual link
            },
          ],
          groups: [
            {
              name: "Elementary (Ages 8 and under)",
              bullets: [
                "Sprint and distance training",
                "Form and fundamentals",
                "Form correction",
                "Javeline training",
                "Intro to long jump",
              ],
            },
            {
              name: "Middle School (Ages 9-13)",
              bullets: [
                "Sprint and distance training",
                "Form and fundamentals",
                "Javeline training",
                "Shotput training",
                "Long jump training",
                "Intro to hurdles",
                "Intro to high jump",
              ],
            },
            {
              name: "High School (Ages 14–18)",
              bullets: [
                "Sprint and distance training",
                "Form and fundamentals",
                "Javeline training",
                "Shotput training",
                "Hurdles training",
                "High jump training",
                "Long/triple jump training",
              ],
            },
            {
              name: "Small Group Specialized Coaching",
              bullets: [
                "Customized small-group sessions (2-4 athletes)",
                "Sprints training",
                "Hurdles training",
                "Jumps training",
              ],
            },
          ],
        },
      ],
      emptyState: {
        title: "Registration Closed",
        message: "We are currently out of season. Please check back later for upcoming programs.",
      },
    },
    crossCountry: {
      title: "Cross Country",
      seasons: [
        {
          active: false,
          name: "Cross Country Season",
          dates: "Aug – Nov",
          plans: [
            {
              name: "Practice Only",
              price: "$250",
              bullets: [
                "Team practices twice a week",
              ],
              registrationLink: "https://ovroadrunners.cheddarup.com", // Cheddar Up portal
            },
            {
              name: "Competition",
              price: "$300",
              bullets: [
                "Team practices twice a week",
                "Competition practice once a week",
                "Competition entry fees included",
                "Coaching at meets",
                "Does not include the required USATF youth membership fee and competition uniforms",
              ],
              registrationLink: "https://ovroadrunners.cheddarup.com", // Cheddar Up portal
            },
          ],
          groups: [
            {
              name: "Elementary (Ages 7–10)",
              bullets: [
                "Running fundamentals and posture",
                "Introduction to distance running",
                "Compete and gain confidence",
              ],
            },
            {
              name: "Middle School (Ages 11–14)",
              bullets: [
                "Endurance development and pacing",
                "Form and fundamentals",
                "Hills and terrain skills",
                "Competition preparation and coaching",
              ],
            },
          ],
        },
      ],
    },
  },

  // What to Expect Section
  whatToExpect: {
    title: "What to Expect",
    subtitle: "Excellence in every aspect of training",
    features: [
      {
        icon: "🏃‍♂️", // Can be replaced with actual icon component
        title: "Expert Coaching",
        description: "USATF certified coaches with years of coaching experience",
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
    subtitle: "Training sessions to make you faster",
    sessions: [
      {
        day: "Monday",
        time: "5:45 PM - 7:00 PM",
        groups: "Practice",
      },
      {
        day: "Tuesday",
        time: "On your own",
        groups: "",
      },
      {
        day: "Wednesday",
        time: "5:45 PM - 7:00 PM",
        groups: "Competitive Only Practice",
      },
      {
        day: "Thursday",
        time: "5:45 PM - 7:00 PM",
        groups: "Practice",
      },
      {
        day: "Friday",
        time: "On your own",
        groups: "",
      },
      {
        day: "Saturday",
        time: "To be announced",
        groups: "Track meets",
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
    title: "About the Oro Valley Roadrunners",
    list: [
      {
        quote: "The Oro Valley Roadrunners are a dedicated cross country and track & field club, bringing together athletes of all ages and skill levels who share a passion for running, jumping, and throwing. Founded to give the Oro Valley community a place to train, compete, and grow, our club offers a supportive environment where athletes can push their limits, set new goals, and develop a lifelong love for the sport. We believe that success in track and cross country comes from hard work, resilience, and a strong team spirit.",
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
        answer: "For cross country, a good pair of running shoes and a water bottle are the essentials. For track and field, athletes may eventually benefit from event-specific shoes (like spikes), but these are not required for beginners. Comfortable athletic clothing is recommended. We’ll provide guidance on any additional gear as your child progresses.",
      },
      {
        question: "Do you offer financial aid?",
        answer: "Yes. We believe every child should have the opportunity to participate in running. If cost is a barrier, please reach out to us. We have financial aid options and can work with families on a case-by-case basis.", // Replace with actual link
      },
      {
        question: "Can my child try a practice before committing?",
        answer: "Absolutely! We welcome new athletes to come try one practice for free. It’s a great way to see if Roadrunners is a good fit before registering.",
      },
      {
        question: "What if my child has never done track before?",
        answer: "No experience is required! Many of our athletes start with little or no background in track or cross country. Our coaches teach the fundamentals in a positive, supportive environment where kids can grow at their own pace.",
      },
      {
        question: "Do you compete in meets?",
        answer: "Yes. Our athletes have the option to participate in local and regional meets during the season. Meets are a fun way to test progress, build team spirit, and celebrate hard work—but participation is encouraged, not required.",
      },
      {
        question: "What's your weather policy?",
        answer: "Safety comes first. Practices may be delayed, shortened, or canceled in cases of lightning, heavy rain, extreme heat, or poor air quality. Updates are sent promptly through our TeamReach communication app so families are always informed.",
      },
    ],
  },

  // Location & Contact Section
  location: {
    title: "Contact Us",
    subtitle: "Reach out and get in touch with us",
    address: "123 Stadium Way, Runner City, RC 12345",
    mapLink: "https://maps.google.com/?q=City+Track+Stadium", // Replace with actual Google Maps link
    email: "ovroadrunners@gmail.com", // Replace with actual email
    phone: "(555) 123-4567", // put Leslie's phone number in here // Replace with actual phone
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
