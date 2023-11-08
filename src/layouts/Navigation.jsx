import React from "react";
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";

const Navigation = ({items}) => {
  const gridStyles = {
    gridTemplateColumns: `repeat(${items.length}, 1fr)`,
  };

  return (
    <nav>
      <div className="grid py-1 px-5 text-center gap-5 bg-orange-100" style={gridStyles}>
        {items.map((item, index) => (
          <Link to={item.href} key={index}>
            <div className="rounded bg-orange-200 p-3 hover:bg-orange-300">{item.title}</div>
          </Link>
        ))}
      </div>
    </nav>
  )
}

Navigation.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired
    })
  ).isRequired
};

export default Navigation