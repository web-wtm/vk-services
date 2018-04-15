import './index.scss'
import React from 'react'
import { connect } from 'react-redux'
import ScrollToUp from 'react-scroll-up'
import moment from 'moment'

import PhotoMap from '../../components/Map'
import Select from '../../components/Select'
import { getPhotosRequest, setSearchRadius } from './action'
import { mapStateToProps, checkOwnerId } from '../../utils/helpers'

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
                        <a key={index} className='item' target='_blank' href={`https://vk.com/id${checkOwnerId(item.owner_id)}`} title='open'>
                            <img src={item.photo_604} />
                            <div className='item-cover'>Click to open in vk</div>
                             <div className='item-date'>{moment(item.date*1000).format("DD.MM.YYYY")}</div> 
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
    }

    componentDidMount() {
        this.props.getPhotos(this.requestParams);
    }

    onSelect = (e) => {
        this.requestParams.selectedRadius = e.target.value;
        this.props.setRadius(e.target.value);    
        this.props.getPhotos(this.requestParams);
    }

    onClick = (e) => {
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
                <PhotoMap 
                    lat={this.requestParams.lat} 
                    lng={this.requestParams.lng} 
                    radius={this.props.state.photoSearchRadius}
                    currEnable={0} 
                    onClick={this.onClick} 
                    photos={this.props.state.photos}
                />
                <div className="caption">Click on map to search some photos, also you can choose radius of searching</div>
                <div className="select-container">
                    <Select 
                        values={this.radiusList}
                        name='selectRadius'
                        onSelect={this.onSelect}
                        selected={this.props.state.photoSearchRadius}
                    />
                    <label>*Distance to the target may be approximately</label>
                </div>
                {!this.props.state.photos ? 
                    null : <PhotosGrid photos={this.props.state.photos} />}
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PhotosSearch)