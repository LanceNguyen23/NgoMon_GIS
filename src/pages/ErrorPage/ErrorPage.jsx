import { useRouteError } from "react-router-dom";
import Header from "../../components/Header";

export default function ErrorPage() {
  const error = useRouteError();
  return (
    <>
      <Header />
      <div
        id="error-page"
        style={{
          textAlign: "center",
          fontFamily: "inherit",
          marginTop: "50px",
        }}
      >
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText}</i>
        </p>
      </div>
    </>
  );
}
