import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Row, Col } from 'antd';
import {withRouter} from "react-router-dom";

const { Meta } = Card;

function Mainpage() {
    return (
        <div style={{paddingTop: "5rem"}}>
            <Row justify="center" align="middle">
                <Col xs={12} md={8} lg={6}>
                    <Link to="/dungeon">
                        <Card hoverable
                            style={{width: "100%", margin: "0 auto"}}
                            cover={<img alt="미글레이나 / 제르베리야" src="images/character_base/알도.png"/>}
                        >
                            <Meta title="중앙/서방 대륙" description="알도를 누르면 일반 던전 정보로 이동합니다."/>
                        </Card>
                    </Link>
                </Col>
                <Col xs={12} md={8} lg={6}>
                    <Link to="/search">
                        <Card hoverable
                            style={{width: "100%", margin: "0 auto"}}
                            cover={<img alt="가를레아" src="images/character_base/피네.png"/>}
                        >
                            <Meta title="직업서 검색" description="피네를 누르면 캐릭터 직업서 검색창으로 이동합니다."/>
                        </Card>
                    </Link>
                </Col>
            </Row>
            <br/>
            이경과 루차나 고적은 추가 예정이 없습니다.
        </div>
    )
}

export default withRouter(Mainpage)