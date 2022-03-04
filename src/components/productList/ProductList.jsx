import React from 'react'
import "./productList.css"
import Product from "../product/product"
import {products} from "../../data"

const ProductList = () => {
  return (
      <div className='pl'>
          <div className="pl-texts">
              <h1 className="pl-title">Create & inspire. Its Charles</h1>
              <p className="pl-desc">
                  Charles is the creative portfolio your work has been waiting for to enjoy Beautiful, functional and responsive sites, stunning portfolio styles & a whole lot more.
              </p>
          </div>
          <div className="pl-list">
              {products.map((item) => (
                  <Product key={item.id} link={item.link} img={item.img}/>
              ))}
          </div>
    </div>
  )
}

export default ProductList