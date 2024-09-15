import './App.css';
import {NextUIProvider} from "@nextui-org/react";
import MainSection from './components/MainSection';

function App() {
  return (
    <div className="App">
      <NextUIProvider>
      <MainSection />
    </NextUIProvider>
    </div>
  );
}

export default App;
