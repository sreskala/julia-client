import { useRouteError, Link } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  const message = (error as any).message ?? "Planet not found"

  return (
    <div id="error-page">
      <h1>Uh Oh!</h1>
      <p>Looks like you tried to navigate to a destination outside our planetary system!</p>
      <p>
        <i>{message}</i>
      </p>
    <Link to="/">Click here to get back to base</Link>
    </div>
  );
}