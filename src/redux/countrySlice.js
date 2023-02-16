import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const GET_COUNTRIES = 'fetch_countries';
const GET_COUNTRY = 'fetch_country';

const initialState = {
  isLoading: false,
  countries: [],
  continent: 'Asia',
  country: [],
};

export const countriesFetch = createAsyncThunk(GET_COUNTRIES, async () => axios.get('https://restcountries.com/v2/all').then((response) => response.data.map((data) => ({
  countryName: data.name,
  region: data.region,
  population: data.population,
  flag: data.flags,
}))));

export const countryFetch = createAsyncThunk(GET_COUNTRY, async (country) => axios.get(`https://restcountries.com/v2/name/${country}`).then((response) => response.data.map((data) => ({
  countryName: data.name,
  capital: data.capital,
  region: data.region,
  population: data.population,
  area: data.area,
  timezones: data.timezones,
  flag: data.flags,
  currencies: data.currencies,
  borders: data.borders,
  nativeName: data.nativeName,
  languages: data.languages,
}))));

const countrySlice = createSlice({
  name: 'country-info',
  initialState,
  reducers: {
    continents: (state, action) => ({
      ...state,
      continent: action.payload,
    }),
  },
  extraReducers: {
    /* eslint no-param-reassign: "error" */
    [countriesFetch.pending]: (state) => {
      state.isLoading = true;
    },
    [countriesFetch.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.countries = action.payload;
    },
    [countriesFetch.rejected]: (state) => {
      state.isLoading = false;
    },
    [countryFetch.pending]: (state) => {
      state.isLoading = true;
    },
    [countryFetch.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.country = action.payload;
    },
    [countryFetch.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export const { continents, getCountry } = countrySlice.actions;
export default countrySlice.reducer;
