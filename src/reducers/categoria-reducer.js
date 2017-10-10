import { CATEGORIA_LIST, CATEGORIA_ADD } from '../actions/categoria-action'

const initialState = {
    list: [],
    data: {}
}

const categoriaReducer = (state = initialState, action) => {
    switch (action.type) {
        case CATEGORIA_LIST: return {
            ...state,
            list: action.list
        }
        case CATEGORIA_ADD:
            return {
                ...state,
                //data: action.data // no usado aun
            }

        default: return state
    }
}

export default categoriaReducer
