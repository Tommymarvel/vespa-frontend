import axios from 'axios';
import React, { useState, useEffect } from 'react';

const Motorcycle = () => {
  // const [city, setCity] = useState(null);
  const [listView, setListView] = useState(true);

  const [motors, setMotors] = useState(null);

  useEffect(() => {
    console.log('Cities: ', motors);
    axios
      .get('http://localhost:3001/motorcycles')
      .then((response) => {
        console.log('Citieeees: ', response.data);
        setMotors(response.data);
      })
      .catch((error) => {
        console.log('City error: ', error);
      });
  }, []);

  return (
    /* List of motorcycles */
    <div className="flex flex-col w-full px-4 pt-6 pb-4 lg:px-6 lg:py-2 h-full">
      <div className="flex justify-between items-center w-full py-6">
        <h1 className="text-gray-800 text-4xl font-bold">Motorcycle</h1>
        <button
          type="button"
          className="inline-flex items-center p-2 bg-blue-600 text-white font-medium text-sm rounded-md border-2 hover:bg-bg_secondary hover:text-blue-600 hover:border-blue-600 focus:outline-none focus:bg-white focus:border-blue-600 focus:text-blue-600"
        >
          <svg
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
          </svg>
          Create New Motorcycle
        </button>
      </div>
      {/* SearchBar with Grid & List Buttons */}
      <div
        className={`flex items-center justify-between p-3 bg-white ${
          listView
            ? 'rounded-tr-md rounded-tl-md  sm:rounded-tr-lg sm:rounded-tl-lg'
            : 'shadow-md rounded-lg sm:rounded-lg'
        }`}
      >
        <div className="relative ">
          {/* <label htmlFor="table-search" className="sr-only">Search</label> */}
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-gray-500"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                fillRule="evenodd"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <input
            id="table-search-users"
            name="table-search"
            type="text"
            placeholder="Search for motorcycles..."
            className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-auto lg:w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div>
          {/* <!-- Table-View Button --> */}
          <button
            id="gridViewButton"
            type="button"
            className={`inline-flex items-center px-2 py-1 lg:px-3 lg:py-1.5 font-medium text-sm border ${
              listView
                ? 'bg-white text-blue-600 border-blue-600'
                : 'bg-bg_tertiary text-gray-500 border-gray-300'
            } rounded-bl-md rounded-tl-md hover:bg-bg_secondary hover:text-gray-600 focus:outline-none`}
            onClick={() => setListView(true)}
          >
            <svg
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              fill="none"
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h7.5c.621 0 1.125-.504 1.125-1.125m-9.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-7.5A1.125 1.125 0 0112 18.375m9.75-12.75c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125m19.5 0v1.5c0 .621-.504 1.125-1.125 1.125M2.25 5.625v1.5c0 .621.504 1.125 1.125 1.125m0 0h17.25m-17.25 0h7.5c.621 0 1.125.504 1.125 1.125M3.375 8.25c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m17.25-3.75h-7.5c-.621 0-1.125.504-1.125 1.125m8.625-1.125c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M12 10.875v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125M13.125 12h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125M20.625 12c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5M12 14.625v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 14.625c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m0 1.5v-1.5m0 0c0-.621.504-1.125 1.125-1.125m0 0h7.5"
              />
            </svg>
          </button>
          {/* Grid-View Button */}
          <button
            id="gridViewButton"
            type="button"
            className={`inline-flex items-center px-2 py-1 lg:px-3 lg:py-1.5 font-medium text-sm border ${
              !listView
                ? 'bg-white text-blue-600 border-blue-600'
                : 'bg-bg_tertiary text-gray-500 border-gray-300'
            } rounded-br-md rounded-tr-md hover:bg-bg_secondary hover:text-gray-600 focus:outline-none`}
            onClick={() => setListView(false)}
          >
            <svg
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              fill="none"
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Motorcycle;