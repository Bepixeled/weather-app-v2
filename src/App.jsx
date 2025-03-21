import "./index.css";
import Weather from "./components/Weather";

function App() {
  return (
    <>
      <div className="min-w-[360px] max-w-svw flex justify-center md:mt-20">
        <Weather />
      </div>
    </>
  );
}

export default App;
