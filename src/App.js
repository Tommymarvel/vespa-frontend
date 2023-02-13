// import React, { useEffect } from 'react';
import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';
// import { useDispatch } from 'react-redux';
// import { fetchRockets, fetchDragons, fetchMissions } from './redux/configureStore';
import Home from './components/Home';
import Dashboard from './components/Dashboard/index';

function App() {
  // const dispatch = useDispatch();
  // Get rockets, dragons, and missions from the API
  // useEffect(() => {
  //   dispatch(fetchRockets());
  //   dispatch(fetchDragons());
  //   dispatch(fetchMissions());
  // }, [dispatch]);
  // const [loggedInStatus, setLoggedInStatus] = useState();
  // const [user, setUser] = useState({});
  const [state, setState] = useState({
    loggedInStatus: 'NOT_LOGGED_IN',
    user: {},
  });
  const handleLogin = (data) => {
    setState({
      loggedInStatus: 'LOGGED_IN',
      user: data.user,
    });
  };

  const handleLogout = () => {
    setState({
      loggedInStatus: 'NOT_LOGGED_IN',
      user: {},
    });
  };

  const checkLoginStatus = () => {
    axios.get(
      'http://localhost:3001/logged_in',
      { withCredentials: true },
    ).then((response) => {
      // console.log('Logged in? ', response);
      if (response.data.logged_in && state.loggedInStatus === 'NOT_LOGGED_IN') {
        setState({
          loggedInStatus: 'LOGGED_IN',
          user: response.data.user,
        });
      } else if (!response.data.logged_in && state.loggedInStatus === 'LOGGED_IN') {
        setState({
          loggedInStatus: 'NOT_LOGGED_IN',
          user: {},
        });
      } else {
        console.log('Logged in status: ', state.loggedInStatus);
      }
    }).catch((error) => {
      console.log('Check login status error: ', error);
    });
  };

  useEffect(() => {
    checkLoginStatus();
  }, []);

  return (
    <div className="h-screen bg-bg_secondary">
      {/* <Navbar /> */}
      <Routes>
        {/* <Route exact path="/" element={<RocketList />} /> */}
        {/* <Route exact path="/dragons" element={<DragonList />} /> */}
        <Route
          exact
          path="/"
          element={(
            <Home
              handleLogin={handleLogin}
              handleLogout={handleLogout}
              loggedInStatus={state.loggedInStatus}
            />
          )}
        />
        {/* Dashboard  */}
        <Route
          exact
          path="/dashboard"
          element={(
            <Dashboard
              handleLogout={handleLogout}
              loggedInStatus={state.loggedInStatus}
            />
          )}
        />
      </Routes>
    </div>
  );
}

export default App;
