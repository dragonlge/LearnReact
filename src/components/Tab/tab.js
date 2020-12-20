import React from 'react'
import { Tabs, Tab, AppBar } from '@material-ui/core'
import About from '../About'
import Contact from '../Contact'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import Test from '../Test'

function MyTab(props) {
  const { match, history } = props
  const { params } = match
  const { page } = params
  console.log('page', page)
  const tabNameToIndex = {
    0: 'about',
    1: 'contact',
  }

  const indexToTabName = {
    about: 0,
    contact: 1,
  }

  const [selectedTab, setSelectedTab] = React.useState(indexToTabName[page])

  const handleChange = (event, newValue) => {
    history.push(`/tab/${tabNameToIndex[newValue]}`)
    setSelectedTab(newValue)
  }

  return (
    <>
      <AppBar position='static'>
        <Tabs value={selectedTab} onChange={handleChange}>
          <Tab label='About' />
          <Tab label='Contact Us' />
        </Tabs>
      </AppBar>
      {selectedTab === 0 && (
        <>
          {/* <About /> */}
          <Switch>   
            <Router>
              <Route path={'/tab/about/'} component={About}></Route>

              <Route path={'/tab/:page/:id'} component={Test}></Route>
            </Router>
          </Switch>
        </>
      )}
      {selectedTab === 1 && <Contact />}
    </>
  )
}

export default MyTab
