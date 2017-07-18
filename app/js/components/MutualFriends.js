import React from 'react'
import InputField from './InputField'
import api from '../utils/api'

const FriendsGrid = (props) => {
    return (
        <div className='friends-container'>
            {props.friends.length === 0 ? <div className='empty-response'>
                                              <img src='app/images/user-deleted.png' />
                                              <p>They don't have mutual friends</p>
                                          </div> 
                                    : null
            }
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
            userId: '',
            error: ''
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
        if(sessionStorage.getItem('accessToken') === null) return this.setState({error: 'You need to follow instruction on home page'})
    
        api.getMutualFriends(this.state.sourceUserId, this.state.targetUserId, sessionStorage.getItem('accessToken'))
            .then((response) => {
                api.getUsersInfo(response.toString(), this.usersParams.toString())
                    .then((resp) => {
                        this.setState({
                            mutualFriendsArr: resp
                        })
                    })
                    .catch((e) => {
                        console.log(e)
                    })
            })
            .catch((e) => {
                console.log(e)
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
            .catch((e) => {
                console.log(e)
            })
    }
    render () {
        const {sourceUserId, targetUserId, userUid} = this.state
        return (
            <div className='mutual-container'>
                <div className="caption">Enter users ids to know their mutual friends</div>
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
                <form onSubmit={this.onGetId} className='form-id'>
                    <InputField 
                        fieldName='userUid'
                        label='If you need user id to use it :'
                        value={userUid}
                        placeHolder='short name'
                        onChange={this.onChange}
                    />
                    <button className='btn'>get id</button>
                    <div className="user-id">
                        { this.state.userId ? <p>user id: {this.state.userId}</p> : null }
                    </div>
                </form>
                {this.state.error ? <div className='error'>{this.state.error}</div> : null}
                {this.state.mutualFriendsArr ? <FriendsGrid friends={this.state.mutualFriendsArr}/> : null }
            </div>
        )
    }
}

// friends.getMutual