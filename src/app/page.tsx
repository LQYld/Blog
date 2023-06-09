'use client'
import AppComponents from './components/app-component'
import './index.css'

export default function Home() {
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
        <div className="header-profile">
          {/* <div className="notification">
            <span className="notification-number">3</span>
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="feather feather-bell"
            >
              <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0" />
            </svg>
          </div>
          <svg viewBox="0 0 512 512" fill="currentColor">
            <path d="M448.773 235.551A135.893 135.893 0 00451 211c0-74.443-60.557-135-135-135-47.52 0-91.567 25.313-115.766 65.537-32.666-10.59-66.182-6.049-93.794 12.979-27.612 19.013-44.092 49.116-45.425 82.031C24.716 253.788 0 290.497 0 331c0 7.031 1.703 13.887 3.006 20.537l.015.015C12.719 400.492 56.034 436 106 436h300c57.891 0 106-47.109 106-105 0-40.942-25.053-77.798-63.227-95.449z" />
          </svg>
          <img
            className="profile-img"
            src="https://images.unsplash.com/photo-1600353068440-6361ef3a86e8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=htmlFormat&fit=crop&w=1000&q=80"
            alt=""
          /> */}
        </div>
      </div>
      <div className="wrapper">
        <div className="left-side">
          {/* <div className="side-wrapper">
            <div className="side-title">Blog</div>
            <div className="side-menu">
              <a href="#">
                <svg viewBox="0 0 512 512">
                  <g xmlns="http://www.w3.org/2000/svg" fill="currentColor">
                    <path
                      d="M0 0h128v128H0zm0 0M192 0h128v128H192zm0 0M384 0h128v128H384zm0 0M0 192h128v128H0zm0 0"
                      data-original="#bfc9d1"
                    />
                  </g>
                  <path
                    xmlns="http://www.w3.org/2000/svg"
                    d="M192 192h128v128H192zm0 0"
                    fill="currentColor"
                    data-original="#82b1ff"
                  />
                  <path
                    xmlns="http://www.w3.org/2000/svg"
                    d="M384 192h128v128H384zm0 0M0 384h128v128H0zm0 0M192 384h128v128H192zm0 0M384 384h128v128H384zm0 0"
                    fill="currentColor"
                    data-original="#bfc9d1"
                  />
                </svg>
                All Apps
              </a>
              <a href="#">
                <svg viewBox="0 0 488.932 488.932" fill="currentColor">
                  <path d="M243.158 61.361v-57.6c0-3.2 4-4.9 6.7-2.9l118.4 87c2 1.5 2 4.4 0 5.9l-118.4 87c-2.7 2-6.7.2-6.7-2.9v-57.5c-87.8 1.4-158.1 76-152.1 165.4 5.1 76.8 67.7 139.1 144.5 144 81.4 5.2 150.6-53 163-129.9 2.3-14.3 14.7-24.7 29.2-24.7 17.9 0 31.8 15.9 29 33.5-17.4 109.7-118.5 192-235.7 178.9-98-11-176.7-89.4-187.8-187.4-14.7-128.2 84.9-237.4 209.9-238.8z" />
                </svg>
                Updates
                <span className="notification-number updates">3</span>
              </a>
            </div>
          </div> */}
          <div className="side-wrapper">
            <div className="side-title">Welcome</div>
            {/* <div className="side-menu">
              <a href="#">All Apps</a>
            </div> */}
          </div>
          <div className="side-wrapper">
            <div className="side-title">Juejin favorites</div>
          </div>
          <div className="side-wrapper">
            <div className="side-title">Blog</div>
            {/* <div className="side-menu">
              <a href="#">All Apps</a>
            </div> */}
          </div>
          <div className="side-wrapper">
            <div className="side-title">Installed</div>
            <div className="side-menu">
              <a href="#">
                <svg viewBox="0 0 512 512">
                  <g xmlns="http://www.w3.org/2000/svg" fill="currentColor">
                    <path
                      d="M0 0h128v128H0zm0 0M192 0h128v128H192zm0 0M384 0h128v128H384zm0 0M0 192h128v128H0zm0 0"
                      data-original="#bfc9d1"
                    />
                  </g>
                  <path
                    xmlns="http://www.w3.org/2000/svg"
                    d="M192 192h128v128H192zm0 0"
                    fill="currentColor"
                    data-original="#82b1ff"
                  />
                  <path
                    xmlns="http://www.w3.org/2000/svg"
                    d="M384 192h128v128H384zm0 0M0 384h128v128H0zm0 0M192 384h128v128H192zm0 0M384 384h128v128H384zm0 0"
                    fill="currentColor"
                    data-original="#bfc9d1"
                  />
                </svg>
                All Apps
              </a>
            </div>
          </div>
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
            {/* <div className="content-wrapper-header">
              <div className="content-wrapper-context">
                <h3 className="img-content">
                  <svg viewBox="0 0 512 512">
                    <path
                      d="M467 0H45C20.099 0 0 20.099 0 45v422c0 24.901 20.099 45 45 45h422c24.901 0 45-20.099 45-45V45c0-24.901-20.099-45-45-45z"
                      fill="#d6355b"
                      data-original="#ff468c"
                    />
                    <path
                      xmlns="http://www.w3.org/2000/svg"
                      d="M512 45v422c0 24.901-20.099 45-45 45H256V0h211c24.901 0 45 20.099 45 45z"
                      fill="#d6355b"
                      data-original="#d72878"
                    />
                    <path
                      xmlns="http://www.w3.org/2000/svg"
                      d="M467 30H45c-8.401 0-15 6.599-15 15v422c0 8.401 6.599 15 15 15h422c8.401 0 15-6.599 15-15V45c0-8.401-6.599-15-15-15z"
                      fill="#2e000a"
                      data-original="#700029"
                    />
                    <path
                      xmlns="http://www.w3.org/2000/svg"
                      d="M482 45v422c0 8.401-6.599 15-15 15H256V30h211c8.401 0 15 6.599 15 15z"
                      fill="#2e000a"
                      data-original="#4d0e06"
                    />
                    <path
                      xmlns="http://www.w3.org/2000/svg"
                      d="M181 391c-41.353 0-75-33.647-75-75 0-8.291 6.709-15 15-15s15 6.709 15 15c0 24.814 20.186 45 45 45s45-20.186 45-45-20.186-45-45-45c-41.353 0-75-33.647-75-75s33.647-75 75-75 75 33.647 75 75c0 8.291-6.709 15-15 15s-15-6.709-15-15c0-24.814-20.186-45-45-45s-45 20.186-45 45 20.186 45 45 45c41.353 0 75 33.647 75 75s-33.647 75-75 75z"
                      fill="#d6355b"
                      data-original="#ff468c"
                    />
                    <path
                      xmlns="http://www.w3.org/2000/svg"
                      d="M391 361h-30c-8.276 0-15-6.724-15-15V211h45c8.291 0 15-6.709 15-15s-6.709-15-15-15h-45v-45c0-8.291-6.709-15-15-15s-15 6.709-15 15v45h-15c-8.291 0-15 6.709-15 15s6.709 15 15 15h15v135c0 24.814 20.186 45 45 45h30c8.291 0 15-6.709 15-15s-6.709-15-15-15z"
                      fill="#d6355b"
                      data-original="#d72878"
                    />
                  </svg>
                  Adobe Stock
                </h3>
                <div className="content-text">
                  Grab yourself 10 free images from Adobe Stock in a 30-day free
                  trial plan and find perfect image, that will help you with
                  your new project.
                </div>
                <button className="content-button">Start free trial</button>
              </div>
              <img
                className="content-wrapper-img"
                src="https://assets.codepen.io/3364143/glass.png"
                alt=""
              />
            </div>
            <div className="content-section">
              <div className="content-section-title">Expanded Application</div>
              <ul>
                <li className="adobe-product">
                  <div className="products">
                    <svg
                      viewBox="0 0 52 52"
                      style={{
                        border: `border:1px solid #3291b8`
                      }}
                    >
                      <g xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M40.824 52H11.176C5.003 52 0 46.997 0 40.824V11.176C0 5.003 5.003 0 11.176 0h29.649C46.997 0 52 5.003 52 11.176v29.649C52 46.997 46.997 52 40.824 52z"
                          fill="#061e26"
                          data-original="#393687"
                        />
                        <path
                          d="M12.16 39H9.28V11h9.64c2.613 0 4.553.813 5.82 2.44 1.266 1.626 1.9 3.76 1.9 6.399 0 .934-.027 1.74-.08 2.42-.054.681-.22 1.534-.5 2.561-.28 1.026-.66 1.866-1.14 2.52-.48.654-1.213 1.227-2.2 1.72-.987.494-2.16.74-3.52.74h-7.04V39zm0-12h6.68c.96 0 1.773-.187 2.44-.56.666-.374 1.153-.773 1.46-1.2.306-.427.546-1.04.72-1.84.173-.801.267-1.4.28-1.801.013-.399.02-.973.02-1.72 0-4.053-1.694-6.08-5.08-6.08h-6.52V27zM29.48 33.92l2.8-.12c.106.987.6 1.754 1.48 2.3.88.547 1.893.82 3.04.82s2.14-.26 2.98-.78c.84-.52 1.26-1.266 1.26-2.239s-.36-1.747-1.08-2.32c-.72-.573-1.6-1.026-2.64-1.36-1.04-.333-2.086-.686-3.14-1.06a7.36 7.36 0 01-2.78-1.76c-.987-.934-1.48-2.073-1.48-3.42s.54-2.601 1.62-3.761 2.833-1.739 5.26-1.739c.854 0 1.653.1 2.4.3.746.2 1.28.394 1.6.58l.48.279-.92 2.521c-.854-.666-1.974-1-3.36-1-1.387 0-2.42.26-3.1.78-.68.52-1.02 1.18-1.02 1.979 0 .88.426 1.574 1.28 2.08.853.507 1.813.934 2.88 1.28 1.066.347 2.126.733 3.18 1.16 1.053.427 1.946 1.094 2.68 2s1.1 2.106 1.1 3.6c0 1.494-.6 2.794-1.8 3.9-1.2 1.106-2.954 1.66-5.26 1.66-2.307 0-4.114-.547-5.42-1.64-1.307-1.093-1.987-2.44-2.04-4.04z"
                          fill="#c1dbe6"
                          data-original="#89d3ff"
                        />
                      </g>
                    </svg>
                    Photoshop
                  </div>
                  <span className="status">
                    <span className="status-circle green"></span>
                    Updated
                  </span>
                  <div className="button-wrapper">
                    <button className="content-button status-button open">
                      Open
                    </button>
                    <div className="menu">
                      <button className="dropdown">
                        <ul>
                          <li>
                            <a href="#">Go to Discover</a>
                          </li>
                          <li>
                            <a href="#">Learn more</a>
                          </li>
                          <li>
                            <a href="#">Uninstall</a>
                          </li>
                        </ul>
                      </button>
                    </div>
                  </div>
                </li>
                <li className="adobe-product">
                  <div className="products">
                    <svg
                      viewBox="0 0 52 52"
                      style={{
                        border: `1px solid #b65a0b`
                      }}
                    >
                      <g xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M40.824 52H11.176C5.003 52 0 46.997 0 40.824V11.176C0 5.003 5.003 0 11.176 0h29.649C46.997 0 52 5.003 52 11.176v29.649C52 46.997 46.997 52 40.824 52z"
                          fill="#261400"
                          data-original="#6d4c13"
                        />
                        <path
                          d="M30.68 39h-3.24l-2.76-9.04h-8.32L13.72 39H10.6l8.24-28h3.32l8.52 28zm-6.72-12l-3.48-11.36L17.12 27h6.84zM37.479 12.24c0 .453-.16.84-.48 1.16-.32.319-.7.479-1.14.479-.44 0-.827-.166-1.16-.5-.334-.333-.5-.713-.5-1.14s.166-.807.5-1.141c.333-.333.72-.5 1.16-.5.44 0 .82.16 1.14.48.321.322.48.709.48 1.162zM37.24 39h-2.88V18.96h2.88V39z"
                          fill="#e6d2c0"
                          data-original="#ffbd2e"
                        />
                      </g>
                    </svg>
                    Illustrator
                  </div>

                  <span className="status">
                    <span className="status-circle"></span>
                    Update Available
                  </span>
                  <div className="button-wrapper">
                    <button className="content-button status-button">
                      Update this app
                    </button>
                    <div className="pop-up">
                      <div className="pop-up-title">
                        Update This App
                        <svg
                          className="close"
                          width="24"
                          height="24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <circle cx="12" cy="12" r="10" />
                          <path d="M15 9l-6 6M9 9l6 6" />
                        </svg>
                      </div>
                      <div className="pop-up-subtitle">
                        Adjust your selections htmlFor advanced options as
                        desired behtmlFore continuing.{' '}
                        <a href="#">Learn more</a>
                      </div>
                      <div className="checkbox-wrapper">
                        <input
                          type="checkbox"
                          id="check1"
                          className="checkbox"
                        />
                        <label htmlFor="check1">
                          Import previous settings and preferences
                        </label>
                      </div>
                      <div className="checkbox-wrapper">
                        <input
                          type="checkbox"
                          id="check2"
                          className="checkbox"
                        />
                        <label htmlFor="check2">Remove old versions</label>
                      </div>
                      <div className="content-button-wrapper">
                        <button className="content-button status-button open close">
                          Cancel
                        </button>
                        <button className="content-button status-button">
                          Continue
                        </button>
                      </div>
                    </div>
                    <div className="menu">
                      <button className="dropdown">
                        <ul>
                          <li>
                            <a href="#">Go to Discover</a>
                          </li>
                          <li>
                            <a href="#">Learn more</a>
                          </li>
                          <li>
                            <a href="#">Uninstall</a>
                          </li>
                        </ul>
                      </button>
                    </div>
                  </div>
                </li>
                <li className="adobe-product">
                  <div className="products">
                    <svg
                      viewBox="0 0 52 52"
                      style={{
                        border: `1px solid #C75DEB`
                      }}
                    >
                      <g xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M40.824 52H11.176C5.003 52 0 46.997 0 40.824V11.176C0 5.003 5.003 0 11.176 0h29.649C46.997 0 52 5.003 52 11.176v29.649C52 46.997 46.997 52 40.824 52z"
                          fill="#3a3375"
                          data-original="#3a3375"
                        />
                        <path
                          d="M27.44 39H24.2l-2.76-9.04h-8.32L10.48 39H7.36l8.24-28h3.32l8.52 28zm-6.72-12l-3.48-11.36L13.88 27h6.84zM31.48 33.48c0 2.267 1.333 3.399 4 3.399 1.653 0 3.466-.546 5.44-1.64L42 37.6c-2.054 1.254-4.2 1.881-6.44 1.881-4.64 0-6.96-1.946-6.96-5.841v-8.2c0-2.16.673-3.841 2.02-5.04 1.346-1.2 3.126-1.801 5.34-1.801s3.94.594 5.18 1.78c1.24 1.187 1.86 2.834 1.86 4.94V30.8l-11.52.6v2.08zm8.6-5.24v-3.08c0-1.413-.44-2.42-1.32-3.021-.88-.6-1.907-.899-3.08-.899-1.174 0-2.167.359-2.98 1.08-.814.72-1.22 1.773-1.22 3.16v3.199l8.6-.439z"
                          fill="#e4d1eb"
                          data-original="#e7adfb"
                        />
                      </g>
                    </svg>
                    After Effects
                  </div>
                  <span className="status">
                    <span className="status-circle green"></span>
                    Updated
                  </span>
                  <div className="button-wrapper">
                    <button className="content-button status-button open">
                      Open
                    </button>
                    <div className="menu">
                      <button className="dropdown">
                        <ul>
                          <li>
                            <a href="#">Go to Discover</a>
                          </li>
                          <li>
                            <a href="#">Learn more</a>
                          </li>
                          <li>
                            <a href="#">Uninstall</a>
                          </li>
                        </ul>
                      </button>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="content-section">
              <div className="content-section-title">
                Mandatory applications
              </div>
              <div className="apps-card">
                <div className="app-card">
                  <span>
                    <svg
                      viewBox="0 0 512 512"
                      style={{
                        border: `1px solid #a059a9`
                      }}
                    >
                      <path
                        xmlns="http://www.w3.org/2000/svg"
                        d="M480 0H32C14.368 0 0 14.368 0 32v448c0 17.664 14.368 32 32 32h448c17.664 0 32-14.336 32-32V32c0-17.632-14.336-32-32-32z"
                        fill="#210027"
                        data-original="#7b1fa2"
                      />
                      <g xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M192 64h-80c-8.832 0-16 7.168-16 16v352c0 8.832 7.168 16 16 16s16-7.168 16-16V256h64c52.928 0 96-43.072 96-96s-43.072-96-96-96zm0 160h-64V96h64c35.296 0 64 28.704 64 64s-28.704 64-64 64zM400 256h-32c-18.08 0-34.592 6.24-48 16.384V272c0-8.864-7.168-16-16-16s-16 7.136-16 16v160c0 8.832 7.168 16 16 16s16-7.168 16-16v-96c0-26.464 21.536-48 48-48h32c8.832 0 16-7.168 16-16s-7.168-16-16-16z"
                          fill="#f6e7fa"
                          data-original="#e1bee7"
                        />
                      </g>
                    </svg>
                    Premiere Pro
                  </span>
                  <div className="app-card-subtext">
                    Edit, master and create fully proffesional videos
                  </div>
                  <div className="app-card-buttons">
                    <button className="content-button status-button">
                      Update
                    </button>
                    <div className="menu"></div>
                  </div>
                </div>
                <div className="app-card">
                  <span>
                    <svg
                      viewBox="0 0 52 52"
                      style={{
                        border: `1px solid #c1316d`
                      }}
                    >
                      <g xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M40.824 52H11.176C5.003 52 0 46.997 0 40.824V11.176C0 5.003 5.003 0 11.176 0h29.649C46.997 0 52 5.003 52 11.176v29.649C52 46.997 46.997 52 40.824 52z"
                          fill="#2f0015"
                          data-original="#6f2b41"
                        />
                        <path
                          d="M18.08 39H15.2V13.72l-2.64-.08V11h5.52v28zM27.68 19.4c1.173-.507 2.593-.761 4.26-.761s3.073.374 4.22 1.12V11h2.88v28c-2.293.32-4.414.48-6.36.48-1.947 0-3.707-.4-5.28-1.2-2.08-1.066-3.12-2.92-3.12-5.561v-7.56c0-2.799 1.133-4.719 3.4-5.759zm8.48 3.12c-1.387-.746-2.907-1.119-4.56-1.119-1.574 0-2.714.406-3.42 1.22-.707.813-1.06 1.847-1.06 3.1v7.12c0 1.227.44 2.188 1.32 2.88.96.719 2.146 1.079 3.56 1.079 1.413 0 2.8-.106 4.16-.319V22.52z"
                          fill="#e1c1cf"
                          data-original="#ff70bd"
                        />
                      </g>
                    </svg>
                    InDesign
                  </span>
                  <div className="app-card-subtext">
                    Design and publish great projects & mockups
                  </div>
                  <div className="app-card-buttons">
                    <button className="content-button status-button">
                      Update
                    </button>
                    <div className="menu"></div>
                  </div>
                </div>
                <div className="app-card">
                  <span>
                    <svg
                      viewBox="0 0 52 52"
                      style={{
                        border: `1px solid #C75DEB`
                      }}
                    >
                      <g xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M40.824 52H11.176C5.003 52 0 46.997 0 40.824V11.176C0 5.003 5.003 0 11.176 0h29.649C46.997 0 52 5.003 52 11.176v29.649C52 46.997 46.997 52 40.824 52z"
                          fill="#3a3375"
                          data-original="#3a3375"
                        />
                        <path
                          d="M27.44 39H24.2l-2.76-9.04h-8.32L10.48 39H7.36l8.24-28h3.32l8.52 28zm-6.72-12l-3.48-11.36L13.88 27h6.84zM31.48 33.48c0 2.267 1.333 3.399 4 3.399 1.653 0 3.466-.546 5.44-1.64L42 37.6c-2.054 1.254-4.2 1.881-6.44 1.881-4.64 0-6.96-1.946-6.96-5.841v-8.2c0-2.16.673-3.841 2.02-5.04 1.346-1.2 3.126-1.801 5.34-1.801s3.94.594 5.18 1.78c1.24 1.187 1.86 2.834 1.86 4.94V30.8l-11.52.6v2.08zm8.6-5.24v-3.08c0-1.413-.44-2.42-1.32-3.021-.88-.6-1.907-.899-3.08-.899-1.174 0-2.167.359-2.98 1.08-.814.72-1.22 1.773-1.22 3.16v3.199l8.6-.439z"
                          fill="#e4d1eb"
                          data-original="#e7adfb"
                        />
                      </g>
                    </svg>
                    After Effects
                  </span>
                  <div className="app-card-subtext">
                    Industry Standart motion graphics & visual effects
                  </div>
                  <div className="app-card-buttons">
                    <button className="content-button status-button">
                      Update
                    </button>
                    <div className="menu"></div>
                  </div>
                </div>
              </div>
            </div> */}
            <AppComponents />
          </div>
        </div>
      </div>
      <div className="overlay-app"></div>
    </div>
  )
}
