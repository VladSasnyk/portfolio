import gsap from "gsap";
import { useEffect } from "react";
import TypingText from "../components/TypingText";

const HomePage = () => {
    useEffect(() => {
        const timeline = gsap.timeline();
        timeline.fromTo('#front-end', { x: '-200' }, { opacity: 1, x: 0, delay: 1, duration: 1, ease: 'back.inOut' })
            .to('#welcome', { opacity: 1, duration: .5 })
            .fromTo('#download-cv', { opacity: 0, y: 300 }, { y: 0, opacity: 1}, '-=.5')

    }, [])

    return (<section className="w-full">
        <div className="text-center flex flex-col gap-4 text-5xl">
            <TypingText text="Hi, i'm Vladyslav Sasnyk" />
            <p className="text-black w-max m-auto bg-white text-4xl opacity-0 p-2" id='front-end'>
                front-end developer
            </p>
            <p className="text-3xl opacity-0" id='welcome'>
                welcome to my portfolio website
            </p>
        </div>


        <a href="https://drive.google.com/file/d/1zbjXIDRLdzda_sWoH9vvXmbqLSyQqLZS/view" target="_blanc" id='download-cv'>
            <button className="border-2 border-white rounded-xl p-2 text-xl hover:text-yellow-100 hover:border-yellow-100 active:text-black active:bg-white">
                DOWNLOAD CV
            </button>
        </a>


    </section>)
}

export default HomePage; 