import React from 'react'
import { Row, Cascader, Radio, Button } from 'antd';
import { connect } from 'react-redux';
import { setDungeon, setLanguage } from "../../_actions/actions";
import domtoimage from 'dom-to-image';

function NavBar({dungeon, language, HandleSelect, HandleChange}) {
            
    const options = [
        {
          value: 'ancient',
          label: '고대',
          children: [
            {
              value: 'nadara',
              label: '나다라 화산',
            }, {
              value: 'star',
              label: '별의 탑',
            }, {
              value: 'time',
              label: '시간의 탑',
            },{
              value: 'swamp',
              label: '식인 늪',
            }, {
              value: 'zer_thund',
              label: '제르베리야(뇌)',
            }, {
              value: 'zer_jung',
              label: '제르베리야(정)',
            }, 
          ],
        }, {
          value: 'present',
          label: '현대',
          children: [
            {
              value: 'weird',
              label: '기묘한 숲',
            },{
              value: 'moon',
              label: '달그림자 숲',
            }, {
              value: 'dogma',
              label: '도그마의 탑',
            }, {
              value: 'beast_castle',
              label: '마수성',
            }, {
              value: 'miglance',
              label: '미글랜스 성',
            },{
              value: 'damak',
              label: '뱀의 간 다마크',
            },{
              value: 'fire_beast',
              label: '불타는 마수성',
            }
          ],
        }, {
          value: 'future',
          label: '미래',
          children: [
            {
              value: 'industry',
              label: '공업도시 폐허',
            },{
              value: 'kms',
              label: '구 KMS 본사',
            }, {
              value: 'mayu',
              label: '마유의 꿈 의식',
            }, {
              value: 'corridor',
              label: '시층회랑'
            },{
              value: 'zeno',
              label: '제노 도메인'
            }, {
              value: 'ship',
              label: '차원전함'
            },{
              value: 'toto',
              label: '토토 드림랜드'
            }
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

    return (
        <div>
          <Row justify="center">
              <Cascader
                  defaultValue={['ancient', 'zer_jung']}
                  options={options}
                  onChange={HandleSelect} 
                  allowClear={false}
                  style={{margin:"1rem"}}
              />
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
  dungeon: state.dungeon,
  language: state.language
})

const mapDispatchToProps = dispatch => ({
  HandleSelect: (value) => dispatch(setDungeon(`${value[0]}_${value[1]}`)),
  HandleChange: (event) => dispatch(setLanguage(event.target.value))
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
