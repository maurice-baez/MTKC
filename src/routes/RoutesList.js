import React from 'react';

import { Routes, Route, Navigate, BrowserRouter } from 'react-router-dom';
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

export const RoutesList = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutScreen />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/support" element={<Support />} />
          <Route path="/recipes/:id" element={<Recipe />} />

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default RoutesList;
