import { useState } from "react";
import { NavLink } from "react-router-dom";

const users = [
  {
    name: "Musharof Chowdhury",
    title: "Multidisciplinary Web Entrepreneur",
    email: "musharof@example.com",
    role: "Owner",
  },
  {
    name: "Naimur Rahman",
    title: "Website Front-end Developer",
    email: "naimurrahman@example.com",
    role: "Member",
  },
  {
    name: "Shafiq Hammad",
    title: "Regional Paradigm Technician",
    email: "shafiq.hd@example.com",
    role: "Moderator",
  },
  {
    name: "Alex Semuyel",
    title: "Applications Engineer",
    email: "alex.semuel@example.com",
    role: "Admin",
  },
  {
    name: "Sulium Keliym",
    title: "Lead Implementation Liaison",
    email: "suliym.info@example.com",
    role: "Member",
  },
  {
    name: "Jhon Smith",
    title: "Regional Paradigm Technician",
    email: "jhon.smith@example.com",
    role: "Admin",
  },
  {
    name: "Jenifer Lofess",
    title: "Multidisciplinary Web Entrepreneur",
    email: "loffes.cooper@example.com",
    role: "Member",
  },
  {
    name: "Devid Deekook",
    title: "Central Security Manager",
    email: "devid.decok@example.com",
    role: "Moderator",
  },
];

const PAGE_SIZE = 5;

const Trash = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(users.length / PAGE_SIZE);

  const currentUsers = users.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE
  );

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  return (
    <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-title-md2 font-semibold text-black dark:text-white">
        Trash Records
        </h2>
        <nav>
          <ol className="flex items-center gap-2">
            <li>
              <NavLink className="font-medium" to="/">
                Dashboard /
              </NavLink>
            </li>
            <li className="font-medium text-primary">Trash Records</li>
          </ol>
        </nav>
      </div>
      <div className="flex flex-col gap-10">
        <div className="overflow-hidden rounded-[10px]">
          <div className="max-w-full overflow-x-auto">
            <div className="min-w-[1170px]">
              <div className="grid grid-cols-12 bg-[#F9FAFB] px-5 py-4 dark:bg-meta-4 lg:px-7.5 2xl:px-11">
                <div className="col-span-3">
                  <h5 className="font-medium text-[#637381] dark:text-bodydark">
                    NAME
                  </h5>
                </div>
                <div className="col-span-3">
                  <h5 className="font-medium text-[#637381] dark:text-bodydark">
                    TITLE
                  </h5>
                </div>
                <div className="col-span-3">
                  <h5 className="font-medium text-[#637381] dark:text-bodydark">
                    EMAIL
                  </h5>
                </div>
                <div className="col-span-2">
                  <h5 className="font-medium text-[#637381] dark:text-bodydark">
                    ROLE
                  </h5>
                </div>
              </div>
              <div className="bg-white dark:bg-boxdark">
                {currentUsers.map((user, index) => (
                  <div
                    key={index}
                    className="grid grid-cols-12 border-t border-[#EEEEEE] px-5 py-4 dark:border-strokedark lg:px-7.5 2xl:px-11"
                  >
                    <div className="col-span-3">
                      <p className="text-[#637381] dark:text-bodydark">
                        {user.name}
                      </p>
                    </div>
                    <div className="col-span-3">
                      <p className="text-[#637381] dark:text-bodydark">
                        {user.title}
                      </p>
                    </div>
                    <div className="col-span-3">
                      <p className="text-[#637381] dark:text-bodydark">
                        {user.email}
                      </p>
                    </div>
                    <div className="col-span-2">
                      <p className="text-[#637381] dark:text-bodydark">
                        {user.role}
                      </p>
                    </div>
                    <div className="col-span-1">
                      <button className="float-right text-primary">Restore</button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex mt-4 mb-4" style={{justifyContent:"space-evenly"}}>
                <button
                  onClick={handlePreviousPage}
                  disabled={currentPage === 1}
                  className="inline-flex rounded bg-dark py-1 px-3 font-medium text-white hover:bg-opacity-90 disabled:bg-gray-400"
                >
                  {`<`}
                </button>
                <span className="text-black dark:text-white">
                  Page {currentPage} of {totalPages}
                </span>
                <button
                  onClick={handleNextPage}
                  disabled={currentPage === totalPages}
                  className="inline-flex rounded bg-dark py-1 px-3 font-medium text-white hover:bg-opacity-90 disabled:bg-gray-400"
                >
                  {`>`}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trash;
