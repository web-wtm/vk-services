import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import PostsStyled from './styled'
import ScrollUp from '../../components/ScrollUp'
import InputField from '../../components/InputField'
import SideBar from '../../components/SideBar'
import GroupsNav from '../../components/GroupsNav'
import PostsGrid from '../../components/PostsGrid'
import Loading from '../../components/Loading'
import { clearPosts, setSelectedGroup, getPostsRequest } from './action'
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
        getPosts: (path) => dispatch(getPostsRequest(path)),
        setSelectedGroup: (path) => dispatch(setSelectedGroup(path)),
        clearPosts: () => dispatch(clearPosts())
    }
}

class Posts extends React.Component {
    constructor(props) {
        super(props)
    }
    
    componentDidMount() {
        this.props.getPosts(this.props.state.selectedGroup)
    }
    
    getPosts(path) {
        if(!path.length) return;
        
        this.props.clearPosts();
        this.props.getPosts(path);
    }
    
    onChangeSelectedGroup = (e) => {
        this.props.setSelectedGroup(e.target.value);
    }
    
    render () {
        return (
            <Fragment>
                {this.props.state.loading && <Loading /> }
                <PostsStyled>
                    <ScrollUp />
                    <SideBar>
                        <GroupsNav 
                            onSelect={this.props.getPosts} 
                            inputValue={this.props.state.selectedGroup}
                            onChangeInput={this.onChangeSelectedGroup}
                            selectedGroup={this.props.state.selectedGroup}
                            onClickBtn={this.getPosts.bind(this, this.props.state.selectedGroup)}
                        />
                    </SideBar>
                    {this.props.state.posts && <PostsGrid path={this.props.state.selectedGroup} posts={this.props.state.posts}/>}
                    {this.props.state.error && <div className="error-msg">Smth went wrong</div>}
                </PostsStyled>
            </Fragment>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts)