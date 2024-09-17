import React, { Suspense, useEffect, useState, lazy } from "react";

// Libraries
import { Routes, Route, useLocation, Router } from "react-router-dom";
import retina from "retinajs";
import { AnimatePresence } from "framer-motion";

// Context
import GlobalContext from "./Context/Context";
import { AuthProvider } from './Context/AuthContext';

// Components
import ScrollToTopButton from "./Components/ScrollToTop";
import LoginPage from "./Admin/Pages/Auth/LoginPage";
import SignupPage from "./Admin/Pages/Auth/LoginPage";
import PrivateRoute from './Admin/Routes/PrivateRoute';
import Layout from './Admin/Component/Layout/Layout';
import DashboardPage from './Admin/Pages/Dashboard/DashboardPage';

// Home
const DesignagencyPage = lazy(() => import("./Pages/Home/DesignAgency"));

const PortfolioPage = lazy(() => import("./Pages/Portfolios"));

const PortfolioBoxedThreeColPage = lazy(() =>
  import("./Pages/Portfolios/PortfolioBoxed/PortfolioBoxedThreeColumn")
);

const SingleProjectPage01 = lazy(() =>
  import("./Pages/Portfolios/SingleProjectPage01")
);
const SingleProjectPage02 = lazy(() =>
  import("./Pages/Portfolios/SingleProjectPage02")
);
const SingleProjectPage03 = lazy(() =>
  import("./Pages/Portfolios/SingleProjectPage03")
);

// Header
const TransparentHeaderPage = lazy(() =>
  import("./Pages/Header/TransparentHeaderPage")
);
const WhiteHeaderPage = lazy(() => import("./Pages/Header/WhiteHeaderPage"));
const DarkHeaderPage = lazy(() => import("./Pages/Header/DarkHeaderPage"));
const HeaderwithTopbarPage = lazy(() =>
  import("./Pages/Header/HeaderwithTopbarPage")
);
const HeaderWithPushPage = lazy(() =>
  import("./Pages/Header/HeaderWithPushPage")
);
const CenterNavigationPage = lazy(() =>
  import("./Pages/Header/CenterNavigationPage")
);
const CenterLogoPage = lazy(() => import("./Pages/Header/CenterLogoPage"));
const TopLogoPage = lazy(() => import("./Pages/Header/TopLogoPage"));
const OnePageNavigationPage = lazy(() =>
  import("./Pages/Header/OnePageNavigationPage")
);
const LeftMenuClassicPage = lazy(() =>
  import("./Pages/Header/LeftMenuClassicPage")
);
const LeftMenuModernPage = lazy(() =>
  import("./Pages/Header/LeftMenuModernPage")
);
const HeaderAlwaysFixedPage = lazy(() =>
  import("./Pages/Header/HeaderTypes/HeaderAlwaysFixedPage")
);
const HeaderResponsiveSticky = lazy(() =>
  import("./Pages/Header/HeaderTypes/HeaderResponsiveSticky")
);
const HeaderDisableFixed = lazy(() =>
  import("./Pages/Header/HeaderTypes/HeaderDisableFixed")
);
const HeaderReverseScroll = lazy(() =>
  import("./Pages/Header/HeaderTypes/HeaderReverseScroll")
);
const MobileMenuClassicPage = lazy(() =>
  import("./Pages/Header/MobileMenu/MobileMenuClassicPage")
);
const MobileMenuModernPage = lazy(() =>
  import("./Pages/Header/MobileMenu/MobileMenuModernPage")
);
const MobileMenuFullScreen = lazy(() =>
  import("./Pages/Header/MobileMenu/MobileMenuFullScreen")
);
const HamburgerMenuPage = lazy(() =>
  import("./Pages/Header/HamburgerMenu/HamburgerMenuPage")
);
const HamburgerMenuModernPage = lazy(() =>
  import("./Pages/Header/HamburgerMenu/HamburgerMenuModernPage")
);
const HamburgerMenuHalfPage = lazy(() =>
  import("./Pages/Header/HamburgerMenu/HamburgerMenuHalfPage")
);

// Footer
const FooterStyle01Page = lazy(() =>
  import("./Pages/Footer/FooterStyle01Page")
);
const FooterStyle02Page = lazy(() =>
  import("./Pages/Footer/FooterStyle02Page")
);
const FooterStyle03Page = lazy(() =>
  import("./Pages/Footer/FooterStyle03Page")
);
const FooterStyle04Page = lazy(() =>
  import("./Pages/Footer/FooterStyle04Page")
);
const FooterStyle05Page = lazy(() =>
  import("./Pages/Footer/FooterStyle05Page")
);
const FooterStyle06Page = lazy(() =>
  import("./Pages/Footer/FooterStyle06Page")
);
const FooterStyle07Page = lazy(() =>
  import("./Pages/Footer/FooterStyle07Page")
);
const FooterStyle08Page = lazy(() =>
  import("./Pages/Footer/FooterStyle08Page")
);
const FooterStyle09Page = lazy(() =>
  import("./Pages/Footer/FooterStyle09Page")
);
const FooterStyle10Page = lazy(() =>
  import("./Pages/Footer/FooterStyle10Page")
);
const FooterStyle11Page = lazy(() =>
  import("./Pages/Footer/FooterStyle11Page")
);
const FooterStyle12Page = lazy(() =>
  import("./Pages/Footer/FooterStyle12Page")
);

// Model-Popup
const ModalPopupPage = lazy(() => import("./Pages/ModalPopup"));
const SimpleModel = lazy(() => import("./Pages/ModelPopup/SimpleModel"));
const ContactFormModal = lazy(() =>
  import("./Pages/ModelPopup/ContactFormModal")
);
const SubscriptionModal = lazy(() =>
  import("./Pages/ModelPopup/SubscriptionModal")
);
const VimeoVideoModal = lazy(() =>
  import("./Pages/ModelPopup/VimeoVideoModal")
);
const YouTubeVideoModal = lazy(() =>
  import("./Pages/ModelPopup/YouTubeVideoModal")
);
const GoogleMapModal = lazy(() => import("./Pages/ModelPopup/GoogleMapModal"));

// Icon Packs
const IconsMindLinePage = lazy(() => import("./Pages/Icons/IconsMindIconPage"));
const IconsMindSolidPage = lazy(() =>
  import("./Pages/Icons/IconsMindSolidPage")
);
const FontAwesomeIconPage = lazy(() =>
  import("./Pages/Icons/FontAwesomeIconPage")
);
const FeatherIconPage = lazy(() => import("./Pages/Icons/FeatherIconPage"));
const EtLineIconPage = lazy(() => import("./Pages/Icons/EtLineIconPage"));
const SimplelineIconPage = lazy(() =>
  import("./Pages/Icons/SimplelineIconPage")
);
const ThemifyIconPage = lazy(() => import("./Pages/Icons/ThemifyIconPage"));
const AnimationPage = lazy(() => import("./Pages/Animation"));

// Page-Title
const LeftAlignmentPage = lazy(() =>
  import("./Pages/PageTitle/LeftAlignmentPage")
);
const RightAlignmentPage = lazy(() =>
  import("./Pages/PageTitle/RightAlignmentPage")
);
const CenterAlignmentPage = lazy(() =>
  import("./Pages/PageTitle/CenterAlignmentPage")
);
const ColorfulStylePage = lazy(() =>
  import("./Pages/PageTitle/ColorfulStylePage")
);
const ParallaxBackground = lazy(() =>
  import("./Pages/PageTitle/ParallaxBackground")
);
const SeparateBreadcrumbsPage = lazy(() =>
  import("./Pages/PageTitle/SeparateBreadcrumbsPage")
);
const GalleryBackgroundPage = lazy(() =>
  import("./Pages/PageTitle/GalleryBackgroundPage")
);
const BackgroundVideoPage = lazy(() =>
  import("./Pages/PageTitle/BackgroundVideoPage")
);
const MiniVersionPage = lazy(() => import("./Pages/PageTitle/MiniVersionPage"));
const BigTypographyPage = lazy(() =>
  import("./Pages/PageTitle/BigTypographyPage")
);
const PageTitle = lazy(() => import("./Pages/PageTitle"));

// About Pages

const AboutUsPage = lazy(() => import("./Pages/About/AboutUsPage"));

// Services Pages
const WhatWeOfferPage = lazy(() => import("./Pages/Services/WhatWeOfferPage"));

// Contact Pages
const ContactUsModernPage = lazy(() =>
  import("./Pages/Contact/ContactUsModernPage")
);

// Blogs
const BlogPage = lazy(() => import("./Pages/Blogs"));
const BlogMasonryPage = lazy(() => import("./Pages/Blogs/BlogMasonry"));

// Additional Pages
const NotFoundPage = lazy(() => import("./Pages/404"));
const MaintenancePage = lazy(() =>
  import("./Pages/AdditionalPages/MaintenancePage")
);
const ComingSoonPage = lazy(() =>
  import("./Pages/AdditionalPages/ComingSoonPage")
);
const ComingSoonV2Page = lazy(() =>
  import("./Pages/AdditionalPages/ComingSoonV2Page")
);
const FaqSPage = lazy(() => import("./Pages/AdditionalPages/FaqSPage"));
const SearchResultPage = lazy(() =>
  import("./Pages/AdditionalPages/SearchResultPage")
);

const Footer = lazy(() => import("./Pages/Footer"));
const Privacy = lazy(() => import("./Pages/Privacy"));

function App() {
  const [headerHeight, setHeaderHeight] = useState(0);
  const [footerHeight, setFooterHeight] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [customModal, setCustomModal] = useState({
    el: null,
    isOpen: false,
  });
  const location = useLocation();

  // RetinaJS
  useEffect(() => {
    window.addEventListener("load", retina(document.querySelectorAll("img")));
  }, []);

  useEffect(() => {
    setTimeout(() => {
      import("./Functions/Utilities").then((module) => {
        module.SetHeaderMenuPos();
        module.setDocumentFullHeight();
      });
    }, 1000);
  }, [location]);

  useEffect(() => {
    if (isModalOpen === true) {
      document.querySelector("body").classList.add("overflow-hidden");
    } else {
      document.querySelector("body").classList.remove("overflow-hidden");
    }
  }, [isModalOpen]);

  // Get the current location and set the window to top
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
    setFooterHeight(0);
    setCustomModal({
      ...customModal,
      el: null,
      isOpen: false,
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <GlobalContext.Provider
      value={{
        headerHeight,
        setHeaderHeight,
        footerHeight,
        setFooterHeight,
        isModalOpen,
        setIsModalOpen,
        customModal,
        setCustomModal,
      }}
    >
      <AuthProvider>
      <div className="App" style={{ "--header-height": `${headerHeight}px` }}>
        {
          <main style={{ marginTop: headerHeight, marginBottom: footerHeight }}>
            <ScrollToTopButton />
            <AnimatePresence mode="wait">
              <Suspense fallback={<></>}>
                <Routes>
                  <Route path="/" element={<DesignagencyPage />} />
                  <Route path="/admin/signup" element={<SignupPage />} />
                  <Route path="/admin/login" element={<LoginPage />} />

                     {/* Protected routes */}
                     
                  <Route
                    path="/*"
                    element={
                      <Layout>
                      <PrivateRoute>
                        
                        <Routes>
                            <Route path="/admin" element={<DashboardPage />} />
                            <Route path="/admin-page" element={<DashboardPage />} />
                            {/* <Route path="/view-users" element={<ViewUsersPage />} />
                            <Route path="/add-user" element={<AddUserPage />} /> */}
                          
                      </Routes>
                        
                      </PrivateRoute>
                      </Layout>
                    }
                  />

                  {/* Headers */}
                  <Route path="headers">
                    <Route
                      path="transparent-header"
                      element={
                        <TransparentHeaderPage
                          style={{ "--base-color": "#0038e3" }}
                        />
                      }
                    />
                    <Route path="white-header" element={<WhiteHeaderPage />} />
                    <Route path="dark-header" element={<DarkHeaderPage />} />
                    <Route
                      path="header-with-top-bar"
                      element={
                        <HeaderwithTopbarPage
                          style={{ "--base-color": "#828282" }}
                        />
                      }
                    />
                    <Route
                      path="header-with-push"
                      element={
                        <HeaderWithPushPage
                          style={{ "--base-color": "#828282" }}
                        />
                      }
                    />
                    <Route
                      path="center-navigation"
                      element={<CenterNavigationPage />}
                    />{" "}
                    <Route path="center-logo" element={<CenterLogoPage />} />
                    <Route path="top-logo" element={<TopLogoPage />} />
                    <Route
                      path="one-page-navigation"
                      element={
                        <OnePageNavigationPage
                          style={{ "--base-color": "#f4d956" }}
                        />
                      }
                    />
                    <Route
                      path="header-always-fixed"
                      element={<HeaderAlwaysFixedPage />}
                    />{" "}
                    <Route
                      path="header-disable-fixed"
                      element={<HeaderDisableFixed />}
                    />
                    <Route
                      path="header-reverse-scroll"
                      element={<HeaderReverseScroll />}
                    />{" "}
                    <Route
                      path="header-responsive-sticky"
                      element={
                        <HeaderResponsiveSticky
                          style={{ "--base-color": "#fff" }}
                        />
                      }
                    />
                    <Route
                      path="left-menu-classic"
                      element={<LeftMenuClassicPage />}
                    />{" "}
                    <Route
                      path="left-menu-modern"
                      element={
                        <LeftMenuModernPage
                          style={{ "--base-color": "#c7da26" }}
                        />
                      }
                    />
                    <Route
                      path="mobile-menu-classic"
                      element={<MobileMenuClassicPage />}
                    />{" "}
                    <Route
                      path="mobile-menu-modern"
                      element={<MobileMenuModernPage />}
                    />
                    <Route
                      path="mobile-menu-full-screen"
                      element={<MobileMenuFullScreen />}
                    />{" "}
                    <Route
                      path="hamburger-menu"
                      element={<HamburgerMenuPage />}
                    />
                    <Route
                      path="hamburger-menu-modern"
                      element={
                        <HamburgerMenuModernPage
                          style={{ "--base-color": "#fff" }}
                        />
                      }
                    />
                    <Route
                      path="hamburger-menu-half"
                      element={
                        <HamburgerMenuHalfPage
                          style={{ "--base-color": "#fff" }}
                        />
                      }
                    />
                  </Route>

                  {/* Footers */}
                  <Route
                    path="footers"
                    element={<Footer style={{ "--base-color": "#0038e3" }} />}
                  >
                    <Route
                      path="footer-style-01"
                      element={
                        <FooterStyle01Page
                          style={{ "--base-color": "#0038e3" }}
                        />
                      }
                    />
                    <Route
                      path="footer-style-02"
                      element={
                        <FooterStyle02Page
                          style={{ "--base-color": "#0038e3" }}
                        />
                      }
                    />
                    <Route
                      path="footer-style-03"
                      element={
                        <FooterStyle03Page
                          style={{ "--base-color": "#0038e3" }}
                        />
                      }
                    />
                    <Route
                      path="footer-style-04"
                      element={
                        <FooterStyle04Page
                          style={{ "--base-color": "#0038e3" }}
                        />
                      }
                    />
                    <Route
                      path="footer-style-05"
                      element={
                        <FooterStyle05Page
                          style={{ "--base-color": "#0038e3" }}
                        />
                      }
                    />
                    <Route
                      path="footer-style-06"
                      element={
                        <FooterStyle06Page
                          style={{ "--base-color": "#0038e3" }}
                        />
                      }
                    />
                    <Route
                      path="footer-style-07"
                      element={
                        <FooterStyle07Page
                          style={{ "--base-color": "#0038e3" }}
                        />
                      }
                    />
                    <Route
                      path="footer-style-08"
                      element={
                        <FooterStyle08Page
                          style={{ "--base-color": "#0038e3" }}
                        />
                      }
                    />
                    <Route
                      path="footer-style-09"
                      element={
                        <FooterStyle09Page style={{ "--base-color": "#fff" }} />
                      }
                    />
                    <Route
                      path="footer-style-10"
                      element={
                        <FooterStyle10Page
                          style={{ "--base-color": "#0038e3" }}
                        />
                      }
                    />
                    <Route
                      path="footer-style-10"
                      element={
                        <FooterStyle10Page
                          style={{ "--base-color": "#0038e3" }}
                        />
                      }
                    />
                    <Route
                      path="footer-style-11"
                      element={
                        <FooterStyle11Page
                          style={{ "--base-color": "#0038e3" }}
                        />
                      }
                    />
                    <Route
                      path="footer-style-12"
                      element={
                        <FooterStyle12Page
                          style={{ "--base-color": "#0038e3" }}
                        />
                      }
                    />
                  </Route>

                  {/* Elements
                  <Route
                    path="elements"
                    element={
                      <ElementPage style={{ "--base-color": "#0038e3" }} />
                    }
                  >
                    <Route path="accordions" element={<AccordionPage />} />
                    <Route path="buttons" element={<ButtonPage />} />
                    <Route path="teams" element={<TeamPage />} />
                    <Route
                      path="team-carousel"
                      element={<TeamCarouselPage />}
                    />
                    <Route path="clients" element={<ClientPage />} />
                    <Route
                      path="client-carousel"
                      element={<ClientCarouselPage />}
                    />{" "}
                    <Route path="subscribe" element={<SubscribePage />} />
                    <Route
                      path="call-to-action"
                      element={<CallToActionPage />}
                    />
                    <Route path="tab" element={<TabPage />} />
                    <Route path="google-map" element={<GoogleMapPage />} />
                    <Route path="contact-form" element={<ContactFormPage />} />
                    <Route
                      path="image-gallery"
                      element={<ImageGalleryPage />}
                    />
                    <Route path="progress-bar" element={<ProgressBarPage />} />
                    <Route
                      path="icon-with-text"
                      element={<IconWithTextPage />}
                    />
                    <Route
                      path="overline-icon-box"
                      element={<OverLineIconBoxPage />}
                    />{" "}
                    <Route
                      path="custom-icon-with-text"
                      element={<CustomIconWithTextPage />}
                    />
                    <Route path="counters" element={<CountersPage />} />
                    <Route path="countdown" element={<CountDownPage />} />
                    <Route path="pie-chart" element={<PieChartPage />} />
                    <Route
                      path="fancy-text-box"
                      element={<FancyTextBoxPage />}
                    />
                    <Route path="text-box" element={<TextBoxPage />} />
                    <Route path="team" element={<TeamPage />} />
                    <Route path="fancy-text" element={<FancyTextPage />} />
                    <Route path="testimonials" element={<TestimonialsPage />} />
                    <Route
                      path="testimonials-carousel"
                      element={<TestimonialsCarouselPage />}
                    />{" "}
                    <Route path="video" element={<VideoPage />} />
                    <Route
                      path="interactive-banners"
                      element={<InteractiveBannersPage />}
                    />{" "}
                    <Route path="services" element={<ServicesPage />} />
                    <Route path="info-banner" element={<InfoBannerPage />} />
                    <Route path="rotate-box" element={<RotateBoxPage />} />
                    <Route path="process-step" element={<ProcessStepPage />} />
                    <Route path="instagram" element={<InstagramPage />} />
                    <Route
                      path="parallax-scrolling"
                      element={<ParallaxScrollingPage />}
                    />{" "}
                    <Route path="text-slider" element={<TextSliderPage />} />
                    <Route path="heading" element={<HeadingPage />} />
                    <Route path="dropcaps" element={<DropCapsPage />} />
                    <Route path="columns" element={<ColumnsPage />} />
                    <Route path="blockquote" element={<BlockquotePage />} />
                    <Route path="highlights" element={<HighlightsPage />} />
                    <Route path="message-box" element={<MessageBoxPage />} />
                    <Route path="social-icons" element={<SocialIconsPage />} />
                    <Route path="lists" element={<ListsPage />} />
                    <Route path="separators" element={<SeparatorsPage />} />
                    <Route
                      path="pricing-table"
                      element={<PricingTablePage />}
                    />
                  </Route> */}

                  {/* Portfolios */}
                  <Route
                    path="portfolio"
                    element={
                      <PortfolioPage style={{ "--base-color": "#0038e3" }} />
                    }
                  >
                    <Route
                      path="/portfolio/view"
                      element={
                        <PortfolioBoxedThreeColPage
                          style={{ "--base-color": "#fff" }}
                        />
                      }
                    />
                  </Route>
                  {/* SingleProjectPage*/}
                  <Route
                    path="/portfolio/single-project-page-01"
                    element={
                      <SingleProjectPage01
                        style={{ "--base-color": "#0038e3" }}
                      />
                    }
                  />
                  <Route
                    path="/portfolio/single-project-page-02"
                    element={
                      <SingleProjectPage02
                        style={{ "--base-color": "#0038e3" }}
                      />
                    }
                  />
                  <Route
                    path="/portfolio/single-project-page-03"
                    element={
                      <SingleProjectPage03
                        style={{ "--base-color": "#0038e3" }}
                      />
                    }
                  />

                  {/* Blogs */}
                  <Route
                    path="blogs"
                    element={<BlogPage style={{ "--base-color": "#0038e3" }} />}
                  >
                    <Route
                      path="blog-masonry"
                      element={
                        <BlogMasonryPage
                          style={{ "--base-color": "#0038e3" }}
                        />
                      }
                    />
                  </Route>

                  {/* Model-Popup */}
                  <Route path="model-popup" element={<ModalPopupPage />}>
                    <Route path="simple-modal" element={<SimpleModel />} />
                    <Route
                      path="subscription"
                      element={<SubscriptionModal />}
                    />
                    <Route path="contact-form" element={<ContactFormModal />} />
                    <Route
                      path="youtube-video"
                      element={<YouTubeVideoModal />}
                    />
                    <Route path="vimeo-video" element={<VimeoVideoModal />} />
                    <Route path="Google-map" element={<GoogleMapModal />} />
                  </Route>

                  {/* Icon Packs */}
                  <Route path="iconsmindline" element={<IconsMindLinePage />} />
                  <Route
                    path="iconsmindsolid"
                    element={<IconsMindSolidPage />}
                  />
                  <Route path="ETlineicon" element={<EtLineIconPage />} />
                  <Route path="fontawesome" element={<FontAwesomeIconPage />} />
                  <Route path="feather" element={<FeatherIconPage />} />
                  <Route path="simple-line" element={<SimplelineIconPage />} />
                  <Route path="themify" element={<ThemifyIconPage />} />
                  <Route path="animation" element={<AnimationPage />} />

                  {/* Page-Title */}
                  <Route path="page-title" element={<PageTitle />}>
                    <Route
                      path="left-alignment"
                      element={<LeftAlignmentPage />}
                    />{" "}
                    <Route
                      path="right-alignment"
                      element={<RightAlignmentPage />}
                    />
                    <Route
                      path="center-alignment"
                      element={<CenterAlignmentPage />}
                    />{" "}
                    <Route
                      path="colorful-style"
                      element={<ColorfulStylePage />}
                    />
                    <Route
                      path="big-typography"
                      element={<BigTypographyPage />}
                    />{" "}
                    <Route
                      path="parallax-background"
                      element={<ParallaxBackground />}
                    />
                    <Route
                      path="separate-breadcrumbs"
                      element={<SeparateBreadcrumbsPage />}
                    />{" "}
                    <Route
                      path="gallery-background"
                      element={<GalleryBackgroundPage />}
                    />
                    <Route
                      path="background-video"
                      element={<BackgroundVideoPage />}
                    />{" "}
                    <Route path="mini-version" element={<MiniVersionPage />} />
                  </Route>

                  {/*About Pages */}

                  <Route
                    path="/page/about-us"
                    element={
                      <AboutUsPage style={{ "--base-color": "#0038e3" }} />
                    }
                  />

                  {/* Services Pages */}
                  <Route
                    path="/page/services"
                    element={
                      <WhatWeOfferPage style={{ "--base-color": "#0038e3" }} />
                    }
                  />

                  {/* Contact Pages */}
                  <Route
                    path="/page/contact-us"
                    element={
                      <ContactUsModernPage
                        style={{ "--base-color": "#0038e3" }}
                      />
                    }
                  />

                  {/* Additional Pages */}

                  <Route
                    path="/page/error-404"
                    element={
                      <NotFoundPage style={{ "--base-color": "#0038e3" }} />
                    }
                  />
                  <Route
                    path="/page/maintenance"
                    element={<MaintenancePage />}
                  />
                  <Route
                    path="/page/coming-soon"
                    element={<ComingSoonPage />}
                  />
                  <Route
                    path="/page/coming-soon-V2"
                    element={<ComingSoonV2Page />}
                  />
                  <Route
                    path="/page/faq-s"
                    element={<FaqSPage style={{ "--base-color": "#0038e3" }} />}
                  />
                  <Route
                    path="/page/search-result"
                    element={
                      <SearchResultPage style={{ "--base-color": "#0038e3" }} />
                    }
                  />
                  <Route path="*" element={<NotFoundPage />} />
                  <Route
                    path="/privacy"
                    element={<Privacy style={{ "--base-color": "#0038e3" }} />}
                  />
                </Routes>
              </Suspense>
            </AnimatePresence>
          </main>
        }
      </div>
      </AuthProvider>
    </GlobalContext.Provider>
  );
}

export default App;
