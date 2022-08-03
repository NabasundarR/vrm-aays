import React from "react";
import { FaThLarge, FaSignOutAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../../css/Style.css";
import Logout from "../auth/Logout";

export default function SideMenu() {
  return (
    <div>
      <div id="mySidenav" className="sideNav common_bg_color">
        <div className="sideNavMenu">
          <div className="sideNavMenu_grid">
            <Link to={"/"}>
              <div className="items_menu">
                <div>
                  <FaThLarge  fontSize={28} />
                </div>
                <div className="item_menuText">Home</div>
              </div>
            </Link>

            <>
             <Logout/>
            </>
          </div>
        </div>
      </div>
    </div>
  );
}
