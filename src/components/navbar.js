import React from "react";
import SwitchLocale from "./switchLocale";
import { FormattedMessage } from "react-intl";
import messages from "../messages";
import store from "../store";
import { handleLoadlLocales } from "../actions";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const setInitialStateStore = event => {
    store.dispatch(handleLoadlLocales(event));
  };

  return (
    <div>
      {setInitialStateStore(messages)}
      <h1 id="header" className="text-primary">
        <FormattedMessage id="app.title" defaultMessage="Mi Blog!" />
      </h1>
      <div className="w3-container w3-teal w3-center w3-margin-top">
        <div className="container list-article">
          <nav className="topnav" id="myTopnav">
            <NavLink exact to="/">
              <FormattedMessage id="app.Nav.Home" defaultMessage="Inicio" />
            </NavLink>
            <NavLink to="/projects">
              <FormattedMessage
                id="app.Nav.Projects"
                defaultMessage="Proyectos"
              />
            </NavLink>
            <NavLink to="/about">
              <FormattedMessage id="app.Nav.About" defaultMessage="Acerca de" />
            </NavLink>
            <NavLink to="/contact">
              <FormattedMessage
                id="app.Nav.Contact"
                defaultMessage="Contacto"
              />
            </NavLink>
            <SwitchLocale />
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
