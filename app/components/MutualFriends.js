import React from 'react'
import InputField from './InputField'
import api from '../utils/api'

const FriendsGrid = (props) => {
    return (
                <div className='friends-container'>
                    {props.friends.map((item,index) => {
                        return (
                            <a key={index} href={`https://vk.com/${item.screen_name}`}>
                                <img src={item.photo_200} />
                                <p>{item.first_name}</p>
                                <p>{item.last_name}</p>
                            </a>
                        )
                    })}
                </div>
            )
}

export default class MutualFriends extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            sourceUserId: '',
            targetUserId: '',
            mutualFriendsArr: null,
            userUid: '',
            userId: ''
        };
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onGetId = this.onGetId.bind(this);

        this.usersParams = [
            'screen_name',
            'city',
            'country',
            'photo_200'
        ];
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }
    onSubmit(e) {
        e.preventDefault()
        api.getMutualFriends(this.state.sourceUserId, this.state.targetUserId, localStorage.getItem('accessToken'))
            .then((response) => {
                api.getUsersInfo(response.toString(), this.usersParams.toString())
                    .then((resp) => {
                        this.setState({
                            mutualFriendsArr: resp
                        })
                    })
            })
    }
    onGetId(e) {
        e.preventDefault();
        api.getUsersInfo(this.state.userUid)
            .then((response) => {
                this.setState({
                    userId : response[0].id
                })
            })
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
                { this.state.userId ? <p>{this.state.userId}</p> : null }
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
                {this.state.mutualFriendsArr ? <FriendsGrid friends={this.state.mutualFriendsArr}/> : null}
            </div>
        )
    }
}

// friends.getMutual