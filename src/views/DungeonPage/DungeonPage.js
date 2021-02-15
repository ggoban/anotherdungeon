import React, {useEffect} from 'react'
import { useSelector } from 'react-redux';
import NavBar from '../NavBar/NavBar';
import {Row, Col, Typography, Tooltip, Divider} from "antd";
import './DungeonPage.css';
import {withRouter} from "react-router-dom";
import Footer from "../Footer/Footer";
import DungeonInfo from '../utils/DungeonInfo';

const {Title} = Typography;

/*-- 
SPDX-FileCopyrightText: © 2021 Hyun Uk Lee <as0266@naver.com>

SPDX-License-Identifier: MIT
--*/  

function DungeonPage() {

    const dungeon = useSelector(state => state.dungeon)
    const language = useSelector(state => state.language)

    useEffect(() => {
        window.scrollTo(0,0)
    }, [])

    return(
        <div>
            <NavBar/>
            <div className="container">
            <Row>
                <Col xs={24} md={12}>
                        <DungeonInfo dungeon={dungeon}/>
                        {dungeon.map.map((map, index) => (
                            <div className="left-map" key={index}>
                                <Divider style={{fontSize:"1.8rem"}}>Map {map.id}</Divider>
                                <div style={{fontSize:"1.4rem"}}>
                                    {language === "kor" ? map.kor : map.jap}
                                </div>
                                <div style={{fontSize:"1.4rem"}}>
                                    <b className="red">
                                        {map.kor_rare ? (language === "kor" ? map.kor_rare : map.jap_rare) : "레어맵 없음"}
                                    </b>
                                </div>
                                <img alt={map.kor} style={{ width: "90%"}} src={`images/map_photo/${dungeon.name}-${map.id}.jpg`}/>
                            </div>
                        ))}
                </Col>
                <Col xs={24} md={12}>
                    <div className="right">
                        <Divider orientation="center" style={{fontSize:"1.4rem"}}>직업서 (Very Hard)</Divider>
                        <Row justify="center">                        
                            {dungeon.job === null ? (<Title level={2}>없음</Title>) : (dungeon.job.map((job, index) => (
                                <Col span={4} key={index}>
                                    <Tooltip title={`${job.name}(${language === "kor" ? job.kor : job.jap})`}>
                                        <img alt={job.name} style={{ width: "100%"}} src={`images/character_base/${job.name}.png`}/>
                                    </Tooltip>
                                </Col>
                            )))}
                        </Row>
                        <br/>
                        <Divider orientation="center" style={{fontSize:"1.4rem"}}>천명작</Divider>
                        <Row justify="center">                        
                            {dungeon.statusup === null ? (<Title level={2}>없음</Title>) : (dungeon.statusup.map((job, index) => (
                                <Col span={4} key={index}>
                                    <Tooltip title={job}>
                                        <img alt={job} style={{ width: "100%"}} src={`images/character_base/${job}.png`}/>
                                    </Tooltip>
                                </Col>
                            )))}
                        </Row>
                        <br/>
                        {dungeon.multiple ? (
                            <div>
                                <Divider orientation="center" style={{fontSize:"1.4rem"}}>배수 캐릭터</Divider>
                                <Row justify="center">                        
                                    {dungeon.multiple.character.map((job, index) => (
                                        <Col span={4} key={index}>
                                            <Tooltip title={`${job.name} : ${job.rate}`}>
                                                <img alt={job.name} style={{ width: "100%"}}src={`images/character_base/${job.name}.png`}/>
                                            </Tooltip>
                                        </Col>
                                    ))}
                                </Row>
                            </div>
                        ) : null}
                        <br/>
                        <Divider orientation="center" style={{fontSize:"1.4rem"}}>Monster &#38; Fear</Divider>
                        <Row justify="center" style={{borderBottom: "1px solid lightgray", paddingBottom: "10px"}}> 
                            <Col span={5}>이미지</Col>
                            <Col span={6}>약점</Col>
                            <Col span={6}>내성</Col>
                            <Col span={5}>비고</Col>
                        </Row>
                        {dungeon.monster ? (
                            dungeon.monster.map((monster, index) => (
                                <Row justify="center" align="middle" style={{borderBottom: "1px solid lightgray"}} key={index}>
                                    <Col span={5} style={{borderRight: "1px solid lightgray"}}>
                                        <div style={{height: "80px"}}>
                                            <img alt = {monster.id} style={{ height: "100%"}} src={`images/monster/${dungeon.name}_${monster.id}.jpg`}/>
                                        </div>
                                    </Col>
                                    <Col span={6}>
                                        {monster.weak === null ? 
                                        <Title level={2}>없음</Title>
                                        : (monster.weak.map((type, index) => (
                                            <Tooltip title={type} key={index}>
                                                <img alt = {type} style={{ width: "23%"}} src={`images/types/${type}.png`}/>
                                            </Tooltip>
                                        )))}
                                    </Col>
                                    <Col span={6}>
                                        {monster.strong === null ? 
                                        <Title level={2}>없음</Title>
                                        : (monster.strong.map((type, index) => (
                                            <Tooltip title={type} key={index}>
                                                <img alt = {type} style={{ width: "23%"}} src={`images/types/${type}.png`}/>
                                            </Tooltip>
                                        )))}
                                    </Col>
                                    <Col span={5}>
                                        {monster.description ? 
                                        <b className="red" style={{fontSize:"1.4rem"}}>{monster.description}</b>
                                        : null}
                                    </Col>
                                </Row>
                            ))
                        ) : null}
                        <br/>
                        <Divider orientation="center" style={{fontSize:"1.4rem"}}>BOSS</Divider>
                        <Row justify="center" style={{paddingBottom: "10px"}}> 
                            <Col span={5}>이미지</Col>
                            <Col span={7}>약점</Col>
                            <Col span={7}>내성</Col>
                        </Row>
                        {dungeon.boss.members.map((boss, index) => (
                            <Row justify="center" align="middle" style={{marginBottom: "20px"}} key={index}>
                            <Col span={5}>
                                <img alt ="boss" style={{ width: "80%"}} src={`images/monster/${dungeon.name}_boss${boss.id}.jpg`}/>
                            </Col>    
                            <Col span={7}>
                                    {boss.weak === null ? <Title level={2}>없음</Title> : 
                                    (boss.weak.map((type, index) => (
                                        <Tooltip title={type} key={index}>
                                            <img alt = {type} style={{ width: "23%"}} src={`images/types/${type}.png`}/>
                                        </Tooltip>
                                    )))}
                            </Col>
                            <Col span={7}>
                                    {boss.strong === null ? <Title level={2}>없음</Title> : 
                                    (boss.strong.map((type, index) => (
                                        <Tooltip title={type} key={index}>
                                            <img alt = {type} style={{ width: "23%"}} src={`images/types/${type}.png`}/>
                                        </Tooltip>
                                    )))}
                            </Col>
                            </Row>
                        ))}
                        
                        {dungeon.boss.description.map((desc, index) => (
                                <Title level={5} key={index}>{desc}</Title>
                        ))}
                        <br/>
                        <Divider orientation="center" style={{fontSize:"1.4rem"}}>기타 특이사항</Divider>
                            {dungeon.etc.map((etc, index) =>( 
                                <Title level={5} key={index}>{etc}</Title>
                            ))}
                    </div>
                </Col>
            </Row>
            </div>
            <Footer/>
        </div>
    )
}

export default withRouter(DungeonPage)
