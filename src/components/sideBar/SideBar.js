import React from "react";
import "./SideBar.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";

const routes = [
  {
    path: "/my_messages",
    exact: true,
    sidebar: () => <div>My Messages</div>
  },
  {
    path: "/my_account",
    sidebar: () => <div>My Account</div>
  },
  {
    path: "/my_profile",
    sidebar: () => <div>My Profile</div>
  },
  {
    path: "/my_application",
    sidebar: () => <div>My Application</div>
  },
  {
    path: "/my_aspiration",
    sidebar: () => <div>My Aspiration</div>,
    main: () => <h2>My Aspiration</h2>
  }
];

export default function SideBar() {
  return (
    <Router>
      <div
      style={{ display: "flex" }}
        // style={{padding:"10px"}}
      >
        <div
          style={{
            // border: "1px solid black",
            // padding: "10px",
            // margin:"10px 20px",
            height: "100%",
            width: "300px",
            // background: "#f0f0f0",
            textDecoration: "none"
          }}
        >
          <div className="profile">
            <h2>Rebecca Erin</h2>
          </div>
          <div className="profile__image">
            <img src="https://pbs.twimg.com/profile_images/1116431270697766912/-NfnQHvh_400x400.jpg" alt="profile__picture" />
          </div>
          <div></div>

          <ul
            style={{
              listStyleType: "none"
            }}
          >
            <div className="list__item">
              <li>
                <NavLink to="/messages">My Messages</NavLink>
              </li>
            </div>
            <div className="list__item">
              <li>
                <NavLink to="/account">My Account</NavLink>
              </li>
            </div>
            <div className="list__item">
              <li>
                <NavLink to="/profile">My Profile</NavLink>
              </li>
            </div>

            <div className="list__item">
              <li>
                <NavLink to="/applications">My Applications</NavLink>
              </li>
            </div>
            <div className="list__item">
              <li>
                <NavLink to="/aspirations">My Aspirations</NavLink>
              </li>
            </div>
          </ul>

          <Switch>
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                children={<route.sidebar />}
              />
            ))}
          </Switch>
        </div>

        <div style={{ flex: 1, padding: "10px" }}>
          <Switch>
            {routes.map((route, index) => (
              <Route key={index} path={route.path} exact={route.exact} />
            ))}
          </Switch>
        </div>

        <div style={{ flex: 1, padding: "10px" }}>
          <Switch>
            {routes.map((route, index) => (
              <Route key={index} path={route.path} exact={route.exact} />
            ))}
          </Switch>
        </div>

        <div style={{ flex: 1, padding: "10px" }}>
          <Switch>
            {routes.map((route, index) => (
              <Route key={index} path={route.path} exact={route.exact} />
            ))}
          </Switch>
        </div>
      </div>
    </Router>
  );
}
