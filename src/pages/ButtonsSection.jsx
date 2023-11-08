import React from "react";
import PropTypes from 'prop-types';

const ButtonsSection = ({items}) => {
  const gridStyles = {
    gridTemplateColumns: `repeat(${items.length}, 1fr)`,
  };

  return (
    <nav>
      <div className="grid py-1 px-5 gap-5 bg-orange-100" style={gridStyles}>
        {items.map((item, index) => (
          <button onClick={item.onclick} key={index}>
            <div className="rounded bg-orange-200 p-3 hover:bg-orange-300">{item.title}</div>
          </button>
        ))}
      </div>
    </nav>
  )
}

ButtonsSection.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      onclick: PropTypes.func.isRequired
    })
  ).isRequired
};

export default ButtonsSection