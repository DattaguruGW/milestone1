// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import NavigationBar from "./components/navbar";
import HomePage from "./pages/homepage";
import EventsPage from "./pages/eventpage";
import EventRegistration from "./pages/eventregistration"; // ✅ Fixed casing
import BeachesPage from "./pages/beachespage";
import CalendarPage from "./pages/calenderpage";
import AuthPage from "./pages/authpage";
import AdminDashboard from "./pages/admindashboard";
import ReviewsPage from "./pages/reviewspage";

function App() {
  return (
    <Router>
      <NavigationBar />
      <Container className="mt-4">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/register/:eventId" element={<EventRegistration />} />
          <Route path="/register" element={<EventRegistration />} /> {/* ✅ Added for testing */}
          <Route path="/beaches" element={<BeachesPage />} />
          <Route path="/calendar" element={<CalendarPage />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/reviews" element={<ReviewsPage />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
