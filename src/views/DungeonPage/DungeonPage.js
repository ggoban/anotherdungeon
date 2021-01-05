import React from 'react'
import {connect} from 'react-redux';
import NavBar from '../NavBar/NavBar';
import {Row, Col, Typography, Tooltip, Divider} from "antd";
import './DungeonPage.css';

const {Title} = Typography;

function DungeonPage({dungeon, language}) {

    return(
        <div>
            <NavBar/>

            <div className="container">
            <Row>
                <Col xs={24} md={12}>
                    <div className="left">
                        <Divider style={{fontSize:"2rem"}}>{dungeon.name}</Divider>
                        <div className="left-profile">
                            권장레벨 : <b className="green">
                                {dungeon.hard ? dungeon.hard.level : "X"}
                            </b> / <b className="red">
                                {dungeon.veryhard ? dungeon.veryhard.level : "X"}
                            </b>
                        </div>
                        <div className="left-profile">
                            3번째 칸 : {dungeon.reward}
                        </div>
                        <div className="left-profile">
                            <b className="green">Hard</b> : {dungeon.hard ? dungeon.hard.count : "없음"}
                        </div>
                        <div className="left-profile">
                            <b className="red">Very Hard</b> : {dungeon.veryhard ? dungeon.veryhard.count : "없음"}
                        </div>
                        {dungeon.map.map(map => (
                            <div className="left-map">
                                <Divider style={{fontSize:"1.8rem"}}>Map {map.id}</Divider>
                                <div className="left-map-name" style={{fontSize:"1.4rem"}}>
                                    {language === "kor" ? map.kor : map.jap}
                                </div>
                                <div className="left-map-name" style={{fontSize:"1.4rem"}}>
                                    <b className="red">
                                        {map.kor_rare ? (language === "kor" ? map.kor_rare : map.jap_rare) : "레어맵 없음"}
                                    </b>
                                </div>
                                <img alt={map.kor} style={{ width: "90%"}} src={`/images/map/${dungeon.name}-${map.id}.jpg`}/>
                            </div>
                        ))}
                    </div>
                </Col>
                <Col xs={24} md={12}>
                    <div className="right">
                        <Divider orientation="center" style={{fontSize:"1.4rem"}}>직업서 (Very Hard)</Divider>
                        <Row justify="center">                        
                            {dungeon.job === null ? (<Title level={2}>없음</Title>) : (dungeon.job.map(job => (
                                <Col span={4}>
                                <Tooltip title={job}>
                                    <img alt={job} style={{ width: "100%"}} src={`/images/character/${job}.png`}/>
                                </Tooltip>
                                </Col>
                            )))}
                        </Row>
                        <br/>
                        <Divider orientation="center" style={{fontSize:"1.4rem"}}>천명작</Divider>
                        <Row justify="center">                        
                            {dungeon.statusup === null ? (<Title level={2}>없음</Title>) : (dungeon.statusup.map(job => (
                                <Col span={4}>
                                <Tooltip title={job}>
                                    <img alt={job} style={{ width: "100%"}} src={`/images/character/${job}.png`}/>
                                </Tooltip>
                                </Col>
                            )))}
                        </Row>
                        <br/>
                        {dungeon.multiple ? (
                            <div>
                                <Divider orientation="center" style={{fontSize:"1.4rem"}}>배수 캐릭터</Divider>
                                <Row justify="center">                        
                                    {dungeon.multiple.map(job => (
                                        <Col span={4}>
                                        <Tooltip title={job}>
                                            <img alt={job} style={{ width: "100%"}}src={`/images/character/${job}.png`}/>
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
                            <Col span={5}>약점</Col>
                            <Col span={5}>내성</Col>
                            <Col span={5}>비고</Col>
                        </Row>
                        {dungeon.monster ? (
                            dungeon.monster.map(monster => (
                                <Row justify="center" align="middle" style={{borderBottom: "1px solid lightgray"}}>
                                    <Col span={5} style={{borderRight: "1px solid lightgray"}}>
                                        <img alt = {monster.id} style={{ width: "60%"}} src={`images/monster/${dungeon.name}_${monster.id}.jpg`}/>
                                    </Col>
                                    <Col span={5}>
                                        {monster.weak === null ? 
                                        <Title level={2}>없음</Title>
                                        : (monster.weak.map(type => (
                                            <Tooltip title={type}>
                                                <img alt = {type} style={{ width: "23%"}} src={`images/types/${type}.png`}/>
                                            </Tooltip>
                                        )))}
                                    </Col>
                                    <Col span={5}>
                                        {monster.strong === null ? 
                                        <Title level={2}>없음</Title>
                                        : (monster.strong.map(type => (
                                            <Tooltip title={type}>
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
                            <Col span={5}>약점</Col>
                            <Col span={5}>내성</Col>
                        </Row>
                        <Row justify="center" align="middle" style={{marginBottom: "20px"}}>
                            <Col span={5}>
                                <img alt ="boss" style={{ width: "80%"}} src={`images/monster/${dungeon.name}_boss.jpg`}/>
                            </Col>    
                            <Col span={5}>
                                    {dungeon.boss.weak === null ? <Title level={2}>없음</Title> : 
                                    (dungeon.boss.weak.map(type => (
                                        <Tooltip title={type}>
                                            <img alt = {type} style={{ width: "23%"}} src={`images/types/${type}.png`}/>
                                        </Tooltip>
                                    )))}
                            </Col>
                            <Col span={5}>
                                    {dungeon.boss.strong === null ? <Title level={2}>없음</Title> : 
                                    (dungeon.boss.strong.map(type => (
                                        <Tooltip title={type}>
                                            <img alt = {type} style={{ width: "23%"}} src={`images/types/${type}.png`}/>
                                        </Tooltip>
                                    )))}
                            </Col>
                        </Row>
                        {dungeon.boss.description.map(desc => (
                                <Title level={5}>{desc}</Title>
                        ))}
                        <br/>
                        <Divider orientation="center" style={{fontSize:"1.4rem"}}>기타 특이사항</Divider>
                            {dungeon.etc.map(etc =>( 
                                <Title level={5}>{etc}</Title>
                            ))}
                        
                    </div>
                </Col>
            </Row>
            </div>
            
            
        </div>
    )
}

const mapStateToProps = state => ({
    dungeon: state.dungeon,
    language: state.language
})

export default connect(mapStateToProps)(DungeonPage)
