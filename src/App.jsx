import Index from 'pages';
import 'styles/styles.css';
import PerfilInfoPage from 'pages/perfil';
import Perfil2InfoPage from 'pages/perfil2';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'; 
import Layout from 'layouts/Layout';


function App() {
  return (
  <div className="App">
    <Router>
      <Layout>
        <Switch>
           <Route path='/perfil'>
             <PerfilInfoPage />
           </Route>
           <Route path='/perfil2'>
             <Perfil2InfoPage />
           </Route>
           <Route path='/'>
             <Index />
           </Route>
        </Switch>
      </Layout>
    </Router>
  </div>
  );
}


export default App;
