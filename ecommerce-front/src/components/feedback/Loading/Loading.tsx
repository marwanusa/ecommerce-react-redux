import { TLoading } from "../../../types/shared";
import CategorySkeleton from "../skeletons/CategorySkeleton/CategorySkeleton";
import ProductSkeleton from "../skeletons/ProductSkeleton/ProductSkeleton";
import CartSkeleton from "../skeletons/CartSkeleton/CartSkeleton";
import LottieHandler from "../LottieHandler/LottieHandler";

type LoadingProps = {
  status: TLoading;
  error: null | string;
  children: React.ReactNode;
  type: "category" | "cart" | "product" ;
}
const skeletonTypes = {
  category: CategorySkeleton,
  cart: CartSkeleton,
  product: ProductSkeleton
}
const Loading = ({children,status,error,type}:LoadingProps) => {
  const Component = skeletonTypes[type];

  if (status == "pending") {
    return <Component />;
  }
  if (status == "failed") {
    return <LottieHandler width="200px" type="error" message={error as string} />;
  }
  return (
<>{children}</>
  )
}

export default Loading