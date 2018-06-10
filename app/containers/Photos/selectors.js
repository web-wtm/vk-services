import { createSelector } from 'reselect'
import { sortBy } from '../../utils/helpers'

const getPhotos = (state) => state.photos.foundPhotos && state.photos.foundPhotos.items

export const sortedPhotos = createSelector(
    [getPhotos],
    photos => sortBy(photos, 'date')
)