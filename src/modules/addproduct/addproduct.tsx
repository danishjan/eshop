import React, { useState } from 'react'
import { useGlobalContext } from '../../global/contextManager'

export const Addproduct = () => {

  const { dispatch } = useGlobalContext();
  const [productItem, setPrducItem] = useState({
    title: '',
    description: '',
    price: 0,
    images: ["https://support.apple.com/library/content/dam/edam/applecare/images/en_US/iphone/iphone-14-pro-max-colors.png", "https://www.apple.com/newsroom/images/product/iphone/standard/Apple-iPhone-14-iPhone-14-Plus-hero-220907_Full-Bleed-Image.jpg.large.jpg", "https://cdn.thewirecutter.com/wp-content/media/2022/07/laptop-under-500-2048px-acer-1.jpg"],
    thumbnail: 'https://cdn.thewirecutter.com/wp-content/media/2022/07/laptop-under-500-2048px-acer-1.jpg',
    category: '',
    discountPercentage: 0,
    stock: 0,
    brand: '',
  })

  const handleChange = (e : any) => {
     const {name, value} = e.target;
     setPrducItem({...productItem, [name]: value})
  }

const handleSubmitForm = (e: any) => {
  e?.preventDefault();
   dispatch({type: "ADD_ITEM", payload: productItem})
}
  return (
<form className="w-full max-w-lg m-10">
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
        title
      </label>
      <input name="title" onChange={(e)=>handleChange(e)} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="product title name" />
      <p className="text-red-500 text-xs italic">Please fill out this field.</p>
    </div>
    <div className="w-full md:w-1/2 px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
        Description
      </label>
      <input name="description" onChange={(e)=>handleChange(e)} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="product description" />
    </div>
    <div className="w-full md:w-1/2 px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
        price
      </label>
      <input name='price' onChange={(e)=>handleChange(e)} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="number" placeholder="product price" />
    </div>
    <div className="w-full md:w-1/2 px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
        discountPercentage
      </label>
      <input name='discountPercentage' onChange={(e)=>handleChange(e)} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="number" placeholder="Discount %" />
    </div>
    <div className="w-full md:w-1/2 px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"  htmlFor="grid-last-name">
        stock
      </label>
      <input name='stock' onClick={(e)=>handleChange(e)} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="number" placeholder="number of stock" />
    </div>
    <div className="w-full md:w-1/2 px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="brand">
        brand
      </label>
      <input name='brand' className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="brand" />
    </div>
    <div className="w-full md:w-1/2 px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="category">
        category
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="catagory" />
    </div>
  </div>
  <button onClick={(e) => handleSubmitForm(e)} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 flex justify-center items-center font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 mt-10 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
  Add Product
</button>
</form>
  )
}
