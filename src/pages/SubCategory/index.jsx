import React from 'react'
import { useParams } from 'react-router';

const SubCategory = () => {
  const {mainCategory, SubCategory} = useParams();
  
  return (
    <p>
      {mainCategory}/{SubCategory}
    </p>
  );
};

export default SubCategory;