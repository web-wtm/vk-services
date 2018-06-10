import { paramsConstructor, userFields, API_URL, API_V, SER, SERVICE_TOKEN } from './helpers'

export const constructUrl = (path, params = {}, options = {}) => {
	return [`${path}?${paramsConstructor({ ...params })}`,
		{ ...options }
	];
};


export const constructPostUrl = (path, params = {}, body = {}, type, options = {}) => {
	return [`${path}?${paramsConstructor({ ...params })}`, {
		...options,
		credentials: 'include',
		body: JSON.stringify(body),
		headers: { 'Content-Type': 'application/json', ...(options.headers || {}) },
		method: type,
	}]
};

const urlConstructor = {
	getUserIdRequest: (user_ids) => constructUrl(`${API_URL}/users.get`, { user_ids: user_ids.toString(), fields: userFields, v: API_V, access_token: SERVICE_TOKEN }),
	getMutualFriendsRequest: ({ source_uid, target_uid, access_token }) => constructUrl(`${API_URL}/friends.getMutual`, { source_uid, target_uid, access_token, v: API_V}),
	getPostsRequest: ({ domain, count }) => constructUrl(`${API_URL}/wall.get`, { domain, count, v: API_V, access_token: SERVICE_TOKEN }),
	getPhotosRequest: ({ lat, long, radius }) => constructUrl(`${API_URL}/photos.search`, { lat, long, radius, sort: 0, v: API_V, access_token: SERVICE_TOKEN }),
};

export default urlConstructor
