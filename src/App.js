import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import { useDispatch } from 'react-redux';

import CreateItem from './pages/CreateItem';
import Home from './pages/Home';
import ItemDetails from './pages/ItemDetails';
import Items from './pages/Items';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Profile from './pages/Profile';
import Register from './pages/Register';
import UpdateItem from './pages/UpdateItem';

import GlobalLoading from './components/GlobalLoading';
import { login } from './redux/actions/userActionCreators';

function App() {
  const dispatch = useDispatch()
  const token = localStorage.getItem('token')
  const user = JSON.parse(localStorage.getItem('user'))
  if (token && user) {
    dispatch(login(user, token))
  }
  return (
    <>
      <GlobalLoading />
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />
          <Route path='/profile' component={Profile} />
          <Route path='/items' component={Items} />
          <Route path='/create-item' component={CreateItem} />
          <Route path='/update-item/:id' component={UpdateItem} />
          <Route path='/items/:id' component={ItemDetails} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
