import React, { useState } from "react";
import { PropTypes } from "prop-types";

import Filter from "./Filter";
import { portfolioBorderedData } from "./PortfolioData";
import CustomModal from "../../Components/CustomModal";

const PortfolioBordered = ({ title, data, filterData, target, grid }) => {
  const [activeVideo, setActiveVideo] = useState(null);

  const handleVideoClick = (link) => {
    setActiveVideo(link);
  };

  const style = {
    "--overlay-color":
      typeof grid === "object"
        ? `linear-gradient(to right top, ${grid.map((item, i) => item)})`
        : grid,
  };

  return (
    <div className="grid-wrapper px-4">
      {/* Optional Filter */}
      {title && <Filter title={title} link={"/portfolio"} />}

      {/* Portfolio Grid */}
      <ul className="grid grid-cols-4 sm:grid-cols-1 md:grid-cols-2 gap-6">
        {data.map((item, i) => (
          <li key={i} className="portfolio-item">
            <CustomModal.Wrapper
              modalBtn={
                <div
                  className="portfolio-bordered cursor-pointer"
                  onClick={() => handleVideoClick(item.link)}
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
                </div>
              }
            >
              {/* Video Modal Content */}
              {activeVideo && (
                <div className="w-[720px] max-w-full relative rounded mx-auto">
                  <div className="fit-video">
                    <iframe
                      width="100%"
                      height="400px"
                      className="shadow-[0_0_8px_rgba(0,0,0,0.06)]"
                      src={`${activeVideo}?autoplay=1`}
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              )}
            </CustomModal.Wrapper>
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
