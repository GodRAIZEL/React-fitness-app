import "../../styles/Navigation.css"
import { NavLink } from "react-router-dom"

function Navigation(){
    const navigationItems = [{label : "Dashboard", path : "/"},
        {label : "Exercises", path: "/exercises"},
        {label : "Workout Planner", path : "/planner"},
        {label : "Workout History", path: "/history"},
        {label: "Progress", path: "/progress"}]

    return (
            <ul className="nav-list">
                {navigationItems.map((item) => <li className="list-item" key={item.label}><NavLink className="nav-link" to={item.path}>{item.label}</NavLink></li>)}
            </ul>
    )
}

export default Navigation