import { FAIL, GET_CHAPTERS, SUCCESS } from '../action-types';

export const getChapters = () => dispatch => dispatch({
    type: GET_CHAPTERS,
    payload: {
        request: {
            url: `https://bhagavad-gita3.p.rapidapi.com/v2/chapters/`,
            method: 'GET',
        headers: { 
    'x-rapidapi-host': 'bhagavad-gita3.p.rapidapi.com', 
    'x-rapidapi-key': '4abc17b613msh6561429016814f3p1d81d2jsnb11eee460274', 
    'Content-Type': 'text/plain'
  },
        },
        options: {
            onSuccess({ response }) {
                const { data, error, status } = response;
                if (status) {
                    dispatch({
                        type: `${GET_CHAPTERS}_${SUCCESS}`,
                        payload: [...data],
                    });
                    console.log('Api calling');
                    return Promise.resolve({ ...data });
                }
                dispatch({
                    type: `${GET_CHAPTERS}_${SUCCESS}`,
                    payload: { ...error },
                });
                return Promise.reject({ ...error });
            },
            onError(exception) {
                if (exception.error.isAxiosError) {
                    const { response: { data: dataError }, } = exception.error;
                    dispatch({
                        type: `${GET_CHAPTERS}_${FAIL}`,
                        payload: { dataError }
                    });
                    return Promise.reject(dataError);
                }
                dispatch({
                    type: `${GET_CHAPTERS}_${FAIL}`,
                    payload: {}
                });
                return Promise.reject();
            },
        },

    },
})