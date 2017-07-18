import React from 'react'
import InputField from './InputField'
import api from '../utils/api'

const FriendsGrid = (props) => {
    return (
        <div className='friends-container'>
            {props.friends.map((item,index) => {
                return (
                    <a key={index} target='_blank' href={`https://vk.com/${item.screen_name}`} className='item'>
                        <img src={item.photo_200 ? item.photo_200 : 'app/images/user-deleted.png'} />
                        <p className='name'>{item.first_name} {item.last_name}</p>
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
            sourceUserId: '7490743',
            targetUserId: '5956085',
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
        if(!this.state.sourceUserId.length || !this.state.targetUserId) return;
    
        api.getMutualFriends(this.state.sourceUserId, this.state.targetUserId, localStorage.getItem('accessToken'))
            .then((response) => {
                api.getUsersInfo(response.toString(), this.usersParams.toString())
                    .then((resp) => {
                        console.log(resp)
                        this.setState({
                            mutualFriendsArr: resp
                        })
                    })
            })
    }
    onGetId(e) {
        e.preventDefault();
        if(!this.state.userUid.length) return;

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
            <div className='mutual-container'>
                <div className="caption">Enter users ids to know their mutual friends</div>
                <form onSubmit={this.onGetId} className='form-id'>
                    <InputField 
                        fieldName='userUid'
                        label='To get user id enter his short name :'
                        value={userUid}
                        placeHolder='short name'
                        onChange={this.onChange}
                    />
                    <button className='btn'>get id</button>
                    <div className="user-id">
                        { this.state.userId ? <p>user id: {this.state.userId}</p> : null }
                    </div>
                </form>
                <form onSubmit={this.onSubmit} className='form-mutual'>
                    <InputField 
                        fieldName='sourceUserId'
                        label='Source user :'
                        value={sourceUserId}
                        placeHolder='source user id'
                        onChange={this.onChange}
                    />
                    <InputField 
                        fieldName='targetUserId'
                        label='Target user :'
                        value={targetUserId}
                        placeHolder='target user id'
                        onChange={this.onChange}
                    />
                    <div className="btn-container">
                        <button className='btn'>show mutual</button>
                    </div>
                </form>
                {this.state.mutualFriendsArr ? <FriendsGrid friends={this.state.mutualFriendsArr}/> : null}
            </div>
        )
    }
}

// friends.getMutual