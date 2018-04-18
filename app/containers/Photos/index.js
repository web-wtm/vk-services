import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import moment from 'moment'

import ScrollUp from '../../components/ScrollUp'
import Caption from '../../components/Caption'
import Title from '../../components/Title'
import PhotoMap from '../../components/Map'
import Select from '../../components/Select'
import PhotosGrid from '../../components/PhotosGrid'
import { getPhotosRequest, setSearchRadius } from './action'
import { mapStateToProps } from '../../utils/helpers'

const mapDispatchToProps = (dispatch) => {
    return {
        getPhotos: (params) => dispatch(getPhotosRequest(params)),
        setRadius: (radius) => dispatch(setSearchRadius(radius))
    }
}

class Photos extends React.Component {
    constructor(props) {
        super(props)
        
        this.radiusList = [10, 100, 600];
        this.rParams = {
            lat: 50.553613,
            lng: 30.516843,
            selectedRadius: this.props.state.photoSearchRadius
        };
    }

    componentDidMount() {
        this.props.getPhotos(this.rParams);
    }

    onSelect = (e) => {
        this.rParams.selectedRadius = e.target.value;
        this.props.setRadius(e.target.value);    
        this.props.getPhotos(this.rParams);
    }

    onClick = (e) => {
        this.rParams.lat = e.lat;
        this.rParams.lng = e.lng;
        this.props.getPhotos(this.rParams);
    }

    render () {
        return (
            <Fragment>
                <ScrollUp />
                <PhotoMap 
                    lat={this.rParams.lat} 
                    lng={this.rParams.lng} 
                    radius={this.props.state.photoSearchRadius}
                    currEnable={0} 
                    onClick={this.onClick} 
                    photos={this.props.state.photos}
                />
                <Caption>Click on map to search some photos, also you can choose radius of searching</Caption>
                <Select 
                    values={this.radiusList}
                    name='selectRadius'
                    onSelect={this.onSelect}
                    selected={this.props.state.photoSearchRadius}
                />
                <Title>*Distance to the target may be approximately</Title>
                {!this.props.state.photos ? 
                    null : <PhotosGrid photos={this.props.state.photos} />}
            </Fragment>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Photos)