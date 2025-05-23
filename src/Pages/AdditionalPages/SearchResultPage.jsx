import React from "react";

// Libraries
import { Link, useLocation } from "react-router-dom";
import { Col, Container, Navbar, Row } from "react-bootstrap";

// Components
import Header, {
  HeaderNav,
  Menu,
  SearchBar,
} from "../../Components/Header/Header";
import FooterStyle01 from "../../Components/Footers/FooterStyle01";

const SearchResultPage = (props) => {
  const searchresult = useLocation();
  return (
    <div style={props.style}>
      {/* Header Start */}
      <Header topSpace={{ desktop: true }} type="reverse-scroll">
        <HeaderNav
          fluid="fluid"
          theme="ligt"
          bg="white"
          menu="light"
          className="px-[35px] py-[0px] md:px-0"
          containerClass="sm:px-0"
        >
          <Col className="col-auto col-sm-6 col-lg-2 me-auto ps-lg-0">
            <Link aria-label="header logo" className="flex items-center" to="/">
              <Navbar.Brand className="inline-block p-0 m-0">
                <img
                  className="default-logo"
                  width="111"
                  height="36"
                  loading="lazy"
                  src="/assets/img/webp/logo-fast-blue-black.webp"
                  data-rjs="/assets/img/webp/logo-fast-blue-black@2x.webp"
                  alt="logo"
                />
                <img
                  className="alt-logo"
                  width="111"
                  height="36"
                  loading="lazy"
                  src="/assets/img/webp/logo-fast-blue-black.webp"
                  data-rjs="/assets/img/webp/logo-fast-blue-black@2x.webp"
                  alt="logo"
                />
                <img
                  className="mobile-logo"
                  width="111"
                  height="36"
                  loading="lazy"
                  src="/assets/img/webp/logo-fast-blue-black.webp"
                  data-rjs="/assets/img/webp/logo-fast-blue-black@2x.webp"
                  alt="logo"
                />
              </Navbar.Brand>
            </Link>
          </Col>
          <div className="col-auto hidden order-last md:block">
            <Navbar.Toggle className="md:ml-[10px] sm:ml-0">
              <span className="navbar-toggler-line"></span>
              <span className="navbar-toggler-line"></span>
              <span className="navbar-toggler-line"></span>
              <span className="navbar-toggler-line"></span>
            </Navbar.Toggle>
          </div>
          <Navbar.Collapse className="col-auto px-0 justify-end">
            <Menu {...props} />
          </Navbar.Collapse>
          <Col className="col-auto text-right pe-0">
            <SearchBar className="xs:pl-[15px] pr-0" />
          </Col>
        </HeaderNav>
      </Header>
      {/* Header End */}

      {/* Section Start */}
      <section className="bg-darkgray py-[25px] page-title-small">
        <Container>
          <Row className="items-center justify-center">
            <Col xl={8} lg={6}>
              <h1 className="font-serif text-lg text-white font-medium mb-0 md:text-center">
                Search results for "
                {searchresult.state ? searchresult.state.search.search : "Blog"}
                "
              </h1>
            </Col>
            <Col
              xl={4}
              lg={6}
              className="breadcrumb justify-end text-sm font-serif mb-0 md:mt-[10px] md:justify-center"
            >
              <ul className="xs:text-center">
                <li>
                  <Link
                    aria-label="homepage"
                    to="/"
                    className="hover:text-white"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link aria-label="pages" to="#" className="hover:text-white">
                    Pages
                  </Link>
                </li>
                <li>Blog</li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>
      {/* Section End */}

      {/* Footer Start */}
      <FooterStyle01 theme="dark" className="text-slateblue bg-[#262b35]" />
      {/* Footer End */}
    </div>
  );
};

export default SearchResultPage;
