import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadPricingData } from '../actions/home';
import { PricingComponent } from '../components';

class Pricing extends Component {
  state = {
    isOpenDialogMoreDetails: false
  };
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(loadPricingData());
  }

  //Open Dialog More Detail
  handleOpenDialogMoreDetail = () =>{
    this.setState({
      isOpenDialogMoreDetails: true
    })
  };
  //Close Dialog More Detail
  handleCloseDialogMoreDetail = () =>{
    this.setState({
      isOpenDialogMoreDetails: false
    })
  };
  render() {
    const { dataPricing, dataPromotionPrice } = this.props;
    let resultPricing = [];
    let resultPromotionPrice = [];
    if (dataPricing !== null && dataPricing !== undefined) {
      resultPricing = dataPricing.data.result
    }
    if (dataPromotionPrice !== null && dataPromotionPrice !== undefined) {
      resultPromotionPrice = dataPromotionPrice.data.result
    }
    return (
      <div>
        <PricingComponent
          {...this.state}
          onOpenDialogMoreDetail={this.handleOpenDialogMoreDetail}
          onCloseDialogMoreDetail={this.handleCloseDialogMoreDetail}
          resultDataPrice={resultPricing}
          resultDataPromotionPrice={resultPromotionPrice}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => (
  {
    dataPricing: state.loadPricingReducer.data,
    dataPromotionPrice: state.loadPromotionPriceReducer.data
  }
);
export default connect(mapStateToProps)(Pricing);