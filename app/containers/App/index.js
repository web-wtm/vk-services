import React, {Fragment} from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Async from 'react-code-splitting'

import Home from '../../containers/Home'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import Page404 from '../../components/404'

const Posts = () => <Async load={import('../Posts')} />
const Photos = () => <Async load={import('../Photos')} />
const Friends = () => <Async load={import('../Friends')} />

export default class App extends React.Component {
    render() {
        return (
            <Fragment>
                <Router>
                    <div className='wrapper'>
                        <Navigation />
                        <Switch>
                            <Route exact path='/' component={Home} />
                            <Route path='/posts' component={Posts} />
                            <Route path='/friends' component={Friends} />
                            <Route path='/photos' component={Photos} />
                            <Route component={Page404} />
                        </Switch>
                    </div>
                </Router>
                <Footer />
            </Fragment>
        )
    }
}