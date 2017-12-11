import React from 'react'
import GoogleMap from './GoogleMap'
import { connect } from 'react-redux'
import ScrollToUp from 'react-scroll-up'

import Select from './Select'
import { getPhotosRequest } from '../actions/getPhotos'
import { setSearchRadius } from '../actions/setSearchRadius'
import { mapStateToProps } from '../helpers'


const mapDispatchToProps = (dispatch) => {
    return {
        getPhotos: (params) => dispatch(getPhotosRequest(params)),
        setRadius: (radius) => dispatch(setSearchRadius(radius))
    }
}

const PhotosGrid = (props) => {
    return (
        <div className='photos-container'>            
            {   props.photos.length ?
                props.photos.map((item, index) => {
                    return (
                        <a key={index} className='item' target='_blank' href={`https://vk.com/id${item.owner_id}`} title='open'>
                            <img src={item.photo_604} />
                            <div className="item-hover">Click to open in vk</div>
                        </a>
                    )
                })
                :
                <div>No photos in search area, you can try with bigger radius</div>
            }
        </div>
    )
}

class PhotosSearch extends React.Component {
    constructor(props) {
        super(props)
        
        this.radiusList = [10, 100, 600];
        this.requestParams = {
            lat: 50.553613,
            lng: 30.516843,
            selectedRadius: this.props.state.photoSearchRadius
        };
        this.onSelect = this.onSelect.bind(this);
        this.onClick = this.onClick.bind(this);
    }

    componentDidMount() {
        this.props.getPhotos(this.requestParams);
    }

    onSelect(e) {
        this.requestParams.selectedRadius = e.target.value;
        this.props.setRadius(e.target.value);    
        this.props.getPhotos(this.requestParams);
    }

    onClick (e){
        this.requestParams.lat = e.lat;
        this.requestParams.lng = e.lng;
        this.props.getPhotos(this.requestParams);
    }

    render () {
        return (
            <div className='photo-search'>
                <ScrollToUp showUnder={160} style={{'zIndex': 1}}>
                    <span className='scroll-up'>UP</span>
                </ScrollToUp>
                <div className="caption">Click on map to search some photos, you can choose radius of searching</div>
                <div className="select-container">
                    <Select 
                        values={this.radiusList}
                        name='selectRadius'
                        onSelect={this.onSelect}
                        selected={this.props.state.photoSearchRadius}
                    />
                    <label>Distance to the target may be approximately</label>
                </div>
                <div className='map'>
                    <GoogleMap 
                        lat={this.requestParams.lat} 
                        lng={this.requestParams.lng} 
                        radius={this.props.state.photoSearchRadius}
                        currEnable={0} 
                        onClick={this.onClick} 
                    />
                </div>
                {!this.props.state.photos ? 
                    null : <PhotosGrid photos={this.props.state.photos} />}
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PhotosSearch)