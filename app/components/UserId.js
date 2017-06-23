import React from 'react'
import InputField from './InputField'
import api from '../utils/api'

export default class UserId extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            userUid: ''
        }

        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }
    onChange (e) {
        this.setState( {userUid: e.target.value} )
    }
    onSubmit(e) {
        e.preventDefault();
        api.getUsersInfo(this.state.userUid);
    }
    render () {
        const userUid = this.state.userUid;
        return (
            <form onSubmit={this.onSubmit}>
                <InputField 
                    name='user'
                    value={userUid}
                    placeholder='user uid'
                    onChange={this.onChange}
                />
                <button>get</button>
            </form>
        )
    }
}