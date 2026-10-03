import React from 'react';
import Logo from "../assets/logo-text.png";

const Footer = () => {
    return (
        
           <footer className="bg-[#F1F5F9] mt-16 border-t border-[#F1F5F9]" >
           <div className="px-10 py-10 grid grid-cols-4 gap-8">
            <div>
                  <div className="flex items-center gap-2">
                    <img src={Logo} alt="" className="ml-10"/>
                    </div>
            </div>
    
           </div>
           </footer>
       
    );
};

export default Footer;