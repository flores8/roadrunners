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
    subheadline: "Professional track & field training for youth athletes ages 6-18",
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
              ],
              registrationLink: "https://ovroadrunners.cheddarup.com", // Replace with actual link
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
        time: "6:15 PM - 7:30 PM",
        groups: "Practice",
      },
      {
        day: "Tuesday",
        time: "On your own",
        groups: "",
      },
      {
        day: "Wednesday",
        time: "6:15 PM - 7:30 PM",
        groups: "Practice",
      },
      {
        day: "Thursday",
        time: "On your own",
        groups: "",
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
        title: "Middle School PE Teacher, Former D1 Athlete, Passionate Coach",
        bio: "Hi everyone! I'm Jenn Houser, and I'm beyond excited to be part of the team! I competed in cross country and track at the University of Arizona—Bear Down, Wildcats! Those years taught me discipline, grit, and the power of a supportive team. Now, after 17 years of teaching and coaching, I'm lucky enough to pass that experience on to the next generation of athletes. By day, I teach middle school PE at Coronado, and by afternoon, I'm lacing up my shoes to coach—because helping young runners grow in confidence, strength, and character is what truly fuels me. Whether it's a crisp 400m rep or a pep talk at the finish line, I bring energy, structure, and heart to everything we do. I'm focused on building athletes who work hard, support each other, and have fun along the way.",
      },
      {
        name: "Leah Britt",
        image: "/images/leah-britt.jpg",
        title: "Experienced Coach, Former D1 Athlete, Community Leader",
        bio: "Leah Britt is in her third season as a coach with the Oro Valley Roadrunners Track & Field team, where she brings passion, experience, and a deep commitment to athlete development. A former Division I collegiate athlete, Leah competed in track and field at Southern Utah University, where she also met her husband, Phillip—a fellow track standout. Married for 19 years, Leah and Phillip are the proud parents of three active kids: Princeton (12), Loulou (10), and Phelix (6). Originally from Southeastern Idaho, Leah blends a strong competitive drive with a heart for community, making her a natural leader and mentor within the Roadrunners program. Outside of coaching, Leah lives an active lifestyle filled with hiking, swimming, and CrossFit competitions. She is also deeply committed to service, regularly seeking out ways to give back and uplift those around her. Her energy, dedication, and example inspire both athletes and those around her.",
      },
      {
        name: "Chandler John",
        title: "State Champion Athlete, Multi-Sport Background, Dedicated Coach",
        bio: "Coach Chandler brings a winning mindset and multi-sport expertise to the Oro Valley Roadrunners. During high school, he competed in both high jump and 300m hurdles, capturing the Arizona state championship. Though he had college offers for both basketball and track and field, he chose to play basketball for Eastern Arizona College - bringing a unique perspective on athletic development across sports. Married to his wife Lacey, Coach Chandler is the proud father of two kids, Juniper and Rigden. His passion for track stems from its honesty as a sport: What you put into it is what you get out of it.I love that your greatest competition is always between you and yourself. Coach Chandler finds his greatest joy in watching young athletes put forth their best effort and compete to the best of their abilities. He's a strong advocate for multi-sport participation, believing that track makes athletes better in all aspects and easily translates to success in other sports.",
      },
      {
        name: "Tiffany Simmons",
        image: "/images/tiffany-simmons.jpg",
        title: "Lifelong Runner, Collegiate Athlete, Experienced Coach",
        bio: "My love of running began at just six years old when I laced up for my first one-mile road race. That day sparked a lifelong passion that has shaped who I am. I was fortunate to grow up with a strong role model in my uncle, who was the running coach at our local high school. Under his guidance, I dove headfirst into cross country and track, eventually racing in hundreds of road races—from 5Ks to marathons. Some of my favorite running memories are from those early days with our running club. We'd be dropped off on quiet country gravel roads and find our way back to the school. Those runs weren't just about training; they were about adventure, camaraderie, and learning to love the journey as much as the finish line. My passion for running carried me through college, where I competed at the collegiate level. After college, I found new joy in giving back to the sport that gave me so much—coaching both high school and middle school cross country and track. Helping young athletes discover their own love for running and watching them grow in confidence and character has been one of the most rewarding parts of my journey. One of my proudest accomplishments was achieving a lifelong goal: running the Boston Marathon. It was a dream years in the making and a testament to the dedication I've always had for this sport. But more than any race or medal, the true highlight of my running life has been coaching my daughters. Watching them grow as runners and sharing this passion together has brought everything full circle. Running has always been more than a sport to me—it's a way of life, a source of discipline and joy, and a connection to the people and places that have shaped my story.",
      },
      {
        name: "Michael Smith",
        title: "PE Department Chair, Championship Coach, Former NCAA All-American",
        bio: "Michael Smith is an accomplished Physical Education teacher, coach, and leader with over 15 years of experience in education, athletics, and youth development. He currently serves as the Physical Education Teacher and Department Chair at Ironwood Ridge High School in Oro Valley, Arizona, where he also leads the Track & Field and Cross Country programs as Head Coach. Throughout his career, Michael has combined his passion for physical education with a commitment to developing student-athletes both on and off the field. From 2012 to 2022, he held similar leadership roles at Catalina Foothills High School in Tucson, serving as Department Chair and Head Coach. His teams have earned multiple Arizona High School State Championships, and he has been recognized as Southern Arizona Coach of the Year. In addition to his work in schools, Michael is a CrossFit Trainer at CrossFit 646, guiding members in group fitness with a focus on functional movement and lifelong health. He has also played various leadership roles at Chestnut Lake Camp in Pennsylvania, supporting youth development as Program/Operations Leader, Varsity Head Counselor, and Outdoor Adventure Director over multiple summers.Michael holds a Master of Arts in Human Performance and Physical Education from Adams State College, where he also served as a Graduate Assistant Track & Field Coach, and a Bachelor of Science in Education from Chadron State College. As a former NCAA Division II All-American in Track & Field, he brings firsthand athletic excellence to his coaching philosophy.",
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
    address: "Announced through Team Reach",
    email: "ovroadrunners@gmail.com",
    phone: "(520) 549-7056",
    instagram: "@ov_roadrunners",
    instagramLink: "https://instagram.com/ov_roadrunners",
  },

  // Footer Section
  footer: {
    copyright: "© 2025 Roadrunners Track Club. All rights reserved.",
    links: [
      { text: "Programs", href: "#programs" },
      { text: "Schedule", href: "#schedule" },
      { text: "Coaches", href: "#coaches" },
      { text: "Contact", href: "#contact" },
    ],
    socialLinks: [
      {
        platform: "Instagram",
        url: "https://instagram.com/ov_roadrunners", // Replace with actual link
      },
    ],
  },
}
