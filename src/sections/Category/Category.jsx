import React from 'react';
import { categoryData } from '../../utils/categoryData';
import { CatWrap, CatList } from './CategoryElement';
const Category = () => {
  return (
    <CatWrap>
      <h3>All Categories</h3>
      {categoryData &&
        categoryData.map((item) => (
          <CatList key={item.id}>
            <p>{item.catName}</p>
            <span>{item.stuCat}</span>
          </CatList>
        ))}
    </CatWrap>
  );
};

export default Category;
