import React from 'react'
import { connect } from 'react-redux'
import { parse } from 'query-string'
import { setLogged } from './action'
import { Container, AlreadyAuth } from './styled'
import Authorization from '../../components/Authorization'
import Video from '../../components/Video'
import { mapStateToProps } from '../../utils/helpers'

const mapDispatchToProps = (dispatch) => {
    return {
        setLoggedStatus: (status) => dispatch(setLogged(status))
    }
}

class Home extends React.Component {
    constructor() {
        super()
    }

    componentWillMount() {
        if(!sessionStorage.getItem('accessToken')) {
            this.props.setLoggedStatus(false)
        }
    }

    getToken = () => {
        let querys = parse(this.props.location.hash);
        
        if (querys.access_token) {
            sessionStorage.setItem('accessToken', querys.access_token);
            this.props.setLoggedStatus(true)
            this.props.history.push("", document.title, window.location.pathname + window.location.search);
        } 
    }

    render() {
        return (
            <Container>
                {this.props.state.isLogged ? 
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