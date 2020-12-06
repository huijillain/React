import React from "react";
import { Link, useLocation } from "react-router-dom";

// First we export function Home/About/Events/Contact() with h1 only, then we import line 2  and add links in div below.
export function Home() {
  return (
    <div>
      <h1>[Company Website]</h1>
      <nav>
        <Link to="about">About</Link>
        <Link to="events">Events</Link>
        <Link to="Contact">Contact</Link>
      </nav>
    </div>
  );
}

export function About() {
  return (
    <div>
      <h1>[About]</h1>
    </div>
  );
}

export function Events() {
  return (
    <div>
      <h1>[Events]</h1>
    </div>
  );
}

export function Contact() {
  return (
    <div>
      <h1>[Contact]</h1>
    </div>
  );
}

export function Whoops404() {
  let location = useLocation();
  //   console.log(location);
  return (
    <div>
      <h1>Resource not found at {location.pathname}!</h1>
    </div>
  );
}
