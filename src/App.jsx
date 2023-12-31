import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";

function App() {
  return (
    <Canvas shadows camera={{ position: [7, 5, -5] }}>

      <Experience />
    </Canvas>
  );
}

export default App;
