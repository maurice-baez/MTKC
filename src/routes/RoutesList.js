import React from 'react';

import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';
import { AboutScreen } from '../pages/AboutScreen';
import { Blog } from '../pages/Blog';
import { Contact } from '../pages/Contact';
import { Home } from '../pages/Home';
import { Recipe } from '../pages/Recipe';
import { Support } from '../pages/Support';
import { Videos } from '../pages/Videos';

/** Site-wide routes.
 *
 * Visiting a non-existent route navigates to the homepage.
 */

export const RoutesList = () => (
  <>
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<AboutScreen />} path="/about" />
        <Route element={<Videos />} path="/videos" />
        <Route element={<Blog />} path="/blog" />
        <Route element={<Contact />} path="/contact" />
        <Route element={<Support />} path="/support" />
        <Route element={<Recipe />} path="/recipes/:id" />

        <Route element={<Navigate to="/" />} path="*" />
      </Routes>
    </BrowserRouter>
  </>
);

export default RoutesList;
