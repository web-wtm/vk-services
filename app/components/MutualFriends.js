import React from 'react'
import { connect } from 'react-redux'

import InputField from './InputField'
import api from '../utils/api'
import ScrollToUp from 'react-scroll-up'
import {
    getUserIdRequest,
    getMutualRequest
} from '../main/actions'
// 5956085
// 7490743

const mapStateToProps = (state) => {
    return {
        state: state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getUserId: (uid) => dispatch(getUserIdRequest(uid)),
        getMutualFriends: (params) => dispatch(getMutualRequest(params))
    }
}

const FriendsGrid = (props) => {
    return (
        <div className='friends-container'>
            {props.friends.length === 0 ? <div className='empty-response'>
                                              <div className='user-deleted'></div>
                                              <p>They don't have mutual friends</p>
                                          </div> 
                                    : null
            }
            {props.friends.map((item,index) => {
                return (
                    <a key={index} target='_blank' href={`https://vk.com/${item.screen_name}`} className='item'>
                        {item.photo_200 ?  <img src={item.photo_200} /> : <div className='user-deleted'></div>}
                        <p className='name'>{item.first_name} {item.last_name}</p>
                    </a>
                )
            })}
        </div>
    )
}

class MutualFriends extends React.Component {
    constructor(props) {
        super(props)

        
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onGetId = this.onGetId.bind(this);
        
        this.usersRequestParams = [
            'screen_name',
            'city',
            'country',
            'photo_200'
        ];

        this.params = {
            sourceUserId: 5956085,
            targetUserId: 7490743,
            fields: this.usersRequestParams,
            userToken: sessionStorage.getItem('accessToken')
        };

        this.userUid = '';
        this.error = '';
    }

    onChange(e) {
        this[e.target.name] = e.target.value;
    }

    onSubmit(e) {
        e.preventDefault()
        console.log()
        // if(!this.params.sourceUserId.length || !this.params.targetUserId) return;
        if(this.params.userToken === null) return console.log('You need to follow instruction on home page');

        this.props.getMutualFriends(this.params)
        // api.getMutualFriends(this.state.sourceUserId, this.state.targetUserId, sessionStorage.getItem('accessToken'))
        //     .then((response) => {
        //         api.getUsersInfo(response.toString(), this.usersParams.toString())
        //             .then((resp) => {
        //                 this.setState({
        //                     mutualFriendsArr: resp
        //                 })
        //             })
        //             .catch((e) => {
        //                 console.log(e)
        //             })
        //     })
        //     .catch((e) => {
        //         console.log(e)
        //     })
    }
    onGetId(e) {
        e.preventDefault();
        console.log(this.userUid)
        if(!this.userUid.length) return;
        this.props.getUserId(this.userUid);
    }
    render () {
        return (
            <div className='mutual-container'>
                <ScrollToUp showUnder={160} style={{'zIndex': 1}}>
                    <span className='scroll-up'>UP</span>
                </ScrollToUp>
                <div className="caption">Enter users id to know their mutual friends</div>
                <form onSubmit={this.onSubmit} className='form-mutual'>
                    <InputField 
                        fieldName='sourceUserId'
                        label='Source user :'
                        placeHolder='source user id'
                        onChange={this.onChange}
                    />
                    <InputField 
                        fieldName='targetUserId'
                        label='Target user :'
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
                        label='If you need user id use it :'
                        placeHolder='short name'
                        onChange={this.onChange}
                    />
                    <button className='btn'>get id</button>
                    <div className="user-id">
                        { this.props.state.userId ? <p>user id: <span> {this.props.state.userId} </span> </p> : null }
                    </div>
                    {this.error ? <div className='error'> {this.error} </div> : null}
                    {/* {this.props.state.error ? <div className='error'>{this.props.state.error}</div> : null} */}
                </form>
                {/* {this.state.mutualFriendsArr ? <FriendsGrid friends={this.state.mutualFriendsArr}/> : null } */}
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MutualFriends)