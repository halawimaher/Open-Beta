import React from 'react';
import "./Menu_bar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faTimes, faBars, faUser, faLaptopCode, faBriefcase, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";

function Menu_bar() {

    return (

        <div class="main_box">
            <input type="checkbox" id="check"></input>
            <div class="btn_one">
                <label for="check">
                    <FontAwesomeIcon icon={faBars} class="icon1" />
                </label>
            </div>
            <div class="sidebar_menu">
                <div class="logo">
                    <a href="#" />Dashboard<a />
                </div>
                <div class="btn_two">
                    <label for="check">
                        <FontAwesomeIcon icon={faTimes} class="icon2" />

                    </label>

                </div>
                <div class='menu'>
                    <ul>
                        <li><a href="#"><FontAwesomeIcon icon={faHome} class="icon" />
                        Home</a></li>
                        <li><a href="#"><FontAwesomeIcon icon={faUser} class="icon" />
                        About</a></li>
                        <li><a href="#"><FontAwesomeIcon icon={faLaptopCode} class="icon" />
                        Skills</a></li>
                        <li><a href="#"> <FontAwesomeIcon icon={faBriefcase} class="icon" />
                        Experiences</a></li>
                        <li><a href="#"> <FontAwesomeIcon icon={faPhoneAlt} class="icon" />
                        Contact</a></li>

                    </ul>
                </div>

            </div>

        </div>
    );


}
export default Menu_bar;