import { FaTelegram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


import gsap from "gsap";
import { useEffect } from "react";



const Contacts = () => {
    useEffect(() => {
        gsap.fromTo('#telegram, #gmail', { y: '-200' }, { y: 0 , duration: 1.5, ease:'expo'})
        gsap.fromTo('#linkedin, #git', { y: '200' }, { y: 0 , duration: 1.5, ease:'expo'})
    }, [])


    return <section>
        <div className="flex gap-6 text-[250%] max-sm:text-[175%]">
            <a href='https://t.me/vladsasnyk' target="_blanc" className="hover:text-yellow-100" id='telegram'>
                <FaTelegram />
            </a>
            <a href="https://www.linkedin.com/in/vlad-sasnyk-b7a7242a4/" target="_blanc" className="hover:text-yellow-100" id='linkedin'>
                <FaLinkedin />
            </a>
            <a href="mailto:sasnykvlad@gmail.com" className="hover:text-yellow-100" id='gmail'>
                <FaGoogle />
            </a>
            <a href="https://github.com/VladSasnyk" className="hover:text-yellow-100" id='git' target="_blanc">
                <FaGithub />
            </a>

        </div>
    </section>

}

export default Contacts;