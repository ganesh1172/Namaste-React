import { useRouteError } from "react-router-dom";
import ErrorPage from "../Images/error-page.gif";

const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <img className="mx-auto" src={ErrorPage} alt="Error page" />
      <div className="text-center">
        <h1 className="text-red-600 text-lg font-semibold">
          {err.status} {err.statusText}
        </h1>
        <p className="text-blue-700 text-base italic">{err.data}</p>
      </div>
    </div>
  );
};

export default Error;
