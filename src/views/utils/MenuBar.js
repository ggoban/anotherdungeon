import React from 'react'
import { Col, Button } from 'antd';
import { Link } from "react-router-dom";

function MenuBar({menu}) {
    return (
        <Col xs={24} md={12} style={{margin: "1rem auto"}}>
            <Link to={`/${menu.url}`}>
                <Button style={{ height: "60px", width: "80%", fontSize: "1.5rem", lineHeight:"50px", fontWeight: 600}}>
                    <div style={{display: "flex", justifyContent: "center"}}>
                        <img src={`images/character_base/${menu.pic}.png`} alt={menu.pic} style={{height: "50px", marginRight: "10px"}} />
                        {menu.title}
                    </div>
                </Button>
            </Link>
        </Col>
    )
}

export default MenuBar
