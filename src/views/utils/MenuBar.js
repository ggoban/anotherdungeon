import React from 'react'
import { Card, Col } from 'antd';
import { Link } from "react-router-dom";

function MenuBar({menu}) {
    return (
        <Col xs={24} md={12}>
            <Link to={`/${menu.url}`}>
                <Card hoverable
                    style={{width: "80%", margin: "0 auto", display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}
                    headStyle= {{width: '10%'}}
                    bodyStyle= {{width: '90%'}}
                    cover={<img alt={menu.pic} src={`images/character_base/${menu.pic}.png`}/>}
                >
                    <b style={{fontSize: "1.1rem"}}>{menu.title}</b>
                </Card>
            </Link>
        </Col>
    )
}

export default MenuBar
