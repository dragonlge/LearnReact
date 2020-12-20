import './App.css'
import { Route, Switch } from 'react-router-dom'
import Header from './components/Amazon/header'
import Room from './components/room'
import ProductScreen from './components/Amazon/Screen/ProductScreen'
import HomeScreen from './components/Amazon/Screen/HomeScreen'
import Tab from './components/Tab/tab'
import MyTab from './components/Tab/tab'
function App() {
  return (
    <div className='App'>
      <div className='grid-container'>
        <Header />
        <main>
          <div className='row center'>
            <Switch>
              <Route exact path='/room'>
                <Room />
              </Route>
              <Route path='/home' component={HomeScreen}></Route>
              <Route
                exact
                path='/tab/:page?'
                render={(props) => <MyTab {...props} />}
              />
              <Route path='/product/:id' component={ProductScreen}></Route>
            </Switch>
          </div>
        </main>
        <footer className='row center'>All right reserved</footer>
      </div>
    </div>
  )
}

export default App
