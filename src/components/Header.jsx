import { useEffect } from "react";
import NavItem from "./NavItem";
import gsap from "gsap";

const Header = () => {
    useEffect(() => {
        gsap.fromTo('#header-nav', { y: '-100' }, { y: 0, duration: 1 })
    }, [])


    return <header className="w-full flex items-center justify-center fixed top-0 left-0 z-50">
        <nav className="flex gap-4 bg-gray-200/20 p-1 rounded-xl mt-4 max-md:w-[90vw] items-center justify-center max-sm:w-[95vw] max-sm:gap-2" id='header-nav'>
            <NavItem to='/'>ABOUT</NavItem>
            <NavItem to='/skills'>SKILLS</NavItem>
            <NavItem to='/projects'>PROJECTS</NavItem>
            <NavItem to='/contacts'>CONTACTS</NavItem>
        </nav>

    </header>
}

export default Header;