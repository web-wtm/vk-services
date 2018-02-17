import React from 'react'
import ScrollToUp from 'react-scroll-up'
import { connect } from 'react-redux'

import Loading from '../Loading'
import InputField from '../InputField'
import { clearPosts, setSelectedGroup, getPostsRequest } from './action'
import { mapStateToProps } from '../../utils/helpers'

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
            {groupsDomain.map((item) => {
                return (
                    <li key={item.domain} 
                        style={item.domain === props.selectedGroup ? { background: '#47b475'} : null} 
                        onClick={props.onSelect.bind(null, item.domain)}
                    >
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
                props.posts.map((item) => {
                    return (
                        <a key={item.id} className='item' target='_blank' href={`https://vk.com/${props.domain}?w=wall${item.from_id}_${item.id}`} title=''>
                            {   
                                item.attachments && 
                                item.attachments.map((att) => {
                                    if (att.doc && att.doc.ext == 'gif') return <img key={att[att.type].id} src={att.doc.url} />
                                    
                                    switch(att.type) {
                                        case 'photo': 
                                            return <img key={att[att.type].id} src={att.photo.photo_604} />
                                            break;
                                        case 'audio': 
                                            return <div key={att[att.type].id} className='audio-track'>{att.audio.artist} - {att.audio.title}</div>
                                            break;
                                        case 'video':
                                            return <img key={att[att.type].id} src={att.video.photo_320} />
                                            break;
                                        default:
                                            return;
                                    }
                                })
                            }
                            <div className='info-container'>
                                {item.text && <div className='post-text'>{item.text}</div>}
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
    }
    
    componentDidMount() {
        this.props.getPosts(this.props.state.selectedGroup)
    }
    
    getPosts(domain) {
        if(!domain.length) return;
        
        this.props.clearPosts();
        this.props.getPosts(domain);
    }

    onSubmit = (e) => {
        e.preventDefault()
    }
    
    onChangeSelectedGroup = (e) => {
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
                    this.props.state.posts && <PostsGrid domain={this.props.state.selectedGroup} posts={this.props.state.posts}/> 
                }
                {this.props.state.error && <div className="error-msg">Smth went wrong</div>}
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TopPosts)