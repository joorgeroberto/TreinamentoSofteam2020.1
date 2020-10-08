import {
  GET_DATA,
  GET_DATA_SUCCESS,
  GET_DATA_FAIL,
} from './types.js';

import Api from '../Config/API';
export const getData = ({info}) => {
  return(dispatch) => {
    dispatch({type: GET_DATA});

    async function loadData() {
      await Api.post(
        '/getData',
        {
          info: info,
        },{
          headers: {
            'Content-Type': 'application/json',
          },
        },
      )
        .then((res) => {
            //navigation.navigate('ScreenName');
            dispatch({
              type: GET_DATA_SUCCESS,
              payload: res.data,
            });
        })
        .catch(error => {
          console.error(error);
          dispatch({type: GET_DATA_FAIL});
        });
    }

    loadData();
  }
};
