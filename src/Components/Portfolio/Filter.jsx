import React from "react";
import { Link } from "react-router-dom";

// Libraries
import { Col, Container, Row } from "react-bootstrap";
import { PropTypes } from "prop-types";

const Filter = (props) => {
  const handleFilterChange = (filter) => {
    props.onFilterChange && props.onFilterChange(filter);
  };

  return (
    (props.title || props.filterData) && (
      <Container className="mb-24 md:mb-[4.5rem] sm:mb-8 mt-4">
        <Row
          className={`${
            props.title ? "justify-between" : "justify-center"
          } items-center md:justify-center md:items-center md:text-center md:flex-col`}
        >
          {props.title && (
            <Col xs="12" className="md:mb-[30px]">
              <div className="flex items-center space-x-12 md:flex-wrap md:justify-center">
                <h3 className="heading-4 font-serif m-0 p-0 font-semibold text-darkgray tracking-[-1px] relative after:content-[''] after:block after:h-[4px] after:bg-[#ffd100] after:mt-2">
                  {props.title}
                </h3>
                <div className="mt-2">
                  <Link
                    to="/portfolio"
                    className="text-lg text-blue-500  hover:underline whitespace-nowrap md:mt-2 "
                  >
                    View All
                  </Link>
                </div>
              </div>
            </Col>
          )}
          <Col xs="auto">
            {props.filterData && (
              <ul className="filter-menu items-center justify-center flex flex-wrap uppercase">
                {props.filterData.map((item, i) => {
                  return (
                    <li
                      key={i}
                      className={`px-[20px]${
                        props.activeFilter === item.key ? " active" : ""
                      }`}
                    >
                      <span
                        data-filter={item.key}
                        onClick={() => handleFilterChange(item.key)}
                        className="cursor-pointer"
                      >
                        {item.title}
                      </span>
                    </li>
                  );
                })}
              </ul>
            )}
          </Col>
        </Row>
      </Container>
    )
  );
};

export default Filter;

Filter.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  filterData: PropTypes.arrayOf(
    PropTypes.exact({
      key: PropTypes.string,
      title: PropTypes.string,
    })
  ),
  link: PropTypes.string,
};
