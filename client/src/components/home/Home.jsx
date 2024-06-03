import { useState } from "react";
import logo from "../../assets/images/elioralogo.png";
import { NavLink, useNavigate } from "react-router-dom";
import Dashboard from "../dashboard/Dashboard";
import Profile from "../profile/Profile";
import Forms from "../forms/Forms";
import Invoice from "../invoice/Invoice";
import Trash from "../trash/Trash";
import CustomerRecords from "../customer records/CustomerRecords";

const Home = () => {
  
  const [isAuthDropdownOpen, setIsAuthDropdownOpen] = useState(false);
  const [isProfileDropDownOpen, setProfileDropdownOpen] = useState(false);
  const [activePage, setActivePage] = useState("admin");
  const [sidebarOpen, setSideBarOpen] = useState(false);
  

  const handleSidebarToggle = () => {

        setSideBarOpen(false);
  };  

  const toggleAuthDropdown = () => {
    setIsAuthDropdownOpen(!isAuthDropdownOpen);
  };

  const toggleProfileDropdown = () => {
    setProfileDropdownOpen(!isProfileDropDownOpen);
  };

  const handlePageChange = (page) => {
    setActivePage(page);
  };

  const handleSideBar = () => {

    setSideBarOpen(!sidebarOpen);

  }

  return (
    <div className="flex h-screen overflow-hidden">
      <aside className={`absolute left-0 top-0 z-9999 flex h-screen w-72.5 flex-col overflow-y-hidden bg-dark duration-300 ease-linear dark:bg-boxdark lg:static lg:translate-x-0 ${sidebarOpen ? "translate-x-0": "-translate-x-full"}`}>
        <div className="flex items-center justify-between gap-2 px-6 py-5.5 lg:py-6.5">
          <a href="/">
            <img src={logo} alt="Logo" style={{ width: "200px" }} />
          </a>
          <button
            aria-controls="sidebar"
            onClick={handleSidebarToggle}
            className="block lg:hidden"
          >
            <svg
              className="fill-current"
              width="20"
              height="18"
              viewBox="0 0 20 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 8.175H2.98748L9.36248 1.6875C9.69998 1.35 9.69998 0.825 9.36248 0.4875C9.02498 0.15 8.49998 0.15 8.16248 0.4875L0.399976 8.3625C0.0624756 8.7 0.0624756 9.225 0.399976 9.5625L8.16248 17.4375C8.31248 17.5875 8.53748 17.7 8.76248 17.7C8.98748 17.7 9.17498 17.625 9.36248 17.475C9.69998 17.1375 9.69998 16.6125 9.36248 16.275L3.02498 9.8625H19C19.45 9.8625 19.825 9.4875 19.825 9.0375C19.825 8.55 19.45 8.175 19 8.175Z"
                fill=""
              />
            </svg>
          </button>
        </div>
        <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
          <nav className="mt-2 py-4 px-4 lg:mt-9 lg:px-6">
            <div>
              <h3 className="mb-4 ml-4 text-sm font-semibold text-bodydark2">
                MENU
              </h3>
              <ul className="mb-6 flex flex-col gap-1.5">
                <li>
                  <NavLink
                    style={{ textDecoration: "none" }}
                    aria-current="page"
                    className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark  dark:hover:bg-meta-4 ${
                      activePage === "admin" ? "active bg-graydark" : "false"
                    }`}
                    onClick={() => handlePageChange("admin")}
                  >
                    <svg
                      className="fill-current"
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.10322 0.956299H2.53135C1.5751 0.956299 0.787598 1.7438 0.787598 2.70005V6.27192C0.787598 7.22817 1.5751 8.01567 2.53135 8.01567H6.10322C7.05947 8.01567 7.84697 7.22817 7.84697 6.27192V2.72817C7.8751 1.7438 7.0876 0.956299 6.10322 0.956299ZM6.60947 6.30005C6.60947 6.5813 6.38447 6.8063 6.10322 6.8063H2.53135C2.2501 6.8063 2.0251 6.5813 2.0251 6.30005V2.72817C2.0251 2.44692 2.2501 2.22192 2.53135 2.22192H6.10322C6.38447 2.22192 6.60947 2.44692 6.60947 2.72817V6.30005Z"
                        fill=""
                      ></path>
                      <path
                        d="M15.4689 0.956299H11.8971C10.9408 0.956299 10.1533 1.7438 10.1533 2.70005V6.27192C10.1533 7.22817 10.9408 8.01567 11.8971 8.01567H15.4689C16.4252 8.01567 17.2127 7.22817 17.2127 6.27192V2.72817C17.2127 1.7438 16.4252 0.956299 15.4689 0.956299ZM15.9752 6.30005C15.9752 6.5813 15.7502 6.8063 15.4689 6.8063H11.8971C11.6158 6.8063 11.3908 6.5813 11.3908 6.30005V2.72817C11.3908 2.44692 11.6158 2.22192 11.8971 2.22192H15.4689C15.7502 2.22192 15.9752 2.44692 15.9752 2.72817V6.30005Z"
                        fill=""
                      ></path>
                      <path
                        d="M6.10322 9.92822H2.53135C1.5751 9.92822 0.787598 10.7157 0.787598 11.672V15.2438C0.787598 16.2001 1.5751 16.9876 2.53135 16.9876H6.10322C7.05947 16.9876 7.84697 16.2001 7.84697 15.2438V11.7001C7.8751 10.7157 7.0876 9.92822 6.10322 9.92822ZM6.60947 15.272C6.60947 15.5532 6.38447 15.7782 6.10322 15.7782H2.53135C2.2501 15.7782 2.0251 15.5532 2.0251 15.272V11.7001C2.0251 11.4188 2.2501 11.1938 2.53135 11.1938H6.10322C6.38447 11.1938 6.60947 11.4188 6.60947 11.7001V15.272Z"
                        fill=""
                      ></path>
                      <path
                        d="M15.4689 9.92822H11.8971C10.9408 9.92822 10.1533 10.7157 10.1533 11.672V15.2438C10.1533 16.2001 10.9408 16.9876 11.8971 16.9876H15.4689C16.4252 16.9876 17.2127 16.2001 17.2127 15.2438V11.7001C17.2127 10.7157 16.4252 9.92822 15.4689 9.92822ZM15.9752 15.272C15.9752 15.5532 15.7502 15.7782 15.4689 15.7782H11.8971C11.6158 15.7782 11.3908 15.5532 11.3908 15.272V11.7001C11.3908 11.4188 11.6158 11.1938 11.8971 11.1938H15.4689C15.7502 11.1938 15.9752 11.4188 15.9752 11.7001V15.272Z"
                        fill=""
                      ></path>
                    </svg>
                    Dashboard
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    style={{ textDecoration: "none" }}
                    className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                      activePage === "profiles" ? "active bg-graydark" : "false"
                    }`}
                    onClick={() => handlePageChange("profiles")}
                  >
                    <svg
                      className="fill-current"
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.0002 7.79065C11.0814 7.79065 12.7689 6.1594 12.7689 4.1344C12.7689 2.1094 11.0814 0.478149 9.0002 0.478149C6.91895 0.478149 5.23145 2.1094 5.23145 4.1344C5.23145 6.1594 6.91895 7.79065 9.0002 7.79065ZM9.0002 1.7719C10.3783 1.7719 11.5033 2.84065 11.5033 4.16252C11.5033 5.4844 10.3783 6.55315 9.0002 6.55315C7.62207 6.55315 6.49707 5.4844 6.49707 4.16252C6.49707 2.84065 7.62207 1.7719 9.0002 1.7719Z"
                        fill=""
                      ></path>
                      <path
                        d="M10.8283 9.05627H7.17207C4.16269 9.05627 1.71582 11.5313 1.71582 14.5406V16.875C1.71582 17.2125 1.99707 17.5219 2.3627 17.5219C2.72832 17.5219 3.00957 17.2407 3.00957 16.875V14.5406C3.00957 12.2344 4.89394 10.3219 7.22832 10.3219H10.8564C13.1627 10.3219 15.0752 12.2063 15.0752 14.5406V16.875C15.0752 17.2125 15.3564 17.5219 15.7221 17.5219C16.0877 17.5219 16.3689 17.2407 16.3689 16.875V14.5406C16.2846 11.5313 13.8377 9.05627 10.8283 9.05627Z"
                        fill=""
                      ></path>
                    </svg>
                    Profile
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    style={{ textDecoration: "none" }}
                    aria-current="page"
                    className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                      activePage === "forms" ? "active bg-graydark" : "false"
                    }`}
                    onClick={() => handlePageChange("forms")}
                  >
                    <svg
                      className="fill-current"
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.43425 7.5093H2.278C2.44675 7.5093 2.55925 7.3968 2.58737 7.31243L2.98112 6.32805H5.90612L6.27175 7.31243C6.328 7.48118 6.46862 7.5093 6.58112 7.5093H7.453C7.76237 7.48118 7.87487 7.25618 7.76237 7.03118L5.428 1.4343C5.37175 1.26555 5.3155 1.23743 5.14675 1.23743H3.88112C3.76862 1.23743 3.59987 1.29368 3.57175 1.4343L1.153 7.08743C1.0405 7.2843 1.20925 7.5093 1.43425 7.5093ZM4.47175 2.98118L5.3155 5.17493H3.59987L4.47175 2.98118Z"
                        fill=""
                      ></path>
                      <path
                        d="M10.1249 2.5031H16.8749C17.2124 2.5031 17.5218 2.22185 17.5218 1.85623C17.5218 1.4906 17.2405 1.20935 16.8749 1.20935H10.1249C9.7874 1.20935 9.47803 1.4906 9.47803 1.85623C9.47803 2.22185 9.75928 2.5031 10.1249 2.5031Z"
                        fill=""
                      ></path>
                      <path
                        d="M16.8749 6.21558H10.1249C9.7874 6.21558 9.47803 6.49683 9.47803 6.86245C9.47803 7.22808 9.75928 7.50933 10.1249 7.50933H16.8749C17.2124 7.50933 17.5218 7.22808 17.5218 6.86245C17.5218 6.49683 17.2124 6.21558 16.8749 6.21558Z"
                        fill=""
                      ></path>
                      <path
                        d="M16.875 11.1656H1.77187C1.43438 11.1656 1.125 11.4469 1.125 11.8125C1.125 12.1781 1.40625 12.4594 1.77187 12.4594H16.875C17.2125 12.4594 17.5219 12.1781 17.5219 11.8125C17.5219 11.4469 17.2125 11.1656 16.875 11.1656Z"
                        fill=""
                      ></path>
                      <path
                        d="M16.875 16.1156H1.77187C1.43438 16.1156 1.125 16.3969 1.125 16.7625C1.125 17.1281 1.40625 17.4094 1.77187 17.4094H16.875C17.2125 17.4094 17.5219 17.1281 17.5219 16.7625C17.5219 16.3969 17.2125 16.1156 16.875 16.1156Z"
                        fill="white"
                      ></path>
                    </svg>
                    Registration
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    style={{ textDecoration: "none" }}
                    aria-current="page"
                    className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                      activePage === "todo" ? "active bg-graydark" : "false"
                    }`}
                    onClick={() => handlePageChange("todo")}
                  >
                    <svg
                      className="fill-current"
                      width="18"
                      height="19"
                      viewBox="0 0 18 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_130_9756)">
                        <path
                          d="M15.7501 0.55835H2.2501C1.29385 0.55835 0.506348 1.34585 0.506348 2.3021V15.8021C0.506348 16.7584 1.29385 17.574 2.27822 17.574H15.7782C16.7345 17.574 17.5501 16.7865 17.5501 15.8021V2.3021C17.522 1.34585 16.7063 0.55835 15.7501 0.55835ZM6.69385 10.599V6.4646H11.3063V10.5709H6.69385V10.599ZM11.3063 11.8646V16.3083H6.69385V11.8646H11.3063ZM1.77197 6.4646H5.45635V10.5709H1.77197V6.4646ZM12.572 6.4646H16.2563V10.5709H12.572V6.4646ZM2.2501 1.82397H15.7501C16.0313 1.82397 16.2563 2.04897 16.2563 2.33022V5.2271H1.77197V2.3021C1.77197 2.02085 1.96885 1.82397 2.2501 1.82397ZM1.77197 15.8021V11.8646H5.45635V16.3083H2.2501C1.96885 16.3083 1.77197 16.0834 1.77197 15.8021ZM15.7501 16.3083H12.572V11.8646H16.2563V15.8021C16.2563 16.0834 16.0313 16.3083 15.7501 16.3083Z"
                          fill=""
                        ></path>
                      </g>
                      <defs>
                        <clipPath id="clip0_130_9756">
                          <rect
                            width="18"
                            height="18"
                            fill="white"
                            transform="translate(0 0.052124)"
                          ></rect>
                        </clipPath>
                      </defs>
                    </svg>
                    Customer Records
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    style={{ textDecoration: "none" }}
                    className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                      activePage === "trash" ? "active bg-graydark" : "false"
                    }`}
                    onClick={() => handlePageChange("trash")}
                  >
                    <svg
                      className="fill-current"
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.753 2.47499H11.5874V1.99687C11.5874 1.15312 10.9124 0.478119 10.0687 0.478119H7.90303C7.05928 0.478119 6.38428 1.15312 6.38428 1.99687V2.47499H4.21865C3.40303 2.47499 2.72803 3.14999 2.72803 3.96562V4.80937C2.72803 5.42812 3.09365 5.93437 3.62803 6.15937L4.07803 15.8906C4.13428 16.8187 4.86553 17.5219 5.79365 17.5219H12.1218C13.0499 17.5219 13.8093 16.7906 13.8374 15.8906L14.3437 6.13124C14.878 5.90624 15.2437 5.37187 15.2437 4.78124V3.93749C15.2437 3.14999 14.5687 2.47499 13.753 2.47499ZM7.67803 1.99687C7.67803 1.85624 7.79053 1.74374 7.93115 1.74374H10.0968C10.2374 1.74374 10.3499 1.85624 10.3499 1.99687V2.47499H7.70615V1.99687H7.67803ZM4.02178 3.96562C4.02178 3.85312 4.10615 3.74062 4.24678 3.74062H13.753C13.8655 3.74062 13.978 3.82499 13.978 3.96562V4.80937C13.978 4.92187 13.8937 5.03437 13.753 5.03437H4.24678C4.13428 5.03437 4.02178 4.94999 4.02178 4.80937V3.96562ZM12.1499 16.2562H5.8499C5.59678 16.2562 5.3999 16.0594 5.3999 15.8344L4.9499 6.29999H13.078L12.628 15.8344C12.5999 16.0594 12.403 16.2562 12.1499 16.2562Z"
                        fill=""
                      ></path>
                      <path
                        d="M8.9999 8.74686C8.6624 8.74686 8.35303 9.02811 8.35303 9.39373V13.7531C8.35303 14.0906 8.63428 14.4 8.9999 14.4C9.3374 14.4 9.64678 14.1187 9.64678 13.7531V9.36561C9.64678 9.02811 9.3374 8.74686 8.9999 8.74686Z"
                        fill=""
                      ></path>
                      <path
                        d="M11.6157 9.28124C11.2782 9.25311 10.9688 9.53436 10.9407 9.87186L10.772 13.1062C10.7438 13.4437 11.0251 13.7531 11.3626 13.7812H11.3907C11.7282 13.7812 12.0095 13.5281 12.0095 13.1906L12.1782 9.95624C12.2345 9.59061 11.9532 9.30936 11.6157 9.28124Z"
                        fill=""
                      ></path>
                      <path
                        d="M6.35624 9.28124C6.01874 9.30936 5.73749 9.59061 5.76561 9.95624L5.96249 13.2187C5.99061 13.5562 6.27186 13.8094 6.58124 13.8094H6.60936C6.94686 13.7812 7.22811 13.5 7.19999 13.1344L7.03124 9.87186C7.00311 9.53436 6.69374 9.25311 6.35624 9.28124Z"
                        fill=""
                      ></path>
                    </svg>
                    Trash
                  </NavLink>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-4 ml-4 text-sm font-semibold text-bodydark2">
                SUPPORT
              </h3>
              <ul className="mb-6 flex flex-col gap-1.5">
                <li>
                  <NavLink
                    style={{ textDecoration: "none" }}
                    className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                      activePage === "invoice" ? "active bg-graydark" : "false"
                    }`}
                    onClick={() => handlePageChange("invoice")}
                  >
                    <svg
                      className="fill-current"
                      width="18"
                      height="19"
                      viewBox="0 0 18 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_130_9787)">
                        <path
                          d="M15.8343 2.49902C15.8343 1.43027 14.9624 0.530273 13.8655 0.530273H4.13428C3.06553 0.530273 2.16553 1.40215 2.16553 2.49902V16.6178C2.16553 16.8428 2.30615 17.0678 2.50303 17.1803C2.6999 17.2928 2.95303 17.2646 3.1499 17.1521L4.55615 16.224L6.44053 17.4615C6.66553 17.6021 6.91865 17.6021 7.14365 17.4615L8.9999 16.224L10.8562 17.4615C10.9687 17.5459 11.0812 17.574 11.1937 17.574C11.3062 17.574 11.4468 17.5459 11.5312 17.4615L13.3874 16.224L14.7937 17.1803C14.9905 17.3209 15.2437 17.3209 15.4405 17.2084C15.6374 17.0959 15.778 16.8709 15.778 16.6459L15.8343 2.49902ZM14.0343 15.099C13.6687 14.8459 13.1905 14.8459 12.8249 15.099L11.2218 16.1678L9.61865 15.099C9.42178 14.9865 9.2249 14.9021 8.9999 14.9021C8.80303 14.9021 8.57803 14.9584 8.40928 15.099L6.80615 16.1678L5.20303 15.099C4.8374 14.8459 4.35928 14.8459 3.99365 15.099L3.45928 15.4365V2.49902C3.45928 2.10527 3.76865 1.7959 4.1624 1.7959H13.9218C14.3155 1.7959 14.6249 2.10527 14.6249 2.49902V15.4365L14.0343 15.099Z"
                          fill=""
                        ></path>
                        <path
                          d="M7.93106 3.79272H5.5123C5.1748 3.79272 4.89355 4.07397 4.89355 4.41147C4.89355 4.74897 5.1748 5.03022 5.5123 5.03022H7.93106C8.26856 5.03022 8.54981 4.74897 8.54981 4.41147C8.54981 4.07397 8.26856 3.79272 7.93106 3.79272Z"
                          fill=""
                        ></path>
                        <path
                          d="M12.347 3.79272H11.672C11.3345 3.79272 11.0532 4.07397 11.0532 4.41147C11.0532 4.74897 11.3345 5.03022 11.672 5.03022H12.347C12.6845 5.03022 12.9657 4.74897 12.9657 4.41147C12.9657 4.07397 12.6845 3.79272 12.347 3.79272Z"
                          fill=""
                        ></path>
                        <path
                          d="M5.5123 8.74275H7.05918C7.39668 8.74275 7.67793 8.4615 7.67793 8.124C7.67793 7.7865 7.39668 7.50525 7.05918 7.50525H5.5123C5.1748 7.50525 4.89355 7.7865 4.89355 8.124C4.89355 8.4615 5.14668 8.74275 5.5123 8.74275Z"
                          fill=""
                        ></path>
                        <path
                          d="M12.347 7.47717H11.672C11.3345 7.47717 11.0532 7.75842 11.0532 8.09592C11.0532 8.43342 11.3345 8.71467 11.672 8.71467H12.347C12.6845 8.71467 12.9657 8.43342 12.9657 8.09592C12.9657 7.75842 12.6845 7.47717 12.347 7.47717Z"
                          fill=""
                        ></path>
                        <path
                          d="M7.93106 11.1334H5.5123C5.1748 11.1334 4.89355 11.4147 4.89355 11.7522C4.89355 12.0897 5.1748 12.3709 5.5123 12.3709H7.93106C8.26856 12.3709 8.54981 12.0897 8.54981 11.7522C8.54981 11.4147 8.26856 11.1334 7.93106 11.1334Z"
                          fill=""
                        ></path>
                        <path
                          d="M12.347 11.1334H11.672C11.3345 11.1334 11.0532 11.4147 11.0532 11.7522C11.0532 12.0897 11.3345 12.3709 11.672 12.3709H12.347C12.6845 12.3709 12.9657 12.0897 12.9657 11.7522C12.9657 11.4147 12.6845 11.1334 12.347 11.1334Z"
                          fill=""
                        ></path>
                      </g>
                      <defs>
                        <clipPath id="clip0_130_9787">
                          <rect
                            width="18"
                            height="18"
                            fill="white"
                            transform="translate(0 0.052124)"
                          ></rect>
                        </clipPath>
                      </defs>
                    </svg>
                    Invoice
                  </NavLink>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-4 ml-4 text-sm font-semibold text-bodydark2">
                OTHERS
              </h3>
              <ul className="mb-6 flex flex-col gap-1.5">
                <li>
                  <a
                    aria-current="page"
                    className="group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 false active"
                    // href="/calendar"
                    onClick={toggleAuthDropdown}
                  >
                    <svg
                      className="fill-current"
                      width="18"
                      height="19"
                      viewBox="0 0 18 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_130_9814)">
                        <path
                          d="M12.7127 0.55835H9.53457C8.80332 0.55835 8.18457 1.1771 8.18457 1.90835V3.84897C8.18457 4.18647 8.46582 4.46772 8.80332 4.46772C9.14082 4.46772 9.45019 4.18647 9.45019 3.84897V1.88022C9.45019 1.82397 9.47832 1.79585 9.53457 1.79585H12.7127C13.3877 1.79585 13.9221 2.33022 13.9221 3.00522V15.0709C13.9221 15.7459 13.3877 16.2802 12.7127 16.2802H9.53457C9.47832 16.2802 9.45019 16.2521 9.45019 16.1959V14.2552C9.45019 13.9177 9.16894 13.6365 8.80332 13.6365C8.43769 13.6365 8.18457 13.9177 8.18457 14.2552V16.1959C8.18457 16.9271 8.80332 17.5459 9.53457 17.5459H12.7127C14.0908 17.5459 15.1877 16.4209 15.1877 15.0709V3.03335C15.1877 1.65522 14.0627 0.55835 12.7127 0.55835Z"
                          fill=""
                        ></path>
                        <path
                          d="M10.4346 8.60205L7.62207 5.7333C7.36895 5.48018 6.97519 5.48018 6.72207 5.7333C6.46895 5.98643 6.46895 6.38018 6.72207 6.6333L8.46582 8.40518H3.45957C3.12207 8.40518 2.84082 8.68643 2.84082 9.02393C2.84082 9.36143 3.12207 9.64268 3.45957 9.64268H8.49395L6.72207 11.4427C6.46895 11.6958 6.46895 12.0896 6.72207 12.3427C6.83457 12.4552 7.00332 12.5114 7.17207 12.5114C7.34082 12.5114 7.50957 12.4552 7.62207 12.3145L10.4346 9.4458C10.6877 9.24893 10.6877 8.85518 10.4346 8.60205Z"
                          fill=""
                        ></path>
                      </g>
                      <defs>
                        <clipPath id="clip0_130_9814">
                          <rect
                            width="18"
                            height="18"
                            fill="white"
                            transform="translate(0 0.052124)"
                          ></rect>
                        </clipPath>
                      </defs>
                    </svg>
                    Authentication
                    <svg
                      className={`absolute right-4 top-1/2 -translate-y-1/2 fill-current ${
                        isAuthDropdownOpen ? "rotate-180" : ""
                      }`}
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M4.41107 6.9107C4.73651 6.58527 5.26414 6.58527 5.58958 6.9107L10.0003 11.3214L14.4111 6.91071C14.7365 6.58527 15.2641 6.58527 15.5896 6.91071C15.915 7.23614 15.915 7.76378 15.5896 8.08922L10.5896 13.0892C10.2641 13.4147 9.73651 13.4147 9.41107 13.0892L4.41107 8.08922C4.08563 7.76378 4.08563 7.23614 4.41107 6.9107Z"
                        fill=""
                      ></path>
                    </svg>
                  </a>
                  <div
                    className={`translate transform overflow-hidden ${
                      isAuthDropdownOpen ? "block" : "hidden"
                    }`}
                  >
                    <ul className="mt-4 mb-5.5 flex flex-col gap-2.5 pl-6">
                      <li>
                        <NavLink
                          style={{textDecoration:"none"}}
                          className="group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white false"
                          to="/auth/signin"
                        >
                          Sign In
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          style={{textDecoration:"none"}}
                          className="group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white false"
                          to="/auth/signup"
                        >
                          Sign Up
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          style={{textDecoration:"none"}}
                          className="group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white false"
                          to="/auth/reset-password"
                        >
                          Reset Password
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </aside>

      <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
        <header className="sticky top-0 z-999 flex w-full bg-white drop-shadow-1 dark:bg-boxdark dark:drop-shadow-none">
          <div className="flex flex-grow items-center justify-between px-4 py-4 shadow-2 md:px-6 2xl:px-11">
            <div className="flex items-center gap-2 sm:gap-4 lg:hidden">
              <button
                aria-controls="sidebar"
                onClick={handleSideBar}
                className="z-99999 block rounded-sm border border-stroke bg-white p-1.5 shadow-sm dark:border-strokedark dark:bg-boxdark lg:hidden"
              >
                <span className="relative block h-5.5 w-5.5 cursor-pointer">
                  <span className="du-block absolute right-0 h-full w-full">
                    <span className="relative left-0 top-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-[0] duration-200 ease-in-out dark:bg-white !w-full delay-300"></span>
                    <span className="relative left-0 top-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-150 duration-200 ease-in-out dark:bg-white delay-400 !w-full"></span>
                    <span className="relative left-0 top-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-200 duration-200 ease-in-out dark:bg-white !w-full delay-500"></span>
                  </span>
                  <span className="absolute right-0 h-full w-full rotate-45">
                    <span className="absolute left-2.5 top-0 block h-full w-0.5 rounded-sm bg-black delay-300 duration-200 ease-in-out dark:bg-white !h-0 !delay-[0]"></span>
                    <span className="delay-400 absolute left-0 top-2.5 block h-0.5 w-full rounded-sm bg-black duration-200 ease-in-out dark:bg-white !h-0 !delay-200"></span>
                  </span>
                </span>
              </button>
              <a className="block flex-shrink-0 lg:hidden" href="/"></a>
            </div>

            <div className="hidden sm:block">
              <form
                action="https://formbold.com/s/unique_form_id"
                method="POST"
              >
                <div className="relative">
                  <button className="absolute left-0 top-1/2 -translate-y-1/2">
                    <svg
                      className="fill-body hover:fill-primary dark:fill-bodydark dark:hover:fill-primary"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M9.16666 3.33332C5.945 3.33332 3.33332 5.945 3.33332 9.16666C3.33332 12.3883 5.945 15 9.16666 15C12.3883 15 15 12.3883 15 9.16666C15 5.945 12.3883 3.33332 9.16666 3.33332ZM1.66666 9.16666C1.66666 5.02452 5.02452 1.66666 9.16666 1.66666C13.3088 1.66666 16.6667 5.02452 16.6667 9.16666C16.6667 13.3088 13.3088 16.6667 9.16666 16.6667C5.02452 16.6667 1.66666 13.3088 1.66666 9.16666Z"
                        fill=""
                      ></path>
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M13.2857 13.2857C13.6112 12.9603 14.1388 12.9603 14.4642 13.2857L18.0892 16.9107C18.4147 17.2362 18.4147 17.7638 18.0892 18.0892C17.7638 18.4147 17.2362 18.4147 16.9107 18.0892L13.2857 14.4642C12.9603 14.1388 12.9603 13.6112 13.2857 13.2857Z"
                        fill=""
                      ></path>
                    </svg>
                  </button>
                  <input
                    type="text"
                    placeholder="Type to search..."
                    className="w-full bg-transparent pl-9 pr-4 text-black focus:outline-none dark:text-white xl:w-125"
                  />
                </div>
              </form>
            </div>
            <div className="flex items-center gap-3 2xsm:gap-7">
              <div className="relative">
                <a
                  className="flex items-center gap-4"
                  onClick={toggleProfileDropdown}
                >
                  <span className="hidden text-right lg:block">
                    <span className="block text-sm font-medium text-black dark:text-white">
                      Akash Gebad
                    </span>
                    <span className="block text-xs">Developer</span>
                    <span></span>
                  </span>
                  <span className="h-12 w-12 rounded-full">
                    <img src="/assets/user-01-b007ff3f.png" alt="User"></img>
                  </span>
                  <svg
                    className="hidden fill-current sm:block"
                    width="12"
                    height="8"
                    viewBox="0 0 12 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0.410765 0.910734C0.736202 0.585297 1.26384 0.585297 1.58928 0.910734L6.00002 5.32148L10.4108 0.910734C10.7362 0.585297 11.2638 0.585297 11.5893 0.910734C11.9147 1.23617 11.9147 1.76381 11.5893 2.08924L6.58928 7.08924C6.26384 7.41468 5.7362 7.41468 5.41077 7.08924L0.410765 2.08924C0.0853277 1.76381 0.0853277 1.23617 0.410765 0.910734Z"
                      fill=""
                    ></path>
                  </svg>
                </a>

                <div
                  className={`absolute right-0 mt-4 flex w-62.5 flex-col rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark ${
                    isProfileDropDownOpen ? "block" : "hidden"
                  }`}
                >
                  <ul className="flex flex-col gap-3 border-b border-stroke px-6 py-7.5 dark:border-strokedark">
                    <li>
                      <NavLink
                      style={{textDecoration:"none"}}
                        className="flex items-center gap-3.5 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base"
                        to="/profile"
                      >
                        <svg
                          className="fill-current"
                          width="22"
                          height="22"
                          viewBox="0 0 22 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M11 9.62499C8.42188 9.62499 6.35938 7.59687 6.35938 5.12187C6.35938 2.64687 8.42188 0.618744 11 0.618744C13.5781 0.618744 15.6406 2.64687 15.6406 5.12187C15.6406 7.59687 13.5781 9.62499 11 9.62499ZM11 2.16562C9.28125 2.16562 7.90625 3.50624 7.90625 5.12187C7.90625 6.73749 9.28125 8.07812 11 8.07812C12.7188 8.07812 14.0938 6.73749 14.0938 5.12187C14.0938 3.50624 12.7188 2.16562 11 2.16562Z"
                            fill=""
                          ></path>
                          <path
                            d="M17.7719 21.4156H4.2281C3.5406 21.4156 2.9906 20.8656 2.9906 20.1781V17.0844C2.9906 13.7156 5.7406 10.9656 9.10935 10.9656H12.925C16.2937 10.9656 19.0437 13.7156 19.0437 17.0844V20.1781C19.0094 20.8312 18.4594 21.4156 17.7719 21.4156ZM4.53748 19.8687H17.4969V17.0844C17.4969 14.575 15.4344 12.5125 12.925 12.5125H9.07498C6.5656 12.5125 4.5031 14.575 4.5031 17.0844V19.8687H4.53748Z"
                            fill=""
                          ></path>
                        </svg>
                        My Profile
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        style={{textDecoration:"none"}}
                        className="flex items-center gap-3.5 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base"
                        to="/messages"
                      >
                        <svg
                          className="fill-current"
                          width="22"
                          height="22"
                          viewBox="0 0 22 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M20.8656 8.86874C20.5219 8.49062 20.0406 8.28437 19.525 8.28437H19.4219C19.25 8.28437 19.1125 8.18124 19.0781 8.04374C19.0437 7.90624 18.975 7.80312 18.9406 7.66562C18.8719 7.52812 18.9406 7.39062 19.0437 7.28749L19.1125 7.21874C19.4906 6.87499 19.6969 6.39374 19.6969 5.87812C19.6969 5.36249 19.525 4.88124 19.1469 4.50312L17.8062 3.12812C17.0844 2.37187 15.8469 2.33749 15.0906 3.09374L14.9875 3.16249C14.8844 3.26562 14.7125 3.29999 14.5406 3.23124C14.4031 3.16249 14.2656 3.09374 14.0937 3.05937C13.9219 2.99062 13.8187 2.85312 13.8187 2.71562V2.54374C13.8187 1.47812 12.9594 0.618744 11.8937 0.618744H9.96875C9.45312 0.618744 8.97187 0.824994 8.62812 1.16874C8.25 1.54687 8.07812 2.02812 8.07812 2.50937V2.64687C8.07812 2.78437 7.975 2.92187 7.8375 2.99062C7.76875 3.02499 7.73437 3.02499 7.66562 3.05937C7.52812 3.12812 7.35625 3.09374 7.25312 2.99062L7.18437 2.88749C6.84062 2.50937 6.35937 2.30312 5.84375 2.30312C5.32812 2.30312 4.84687 2.47499 4.46875 2.85312L3.09375 4.19374C2.3375 4.91562 2.30312 6.15312 3.05937 6.90937L3.12812 7.01249C3.23125 7.11562 3.26562 7.28749 3.19687 7.39062C3.12812 7.52812 3.09375 7.63124 3.025 7.76874C2.95625 7.90624 2.85312 7.97499 2.68125 7.97499H2.57812C2.0625 7.97499 1.58125 8.14687 1.20312 8.52499C0.824996 8.86874 0.618746 9.34999 0.618746 9.86562L0.584371 11.7906C0.549996 12.8562 1.40937 13.7156 2.475 13.75H2.57812C2.75 13.75 2.8875 13.8531 2.92187 13.9906C2.99062 14.0937 3.05937 14.1969 3.09375 14.3344C3.12812 14.4719 3.09375 14.6094 2.99062 14.7125L2.92187 14.7812C2.54375 15.125 2.3375 15.6062 2.3375 16.1219C2.3375 16.6375 2.50937 17.1187 2.8875 17.4969L4.22812 18.8719C4.95 19.6281 6.1875 19.6625 6.94375 18.9062L7.04687 18.8375C7.15 18.7344 7.32187 18.7 7.49375 18.7687C7.63125 18.8375 7.76875 18.9062 7.94062 18.9406C8.1125 19.0094 8.21562 19.1469 8.21562 19.2844V19.4219C8.21562 20.4875 9.075 21.3469 10.1406 21.3469H12.0656C13.1312 21.3469 13.9906 20.4875 13.9906 19.4219V19.2844C13.9906 19.1469 14.0937 19.0094 14.2312 18.9406C14.3 18.9062 14.3344 18.9062 14.4031 18.8719C14.575 18.8031 14.7125 18.8375 14.8156 18.9406L14.8844 19.0437C15.2281 19.4219 15.7094 19.6281 16.225 19.6281C16.7406 19.6281 17.2219 19.4562 17.6 19.0781L18.975 17.7375C19.7312 17.0156 19.7656 15.7781 19.0094 15.0219L18.9406 14.9187C18.8375 14.8156 18.8031 14.6437 18.8719 14.5406C18.9406 14.4031 18.975 14.3 19.0437 14.1625C19.1125 14.025 19.25 13.9562 19.3875 13.9562H19.4906H19.525C20.5562 13.9562 21.4156 13.1312 21.45 12.0656L21.4844 10.1406C21.4156 9.72812 21.2094 9.21249 20.8656 8.86874ZM19.8344 12.1C19.8344 12.3062 19.6625 12.4781 19.4562 12.4781H19.3531H19.3187C18.5281 12.4781 17.8062 12.9594 17.5312 13.6469C17.4969 13.75 17.4281 13.8531 17.3937 13.9562C17.0844 14.6437 17.2219 15.5031 17.7719 16.0531L17.8406 16.1562C17.9781 16.2937 17.9781 16.5344 17.8406 16.6719L16.4656 18.0125C16.3625 18.1156 16.2594 18.1156 16.1906 18.1156C16.1219 18.1156 16.0187 18.1156 15.9156 18.0125L15.8469 17.9094C15.2969 17.325 14.4719 17.1531 13.7156 17.4969L13.5781 17.5656C12.8219 17.875 12.3406 18.5625 12.3406 19.3531V19.4906C12.3406 19.6969 12.1687 19.8687 11.9625 19.8687H10.0375C9.83125 19.8687 9.65937 19.6969 9.65937 19.4906V19.3531C9.65937 18.5625 9.17812 17.8406 8.42187 17.5656C8.31875 17.5312 8.18125 17.4625 8.07812 17.4281C7.80312 17.2906 7.52812 17.2562 7.25312 17.2562C6.77187 17.2562 6.29062 17.4281 5.9125 17.8062L5.84375 17.8406C5.70625 17.9781 5.46562 17.9781 5.32812 17.8406L3.9875 16.4656C3.88437 16.3625 3.88437 16.2594 3.88437 16.1906C3.88437 16.1219 3.88437 16.0187 3.9875 15.9156L4.05625 15.8469C4.64062 15.2969 4.8125 14.4375 4.50312 13.75C4.46875 13.6469 4.43437 13.5437 4.36562 13.4406C4.09062 12.7187 3.40312 12.2031 2.6125 12.2031H2.50937C2.30312 12.2031 2.13125 12.0312 2.13125 11.825L2.16562 9.89999C2.16562 9.76249 2.23437 9.69374 2.26875 9.62499C2.30312 9.59062 2.40625 9.52187 2.54375 9.52187H2.64687C3.4375 9.55624 4.15937 9.07499 4.46875 8.35312C4.50312 8.24999 4.57187 8.14687 4.60625 8.04374C4.91562 7.35624 4.77812 6.49687 4.22812 5.94687L4.15937 5.84374C4.02187 5.70624 4.02187 5.46562 4.15937 5.32812L5.53437 3.98749C5.6375 3.88437 5.74062 3.88437 5.80937 3.88437C5.87812 3.88437 5.98125 3.88437 6.08437 3.98749L6.15312 4.09062C6.70312 4.67499 7.52812 4.84687 8.28437 4.53749L8.42187 4.46874C9.17812 4.15937 9.65937 3.47187 9.65937 2.68124V2.54374C9.65937 2.40624 9.72812 2.33749 9.7625 2.26874C9.79687 2.19999 9.9 2.16562 10.0375 2.16562H11.9625C12.1687 2.16562 12.3406 2.33749 12.3406 2.54374V2.68124C12.3406 3.47187 12.8219 4.19374 13.5781 4.46874C13.6812 4.50312 13.8187 4.57187 13.9219 4.60624C14.6437 4.94999 15.5031 4.81249 16.0875 4.26249L16.1906 4.19374C16.3281 4.05624 16.5687 4.05624 16.7062 4.19374L18.0469 5.56874C18.15 5.67187 18.15 5.77499 18.15 5.84374C18.15 5.91249 18.1156 6.01562 18.0469 6.11874L17.9781 6.18749C17.3594 6.70312 17.1875 7.56249 17.4625 8.24999C17.4969 8.35312 17.5312 8.45624 17.6 8.55937C17.875 9.28124 18.5625 9.79687 19.3531 9.79687H19.4562C19.5937 9.79687 19.6625 9.86562 19.7312 9.89999C19.8 9.93437 19.8344 10.0375 19.8344 10.175V12.1Z"
                            fill=""
                          ></path>
                          <path
                            d="M11 6.32498C8.42189 6.32498 6.32501 8.42186 6.32501 11C6.32501 13.5781 8.42189 15.675 11 15.675C13.5781 15.675 15.675 13.5781 15.675 11C15.675 8.42186 13.5781 6.32498 11 6.32498ZM11 14.1281C9.28126 14.1281 7.87189 12.7187 7.87189 11C7.87189 9.28123 9.28126 7.87186 11 7.87186C12.7188 7.87186 14.1281 9.28123 14.1281 11C14.1281 12.7187 12.7188 14.1281 11 14.1281Z"
                            fill=""
                          ></path>
                        </svg>
                        Account Settings
                      </NavLink>
                    </li>
                  </ul>

                  <button className="flex items-center gap-3.5 px-6 py-4 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base">
                    <svg
                      class="fill-current"
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.5375 0.618744H11.6531C10.7594 0.618744 10.0031 1.37499 10.0031 2.26874V4.64062C10.0031 5.05312 10.3469 5.39687 10.7594 5.39687C11.1719 5.39687 11.55 5.05312 11.55 4.64062V2.23437C11.55 2.16562 11.5844 2.13124 11.6531 2.13124H15.5375C16.3625 2.13124 17.0156 2.78437 17.0156 3.60937V18.3562C17.0156 19.1812 16.3625 19.8344 15.5375 19.8344H11.6531C11.5844 19.8344 11.55 19.8 11.55 19.7312V17.3594C11.55 16.9469 11.2062 16.6031 10.7594 16.6031C10.3125 16.6031 10.0031 16.9469 10.0031 17.3594V19.7312C10.0031 20.625 10.7594 21.3812 11.6531 21.3812H15.5375C17.2219 21.3812 18.5625 20.0062 18.5625 18.3562V3.64374C18.5625 1.95937 17.1875 0.618744 15.5375 0.618744Z"
                        fill=""
                      ></path>
                      <path
                        d="M6.05001 11.7563H12.2031C12.6156 11.7563 12.9594 11.4125 12.9594 11C12.9594 10.5875 12.6156 10.2438 12.2031 10.2438H6.08439L8.21564 8.07813C8.52501 7.76875 8.52501 7.2875 8.21564 6.97812C7.90626 6.66875 7.42501 6.66875 7.11564 6.97812L3.67814 10.4844C3.36876 10.7938 3.36876 11.275 3.67814 11.5844L7.11564 15.0906C7.25314 15.2281 7.45939 15.3312 7.66564 15.3312C7.87189 15.3312 8.04376 15.2625 8.21564 15.125C8.52501 14.8156 8.52501 14.3344 8.21564 14.025L6.05001 11.7563Z"
                        fill=""
                      ></path>
                    </svg>
                    Log Out
                  </button>
                </div>
              </div>
            </div>
          </div>
        </header>

        <main>
          {activePage === "admin" && <Dashboard />}
          {activePage === "trash" && <Trash />}
          {activePage === "profiles" && <Profile />}
          {activePage === "forms" && <Forms />}
          {activePage === "todo" && <CustomerRecords/>}
          {activePage === "invoice" && <Invoice />}
        </main>
      </div>
    </div>
  );
};

export default Home;
