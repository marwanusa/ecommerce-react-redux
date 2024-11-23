import { TLoading } from "../../../types/shared";

type LoadingProps = {
  status: TLoading;
  error: null | string;
  children: React.ReactNode;

}
const Loading = ({children,status,error}:LoadingProps) => {
  if (status == "pending") {
    return <div>Loading...</div>;
  }
  if (status == "failed") {
    return <div>Error: {error}</div>;
  }
  return (
<>{children}</>
  )
}

export default Loading