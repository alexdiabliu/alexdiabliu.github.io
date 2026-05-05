const projectFilters = [
    "All",
    "Python",
    "JavaScript",
    "React",
    "Raspberry Pi",
    "IoT",
    "Web Dev",
    "Machine Learning",
    "Robotics",
    "Biomedical"
];

const projectsData = [
    {
        title: "Vestomy: Heavy-Duty Ostomy Belt",
        description: "Medical device design project focused on comfort, reliability, and day-to-day usability.",
        href: "vestomy.html",
        image: "vestomy-images/vestomy.png",
        categories: ["Engineering", "Biology", "Biomedical"],
        tags: ["C++", "Arduino", "Biomedical", "Prototype", "Robotics"],
        layout: "wide"
    },
    {
        title: "Ace-Spectacular Hips",
        description: "Hip implant concept and engineering exploration balancing biomechanics and manufacturability.",
        href: "hips.html",
        image: "images/hips.png",
        categories: ["Engineering", "Biology", "Biomedical"],
        tags: ["Rust", "CAD", "Biomechanics", "Robotics"],
        layout: "compact"
    },
    {
        title: "ThermoSleeve",
        description: "Wearable neuromuscular therapy concept combining hardware and software signals.",
        href: "thermosleeve.html",
        image: "images/thermosleeve.jpg",
        categories: ["Engineering", "Software", "IoT"],
        tags: ["Python", "Raspberry Pi", "IoT", "Embedded", "Machine Learning"],
        layout: "wide"
    },
    {
        title: "One-Wheel Wheelchair",
        description: "Inclusive mobility engineering project for one-handed wheelchair usability.",
        href: "onewheel.html",
        image: "images/onewheel.png",
        categories: ["Engineering", "Robotics"],
        tags: ["C++", "Arduino", "Robotics", "Accessibility"],
        layout: "compact"
    },
    {
        title: "Mentis Chatbot",
        description: "Mental health chatbot concept with user-focused experience and practical feature flow.",
        href: "mentis.html",
        image: "images/mentis.png",
        categories: ["Software", "Python", "Machine Learning"],
        tags: ["Python", "TypeScript", "React", "Machine Learning", "NLP", "Web Dev"],
        layout: "tall"
    },
    {
        title: "LinkClicks Ad Manager",
        description: "API-driven software integration connecting ad operations with LinkedIn workflows.",
        href: "linkclicks.html",
        image: "images/linkclicks.png",
        categories: ["Software", "Python", "Marketing", "Web Dev"],
        tags: ["Python", "Django", "Tailwind CSS", "Web Dev", "APIs"],
        layout: "compact"
    },
    {
        title: "Werrv Scarcity Programming",
        description: "Conversion-oriented website programming with conditional product display logic.",
        href: "werrv.html",
        image: "images/werrv.png",
        categories: ["Software", "Marketing", "Web Dev"],
        tags: ["JavaScript", "React", "Web Dev", "E-commerce", "Tailwind CSS"],
        layout: "compact"
    },
    {
        title: "Alpha-Synuclein in Parkinson's",
        description: "Biology-focused research synthesis on mechanisms related to Parkinson's progression.",
        href: "synuclein.html",
        image: "images/parkinsons.png",
        categories: ["Biology", "Machine Learning"],
        tags: ["Python", "Machine Learning", "Neuroscience", "Research"],
        layout: "compact"
    },
    {
        title: "Mechanotransduction in Glaucoma",
        description: "Cellular biology presentation and study examining pathways in glaucoma development.",
        href: "glaucoma.html",
        image: "images/glaucoma.png",
        categories: ["Biology", "Biomedical"],
        tags: ["Python", "Biomedical", "Mechanobiology", "Research"],
        layout: "compact"
    },
    {
        title: "Digital Marketing Plan",
        description: "Content strategy and growth planning for small-business digital channels.",
        href: "aleph.html",
        image: "images/aleph.png",
        categories: ["Marketing", "Web Dev"],
        tags: ["TypeScript", "React", "Web Dev", "Analytics", "Strategy"],
        layout: "compact"
    },
    {
        title: "DeltaHacks Promo Video",
        description: "Promotional media work highlighting event storytelling and community engagement.",
        href: "deltahacks.html",
        image: "images/deltahacks.png",
        categories: ["Marketing", "Software"],
        tags: ["JavaScript", "TypeScript", "Brand", "Campaigns", "Web Dev"],
        layout: "compact"
    },
    {
        title: "Behaivior Health Research",
        description: "Health-market analysis focused on behavioral technology and stakeholder insights.",
        href: "behaivior.html",
        image: "images/behaivior.png",
        categories: ["Marketing", "Biology", "Machine Learning"],
        tags: ["Python", "Machine Learning", "Healthcare", "Behavioral Data"],
        layout: "compact"
    },
    {
        title: "Multilingual Physio Platform",
        description: "Consulting + engineering concept for multilingual rehab workflows and implementation.",
        href: "consulting.html",
        image: "consulting-images/poster.png",
        categories: ["Software", "Engineering", "Biology", "IoT"],
        tags: ["TypeScript", "React", "Raspberry Pi", "IoT", "Healthcare", "Web Dev"],
        layout: "wide"
    },
    {
        title: "Embedded 3D Spatial Mapping System",
        description: "Real-time embedded system for spatial mapping and environment reconstruction workflows.",
        href: "spatialmapping.html",
        image: "images/pic6.svg",
        categories: ["Engineering", "Software", "IoT", "Robotics"],
        tags: ["C++", "Embedded", "Raspberry Pi", "Computer Vision", "Robotics", "IoT"],
        layout: "wide"
    },
    {
        title: "Smart Home Assistant",
        description: "Automation-oriented smart home assistant integrating voice and device orchestration.",
        href: "smarthomeassistant.html",
        image: "images/pic6.svg",
        categories: ["Software", "IoT", "Web Dev"],
        tags: ["Python", "TypeScript", "IoT", "APIs", "Home Automation", "Web Dev"],
        layout: "compact"
    },
    {
        title: "GPU Performance Metrics (4H03)",
        description: "GPU profiling and performance analysis toolkit for parallel computing coursework.",
        href: "gpuperfmetrics.html",
        image: "images/pic6.svg",
        categories: ["Software", "Engineering"],
        tags: ["C++", "Python", "CUDA", "Performance", "Systems", "Machine Learning"],
        layout: "compact"
    },
    {
        title: "Automatic Car",
        description: "Autonomous vehicle control and sensing project with embedded intelligence loops.",
        href: "automaticcar.html",
        image: "images/pic6.svg",
        categories: ["Engineering", "IoT", "Robotics"],
        tags: ["C++", "Arduino", "Raspberry Pi", "Robotics", "Control Systems", "IoT"],
        layout: "wide"
    },
    {
        title: "InvoiceMaker",
        description: "Invoice generation web tool for streamlined billing workflows and export automation.",
        href: "invoicemaker.html",
        image: "images/pic6.svg",
        categories: ["Software", "Web Dev", "Marketing"],
        tags: ["TypeScript", "React", "Tailwind CSS", "Web Dev", "Productivity", "APIs"],
        layout: "compact"
    },
    {
        title: "Movement Classifier",
        description: "Human movement classification model and pipeline for sensor-driven activity prediction.",
        href: "movementclassifier.html",
        image: "images/pic6.svg",
        categories: ["Software", "Machine Learning", "Biology"],
        tags: ["Python", "Machine Learning", "Data Science", "Neuroscience", "Classification"],
        layout: "compact"
    }
];

