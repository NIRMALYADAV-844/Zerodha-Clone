import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom"; 



function Navabar() {
  const location = useLocation();
  const currentPath = location.pathname;
  const menu=[

    {
      name: "Sign Up",
      url: "/signup",
    },
 
    {
      name: "About",
      url: "/about",
    },
    {
      name: "Product",
      url: "/products",
    },
    {
      name: "Pricing",
      url: "/pricing",
    },
    {
      name: "Support",
      url: "/support",
    },
  

  ]
  return (
    <nav className="block  max-w-screen   text-white bg-white shadow-sm rounded-md  py-5 sticky top-0">
      <div class="container flex flex-wrap items-center justify-evenly mx-auto  gap-40 text-slate-800">
        <Link class="navbar-brand " to="/">
          <div className=" mr-35 w-[129px]">
            <img
            src="media/logo.svg"
            alt="logo"
          />
          </div>
        </Link>
        <ul class=" gap-7 md:flex hidden "> 
          {
            menu.map((item, index) => (
              
                <li >
                  <Link
                    key={index}
                    class={`nav-link active ${
                      currentPath === item.url ? "text-blue-500" : "text-slate-600"
                    }`}
                    aria-current="page"
                    to={item.url}
                  >
                    {item.name}
                  </Link>
                </li>
            ))}

        </ul>
       
      </div>
    </nav>
  );
}

export default Navabar;

