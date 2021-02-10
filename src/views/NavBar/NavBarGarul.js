import React, {useState} from 'react'
import { Row, Select, Radio, Button } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { setGarul, setLanguage } from "../../_actions/actions";
import domtoimage from 'dom-to-image';

const {Option} = Select;

/*-- 
SPDX-FileCopyrightText: © 2021 Hyun Uk Lee <as0266@naver.com>

SPDX-License-Identifier: MIT
--*/  

function NavBarGarul() {
    
    const dispatch = useDispatch();

    const garul_time = useSelector(state => state.garul_time)
    const language = useSelector(state => state.language)

    const HandleGarul = (value) => {
      window.localStorage.setItem("Garul_Time", value);
      setTime(value)
      dispatch(setGarul(value))
    }

    const HandleChange = (event) => {
      dispatch(setLanguage(event.target.value))
    }
    
    const [Time, setTime] = useState(window.localStorage.getItem("Garul_Time") ? window.localStorage.getItem("Garul_Time") : "present");

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
              <Select defaultValue={Time} style={{margin:"1rem"}}
              onChange={HandleGarul}>
                <Option value="ancient">고대 가를레아 대륙</Option>
                <Option value="present">현대 가를레아 대륙</Option>
                <Option value="future">미래 가를레아 대륙</Option>
                <Option value="gold">비경 - 루차나 고적</Option>
              </Select>
              <Button type="primary" onClick={handleSaveClick} style={{margin:"1rem"}}>Download</Button>
              <Radio.Group onChange={HandleChange} defaultValue={language} style={{margin:"1rem"}}>
                <Radio.Button value="kor">글로벌판</Radio.Button>
                <Radio.Button value="jap">일본판</Radio.Button>
              </Radio.Group>
          </Row>
        </div>
    )
}

export default NavBarGarul;