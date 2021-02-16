import React from 'react'
import { Row } from 'antd';
import {withRouter} from "react-router-dom";
import Footer from "../Footer/Footer";
import MenuBar from "../utils/MenuBar";

/*-- 
SPDX-FileCopyrightText: © 2021 Hyun Uk Lee <as0266@naver.com>

SPDX-License-Identifier: MIT
--*/  

const menus = [ {url: "dungeon", pic: "알도", title:"일반 어나더 던전, 봉역"},
                {url: "job", pic: "피네", title:"직업서 검색"},
                {url: "etc", pic: "사이러스", title:"가를레아, 루차나 고적"},
                {url: "personal", pic: "리이카", title:"퍼스널리티 검색"}]

function Mainpage() {
    return (
        <div style={{paddingTop: "4rem"}} className="container">
            <Row align="middle">
                {menus.map((menu, index) => ( <MenuBar key={index} menu={menu}/>))}
            </Row>
            <br/>
            <h2><b>이경은 (정말로) 추가 예정이 없습니다.</b></h2>
            <Footer/>
        </div>
    )
}

export default withRouter(Mainpage)