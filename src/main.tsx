import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./routes/home";
import EventPage from "./routes/event-page";
import { Toaster } from "./components/ui/toaster";
import Layout from "./routes/layout";
import Profile from "./routes/profile";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/event/:id" element={<EventPage />} />
          <Route path="/profile/:id" element={<Profile />} />
        </Route>
      </Routes>
      <Toaster />
    </BrowserRouter>
  </StrictMode>
);
