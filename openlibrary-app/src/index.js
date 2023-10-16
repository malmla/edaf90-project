import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import BookView from './item-view/BookView';
import SearchPage from './components/SearchPage';
import ListPage from './components/ListPage';
import { fetchBookEdition } from './dataClasses';

const router = createBrowserRouter([
  {
    element: <App />,
    path: "/",
    children: [
      {
        index: true,
        element: <BookView />,
        path: 'book/:olid',
        loader: ({ params }) => {
          return fetchBookEdition(params.olid);
        }
      },
      {
        element: <ListPage />,
        path: 'my-lists'
      },
      {
        element: <SearchPage />,
        path: 'search/:text',
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
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
