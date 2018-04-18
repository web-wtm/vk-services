import React from 'react'
import moment from 'moment'

import { PhotosContainer, Photo, PhotoCover, PhotoDate } from './styled'
import { checkOwnerId } from '../../utils/helpers'

const PhotosGrid = (props) => {
    return (
        <PhotosContainer>            
            {   props.photos.length ?
                props.photos.map((item, index) => {
                    return (
                        <Photo key={index} target='_blank' href={`https://vk.com/id${checkOwnerId(item.owner_id)}`} title='open'>
                            <img src={item.photo_604} />
                            <PhotoCover className='item-cover'>Click to open in vk</PhotoCover>
                            <PhotoDate className='item-date'>{moment(item.date*1000).format("DD.MM.YYYY")}</PhotoDate> 
                        </Photo>
                    )
                })
                :
                <div>No photos in search area, you can try with bigger radius</div>
            }
        </PhotosContainer>
    )
}

export default PhotosGrid