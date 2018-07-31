import React, {Component} from "react";
import {Show_All_Drink} from "../../../components/Neutrians";
import {connect} from "react-redux";
import {loadNutrianShowAllFoods} from "../../../actions/nutrian";
import {NeutrianAllFoodsReducers} from "../../../reducers/Neutrians/showAll";

class drinks extends Component {
    state = {
        rowsPerPage: 5,
        page: 0
    };

    componentDidMount() {
        const cate_id = 2;
        this.props.dispatch(loadNutrianShowAllFoods(cate_id));
    }

    handleChangePage = (event, page) => {
        this.setState({page});
    };
    handleChangeRowsPerPage = event => {
        this.setState({rowsPerPage: event.target.value});
    };

    render() {
        const {page, rowsPerPage} = this.state;
        return (
            <div>
                {this.props.result && (
                    <Show_All_Drink
                        data={this.props.result.data}
                        page={page}
                        rowPerPage={rowsPerPage}
                        onChangePage={this.handleChangePage}
                        onChangeRow={this.handleChangeRowsPerPage}
                    />
                )}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        result: state.NeutrianAllFoodsReducers.data
    };
};
export default connect(mapStateToProps)(drinks);
