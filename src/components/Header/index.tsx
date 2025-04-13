"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import ThemeToggler from "./ThemeToggler";
import menuData from "./menuData";
import Head from "next/head";

const Header = () => {
  const pathname = usePathname();

  const [navbarOpen, setNavbarOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const [openIndex, setOpenIndex] = useState(-1);

  const navbarToggleHandler = () => setNavbarOpen(!navbarOpen);
  const handleSubmenu = (index) =>
    setOpenIndex(openIndex === index ? -1 : index);

  useEffect(() => {
    const handleStickyNavbar = () => {
      setSticky(window.scrollY >= 80);
    };

    window.addEventListener("scroll", handleStickyNavbar);
    return () => window.removeEventListener("scroll", handleStickyNavbar);
  }, []);

  return (
    <>
      {/* SEO Meta Tags */}
      <Head>
        <title>Fyrix | Leading Software Development Company</title>
        <meta
          name="description"
          content="Fyrix is a leading software development company based in Coimbatore, offering AI services, web and mobile solutions tailored to your business needs."
        />
        <meta
          name="keywords"
          content="Fyrix Coimbatore, Coimbatore software company, AI services Coimbatore, web development Coimbatore, mobile app development Coimbatore"
        />
        <meta name="author" content="Fyrix Team" />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="Fyrix Coimbatore | Leading Software Company"
        />
        <meta
          property="og:description"
          content="Fyrix is a trusted software company in Coimbatore, providing cutting-edge AI, web, and mobile solutions."
        />
        <meta property="og:image" content="/images/logo/favicon.svg" />
        <meta property="og:url" content="https://www.fyrix.tech/" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_IN" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Fyrix Coimbatore | Software Development Experts"
        />
        <meta
          name="twitter:description"
          content="Fyrix, based in Coimbatore, offers top-notch software development, AI, and digital solutions to elevate your business."
        />
        <meta name="twitter:image" content="/images/logo/favicon.svg" />
      </Head>

      {/* Header */}
      <header
        className={`header left-0 top-0 z-40 flex w-full items-center ${
          sticky
            ? "fixed z-[9999] bg-white !bg-opacity-80 shadow-sticky backdrop-blur-sm transition dark:bg-gray-dark dark:shadow-sticky-dark"
            : "absolute bg-transparent"
        }`}
      >
        <div className="container">
          <div className="relative -mx-4 flex items-center justify-between">
            {/* Logo */}
            <div className="w-60 max-w-full px-4 xl:mr-12">
              <Link
                href="/"
                className={`flex w-10 items-center space-x-2 ${
                  sticky ? "py-5 lg:py-2" : "py-8"
                }`}
              >
                <Image
                  src="/images/logo/favicon.svg"
                  alt="Fyrix Logo"
                  width={70}
                  height={30}
                  className="block dark:hidden"
                />
                <Image
                  src="/images/logo/favicon.svg"
                  alt="Fyrix Logo"
                  width={70}
                  height={30}
                  className="hidden dark:block"
                />
                <span className="ml-1 text-2xl font-bold text-black dark:hidden">
                  Fyrix
                </span>
                <span className="hidden text-2xl font-bold text-white dark:block">
                  Fyrix
                </span>
              </Link>
            </div>

            {/* Menu & CTA */}
            <div className="flex w-full items-center justify-between px-4">
              {/* Mobile Toggle */}
              <div>
                <button
                  onClick={navbarToggleHandler}
                  aria-label="Mobile Menu"
                  className="absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden"
                >
                  <span
                    className={`my-1.5 block h-0.5 w-[30px] bg-black transition-all dark:bg-white ${
                      navbarOpen ? "translate-y-1.5 rotate-45" : ""
                    }`}
                  />
                  <span
                    className={`my-1.5 block h-0.5 w-[30px] bg-black transition-all dark:bg-white ${
                      navbarOpen ? "opacity-0" : ""
                    }`}
                  />
                  <span
                    className={`my-1.5 block h-0.5 w-[30px] bg-black transition-all dark:bg-white ${
                      navbarOpen ? "-translate-y-1.5 -rotate-45" : ""
                    }`}
                  />
                </button>

                {/* Navbar */}
                <nav
                  className={`navbar absolute right-0 z-30 w-[250px] rounded border-[0.5px] border-body-color/50 bg-white px-6 py-4 duration-300 dark:border-body-color/20 dark:bg-dark lg:visible lg:static lg:w-auto lg:border-none lg:bg-transparent lg:p-0 lg:opacity-100 ${
                    navbarOpen
                      ? "top-full visible opacity-100"
                      : "top-[120%] invisible opacity-0"
                  }`}
                >
                  <ul className="block lg:flex lg:space-x-12">
                    {menuData.map((menuItem, index) => (
                      <li key={index} className="group relative">
                        {menuItem.path ? (
                          <Link
                            href={menuItem.path}
                            className={`flex py-2 text-base lg:inline-flex lg:px-0 lg:py-6 ${
                              pathname === menuItem.path
                                ? "text-primary dark:text-white"
                                : "text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
                            }`}
                          >
                            {menuItem.title}
                          </Link>
                        ) : (
                          <>
                            <p
                              onClick={() => handleSubmenu(index)}
                              className="flex cursor-pointer items-center justify-between py-2 text-base text-dark group-hover:text-primary dark:text-white/70 dark:group-hover:text-white lg:inline-flex lg:px-0 lg:py-6"
                            >
                              {menuItem.title}
                              <span className="pl-3">
                                <svg width="25" height="24" viewBox="0 0 25 24">
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M6.29289 8.8427C6.68342 8.45217 7.31658 8.45217 7.70711 8.8427L12 13.1356L16.2929 8.8427C16.6834 8.45217 17.3166 8.45217 17.7071 8.8427C18.0976 9.23322 18.0976 9.86639 17.7071 10.2569L12 15.964L6.29289 10.2569C5.90237 9.86639 5.90237 9.23322 6.29289 8.8427Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </span>
                            </p>
                            <div
                              className={`submenu relative left-0 top-full rounded-sm bg-white dark:bg-dark lg:invisible lg:absolute lg:top-[110%] lg:block lg:w-[250px] lg:p-4 lg:opacity-0 lg:shadow-lg lg:group-hover:visible lg:group-hover:top-full transition-opacity duration-300 ${
                                openIndex === index ? "block" : "hidden"
                              }`}
                            >
                              {menuItem.submenu?.map((submenuItem, subIdx) => (
                                <Link
                                  href={submenuItem.path ?? "#"}
                                  key={subIdx}
                                  className="block rounded py-2.5 text-sm text-dark hover:text-primary dark:text-white/70 dark:hover:text-white lg:px-3"
                                >
                                  {submenuItem.title}
                                </Link>
                              ))}
                            </div>
                          </>
                        )}
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>

              {/* CTA + Theme */}
              <div className="flex items-center justify-end pr-16 lg:pr-0">
                <Link
                  href="/contact"
                  className="hidden rounded-sm bg-primary px-8 py-3 text-base font-medium text-white shadow-btn transition duration-300 hover:bg-opacity-90 hover:shadow-btn-hover md:block md:px-9 lg:px-6 xl:px-9"
                >
                  Get a Quote
                </Link>
                <div className="ml-4">
                  <ThemeToggler />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
