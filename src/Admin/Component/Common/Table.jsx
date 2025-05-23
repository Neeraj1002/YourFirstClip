import React, { useState } from 'react';
import { FaEye, FaEdit, FaTrash, FaPlus } from 'react-icons/fa';
import { Tooltip } from 'react-tooltip';

const Table = ({ columns, data, onView, onEdit, onDelete, onAdd, pageTitle }) => {
  const recordsPerPage = 5; // Define how many records per page
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the number of pages
  const totalPages = Math.ceil(data.length / recordsPerPage);

  // Calculate the data to display for the current page
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = data.slice(indexOfFirstRecord, indexOfLastRecord);

  // Handle pagination controls
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
  <div className="w-full overflow-x-auto">
    <div className="flex justify-between mb-4">
        <h1 className='text-[42px] font-bold text-gray-800'>{pageTitle}</h1>
        <button
          className="flex items-center bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          onClick={onAdd}
        >
          <FaPlus className="mr-2" />
          Add New
        </button>
      </div>
  <table className="w-full bg-white rounded-lg border border-gray-200">
    <thead>
      <tr className="bg-gray-200 text-left">
        {columns.map((col) => (
          <th
            key={col}
            className="py-2 px-4 text-sm font-semibold text-gray-600 whitespace-nowrap min-w-[150px] border border-gray-300"
          >
            {col}
          </th>
        ))}
      </tr>
    </thead>
    <tbody>
      {currentRecords.length > 0 ? (
        currentRecords.map((row, idx) => (
          <tr key={idx} className="border-t">
            <td className="py-2 px-4 min-w-[150px] whitespace-nowrap border border-gray-300">{row.title}</td>
            <td className="py-2 px-4 min-w-[150px] whitespace-nowrap border border-gray-300">{row.description}</td>
            <td className="py-2 px-4 min-w-[150px] whitespace-nowrap border border-gray-300">{row.type}</td>
            <td className="py-2 px-4 min-w-[150px] whitespace-nowrap border border-gray-300">
              <a
                href={'https://www.youtube.com/watch?v=' + row.videoId}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                View
              </a>
            </td>
            <td className="py-2 px-4 min-w-[150px]  whitespace-nowrap border border-gray-300">
              {row.isLive ? 'Yes' : 'No'}
            </td>
            <td className="py-2 px-4 min-w-[150px] whitespace-nowrap border border-gray-300">{row.creator?.name}</td>
            <td className="py-2 px-4  min-w-[150px] whitespace-nowrap border border-gray-300">
              <div className="flex space-x-2">
                <button className="text-blue-600 hover:text-blue-800" onClick={() => onView(row)}>
                  <FaEye />
                </button>
                <button className="text-yellow-600 hover:text-yellow-800" onClick={() => onEdit(row)}>
                  <FaEdit />
                </button>
                <button className="text-red-600 hover:text-red-800" onClick={() => onDelete(row)}>
                  <FaTrash />
                </button>
              </div>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={columns.length} className=" py-4">
            No data available.
          </td>
        </tr>
      )}
    </tbody>
  </table>
  {/* Footer with Pagination */}
  <div className="flex justify-between items-center py-4 px-4 bg-gray-100 rounded-b-lg">
        {/* Number of Records */}
        <span className="text-gray-600 text-sm">
          Showing {indexOfFirstRecord + 1} - {Math.min(indexOfLastRecord, data.length)} of {data.length} records
        </span>

        {/* Pagination Controls */}
        <div className="flex space-x-2">
          <button
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
            className={`px-3 py-1 text-sm rounded-md ${currentPage === 1 ? 'bg-gray-300 text-gray-500' : 'bg-blue-500 text-white hover:bg-blue-700'}`}
          >
            Previous
          </button>
          <span className="text-gray-600 text-sm">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className={`px-3 py-1 text-sm rounded-md ${currentPage === totalPages ? 'bg-gray-300 text-gray-500' : 'bg-blue-500 text-white hover:bg-blue-700'}`}
          >
            Next
          </button>
        </div>
      </div>

      {/* Tooltip */}
      <Tooltip effect="solid" place="top" />
</div>

 );
};

export default Table;