import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Nav from './Nav'
import Home from './Home'
import MutualFriends from './MutualFriends'
import NearbyUsers from './NearbyUsers'
import TopPosts from './TopPosts'

export default class App extends React.Component {
    render() {
        return (
            <Router>
                <div>
                <Nav />
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/mutfriends' component={MutualFriends} />
                    <Route path='/nearby' component={NearbyUsers} />
                    <Route path='/posts' component={TopPosts} />
                    <Route render={function(){
                        return <p>page not found</p>
                    }} />
                </Switch>
                </div>
            </Router>
        )
    }
}