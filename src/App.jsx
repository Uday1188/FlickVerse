import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Movie from "./pages/Movie";
import Contact, { contactData } from "./pages/Contact";
import AppLayout from "./Components/layout/AppLayout";
import ErrorPage from "./pages/ErrorPage";
import GetAPIData from "./api/GetAPIData";
import MovieDetails from "./Components/UI/MovieDetails";
import GetMovieDetails from "./api/GetMovieDetails";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/movie",
          element: <Movie />,
          loader:GetAPIData,
        },
        {
          path: "/movie/:movieID",
          element: <MovieDetails />,
          loader:GetMovieDetails,
        },
        {
          path: "/contact",
          element: <Contact />,
          action:contactData,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
