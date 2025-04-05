import React from "react";
import { PropTypes } from "prop-types";
import { m } from "framer-motion";
import { Link } from "react-router-dom";
import Filter from "./Filter";
import { portfolioBorderedData } from "./PortfolioData";

const PortfolioBordered = ({ title, data, filterData, target, grid }) => {
  const style = {
    "--overlay-color":
      typeof grid === "object"
        ? `linear-gradient(to right top, ${grid.map((item, i) => item)})`
        : grid,
  };

  return (
    <div className="grid-wrapper px-4">
      {/* Optional Filter */}
      {title && <Filter title={title} />}

      {/* Portfolio Grid */}
      <ul className="grid grid-cols-4 sm:grid-cols-1 md:grid-cols-2 gap-6">
        {data.map((item, i) => (
          <li key={i}>
            <Link aria-label="link" target={target} to={item.link}>
              <m.div
                className="portfolio-bordered"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <div className="portfolio-image" style={style}>
                  {item.img && (
                    <img
                      className="w-full"
                      src={item.img}
                      height={470}
                      width={550}
                      alt="portfolio-bordered"
                    />
                  )}
                  <div
                    className="portfolio-border-hover"
                    style={{ backgroundColor: "#ffcc2f85" }}
                  >
                    <div className="scale block font-serif p-2">
                      <div className="text-darkgray text-xl font-semibold">
                        {item.title}
                      </div>
                      <div
                        className="text-sm font-large uppercase"
                        style={{ color: "rgb(79, 78, 78)" }}
                      >
                        {item.category}
                      </div>
                    </div>
                  </div>
                </div>
              </m.div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

PortfolioBordered.defaultProps = {
  data: portfolioBorderedData,
};

PortfolioBordered.propTypes = {
  title: PropTypes.string,
  target: PropTypes.string,
  data: PropTypes.arrayOf(
    PropTypes.exact({
      subtitle: PropTypes.string,
      title: PropTypes.string,
      img: PropTypes.string,
      category: PropTypes.array,
      link: PropTypes.string,
      double_col: PropTypes.bool,
    })
  ),
  filterData: PropTypes.array,
};

export default PortfolioBordered;
