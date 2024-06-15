import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";


const CustomerRecords = () => {

  const [currentPage, setCurrentPage] = useState(1);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const recordsPerPage = 5;
  const maxPageNumbers = 5; // Number of page numbers to show

  const teamData = [
    { name: "Musharof Chowdhury", position: "Multidisciplinary Web Entrepreneur", email: "musharof@example.com", role: "Owner" },
    { name: "Naimur Rahman", position: "Website Front-end Developer", email: "naimurrahman@example.com", role: "Member" },
    { name: "Shafiq Hammad", position: "Regional Paradigm Technician", email: "shafiq.hd@example.com", role: "Moderator" },
    { name: "Alex Semuyel", position: "Applications Engineer", email: "alex.semuel@example.com", role: "Admin" },
    // Add more data as needed
  ];

  const totalPages = Math.ceil(teamData.length / recordsPerPage);

  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const currentRecords = teamData.slice(firstIndex, lastIndex);

  const handleClick = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handleDropdownToggle = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    let startPage = Math.max(1, currentPage - Math.floor(maxPageNumbers / 2));
    let endPage = Math.min(totalPages, startPage + maxPageNumbers - 1);

    if (endPage - startPage < maxPageNumbers - 1) {
      startPage = Math.max(1, endPage - maxPageNumbers + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <button
          key={i}
          onClick={() => handleClick(i)}
          className={`mx-1 px-3 py-1 ${i === currentPage ? 'bg-success text-white' : 'bg-gray-300 text-black'} rounded`}
        >
          {i}
        </button>
      );
    }

    return pageNumbers;
  };


  return (
    <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-title-md2 font-semibold text-black dark:text-white">
          Customers Data Tables
        </h2>
        <nav>
          <ol className="flex items-center gap-2">
            <li>
              <NavLink className="font-medium" >
                Dashboard /
              </NavLink>
            </li>
            <li className="font-medium text-primary">Data Tables</li>
          </ol>
        </nav>
      </div>
      <div className="flex flex-col gap-5 md:gap-7 2xl:gap-10">
        <div className="w-full overflow-x-auto">
      <div className="min-w-[1170px]">
        <div className="grid grid-cols-12 rounded-t-[10px] bg-secondary px-5 py-4 lg:px-7.5 2xl:px-11">
          <div className="col-span-3">
            <h5 className="font-medium text-white">Name</h5>
          </div>
          <div className="col-span-3">
            <h5 className="font-medium text-white">Position</h5>
          </div>
          <div className="col-span-3">
            <h5 className="font-medium text-white">Email</h5>
          </div>
          <div className="col-span-2">
            <h5 className="font-medium text-white">Role</h5>
          </div>
          <div className="col-span-1">
            <h5 className="text-right font-medium text-white">Edit</h5>
          </div>
        </div>
        <div className="rounded-b-[10px] bg-white dark:bg-boxdark">
          {currentRecords.map((member, index) => (
            <div key={index} className="grid grid-cols-12 border-t border-[#EEEEEE] px-5 py-4 dark:border-strokedark lg:px-7.5 2xl:px-11">
              <div className="col-span-3">
                <p className="text-[#637381] dark:text-bodydark">{member.name}</p>
              </div>
              <div className="col-span-3">
                <p className="text-[#637381] dark:text-bodydark">{member.position}</p>
              </div>
              <div className="col-span-3">
                <p className="text-[#637381] dark:text-bodydark">{member.email}</p>
              </div>
              <div className="col-span-2">
                <p className="text-[#637381] dark:text-bodydark">{member.role}</p>
              </div>
              <div className="relative col-span-1">
                <div className="relative h-full">
                  <button
                    onClick={() => handleDropdownToggle(index)}
                    className="shadow-11 float-right inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-sm text-black hover:text-primary dark:bg-meta-4 dark:text-white dark:shadow-none"
                  >
                    Action
                    <svg className="fill-current" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8.00039 11.4C7.85039 11.4 7.72539 11.35 7.60039 11.25L1.85039 5.60005C1.62539 5.37505 1.62539 5.02505 1.85039 4.80005C2.07539 4.57505 2.42539 4.57505 2.65039 4.80005L8.00039 10.025L13.3504 4.75005C13.5754 4.52505 13.9254 4.52505 14.1504 4.75005C14.3754 4.97505 14.3754 5.32505 14.1504 5.55005L8.40039 11.2C8.27539 11.325 8.15039 11.4 8.00039 11.4Z" fill=""></path>
                    </svg>
                  </button>
                  {activeDropdown === index && (
                    <div className="max-w-39.5 shadow-12 absolute right-0 z-1 w-full rounded-[5px] bg-white py-2.5 dark:bg-boxdark top-full mt-1 block">
                      <button className="flex w-full px-4 py-2 text-sm hover:bg-whiter hover:text-primary dark:hover:bg-meta-4">Edit</button>
                      <button className="flex w-full px-4 py-2 text-sm hover:bg-whiter hover:text-primary dark:hover:bg-meta-4">Delete</button>
                      <button className="flex w-full px-4 py-2 text-sm hover:bg-whiter hover:text-primary dark:hover:bg-meta-4" style={{textAlign:'center', justifyContent:"center"}}>Generate Invoice</button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-4">
        <button
          onClick={() => handleClick(currentPage - 1)}
          disabled={currentPage === 1}
          className="mx-1 px-3 py-1 bg-gray-300 text-black rounded disabled:opacity-50"
        >
          Previous
        </button>
        {renderPageNumbers()}
        <button
          onClick={() => handleClick(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="mx-1 px-3 py-1 bg-gray-300 text-black rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>

      </div>
    </div>
  );
};

export default CustomerRecords;
