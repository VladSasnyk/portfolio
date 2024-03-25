/* eslint-disable react/prop-types */

const SkillsItem = (props) => {
    return <li className="skills-item">
        <div className="flex gap-2 items-center justify-center p-2">
            <p>{props.children}</p>
            {props.icon}
        </div>
    </li>
}

export default SkillsItem;