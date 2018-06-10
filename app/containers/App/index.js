import React, {Fragment} from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import loadable from 'loadable-components'
import './global-styles'
import Wrapper from '../../components/Wrapper'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Page404 from '../../components/404'
import Home from '../Home'

const Posts = loadable(() => import('../Posts'))
const Photos = loadable(() => import('../Photos'))
const Friends = loadable(() => import('../Friends'))

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