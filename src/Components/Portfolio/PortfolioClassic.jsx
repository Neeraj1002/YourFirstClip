import React, { memo, useEffect, useRef, useState } from "react";
// Libraries
import Lightbox from "react-18-image-lightbox";
import { PropTypes } from "prop-types";
import { m } from "framer-motion";

// Components
import Filter from "./Filter";
import CustomModal from "../../Components/CustomModal";

// Data
import { portfolioClassicData } from "./PortfolioData";

const PortfolioClassic = (props) => {
  const portfolioWrapper = useRef();
  const [loading, setLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [activeVideo, setActiveVideo] = useState(null);

  const handleVideoClick = (link) => {
    setActiveVideo(link);
  };
  useEffect(() => {
    if (!portfolioWrapper.current || !props.data.length) return;

    const allImages = portfolioWrapper.current.querySelectorAll("img");

    Promise.all(
      Array.from(allImages)
        .filter((img) => !img.complete)
        .map(
          (img) =>
            new Promise((resolve) => {
              img.onload = img.onerror = resolve;
            })
        )
    ).then(() => {
      import("../../Functions/Utilities").then((module) => {
        const grid = module.initializeIsotop(portfolioWrapper.current);
        grid.on("arrangeComplete", () => setLoading(false));
      });
    });
  }, [props.data]);

  const style = {
    "--overlay-color":
      typeof props.overlay === "object"
        ? `linear-gradient(to right top, ${props.overlay})`
        : props.overlay,
  };

  const handleFilterChange = () => {
    portfolioWrapper.current
      .querySelectorAll("li")
      .forEach((item) => item.childNodes[0]?.classList.add("appear"));
  };
  return (
    <div className="grid-wrapper">
      {/* Filter Start */}
      <Filter
        title={props.title}
        filterData={props.filterData}
        onFilterChange={handleFilterChange}
      />
      {/* Filter End */}

      {/* Grid Start */}
      <ul
        ref={portfolioWrapper}
        className={`grid-container text-center${
          props.grid ? ` ${props.grid}` : ""
        }${props.className ? ` ${props.className}` : ""}${
          loading ? " loading" : ""
        }`}
      >
        <li className="grid-sizer"></li>
        {props.data.map((item, i) => {
          return (
            <li
              key={i}
              className={`grid-item p-[15px]${
                item.double_col ? " grid-item-double" : ""
              } ${item.category.toString().split(",").join(" ").toLowerCase()}`}
            >
              <CustomModal.Wrapper
                modalBtn={
                  <div
                    className="portfolio-bordered cursor-pointer"
                    onClick={() => handleVideoClick(item.link)}
                  >
                    <m.div
                      initial={{ opacity: 0 }}
                      whileInView={!loading && { opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      className="portfolio-classic"
                    >
                      {/* Link to the Portfolio Detail page */}

                      <div className="portfolio-image" style={style}>
                        {item.img && (
                          <img
                            className="w-full"
                            src={item.img}
                            height={440}
                            width={540}
                            alt="portfolio-classic"
                          />
                        )}
                      </div>
                      {(item.title || item.subtitle) && (
                        <div className="portfolio-caption">
                          {item.title && <span>{item.title}</span>}
                          {item.subtitle && (
                            <span className="text-md block mb-[1%]">
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
          );
        })}
      </ul>
      {/* Grid End */}

      {isOpen && (
        <Lightbox
          mainSrc={props.data[photoIndex].img}
          onCloseRequest={() => setIsOpen(false)}
          nextSrc={props.data[(photoIndex + 1) % props.data.length].img}
          prevSrc={
            props.data[(photoIndex + props.data.length - 1) % props.data.length]
              .img
          }
          onMovePrevRequest={() =>
            setPhotoIndex(
              (photoIndex + props.data.length - 1) % props.data.length
            )
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % props.data.length)
          }
        />
      )}
    </div>
  );
};

PortfolioClassic.defaultProps = {
  data: portfolioClassicData,
};

PortfolioClassic.propTypes = {
  grid: PropTypes.string,
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
};

export default memo(PortfolioClassic);
