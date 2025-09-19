const internship=[
    {
        id:1,
        certificate:"Web masters internship", 
        title:"Front-end (Nextjs)",
        description:"A remote internship focused on building modern front-end applications using Next.js and React. Worked on real-world projects, improved performance optimization, and applied best practices in responsive design and accessibility.", 
        date:"Cairo - online | May 2025 - Sep 2025" ,
        image:"/images/web_masters.png",
    },
    {
        id:2,
        certificate:"EME", 
        title:"Front-end (React)",
        description:"An on-site internship in Assiut where I developed interactive UIs using React.js. Gained hands-on experience in component-based architecture, API integration, and version control with Git.", 
        date:"Assiut | Sep 2024 - Dec 2024",
        image:"/images/eme.jpg",
    },
    {
        id:3,
        certificate:"DEPI", 
        title:"Front-end",
        description:"An intensive front-end internship focused on core web development skills including HTML, CSS, JavaScript, and Angular. Participated in building UI components and learned team collaboration using Agile methodology.", 
        date:"Assiut | Jun 2024 - Dec 2024",
        image:"/images/depi.png",
    },
]

export default function handler(req, res) {
    res.status(200).json(internship);
}