import React, { Suspense, useEffect, useState, lazy } from "react";

// Libraries
import { Routes, Route, useLocation } from "react-router-dom";
import retina from "retinajs";
import { AnimatePresence } from "framer-motion";

// Context
import GlobalContext from "./Context/Context";
import { AuthProvider } from './Context/Admin/AuthContext';

// Components
import ScrollToTopButton from "./Components/ScrollToTop";
import LoginPage from "./Admin/Pages/Auth/LoginPage";
import SignupPage from "./Admin/Pages/Auth/SignupPage";
import PrivateRoute from './Admin/Routes/PrivateRoute';
import Layout from './Admin/Component/Layout/Layout';
import DashboardPage from './Admin/Pages/Dashboard/DashboardPage';
import PortfolioListViewPage from './Admin/Pages/Portfolio/PortfolioListViewPage'; 
import EditPortfolioPage from './Admin/Pages/Portfolio/EditPortfolioPage';
import NewPortfolioPage from './Admin/Pages/Portfolio/NewPortfolioPage';
import ViewPortfolioPage from './Admin/Pages/Portfolio/ViewPortfolioPage';
import UserPage from './Admin/Pages/Users/UserPage';
import NewUserPage from './Admin/Pages/Users/NewUserPage';
import EditUserPage from './Admin/Pages/Users/EditUserPage'; 

// Home
const DesignagencyPage = lazy(() => import("./Pages/Home/DesignAgency"));

// const PortfolioPage = lazy(() => import("./Pages/Portfolios"));


const SingleProjectPage03 = lazy(() =>
  import("./Pages/Portfolios/SingleProjectPage03")
);


// Footer
const FooterStyle01Page = lazy(() =>
  import("./Pages/Footer/FooterStyle01Page")
);


// Model-Popup
const ModalPopupPage = lazy(() => import("./Pages/ModalPopup"));
const SimpleModel = lazy(() => import("./Pages/ModelPopup/SimpleModel"));
const GalleryBackgroundPage = lazy(() =>
  import("./Pages/PageTitle/GalleryBackgroundPage")
);
const BackgroundVideoPage = lazy(() =>
  import("./Pages/PageTitle/BackgroundVideoPage")
);
const MiniVersionPage = lazy(() => import("./Pages/PageTitle/MiniVersionPage"));

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
                    <Route path="/signup" element={<SignupPage />} />
                    <Route path="/login" element={<LoginPage />} />

                    <Route path="/admin" element={<PrivateRoute />}>
                      <Route path="" element={<Layout />}>
                        {/* Dashboard */}
                        <Route index element={<DashboardPage />} />

                        {/* User management */}
                        <Route path="users" element={<UserPage />} />
                        <Route path="users/new" element={<NewUserPage />} />
                        <Route path="users/edit/:id" element={<EditUserPage />} />

                        {/* Portfolio Management */}
                        <Route path="portfolios" element={<PortfolioListViewPage />} />
                        <Route path="portfolios/view/:id" element={<ViewPortfolioPage />} />
                        <Route path="portfolios/new" element={<NewPortfolioPage />} />
                        <Route path="portfolios/edit/:id" element={<EditPortfolioPage />} />
                      </Route>
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
                    </Route>


                    {/* Portfolios */}
                    <Route
                      path="portfolio"
                      element={
                        <SingleProjectPage03 style={{ "--base-color": "#0038e3" }} />
                      }
                    >
                    </Route>

                    {/* Blogs */}
                    <Route
                      path="blogs"
                      element={<BlogPage style={{ "--base-color": "#0038e3" }} />}
                    >
                    </Route>

                    {/* Model-Popup */}
                    <Route path="model-popup" element={<ModalPopupPage />}>
                      <Route path="simple-modal" element={<SimpleModel />} />
                    </Route>

                    {/* Page-Title */}
                    <Route path="page-title" element={<PageTitle />}>
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
