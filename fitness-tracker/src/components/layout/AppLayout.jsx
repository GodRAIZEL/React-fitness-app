import Sidebar from "./Sidebar"
import "../../styles/AppLayout.css"
import { Outlet } from "react-router-dom"

function AppLayout() {
    return (
        <div className="app-layout">
            <Sidebar />
            <div className="main-content">
                <Outlet/>
            </div>
        </div>
    )
}

export default AppLayout