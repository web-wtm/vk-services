import React from 'react'
import ScrollToUp from 'react-scroll-up'
import { connect } from 'react-redux'

import Loading from './Loading'
import InputField from './InputField'
import { clearPosts } from '../actions/clearPosts'
import { setSelectedGroup } from '../actions/selectedGroup'
import { getPostsRequest } from '../actions/topPosts'
import { mapStateToProps } from '../helpers'

const mapDispatchToProps = (dispatch) => {
    return {
        getPosts: (domain) => dispatch(getPostsRequest(domain)),
        setSelectedGroup: (domain) => dispatch(setSelectedGroup(domain)),
        clearPosts: () => dispatch(clearPosts())
    }
}

const SelectedGroup = (props) => {
    let groupsDomain = [
        {
            name: 'ЁП',
            photoSrc: 'https://pp.userapi.com/c841427/v841427388/97b1/_B5iRijVxDE.jpg',
            domain: 'fuck_humor'
        },
        {
            name: '#ябсъездил',
            photoSrc: 'https://pp.userapi.com/c624331/v624331463/395fa/HyoRKKxp5v8.jpg',
            domain: 'idtravel'
        },
        {
            name: 'Смейся до слёз :D',
            photoSrc: 'https://cs7050.userapi.com/c638330/v638330437/23f09/TX1xbrk6FHs.jpg',
            domain: 'ifun'
        },
        {
            name: 'Четкие Приколы',
            photoSrc: 'https://pp.userapi.com/c639816/v639816345/365b9/_elqC5XnXk8.jpg',
            domain: 'ilikes'
        }
    ];
    
    return (
        <ul className='tool-bar'>
            {groupsDomain.map((item, index) => {
                return (
                    <li key={index} style={ item.domain === props.selectedGroup ? { background: '#47b475'} : null} onClick={props.onSelect.bind(null, item.domain)}>
                        <img src={item.photoSrc} />
                            {item.name}
                    </li>
                )
            })}
        </ul>
    )
}

const PostsGrid = (props) => {
    return (
        <div className='posts-contaier'>
            {
                props.posts.map((item, index) => {
                    return (
                        <a key={index} className='item' target='_blank' href={`https://vk.com/${props.domain}?w=wall${item.from_id}_${item.id}`} title=''>
                            {   
                                // TODO
                                item.attachments ? 
                                item.attachments.map((att, ind) => {
                                    if (att.type === 'photo') return <img key={ind} src={att.photo.photo_604} />
                                    else if (att.type === 'audio') return <div key={ind} className='audio-track'>{att.audio.artist} - {att.audio.title}</div>
                                    else if (att.type === 'video') return <img key={ind} src={att.video.photo_320} />
                                    else if (att.type === 'poll') return
                                    else if (att.type === 'page') return 
                                    else if (att.type === 'link') return 
                                    else if (att.doc.ext == 'gif') return <img key={ind} src={att.doc.url} />
                                    else return
                                })
                                :
                                null
                            }
                            <div className='info-container'>
                                {item.text ? <div className='post-text'>{item.text}</div> : null}
                                <p>{item.likes.count} <i className='icon-like'></i></p>
                                <p>{item.reposts.count} <i className='icon-repo'></i></p>
                            </div>
                            <div className="item-hover">Click to open in vk</div>
                        </a>
                    )
                })
            }
        </div>
    )
}

class TopPosts extends React.Component {
    constructor(props) {
        super(props)

        this.onChangeSelectedGroup = this.onChangeSelectedGroup.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    
    componentDidMount() {
        this.props.getPosts(this.props.state.selectedGroup)
    }
    
    onSubmit(e) {
        e.preventDefault()
    }
    
    getPosts(domain) {
        if(!domain.length) return;
        
        this.props.clearPosts();
        this.props.getPosts(domain);
    }

    onChangeSelectedGroup(e) {
        this.props.setSelectedGroup(e.target.value);
    }
    
    render () {
        return (
            <div className='top-posts'>
                <ScrollToUp showUnder={160} style={{'zIndex': 1}}>
                    <span className='scroll-up'>UP</span>
                </ScrollToUp>
                <SelectedGroup onSelect={this.props.getPosts} selectedGroup={this.props.state.selectedGroup} />
                <div className="caption">There are last top posts of group to sort by likes</div>
                <form onSubmit={this.onSubmit}>
                    <InputField
                        fieldName='searchGroup'
                        label='Search group'
                        value={this.props.state.selectedGroup}
                        placeHolder='short name of group'
                        onChange={this.onChangeSelectedGroup}
                    />
                    <button className='btn' onClick={this.getPosts.bind(this, this.props.state.selectedGroup)}>get</button>
                </form>
                {
                    this.props.state.loading ? <Loading /> 
                    : 
                    this.props.state.posts ? <PostsGrid domain={this.props.state.selectedGroup} posts={this.props.state.posts}/> : null
                }
                { this.props.state.error ? <div>Smth wrong witht group's name</div> : null }
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TopPosts)