import { useEffect } from "react";
import Project from "../components/Project";
import gsap from "gsap";

const Projects = () => {
    useEffect(()=>{
        gsap.fromTo('.project-item', { opacity: 0, y: 100}, { opacity: 1, y: 0, stagger: .3})
    }, [])
    
    return <section className="max-[1200px]:pt-8">
        <h1 className="bg-white text-black text-center py-2 px-14">Projects</h1>
        <div className="grid gap-4 max-w-[90%] grid-cols-4 max-[1200px]:grid-cols-2 max-[600px]:grid-cols-1">
            <Project image='/english-space.png' title='English-space' link='https://english-space.vercel.app/' git='https://github.com/VladSasnyk/english-space'>
                The project was developed by React JS. With using tailwind css, gsap, swiper js.
            </Project>
            <Project image='/words-learning.png' title='Words-learning' link='https://words-learning-beta.vercel.app/' git='https://github.com/VladSasnyk/words-learning'>
                The project was developed by React JS. With using Router DOM, axios, tailwind css, gsap.
            </Project>
            <Project image='/pizza-shop.png' title='Pizza-shop' link='https://react-project-vladsasnyks-projects.vercel.app/' git='https://github.com/VladSasnyk/react-pizza-project'>
                The project was developed by React JS. With using Redux Toolkit.
            </Project>
            <Project image='/book-shop.png' title='Book-shop' link='https://jsproject-git-main-vladsasnyks-projects.vercel.app/' git='https://github.com/VladSasnyk/bookstore-js-project'>
                JS with using scrollreveal, swiper js libraries.
            </Project>
        </div>
    </section>
}

export default Projects;