import React from 'react'
import {connect} from 'react-redux';
import NavBar from '../NavBar/NavBar';
import {Row, Col, Typography, Tooltip, Divider} from "antd";
import {withRouter} from "react-router-dom";

const {Title} = Typography;

function EtcPage() {
    return (
        <div className="container">
            <Row>
                <Col xs={24} sm={16}>
                </Col>
                <Col xs={24} sm={8}>
                </Col>
            </Row>
            준비중입니다.
        </div>
    )
}

export default withRouter(EtcPage)
