export const SET_SELECTED_GROUP = 'SET_SELECTED_GROUP';


// set selectedGroup
export const setSelectedGroup = (domain) => {
    return {
        type: SET_SELECTED_GROUP,
        payload: domain
    }
}