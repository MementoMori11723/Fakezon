const ProductBadge = ({badge}:any) => {
    switch(badge){
        case "choice":
            return(<span className='text-xs xl:text-sm bg-slate-800 text-white p-1'>Amazon's <span className='text-orange-500'>Choice</span></span>);
        case "seller":
            return(<span className='text-xs xl:text-sm bg-orange-500 text-white p-1'>#1 Best Seller</span>);
        case "limited":
            return(<span className='text-xs xl:text-sm bg-red-500 text-white p-1'>Limited Time Deal</span>);
    }
  return (<div></div>)
}
export default ProductBadge