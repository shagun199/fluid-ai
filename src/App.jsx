import "./App.css";
import Loader from "./components/Loader";
import { useLoading } from "./context/LoadingContext";
import Movies from "./pages/Movies/Movies";

function App() {
  const { loading } = useLoading();

  return (
    <>
      {loading && <Loader />}
      <Movies />
    </>
  );
}

export default App;
