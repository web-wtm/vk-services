import React from 'react'
import SimpleMap from './SimpleMap'
import api from '../utils/api'

const PhotosGrid = (props) => {
    return (
        <div className='photos-container'>
            {props.photos.map((item, index) => {
                return (
                    <div key={index} className='item'>
                        <img src={item.photo_604} />
                        <div className='photo-owner'>{item.owner_id}</div>
                    </div>
                )
            })}
        </div>
    )
}
const SearchPriev = () => {
    return (
        <div>Click to search</div>
    )
}

export default class PhotosSearch extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            photos: []
        }

        this.onClick = this.onClick.bind(this);
    }
    onClick (obj){
        console.log(obj.lat, obj.lng)
        api.photoSearch(obj.lat, obj.lng, 100)
            .then((response) => {
                this.setState({
                    photos: response
                })
                console.log(this.state.photos);
            })
    } 
    render () {
        return (
            <div>
                Photos
                <div style={{width: '100%', height: '300px'}}>
                    <SimpleMap onClick={(this.onClick)} />
                </div>
                {!this.state.photos ? <SearchPriev /> : <PhotosGrid photos={this.state.photos} />}
            </div>
        )
    }
}