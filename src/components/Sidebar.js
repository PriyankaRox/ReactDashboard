import React from "react";
import { FaHome, FaChartBar, FaClipboardList } from "react-icons/fa";
import { SiCodeblocks } from "react-icons/si";
import { FaWallet } from "react-icons/fa6";
import { AiOutlineLogout } from "react-icons/ai";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="SidebarContainer">
      <SiCodeblocks size={38} style={{ margin: "0px 0px 20px 0px" }} />
      <div className="SidebarIcon">
        <FaHome size={36} />
      </div>
      <div className="SidebarIcon">
        <FaChartBar size={36} />
      </div>
      <div className="SidebarIcon">
        <FaClipboardList size={36} />
      </div>
      <div className="SidebarIcon">
        <FaWallet size={36} />
      </div>
      <div className=" move-to-end">
        <AiOutlineLogout size={36} />
      </div>
    </div>
  );
};

export default Sidebar;
