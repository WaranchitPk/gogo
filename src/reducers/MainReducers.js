import {combineReducers} from "redux";
import {AuthenReducer} from "./Auth";
import {
    findName,
    createUSer,
    findUserData
} from "./users";
import {
    CalculateReducers,
    CalculateReducer_BMI,
    CalculateReducer_MHR
} from "./calculate";
import {reducer as formReducers} from "redux-form";
import {
    CreateHistoryUserReducer,
    ShowHistoryUserReducer
} from "./history_user";
import {NutrianReducer} from "./nutrian";
import {
    NeutrianAllFoodsReducers
} from "./Neutrians/showAll";
import NeutrianCate from './Neutrians/showCate';
import NeutrialFoods from './Neutrians/showFoods';
import NeutrialSelectFoods from './Neutrians/showFoodFromSelect';
import {
    loadData,
    loadAllData,
    loadDataUserForChooseReducer,
    loadFindDataUserTrainingReducer,
    loadFindDataUserDiaryExerciseReducer
} from './employees';
import {DataIncome, DataIncomeCate,DataIncomeCateChange} from './incomes';
import {
    DataExpenses,
    YearSelectExpenses,
    MonthSelectExpenses,
    DataExpensesCate,
    DataExpensesCateChange
} from './expenses';
import {
    loadPricingReducer,
    loadPromotionPriceReducer
} from './home';

//training_equipment
import {
    ShowDataInHomeReducer,
    ShowDataSumMachineInHomeReducer,
    ShowDataCateMachineInHomeReducer,
    ShowDataFullMachineReducer
} from './trainingEquipment';
//ExerciseDiary
import {ExerciseDiaryLoadAllData} from './exerciseDiary';

const reducers = combineReducers({
    AuthenReducer,
    findUserData,
    findName,
    createUSer,
    CalculateReducers,
    formReducers,
    CalculateReducer_BMI,
    CalculateReducer_MHR,
    CreateHistoryUserReducer,
    ShowHistoryUserReducer,
    NutrianReducer,
    NeutrianAllFoodsReducers,
    NeutrianCate,
    NeutrialFoods,
    NeutrialSelectFoods,
    loadData,
    loadAllData,
    DataIncome,
    DataIncomeCate,
    DataExpenses,
    YearSelectExpenses,
    MonthSelectExpenses,
    loadPricingReducer,
    loadPromotionPriceReducer,
    ExerciseDiaryLoadAllData,
    loadDataUserForChooseReducer,
    loadFindDataUserTrainingReducer,
    loadFindDataUserDiaryExerciseReducer,
    ShowDataInHomeReducer,
    ShowDataSumMachineInHomeReducer,
    ShowDataCateMachineInHomeReducer,
    ShowDataFullMachineReducer,
    DataIncomeCateChange,
    DataExpensesCate,
    DataExpensesCateChange
});
export default reducers;
