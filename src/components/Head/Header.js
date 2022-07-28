import React, { useState } from "react"
import "./Header.css"
import logo from "./th.png"

const Header = () => {
  // fixed Header
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header")
    header.classList.toggle("active", window.scrollY > 100)
  })
  // Toogle Menu
  const [Mobile, setMobile] = useState(false)
  return (
    <>
      <header className='header'>
        <div className='container d_flex'>
          <div className='logo'>
            <img src={logo} alt='' height={"50vh"}/>
          </div>

          <div className='navlink'>
            <ul className={Mobile ? "nav-links-mobile" : "link f_flex uppercase"} onClick={() => setMobile(false)}>
              <li>
                <a href='#home'>Introduction</a>
              </li>
              <li>
                <a href='#features'>About Me</a>
              </li>

              <li>
                <a href='#resume'>resume</a>
              </li>

            </ul>

          </div>
        </div>
      </header>
    </>
  )
}

export default Header