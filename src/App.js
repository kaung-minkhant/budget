import './App.css';
import EntryPage from './page/Entry/Entry.page';
import MainPage from './page/Main/Main.page';
import {Switch, Route, Redirect} from 'react-router-dom'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userSagaActions } from './redux/users/users.saga.actions';
import { selectCurrentUser } from './redux/users/user.selector';


function App() {
  const dispatch = useDispatch()
  const user = useSelector(selectCurrentUser)
  useEffect(() => {
    dispatch({type: userSagaActions.checkUser})
  }, [])
  return (
    <div className="App">
      <Switch>
        <Route exact path='/'>{user ? <Redirect to='/main' /> : <EntryPage />}</Route>
        <Route exact path='/main'> {user ? <MainPage /> : <Redirect to='/'/>}</Route>
      </Switch>
    </div>
  );
}

export default App;
