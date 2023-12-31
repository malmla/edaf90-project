import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import BookView from './item-view/BookView';
import AuthorView from './item-view/AuthorView';
import SearchPage from './components/SearchPage';
import { fetchBookEdition, fetchAuthor, fetchEditions } from './dataClasses';
import EditionsView from "./item-view/EditionsView";
import ListView from './item-view/ListView';

const router = createBrowserRouter([
  {
    element: <App />,
    path: "/",
    children: [
      {
        index: true,
        element: <ListView />,
      },
      {
        element: <BookView />,
        path: 'books/:olid',
        loader: ({ params }) => {
          return fetchBookEdition(params.olid);
        }
      },
      {
        element: <AuthorView />,
        path: 'authors/:olid',
        loader: ({ params }) => {
          return fetchAuthor(params.olid);
        }
      },
      {
        element: <SearchPage />,
        path: 'search/:text',
      },
      {
        element: <EditionsView />,
        path: 'works/:key',
        loader: ({ params }) => {
          return fetchEditions(params.key);
        }
      },
    ],
  },
  {
    path: "*",
    element: <h2>Sidan du letar efter kan ej hittas.</h2>
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
