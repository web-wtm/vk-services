import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { PostsStyled, GroupSearch, ButtonSearch } from './styled'
import ScrollUp from '../../components/ScrollUp'
import InputField from '../../components/InputField'
import SideBar from '../../components/SideBar'
import GroupsNav from '../../components/GroupsNav'
import PostsGrid from '../../components/PostsGrid'
import Loading from '../../components/Loading'
import api from '../../actions/api'
import { sortedPosts } from './selectors'

const mapStateToProps = (state) => {
    return {
        state : {
            posts: sortedPosts(state),
            ...state
        }
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getPosts: ({ domain, count}) => dispatch(api.getPosts({ domain, count}))
    }
}

class Posts extends React.Component {
    constructor(props) {
        super(props)

        this.searchGroupDomain = '';
        this.params = {
            domain: this.props.state.posts.selectedGroup,
            count: 100
        };
    }
    
    componentDidMount() {
        this.props.getPosts(this.params)
    }
    
    onSearcGroup = () => {
        if(!this.searchGroupDomain.length) return;
        this.params.domain = this.searchGroupDomain
        this.props.getPosts(this.params);
    }

    onChangeInput = (e) => {
        this[e.target.name] = e.target.value;
    }
    
    render () {
        return (
            <Fragment>
                {this.props.state.posts.isLoading && <Loading /> }
                <PostsStyled>
                    <ScrollUp />
                    <SideBar>
                        <GroupsNav 
                            onSelectGroup={this.props.getPosts}
                            params={this.params} 
                            selectedGroup={this.props.state.posts.selectedGroup}
                        />
                        <GroupSearch>
                            <InputField
                                fieldName='searchGroupDomain'
                                placeHolder="name of group"
                                onChange={this.onChangeInput}
                            />
                            <ButtonSearch onClick={this.onSearcGroup}>Search</ButtonSearch>
                        </GroupSearch>
                    </SideBar>
                    {this.props.state.posts.groupPosts && 
                    <PostsGrid domain={this.props.state.posts.selectedGroup} posts={this.props.state.posts.groupPosts.items}/>}
                    {this.props.state.error && <div className="error-msg">Smth went wrong</div>}
                </PostsStyled>
            </Fragment>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts)