export const navLinks = [
    {
        id: 1,
        name: 'Home',
        href: '#home',
    },
    {
        id: 2,
        name: 'About',
        href: '#about',
    },
    {
        id: 3,
        name: 'Work',
        href: '#work',
    },
    {
        id: 4,
        name: 'Contact',
        href: '#contact',
    },
];

export const clientReviews = [
    {
        id: 1,
        name: 'Emily Johnson',
        position: 'Marketing Director at GreenLeaf',
        img: 'assets/review1.png',
        review:
            'Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
    },
    {
        id: 2,
        name: 'Mark Rogers',
        position: 'Founder of TechGear Shop',
        img: 'assets/review2.png',
        review:
            'Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
    },

    {
        id: 3,
        name: 'Ether Smith',
        position: 'CEO of BrightStar Enterprises',
        img: 'assets/review4.png',
        review:
            'Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
    },
];

export const myProjects = [
    {
        title: 'Podcastr - AI Podcast Platform',
        desc: 'Podcastr is a revolutionary Software-as-a-Service platform that transforms the way podcasts are created. With advanced AI-powered features like text-to-multiple-voices functionality, it allows creators to generate diverse voiceovers from a single text input.',
        subdesc:
            'Built as a unique Software-as-a-Service app with Next.js 14, Tailwind CSS, TypeScript, Framer Motion and Convex, Podcastr is designed for optimal performance and scalability.',
        href: 'https://www.youtube.com/watch?v=zfAb95tJvZQ',
        texture: '/textures/project/project1.mp4',
        logo: '/assets/project-logo1.png',
        logoStyle: {
            backgroundColor: '#2A1816',
            border: '0.2px solid #36201D',
            boxShadow: '0px 0px 60px 0px #AA3C304D',
        },
        spotlight: '/assets/spotlight1.png',
        tags: [
            {
                id: 1,
                name: 'React.js',
                path: '/assets/react.svg',
            },
            {
                id: 2,
                name: 'TailwindCSS',
                path: 'assets/tailwindcss.png',
            },
            {
                id: 3,
                name: 'TypeScript',
                path: '/assets/typescript.png',
            },
            {
                id: 4,
                name: 'Framer Motion',
                path: '/assets/framer.png',
            },
        ],
    },    {
        title: 'Developed an eKYC- Electronic Know Your Customer',
        desc: 'Developed an eKYC (Electronic Know Your Customer) solution utilizing machine learning and deep learning algorithms, including OpenCV for image processing, ' +
            'scikit-learn for data analysis, and TensorFlow for model training.' +
            ' The model was successfully deployed for real-time identity verification and document authentication.',
        subdesc:
            'The required skill set includes computer vision, image processing, machine learning, Python programming, OpenCV, OCR (Optical Character Recognition), document verification, data extraction, AI model training, and E-KYC domain knowledge.',
        href: 'https://github.com/Harshrj1/eKYC',
        texture: '/textures/project/Project2.mp4',
        logo: 'public/assets/kyc.png',
        logoStyle: {
            backgroundColor: '#13202F',
            border: '0.2px solid #17293E',
            boxShadow: '0px 0px 60px 0px #2F6DB54D',
        },
        spotlight: '/assets/spotlight2.png',
        tags: [
            {
                id: 1,
                name: 'Tensorflow',
                path: '/assets/tnsflow.png',
            },
            {
                id: 2,
                name: 'Python',
                path: '/assets/Python22.png',
            },
            {
                id: 3,
                name: 'Scitelearn',
                path: '/assets/scikit-learn.png',
            },
            {
                id: 4,
                name: 'Opencv',
                path: '/assets/OpenCV.png',
            },
        ],
    },
    {
        title: ' Emotionally Intelligent Chatbot',
        desc: 'This project involved creating an Emotionally Intelligent Chatbot capable of recognizing and responding to users\' emotional cues using advanced machine learning. The chatbot was integrated with Telegram for real-time user interaction, accurately detecting emotions and providing context-aware responses. The solution combines natural language processing and emotion detection, enhancing user experience through empathetic and intelligent conversations.',
        subdesc:
            'Emotionally Intelligent Chatbot using advanced Machine Learning and Deep Learning algorithms such as SVM, Scikit-learn, and TensorFlow. The model was deployed via Telegram, ' +
            'enabling real-time interaction with users while accurately detecting and responding to emotional cues.',
        href: 'https://github.com/Samiya2810/Emotionally-Intelligent-Bot',
        texture: '/textures/project/project5.mp4',
        logo: 'public/assets/emotion1.png',
        logoStyle: {
            backgroundColor: '#60f5a1',
            background:
                'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
            border: '0.3px solid rgba(208, 213, 221, 1)',
            boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
        },
        spotlight: '/assets/spotlight3.png',
        tags: [
            {
                id: 1,
                name: 'Tensorflow',
                path: '/assets/tnsflow.png',
            },
            {
                id: 2,
                name: 'Skit learn',
                path: '/assets/scikit-learn.png',
            },
            {
                id: 3,
                name: 'Python',
                path: '/assets/Python22.png',
            },
            {
                id: 4,
                name: 'Telegram',
                path: '/assets/telegram.png',
            },
        ],
    },
    {
        title: 'Horizon - Online Banking Platform',
        desc: 'Horizon is a comprehensive online banking platform that offers users a centralized finance management dashboard. It allows users to connect multiple bank accounts, monitor real-time transactions, and seamlessly transfer money to other users.',
        subdesc:
            'Built with Next.js 14 Appwrite, Dwolla and Plaid, Horizon ensures a smooth and secure banking experience, tailored to meet the needs of modern consumers.',
        href: 'https://www.youtube.com/watch?v=PuOVqP_cjkE',
        texture: '/textures/project/project4.mp4',
        logo: '/assets/project-logo4.png',
        logoStyle: {
            backgroundColor: '#0E1F38',
            border: '0.2px solid #0E2D58',
            boxShadow: '0px 0px 60px 0px #2F67B64D',
        },
        spotlight: '/assets/spotlight4.png',
        tags: [
            {
                id: 1,
                name: 'React.js',
                path: '/assets/react.svg',
            },
            {
                id: 2,
                name: 'TailwindCSS',
                path: 'assets/tailwindcss.png',
            },
            {
                id: 3,
                name: 'TypeScript',
                path: '/assets/typescript.png',
            },
            {
                id: 4,
                name: 'Framer Motion',
                path: '/assets/framer.png',
            },
        ],
    },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
        deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
        deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
        cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
        reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
        ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
        targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],


};
};

export const workExperiences = [
    {
        id: 2,
        name: 'Harsh Raj',
        pos: 'Lead Web Developer',
        duration: '2022 - 2024',
        title: "I have participated in several hackathons where I gained valuable insights and hands-on experience in solving real-world problems. These events taught me the importance of teamwork, collaboration, and innovation. Through my participation, I developed essential team skills by working closely with others to meet deadlines and achieve common goals. Additionally, leading a team during these hackathons helped me build strong leadership skills, including task delegation, effective communication, and decision-making under pressure." +
            " These experiences have greatly enhanced my ability to work in dynamic, team-oriented environments.",
        icon: '/assets/framer.svg',
        animation: 'victory',
    },

];