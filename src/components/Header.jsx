import HeaderItem from "./HeaderItem";
import React,{useState} from "react";




import profileLogo from "../assets/images/boy.png"
import logo from "../assets/images/logo.png";
import { menu } from "../constants";
import {HiDotsVertical } from "react-icons/hi";

const Header = () => {

    const [toggle, setToggle] = useState(false);

  return (
    <div className='w-full flex items-center justify-between p-5 '>
        <div className="flex items-center gap-8">
            <img src={logo} alt="logo" className='w-[80px] md:w-[115px] object-cover'  />
            <div className=" hidden lg:flex gap-8">
                {menu.map((items) => (
                    <HeaderItem name={items.name} Icon={items.icon} />
                ))}
            </div>
            <div className="flex lg:hidden gap-5">
                {menu.map((items,index) =>index<3&& (
                    <HeaderItem name={''} Icon={items.icon} />
                ))}
                <div onClick={() => setToggle(!toggle)}>
                    <HeaderItem name={''} Icon={HiDotsVertical} />
                    { toggle ? <div className="absolute mt-3 bg-[#121212] border-[1px] border-gray-700 px-5 py-4">
                        {menu.map((items,index) =>index>2&& (
                            <HeaderItem name={items.name} Icon={items.icon} />
                        ))}
                    </div> : null }
                </div>
            </div>
        </div>
        <img src={profileLogo} alt="profile-icon" className="w-[40px] rounded-full" />
    </div>
  )
}

export default Header;