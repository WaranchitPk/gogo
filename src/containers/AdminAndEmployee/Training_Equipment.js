import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  DataInHome,
  DaTaSumMachineInHome,
  DataCateMachine,
  DataFullMachine,
  CreateDataMachine
} from '../../actions/trainingEquipment';
import { TrainingEquipmentComponent } from '../../components';
import picDummy from '../../asset/dummy.jpg'
import { uploadImg } from '../../libs/uploadPic';
import request from "superagent";
import {
  CLOUDINARY_UPLOAD_PRESET_Training_Equipment,
  CLOUDINARY_UPLOAD_URL
} from "../../config";
import { updateData } from "../../actions/users";

class Training_Equipment extends Component {
  state = {
    tabChange: 0,
    rowsPerPage: 5,
    page: 0,
    isOpenDialogShowFullDataMachine: false,
    isOpenDialogAddMachine: false,
    machine_name: '',
    machine_BuyDate: new Date(),
    machine_Price: '',
    uploadedFile: null,
    imgPreview: picDummy,
    loadingUpload: null,
  };

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(DataInHome());
    dispatch(DaTaSumMachineInHome())
  }

  //change tabs
  handleChangeTabs = (event, value) => {
    this.setState({ tabChange: value });
    const { dispatch } = this.props;
    if (value === 1) {
      dispatch(DataCateMachine(1))
    } else if (value === 2) {
      this.setState({
        machine_name: '',
        machine_BuyDate: new Date(),
        machine_Price: '',
        uploadedFile: null,
        imgPreview: picDummy,
      })
      dispatch(DataCateMachine(2))
    } else if (value === 3) {
      this.setState({
        machine_name: '',
        machine_BuyDate: new Date(),
        machine_Price: '',
        uploadedFile: null,
        imgPreview: picDummy,
      })
      dispatch(DataCateMachine(3))
    } else if (value === 4) {
      this.setState({
        machine_name: '',
        machine_BuyDate: new Date(),
        machine_Price: '',
        uploadedFile: null,
        imgPreview: picDummy,
      })
      dispatch(DataCateMachine(4))
    } else if (value === 5) {
      this.setState({
        machine_name: '',
        machine_BuyDate: new Date(),
        machine_Price: '',
        uploadedFile: null,
        imgPreview: picDummy,
      })
      dispatch(DataCateMachine(5))
    }
  };
  //Table Page: Home
  handleChangeTablePage = (event, page) => {
    this.setState({ page });
  };
  //Table Row Per Page : Home
  handleChangeTableRowPerPage = event => {
    this.setState({ rowsPerPage: event.target.value });
  };
  //Button Show Full Data && Dialog Show Full Data Machine
  handleClickShowAllDataMachine = (id) => {
    const { dispatch } = this.props;
    this.setState({
      isOpenDialogShowFullDataMachine: true
    });
    dispatch(DataFullMachine(id))
  };
  //Close Dialog Show Full Data Machine
  handleCloseDialogFullDataMachine = () => {
    this.setState({
      isOpenDialogShowFullDataMachine: false
    });
  };
  // Button Open Dialog Add Machine
  handleOpenDialogAddMachine = () => {
    this.setState({
      isOpenDialogAddMachine: true
    })
  };
  // Button Close Dialog Add Machine
  handleCloseDialogAddMachine = () => {
    this.setState({
      isOpenDialogAddMachine: false
    })
  };
  //Change Input Add Machine
  handleChangeInputAddMachine = ({ target: { name, value } }) => {
    this.setState({
      [name]: value
    })
  };
  //change Date Add Machine
  handleChangeDateAddMachine = (date) => {
    this.setState({ machine_BuyDate: date });
  };
  //drop zone handle
  onImageDrop = (file) => {
    this.setState({
      uploadedFile: file[0],
      imgPreview: file[0].preview
    });
  };
  //handleSubmit form ADd machine
  handleSubmitAddMachine = (cate) => {
    const { machine_name, machine_BuyDate, machine_Price } = this.state;
    const { dispatch } = this.props;
    this.uploadImg(machine_name, machine_BuyDate, machine_Price, cate,dispatch)
  };
  uploadImg = (machine_name, machine_BuyDate, machine_Price, cate,dispatch) => {
    this.setState({
      loadingUpload: false
    });
    let upload = request.post(CLOUDINARY_UPLOAD_URL)
      .field('upload_preset', CLOUDINARY_UPLOAD_PRESET_Training_Equipment)
      .field('file', this.state.uploadedFile);
    upload.end((err, response) => {
      if (err) {
        console.error(err)
      }
      if (response.body.secure_url !== '') {
        const bodyData = {
          name: machine_name,
          buyDate: machine_BuyDate,
          price: machine_Price,
          status: "พร้อมใช้งาน",
          category: cate,
          created_by: "admin",
          pic: `${response.body.public_id}.jpg`
        };
        CreateDataMachine(bodyData).then(result => {
          console.log(result);
          dispatch(DataCateMachine(cate))
          this.setState({
            isOpenDialogAddMachine: false
          })
        })
        this.setState({
          loadingUpload: true
        });
      }
    })
  };

  render() {
    // console.log(this.props.dataInHome);
    const { dataInHome, dataSumMachineInHome, dataForCateMachine, dataFullMachine } = this.props;
    const { tabChange, page, rowsPerPage, isOpenDialogShowFullDataMachine, isOpenDialogAddMachine, machine_name, machine_BuyDate, machine_Price, imgPreview, loadingUpload } = this.state;
    let resultDataShowInHome = [];
    let resultDataSumMachineInHome = [];
    let resultDataMachineForCate = [];
    let resultDataFullMachine = [];
    if (dataInHome !== null && dataInHome !== undefined) {
      resultDataShowInHome = dataInHome.data.result
    }
    if (dataSumMachineInHome !== null && dataSumMachineInHome !== undefined) {
      resultDataSumMachineInHome = dataSumMachineInHome.data.result
    }
    if (dataForCateMachine !== null && dataForCateMachine !== undefined) {
      resultDataMachineForCate = dataForCateMachine.data.result
    }
    if (dataFullMachine !== null && dataFullMachine !== undefined) {
      resultDataFullMachine = dataFullMachine.data.result
    }
    return (
      <div>
        <TrainingEquipmentComponent
          resultDataShowHome={resultDataShowInHome}
          resultDataSumMachineInHome={resultDataSumMachineInHome}
          resultDataMachineForCate={resultDataMachineForCate}
          resultDataFullMachine={resultDataFullMachine}
          tabValue={tabChange}
          onChangeTab={this.handleChangeTabs}
          valueTableChangePageHome={page}
          valueTableChangeRowPerPageHome={rowsPerPage}
          changeTablePageHome={this.handleChangeTablePage}
          changeTableRowPerPageHome={this.handleChangeTableRowPerPage}
          clickShowFulldataMachine={this.handleClickShowAllDataMachine}
          isOpenDialogFullDataMachine={isOpenDialogShowFullDataMachine}
          onCloseDialogFullDataMachine={this.handleCloseDialogFullDataMachine}
          isOpenDialogAddMachine={isOpenDialogAddMachine}
          onOpenDialogAddMachine={this.handleOpenDialogAddMachine}
          onCloseDialogAddMachine={this.handleCloseDialogAddMachine}
          valueMachineName={machine_name}
          valueMachineBuyDate={machine_BuyDate}
          valueMachinePrice={machine_Price}
          onChangeInputAddMachine={this.handleChangeInputAddMachine}
          onChangeDateAddMachine={this.handleChangeDateAddMachine}
          onImageDrop={this.onImageDrop}
          imgPreviewAddMachine={imgPreview}
          onSubmitAddMachine={this.handleSubmitAddMachine}
          loadingUpload={loadingUpload}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => (
  {
    dataInHome: state.ShowDataInHomeReducer.data,
    dataSumMachineInHome: state.ShowDataSumMachineInHomeReducer.data,
    dataForCateMachine: state.ShowDataCateMachineInHomeReducer.data,
    dataFullMachine: state.ShowDataFullMachineReducer.data
  }
);
export default connect(mapStateToProps)(Training_Equipment);