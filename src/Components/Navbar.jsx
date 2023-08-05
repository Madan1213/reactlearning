import React from "react";

export default function Navbar(){
    return(
        <div className="h-16 w-full bg-teal-700 text-white cursor-pointer sticky top-0 z-50">
            <nav className="">
                <h3 className="text-2xl text-center mt-4">BookShop</h3>
            </nav>
        </div>
    );
}