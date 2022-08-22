import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";

import logo from "../logo.svg";

export const Navigation = () => {
  return (
    <Router>
      <div className="main-layout">
        <nav>
          <img src={logo} alt="React Logo" />
          <ul>
            <li>
              <NavLink to="/" activeClassName="nav-active" exact>Home</NavLink>
            </li>
            <li>
              <NavLink to="/about" activeClassName="nav-active" exact>About</NavLink>
            </li>
            <li>
              <NavLink to="/users" activeClassName="nav-active" exact>Users</NavLink>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <h2>About</h2>
          </Route>
          <Route path="/users">
            <h2>Users</h2>
          </Route>
          <Route path="/">
            <h2>Home</h2>
          </Route>
        </Switch>
      </div>
    </Router>
  );
};
