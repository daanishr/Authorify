import React, { Component, ComposedComponent } from 'react';
import { Image } from 'cloudinary-react';
import { CloudinaryContext, Transformation } from 'cloudinary-react';
import Button from '@material-ui/core/Button';
import uuidv1 from 'uuid/v1';
import SvgMap from './svgPanel';

export default class ImageUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFile: null,
      upload: false,
      imageUploadId: 'upload',
      imageUrl: 'user/upload.png'
    }
    this.handleUpload = this.handleUpload.bind(this);

  }


  fileChangedHandler = (event) => {
    this.setState({ selectedFile: event.target.files[0] })
  }

  uploadHandler = () => {
    console.log(this.state.selectedFile);
  }
  handleClose() {
    console.log("Hello");
  }
  handleUpload() {
    window.cloudinary.openUploadWidget(
      {
        cloud_name: 'dtt2cdx79',
        sources: ['local', 'facebook', 'camera', 'dropbox'],
        multiple: 'false',
        upload_preset: 'vr2jxj7j',
        public_id: this.state.imageUploadId,
        theme: 'minimal'
      },
      function (error, result) {
        console.log(result);
      });
    this.setState({
      upload: true,
      imageUrl: 'user/' + this.state.imageUploadId + '.png'
    });
  }



  render() {
    console.log(this.state.imageUrl);
    const { height, width, ...other } = this.props;
    return (
      <div>

        {/* <Image cloudName="dtt2cdx79" publicId="book_cover" width="500" crop="scale"/>      
                <CloudinaryContext cloudName="dtt2cdx79">
                    <Image publicId="book_cover">
                        <Transformation width="200" height="200" gravity="face" radius="max" crop="fill"/>
                    </Image>
            </CloudinaryContext>
       <input type="file" onChange={this.fileChangedHandler}/>
       <Button key="undo" color="secondary" size="small" onClick={this.handleClose}>
              UNDO
        </Button> */}
        <svg>
          <circle cx={50} cy={50} r={10} fill="red" />
        </svg>
        <SvgMap/>
        <Button variant="raised" className="rounded-btn rounded-btn--squarish" size="large" onClick={this.handleUpload}>
          Upload
      </Button>
        {this.state.upload ?
          <div>
            <Image cloudName="dtt2cdx79" publicId={this.state.imageUrl} width="500" crop="scale" />
            <CloudinaryContext cloudName="dtt2cdx79">
              <Image publicId={this.state.imageUrl}>
                <Transformation width="200" height="200" gravity="face" radius="max" crop="fill" />
              </Image>
            </CloudinaryContext>
          </div>
          : null

        }

        {/* <a href="#" id="upload_widget_opener">Upload multiple images</a> */}
      </div>
    )
  }
};
