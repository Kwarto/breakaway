import React from 'react'
import styled from 'styled-components'

const categoryOption = [
    'Computing',
    'Fashion',
    'Health & Beauty',
    'Home & Office',
    'Electronics',
    'Phones & Accessories',
    'Sporting Products',
    'Groceries',
    'TV & Audio',
];

const brandOption = [
    'Apple',
    'Dell',
    'Huawei',
    'HP',
    'Microsoft',
    'Media',
    'Samsung',
    'Nokia',
    'Tecno',
]

const AddProForm = () => {
  return (
    <AddProFormWrapper>
          <ProdForm>
              <ProImgWrap>
                  <input type="file" name="file" id="file" style={{display: 'none'}} />  
                  <label htmlFor="file">Choose Product Image</label>
              </ProImgWrap>
              <h3>* Product Detail</h3>
              <div className="input-con">
                  <div className="input-field">
                   <label htmlFor="productName">Product Name</label>
                   <input type="text" name='productName'placeholder='Apple iPhone 12Pro'/>
                  </div>
                  <div className="input-field">
                   <label htmlFor="productPrice">Product Price</label>
                   <input type="number" name='productPrice'placeholder='$ 150'/>
                  </div>
              </div>
              <div className="input-con">
                  <div className="input-field">
                   <label htmlFor="category">Product Category</label>
                   <select name="category" >
                   <option>Please Select Category</option>
                     {categoryOption.map((option, index) => (
                       <option value={option || ''} key={index}>
                         {option}
                       </option>
                     ))}
                   </select>
                  </div>
                  <div className="input-field">
                   <label htmlFor="productName">Product Name</label>
                   <select name="category" >
                   <option>Please Select Brand</option>
                     {brandOption.map((option, index) => (
                       <option value={option || ''} key={index}>
                         {option}
                       </option>
                     ))}
                   </select>
                  </div>
              </div>
              <div className="input-con">
                  <div className="input-field">
                   <label htmlFor="description">Product Description</label>
                   <textarea name="description" id="description" cols="30" rows="6" placeholder='Description here..' />
                  </div>
              </div>
              <div className="input-con">
                  <div className="input-field">
                   <button>Upload Product</button>
                  </div>
              </div>
          </ProdForm>  
    </AddProFormWrapper>
  )
}

const AddProFormWrapper = styled.article`
 background: var(--text-color);
 box-shadow: 0 0 10px var(--box-shadow);
 border-radius: .2rem;
 width: 75%;
 height: 100%;
 margin: 0 auto;
 overflow-y: scroll;
`

const ProdForm = styled.form`
 width: 96%;
 margin: 0 auto;

 h3{
    padding: 15px 0;
 }

 .input-con{
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 10px;
    .input-field{
        
        display: flex;
        flex-direction: column;
        gap: 10px;
        width: 100%;

        input,select,textarea{
            background: var(--text-color);
            border: 1px solid var(--sidebar-variant);
            box-shadow: 0 0 10px var(--main-variant);
            width: 90%;
            padding: 8px 10px;
            font-size: 15px;
            font-family: 'Oswald', sans-serif;
            resize: none;
        }

        textarea{
          width: 95%;
        }

        button{
            width: 30%;
            padding: 8px;
            background: var(--sidebar-variant);
            border-radius: .2rem;
            box-shadow: 0 .3rem 1rem var(--main-variant);
            color: var(--text-color);
            cursor: pointer;
            font-size: 15px;
            font-family: 'Oswald', sans-serif;
        }
    }
 }
`

const ProImgWrap = styled.div`
  background: var(--main-variant);
  box-shadow: 0 0 10px var(--box-shadow);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  height: 12vh;
  width: 30%;
  margin: 0 auto;

  label{
    cursor: pointer;
  }
`

export default AddProForm