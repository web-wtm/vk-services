import fetchJsonP from 'fetch-jsonp'

export function request(url) {
    return fetchJsonP(url)
        .then((response) => response.json())
}

export default request;
