import React from 'react'
import { connect } from 'react-redux'
import { parse } from 'query-string'
import app from '../../actions/app'
import { Container, AlreadyAuth } from './styled'
import Authorization from '../../components/Authorization'
import Video from '../../components/Video'
import { mapStateToProps } from '../../utils/helpers'

const mapDispatchToProps = (dispatch) => {
    return {
        logIn: () => dispatch(app.logIn()),
        logOut: () => dispatch(app.logOut())
    }
}

class Home extends React.Component {
    constructor() {
        super()
    }

    componentDidMount() {
        if (sessionStorage.getItem('accessToken')) {
            this.props.logIn();
        } else {
            this.props.logOut();
        }
    }

    getToken = () => {
        let querys = parse(this.props.location.hash);
        
        if (querys.access_token) {
            sessionStorage.setItem('accessToken', querys.access_token);
            this.props.logIn();
            this.props.history.push("", document.title, window.location.pathname + window.location.search);
        } 
    }

    render() {
        return (
            <Container>
                {this.props.state.app.isLogin ? 
                    <AlreadyAuth>
                        You have already authorized and can use all services <span>&#10003;</span>
                    </AlreadyAuth>
                    : 
                    <Authorization onClick={this.getToken} location={this.props.location} />
                }
                <Video /> 
            </Container>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)