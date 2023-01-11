import { ChakraProvider } from '@chakra-ui/react';
import './App.css';

export const App = () => {
  return (
    <ChakraProvider>
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
    </div>
    </ChakraProvider>
  );
}

export default App;
