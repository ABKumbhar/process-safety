import axios from 'axios'
import {
  FETCH_EQUIPMENT_REQUEST,
  FETCH_EQUIPMENT_SUCCESS,
  FETCH_EQUIPMENT_FAILURE
} from './EquipmentTypes'

export const fetchEquipment = () => {
  return (dispatch) => {
    dispatch(fetchEquipmentRequest())
    axios
      .get('https://abkumbhar.pythonanywhere.com/equipment/')
    // .get('http://127.0.0.1:8000/equipment/')
      .then(response => {
        // response.data is the users
        const equipment = response.data
        console.log(response.data)
        dispatch(fetchEquipmentSuccess(equipment))
      })
      .catch(error => {
        // error.message is the error message
        dispatch(fetchEquipmentFailure(error.message))
      })
  }
}

export const fetchEquipmentRequest = () => {
  return {
    type: FETCH_EQUIPMENT_REQUEST
  }
}

export const fetchEquipmentSuccess = equipment => {
  return {
    type: FETCH_EQUIPMENT_SUCCESS,
    payload: equipment
  }
}

export const fetchEquipmentFailure = error => {
  return {
    type: FETCH_EQUIPMENT_FAILURE,
    payload: error
  }
}
