import { GET_CHAPTER, SUCCESS, FAIL } from '../action-types';

export const getChapter = (id) => dispatch => dispatch({
    type: GET_CHAPTER,
    payload: {
        request:{
     method: 'get',
  url: `https://bhagavad-gita3.p.rapidapi.com/v2/chapters/${id}/`,
  headers: { 
    'x-rapidapi-host': 'bhagavad-gita3.p.rapidapi.com', 
    'x-rapidapi-key': '4abc17b613msh6561429016814f3p1d81d2jsnb11eee460274', 
     },
        },
        options: {
            onSuccess({ response }) {
                const { data, error, status } = response;
                if (status) {
                    dispatch({
                        type: `${GET_CHAPTER}_${SUCCESS}`,
                        payload: { ...data },
                    });
                    console.log('Api calling for chapter');
                    return Promise.resolve({ ...data });
                }
                dispatch({
                    type: `${GET_CHAPTER}_${SUCCESS}`,
                    payload: { ...error },
                });
                    console.log('Api calling for chapter');
                return Promise.reject({ ...error });
            },
            onError(exception) {
                if (exception.error.isAxiosError) {
                    const { response: { data: dataError }, } = exception.error;
                    dispatch({
                        type: `${GET_CHAPTER}_${FAIL}`,
                        payload: { dataError }
                    });
                    return Promise.reject(dataError);
                }
                dispatch({
                    type: `${GET_CHAPTER}_${FAIL}`,
                    payload: {}
                });
                return Promise.reject();
            },
        },

    },
})