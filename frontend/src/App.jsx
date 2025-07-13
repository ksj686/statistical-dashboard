import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import DustChartPage from "./pages/DustChartPage";
import Pm102023ChartPage from "./pages/Pm102023ChartPage";

function App() {
  return (
    <Router>
      <div className="bg-surface">
        <main>
          <div className="app-topstrip z-40 sticky top-0 py-[15px] px-6 bg-[linear-gradient(90deg,_#0f0533_0%,_#1b0a5c_100%)]">
            <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
              <div className="md:flex hidden items-center gap-5">
                <a href="/">
                  <img
                    src="/assets/images/logos/logo-wrappixel.svg"
                    width="147"
                    alt="logo-wrappixel"
                  />
                </a>
              </div>
              <div className="flex flex-col md:flex-row items-center gap-4 justify-center">
                <h4 className="text-sm font-normal text-white uppercase font-semibold bg-[linear-gradient(90deg,_#FFFFFF_0%,_#8D70F8_100%)] [-webkit-background-clip:text] [background-clip:text] [-webkit-text-fill-color:transparent]">
                  {/* Checkout Pro Version */}
                </h4>
              </div>  
            </div>
          </div>
          {/*start the project*/}
          <div id="main-wrapper" className="flex p-5 xl:pr-0">
            <aside
              id="application-sidebar-brand"
              className="hs-overlay hs-overlay-open:translate-x-0 -translate-x-full  transform hidden xl:block xl:translate-x-0 xl:end-auto xl:bottom-0 fixed xl:top-[90px] xl:left-auto top-0 left-0 with-vertical h-screen z-[999] shrink-0  w-[270px] shadow-md xl:rounded-md rounded-none bg-white left-sidebar   transition-all duration-300"
            >
              <Sidebar />
            </aside>
            <div className="w-full page-wrapper xl:px-6 px-0">
              {/* Main Content */}
              <main className="h-full  max-w-full">
                <div className="container full-container p-0 flex flex-col gap-6">
                  <Routes>
                    <Route path="/dust-chart" element={<DustChartPage />} />
                    <Route path="/pm10-2023-chart" element={<Pm102023ChartPage />} />
                    <Route path="/" element={<DustChartPage />} /> {/* Default route */}
                  </Routes>
                  <footer>
                    <p className="text-base text-gray-400 font-normal p-3 text-center">
                      Design and Developed by{" "}
                      <a
                        href="https://www.wrappixel.com/"
                        className="text-blue-600 underline hover:text-blue-700"
                      >
                        wrappixel.com
                      </a>
                      . Distributed by{" "}
                      <a
                        href="https://themewagon.com"
                        className="text-blue-600 underline hover:text-blue-700"
                        target="_blank"
                      >
                        ThemeWagon
                      </a>
                    </p>
                  </footer>
                </div>
              </main>
              {/* Main Content End */}
            </div>
          </div>
          {/*end of project*/}
        </main>
      </div>
    </Router>
  );
}

export default App;
