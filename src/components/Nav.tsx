import {useState} from "react";
import Logo from "../assets/logo-text.png";

const Nav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav>
        <div className="container mx-auto px-4 md:px-6 mt-4 flex justify-between">
            <img src={Logo} alt="" className="ml-2 md:ml-10"/>
            <ul className="hidden md:flex gap-4 items-center">
                <li className="text-[#DB2777]">Home</li>
                <li className="text-[#475569]">Technologies</li>
                <li className="text-[#475569]">Projects</li>
                <li className="text-[#475569]">About</li>
                <li className="text-[#475569]">Contact</li>
            </ul>

            <div className="hidden md:flex gap-3 items-center">
                <button  className= "text-[#334155]">Sign In</button>
                <button  className= "btn btn-secondary bg-[#D91B7E] rounded-[20px] text-[#FFFFFF]">Sign Up</button>

            </div>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-2xl ">☰</button>
            
        </div>
        {isMenuOpen && (
            <div className="md:hidden bg-[#1E293B] p-4">
                <ul className="flex flex-col gap-4 items-center">
                    <li className="text-[#DB2777]">Home</li>
                    <li className="text-[#475569]">Technologies</li>
                    <li className="text-[#475569]">Projects</li>
                    <li className="text-[#475569]">About</li>
                    <li className="text-[#475569]">Contact</li>
                </ul>
                <div className="flex  gap-3  mt-5">
                    <button  className= "text-[#334155]">Sign In</button>
                    <button  className= "btn btn-secondary bg-[#D91B7E] rounded-[20px] text-[#FFFFFF]">Sign Up</button>
                </div>
            </div>
        )}
        </nav>
    );
};

export default Nav;
