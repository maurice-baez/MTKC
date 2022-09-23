import React from "react";
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import { RecipeDetail } from "../components/RecipeDetail";
import { About } from "../pages/About";
import { Blog } from "../pages/Blog";
import { Contact } from "../pages/Contact";
import { Home } from "../pages/Home";
import { Videos } from "../pages/Videos";

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
          <Route path="/about" element={<About />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/recipes/:id" element={<RecipeDetail />} />

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default RoutesList;
