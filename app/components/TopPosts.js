import React from 'react'
import Loading from './Loading'
import InputField from './InputField'
import api from '../utils/api'

const SelectedGroup = (props) => {
    let groupsDomain = [
        'mudakoff',
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
                    {item.id}
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
            selectedGroup: 'mudakoff',
            posts: null
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
                <form onSubmit={this.onSubmit}>
                    <InputField
                        fieldName='selectedGroup'
                        label='Search group's posts
                        value={this.state.selectedGroup}
                        placeHolder='short domain of group'
                        onChange={this.onChange}
                    />
                    <button onClick={this.getPosts.bind(null, this.state.selectedGroup)}> get </button>
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