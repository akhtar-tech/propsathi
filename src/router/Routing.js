import React from 'react';
import { Routes, Navigate, Route } from 'react-router-dom';
import RouteKey from './RouterKey';
const Routing = () => {

      return (
            <>
                  <Routes>
                        {
                              RouteKey.map(({ Component, routeTo }) => (
                                    <Route
                                          key={Component}
                                          exact
                                          path={routeTo}
                                          //component={Component}
                                          element={<Component />}
                                    />

                              ))
                        }

                  </Routes>
                  {/* <Navigate to="/" /> */}
            </>
      );
}

export default Routing;
