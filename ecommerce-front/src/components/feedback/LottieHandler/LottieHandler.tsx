import Lottie  from "lottie-react";
import notFound from "../../../assets/lottieFiles/notFound.json";
import emptyCart from "../../../assets/lottieFiles/emptyCart.json";
import loadingCart from "../../../assets/lottieFiles/loadingCart.json";
import error from "../../../assets/lottieFiles/error.json";

const lottieFilesMap = {
    notFound,
    emptyCart,
    loadingCart,
    error
}
type LottieHandlerProps = {
    type: keyof typeof lottieFilesMap,
    message?: string,
    width:string
}
const LottieHandler = ({type,message,width}:LottieHandlerProps) => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
        <Lottie animationData={lottieFilesMap[type]} loop={true} style={{width:width}} />
        {message && <h6>{message}</h6>}
    </div>
  )
}

export default LottieHandler