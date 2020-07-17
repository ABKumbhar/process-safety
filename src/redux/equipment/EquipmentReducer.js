import {
    FETCH_EQUIPMENT_REQUEST,
    FETCH_EQUIPMENT_SUCCESS,
    FETCH_EQUIPMENT_FAILURE
  } from './EquipmentTypes'
  
  const initialState = {
    loading: false,
    equipment: [],
    error: ''
  }
  
  const EquipmentReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_EQUIPMENT_REQUEST:
        return {
          ...state,
          loading: true
        }
      case FETCH_EQUIPMENT_SUCCESS:
        return {
          loading: false,
          equipment: action.payload,
          error: ''
        }
      case FETCH_EQUIPMENT_FAILURE:
        return {
          loading: false,
          equipment: [],
          error: action.payload
        }
      default: return state
    }
  }
  
  export default EquipmentReducer
  