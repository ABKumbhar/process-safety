import {
    FETCH_INDUSTRY_REQUEST,
    FETCH_INDUSTRY_SUCCESS,
    FETCH_INDUSTRY_FAILURE
  } from './IndustryTypes'
  
  const initialState = {
    loading: false,
    industry: [],
    error: ''
  }
  
  const IndustryReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_INDUSTRY_REQUEST:
        return {
          ...state,
          loading: true
        }
      case FETCH_INDUSTRY_SUCCESS:
        return {
          loading: false,
          industry: action.payload,
          error: ''
        }
      case FETCH_INDUSTRY_FAILURE:
        return {
          loading: false,
          industry: [],
          error: action.payload
        }
      default: return state
    }
  }
  
  export default IndustryReducer
  