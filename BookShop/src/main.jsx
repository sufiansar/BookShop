import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Root from "./components/Root/Root.jsx";
// import Home from "./components/Home/Home.jsx";
import ListedBooks from "./components/Pages/ListedBooks.jsx";
import BookDetails from "./components/BookDetails/BookDetails.jsx";
import Home from "./components/Home/Home.jsx";

const route = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root></Root>}>
      <Route path="/" element={<Home></Home>}></Route>
      <Route
        path="/books/:bookId"
        loader={async () => {
          const response = await fetch(`/data/booksData.json`);
          return response.json();
        }}
        element={<BookDetails></BookDetails>}
      ></Route>
      <Route
        path="/listed"
        loader={async () => {
          const response = await fetch(`/data/booksData.json`);
          return response.json();
        }}
        element={<ListedBooks></ListedBooks>}
      ></Route>
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={route}></RouterProvider>
  </StrictMode>
);
