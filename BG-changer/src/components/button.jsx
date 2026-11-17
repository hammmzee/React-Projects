import React from 'react'

const colorStyles = {
  blue: "bg-blue-600 hover:bg-blue-700",
  green: "bg-green-600 hover:bg-green-700",
  orange: "bg-orange-500 hover:bg-orange-600",
  red: "bg-red-600 hover:bg-red-700",
  aqua: "bg-cyan-500 hover:bg-cyan-600",
  indigo: "bg-indigo-600 hover:bg-indigo-700",
  pink: "bg-pink-600 hover:bg-pink-700",
  purple: "bg-purple-600 hover:bg-purple-700",
};

function Button({ color, onClick }) {
  const selectedColor = colorStyles[color] || "bg-gray-600 hover:bg-gray-700";

  return (
    <button
      onClick={onClick}
      className={`rounded-3xl px-5 py-2.5 font-medium capitalize text-white transition active:scale-95 ${selectedColor}`}
    >
      {color}
    </button>
  );
}

export default Button;
