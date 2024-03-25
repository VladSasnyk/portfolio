import { SiTailwindcss } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { SiReactrouter } from "react-icons/si";
import gsap from "gsap";

import SkillsItem from "../components/SkillsItem";
import { useEffect } from "react";


const Skills = () => {
    useEffect(() => {
        gsap.fromTo('.skills-item', { opacity: 0, y: '-50' }, {y: 0,  opacity: 1 , stagger: .3, duration: .5})
    }, [])

    return <section className="text-center">
        <h1 className="w-full bg-white text-black">Skills</h1>
        <div className="w-auto">
            <ul>
                <SkillsItem icon={<SiTailwindcss />}>HTML,CSS(Tailwind)</SkillsItem>
                <SkillsItem icon={<SiJavascript />}>JavaScript</SkillsItem>
                <SkillsItem icon={<SiReact />}>React JS</SkillsItem>
                <SkillsItem icon={<SiRedux />}>Redux(Redux Toolkit)</SkillsItem>
                <SkillsItem icon={<SiReactrouter />}>React Router DOM</SkillsItem>
                <SkillsItem>GSAP</SkillsItem>
            </ul>
        </div>
    </section>
}

export default Skills;