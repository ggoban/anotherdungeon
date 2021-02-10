import React, { useState } from 'react'
import { Typography, Input, Col, Row, Tooltip, Button } from 'antd';
import books from "../../data/books/books.json";
import {withRouter, Link} from "react-router-dom";
import { useDispatch } from 'react-redux';
import { setDungeon } from '../../_actions/actions';
import Footer from "../Footer/Footer";

/*-- 
SPDX-FileCopyrightText: © 2021 Hyun Uk Lee <as0266@naver.com>

SPDX-License-Identifier: MIT
--*/  

const { Search } = Input;
const { Title } = Typography;

function JobPage() {
    
    const dispatch = useDispatch();

    const [SearchName, setSearchName] = useState("")
    
    const HandleLink = (e) => {
        const info = books.find(element => element.name.includes(e.target.innerText))
        window.localStorage.setItem("Time",info.time);
        window.localStorage.setItem("Dungeon",info.dungeonname);
        dispatch(setDungeon(`${info.time}_${info.dungeonname}`));
    }

    const filtered = books.filter(element => (element.job.filter(job => job.name.includes(SearchName)).length !== 0))

    const jobNameParsed = [], jobParsed = []

    filtered.forEach(element => (
        element.job.forEach(a => {
            if(a.name.includes(SearchName) && !jobNameParsed.includes(a.name)) {
                jobNameParsed.push(a.name)
                jobParsed.push(a);
            }
        })
    ))
    
    const HandleChange = (e) => {
        setSearchName(e.target.value);
    }
    
    const renderSearch = jobParsed.map((list, index)=> (
        <Col xs={12} md={6} lg={4} key={index}>
            <div className="jview-container">
                <Tooltip title={list.name}>
                    <img alt={list.name} style={{width: "50%", margin: "0 auto"}}
                    src={`images/character_base/${list.name}.png`}/>
                </Tooltip>
                <div style={{margin: "5px"}}>
                    {list.kor}<br/>
                    {list.jap}
                </div>
                <div>
                    {filtered.filter(element => (element.job.filter(e => e.name.includes(list.name)).length !== 0))
                        .map(a => (
                        <Link to="/dungeon">
                            <Button style={{fontSize: "12px"}} onClick={HandleLink}>{a.name}</Button>
                        </Link>
                    ))}
                </div>
            </div>
        </Col>
    ));

    return (
        <div className="container" style={{paddingTop: "2rem"}}>
            <Title level={3}>직업의 서 검색</Title>
            <h3><b>사진 아래 버튼을 누르시면 해당 던전 정보로 이동합니다.</b></h3>
            <br/>
            직업서 정보는 노말 타입 5성 캐릭터만 제공됩니다.
            <br/>
            5성 직업서는 <b className="red">Very Hard 난이도</b>에서만 얻을 수 있습니다.
            <br/>
            <Search style={{width:"300px", marginTop: "3rem", marginBottom: "2rem"}} 
            placeholder="캐릭터 검색" 
            value={SearchName} 
            onChange={HandleChange}
            enterButton />
            <Row justify="center">
                {renderSearch}
            </Row>
            <Footer/>
        </div>
    )
}

export default withRouter(JobPage)
