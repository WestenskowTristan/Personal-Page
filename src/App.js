import React, { lazy, Suspense } from "react";
import AboutPage from "./pages/AboutPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const ContactPage = lazy(() => import("./pages/ContactPage"));
const PortfolioPage = lazy(() => import("./pages/PortfolioPage"));
const ResumePage = lazy(() => import("./pages/ResumePage"));

const App = () => {
  return (
    <Router>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Switch>
          <Route exact path="/" component={AboutPage} />
          <Route exact path="/contact" component={ContactPage} />
          <Route exact path="/portfolio" component={PortfolioPage} />
          <Route exact path="/resume" component={ResumePage} />
        </Switch>
      </Suspense>
    </Router>
  );
};

export default App;
