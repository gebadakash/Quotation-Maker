import React, { useState } from 'react';

const files = [
  {
    name: 'Content-script.txt',
    size: '455KB',
    uploadDate: '25 Nov, 2025'
  },
  {
    name: 'E-commerce.apk',
    size: '55MB',
    uploadDate: '13 Dec, 2025'
  },
  {
    name: 'Random-text.doc',
    size: '455KB',
    uploadDate: '12 Feb, 2025'
  },
  {
    name: 'Another-file.pdf',
    size: '2MB',
    uploadDate: '15 Mar, 2025'
  },
  {
    name: 'Sample-file.zip',
    size: '150MB',
    uploadDate: '1 Jan, 2025'
  },
  {
    name: 'Test-document.txt',
    size: '200KB',
    uploadDate: '20 Apr, 2025'
  }
];

const PAGE_SIZE = 5;

const Invoice = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(files.length / PAGE_SIZE);

  const currentFiles = files.slice(
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
    <div className='container mt-5 mb-5'>
    <div className="col-span-12">
      {currentFiles.map((file, index) => (
        <div key={index} className="rounded-sm border border-stroke bg-white py-3 shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="flex justify-between gap-2.5 py-3 px-6 hover:bg-gray-2 dark:hover:bg-meta-4 sm:items-center sm:justify-start">
            <div className="flex items-center gap-5.5 sm:w-5/12 xl:w-3/12">
              <p className="font-medium text-black dark:text-white">{file.name}</p>
            </div>
            <div className="hidden sm:block sm:w-4/12 xl:w-2/12">
              <p className="font-medium text-black dark:text-white">File size: {file.size}</p>
            </div>
            <div className="hidden w-5/12 xl:block">
              <p className="font-medium text-black dark:text-white">Uploaded on: {file.uploadDate}</p>
            </div>
            <div className="text-right sm:w-3/12 xl:w-2/12">
              <button className="inline-flex rounded bg-success py-1 px-3 font-medium text-white hover:bg-opacity-90 sm:py-2.5 sm:px-6">
                Download
              </button>
            </div>
          </div>
        </div>
      ))}
      <div className="flex mt-4" style={{justifyContent:"space-evenly"}}>
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          className="inline-flex rounded bg-dark py-1 px-3 font-medium text-white hover:bg-opacity-90 disabled:bg-gray-400"
        >
          Previous
        </button>
        <span className="text-black dark:text-white">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className="inline-flex rounded bg-dark py-1 px-3 font-medium text-white hover:bg-opacity-90 disabled:bg-gray-400"
        >
          Next
        </button>
      </div>
    </div>
    </div>
  );
};

export default Invoice;
