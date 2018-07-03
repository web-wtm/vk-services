import { createSelector } from 'reselect'
import { sortBy } from '../utils/helpers'

const getPhotos = (state) => state.photos.foundPhotos && state.photos.foundPhotos.items
const getPosts = (state) => state.posts.groupPosts && state.posts.groupPosts.items

export const sortedPhotos = createSelector(
    [getPhotos],
    photos => sortBy(photos, 'date')
)

export const sortedPosts = createSelector(
    [getPosts],
    posts => sortBy(posts, 'likes')
)