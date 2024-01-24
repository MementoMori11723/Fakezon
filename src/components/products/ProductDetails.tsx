import { ProductBadge, ProductRating } from "..";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ProductDetails = ({ p, r }: any) => {
  return (
    <div className="mb-1">
      <div className="text-xl xl:text-2xl font-medium mb-1">{p.title}</div>
      <div className="text-sm xl:text-base mb-1">
        by <span className="text-blue-500">{p.brand}</span>
      </div>
      {r && (
        <div className="text-sm xl:text-base mb-1">
          <ProductRating avgRating={p.avgRating} ratings={p.ratings} />
        </div>
      )}
      <div className="text-xs xl:text-sm font-bold mb-1">{p.attribute}</div>
      <div>
        <ProductBadge badge={p.badge} />
      </div>
    </div>
  );
};
export default ProductDetails;
