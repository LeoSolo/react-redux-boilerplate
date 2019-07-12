import * as constants from '../constants/application'

export function setLoading(isLoading) {
    return {
        type: constants.APPLICATION_SET_LOADING,
        payload: {
            isLoading: isLoading
        }
    }
}
