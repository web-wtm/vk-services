import React from 'react'
import Loading from './Loading'
import InputField from './InputField'
import api from '../utils/api'

const SelectedGroup = (props) => {
    let groupsDomain = [
        'mem1001',
        'another_photos',
        'lhack',
        'ilikes'
    ];
    
    return (
        <ul className='tool-bar'>
            {groupsDomain.map((item, index) => {
                return (
                    <li key={index}>
                        <button 
                            onClick={props.onSelect.bind(null, item)}
                        >
                            {item}
                        </button>
                    </li>
                )
            })}
        </ul>
    )
}
const PostsGrid = (props) => {
    return (
        <ul>
        {props.posts.map((item, index) => {
            return (
                <li key={index}>
                    <img src={item.attachments[0].photo.photo_604} />
                </li>
            )
        })}
        </ul>
    )
}

export default class TopPosts extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            selectedGroup: 'mem1001',
            posts: null
        }

        this.getPosts = this.getPosts.bind(this);
        this.onChange = this.onChange.bind(this);
    }
    componentDidMount() {
        this.getPosts(this.state.selectedGroup);
    }
    getPosts(domain) {

        this.setState(() => {
            return {
                selectedGroup: domain,
                posts: null
            }
        });
        api.getTopPosts(domain)
            .then((posts) => {
                this.setState(() => {
                    return {
                        posts: posts
                    }
                })
            })
    }
    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }
    
    render () {
        return (
            <div>
                <SelectedGroup onSelect={this.getPosts}/>
                <form onSubmit={this.getPosts}>
                    <InputField
                        fieldName='selectedGroup'
                        label='Search group's posts
                        value={this.state.selectedGroup}
                        placeHolder='short domain of group'
                        onChange={this.onChange}
                    />
                    <button> get </button>
                </form>
                {!this.state.posts ? 
                    <Loading text="Downloading" /> : 
                    <PostsGrid posts={this.state.posts}/>
                }
                
            </div>
        )
    }
}

// wall.get