import React from "react";
import database from "../API/APIinit";

const d = new database();

const Navbar = () => {
  return (
      <header className="text-gray-600 body-font">
          <img src="./images/longnav.png" className="absolute h-[100px] w-full -z-10"/>
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <span className="ml-3 text-xl">Kwaiii Bakery</span>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <a className="mr-5 hover:text-gray-900">Language</a>
            <a className="mr-5 hover:text-gray-900">Contact Us</a>
            <a className="mr-5 hover:text-gray-900">Third Link</a>
            <a className="mr-5 hover:text-gray-900">Fourth Link</a>
          </nav>
          <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
            onClick={() => {
              d.getproducts();
            }}
          >Button
            
          </button>
        </div>
      </header>
  )
}

export default Navbar