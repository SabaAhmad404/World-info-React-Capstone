import React from 'react';
import { IoChevronForwardCircleSharp } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function CountrySection(props) {
  const { name, population, flag } = props;
  return (
    <div className="country-con">
      <Link className="country-portion" to={name}>
        <div className="flag">
          <img src={flag} alt="country-flags" className="flags" />
          <IoChevronForwardCircleSharp />
        </div>
        <div className="country-info">
          <p>{name}</p>
          <div className="population">
            population
            <span>:</span>
            <p>{population}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}

CountrySection.propTypes = {
  name: PropTypes.string.isRequired,
  population: PropTypes.number.isRequired,
  flag: PropTypes.string.isRequired,
};
export default CountrySection;
