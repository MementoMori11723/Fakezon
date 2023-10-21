import { StarIcon } from '@heroicons/react/24/outline'

const ProductRating = (props:any) => {
    const sNum = props.avgRating;
    const rateNum = props.ratings
  return (
    <div className='flex'>
      { Array.from({length:sNum},(_,i) => <StarIcon key={i} className='stroke-[#F1B61F] fill-[#F1B61F] h-[20px]'/>) }
      { Array.from({length:5 - sNum},(_,i) => <StarIcon key={i} className='stroke-[#F1B61F] h-[20px]'/>) }
      <span className='ml-3 text-blue-500'>{rateNum} ratings</span>
    </div>
  )
}

export default ProductRating
