import React from 'react'
import GoogleMap from './GoogleMap'
import { connect } from 'react-redux'

import Select from './Select'
import ScrollToUp from 'react-scroll-up'
import {
    getPhotosRequest,
    setSearchRadius
} from '../main/actions'

const mapStateToProps = (state) => {
    return {
        state: state
    }
}

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
                        <a key={index} className='item' target='_blank' href={`https://vk.com/id${item.owner_id}`} title='onwer'>
                            <img src={item.photo_604} />
                            <div className="item-hover">Click to see owner</div>
                        </a>
                    )
                })
                :
                <div>No phono in this area, try with bigger radius</div>
            }
        </div>
    )
}

class PhotosSearch extends React.Component {
    constructor(props) {
        super(props)
        
        this.selArr = ['10','100','600'];
        this.selectedRadius = 10,
        this.currPointLat = 50.553613;
        this.currPointLng = 30.516843;
        this.onSelect = this.onSelect.bind(this);
        this.onClick = this.onClick.bind(this);
    }

    onSelect(e) {
        this.props.setRadius(e.target.value);
    }

    onClick (e){
        this.currPointLat = e.lat;
        this.currPointLng = e.lng;

        let params = {
            lat: this.currPointLat,
            lng: this.currPointLng,
            selectedRadius: this.props.state.photoSearchRadius
        }

        this.props.getPhotos(params);
    }

    render () {
        return (
            <div className='photo-search'>
                <ScrollToUp showUnder={160} style={{'zIndex': 1}}>
                    <span className='scroll-up'>UP</span>
                </ScrollToUp>
                <div className="caption">Click on map to search some photos, you can enter radius of searching</div>
                <div className="select-container">
                    <Select 
                        values={this.selArr}
                        name='selectRadius'
                        onSelect={this.onSelect}
                    />
                    <label>The distance to the target may be different from the target</label>
                </div>
                <div className='map'>
                    <GoogleMap 
                        lat={this.currPointLat} 
                        lng={this.currPointLng} 
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