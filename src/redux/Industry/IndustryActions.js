import axios from 'axios'
import {
  FETCH_INDUSTRY_REQUEST,
  FETCH_INDUSTRY_SUCCESS,
  FETCH_INDUSTRY_FAILURE
} from './IndustryTypes'

export const fetchIndustry = () => {
  return (dispatch) => {
    dispatch(fetchIndustryRequest())
    axios
      .get('https://abkumbhar.pythonanywhere.com/industry/')
    // .get('http://127.0.0.1:8000/industry/')
      .then(response => {
        // response.data is the users
        const industry = response.data
        console.log(response.data)
        dispatch(fetchIndustrySuccess(industry))
      })
      .catch(error => {
        // error.message is the error message
        dispatch(fetchIndustryFailure(error.message))
      })
  }
}

export const fetchIndustryRequest = () => {
  return {
    type: FETCH_INDUSTRY_REQUEST
  }
}

export const fetchIndustrySuccess = industry => {
  return {
    type: FETCH_INDUSTRY_SUCCESS,
    payload: industry
  }
}

export const fetchIndustryFailure = error => {
  return {
    type: FETCH_INDUSTRY_FAILURE,
    payload: error
  }
}
