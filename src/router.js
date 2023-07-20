import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Composants from './pages/Composants';
import Footer from './pages/Footer';
import Header from './pages/Header';
import Logement from './pages/Logement';
import Apropos from './pages/Apropos';


function Router() {
  return (
    <BrowserRouter>
        <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/composants" component={Composants} />
        <Route path="/logement" component={Logement} />
        <Route path='/Apropos' component={Apropos} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default Router;
