import React, { useEffect, useState } from "react";

// Libraries
import { Col, Container, Navbar, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { m } from "framer-motion";
import { Link as ScrollTo } from "react-scroll";

// Components
import Header, { HeaderNav, Menu } from "../../Components/Header/Header";
import {
  fadeIn,
  fadeInRight,
  fadeInLeft,
} from "../../Functions/GlobalAnimations";
import Buttons from "../../Components/Button/Buttons";
import Clients from "../../Components/Clients/Clients";
import IconWithText from "../../Components/IconWithText/IconWithText";
import PortfolioBordered from "../../Components/Portfolio/PortfolioBordered";
import CustomModal from "../../Components/CustomModal";
import FooterStyle01 from "../../Components/Footers/FooterStyle01";
import Spinner from "../../Admin/Component/Common/Spinner";
// Data
import {
  IconWithTextData_05,
  IconWithTextData_08,
} from "../../Components/IconWithText/IconWithTextData";
import { FilterData } from "../../Components/Portfolio/PortfolioData";
import { usePortfolio } from "../../Context/Admin/PortfolioContext";
import { ClientData } from "../../Components/Clients/ClientsData";

const DesignagencyPage = (props) => {
  const { loading, clientPortfolios, loadPortfolios } = usePortfolio();
  const [portfolioData, setPortfolioData] = useState([]);

  useEffect(() => {
    loadPortfolios();
  }, [clientPortfolios.length]);

  useEffect(() => {
    if (clientPortfolios.length > 0) {
      const shuffled = [...clientPortfolios].sort(() => 0.5 - Math.random());
      setPortfolioData(shuffled.slice(0, 9));
    }
  }, [clientPortfolios]);

  return !loading ? (
    <>
      <div className="bg-white" style={props.style}>
        {/* Header Start */}
        <Header topSpace={{ md: true }} type="reverse-scroll">
          <HeaderNav
            fluid="fluid"
            theme="light"
            expand="lg"
            containerClass="md:p-0"
            className="py-[0px] px-[35px] md:px-[15px] md:py-[20px] sm:px-0"
          >
            <Col className="col-5 col-lg-2 ps-lg-0 me-auto me-lg-0">
              <Link
                aria-label="header logo"
                className="flex items-center"
                to="/"
              >
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

        {/* Section Start */}
        <div className="md:flex md:items-center overflow-hidden relative">
          {/* <Parallax
            className="lg-no-parallax bg-cover absolute top-[0px] left-0 md:-top-[30px] w-full h-[100vh]"
            translateY={[-40, 40]}
            style={{
              backgroundImage: `url(https://via.placeholder.com/1920x1081)`,
            }}
          ></Parallax> */}
          <div
            className="h-full w-full left-0 top-0 absolute cover-background"
            style={{
              backgroundImage: `url(/assets/img/home.png)`,
            }}
          ></div>
          <Container className="relative">
            <Row className="full-screen md:h-[650px] sm:h-[500px] justify-end sm:justify-end md:justify-end">
              <Col
                lg={5}
                md={6}
                sm={7}
                className="flex flex-col items-start justify-center sm:items-end"
              >
                <h1 className="font-serif font-semibold text-[100px] leading-[95px] text-darkgray -tracking-[4px] mb-[4.5rem] xs:w-[65%] lg:text-[90px] lg:leading-[90px] md:text-[70px] md:leading-[65px] sm:text-[45px] sm:leading-[43px] sm:-tracking-[.5px]">
                  We are Editing agency
                </h1>
                <Buttons
                  ariaLabel="Get started now"
                  to="/page/contact-us"
                  className="font-semibold font-serif z-10 uppercase btn-expand rounded md:mb-[15px] hover:text-darkgray"
                  size="xl"
                  color="#232323"
                  themeColor="#fff"
                  title="Get started now"
                />
              </Col>
            </Row>
          </Container>
          <div className="absolute bottom-[30px] w-auto left-0 right-0 z-[1]">
            <ScrollTo
              to="contact-us"
              offset={0}
              delay={0}
              spy={true}
              smooth={true}
              duration={800}
              className="section-link block w-[2px] h-[35px] bg-white mx-auto right-0 left-0 absolute cursor-pointer"
            >
              <span className="text-darkgray absolute font-serif font-semibold tracking-[-.5px] bottom-[25px] w-[100px] h-auto mb-[5px] -rotate-90 origin-[0] hover:text-darkgray">
                scroll
              </span>
            </ScrollTo>
          </div>
        </div>
        {/* Section End */}

        {/* Section Start */}
        <section
          id="about"
          className="py-[160px] overflow-hidden lg:py-[120px] md:py-[95px] sm:py-[80px] xs:py-[50px]"
        >
          <Container>
            <IconWithText
              grid="row-cols-1 row-cols-lg-5 row-cols-md-3 row-cols-sm-2 gap-y-[50px] justify-center"
              theme="icon-with-text-05"
              data={IconWithTextData_05}
              animation={fadeIn}
              animationDelay={0.1}
            />
            <Row className="items-end justify-center mt-[10.5rem] md:mt-28 md:text-center">
              <Col lg={3} className="md:mb-[25px] sm:mb-[15px] lg:px-0">
                <m.span
                  className="font-serif font-semibold text-[100px] leading-[95px] text-[#ffcc2e] -tracking-[5px] sm:-tracking-[1.5px] lg:text-[90px] md:text-[70px] sm:text-[45px] sm:leading-none"
                  {...{ ...fadeIn, transition: { duration: 0.7 } }}
                >
                  hello<span className="text-darkgray">.</span>
                </m.span>
              </Col>
              <Col
                lg={5}
                md={10}
                className="text-right md:mb-[25px] md:text-center"
              >
                <m.h2
                  className="heading-4 font-serif font-semibold text-darkgray block mb-0 pr-10 -tracking-[1px] lg:pr-0"
                  {...{
                    ...fadeIn,
                    transition: { duration: 0.7, delay: 0.5 },
                  }}
                >
                  Great agency specialising in creative video editing
                </m.h2>
              </Col>
              <m.div
                className="pl-[30px] md:pl-[15px] col-lg-4 col-md-9"
                {...{ ...fadeIn, transition: { duration: 0.7, delay: 0.7 } }}
              >
                <p className="w-[80%] mb-[15px] lg:w-full">
                  We craft stories, frame by frame. At our editing studio, we
                  specialize in transforming raw footage into visually stunning
                  and emotionally impactful content. Whether it’s reels, short
                  films, TVCs, social media ads, or IPL-style sports edits — our
                  team brings precision, creativity, and storytelling expertise
                  to every project. With fast turnaround times and a keen eye
                  for detail, we help creators and brands turn their vision into
                  engaging visual experiences.
                </p>
                <Buttons
                  ariaLabel="Agency info"
                  to="/page/contact-us"
                  className="font-semibold font-serif uppercase btn-link after:h-[2px] !text-md md:mb-[15px] after:bg-darkgray hover:text-darkgray"
                  color="#232323"
                  title="Agency info"
                />
              </m.div>
            </Row>
          </Container>
        </section>
        {/* Section End */}

        {/* Section Start */}
        <section className="py-[160px] border-t border-mediumgray pb-0 lg:py-[120px] md:py-[95px] sm:py-[80px] xs:py-[50px]">
          <PortfolioBordered
            title="Amazing works"
            data={portfolioData}
            filterData={FilterData}
            grid="grid grid-4col xl-grid-4col lg-grid-2col md-grid-2col sm-grid-2col xs-grid-1col"
          />
        </section>

        {/* Section End */}

        {/* Section Start */}
        <section className="py-[130px] overflow-hidden bg-gradient-to-b from-[#fff] via-[#fdfdfd] to-[#f7f7f7] lg:py-[90px] md:py-[75px] sm:py-[50px]">
          <Container>
            <Row className="items-center justify-center">
              <Col
                lg={6}
                className="icon-with-texts relative flex items-center"
              >
                <img
                  className="w-full mx-auto"
                  width={476}
                  height={652}
                  src="	https://litho.themezaa.com/wp-content/uploads/2020/09/home-design-agency-img-01.png"
                  alt="Editing workspace with laptop and notes"
                />
                {/* Modal Component Start */}
                <CustomModal.Wrapper
                  modalBtn={
                    <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
                      <Buttons
                        ariaLabel="modal btn"
                        type="submit"
                        className="btn-sonar border-0"
                        themeColor="#fff"
                        color="#232323"
                        size="lg"
                        title={<i className="icon-control-play text-[26px]" />}
                      />
                    </div>
                  }
                >
                  <div className="w-[1020px] max-w-full relative rounded mx-auto">
                    <div className="fit-video">
                      <iframe
                        width="100%"
                        height="100%"
                        className="shadow-[0_0_8px_rgba(0,0,0,0.06)]"
                        controls
                        src="https://www.youtube.com/embed/g0f_BRYJLJE?autoplay=1"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                </CustomModal.Wrapper>
                {/* Modal Component End */}
              </Col>
              <Col xl={4} lg={{ span: 5, offset: 1 }} md={7}>
                <m.h2
                  className="heading-4 font-serif font-semibold text-darkgray mb-[4.5rem] -tracking-[.5px] md:text-center"
                  {...{
                    ...fadeInLeft,
                    transition: { delay: 0.2, duration: 0.6 },
                  }}
                >
                  Discover Exceptional Editing Services!
                </m.h2>
                <IconWithText
                  grid="flex-col gap-y-[4.5rem]"
                  theme="icon-with-text-08"
                  data={IconWithTextData_08}
                  animation={fadeInLeft}
                  animationDelay={0.4}
                />
              </Col>
            </Row>
            <Row>
              <Col className="text-center mt-28 lg:mt-16">
                <m.span
                  className="font-serif text-darkgray text-lg text-center"
                  {...fadeIn}
                >
                  Are you interested in us?&nbsp;
                  <ScrollTo
                    to="/page/contact-us"
                    offset={0}
                    delay={0}
                    spy={true}
                    smooth={true}
                    duration={800}
                    className="font-semibold inline-block text-decoration-line-bottom text-darkgray hover:text-darkgray cursor-pointer"
                  >
                    <Link to="/page/contact-us">Let's start now</Link>
                  </ScrollTo>
                </m.span>
              </Col>
            </Row>
          </Container>
        </section>
        {/* Section End */}

        {/* Section Start */}
        <section className="py-[160px] overflow-hidden lg:py-[120px] md:py-[95px] sm:py-[80px] xs:py-[50px]">
          <Container>
            <Clients
              grid="row-cols-1 row-cols-sm-2 row-cols-md-4"
              theme="client-logo-style-06"
              data={ClientData}
              animation={fadeIn}
              animationDelay={0.1}
              carousel={true}
              carouselOption={{
                slidesPerView: 4,
                spaceBetween: 20,
                loop: true,
                autoplay: {
                  disableOnInteraction: true,
                },
              }}
            />
          </Container>
        </section>
        {/* Section End */}

        {/* Section Start */}
        {/* <m.section
          className="py-[130px] bg-lightgray overflow-hidden lg:py-[90px] md:py-[75px] sm:py-[50px]"
          {...fadeIn}
        >
          <Container>
            <Row className="items-center">
              <Col sm={6}>
                <h2 className="heading-4 font-serif font-semibold text-darkgray mb-0 -tracking-[1px] xs:text-center">
                  Interesting articles
                </h2>
              </Col>
              <Col sm={6} className="text-right xs:text-center">
                <Buttons
                  ariaLabel="all articles"
                  to="/blogs/blog-masonry"
                  className="font-medium font-serif uppercase btn-link after:h-[2px] md:mb-[15px] after:bg-darkgray hover:text-darkgray"
                  color="#232323"
                  title="all articles"
                  size="xlg"
                />
              </Col>
            </Row>
          </Container>
        </m.section> */}
        {/* Section End */}
      </div>

      {/* Footer Start */}
      <FooterStyle01 theme="dark" className="bg-[#262b35] text-slateblue" />

      {/* Footer End */}
    </>
  ) : (
    <Spinner />
  );
};

export default DesignagencyPage;
