import { useParams } from "react-router-dom";
import { TLoading } from "../../../types/shared";
import CategorySkeleton from "../skeletons/CategorySkeleton/CategorySkeleton";
import ProductSkeleton from "../skeletons/ProductSkeleton/ProductSkeleton";
import CartSkeleton from "../skeletons/CartSkeleton/CartSkeleton";

type LoadingProps = {
  status: TLoading;
  error: null | string;
  children: React.ReactNode;

}
const Loading = ({children,status,error}:LoadingProps) => {
    const params = useParams();
  if (status == "pending") {
    if(params.prefix != undefined )
    {
      return <ProductSkeleton/>;
    }else if(params.prefix == undefined && window.location.pathname == "/categories")
    {
      return <CategorySkeleton/>;
    }else{

      return <CartSkeleton/>;
    }
  }
  if (status == "failed") {
    return <div>Error: {error}</div>;
  }
  return (
<>{children}</>
  )
}

export default Loading