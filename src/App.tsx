import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { loadNextAPOD } from './nasa/nasa';
import { getFavorites, saveFavorite } from './nasa/storage';
import { Main } from './pages/Main';
import { Saved } from './pages/Saved';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Main saveFavorite={saveFavorite} nextImage={loadNextAPOD} />
        </Route>
        <Route path="/zapisane">
          <Saved loadSavedPictures={getFavorites} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
