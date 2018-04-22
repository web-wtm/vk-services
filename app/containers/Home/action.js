export const LOG_IN = 'LOG_IN';
export const LOG_OUT = 'LOG_OUT';

export const setLogged = (status) => {
    return {
        type: status ? LOG_IN: LOG_OUT,
        payload: status
    }
}