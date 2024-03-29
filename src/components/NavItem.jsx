/* eslint-disable react/prop-types */

import { NavLink } from "react-router-dom"

const NavItem = (props) => {
const staticStyles = ' border-2 border-white rounded-xl p-2 min-w-[10vw] text-center max-[1200px]:min-w-[20vw] shadow-xl relative max-sm:p-1 max-sm:text-base'

    return (
<NavLink to={props.to}
    className={
        ({ isActive }) =>
            isActive ? 'text-[#242424] bg-white' + staticStyles
                : 'hover:text-yellow-100 hover:border-yellow-100' + staticStyles
    }>
    {props.children}
</NavLink >
    )
}

export default NavItem;

