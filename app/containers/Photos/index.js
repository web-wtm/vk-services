import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import moment from 'moment'
import ScrollUp from '../../components/ScrollUp'
import Caption from '../../components/Caption'
import Title from '../../components/Title'
import PhotoMap from '../../components/Map'
import Select from '../../components/Select'
import Loading from '../../components/Loading'
import PhotosGrid from '../../components/PhotosGrid'
import { sortedPhotos } from '../../selectors/app'
import api from '../../actions/api'

const mapStateToProps = (state) => {
    return {
        state: {
            photos: sortedPhotos(state),
            ...state
        }
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getPhotos: ({ lat, long, radius }) => dispatch(api.getPhotos({ lat, long, radius }))
    }
}

class Photos extends React.Component {
    constructor(props) {
        super(props)
        
        this.radiusList = [10, 100, 600];
        this.params = {
            lat: 50.553613,
            long: 30.516843,
            radius: this.radiusList[0]
        };
    }

    componentDidMount() {
        this.props.getPhotos(this.params);
    }

    onSelectRadius = (e) => {
        this.params.radius = e.target.value;
        this.props.getPhotos(this.params);
    }

    clickOnMap = (e) => {
        this.params.lat = e.lat;
        this.params.long = e.lng;
        this.props.getPhotos(this.params);
    }

    render () {
        const { isLoading, foundPhotos } = this.props.state.photos
        return (
            <Fragment>
                {isLoading && <Loading /> }
                <ScrollUp />
                <PhotoMap 
                    lat={this.params.lat} 
                    lng={this.params.long} 
                    radius={this.params.radius}
                    currEnable={0} 
                    onClick={this.clickOnMap} 
                    photos={foundPhotos}
                />
                <Caption>Click on map to search some photos, also you can choose radius of searching</Caption>
                <Select 
                    values={this.radiusList}
                    name='selectRadius'
                    onSelect={this.onSelectRadius}
                    selected={this.params.radius}
                />
                <Title>*Distance to the target may be approximately</Title>
                {foundPhotos && <PhotosGrid photos={foundPhotos.items} />}
            </Fragment>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Photos)