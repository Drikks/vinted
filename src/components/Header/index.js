import React from "react";
import logo from "../../assets/images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useHistory, useLocation } from "react-router-dom";
import PriceRange from "../PriceRange";

const Header = ({
  token,
  setUser,
  setFetchRangeValues,
  sortPrice,
  setSortPrice,
  setSearch,
}) => {
  const history = useHistory();

  const location = useLocation();

  return (
    <div className="header-container">
      <div
        onClick={() => {
          history.push("/");
        }}
      >
        <img className="header-logo" src={logo} alt="vinted" />
      </div>

      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Recherche des articles"
          onChange={(event) => setSearch(event.target.value)}
        />
        <FontAwesomeIcon icon="search" className="search-input-icon" />
        {location.pathname === "/" ? (
          <div>
            <div
              style={{
                marginTop: 25,
                fontSize: "12px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <span style={{ marginRight: 10 }}>Trier par prix : </span>
              <span className="checkbox">
                <input type="checkbox" checked={sortPrice} name="price" />
                <div
                  className="wrapper"
                  onClick={() => {
                    setSortPrice(!sortPrice);
                  }}
                >
                  <div className="knob">
                    <span>{sortPrice ? "⇣" : "⇡"}</span>
                  </div>
                </div>
              </span>
              <span style={{ marginRight: 10 }}>Prix entre : </span>
              <PriceRange setFetchRangeValues={setFetchRangeValues} />
            </div>
          </div>
        ) : null}
      </div>

      {token ? (
        <button
          onClick={() => {
            setUser(null);
          }}
          className="button-logout"
        >
          Se déconnecter
        </button>
      ) : (
        <div>
          <button
            onClick={() => {
              history.push("/signup");
            }}
            className="header-button button-login-signup button-signup"
          >
            S'inscrire
          </button>
          <button
            onClick={() => {
              history.push("/login");
            }}
            className="header-button button-login-signup"
          >
            Se connecter
          </button>
        </div>
      )}
      <button
        onClick={() => {
          history.push("/publish");
        }}
        className="header-button button-sold"
      >
        Vends tes articles
      </button>
    </div>
  );
};

export default Header;
