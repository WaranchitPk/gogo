import React, {Component} from 'react';
import {ProfileComponent} from '../components';
import {connect} from 'react-redux';
import {findName, findInfomUser, updateData} from '../actions/users';
import {CLOUDINARY_UPLOAD_URL, CLOUDINARY_UPLOAD_PRESET,showImage} from '../config';
import request from 'superagent';
import {withRouter} from 'react-router-dom';
class Profile extends Component {
    state = {
        uploadedFile: null,
        imgPreview: '',
        open: false,
        fName: '',
        lName: '',
        age: '',
        showPic: '',
        gender: 'male',
        email: '',
        loadingUpload: null,
        picName: ''
    };

    componentDidMount() {
        const {dispatch} = this.props;
        dispatch(findName());

        this.loadUser();
    }

    //load User
    loadUser = async () => {
        let response = await findInfomUser();
        if (response !== ''){
          let result = response.data.data;
          let userPic = ''
          if (result[0].user_pic !== null){
            userPic = showImage(result[0].user_pic);
          }
          const showImg = userPic;
          this.setState({
            fName: result[0].user_fName,
            lName: result[0].user_lName,
            age: result[0].user_age,
            gender: result[0].user_gender,
            email: result[0].user_email,
            showPic: showImg
          })
        }
    };
    //drop zone handle
    onImageDrop = (file) => {
        this.setState({
            uploadedFile: file[0],
            imgPreview: file[0].preview
        })
    };
    //openDialog Drop Image
    handleOpenDialogDropImg = () => {
        this.setState({
            open: true
        })
    };
    //closeDialog Drop Image
    handleCloseDialogDropImg = () => {
        this.setState({
            open: false
        })
    };
    //set value on input
    handleChangeInput = ({target: {name, value}}) => {
        this.setState({
            [name]: value
        })
    };
    //uploadImg
    uploadImg = (fName, lName, age, email, gender, push) => {
        this.setState({
            loadingUpload: false
        });
        let upload = request.post(CLOUDINARY_UPLOAD_URL)
            .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
            .field('file', this.state.uploadedFile);
        upload.end((err, response) => {
            if (err) {
                console.error(err)
            }
            if (response.body.secure_url !== '') {
                const picName = `${response.body.public_id}.jpg`
                const bodyData = {
                    fName: fName,
                    lName: lName,
                    age: age,
                    email: email,
                    gender: gender,
                    pic: picName
                };
                updateData(bodyData, push);
                this.setState({
                    loadingUpload: true
                });
            }
        })
    };
    //submit value
    handleSubmitInput = () => {
        const {fName, lName, age, email, gender, imgPreview} = this.state;
        const {history: {push}} = this.props;

        if (imgPreview === '') {
            const bodyData = {
                fName: fName,
                lName: lName,
                age: age,
                email: email,
                gender: gender,
            };
            updateData(bodyData, )
        } else {
            this.uploadImg(fName, lName, age, email, gender,push);
        }
    };

    render() {
        console.log('history',this.props.history)
        const {open, imgPreview, gender, fName, lName, age, email, loadingUpload,showPic} = this.state;
        const {name} = this.props;
        let shortName = '';
        if (name !== null && name !== undefined) {
            shortName = name.data.name;
        }
        return (
            <div>
                <ProfileComponent
                    changeInput={this.handleChangeInput}
                    valueFname={fName}
                    valueLname={lName}
                    valueAge={age}
                    valueGender={gender}
                    valueEmail={email}
                    valuePic={showPic}
                    submitValue={this.handleSubmitInput}
                    displayNameInAvatar={shortName}
                    dropImage={this.onImageDrop}
                    imgPreview={imgPreview}
                    isOpenDialogDropImg={open}
                    openDialogDropImg={this.handleOpenDialogDropImg}
                    closeDialogDropImg={this.handleCloseDialogDropImg}
                    loadingUpload={loadingUpload}/>
            </div>

        );
    }
}

const mapStateToProps = (state) => {
    return {
        name: state.findName.data
    }
};
export default connect(mapStateToProps)(withRouter(Profile));