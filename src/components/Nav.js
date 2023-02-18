import React from 'react';
import { Link } from 'react-router-dom';
import { IoChevronBack, IoMicSharp, IoSettingsOutline } from 'react-icons/io5';
import '../styles/app.css';

import PropTypes from 'prop-types';

function Navbar(props) {
  const { head, year } = props;
  return (
    <>
      <header className="header">
        <Link className="Link" to="/">
          <IoChevronBack />
          {year}
        </Link>
        {head}
        <div className="navbar">
          <IoMicSharp />
          <IoSettingsOutline />
        </div>
      </header>
    </>
  );
}
Navbar.propTypes = {
  head: PropTypes.string.isRequired,
  year: PropTypes.number,
};
Navbar.defaultProps = {
  year: null,
};
export default Navbar;
