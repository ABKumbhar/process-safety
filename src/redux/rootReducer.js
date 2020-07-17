import { combineReducers } from 'redux'
import IndustryReducer from './Industry/IndustryReducer'
import EquipmentReducer from './equipment/EquipmentReducer'
const rootReducer = combineReducers({
  industries : IndustryReducer,
  equipments : EquipmentReducer

})

export default rootReducer
