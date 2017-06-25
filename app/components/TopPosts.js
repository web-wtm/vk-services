import React from 'react'
import api from '../utils/api'

export default class TopPosts extends React.Component {
    constructor(props) {
        super(props)

        this.onClick = this.onClick.bind(this)
    }
    onClick() {
        api.getTopPosts('mudakoff')
    }
    render () {
        return (
            <div>
                <button onClick={this.onClick}>get </button>
            </div>
        )
    }
}

// wall.get