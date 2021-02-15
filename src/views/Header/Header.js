import { Tooltip } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'

/*-- 
SPDX-FileCopyrightText: © 2021 Hyun Uk Lee <as0266@naver.com>

SPDX-License-Identifier: MIT
--*/  

function Header() {
    return (
        <div>
            <Link to="/">
                <Tooltip title="홈으로 이동합니다.">
                    <img alt="logo" src="images/logo.png" style={{width: "75%", maxWidth: "500px"}}/>
                </Tooltip>
            </Link>
        </div>
    )
}

export default Header

