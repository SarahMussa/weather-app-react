import React, { useState } from "react";

export default function SearchEngine() {
  let [city, setCity] = useState("");
  function Submit(event) {
    event.preventDefault();
  }
  return (
    <form onSubmit={Submit} className="searchCity">
      <input type="text" placeholder="Search city" />
      <input type="submit" value="🔎" />
    </form>
  );
}
