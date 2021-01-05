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
              value: 'zer_jung',
              label: '제르베리야(정)',
            },
          ],
        }, {
          value: 'present',
          label: '현대',
          children: [
            {
              value: 'beast_castle',
              label: '마수성',
            },
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
