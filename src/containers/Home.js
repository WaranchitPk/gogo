import React, {Component} from 'react';
import {HomeComponent} from '../components';
import {loadNutrianData} from '../actions/nutrian';
import {connect} from 'react-redux';
const arr2 = [{
    food_id: 1,
    amount: 1
}, {
    food_id: 2,
    amount: 2
}, {
    food_id: 3,
    amount: 3
}];
class Home extends Component {
    componentDidMount(){
        this.props.dispatch(loadNutrianData())
    }
    render() {
        return (
            <div>
                <HomeComponent data = {this.props.result}/>
                {/* {
                    this.props.result ? this.props.result.data.result.map((data)=>{
                        arr2.map((data2) =>{
                            if (data.food_id === data2.food_id){
                                const resultNutrian = {
                                    id: data.food_id,
                                    name: data.foods_name,
                                    cal: data.food_cal * data2.amount,
                                    protien: data.food_protien * data2.amount,
                                    fat: data.food_fat * data2.amount
                                };
                                return (
                                    <HomeComponent data={resultNutrian}/>
                                )
                            }
                        })
                    }): ''
                } */}
            </div>
        );
    }
}

const mapStateToProp = (state) =>{
    return {
        result: state.NutrianReducer.data
    }
}
export default connect(mapStateToProp)(Home);
