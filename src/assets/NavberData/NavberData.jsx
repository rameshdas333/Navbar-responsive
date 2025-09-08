import { useEffect, useState } from "react";
import Link from "../../Link/Link";
import { RiMenu2Line } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";

const NavberData = () => {

    const [open,setOpen] = useState(false);

      const [navscroll,setNavscroll] = useState(false)

       useEffect(()=>{
  function scrollFunction(){
    console.log('ok')
    if(window.scrollY >200 ){
     setNavscroll(true)


    }else{
      setNavscroll(false)
    }
  }
  window.addEventListener("scroll",scrollFunction)
 },[])
     const routes =[
        
       
            {id: 1, name: "Home", path: "/"},
            {id: 2, name: "About", path: "/users/About"},
            {id: 3, name: "Service", path: "/users/Service"},
            {id: 4, name: "Contact", path: "/users/Contact"},
            {id: 5, name: "Not Found", path: "/users/Not Found"}
         
          ];
    return (
        <div className="text-black">


         <div className="md:hidden text-2xl" onClick={() => setOpen(!open)}>

            {
                open === true ? 
                <IoMdClose className="" ></IoMdClose>
               : <RiMenu2Line className=" "></RiMenu2Line> 



            }




         </div>

     <div className={`z-50 w-full ${navscroll ? 'bg-red-400': ''} fixed top-0 left-0`}>
          <ul className={`md:flex absolute md:static py-4
             duration-1000 ${open ? 'top-6' : '-top-48'} bg-yellow-200 px-4`}>

            {
                routes.map(route=> <Link key={route.id} route={route}></Link>)
            }
        </ul>
      </div>
        </div>
    );
};

export default NavberData;