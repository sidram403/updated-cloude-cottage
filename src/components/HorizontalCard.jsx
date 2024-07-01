import React from "react";

const HorizontalCard = ({ imageSrc, title, items }) => {
  return (
    <div className="max-w-[83rem] mx-auto bg-white overflow-hidden flex flex-col md:flex-row my-8">
      <img
        className="w-full md:w-1/3 h-48 object-cover"
        src={imageSrc}
        alt={title}
      />
      <div className="w-full md:w-2/3 px-4 flex flex-col justify-between">
        <div>
          <h2 className="text-2xl text-[#018E92]">{title}</h2>
          <ul className="list-disc pl-5 mt-2">
            {items.map((item, index) => (
              <li key={index} className="text-gray-700 mt-1">
                {item.description}
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 ml-1"
                >
                  (Click here)
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HorizontalCard;
