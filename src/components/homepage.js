import React, { useEffect, useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { IoSearch } from 'react-icons/io5';
import { countriesFetch, continents } from '../redux/countrySlice';
import worldmap from '../assets/worldmap.svg';
import Navbar from './Nav';
import CountrySection from './countrysection';

const Home = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');
  const countryData = useSelector((state) => state);
  const { countries, continent } = countryData;
  useEffect(() => {
    if (countries.length === 0) {
      dispatch(countriesFetch());
    }
  }, [dispatch, countries.length]);

  const displayAll = countries
    .filter((data) => data.region === continent)
    .filter((item) => (search === '' ? item : item.countryName.includes(search)))
    .map((data) => (
      <CountrySection
        key={data.countryName}
        name={data.countryName}
        population={data.population}
        flag={data.flag.svg}
      />
    ));

  const selectContinent = (e) => {
    dispatch(continents(e.target.value));
  };

  const inputHandler = (e) => {
    const input = e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1);
    setSearch(input);
  };

  return (
    <>
      <Navbar head="World-Information" year={2023} />
      <div>
        <img className="world-map" src={worldmap} alt="world-map" />
      </div>
      <div className="search-Container">
        <form className="form-search">
          <input
            className="input-search"
            onChange={inputHandler}
            value={search}
            type="search"
            placeholder="search country-info here"
          />
          <IoSearch />
        </form>
        <label htmlFor="first-name" className="select-continent">
          Continent
          <select
            onChange={selectContinent}
            value={continent}
            className="Filter"
          >
            <option value="Asia"> Asia</option>
            <option value="Americas">Americas</option>
            <option value="Africa">Africa</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </select>
        </label>
      </div>
      <p className="world-population">World &rsquo;s population</p>
      <div>
        {countryData.isLoading && <h1>Loading...</h1>}
        {!countryData.isLoading && countryData.countries.length ? (
          <div className="DISPLAY">{displayAll}</div>
        ) : null}
      </div>
    </>
  );
};
export default Home;
