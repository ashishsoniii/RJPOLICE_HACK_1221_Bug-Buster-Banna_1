import React from "react";
import { useMediaQuery } from "react-responsive";
import big_logo from "./photos/Instagram_logo.svg.png";
import small_logo from "./photos/87390.png";
import message_icon from "./photos/icons8-facebook-messenger-256.png";
import test_pp_icon from "./photos/1.jpg";
import navbar_icon from "./photos/navigation-bar-icon-20.jpg";
import NavbarItem from "./NavbarItem";
import { Link } from "react-router-dom";

function Navbar() {
  const largePage = useMediaQuery({ query: "(min-width: 1420px)" });
  const middlePage = useMediaQuery({ query: "(max-width: 1420px)" });
  return (
    <div>
      <div className="instagram-logo">
        <Link to="/">
          <div className="main-logo">
            {largePage && (
              <img
                className="big-logo"
                src="https://www.police.rajasthan.gov.in/old/hackathon/assetsNew/Logo.png"
                alt="logo"
              />
            )}
            {middlePage && (
              <img
                className="small-logo"
                src="https://www.police.rajasthan.gov.in/old/hackathon/assetsNew/Logo.png"
                alt="logo"
              />
            )}
          </div>
        </Link>
      </div>
      <div className="nav-items">
        <Link to="/">
          <NavbarItem name={"Home"}>
            <path
              d="M9.005 16.545a2.997 2.997 0 0 1 2.997-2.997A2.997 2.997 0 0 1 15 16.545V22h7V11.543L12 2 2 11.543V22h7.005Z"
              fill="none"
              stroke="currentColor"
              strokeLinejoin="round"
              strokeWidth="2"
            ></path>
          </NavbarItem>
        </Link>
        <Link to="/">
          <NavbarItem className="navbar-mobile-custom" name="Social Feed">
            <path
              d="M19 10.5A8.5 8.5 0 1 1 10.5 2a8.5 8.5 0 0 1 8.5 8.5Z"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            ></path>
            <line
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              x1="16.511"
              x2="22"
              y1="16.511"
              y2="22"
            ></line>
          </NavbarItem>
        </Link>
        <Link to="/">
          <NavbarItem name="Poll">
            <polygon
              fill="none"
              points="13.941 13.953 7.581 16.424 10.06 10.056 16.42 7.585 13.941 13.953"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            ></polygon>
            <polygon
              fillRule="evenodd"
              points="10.06 10.056 13.949 13.945 7.581 16.424 10.06 10.056"
            ></polygon>
            <circle
              cx="12.001"
              cy="12.005"
              fill="none"
              r="10.5"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            ></circle>
          </NavbarItem>
        </Link>
        <Link to="/police">
          <NavbarItem name="Police Portal">
            <line
              fill="none"
              stroke="currentColor"
              strokeLinejoin="round"
              strokeWidth="2"
              x1="2.049"
              x2="21.95"
              y1="7.002"
              y2="7.002"
            ></line>
            <line
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              x1="13.504"
              x2="16.362"
              y1="2.001"
              y2="7.002"
            ></line>
            <line
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              x1="7.207"
              x2="10.002"
              y1="2.11"
              y2="7.002"
            ></line>
            <path
              d="M2 12.001v3.449c0 2.849.698 4.006 1.606 4.945.94.908 2.098 1.607 4.946 1.607h6.896c2.848 0 4.006-.699 4.946-1.607.908-.939 1.606-2.096 1.606-4.945V8.552c0-2.848-.698-4.006-1.606-4.945C19.454 2.699 18.296 2 15.448 2H8.552c-2.848 0-4.006.699-4.946 1.607C2.698 4.546 2 5.704 2 8.552Z"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            ></path>
          </NavbarItem>
        </Link>

        {/* <Link to="/direct/inbox/">
          <div id="message">
            <div className="red-badge" style={{ zIndex: "10" }}>
              N!
            </div>
            <img src={message_icon} alt="logo" />
            Messages
          </div>
        </Link> */}

        <Link to="/">
          <NavbarItem className="navbar-mobile-custom" name="Notifications">
            <path
              d="M2 12v3.45c0 2.849.698 4.005 1.606 4.944.94.909 2.098 1.608 4.946 1.608h6.896c2.848 0 4.006-.7 4.946-1.608C21.302 19.455 22 18.3 22 15.45V8.552c0-2.849-.698-4.006-1.606-4.945C19.454 2.7 18.296 2 15.448 2H8.552c-2.848 0-4.006.699-4.946 1.607C2.698 4.547 2 5.703 2 8.552Z"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            ></path>
            <line
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              x1="6.545"
              x2="17.455"
              y1="12.001"
              y2="12.001"
            ></line>
          </NavbarItem>
        </Link>
        {/* <Link to="/">
                <NavbarItem name="Create">
                    <path
                        d="M2 12v3.45c0 2.849.698 4.005 1.606 4.944.94.909 2.098 1.608 4.946 1.608h6.896c2.848 0 4.006-.7 4.946-1.608C21.302 19.455 22 18.3 22 15.45V8.552c0-2.849-.698-4.006-1.606-4.945C19.454 2.7 18.296 2 15.448 2H8.552c-2.848 0-4.006.699-4.946 1.607C2.698 4.547 2 5.703 2 8.552Z"
                        fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                    <line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="6.545"
                          x2="17.455" y1="12.001" y2="12.001"></line>
                    <line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="12.003"
                          x2="12.003" y1="6.545" y2="17.455"></line>
                </NavbarItem></Link>
                    */}

        <Link to="/">
          <div
            className="navbar-mobile-custom"
            style={{ position: "absolute", bottom: "50px" }}
          >
            <img src={navbar_icon} alt="logo" />
            AI Chatbot
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
