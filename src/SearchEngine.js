import React, { useState } from "react";

export default function SearchEngine() {
  let [city, setCity] = useState("");
  function Submit(event) {
    event.preventDefault();
  }
  function ChangeCity(event) {
      setCity(event.target.value);
  }
  let form =(
    <form onSubmit={Submit} className="searchCity">
      <input type="search" placeholder="Search city" onChange={ChangeCity} />
      <input type="submit" value="🔎" />
    </form>
  )  
  return (
    <div>
        {form}
    </div>
  );
}
