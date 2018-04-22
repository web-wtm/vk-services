import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import ScrollUp from '../../components/ScrollUp'
import Caption from '../../components/Caption'
import Button from '../../components/Button'
import { ButtonSearch } from './styled'
import InputField from '../../components/InputField'
import SideBar from '../../components/SideBar'
import FriendsGrid from '../../components/FriendsGrid'
import { getUserIdRequest, getMutualRequest } from './action'
import { mapStateToProps } from '../../utils/helpers'

const mapDispatchToProps = (dispatch) => {
    return {
        getId: (uid) => dispatch(getUserIdRequest(uid)),
        getMutualFriends: (params) => dispatch(getMutualRequest(params))
    }
}

class Friends extends React.Component {
    constructor(props) {
        super(props)
        
        this.usersRequestParams = [
            'screen_name',
            'city',
            'country',
            'photo_200'
        ];

        this.params = {
            sourceUserId: null,
            targetUserId: null,
            fields: this.usersRequestParams,
            userToken: sessionStorage.getItem('accessToken'),
            userUid: ''
        };
    }

    onChangeInput = (e) => {
        this.params[e.target.name] = e.target.value;
    }

    checkMutualFriends = (e) => {
        e.preventDefault()
        if(!this.params.sourceUserId || !this.params.targetUserId) return;
        if(this.params.userToken === null) return console.log('You need to follow instruction on home page');

        this.props.getMutualFriends(this.params)
    }
    
    getUserId = (e) => {
        e.preventDefault();
        if(!this.params.userUid.length) return;

        this.props.getId(this.params.userUid);
    }

    render () {
        return (
            <Fragment>
                <ScrollUp />
                <Caption>Enter users id to know their mutual friends</Caption>
                <SideBar>
                <InputField 
                    fieldName='sourceUserId'
                    label='Source user :'
                    placeHolder='source user id'
                    onChange={this.onChangeInput}
                />
                <InputField 
                    fieldName='targetUserId'
                    label='Target user :'
                    placeHolder='target user id'
                    onChange={this.onChangeInput}
                />
                <ButtonSearch onClick={this.checkMutualFriends}>check</ButtonSearch>
                <InputField 
                    fieldName='userUid'
                    label='If you need user id use it :'
                    placeHolder='short name'
                    onChange={this.onChangeInput}
                />
                <ButtonSearch onClick={this.getUserId}>check id</ButtonSearch>
                <div className="user-id">
                    { this.props.state.userId && <p>user id: <span> {this.props.state.userId} </span> </p>}
                </div>
                </SideBar>
                {this.props.state.mutualFriends && <FriendsGrid friends={this.props.state.mutualFriends}/>}
                {this.props.state.error && <div> some problem </div>}
            </Fragment>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Friends)