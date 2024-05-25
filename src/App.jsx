import Home from "./pages/Home";
import { BooksProvider } from './context/BookContext.jsx'

function App() {

  return (
    <BooksProvider>
      <Home/>
    </BooksProvider>
  );
}

export default App;
