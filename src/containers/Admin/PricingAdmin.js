import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadPricingData } from '../../actions/home';
import { PricingAdminComponent } from '../../components';
import axios from 'axios';

class PricingAdmin extends Component {
  state = {
    isOpenDialogMoreDetails: false,
    isOpenDialogSolvePricing: false,
    isOpenDialogPromotion: false,
    pricing_day: '',
    pricing_month: '',
    pricing_year: '',
    promotion_Date: '',
    promotion_Desc: '',
  };

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(loadPricingData());
  }

  //Open Dialog More Detail
  handleOpenDialogMoreDetail = () => {
    this.setState({
      isOpenDialogMoreDetails: true
    })
  };
  //Close Dialog More Detail
  handleCloseDialogMoreDetail = () => {
    this.setState({
      isOpenDialogMoreDetails: false
    })
  };
  handleOpenDialogSolvePricing = () => {
    this.setState({
      isOpenDialogSolvePricing: true
    })
    axios.get('http://localhost:9999/api/pricing').then((value) => {
      this.setState({
        pricing_day: value.data.result[0].pricing_PerDay,
        pricing_month: value.data.result[0].pricing_PerMonth,
        pricing_year: value.data.result[0].pricing_PerYear
      })
    })
  };
  handleCloseDialogSolvePricing = () => {
    this.setState({
      isOpenDialogSolvePricing: false
    })
  };
  handlePricing = ({ target: { name, value } }) => {
    this.setState({
      [name]: value
    })
  };
  handleSubmitPricing = () => {
    const { pricing_day, pricing_month, pricing_year } = this.state;
    console.log(pricing_day, pricing_month, pricing_year);
    const pricing = {
      day: pricing_day,
      month: pricing_month,
      year: pricing_year
    };
    axios.put('http://localhost:9999/api/pricing/1', {
      ...pricing
    }).then((result) => {
      this.props.dispatch(loadPricingData());
      this.setState({
        isOpenDialogSolvePricing: false
      })
    })
  };
  handleOpenDialogPromotion = () => {
    this.setState({
      isOpenDialogPromotion: true
    });
    axios.get('http://localhost:9999/api/pricing/promotion').then((value) => {
      this.setState({
        promotion_Date: value.data.result[0].promotion_Date,
        promotion_Desc: value.data.result[0].promotion_Desc,
      })
      console.log(value.data.result[0].promotion_Date)
    })

  };
  handleCloseDialogPromotion = () => {
    this.setState({
      isOpenDialogPromotion: false
    })
  };
  handleChangePromotion = ({ target: { name, value } }) => {
    this.setState({
      [name]: value
    })
  };
  handleSubmitPromotion = () => {
    const { promotion_Date, promotion_Desc } = this.state;
    const bodyData = {
      date: promotion_Date,
      desc: promotion_Desc
    };

    axios.put(`http://localhost:9999/api/pricing/promotion/1`, {
      ...bodyData
    }).then(result => {
      console.log(result)
      this.props.dispatch(loadPricingData());
      this.setState({
        isOpenDialogPromotion: false
      })
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

    // let userType = "";
    // if (this.props.token !== null && this.props.token !== undefined) {
    //   if (this.props.token.userType === 1) {
    //     userType = this.props.token.userType
    //   } else {
    //     userType = ""
    //   }
    // } else {
    //   userType = ""
    // }
    const { token: { userType } } = this.props;
    console.log(userType)
    return (
      <div>
        <PricingAdminComponent
          {...this.state}
          onOpenDialogMoreDetail={this.handleOpenDialogMoreDetail}
          onCloseDialogMoreDetail={this.handleCloseDialogMoreDetail}
          resultDataPrice={resultPricing}
          resultDataPromotionPrice={resultPromotionPrice}
          TypeAdmin={userType}
          onOpenDialogSolvePricing={this.handleOpenDialogSolvePricing}
          onCloseDialogSolvePricing={this.handleCloseDialogSolvePricing}
          onChangePricing={this.handlePricing}
          handleSubmitPricing={this.handleSubmitPricing}
          handleOpenDialogPromotion={this.handleOpenDialogPromotion}
          handleCloseDialogPromotion={this.handleCloseDialogPromotion}
          handleChangePromotion={this.handleChangePromotion}
          handleSubmitPromotion={this.handleSubmitPromotion}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => (
  {
    dataPricing: state.loadPricingReducer.data,
    dataPromotionPrice: state.loadPromotionPriceReducer.data,
    token: state.AuthenReducer.token,
  }
);

export default connect(mapStateToProps)(PricingAdmin);