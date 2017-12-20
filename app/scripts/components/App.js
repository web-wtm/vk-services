import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Async from 'react-code-splitting'

import Navigation from './Navigation'
import Footer from './Footer'
import Home from './Home'
import Page404 from '-!babel-loader!svg-react-loader?name=Page404!../../assets/images/404.svg'

const TopPosts = () => <Async load={import('./TopPosts')} />
const PhotosSearch = () => <Async load={import('./PhotosSearch')} />
const MutualFriends = () => <Async load={import('./MutualFriends')} />

export default class App extends React.Component {
    render() {
        return (
            <Router>
                <div className='wrapper'>
                    <Navigation />
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route path='/posts' component={TopPosts} />
                        <Route path='/mutfriends' component={MutualFriends} />
                        <Route path='/photos-search' component={PhotosSearch} />
                        <Route render={function(){
                            return <Page404 style={{width: '100%', marginTop: '20px'}} />
                                }} />
                    </Switch>
                </div>
            </Router>
        )
    }
}