import React from 'react'
import InputField from './InputField'
import api from '../utils/api'

export default class MutualFriends extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            sourceUserId: '',
            targetUserId: ''
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onSubmit(e) {
        e.preventDefault()
        api.getMutualFriends(this.state.sourceUserId, this.state.targetUserId)
    }
    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }
    render () {
        const {sourceUserId, targetUserId} = this.state
        return (
            <div>
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