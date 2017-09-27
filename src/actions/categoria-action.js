import axios from 'axios'
export const CATEGORIA_LIST = "CATEGORIA_LIST"

const getList = (q = '') => {
    return (dispatch) => {
        axios.get('http://localhost:8003/api/catalogo/categorias?query=' + q)
            .then((r) => {
                dispatch({
                    "type": CATEGORIA_LIST,
                    list: r.data
                })
            })
            .catch(function (error) {
                console.log(error);
            })
    }
}

export const CATEGORIA_ADD = "CATEGORIA_ADD"

const save = (data) => {
    return (dispatch) => {
        axios.post('http://localhost:8003/api/catalogo/categorias/',
            data)
            .then((r) => {
                
                dispatch({
                    "type": CATEGORIA_ADD,
                    data: r.data
                })
                //return r
                
                //console.log('r:' + JSON.stringify(r))
                
            })
            .catch( (error) =>{
                console.log(error)
                //return Promise
            })
    }
}


export { getList, save }