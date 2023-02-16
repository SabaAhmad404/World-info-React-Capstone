import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Navbar from './Nav';
import { countryFetch } from '../redux/countrySlice';
import '../styles/app.css';

const CountryDetails = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const countryData = useSelector((state) => state);
  useEffect(() => {
    dispatch(countryFetch(params.countryId));
  }, [dispatch, params.countryId]);

  return (
    <>
      <div>
        <Navbar head="country-information" />
        <main>
          <div>
            {countryData.isLoading && <h1>Loading...</h1>}
            {!countryData.loading && countryData.country.length ? (
              <div className="details-container">
                <div className="flags-details">
                  <img
                    className="one-flag"
                    src={countryData.country[0].flag.svg}
                    alt="Country-flag"
                  />
                </div>
                <div>
                  <div className="country-detailContainer">
                    <p>Name:</p>
                    <p>{countryData.country[0].countryName}</p>
                  </div>
                  <div className="country-detailContainer">
                    <p>Currency:</p>
                    <p>{countryData.country[0].currencies[0].name}</p>
                  </div>
                  <div className="country-detailContainer">
                    <p>Capital:</p>
                    <p>{countryData.country[0].capital}</p>
                  </div>
                  <div className="country-detailContainer">
                    <p>Area:</p>
                    <p>{countryData.country[0].area}</p>
                  </div>
                  <div className="country-detailContainer">
                    <p>Population:</p>
                    <p>{countryData.country[0].population}</p>
                  </div>
                  <div className="country-detailContainer">
                    <p>borders:</p>
                    <p>{countryData.country[0].borders[0]}</p>
                  </div>
                  <div className="country-detailContainer">
                    <p>languages:</p>
                    <p>{countryData.country[0].languages[0].name}</p>
                  </div>
                  <div className="country-detailContainer">
                    <p>nativeName:</p>
                    <p>{countryData.country[0].nativeName}</p>
                  </div>
                  <div className="country-detailContainer">
                    <p>timezones:</p>
                    <p>{countryData.country[0].timezones[0]}</p>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        </main>
      </div>
    </>
  );
};

export default CountryDetails;
