import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyle from './styles/GlobaStyle';
import Home from './pages/Home';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';


function App() {
  return (
    <> 

      <GlobalStyle />  

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='page2' element={<Page2 />} />
          <Route path='page3' element={<Page3 />} />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
