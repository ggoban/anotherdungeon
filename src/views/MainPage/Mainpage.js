import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Row, Col } from 'antd';
import {withRouter} from "react-router-dom";
import Footer from "../Footer/Footer";

const { Meta } = Card;

/*-- 
SPDX-FileCopyrightText: © 2021 Hyun Uk Lee <as0266@naver.com>

SPDX-License-Identifier: MIT
--*/  

function Mainpage() {
    return (
        <div style={{paddingTop: "4rem"}} className="container">
            <Row align="middle">
                <Col xs={24} md={12}>
                    <Link to="/dungeon">
                        <Card hoverable
                            style={{width: "90%", margin: "0 auto", display: 'flex', flexDirection: "row", alignItems: 'center', justifyContent: 'space-between'}}
                            headStyle= {{width: '25%'}}
                            bodyStyle= {{width: '75%'}}
                            cover={<img alt="알도" src="images/character_base/알도.png"/>}
                        >
                            <Meta title="중앙/서방 대륙" description="알도를 누르면 일반 던전 정보로 이동합니다."/>
                        </Card>
                    </Link>
                </Col>
                <Col xs={24} md={12}>
                    <Link to="/job">
                        <Card hoverable
                            style={{width: "90%", margin: "0 auto", display: 'flex', flexDirection: "row", alignItems: 'center', justifyContent: 'space-between'}}
                            headStyle= {{width: '25%'}}
                            bodyStyle= {{width: '75%'}}
                            cover={<img alt="피네" src="images/character_base/피네.png"/>}
                        >
                            <Meta title="직업서 검색" description="피네를 누르면 캐릭터 직업서 검색창으로 이동합니다."/>
                        </Card>
                    </Link>
                </Col>
                <Col xs={24} md={12}>
                    <Link to="/etc">
                        <Card hoverable
                            style={{width: "90%", margin: "0 auto", display: 'flex', flexDirection: "row", alignItems: 'center', justifyContent: 'space-between'}}
                            headStyle= {{width: '25%'}}
                            bodyStyle= {{width: '75%'}}
                            cover={<img alt="사이러스" src="images/character_base/사이러스.png"/>}
                        >
                            <Meta title="가를레아/루차나 고적" description="사이러스를 누르면 가를레아/루차나 고적 정보로 이동합니다."/>
                        </Card>
                    </Link>
                </Col>
                <Col xs={24} md={12}>
                    <Link to="/personal">
                        <Card hoverable
                            style={{width: "90%", margin: "0 auto", display: 'flex', flexDirection: "row", alignItems: 'center', justifyContent: 'space-between'}}
                            headStyle= {{width: '25%'}}
                            bodyStyle= {{width: '75%'}}
                            cover={<img alt="리이카" src="images/character_base/리이카.png"/>}
                        >
                            <Meta title="퍼스널리티 검색" description="리이카를 누르면 퍼스널리티 검색창으로 이동합니다."/>
                        </Card>
                    </Link>
                </Col>
            </Row>
            <br/>
            <h2><b>이경은 (정말로) 추가 예정이 없습니다.</b></h2>
            <Footer/>
        </div>
    )
}

export default withRouter(Mainpage)