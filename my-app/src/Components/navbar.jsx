import React from "react";
import "../css/navbar.css";

const logo_dhando_src =
  "https://blogger.googleusercontent.com/img/a/AVvXsEg9iUHEWHtteJQ12NiYWssXwX6TTRnyhuhuav9pLcHp_c4FVukCDlSjRHz7WOJy1kgJDfQvaKQainp7YdKYwotdKaSA3cqqI8cXu6_S-xa2-nQq6lp0qno4oZIZ3-9PvQ1p_T5xx2IiXxUXHxjEo1BGJPk2Mbi4H_700TpaT6-5C7NZ8TfWp_U-r6_w=s1600";

function NavBar() {
  return (
    <nav class="navbar navbar-expand-lg bg-transparent" id="navbar">
      <div class="container-fluid ">
        <a class="navbar-brand" href="#">
          <img
            src={logo_dhando_src}
            title="dhando.in"
            alt="dhando.in"
            width={"150px"}
          />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="#">
                Feed
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Community
              </a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Tools
                <i class="fa-solid fa-angle-down"></i>
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a class="dropdown-item" href="#">
                    FD Calculator
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    SIP Calculator
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Dream Come True
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Loan EMI Calculator
                  </a>
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Screens
              </a>
            </li>
          </ul>
        </div>
        <form class="d-flex searchBar">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn" type="submit">
            <i class="fa-solid fa-magnifying-glass"></i>
          </button>
        </form>
      </div>
    </nav>
  );
}

export default NavBar;