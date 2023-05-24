import React from "react";

function TopButton({ setquery }) {
  const cities = [
    {
      id: 1,
      title: "kathmandu",
    },
    {
      id: 2,
      title: "Pokhara",
    },
    {
      id: 3,
      title: "Hetauda",
    },
    {
      id: 4,
      title: "Damak",
    },
  ];
  return (
    <div className="flex items-center justify-around my-6">
      {cities.map((city) => (
        <button
          key={city.id}
          className="text-white text-lg font-medium"
          onClick={() => setquery({ q: city.title })}
        >
          {city.title}
        </button>
      ))}
    </div>
  );
}
export default TopButton;
