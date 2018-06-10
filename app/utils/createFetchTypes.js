const createFetchTypes = (name) => ['FETCH', 'SUCCESS', 'ERROR'].map((v) => [name, v].join('_')).concat(name);
export default createFetchTypes;