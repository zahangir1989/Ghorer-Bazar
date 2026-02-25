import React from "react";
import { AiFillPhone } from "react-icons/ai";
import { IoIosSearch } from "react-icons/io";
import { IoBagOutline } from "react-icons/io5";
import { MdOutlineManageAccounts } from "react-icons/md";
import bannerImg from "/bazar.png";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <div>
      <div className="mx-auto bg-[#FC8934] text-white text-[14px] py-2">
        <h3 className="flex justify-center items-center">
          আমাদের যে কোন পণ্য অর্ডার করতে কল বা WhatsApp করুন
          <span>
            <AiFillPhone />
          </span>{" "}
          <span>+8801321208940 |</span>{" "}
          <span>
            {" "}
            <AiFillPhone />
          </span>{" "}
          <span>হট লাইন: 09642-922922</span>
        </h3>
      </div>

      <div className="flex mx-auto py-3 gap-72 justify-center items-center">
        <div>
          <span>
            <IoIosSearch />
          </span>
        </div>

        <div>
          <img className="w-24 " src="logo.avif" alt="" />
        </div>
        <div className="flex gap-6">
          <Link to={"/register"}>
            <MdOutlineManageAccounts />
          </Link>
          <span>
            {" "}
            <IoBagOutline />
          </span>
        </div>
      </div>

      <div className="bg-[#f3f3f3] py-4">
        <ul className="flex justify-center  items-center gap-10">
          <li>OFFER ZONE</li>
          <li>Best Seller</li>
          <li>Oil</li>
          <li>Ghee</li>
          <li>Dates(খেজুর)</li>
          <li>খেজুর গুড়</li>
          <li>Honey</li>
          <li>Masala</li>
          <li>Nuts & seeds</li>
          <li>Tea/Coffee</li>
          <li>Honeycomb</li>
          <li>Organic Zone</li>
          <li>Pickle</li>
        </ul>
      </div>

      <div className="w-screen overflow-hidden pt-6">
        <img
          src={bannerImg}
          alt="Banner"
          className="w-full h-[300px] md:h-[450px] lg:h-[600px] object-cover"
        />
      </div>
    </div>
  );
};

export default Navbar;
