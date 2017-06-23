import React from 'react'
import InputField from './InputField'
import api from '../utils/api'

export default class MutualFriends extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            sourceUserId: '',
            targetUserId: '',
            userUid: ''
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onGetId = this.onGetId.bind(this);
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }
    onSubmit(e) {
        e.preventDefault()
        api.getMutualFriends(this.state.sourceUserId, this.state.targetUserId)
    }
    onGetId(e) {
        e.preventDefault();
        api.getUsersInfo(this.state.userUid);
    }
    render () {
        const {sourceUserId, targetUserId, userUid} = this.state
        return (
            <div>
                <form onSubmit={this.onGetId}>
                    <InputField 
                        fieldName='userUid'
                        value={userUid}
                        placeholder='user uid'
                        onChange={this.onChange}
                    />
                    <button>get id</button>
                </form>
                mutual friends!
                <form onSubmit={this.onSubmit}>
                    <InputField 
                        fieldName='sourceUserId'
                        label='Source user'
                        value={sourceUserId}
                        placeHolder='source user id'
                        onChange={this.onChange}
                    />
                    <InputField 
                        fieldName='targetUserId'
                        label='Target user'
                        value={targetUserId}
                        placeHolder='target user id'
                        onChange={this.onChange}
                    />
                    <button>get</button>
                </form>
            </div>
        )
    }
}

// friends.getMutual