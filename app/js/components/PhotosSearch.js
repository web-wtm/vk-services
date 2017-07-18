import React from 'react'
import Map from './Map'
import api from '../utils/api'
import Select from './Select'

const PhotosGrid = (props) => {

    return (
        <div className='photos-container'>
            <div className="caption">Result of searching:</div>
            
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

export default class PhotosSearch extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            photos: null,
            selArr: ['10','100','600'],
            selectedRadius: 10,
            currPointLat: 50.553613,
            currPointLng: 30.516843,
            currEnable: 0
        }

        this.onSelect = this.onSelect.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onClick = this.onClick.bind(this);
    }

    onSelect(e) {
        this.setState({selectedRadius: e.target.value})
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }
    
    onClick (obj){
        this.setState({
            currPointLat: obj.lat,
            currPointLng: obj.lng,
            currEnable: 1
        })

        api.photoSearch(obj.lat, obj.lng, this.state.selectedRadius)
            .then((response) => {
                this.sortByDate(response)
                this.setState({
                    photos: response
                })
            })
            .catch((e) => {
                console.log(e)
            })
    }

    sortByDate(arr) {
        arr.sort((a,b) => {
            return a.date === b.date ? 0 : a.date < b.date ? 1 : -1;
        })
    }

    render () {
        return (
            <div className='photo-search'>
                <div className="caption">Click on map to search some photos, you can enter radius of searching</div>
                <div className="select-container">
                    <Select 
                        values={this.state.selArr}
                        name='selectRadius'
                        onSelect={this.onSelect}
                    />
                    <label>The distance to the target may be different from the target</label>
                </div>
                <div className='map'>
                    <Map 
                        lat={this.state.currPointLat} 
                        lang={this.state.currPointLng} 
                        currEnable={this.state.currEnable} 
                        onClick={this.onClick} 
                    />
                </div>
                {!this.state.photos ? 
                    null : <PhotosGrid photos={this.state.photos} />}
            </div>
        )
    }
}