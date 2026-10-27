"use client"
import { breeds } from "@/data/breeds";
import { useState } from "react";
import { FaStar, FaRegStar } from "react-icons/fa";


const Favorite = async ({id, breed }) => {
return (
<FaStar 
sixe={25}
 className="rounded-full 
bg-white/30 p-2 text-white cursor-pointer"
onClick={() => addFavorite(id)}


/>

);
};

export default Favorite;