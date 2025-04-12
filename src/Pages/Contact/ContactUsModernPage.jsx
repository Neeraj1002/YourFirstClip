import React, { useRef } from "react";

// Libraries
import { Col, Container, Navbar, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Keyboard } from "swiper/modules";
import { Formik, Form } from "formik";
import { AnimatePresence, m } from "framer-motion";

// Components
import { Header, HeaderNav, Menu } from "../../Components/Header/Header";
import Buttons from "../../Components/Button/Buttons";
import { ContactFormStyle02Schema } from "../../Components/Form/FormSchema";
import { Input, TextArea } from "../../Components/Form/Form";
import MessageBox from "../../Components/MessageBox/MessageBox";
import GoogleMap from "../../Components/GoogleMap/GoogleMap";
import FooterStyle01 from "../../Components/Footers/FooterStyle01";
import { fadeIn } from "../../Functions/GlobalAnimations";
import { sendEmail, resetForm } from "../../Functions/Utilities";

// Data
const SwiperImgData = [
  {
    img: "https://via.placeholder.com/1920x730",
  },
  {
    img: "https://via.placeholder.com/1920x730",
  },
  {
    img: "https://via.placeholder.com/1920x730",
  },
];

const ContactUsModernPage = (props) => {
  const form = useRef(null);

  return (
    <div style={props.style}>
      {/* Header Start */}
      <Header topSpace={{ md: true }} type="reverse-scroll">
        <HeaderNav
          theme="light"
          expand="lg"
          className="py-[0px] border-b !border-b-[#0000001a] lg:px-[15px] md:px-0"
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
                  src="/assets/img/webp/logo-black.webp"
                  data-rjs="/assets/img/webp/logo-black@2x.webp"
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
        </HeaderNav>
      </Header>
      {/* Header End */}

      {/* Section Start */}
      <section className="bg-gradient-to-tr from-[#f6054a99] via-[#f1dd4e] to-[#ff949b] py-[130px] lg:py-[90px] md:py-[75px] sm:py-[50px]">
        <Container className="h-[300px] sm:h-[250px] flex justify-center sm:justify-end">
          <Row xs={1} md={2} className="items-end justify-end sm:flex-col">
            <Col className="p-0 sm:!px-[15px] sm:mb-[20px]">
              <h1 className="text-xmd !leading-[20px] pl-[90px] pr-[15px] text-darkgray font-serif mb-0 relative sm:pl-[55px] md:mb-0 sm:mb-[20px]">
                <span className="h-[1px] absolute top-[12px] left-0 w-[70px] bg-black sm:w-[40px] sm:top-1/2"></span>
                Get in touch
              </h1>
            </Col>
            <Col className="p-0 sm:!px-[15px]">
              <h4 className="font-medium text-darkgray font-serif mb-0">
                Let’s collaborate to bring your stories to life through stunning
                edits.
              </h4>
            </Col>
          </Row>
        </Container>
      </section>
      {/* Section End */}

      {/* Section Start */}
      <section className="py-[160px] lg:py-[120px] md:py-[95px] sm:py-[80px] xs:py-[50px]">
        <Container>
          <Row className="items-end justify-center">
            <Col className="col-12 col-lg-5 col-md-8 md:mb-[50px]">
              <h1 className="font-serif text-black font-semibold text-center mb-[50px] text-5xl md:text-5xl sm:text-3xl border-b-4 border-yellow-500">
                ABOUT US
              </h1>

              <div
                className="p-16 items-center justify-start text-left z-[1] relative bg-lightgray overflow-hidden bg-[right_top] bg-no-repeat lg:px-[3rem] md:p-20 xs:p-14"
                style={{
                  backgroundImage: "url(/assets/img/webp/quotes-01.webp)",
                }}
              >
                <div className="text-darkgray font-serif font-medium text-xl mb-4 text-yellow-500">
                  What Do We Do!
                </div>
                <div className="text-sm text-darkgray leading-relaxed space-y-4">
                  <p>
                    We craft content — from quirky edits to cinematic cuts.
                    We're not great at writing bios (trust us, we tried). If
                    you're vibing with our style, drop a line at{" "}
                    <a
                      href="mailto:contactyourfirstclip@gmail.com"
                      className="underline text-yellow-500"
                    >
                      contactyourfirstclip@gmail.com
                    </a>{" "}
                    or just call{" "}
                    <a
                      href="tel:+919958138646"
                      className="underline text-yellow-500"
                    >
                      +919958138646
                    </a>
                    .
                  </p>
                  <p>
                    <strong className="text-yellow-500">
                      1000+ Videos and Still Rolling
                    </strong>
                    <br />
                    Since kicking off in 2019, we've delivered over 1000 videos
                    for 35+ brands. That’s around 250 videos a year. But here’s
                    the twist — our first two years were chill with just 150
                    videos. The real hustle began post-2021 when content demand
                    went through the roof. In the last couple of years alone,
                    we've pushed out nearly 850 videos. Some weeks we shoot
                    daily. It’s intense, but we love it — and we’re always up
                    for a new challenge.
                  </p>
                </div>
              </div>
            </Col>

            <Col className="col-12 col-lg-6 offset-lg-1 col-md-8">
              <h4 className="font-serif text-black font-semibold border-b-4 border-yellow-500">
                Let's get in touch with us
              </h4>
              <Row className="justify-center">
                <Col>
                  <Formik
                    initialValues={{
                      name: "",
                      email: "",
                      phone: "",
                      comment: "",
                    }}
                    validationSchema={ContactFormStyle02Schema}
                    onSubmit={async (values, actions) => {
                      try {
                        actions.setSubmitting(true);

                        const response = await sendEmail(values);

                        if (response.status === "success") {
                          resetForm(actions);
                          console.log("Form submitted successfully:", response);
                        } else {
                          console.error("API error:", response);
                        }
                      } catch (error) {
                        console.error("Error during form submission:", error);
                      } finally {
                        actions.setSubmitting(false);
                      }
                    }}
                  >
                    {({ isSubmitting, status }) => (
                      <Form ref={form}>
                        <Input
                          showErrorMsg={false}
                          type="text"
                          name="name"
                          labelClass="mb-[25px]"
                          className="pt-[20px] pr-[36px] pb-[20px] w-full bg-transparent border-b border-solid border-black text-[16px]"
                          placeholder="Your name"
                        />
                        <Input
                          showErrorMsg={false}
                          type="email"
                          name="email"
                          labelClass="mb-[25px]"
                          className="pt-[20px] pr-[36px] pb-[20px] w-full bg-transparent border-b border-solid border-black text-[16px]"
                          placeholder="Your email address"
                        />
                        <Input
                          showErrorMsg={false}
                          type="tel"
                          name="phone"
                          labelClass="mb-[25px]"
                          className="pt-[20px] pr-[36px] pb-[20px] w-full bg-transparent border-b border-solid border-black text-[16px]"
                          placeholder="Mobile no"
                        />
                        <TextArea
                          className="py-[20px] pr-[36px] mb-[32px] w-full bg-transparent border-b border-solid border-black text-[16px] resize-none"
                          name="comment"
                          rows="6"
                          placeholder="How can we help you?"
                        ></TextArea>
                        <Buttons
                          type="submit"
                          className={`tracking-[0.5px] btn-fill rounded-none font-medium uppercase${
                            isSubmitting ? " loading" : ""
                          }`}
                          themeColor="#232323"
                          size="md"
                          color="#fff"
                          title="Send Message"
                        />
                        <AnimatePresence>
                          {status && (
                            <div
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                            >
                              <MessageBox
                                className="mt-[20px] py-[10px]"
                                theme="message-box01"
                                variant="success"
                                message="Your message has been sent successfully!"
                              />
                            </div>
                          )}
                        </AnimatePresence>
                      </Form>
                    )}
                  </Formik>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
      {/* Section End */}

      <section className="py-[80px] md:py-[40px]">
        <Container className="container">
          <Row className="row justify-center">
            <m.div
              className="col col-12 col-sm-auto sm:mb-[15px]"
              {...{ ...fadeIn, transition: { delay: 0.2 } }}
            >
              <div className="flex justify-center items-center px-[15px] h-full">
                <i className="feather-headphones align-middle text-lg text-gradient bg-gradient-to-r from-[#e42464] to-[#ff7357] mr-[10px]"></i>
                <span className="text-darkgray font-serif text-md">
                  +919958138646
                </span>
              </div>
            </m.div>
            <m.div
              className="col col-12 col-sm-auto sm:mb-[15px]"
              {...{ ...fadeIn, transition: { delay: 0.4 } }}
            >
              <div className="flex justify-center items-center px-[15px] h-full">
                <i className="feather-mail align-middle text-lg text-gradient bg-gradient-to-r from-[#e42464] to-[#ff7357] mr-[10px]"></i>
                <a
                  href="mailto:no-reply@domain.com"
                  rel="noreferrer"
                  className="text-darkgray font-serif text-md hover:text-fastblue"
                >
                  contactyourfirstclip@gmail.com
                </a>
              </div>
            </m.div>
            <m.div
              className="col col-12 col-sm-auto"
              {...{ ...fadeIn, transition: { delay: 0.6 } }}
            >
              <div className="flex justify-center items-center px-[15px] h-full">
                <i className="feather-globe align-middle text-lg text-gradient bg-gradient-to-r from-[#e42464] to-[#ff7357] mr-[10px]"></i>
                <Link
                  to="/page/contact-modern"
                  className="text-darkgray font-serif text-md hover:text-fastblue"
                >
                  www.yourfirstclip.com
                </Link>
              </div>
            </m.div>
          </Row>
        </Container>
      </section>

      {/* Footer Start */}
      <FooterStyle01 theme="dark" className="bg-[#262b35] text-slateblue" />
      {/* Footer End */}
    </div>
  );
};

export default ContactUsModernPage;
