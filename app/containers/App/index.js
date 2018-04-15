import React, {Fragment} from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Async from 'react-code-splitting'

import './global-styles'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Home from '../Home'
import Page404 from '-!babel-loader!svg-react-loader?name=Page404!../../assets/images/404.svg'

const Posts = () => <Async load={import('../Posts')} />
const Photos = () => <Async load={import('../Photos')} />
const Friends = () => <Async load={import('../Friends')} />

export default class App extends React.Component {
    render() {
        return (
            <Fragment>
                <Router>
                    <div>
                        <Header />
                        <Switch>
                            <Route exact path='/' component={Home} />
                            <Route path='/posts' component={Posts} />
                            <Route path='/friends' component={Friends} />
                            <Route path='/photos' component={Photos} />
                            <Route render={function(){
                                return <Page404 style={{width: '100%', marginTop: '20px'}} />
                                    }} />
                        </Switch>
                    </div>
                </Router>
                <Footer />
            </Fragment>
        )
    }
}