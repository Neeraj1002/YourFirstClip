import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// Libraries
import { Col, Container, Row, Navbar } from "react-bootstrap";
import { Parallax } from "react-scroll-parallax";

// Components
import PortfolioClassic from "../../Components/Portfolio/PortfolioClassic";
// Components
import { Header, HeaderNav, Menu } from "../../Components/Header/Header";

import FooterStyle01 from "../../Components/Footers/FooterStyle01";
import { usePortfolio } from "../../Context/Admin/PortfolioContext";
// Data
import { FilterData } from "../../Components/Portfolio/PortfolioData";

const ThreeColumnPortfolio = (props) => {
  const { clientPortfolios, loadPortfolios } = usePortfolio();
  const [portfolioClassicData, setPortfolioClassicData] = useState([]);

  useEffect(() => {
    loadPortfolios();
  }, []);
  // Set portfolio data
  useEffect(() => {
    if (clientPortfolios.length > 0) {
      setPortfolioClassicData(clientPortfolios);
    }
  }, [clientPortfolios]);
  console.log(portfolioClassicData);
  return (
    <div style={props.style}>
      <Header topSpace={{ md: true }} type="reverse-scroll">
        <HeaderNav
          fluid="fluid"
          theme="light"
          expand="lg"
          containerClass="md:p-0"
          className="py-[0px] px-[35px] md:px-[15px] md:py-[20px] sm:px-0"
        >
          <Col className="col-5 col-lg-2 ps-lg-0 me-auto me-lg-0">
            <Link aria-label="header logo" className="flex items-center" to="/">
              <Navbar.Brand className="inline-block p-0 m-0">
                <img
                  className="default-logo"
                  width="111"
                  height="36"
                  loading="lazy"
                  src="/assets/img/webp/logo-white.webp"
                  data-rjs="/assets/img/webp/logo-black2x.webp"
                  alt="logo"
                />
                <img
                  className="alt-logo"
                  width="111"
                  height="36"
                  loading="lazy"
                  src="/assets/img/webp/logo-white.webp"
                  data-rjs="/assets/img/webp/logo-black@2x.webp"
                  alt="logo"
                />
                <img
                  className="mobile-logo"
                  width="111"
                  height="36"
                  loading="lazy"
                  src="/assets/img/webp/logo-white.webp"
                  data-rjs="/assets/img/webp/logo-black@2x.webp"
                  alt="logo"
                />
              </Navbar.Brand>
            </Link>
          </Col>
          <Navbar.Toggle className="md:mr-[17px]">
            <span className="navbar-toggler-line"></span>
            <span className="navbar-toggler-line"></span>
            <span className="navbar-toggler-line"></span>
            <span className="navbar-toggler-line"></span>
          </Navbar.Toggle>
          <Navbar.Collapse className="justify-end">
            <Menu {...props} />
          </Navbar.Collapse>
        </HeaderNav>
      </Header>
      {/* Header End */}
      {/* Parallax Section Start */}
      <div className="py-[80px] h-auto overflow-hidden md:relative md:py-[40px]">
        <Parallax
          className="lg-no-parallax absolute top-[0] w-full h-full bg-cover"
          translateY={[-40, 40]}
          style={{
            backgroundImage: `url(/assets/img/webp/portfolio-bg2.webp)`,
          }}
        ></Parallax>
        <Container className="h-full relative">
          <Row className="justify-center h-[300px] sm:h-[250px]">
            <Col
              xl={6}
              lg={6}
              sm={8}
              className="text-center flex justify-center flex-col font-serif"
            >
              <h1 className="text-gradient bg-gradient-to-r from-[#556fff] via-[#e05fc4] to-[#ff798e] mb-[15px] inline-block text-xmd leading-[20px]">
                Explore{" "}
                <span className="text-yellow-500 text-4xl font-bold">
                  YourFirstClip's
                </span>{" "}
                Editing Showcase
              </h1>
              <h2 className="text-gradient bg-gradient-to-r from-[#556fff] via-[#e05fc4] to-[#ff798e] font-medium -tracking-[1px] mb-0">
                Professional Edits for Every Story
              </h2>
            </Col>
          </Row>
        </Container>
      </div>
      {/* Parallax Section End */}

      <section className="pb-[130px] lg:pb-[90px] md:pb-[75px] sm:pb-[50px] bg-lightgray relative">
        <Container>
          <Row>
            <Col xs={12} className="xs:px-0">
              <PortfolioClassic
                overlay={[
                  "#0039e3",
                  "#4132e0",
                  "#5e28dd",
                  "#741bd9",
                  "#8600d4",
                ]}
                grid="grid grid-3col xl-grid-3col lg-grid-3col md-grid-2col sm-grid-2col xs-grid-1col gutter-extra-large"
                filterData={FilterData}
                data={portfolioClassicData}
              />
            </Col>
          </Row>
        </Container>
      </section>
      {/* Render nested route like PortfolioDetails and pass data as context */}
      {/* Footer Start */}
      <FooterStyle01 theme="dark" className="bg-[#262b35] text-slateblue" />
      {/* Footer End */}
    </div>
  );
};

export default ThreeColumnPortfolio;
