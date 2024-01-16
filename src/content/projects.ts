import { IProject } from "../types";

export const projectsList: IProject[] = [
    {
        id: "1",
        name: "Burger Builder",
        bigDescription: `
    <p class=" text-slate-600">
        Welcome to our ambitious project, where we are dedicated to
        reshaping the future of technological innovation. Our goal
        is to create solutions that are not only efficient and
        effective but also sustainable and forward-thinking. This
        project stands at the intersection of advanced technology
        and practical application, aiming to set new standards in
        the industry.
    </p>

    <h3 class="text-[24px] text-slate-800 font-bold font-gt mt-4">
        Key Features and Innovations
    </h3>
    <ul class="list-disc list-inside mt-1 text-slate-600">
        <li>State-of-the-art Algorithmic Approaches</li>
        <li>Intuitive and User-Friendly Interface Design</li>
        <li>Scalable Architecture for Growing Demands</li>
        <li>Seamless Integration with Existing Technologies</li>
        <li>Focus on Eco-Friendly and Sustainable Practices</li>
    </ul>

    <h3 class="text-[24px] text-slate-800 font-bold font-gt mt-4">
        Core Benefits
    </h3>
    <ul class="list-disc list-inside mt-1 text-slate-600">
        <li>Enhanced Operational Efficiency</li>
        <li>Unmatched Accuracy and Precision in Performance</li>
        <li>Exceptional User Experience and Accessibility</li>
        <li>Reduced Environmental Impact</li>
        <li>Long-Term Cost Savings and ROI</li>
    </ul>

    <h3 class="text-[24px] text-slate-800 font-bold font-gt mt-4">
        Target Audience and Market Potential
    </h3>
    <p class="mt-1 text-slate-600">
        Our project is designed to cater to a wide range of
        industries, including but not limited to, technology,
        finance, healthcare, and education. The versatility and
        adaptability of our solutions make them ideal for various
        market segments, offering tremendous potential for growth
        and expansion.
    </p>

    <h3 class="text-[24px] text-slate-800 font-bold font-gt mt-4">
        Future Roadmap and Development Plans
    </h3>
    <p class="mt-1 text-slate-600">
        Looking ahead, we are committed to continuous innovation and
        development. Our roadmap includes advanced research, regular
        updates, and new feature rollouts, ensuring that our project
        remains at the cutting edge of technology. We are also
        focused on building a community around our project,
        encouraging collaboration, feedback, and shared growth.
    </p>

    <h3 class="text-[24px] text-slate-800 font-bold font-gt mt-4">
        Invitation for Collaboration and Support
    </h3>
    <p class="mt-1 text-slate-600">
        We warmly invite industry experts, investors, and
        enthusiasts to join us in this exciting journey. Your
        support and collaboration are crucial in helping us bring
        this vision to life. Together, we can create something truly
        remarkable and make a lasting impact in the world of
        technology.
    </p>

        `,
        tools: ["react", "sass", "svelte", "angular"],
        gradient: "gradient-1",
        mainImage: "burger-builder.png",
        type: "software",
        demo: "https://react-my-burger-6a2d3.web.app/",
        github: "",
        smallDescription:
            "Welcome to our ambitious project, where we are dedicated to reshaping the future",
        highlights: [
            "React",
            "Redux",
            "Firebase",
            "Responsive Design",
            "Authentication",
            "Real-time Database",
        ],
        screenshots: [
            "burger-builder.png",
            "burger-builder.png",
            "burger-builder.png",
            "burger-builder.png",
            "burger-builder.png",
        ],
    },
    {
        id: "2",
        name: "E-commerce Store",
        bigDescription: "An online store built with React, Node.js, and MongoDB.",
        tools: ["react", "nodejs", "mongodb", "express"],
        gradient: "gradient-2",
        mainImage: "e-commerce-store.png",
        type: "frontend",
        demo: "https://example-store.com",
        github: "https://github.com/example-store",
        smallDescription: "An online store built with React, Node.js, and MongoDB.",
        highlights: [
            "React",
            "Node.js",
            "MongoDB",
            "Express",
            "RESTful API",
            "Payment Integration",
        ],
        screenshots: ["e-commerce-store.png"],
    },
    {
        id: "3",
        name: "Weather App",
        bigDescription: "A weather application that displays current weather conditions.",
        tools: ["react", "nodejs", "svelte"],
        gradient: "gradient-3",
        mainImage: "weather-app.png",
        type: "fullStack",
        demo: "https://example-weather-app.com",
        github: "https://github.com/example-weather-app",
        smallDescription: "A weather application that displays current weather conditions.",
        highlights: ["React", "TypeScript", "API Integration", "Responsive Design", "Geolocation"],
        screenshots: ["weather-app.png"],
    },
    {
        id: "4",
        name: "Task Manager",
        bigDescription: "A task management application built with React and TypeScript.",
        tools: ["react", "typescript", "redux"],
        gradient: "gradient-4",
        mainImage: "task-manager.png",
        type: "software",
        demo: "https://example-task-manager.com",
        github: "https://github.com/example-task-manager",
        smallDescription: "A task management application built with React and TypeScript.",
        highlights: ["React", "TypeScript", "Redux", "Drag and Drop", "Responsive Design"],
        screenshots: ["task-manager.png"],
    },

    {
        id: "5",
        name: "Social Media App",
        bigDescription: "A social media application built with React, Node.js, and MongoDB.",
        tools: ["react", "nodejs", "mongodb", "express"],
        gradient: "gradient-5",
        mainImage: "social-media-app.png",
        type: "fullStack",
        demo: "https://example-social-media-app.com",
        github: "https://github.com/example-social-media-app",
        smallDescription: "A social media application built with React, Node.js, and MongoDB.",
        highlights: ["React", "Node.js", "MongoDB", "Express", "RESTful API", "Authentication"],
        screenshots: ["social-media-app.png"],
    },

    {
        id: "6",
        name: "Recipe App",
        bigDescription: "A recipe application with search and save functionality.",
        tools: ["react", "typescript", "redux"],
        gradient: "gradient-6",
        mainImage: "recipe-app.png",
        type: "software",
        demo: "https://example-recipe-app.com",
        github: "https://github.com/example-recipe-app",
        smallDescription: "A recipe application with search and save functionality.",
        highlights: ["React", "TypeScript", "Redux", "API Integration", "Responsive Design"],
        screenshots: ["recipe-app.png"],
    },
    {
        id: "7",
        name: "Blog Website",
        bigDescription: "A website for blogging and content creation.",
        tools: ["react", "nodejs", "mongodb", "express"],
        gradient: "gradient-7",
        mainImage: "blog-website.png",
        type: "fullStack",
        demo: "https://example-blog-website.com",
        github: "https://github.com/example-blog-website",
        smallDescription: "A website for blogging and content creation.",
        highlights: ["React", "Node.js", "MongoDB", "Express", "RESTful API", "Authentication"],
        screenshots: ["blog-website.png"],
    },
    {
        id: "8",
        name: "Music Player",
        bigDescription: "A music player application with playlist and audio controls.",
        tools: ["react", "typescript"],
        gradient: "gradient-8",
        mainImage: "music-player.png",
        type: "frontend",
        demo: "https://example-music-player.com",
        github: "https://github.com/example-music-player",
        smallDescription: "A music player application with playlist and audio controls.",
        highlights: [
            "React",
            "TypeScript",
            "Audio Playback",
            "Playlist Management",
            "Responsive Design",
        ],
        screenshots: ["music-player.png"],
    },
    {
        id: "9",
        name: "E-commerce Website",
        bigDescription: "An e-commerce website built with React, Node.js, and MongoDB.",
        tools: ["react", "nodejs", "mongodb", "express"],
        gradient: "gradient-9",
        mainImage: "e-commerce-website.png",
        type: "fullStack",
        demo: "https://example-e-commerce-website.com",
        github: "https://github.com/example-e-commerce-website",
        smallDescription: "An e-commerce website built with React, Node.js, and MongoDB.",
        highlights: ["React", "Node.js", "MongoDB", "Express", "RESTful API", "Authentication"],
        screenshots: ["e-commerce-website.png"],
    },
    {
        id: "10",
        name: "Chat Application",
        bigDescription: "A real-time chat application built with React, Node.js, and Socket.io.",
        tools: ["react", "nodejs", "socketio"],
        gradient: "gradient-10",
        mainImage: "chat-application.png",
        type: "fullStack",
        demo: "https://example-chat-application.com",
        github: "https://github.com/example-chat-application",
        smallDescription: "A real-time chat application built with React, Node.js, and Socket.io.",
        highlights: ["React", "Node.js", "Socket.io", "Real-time Communication", "Authentication"],
        screenshots: ["chat-application.png"],
    },
    {
        id: "11",
        name: "Portfolio Website",
        bigDescription: "A personal portfolio website built with React and TypeScript.",
        tools: ["react", "typescript"],
        gradient: "gradient-11",
        mainImage: "portfolio-website.png",
        type: "frontend",
        demo: "https://example-portfolio-website.com",
        github: "https://github.com/example-portfolio-website",
        smallDescription: "A personal portfolio website built with React and TypeScript.",
        highlights: ["React", "TypeScript", "Responsive Design", "Portfolio Showcase"],
        screenshots: ["portfolio-website.png"],
    },
    {
        id: "12",
        name: "Todo App",
        bigDescription: "A simple todo application built with React and Redux.",
        tools: ["react", "redux"],
        gradient: "gradient-12",
        mainImage: "todo-app.png",
        type: "software",
        demo: "https://example-todo-app.com",
        github: "https://github.com/example-todo-app",
        smallDescription: "A simple todo application built with React and Redux.",
        highlights: ["React", "Redux", "State Management", "Task Organization"],
        screenshots: ["todo-app.png"],
    },
    {
        id: "13",
        name: "Framer Project",
        bigDescription: "A project created using Framer for interactive prototyping.",
        tools: ["framer"],
        gradient: "gradient-13",
        mainImage: "framer-project.png",
        type: "noCode",
        demo: "https://example-framer-project.com",
        github: "",
        smallDescription: "A project created using Framer for interactive prototyping.",
        highlights: ["Framer", "Interactive Prototyping", "User Experience Design"],
        screenshots: ["framer-project.png"],
    },
];
