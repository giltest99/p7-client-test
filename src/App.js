import MainRoutes from './routes/MainRoutes';
import GlobalStyle from './styles/GlobaStyle';
import { BrowserRouter } from "react-router-dom";


function App() {
  return (
    <> 

      <GlobalStyle /> 

      <BrowserRouter>
        <MainRoutes />
      </BrowserRouter>
      

    </>

  );
}

export default App;
