import React, {useState} from 'react'
import { Row, Select, Radio, Button } from 'antd';
import { connect } from 'react-redux';
import { setGarul, setLanguage } from "../../_actions/actions";
import domtoimage from 'dom-to-image';

const {Option} = Select;

function NavBar_Garul({garul_time, language, HandleGarul, HandleChange}) {
    
    const [GarulTime, setGarulTime] = useState(window.localStorage.getItem("Garul_Time") ? window.localStorage.getItem("Garul_Time") : "present");

    const handleSaveClick = () => {
      if(garul_time.name === "비경 - 루차나 고적") {
        var link = document.createElement('a');
        link.download = `${garul_time.name}.jpeg`;
        link.href = `images/${garul_time.name}.jpg`;
        link.click();
      } else {
        domtoimage.toJpeg(document.querySelector('.container'), { quality: 1 })
        .then(function (dataUrl) {
            var link = document.createElement('a');
            link.download = `${garul_time.name}_${language}.jpeg`;
            link.href = dataUrl;
            link.click();
        });
      }
    }

    return (
        <div>
          <Row justify="center">
              <Select defaultValue={GarulTime} style={{margin:"1rem"}}
              onChange={HandleGarul}>
                <Option value="ancient">고대 가를레아 대륙</Option>
                <Option value="present">현대 가를레아 대륙</Option>
                <Option value="future">미래 가를레아 대륙</Option>
                <Option value="gold">비경 - 루차나 고적</Option>
              </Select>
              <Button type="primary" onClick={handleSaveClick} style={{margin:"1rem"}}>Download</Button>
              <Radio.Group onChange={HandleChange} defaultValue="kor" style={{margin:"1rem"}}>
                <Radio.Button value="kor">글로벌판</Radio.Button>
                <Radio.Button value="jap">일본판</Radio.Button>
              </Radio.Group>
          </Row>
        </div>
    )
}

const mapStateToProps = state => ({
  garul_time: state.garul_time,
  language: state.language
})

const mapDispatchToProps = dispatch => ({
  HandleGarul: (value) => {
    window.localStorage.setItem("Garul_Time", value);
    dispatch(setGarul(value));
  },
  HandleChange: (event) => dispatch(setLanguage(event.target.value))
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar_Garul);