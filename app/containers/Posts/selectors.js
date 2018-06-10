import { createSelector } from 'reselect'
import { sortBy } from '../../utils/helpers'

const getPosts = (state) => state.posts.groupPosts && state.posts.groupPosts.items

export const sortedPosts = createSelector(
    [getPosts],
    posts => sortBy(posts, 'likes')
)