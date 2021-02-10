import React from 'react';
import {Col, Tooltip} from 'antd';
import "./Util.css";

/*-- 
SPDX-FileCopyrightText: © 2021 Hyun Uk Lee <as0266@naver.com>

SPDX-License-Identifier: MIT
--*/  

function PersonalityView({item}) {
    return (
        <Col xs={12} sm={8} md={6} lg={5}>
            <Tooltip title={item.name}>
                <div className="pview-container">
                    <div style={{display: "flex", alignItems: "center", marginBottom: "3px"}}>
                        <div style={{width: "35%", justifyContent: "center"}}>
                            <img alt={item.name} style={{width: "95%"}}
                        src={`images/character_base/${item.name}.png`}/>
                        </div>
                        <div style={{width: "65%", display: "flex", flexDirection: "column"}}>
                            {item.personality.map((a, index) => (
                                <div key={index}>{a}</div>
                            ))}
                        </div>
                    </div>
                    <div>
                        {item.description ? <b className="red">{item.description}</b> : null }    
                    </div>
                </div>
            </Tooltip>
        </Col>
    )
}

export default PersonalityView
