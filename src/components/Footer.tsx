import React from 'react';
import Logo from '../assets/logo-text.png';

const Footer = () => {
    return (
        <footer className="bg-[#FFFFFF] mt-16">
        <div className="container mx-auto pl-6 md:pl-16 pr-6 ">
            <div className=" bg-[#F1F5F9]  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 py-8">
                <div>
                    <img src={Logo} alt="Logo" className="w-24" />
                    <p className="text-[#64748B] text-xs mt-4 max-w-full ">
                        Curated tools, technologies, and resources for developers building
modern software.
                    </p>
                    <div className="flex gap-4 mt-4 text-[#475569] text-xs font-semibold">
                        <span>Github</span>
                        <span>Twitter</span>
                        <span>LinkedIn</span>
                    </div>
                </div>
                <div>
                    <h3 className="text-[#0F172A] text-xs font-semibold" >PRODUCT</h3>
                    <ul className="mt-4 space-y-2 text-[#64748B] text-xs">
                        <li className="text-[#64748B] text-xs">Home</li>
                        <li className="text-[#64748B] text-xs">Technologies</li>
                        <li className="text-[#64748B] text-xs">Projects</li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-[#0F172A] text-xs font-semibold" >COMPANY</h3>
                    <ul className="mt-4 space-y-2 text-[#64748B] text-xs">
                        <li className="text-[#64748B] text-xs">About</li>
                        <li className="text-[#64748B] text-xs">Contact</li>
                        <li className="text-[#64748B] text-xs">Careers</li>
                        </ul>
                </div>
                 <div>
                    <h3 className="text-[#0F172A] text-xs font-semibold" >LEGAL</h3>
                    <ul className="mt-4 space-y-2 text-[#64748B] text-xs">
                        <li className="text-[#64748B] text-xs">Privacy Policy</li>
                        <li className="text-[#64748B] text-xs">Terms of Service</li>
                       
                        </ul>
                </div>
            </div>
            <div className="border-t border-[#F1F5F9] mt-8 py-8 flex flex-col md:flex-row justify-between items-center">
              <p className="text-[#94A3B8] text-xs">© 2026 Dev Stack. All rights reserved</p>
              <div className="flex gap-4 text-[#94A3B8] text-xs">
                <span>Privacy</span>
                <span>Terms</span>
              </div>
            </div>
              </div>
            
        </footer>
    );
};

export default Footer;