import React, { useState } from 'react'
import { Typography, Input, Card, Col, Row, Tooltip, Button } from 'antd';
import books from "../../data/books/books.json";
import {withRouter, Link} from "react-router-dom";
import { connect } from 'react-redux';
import { setDungeon } from '../../_actions/actions';

const { Search } = Input;
const {Title} = Typography;

function SearchPage({HandleLink}) {
    
    const [SearchName, setSearchName] = useState("")
    
    const filtered = books.filter(element => (element.job.filter(job => job.includes(SearchName)).length !== 0))

    const jobNotParsed = []

    filtered.forEach(element => (
        element.job.forEach(a => {
            if(a.includes(SearchName))
                jobNotParsed.push(a);
        })
    ))
    
    const jobParsed = new Set(jobNotParsed);
    const jobList = [...jobParsed];

    const HandleChange = (e) => {
        setSearchName(e.target.value);
    }
    
    const renderSearch = jobList.map(jobname => (
        <Col xs={12} md={6} lg={4}>
            <Card cover={
                <Tooltip title={jobname}>
                    <img alt={jobname} src={`images/character_base/${jobname}.png`}/>
                </Tooltip>}
                style={{width: "95%"}} hoverable>
                
                {filtered.filter(element => (element.job.filter(e => e.includes(jobname)).length !== 0)).map(a => (
                    <Link to="/dungeon">
                        <Button onClick={HandleLink}>{a.name}</Button>
                    </Link>
                 ))}
            </Card>
        </Col>
    ));

    return (
        <div className="container" style={{paddingTop: "3rem"}}>
            <Title level={2}>직업의 서 검색</Title>
            <br/>
            사진 아래 버튼을 누르시면 해당 던전 정보로 이동합니다.
            <br/>
            직업서 정보는 5성 캐릭터만 제공됩니다.
            <br/>
            <Search style={{width:"300px", marginTop: "4rem", marginBottom: "2rem"}} 
            placeholder="캐릭터 검색" 
            value={SearchName} 
            onChange={HandleChange}
            enterButton />
            <Row justify="center">
                {renderSearch}
            </Row>
        </div>
    )
}

const mapStateToProps = state => ({
    dungeon: state.dungeon,
    language: state.language
  })
  
const mapDispatchToProps = dispatch => ({
  HandleLink: (e) => {
        const info = books.find(element => element.name.includes(e.target.innerText))
        window.localStorage.setItem("Time",info.time);
        window.localStorage.setItem("Dungeon",info.dungeonname);
        dispatch(setDungeon(`${info.time}_${info.dungeonname}`));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SearchPage))
