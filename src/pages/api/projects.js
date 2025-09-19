const projects=[
    {
        id:1,
        title:"Chickana Clone – Functional Food Delivery App", 
        description:"A fully functional clone of the Chickana food delivery website, developed using Next.js. This project replicates both the UI and core features of a typical food ordering platform. Users can browse menu items, filter by category, add items to the cart, and proceed with a simulated checkout flow. The app also includes responsive design.", 
        image:"/images/chickana.png",
        vercel:"", 
        techStack:[{id:1,techTitle:"nextjs"}, {id:2,techTitle:"tailwind"}, {id:3,techTitle:"vercel"}]
    },
    {
        id:2,
        title:"Autocar Plus", 
        description:"A functional clone of Autocar Plus KSA, built with React and Next.js. This project replicates the core UI, layout, and some functionality of the original site (e.g., search/filter interactions, dynamic pages). Focused on responsive design, component reuse, and clean structure.", 
        image:"/images/autocar.png",
        vercel:"", 
        techStack:[{id:1,techTitle:"nextjs"}, {id:2,techTitle:"tailwind"}, {id:3,techTitle:"vercel"}]
    },
    {
        id:3,
        title:"Elegant", 
        description:"Elegant is a clothing e-commerce website, developed using React and bootstrap. The design focuses on elegance and simplicity, with a smooth user experience and a fully responsive layout that works seamlessly across all devices.", 
        image:"/images/elegant.png",
        vercel:"https://wafaasayed10.github.io/Elegant/#/login", 
        techStack:[{id:1,techTitle:"react"}, {id:2,techTitle:"bootstrap"}]
    },
    {
        id:4,
        title:"Movie App", 
        description:"Movie Website showcasing a collection of popular and trending films with a clean, modern UI. The project focuses on displaying movie data like titles, posters, genres, and ratings in a responsive layout. Designed as a frontend-only project for practicing API integration and dynamic content rendering.", 
        image:"/images/movies.png",
        vercel:"https://wafaasayed10.github.io/webmasters-task2movies/", 
        techStack:[{id:1,techTitle:"react"}, {id:2,techTitle:"CSS"}]
    },
    {
        id:5,
        title:"To Do List", 
        description:"A basic to-do list app for adding and managing daily tasks with a clean and responsive interface.", 
        image:"/images/todoapp.png",
        vercel:"https://wafaasayed10.github.io/webmasters-todoList/messy_todo_project.html", 
        techStack:[{id:1,techTitle:"HTML"}, {id:2,techTitle:"CSS"}, {id:3,techTitle:"javascript"}]
    },
    {
        id:6,
        title:"Mealify", 
        description:"Mealify is a modern food website built as a frontend-only project, focusing on a clean, responsive design with user-friendly UI components.", 
        image:"/images/melify.png",
        vercel:"https://wafaasayed10.github.io/mealify/html/index.html", 
        techStack:[{id:1,techTitle:"HTML"}, {id:2,techTitle:"CSS"}]
    },
]

export default function handler(req, res) {
    res.status(200).json(projects);
}