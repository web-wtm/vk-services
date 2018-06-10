import _ from 'lodash';

const createTypes = (base, types) => _.zipObject(types, types.map((type) => `${base}.${type}`));

export default createTypes;