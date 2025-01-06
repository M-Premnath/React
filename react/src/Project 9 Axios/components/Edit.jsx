// Edit.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

const Edit = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>Edit Employee with ID: {id}</h1>
      {/* Add your edit form or logic here */}
    </div>
  );
};

export default Edit;