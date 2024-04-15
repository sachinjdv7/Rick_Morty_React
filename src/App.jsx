import Card from "./components/Card/Card";
import Navbar from "./components/Navbar/Navbar";
import useCharacterData from "./hooks/useCharacterData";

function App() {
  const data = useCharacterData();
  return (
    <div>
      <Navbar />
      <Card />
    </div>
  );
}

export default App;
