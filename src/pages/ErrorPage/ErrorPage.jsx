import { useRouteError } from "react-router-dom";
import Header from "../../components/header";
import errorIcon from '../../assets/img/errorIcon.png'

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
          marginTop: "150px",
        }}
      >
        <img src={errorIcon} alt='errorIcon' style={{width: '200px'}}/>
        <h1>Oops!</h1>
        <p style={{marginTop: '5px'}}>Sorry, an unexpected error has occurred.</p>
        <p style={{marginTop: '10px'}}>
          <i>{error.statusText}</i>
        </p>
      </div>
    </>
  );
}
