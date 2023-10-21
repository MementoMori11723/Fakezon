import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import { CallAPI } from '../utils/CallApi';

const ProductPage = () => {
    const { id }:any = useParams();
    const [product, setProduct] = useState<any>([]);
    const getProduct = () => { CallAPI(`data/products.json`).then((pr)=>{setProduct(pr[id])}) }
    useEffect(() => getProduct(),[]);
    if (!product?.title) return <h1>Loading Product ...</h1>
  return (product &&
    <div className='h-screen bg-fakezon-background'>
      <div className='min-w-[1000px] max-w-[1500px] m-auto bg-orange-400'>
        <div className='grid grid-cols-10'>
            <div className='col-span-3 p-8 bg-white rounded m-auto'><img src={product.image}/></div>
            <div className='col-span-5 bg-pink-400'><div></div><div></div></div>
            <div className='col-span-2 bg-green-400'></div>
        </div>
      </div>
    </div>
  )
}

export default ProductPage
