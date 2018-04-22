import React, {Fragment} from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Async from 'react-code-splitting'
import './global-styles'
import Wrapper from '../../components/Wrapper'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Page404 from '../../components/404'
import Home from '../Home'

const Posts = () => <Async load={import('../Posts')} />
const Photos = () => <Async load={import('../Photos')} />
const Friends = () => <Async load={import('../Friends')} />

export default class App extends React.Component {
    render() {
        return (
            <Fragment>
                <Router>
                    <Wrapper>
                        <Header />
                        <Switch>
                            <Route exact path='/' component={Home} />
                            <Route path='/posts' component={Posts} />
                            <Route path='/friends' component={Friends} />
                            <Route path='/photos' component={Photos} />
                        <Route component={Page404}/>
                        </Switch>
                    </Wrapper>
                </Router>
                <Footer />
            </Fragment>
        )
    }
}