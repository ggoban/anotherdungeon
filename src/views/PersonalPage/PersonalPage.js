import React, { useState } from 'react'
import personal from "../../data/personality/personal.json"
import {Typography, Row, Col, Checkbox, Collapse} from 'antd'
import Footer from "../Footer/Footer"
import PersonalityView from "../utils/PersonalityView"

const { Title } = Typography;
const { Panel } = Collapse;

/*-- 
SPDX-FileCopyrightText: © 2021 Hyun Uk Lee <as0266@naver.com>

SPDX-License-Identifier: MIT
--*/  

function PersonalPage() {

    const option1 = ["지팡이", "검", "도", "도끼", "창", "활", "권갑", "망치"]
    const option2 = ["단것 애호가", "IDA스쿨", "애묘가", "동방", "서방", 
                     "마음의 괴도단", "마수", "가면", "안경", "미글랜스 왕궁"]
    const option3 = ["무기", "생물", "미식", "미술", "채집", "채굴"]

    const [Search, setSearch] = useState([])

    const handleToggle = (e) => {
        const currentIndex = Search.indexOf(e.target.value)

        const newSearch = [...Search]
        if(currentIndex === -1) {
            newSearch.push(e.target.value)
        } else {
            newSearch.splice(currentIndex, 1)
        }

        console.log(newSearch)
        setSearch(newSearch)
    }

    const filtered = personal.filter(item => {
        let isRight = true;
        Search.forEach(b => {
            if(item.personality.indexOf(b) === -1)
                isRight=false;
        })
        return isRight;
    })

    return (
        <div className="container" style={{paddingTop: "2rem"}}>
            <Title level={3}>퍼스널리티 검색</Title>
            <h3><b>체크박스를 누르시면 해당하는 캐릭터가 나옵니다.</b></h3>
            <br/>
            3성 캐릭터는 정보가 제공되지 않습니다.
            <br/>
            <br/>
            <Collapse defaultActiveKey={['1']} style={{maxWidth: "1000px", margin: "0 auto"}}>
                <Panel header="무기" key="1">
                    <Checkbox.Group style={{ width: '100%' }}>
                        <Row>
                            {option1.map((item, index) => (
                                <Col span={6} key={index}>
                                    <Checkbox value={item} onChange={handleToggle}>{item}</Checkbox>
                                </Col>
                            ))}
                        </Row>
                    </Checkbox.Group>
                </Panel>
                <Panel header="전투 관련" key="2">
                    <Checkbox.Group style={{ width: '100%' }}>
                        <Row>
                            {option2.map((item, index) => (
                                <Col xs={8} md={6} key={index}>
                                    <Checkbox value={item} onChange={handleToggle}>{item}</Checkbox>
                                </Col>
                            ))}
                        </Row>
                    </Checkbox.Group>
                </Panel>
                <Panel header="경매/탄광외전 관련" key="3">
                    <Checkbox.Group style={{ width: '100%' }}>
                        <Row>
                            {option3.map((item, index) => (
                                <Col span={6} key={index}>
                                    <Checkbox value={item} onChange={handleToggle}>{item}</Checkbox>
                                </Col>
                            ))}
                        </Row>
                    </Checkbox.Group>        
                </Panel>
            </Collapse>
            <br/>
            <Row justify="center">
                {filtered.map((item, index) => (
                    <PersonalityView item={item} key={index}/>
                ))}
            </Row>
            <Footer/>
        </div>
    )
}

export default PersonalPage
