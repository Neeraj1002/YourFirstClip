import React, { memo, useState } from "react";
import Lightbox from "react-18-image-lightbox";
import { PropTypes } from "prop-types";
import { m } from "framer-motion";
import Filter from "./Filter";
import CustomModal from "../../Components/CustomModal";

const PortfolioClassic = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [activeVideo, setActiveVideo] = useState(null);
  const [activeFilter, setActiveFilter] = useState("*");

  const handleVideoClick = (link) => {
    setActiveVideo(link);
  };

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
  };

  const filteredData =
    activeFilter === "*"
      ? props.data
      : props.data.filter((item) =>
          item.category.some(
            (cat) => cat.toLowerCase() === activeFilter.toLowerCase()
          )
        );

  const overlayStyle = {
    "--overlay-color":
      typeof props.overlay === "object"
        ? `linear-gradient(to right top, ${props.overlay})`
        : props.overlay,
  };

  return (
    <div className="grid-wrapper">
      {/* Filter Start */}
      <Filter
        title={props.title}
        filterData={props.filterData}
        onFilterChange={handleFilterChange}
        activeFilter={activeFilter}
      />
      {/* Filter End */}

      {/* Grid Start */}
      <ul className="sm:columns-1 md:columns-2 columns-3 gap-4">
        {filteredData.length ? (
          filteredData.map((item, i) => (
            <li key={i} className="mb-4 break-inside-avoid">
              <CustomModal.Wrapper
                modalBtn={
                  <div
                    className="portfolio-bordered cursor-pointer"
                    onClick={() => handleVideoClick(item.link)}
                  >
                    <m.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      className="portfolio-classic bg-white rounded-lg shadow-md overflow-hidden"
                    >
                      <div
                        className="portfolio-image relative"
                        style={overlayStyle}
                      >
                        {item.img && (
                          <img
                            className="w-full object-cover"
                            src={item.img}
                            height={440}
                            width={540}
                            alt={item.title || "portfolio"}
                          />
                        )}
                      </div>
                      {(item.title || item.subtitle) && (
                        <div className="portfolio-caption p-4">
                          {item.title && (
                            <span className="block font-semibold text-lg mb-2">
                              {item.title}
                            </span>
                          )}
                          {item.subtitle && (
                            <span className="text-sm text-gray-500">
                              {item.subtitle}
                            </span>
                          )}
                        </div>
                      )}
                    </m.div>
                  </div>
                }
              >
                {/* Video Modal Content */}
                {activeVideo && (
                  <div className="w-[720px] max-w-full relative rounded mx-auto">
                    <div className="aspect-video">
                      <iframe
                        width="100%"
                        height="100%"
                        className="rounded shadow-lg"
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
          ))
        ) : (
          <p className="text-center col-span-3 text-gray-400">
            No data in this category.
          </p>
        )}
      </ul>
      {/* Grid End */}

      {/* Lightbox (for images) */}
      {isOpen && (
        <Lightbox
          mainSrc={filteredData[photoIndex].img}
          onCloseRequest={() => setIsOpen(false)}
          nextSrc={filteredData[(photoIndex + 1) % filteredData.length].img}
          prevSrc={
            filteredData[
              (photoIndex + filteredData.length - 1) % filteredData.length
            ].img
          }
          onMovePrevRequest={() =>
            setPhotoIndex(
              (photoIndex + filteredData.length - 1) % filteredData.length
            )
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % filteredData.length)
          }
        />
      )}
    </div>
  );
};

PortfolioClassic.propTypes = {
  grid: PropTypes.string,
  title: PropTypes.string,
  target: PropTypes.string,
  data: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number,
      subtitle: PropTypes.string,
      title: PropTypes.string,
      img: PropTypes.string,
      category: PropTypes.array,
      link: PropTypes.string,
      double_col: PropTypes.bool,
    })
  ),
};

export default memo(PortfolioClassic);
