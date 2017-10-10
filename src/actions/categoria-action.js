import axios from 'axios'
export const CATEGORIA_LIST = "CATEGORIA_LIST"

const getList = (q = '') => {
    return (dispatch) => {
        axios.get('http://localhost:8003/api/catalogo/categorias?query=' + q)
            .then((r) => {
                dispatch({
                    "type": CATEGORIA_LIST,
                    "list": r.data
                })
            })
            .catch(function (error) {
                console.log(error);
            })
    }
}

export const CATEGORIA_ADD = "CATEGORIA_ADD"
//export function createSuccess(d) {
//    return { type: CATEGORIA_ADD, d }
//}
export function save(data, history) {
    console.log('save history:' + JSON.stringify(history))
    console.log('save data:' + JSON.stringify(data))

    return function (dispatch) {
        return axios.post('http://localhost:8003/api/catalogo/categorias/',
            data)
            .then((r) => {

                dispatch({
                    "type": CATEGORIA_ADD,
                    "data": r.data
                })
                //dispatch(createSuccess(r));
                history.push('/categorias/list')

            })
            .catch((error) => {
                console.log(error)
                throw (error);
                //return Promise
            })
    }
}


export { getList }