import React from "react";
import "./NetflixNavbar.css";
import netflixLogo from "../images/Logonetflix.png";
import user from "../images/user.png";
import { Link } from "react-router-dom";

const NetflixNavbar = ({ noUser }) => {
  return (
    <div style={{ display: "grid" }}>
      <div className="custom-navbar">
        <div className="left-content">
          <Link to="/">
            <img src={netflixLogo} alt="" width="140px" />
          </Link>
          <Link to="/all-movies">Home</Link>
          <Link to="/tv-shows">Tv Shows</Link>
          <Link to="/movies">Movies</Link>
          <Link to="/my-list">My List</Link>
        </div>
        <div className="navbar-item">
          <span>
            <svg
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="search-icon ltr-4z3qvp e1svuwfo1"
              data-name="MagnifyingGlass"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10ZM15.6177 17.0319C14.078 18.2635 12.125 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10C19 12.125 18.2635 14.078 17.0319 15.6177L22.7071 21.2929L21.2929 22.7071L15.6177 17.0319Z"
                fill="currentColor"
              ></path>
            </svg>
          </span>
          <span>
            <svg
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="ltr-4z3qvp e1svuwfo1"
              data-name="Bell"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M13.0002 4.07092C16.3924 4.55624 19 7.4736 19 11V15.2538C20.0489 15.3307 21.0851 15.4245 22.1072 15.5347L21.8928 17.5232C18.7222 17.1813 15.4092 17 12 17C8.59081 17 5.27788 17.1813 2.10723 17.5232L1.89282 15.5347C2.91498 15.4245 3.95119 15.3307 5.00003 15.2538V11C5.00003 7.47345 7.60784 4.55599 11.0002 4.07086V2H13.0002V4.07092ZM17 15.1287V11C17 8.23858 14.7614 6 12 6C9.2386 6 7.00003 8.23858 7.00003 11V15.1287C8.64066 15.0437 10.3091 15 12 15C13.691 15 15.3594 15.0437 17 15.1287ZM8.62593 19.3712C8.66235 20.5173 10.1512 22 11.9996 22C13.848 22 15.3368 20.5173 15.3732 19.3712C15.3803 19.1489 15.1758 19 14.9533 19H9.0458C8.82333 19 8.61886 19.1489 8.62593 19.3712Z"
                fill="currentColor"
              ></path>
            </svg>
          </span>
          {!noUser ? <img src={user} alt="" width="30px" /> : ""}
        </div>
      </div>
    </div>
  );
};

export default NetflixNavbar;
