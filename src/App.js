import { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Error from "./pages/Error";
import Homepage from "./pages/Homepage";
import Homes from "./pages/Homes";
import Renters from "./pages/Renters";
import ScrollToTop from "./ScrollToTop";

function App() {
  return (
    <Router>
      <Fragment>
        <ScrollToTop />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path={["/homes/:for", "/homes"]} component={Homes} />
          <Route path="/renters" component={Renters} />
          <Route path="*" component={Error} />
        </Switch>
      </Fragment>
    </Router>
  );
}

export default App;
