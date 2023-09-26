'use client'
import { IconApps, IconHome, IconFile, IconFolder } from '@douyinfe/semi-icons'
import AppComponents from './components/app-component'
import ErrorComponent from './components/error-component'
import './index.css'
import { useState } from 'react'

const MENU_CONFIG = [
  {
    title: 'Welcome',
    components: null,
    menuKey: 'welcome',
    children: [
      {
        title: 'Home',
        menuKey: 'welcome-home',
        children: null,
        components: <ErrorComponent />,
        icon: <IconHome />
      }
    ],
    icon: ''
  },
  {
    title: 'Juejin',
    components: null,
    menuKey: 'juejin',
    icon: '',
    children: [
      {
        title: 'Favorites',
        menuKey: 'juejin-favorites',
        children: null,
        components: <ErrorComponent />,
        icon: <IconFolder />
      }
    ]
  },
  {
    title: 'Blog',
    components: null,
    menuKey: 'blog',
    icon: '',
    children: [
      {
        title: 'Docs',
        menuKey: 'blog-docs',
        children: null,
        components: <ErrorComponent />,
        icon: <IconFile />
      }
    ]
  },
  {
    title: 'Installed',
    menuKey: 'installed',
    children: [
      {
        title: 'All Apps',
        menuKey: 'installed-allApps',
        children: null,
        components: <AppComponents />,
        icon: <IconApps />
      }
    ],
    icon: ''
  }
]

export default function Home() {
  const [currentSelectMenu, setCurrentSelectMenu] = useState(
    MENU_CONFIG[3].children[0]
  )

  const selectMenu = (childrenItem) => {
    setCurrentSelectMenu(childrenItem)
  }

  return (
    <div className="app">
      <div className="header">
        <div className="menu-circle"></div>
        <div className="header-menu">
          {/* <a className="menu-link is-active" href="#">
            Apps
          </a>
          <a className="menu-link notify" href="#">
            Your work
          </a>
          <a className="menu-link" href="#">
            Discover
          </a>
          <a className="menu-link notify" href="#">
            Market
          </a> */}
        </div>
        <div className="search-bar">
          <input type="text" placeholder="Search" />
        </div>
        <div className="header-profile"></div>
      </div>
      <div className="wrapper">
        <div className="left-side">
          {MENU_CONFIG.map((item, index) => {
            return (
              <>
                <div
                  className={`side-wrapper ${
                    item.children ? '' : 'side-wrapper-a'
                  }`}
                  key={`menu_item_${index}`}
                >
                  <div className="side-title">{item.title}</div>
                  {(item.children || []).map((childrenItem, childrenIndex) => {
                    return (
                      <>
                        <div
                          className="side-menu"
                          key={`menu_childrenItem_${childrenIndex}`}
                        >
                          <a
                            className={`side-menu-a`}
                            href="#"
                            onClick={() => selectMenu(childrenItem)}
                          >
                            <div className="flex items-center">
                              {childrenItem.icon}
                              {childrenItem.title}
                            </div>
                          </a>
                        </div>
                      </>
                    )
                  })}
                </div>
              </>
            )
          })}
          {/* <div className="side-wrapper">
            <div className="side-title">Welcome</div>
          </div>
          <div className="side-wrapper">
            <div className="side-title">Juejin favorites</div>
          </div>
          <div className="side-wrapper">
            <div className="side-title">Blog</div>
          </div>
          <div className="side-wrapper">
            <div className="side-title">Installed</div>
            <div className="side-menu">
              <a href="#">
                <IconApps />
                All Apps
              </a>
            </div>
          </div> */}
          {/* <div className="side-wrapper">
            <div className="side-title">Fonts</div>
            <div className="side-menu">
              <a href="#">
                <svg viewBox="0 0 332 332" fill="currentColor">
                  <path d="M282.341 8.283C275.765 2.705 266.211 0 253.103 0c-18.951 0-36.359 5.634-51.756 16.743-14.972 10.794-29.274 28.637-42.482 53.028-4.358 7.993-7.428 11.041-8.973 12.179h-26.255c-10.84 0-19.626 8.786-19.626 19.626 0 8.989 6.077 16.486 14.323 18.809l-.05.165h.589c1.531.385 3.109.651 4.757.651h18.833l-32.688 128.001c-7.208 27.848-10.323 37.782-11.666 41.24-1.445 3.711-3.266 7.062-5.542 10.135-.42-5.39-2.637-10.143-6.508-13.854-4.264-4.079-10.109-6.136-17.364-6.136-8.227 0-15.08 2.433-20.37 7.229-5.416 4.93-8.283 11.193-8.283 18.134 0 5.157 1.701 12.712 9.828 19.348 6.139 4.97 14.845 7.382 26.621 7.382 17.096 0 32.541-4.568 45.891-13.577 13.112-8.845 24.612-22.489 34.166-40.522 9.391-17.678 18.696-45.124 28.427-83.9l18.598-73.479h30.016c10.841 0 19.625-8.785 19.625-19.625s-8.784-19.626-19.625-19.626h-19.628c6.34-21.62 14.175-37.948 23.443-48.578 2.284-2.695 5.246-5.692 8.412-7.678-1.543 3.392-2.325 6.767-2.325 10.055 0 6.164 2.409 11.714 6.909 16.03 4.484 4.336 10.167 6.54 16.888 6.54 7.085 0 13.373-2.667 18.17-7.716 4.76-5.005 7.185-11.633 7.185-19.703.017-9.079-3.554-16.899-10.302-22.618z" />
                </svg>
                Manage Fonts
              </a>
            </div>
          </div>
          <div className="side-wrapper">
            <div className="side-title">Resource Links</div>
            <div className="side-menu">
              <a href="#">
                <svg viewBox="0 0 512 512" fill="currentColor">
                  <path d="M467 0H45C20.186 0 0 20.186 0 45v422c0 24.814 20.186 45 45 45h422c24.814 0 45-20.186 45-45V45c0-24.814-20.186-45-45-45zM181 241c41.353 0 75 33.647 75 75s-33.647 75-75 75-75-33.647-75-75c0-8.291 6.709-15 15-15s15 6.709 15 15c0 24.814 20.186 45 45 45s45-20.186 45-45-20.186-45-45-45c-41.353 0-75-33.647-75-75s33.647-75 75-75 75 33.647 75 75c0 8.291-6.709 15-15 15s-15-6.709-15-15c0-24.814-20.186-45-45-45s-45 20.186-45 45 20.186 45 45 45zm180 120h30c8.291 0 15 6.709 15 15s-6.709 15-15 15h-30c-24.814 0-45-20.186-45-45V211h-15c-8.291 0-15-6.709-15-15s6.709-15 15-15h15v-45c0-8.291 6.709-15 15-15s15 6.709 15 15v45h45c8.291 0 15 6.709 15 15s-6.709 15-15 15h-45v135c0 8.276 6.724 15 15 15z" />
                </svg>
                Stock
              </a>
              <a href="#">
                <svg viewBox="0 0 511.441 511.441" fill="currentColor">
                  <path d="M255.721 347.484L90.22 266.751v106.57l165.51 73.503 165.509-73.503V266.742z" />
                  <path d="M511.441 189.361L255.721 64.617 0 189.361l255.721 124.744 195.522-95.378v111.032h30V204.092z" />
                </svg>
                Tutorials
              </a>
              <a href="#">
                <svg viewBox="0 0 512 512" fill="currentColor">
                  <path d="M196 151h-75v90h75c24.814 0 45-20.186 45-45s-20.186-45-45-45z" />
                  <path d="M467 0H45C20.186 0 0 20.186 0 45v422c0 24.814 20.186 45 45 45h422c24.814 0 45-20.186 45-45V45c0-24.814-20.186-45-45-45zM196 271h-75v105c0 8.291-6.709 15-15 15s-15-6.709-15-15V136c0-8.291 6.709-15 15-15h90c41.353 0 75 33.647 75 75s-33.647 75-75 75zm210-60c8.291 0 15 6.709 15 15s-6.709 15-15 15h-45v135c0 8.291-6.709 15-15 15s-15-6.709-15-15V241h-15c-8.291 0-15-6.709-15-15s6.709-15 15-15h15v-45c0-24.814 20.186-45 45-45h30c8.291 0 15 6.709 15 15s-6.709 15-15 15h-30c-8.276 0-15 6.724-15 15v45h45z" />
                </svg>
                Portfolio
              </a>
              <a href="#">
                <svg viewBox="0 0 512 512" fill="currentColor">
                  <path d="M181 181h-60v60h60c16.54 0 30-13.46 30-30s-13.46-30-30-30zm0 0M181 271h-60v60h60c16.54 0 30-13.46 30-30s-13.46-30-30-30zm0 0M346 241c-19.555 0-36.238 12.54-42.438 30h84.875c-6.199-17.46-22.882-30-42.437-30zm0 0" />
                  <path d="M436 0H75C33.648 0 0 33.648 0 75v362c0 41.352 33.648 75 75 75h361c41.352 0 76-33.648 76-75V75c0-41.352-34.648-75-76-75zM286 151h120v30H286zm-45 150c0 33.09-26.91 60-60 60H91V151h90c33.09 0 60 26.91 60 60 0 18.008-8.133 33.996-20.73 45 12.597 11.004 20.73 26.992 20.73 45zm180 0H303.562c6.196 17.46 22.883 30 42.438 30 16.012 0 30.953-8.629 38.992-22.516l25.957 15.032C397.58 346.629 372.687 361 346 361c-41.352 0-75-33.648-75-75s33.648-75 75-75 75 33.648 75 75zm0 0" />
                </svg>
                Behance
              </a>
              <a href="#">
                <svg viewBox="0 0 512 512" fill="currentColor">
                  <path d="M352 0H64C28.704 0 0 28.704 0 64v320a16.02 16.02 0 009.216 14.496A16.232 16.232 0 0016 400c3.68 0 7.328-1.248 10.24-3.712L117.792 320H352c35.296 0 64-28.704 64-64V64c0-35.296-28.704-64-64-64z" />
                  <path d="M464 128h-16v128c0 52.928-43.072 96-96 96H129.376L128 353.152V400c0 26.464 21.536 48 48 48h234.368l75.616 60.512A16.158 16.158 0 00496 512c2.336 0 4.704-.544 6.944-1.6A15.968 15.968 0 00512 496V176c0-26.464-21.536-48-48-48z" />
                </svg>
                Social htmlForum
              </a>
            </div>
          </div> */}
        </div>
        <div className="main-container">
          {/* <div className="main-header">
            <a className="menu-link-main" href="#">
              All Apps
            </a>
            <div className="header-menu">
              <a className="main-header-link is-active" href="#">
                Desktop
              </a>
              <a className="main-header-link" href="#">
                Mobile
              </a>
              <a className="main-header-link" href="#">
                Web
              </a>
            </div>
          </div> */}
          <div className="content-wrapper">
            {currentSelectMenu?.components || null}
          </div>
        </div>
      </div>
      <div className="overlay-app"></div>
    </div>
  )
}
