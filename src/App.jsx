import "./App.css";
import Card from "./Components/Card";

function App() {

  // let myObj = {
  //   userName : "Didar",
  //   Narration : "lorem my name is didar",
  // }
  // let myObj1 = {
  //   userName : "Bappy",
  //   Narration : "lorem my name is Bappy",
  // }
  
  return (
    <>
      <h1 className="bg-green-400 text-blue-800 rounded-2xl mb-4">didar</h1>

      <Card myname="Didar" Narration="My name is Didar"/>
      <Card myname="Bappy"  />
    </>
  );
}

export default App;
