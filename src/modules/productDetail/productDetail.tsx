import React, {useEffect, useState} from 'react'
import { useParams } from "react-router-dom";
import axios from "axios";
import { Item, useGlobalContext } from '../../global/contextManager';

export const ProductDetail = () => {
    const { id } = useParams();
    const { state } = useGlobalContext();
    const result : any = state?.items?.filter((item) => {
     return  item.id === Number(id)
    });
    const [productDetail, setProductDetail] = useState<Item | null>(null);

    useEffect(()=>{
     axios
      .get(`https://dummyjson.com/products/${id}`)
      .then((response) => {
        setProductDetail(response?.data)
      })
      .catch((error) => {
        console.log(error);
      });
    }, [id])

  return (
    <section className="bg-white dark:bg-gray-900">
    <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">{result[0]?.title}</h2>
            <p className="mb-4 text-gray-500">{result[0]?.category}</p>
            <p>{result[0]?.description}</p>
            <h1 className="mb-4 text-2xl tracking-tight font-extrabold text-red-900 dark:text-white">Price $ {result[0]?.price}</h1>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-8">
                {
                    result[0]?.images?.map((image: any, index: any) => (
                        <img className="mt-4 w-full lg:mt-10 rounded-lg" key={index} src={image} alt="office content 2"/>
                    ))
                }
        </div>
    </div>
</section>
  )
}
