import React from 'react'
import Loading from './Loading'
import InputField from './InputField'
import api from '../utils/api'
// import ScrollToUp from 'react-scroll-up'

// TODO
// nice style


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
            {props.posts.map((item, index) => {
                    return (
                        <a key={index} className='item' target='_blank' href={`https://vk.com/${props.domain}?w=wall${item.from_id}_${item.id}`} title=''>
                            {
                                item.attachments.map((att, ind) => {
                                    if(att.type === 'photo') return <img key={ind} src={att.photo.photo_604} />
                                    else if(att.type === 'audio') return <div key={ind} className='audio-track'>{att.audio.artist} - {att.audio.title}</div>
                                    else if(att.type === 'poll') return 
                                    else if(att.doc.ext == 'gif') return <img key={ind} src={att.doc.url} />
                                })
                            }
                            <div className='info-container'>
                                {item.text ? <div>{item.text}</div> : null}
                                <p>{item.likes.count} <i className='icon-like'></i></p>
                                <p>{item.reposts.count} <i className='icon-repo'></i></p>
                            </div>
                            <div className="item-hover">Click to open in vk</div>
                        </a>
                    )
            })}
        </div>
    )
}

export default class TopPosts extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedGroup: 'fuck_humor',
            searchGroup: '',
            posts: null,
            error: false
        }

        this.getPosts = this.getPosts.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    componentDidMount() {
        this.getPosts(this.state.selectedGroup);
    }
    onSubmit(e) {
        e.preventDefault()
    }
    sortByLikes(arr) {
        arr.sort((a,b) => {
            return a.likes.count === b.likes.count ? 0 : a.likes.count < b.likes.count ? 1 : -1;
        })
    }
    getPosts(domain) {
        if(!domain.length) return;

        this.setState({
            selectedGroup: domain,
            posts: null
        });

        api.getTopPosts(domain)
            .then((posts) => {
                if(posts.error) return this.setState({error: true})
                    
                this.sortByLikes(posts.response.items);
                let sortedPosts = posts.response.items.slice(0,20);

                this.setState({
                    posts: sortedPosts
                })
            })
    }
    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }
    
    render () {
        return (
            <div className='top-posts'>
                {/* <ScrollToUp showUnder={160}>
                    <span className='scroll-up'>UP</span>
                </ScrollToUp> */}
                <SelectedGroup onSelect={this.getPosts} selectedGroup={this.state.selectedGroup} />
                <div className="caption">There are last top posts of group to sort by likes</div>
                <form onSubmit={this.onSubmit}>
                    <InputField
                        fieldName='searchGroup'
                        label='Search group'
                        value={this.state.searchGroup}
                        placeHolder='short name of group'
                        onChange={this.onChange}
                    />
                    <button className='btn' onClick={this.getPosts.bind(null, this.state.searchGroup)}> get </button>
                </form>
                {!this.state.posts ? 
                    <Loading /> : 
                    <PostsGrid domain={this.state.selectedGroup} posts={this.state.posts}/>
                }
                {this.state.error ? <div>Smth wrong with short name of group </div> : null}
                
            </div>
        )
    }
}

// wall.get