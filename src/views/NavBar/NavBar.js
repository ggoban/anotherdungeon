import React, {useState} from 'react'
import { Row, Cascader, Radio, Button, Col } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { setDungeon, setLanguage } from "../../_actions/actions";
import domtoimage from 'dom-to-image';

/*-- 
SPDX-FileCopyrightText: © 2021 Hyun Uk Lee <as0266@naver.com>

SPDX-License-Identifier: MIT
--*/  

function NavBar() {
   
    const dispatch = useDispatch();

    const dungeon = useSelector(state => state.dungeon)
    const language = useSelector(state => state.language)

    const [Time, setTime] = useState(window.localStorage.getItem("Time") ? window.localStorage.getItem("Time") : "ancient");
    const [DungeonName, setDungeonName] = useState(window.localStorage.getItem("Dungeon") ? window.localStorage.getItem("Dungeon") : "nadara");
    
    const options = [
        {
          value: 'ancient', label: '고대',
          children: [
            { value: 'nadara',      label: '나다라 화산'},
            { value: 'star',        label: '별의 탑'},
            { value: 'time',        label: '시간의 탑'},
            { value: 'swamp',       label: '식인 늪'},
            { value: 'dragon',      label: '용궁성'},
            { value: 'zer_thund',   label: '제르베리야(뇌)'}, 
            { value: 'zer_jung',    label: '제르베리야(정)'},
            { value: 'zer_shade',    label: '제르베리야(음)'},
            { value: 'tales',       label: '환시가 꿈꾸는 이야기'}
          ],
        }, {
          value: 'present', label: '현대',
          children: [
            { value: 'weird',         label: '기묘한 숲'},
            { value: 'moon',          label: '달그림자 숲'},
            { value: 'dogma',         label: '도그마의 탑'},
            { value: 'beast_castle',  label: '마수성'},
            { value: 'mementos',      label: '메멘토스'},
            { value: 'miglance',      label: '미글랜스 성'},
            { value: 'labyrinth',     label: '미글랜스 지하미궁'},
            { value: 'damak',         label: '뱀의 간 다마크'},
            { value: 'fire_beast',    label: '불타는 마수성'}
          ],
        }, {
          value: 'future',  label: '미래',
          children: [
            { value: 'industry',      label: '공업도시 폐허'},
            { value: 'garden',        label: '공중정원'},
            { value: 'kms',           label: '구 KMS 본사'},
            { value: 'mayu',          label: '마유의 꿈 의식'},
            { value: 'saki',          label: '사키의 꿈 의식'},
            { value: 'corridor',      label: '시층회랑'},
            { value: 'zeno',          label: '제노 도메인'},
            { value: 'ship',          label: '차원전함'},
            { value: 'toto',          label: '토토 드림랜드'}
          ],
        }, {
          value: 'etc',    label: '기타',
          children: [
            { value: 'exp', label: '봉역 - 어렴풋한 시각의 틈새'},
            { value: 'git', label: '봉역 - 덧없는 시각의 틈새'}
          ],
        }
      ];

    const handleSaveClick = () => {
      domtoimage.toJpeg(document.querySelector('.container'), { quality: 1 })
      .then(function (dataUrl) {
          var link = document.createElement('a');
          link.download = `${dungeon.name}_${language}.jpeg`;
          console.log(link);
          link.href = dataUrl;
          link.click();
      });
    }

    const HandleSelect = (value) => { 
      dispatch(setDungeon(`${value[0]}_${value[1]}`));
      window.localStorage.setItem("Time", value[0])
      setTime(value[0])
      window.localStorage.setItem("Dungeon", value[1])
      setDungeonName(value[1])
    }

    const HandleChange = (event) => {
      dispatch(setLanguage(event.target.value))
    }

    return (
        <div>
          <Row justify="center">
              <Col span={24}>
                <Cascader
                    defaultValue={[Time, DungeonName]}
                    options={options}
                    onChange={HandleSelect} 
                    allowClear={false}
                    style={{margin:"1rem"}}
                />
                <Button type="primary" onClick={handleSaveClick} style={{margin:"1rem"}}>Download</Button>
                <Radio.Group onChange={HandleChange} defaultValue={language} style={{margin:"1rem"}}>
                  <Radio.Button value="kor">글로벌판</Radio.Button>
                  <Radio.Button value="jap">일본판</Radio.Button>
                </Radio.Group>
              </Col>
              {dungeon.dream ? <Col span={24}>
                ★ 표시된 상자는 레어 맵일 시 몽영의 서가 나오는 상자입니다.
              </Col> : null}
          </Row>
        </div>
    )
}

export default NavBar;