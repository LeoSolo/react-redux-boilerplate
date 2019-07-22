import * as constants from '../constants/application'

const initialState = {
    isLoading: false
}

export default function applicationReducer(state = initialState, action) {
    switch (action.type) {
        case constants.APPLICATION_SET_LOADING:
            const { isLoading } = action.payload
            return {
                isLoading
            }
    }
    return state
}
