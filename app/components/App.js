import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Nav from './Nav'
import Home from './Home'
import TopPosts from './TopPosts'
import PhotosSearch from './PhotosSearch'
import MutualFriends from './MutualFriends'

export default class App extends React.Component {
    render() {
        return (
            <Router>
                <div>
                <Nav />
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/posts' component={TopPosts} />
                    <Route path='/mutfriends' component={MutualFriends} />
                    <Route path='/photos-search' component={PhotosSearch} />
                    <Route render={function(){
                        return <p>page not found</p>
                    }} />
                </Switch>
                </div>
            </Router>
        )
    }
}