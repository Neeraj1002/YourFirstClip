import React, { useEffect } from 'react';
import Table from '../../Component/Common/Table';
import { useNavigate } from 'react-router-dom';
import { usePortfolio } from '../../../Context/Admin/PortfolioContext'; // Import the context hook
import ToastMessage, { notifySuccess, notifyError } from '../../Component/Common/ToastMessage'; // Adjust path as needed

const PortfolioListViewPage = () => {
  const navigate = useNavigate();
  const { portfolios, removePortfolio } = usePortfolio(); // Access portfolios and context functions
  const pageTitle = 'Portfolio'
  // Define columns including an "Actions" column for buttons
  const columns = ['Title', 'Description', 'Type', 'YouTube Link', 'Live', 'Creator Name', 'Actions'];


  // View portfolio handler
  const handleView = (portfolio) => {
    navigate(`view/${portfolio.id}`);
  };

  // Edit portfolio handler
  const handleEdit = (portfolio) => {
    navigate(`edit/${portfolio.id}`);
  };

  // Delete portfolio handler
  const handleDelete = (portfolio) => {
    removePortfolio(portfolio.id); // Call the delete function from context
    notifySuccess("Record Deleted!")
  };

  // Add portfolio handler
  const handleAdd = () => {
    navigate('new'); // Navigate to the add new portfolio page
  };

  return (
    <div>
      <Table
        columns={columns}
        data={portfolios}
        onView={handleView}
        onEdit={handleEdit}
        onDelete={handleDelete}
        onAdd={handleAdd}
        pageTitle={pageTitle}
      />
      <ToastMessage/>
    </div>
  );
};

export default PortfolioListViewPage;
