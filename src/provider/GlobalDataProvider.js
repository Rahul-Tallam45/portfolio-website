import React, { createContext } from "react";

const GlobalData = {
  //
  // -------------------------------------About Page Data-----------------------------------------
  about: {
    url: "/",
    label: "About",

    // Header data common to all pages
    header: {
      logo: require("../imgs/landing/education.png"),
      menu: require("../imgs/landing/menu.png"),
      name: "Rahul Tallam",
      degreeShort: "MSCS",
      universityShort: "ASU",
      university: "Arizona State University",
    },

    // footer data common to all pages
    footer: {
      socialMediaURLs: [
        {
          url: "https://www.linkedin.com/in/rtallam/",
          icon: require("../imgs/landing/linkedin.png"),
        },
        {
          url: "https://github.com/Rahul-Tallam45",
          icon: require("../imgs/landing/github.png"),
        },
        {
          url: "https://medium.com/@tallamrahul123",
          icon: require("../imgs/landing/medium.png"),
        },
      ],
      call: "+1 (623) 251-9220",
      email: "rtallam@asu.edu",
    },

    // This is the left part of the landing page with profile picture (Looks like an ID Card)
    cardsection: {
      socialMediaURLs: [
        {
          url: "https://www.linkedin.com/in/rtallam/",
          icon: require("../imgs/landing/linkedin-blue.png"),
        },
        {
          url: "https://leetcode.com/u/rahul_tallam/",
          icon: require("../imgs/landing/leetcode.png"),
        },
        {
          url: "https://github.com/Rahul-Tallam45",
          icon: require("../imgs/landing/github.png"),
        },
      ],
      pfp: require("../imgs/landing/profile_pic.jpeg"),
      firstName: "Rahul",
      lastName: "Tallam",
      degreeShort: "MSCS @ ASU",
      date: "Graduating May 2026",
    },

    // This is the right part of the landing page with a general welcome statement and summary
    bio: {
      bigGreet: "Hello",
      intro: "I am Rahul and I build solutions.",
      description: (
        <>
          <p>
            I am currently pursuing a Master's degree in{" "}
            <b className="font-semibold">
              Computer Science at Arizona State University.
            </b>{" "}
            I have a strong background in{" "}
            <b className="font-semibold">AI, Machine Learning, and Full‑Stack Development,</b>{" "}
            with hands-on experience in building scalable applications and integrating{" "}
            <b className="font-semibold">cloud technologies like AWS and Azure.</b>
            <br />
            <br />
            My previous projects include{" "}
            <b className="font-semibold">
              AI-driven virtual try-on systems, fraud detection solutions, and data visualization pipelines
            </b>, where I focused on both technical implementation and user-centric design.
            <br />
            <br />
            <b className="font-semibold">
              I am actively looking for internship and full-time opportunities
            </b>{" "}
            in software engineering, AI/ML, or cloud development roles to apply my skills and
            contribute to impactful products.
            <br />
            <br />
            If you’re interested in collaborating or learning more about my work, feel free
            to reach out via the contact details below.
          </p>
          <br />
          <b className="font-semibold">Thanks for visiting!</b>
        </>
      ),
    },
  },

  // -------------------------------------Resume Page Data-----------------------------------------
  resume: {
    url: "/resume",
    label: "Resume",
    summary: (
      <>
        I am a graduate student in{" "}
        <b className="font-semibold">Computer Science at Arizona State University</b>{" "}
        with a strong foundation in{" "}
        <b className="font-semibold">AI, Machine Learning, and Full-Stack Development</b>.  
        My experience spans across building{" "}
        <b className="font-semibold">AI-driven applications, scalable cloud solutions,</b> and
        optimizing backend systems for better performance.
        <br />
        I have contributed to impactful projects such as{" "}
        <b className="font-semibold">virtual try-on systems, fraud detection pipelines, and
        AI-powered trip planners</b>, leveraging technologies like{" "}
        <b className="font-semibold">React.js, FastAPI, AWS, Docker, and LLMs</b>.
        <br />
        Please review my enclosed resume for details on my projects, technical expertise, and professional experience.
      </>
    ),
    education: [
      {
        year: "2024-2026",
        university: "Arizona State University",
        gpa: "4.0",
        info: " I am currently enrolled at the Master of Science program in Computer Science at the Arizona State University. My coursework includes Cloud Computing, Statistical Machine Learning, and Data Mining.",
      },
      {
        year: "2020-2024",
        university: "Vellore Institute of Technology",
        gpa: "3.6",
        info: `I acquired my Bachelor of Technology degree in Computer Science and Engineering from the Vellore Institute of Technology. The
    relevant coursework included Data Structures, Design and Analysis
    of Algorithms, Web Technologies etc.`,
      },
    ],
    work: [
      {
        year: "Nov 2024 - Jun 2025",
        organisation: "Open gig",
        role: "Software Development Intern (Volunteer)",
        detail: [
          "AI-Driven Voice Agent – Contributed to the development of an AI-driven agent by integrating speech-to-text and text-to-speech APIs with backend services and Twilio telephony, enabling automated call handling and improving user interaction.",
          "Built FastAPI endpoints, reducing inference latency by ~30% (from 500ms to 350ms) and improving overall system performance.",
          "Virtual Cloth Try-On – Developed a generative AI pipeline for virtual cloth try-on, leveraging FLUX LoRA for model generation and diffusion-based CAT-VTON to overlay products onto AI-generated human images, reducing manual adjustments by 30%.",
          "Engineered an Agentic AI-powered marketing copilot using OpenAI’s API and Vercel’s AI SDK to autonomously generate campaign hooks, captions, and CTAs, cutting content creation time by ~40%. Containerized the entire pipeline with Docker and deployed on Azure Container apps, enabling scalable cloud execution and integrating with a React-based dashboard for seamless content management.",
        ],
      },
      {
        year: "Jan 2024 - May 2024",
        organisation: "Kopen Software Solutions",
        role: "Software Development Intern",
        detail: [
          "Collaborated with backend engineers to design and implement a Python-based chatbot leveraging transformer architecture, reducing manual support by 35% and improving response speed by 20%.",
          "Coordinated with cross-functional team members to orchestrate RESTful APIs backed by MySQL, applying query indexing and revamping data workflows to reduce server latency by 15%.",
        ],
      },
      {
        year: "May 2023 - Jul 2023",
        organisation: "SmartInternz",
        role: "Software Development Intern",
        detail: [
          "Built a full-stack food ordering application using ReactJS and Spring boot, achieving a 25% decrease in load times and improving data retrieval.",
          "Containerized the application with Docker and orchestrated using Kubernetes, ensuring high availability and efficient scaling. Collaborated on CI/CD pipelines, streamlining development workflows and cutting deployment time by 40%.",
        ],
      },
    ],
  },

  // -------------------------------------Skills Page Data-----------------------------------------
  skills: {
    url: "/skills",
    label: "Skills",
    tech: [
      {
        type: "Programming Languages",
        info: "Python, Java, C++, C, Javascript",
      },
      {
        type: "Web Technology",
        info: "ReactJS, CSS, Tailwind CSS, Bootstrap, NextJS, HTML",
      },
      {
        type: "Backend",
        info: "Spring, SpringBoot, FastAPI, Django, Flask, NodeJS",
      },
      {
        type: "Cloud & DevOps",
        info: "Amazon Web Services, GCP, Azure, Docker, Kubernetes, Google Kubernetes Engine, Git, Jenkins, CI/CD",
      },
      {
        type: "AI/ML",
        info: "Generative AI, LLMs, RAGs, PyTorch, TensorFlow, Scikit-learn, NLP (Transformers), OpenCV, Pandas, Reinforcement Learning",
      },
      {
        type: "Software Development Practices",
        info: "Agile, Scrum, JIRA, Github",
      },
    ],
    soft: [
      {
        img: require("../imgs/skills/soft/teamWork.png"),
        type: "Team Work",
        info: "Collaborated with cross-functional teams at Open Gig and Kopen Software to build AI-driven and backend solutions. Actively partnered with engineers and product teams to integrate APIs, optimize workflows, and deliver project milestones ahead of deadlines.",
      },
      {
        img: require("../imgs/skills/soft/adaptability.jpeg"),
        type: "Adaptibility",
        info: "Transitioned seamlessly between multiple tech stacks like FastAPI, React.js, Flask, and Kubernetes across different internships and academic projects. Adapted quickly to new frameworks like FLUX LoRA and CAT-VTON while working on generative AI pipelines.",
      },
      {
        img: require("../imgs/skills/soft/Communication.webp"),
        type: "Communication",
        info: "Regularly presented project updates and demos to stakeholders during internships. Conducted knowledge transfer sessions for peers on AI model integration, deployment workflows, and cloud-native development best practices.",
      },
      {
        img: require("../imgs/skills/soft/problemSolving.webp"),
        type: "Problem Solving",
        info: "Improved AI voice agent latency by ~30% at Open Gig through optimized API handling. Engineered solutions for integrating marketing copilot and virtual try-on pipelines, reducing manual effort by up to 40% and resolving deployment bottlenecks.",
      },
      {
        img: require("../imgs/skills/soft/creativity.jpg"),
        type: "Creativity",
        info: "Designed an AI-powered trip planner leveraging Gemini API and Firebase, generating personalized itineraries with minimal user input. Incorporated LLM-based summarization and transcription in an LMS to enhance user learning experience.",
      },
      {
        img: require("../imgs/skills/soft/time.png"),
        type: "Time Management",
        info: "Balanced multiple concurrent projects during internships and graduate coursework, meeting tight deadlines for deliverables including fraud detection pipelines, AI integrations, and data visualization tasks without compromising quality.",
      },
    ],
  },

  // -------------------------------------Projects Page Data-----------------------------------------
  projects: {
    url: "/projects",
    label: "Projects",
    projData: [
      {
        img: require("../imgs/projects/lms.jpg"),
        title: "Learning Management System",
        link: "https://github.com/Rahul-Tallam45/lms", 
        year: "2025",
        points: [
          `Conceptualized an interactive MERN-based LMS with 10+ core modules including authentication, course creation, and Stripe payments.`,
          `Integrated AI features such as Whisper for video transcription, GPT-4 for summarization, and an LLM-based doubt-solving agent, reducing manual note-taking by 80% and improving query resolution speed by 70%.`
        ],
        tech: ["MongoDB", "Express", "React", "Node.js", "Whisper", "GPT-4", "Stripe"]
      },
      {
        img: require("../imgs/projects/fraud.png"),
        title: "Fraud Detection in Banking Data using Ensemble Techniques",
        link: "https://github.com/Rahul-Tallam45/Fraud-Detection-in-Banking-Data-using-Ensemble-Techniques",
        year: "2024",
        points: [
          `Evaluated LightGBM, XGBoost, CatBoost, and Stacking Classifier models for imbalanced credit-card datasets with Bayesian Optimization to enhance accuracy by 10%.`,
          `Built a Flask-based web interface for real-time predictions, ensuring intuitive navigation and enhanced user experience.`
        ],
        tech: ["LightGBM", "XGBoost", "CatBoost", "Flask", "Bayesian Optimization", "Python"]
      },
      {
        img: require("../imgs/projects/ai.jpeg"),
        title: "Comparative AI-Trip Planner Web Application",
        link: "https://github.com/Rahul-Tallam45/ai-trip-planner",
        year: "2025",
        points: [
          `Developed an AI-powered trip planner using React.js, Gemini API, and Firebase to generate personalized itineraries and hotel suggestions.`,
          `Cut manual planning effort by 60% and deployed on Vercel with serverless architecture for scalability.`
        ],
        tech: ["React.js", "Gemini API", "Firebase", "Vercel"]
      },
      {
        img: require("../imgs/projects/covid.png"),
        title: "PharmaZilla: Online Healthcare Delivery Platform",
        link: "https://github.com/Rahul-Tallam45/pharmazilla",
        year: "2022",
        points: [
          `Built a medicine ordering and delivery platform connecting patients with local pharmacies using HTML, CSS, and JavaScript.`,
          `Implemented backend with PHP and MySQL to manage 100+ products and improved user experience with AJAX-based dynamic content updates and a Coronavirus self-health checker.`
        ],
        tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "AJAX"]
      },
      {
        img: require("../imgs/projects/fire.jpg"),
        title: "Fire and Smoke Detection System",
        link: "https://github.com/Rahul-Tallam45/Fire-and-Smoke-Detection-System",
        year: "2023",
        points: [
          `Developed a CNN-based model to detect fire and smoke from 1000+ images, achieving 98% accuracy and reducing quality control issues by 40%.`,
          `Integrated Arduino-based real-time alert system, improving responsiveness in high-risk environments and increasing user engagement by 40%.`
        ],
        tech: ["CNN", "Python", "Arduino", "Deep Learning"]
      },
      {
        img: require("../imgs/projects/rl.png"),
        title: "Reinforcement Learning Framework for Multi-Level Intrusion Detection Systems",
        link: "https://github.com/Rahul-Tallam45/rl-ids",
        year: "2024",
        points: [
          `Developed an intrusion detection system integrating Deep Q-Network with transfer learning, reducing training time by 30% and improving detection accuracy.`,
          `Enhanced multi-class attack detection by 15% using feature engineering and a Multi-View Classifier ensemble.`
        ],
        tech: ["Reinforcement Learning", "DQN", "Python", "Transfer Learning"]
      },
      {
        img: require("../imgs/projects/food.png"),
        title: "Full-Stack Food Ordering Application",
        link: "https://github.com/Rahul-Tallam45/Food-Ordering-System", 
        year: "2023",
        points: [
          `Built a full-stack food ordering application using ReactJS and Spring Boot, reducing load times by 25% and improving data retrieval efficiency.`,
          `Containerized the application with Docker and orchestrated with Kubernetes for high availability and scaling.`,
          `Collaborated on CI/CD pipelines to streamline development workflows, cutting deployment time by 40%.`
        ],
        tech: ["ReactJS", "Spring Boot", "Docker", "Kubernetes", "CI/CD"]
      },
      {
        img: require("../imgs/projects/gan.webp"),
        title: "Comparative Analysis of GAN-Based Image Inpainting",
        link: "https://github.com/Rahul-Tallam45/gan-inpainting",
        year: "2024",
        points: [
          `Compared AOT-GAN with a baseline GAN on the Places2 dataset, achieving 20% improvement in SSIM/PSNR and 25% lower FID score.`,
          `Significantly improved image reconstruction quality for image inpainting tasks.`
        ],
        tech: ["GAN", "AOT-GAN", "PyTorch", "Deep Learning"]
      },
    ],
  },


  // -------------------------------------Blogs Page Data-----------------------------------------
  publications: {
    url: "/publications",
    label: "Publications",
    cover: require("../imgs/publications/paper.jpg"), 
    summary: `My interest in research led me to publish a paper on the convergence of Blockchain and IoT, exploring secure and decentralized communication models for IoT ecosystems. This publication was presented at Springer ICDSMLA 2023.`,
    pubData: [
      {
        img: require("../imgs/publications/block.png"),
        title: "Convergence of Blockchain and IoT",
        link: "https://link.springer.com/chapter/10.1007/978-981-97-8031-0_65", 
        label: "[Springer]",
        info: "Proposed blockchain-based solutions to secure decentralized IoT communications, enhancing privacy and resilience in distributed networks. Presented at Springer ICDSMLA 2023.",
      },
    ],
  },


  // -------------------------------------Certification Page Data-----------------------------------------
  certifications: {
    url: "/certifications",
    label: "Certifications",
    certs: [
      {
        title: "AWS Certified Cloud Practitioner",
        date: "Jul 2023-Jul 2026",
        image: require("../imgs/certs/aws.png"),
      },
      {
        title: "Machine Learning Certified by Coursera",
        date: "Oct 2024",
        image: require("../imgs/certs/cour.png"),
      },
    ],
  },

  // -------------------------------------Hobbies Page Data-----------------------------------------
  
};

const GlobalDataContext = createContext();

const GlobalDataProvider = ({ children }) => {
  return (
    <GlobalDataContext.Provider value={GlobalData}>
      {children}
    </GlobalDataContext.Provider>
  );
};

export { GlobalDataContext, GlobalDataProvider };
