import React from 'react'
import SimpleMap from './SimpleMap'
import api from '../utils/api'
import Select from './Select'

const PhotosGrid = (props) => {

    return (
        <div className='photos-container'>
            {props.photos.map((item, index) => {
                return (
                    <div key={index} className='item'>
                        <img src={item.photo_604} />
                        <div className='photo-owner'>{item.owner_id}</div>
                        <button onClick={props.getInfo.apply(null, item.id)}>info</button>
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
            photos: [],
            selArr: ['10','100','600'],
            selectedRadius: 10
        }

        this.cursorStyle = {
            top: 0,
            left: 0,
            opacity: 0
        }

        this.onSelect = this.onSelect.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onClick = this.onClick.bind(this);
        this.getInfo = this.getInfo.bind(this);
    }

    onSelect(e) {
        this.setState({selectedRadius: e.target.value})
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }
    
    onClick (obj){
        this.cursorStyle.opacity = 1;
        this.cursorStyle.top = obj.event.pageY - 5;
        this.cursorStyle.left = obj.event.pageX - 5;

        api.photoSearch(obj.lat, obj.lng, this.state.selectedRadius)
            .then((response) => {
                this.setState({
                    photos: response
                })
                console.log(this.state.photos);
            })
    }

    getInfo(id) {
        api.getUsersInfo(id)
            .then((response) => {
                console.log(response)
            })
    }

    render () {
        return (
            <div className='photo-search'>
                <div className="caption">Click on map to search some photos, you can enter radius of searching</div>
                <div className="select-container">
                    <label>The distance to the target may be different from the target</label>
                    <Select 
                        values={this.state.selArr}
                        name='selectRadius'
                        placeHolder='select searching radius'
                        onSelect={this.onSelect}
                    />
                </div>
                <div className='map'>
                    <SimpleMap onClick={(this.onClick)} />
                    <div style={this.cursorStyle} className="cursor"></div>
                </div>
                {!this.state.photos ? <SearchPriev /> : <PhotosGrid photos={this.state.photos} onClick={this.getInfo}/>}
            </div>
        )
    }
}