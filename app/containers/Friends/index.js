import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import ScrollUp from '../../components/ScrollUp'
import Caption from '../../components/Caption'
import Button from '../../components/Button'
import { ButtonSearch, FriendsSearchInfo } from './styled'
import InputField from '../../components/InputField'
import SideBar from '../../components/SideBar'
import FriendsGrid from '../../components/FriendsGrid'
import { mapStateToProps } from '../../utils/helpers'

import api from '../../actions/api'

const mapDispatchToProps = (dispatch) => {
    return {
        getUserId: (user_ids) => dispatch(api.getUserId(user_ids)),
        getMutualFriends: ({ source_uid, target_uid, access_token }) => dispatch(api.getMutualFriends({ source_uid, target_uid, access_token }))
    }
}

class Friends extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
        
        this.params = {
            source_uid: '',
            target_uid: '',
            user_ids: '',
            access_token: sessionStorage.getItem('accessToken')
        };
    }

    static getDerivedStateFromProps(props, state) {
        if (props.state.friends.mutualFriendsId) {
            props.getUserId(props.state.friends.mutualFriendsId)
            props.state.friends.mutualFriendsId = null
        }

        return props
    }

    onChangeInput = (e) => {
        this.params[e.target.name] = e.target.value;
    }

    checkMutualFriends = (e) => {
        e.preventDefault()
        if(!this.params.source_uid || !this.params.target_uid) return;
        if(this.params.access_token === null) throw Error('You need to follow instruction on home page');

        this.props.getMutualFriends(this.params)
    }
    
    getUserId = (e) => {
        e.preventDefault();
        if(!this.params.user_ids.length) return;
        this.props.getUserId(this.params.user_ids);
    }

    render () {
        return (
            <Fragment>
                <ScrollUp />
                <FriendsSearchInfo>Enter users id to know their mutual friends (you can find out user id below)</FriendsSearchInfo>
                <SideBar>
                <InputField 
                    fieldName='source_uid'
                    label='Source user :'
                    placeHolder='source user id'
                    onChange={this.onChangeInput}
                />
                <InputField 
                    fieldName='target_uid'
                    label='Target user :'
                    placeHolder='target user id'
                    onChange={this.onChangeInput}
                />
                <ButtonSearch onClick={this.checkMutualFriends}>check</ButtonSearch>
                <InputField 
                    fieldName='user_ids'
                    label='If you need user id use it :'
                    placeHolder='short name'
                    onChange={this.onChangeInput}
                />
                <ButtonSearch onClick={this.getUserId}>check id</ButtonSearch>
                </SideBar>
                {this.props.state.friends.userIds && <FriendsGrid friends={this.props.state.friends.userIds}/>}
                {this.props.state.error && <div> some problem </div>}
            </Fragment>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Friends)