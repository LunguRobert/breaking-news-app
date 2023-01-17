import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import NewsPage from "./pages/NewsPage/NewsPage";
import Weather from "./pages/Weather/Weather";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" render={(props) => <Home {...props} />} />
        <Route
          exact
          path="/weather"
          render={(props) => <Weather {...props} />}
        />
        <Route path="/news/:index" component={NewsPage} />
      </Switch>
    </div>
  );
}

export default App;
