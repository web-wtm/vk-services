import React from 'react'
import PropTypes from 'prop-types'

var styles = {
    content: {
        textAlign: 'center',
        fontSize: '35px'
    }
}

class Loading extends React.Component {
    render() {
        return (
            <div style={styles.content}>
                <img src='app/images/spinner.gif' />
            </div>
        )
    }
} 

module.exports = Loading;