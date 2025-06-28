import { Link } from "react-router-dom";

const Nav = ()=> {
    return (
        <nav>
            <ul className="flex gap-5 items-center">
                <li >
                   <Link to={'/'}>Home</Link> 
                </li>
                 <li>
                    About
                </li>
                 <li>
                    Contact
                </li>
                 <li>
                    <button type="button" className="px-2 py-1 rounded bg-[#c5e09b] hover:bg-[#7cba01]">Login</button>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;