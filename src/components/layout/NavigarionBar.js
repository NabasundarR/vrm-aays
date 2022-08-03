import React from "react";
import Logo from "../../img/Mars_icon_white.png";
import { FaRegBell, FaBars, FaUserCircle } from "react-icons/fa";
import $ from "jquery";
import Logout from "../auth/Logout";
import { Link } from "react-router-dom";

export default function NavigarionBar(props) {
  const menubar = () => {
    var sideBar = document.getElementById("mySidenav").style.width;
    if (sideBar === "") {
      document.getElementById("mySidenav").style.width = "300px";
      document.getElementById("main").style.marginLeft = "305px";
      $(".item_menuText").show();
      $(".sideNavMenu_grid").css("justify-content", "start");
    } else if (sideBar === "80px") {
      document.getElementById("mySidenav").style.width = "300px";
      document.getElementById("main").style.marginLeft = "305px";
      $(".item_menuText").show();
      $(".sideNavMenu_grid").css("justify-content", "start");
    } else {
      document.getElementById("mySidenav").style.width = "80px";
      document.getElementById("main").style.marginLeft = "85px";
      $(".item_menuText").hide();
      $(".sideNavMenu_grid").css("justify-content", "center");
    }
  };
  return (
    <div>
      <nav className="NavBar common_bg_color">
        <div className="nav_header ">
          <div className="nav_header_item_div">
            <div className="nav_header_item">
              <div className="logoImg">
                <FaBars onClick={menubar} fontSize={24} cursor="pointer" />
                <Link to={"/"}>
                  <img src={Logo} width={100} alt="logo" />
                </Link>
              </div>
              <div className="_navItems">
                <div className="item_bar">
                </div>

                <div className="navItems">
                  <div className="item_bar profileDetails">
                    <span>Nabasundar</span>
                    <span>Welcome Back</span>
                  </div>
                  <FaUserCircle size={40}/>
                </div>

              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
