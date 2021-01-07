import React from 'react'
import {connect} from 'react-redux';
import {Row, Col, Typography, Button, Divider, Tooltip, Card} from "antd";
import {withRouter} from "react-router-dom";
import NavBar_Garul from '../NavBar/NavBar_Garul';

const {Title} = Typography;

function EtcPage({garul_time, language}) {
    console.log(garul_time, language);
    if(garul_time.name === "비경 - 루차나 고적") {
        return (
            <div>
                <NavBar_Garul/>
                <a href="https://cafe.naver.com/anothereden/71984" rel="noreferrer" target="_blank">
                    <Button style={{margin: "2rem"}}>세부 공략을 보려면 여기로(네이버 카페 링크)</Button>
                </a>
                <div className="container">
                    <img alt="루차나 고적" style={{width: "100%"}} src={`images/${garul_time.name}.jpg`} />
                </div>            
            </div>
        )
    } else {
        return (
            <div>
                <NavBar_Garul/>
                <div className="container">
                    <Row justify="center">
                        <Col xs={24} sm={16}>
                            <Title level={2}>{garul_time.name}</Title>
                            <br/>
                            <div className="left-profile">
                                권장레벨 : <b className="green">
                                    {garul_time.hard ? garul_time.hard.level : "X"}
                                </b>
                            </div>
                            <div className="left-profile">
                                3번째 칸 : {garul_time.reward}
                            </div>
                            <div className="left-profile">
                                <b className="green">Hard</b> : {garul_time.hard ? garul_time.hard.count : "없음"}
                            </div>
                        </Col>
                        <Col xs={24} sm={8}>
                            <Divider orientation="center" style={{fontSize:"1.4rem"}}>천명작</Divider>
                            {garul_time.statusup === null ? (<Title level={2}>없음</Title>) : (garul_time.statusup.map(job => (
                                    <Tooltip title={job}>
                                        <img alt={job} style={{ width: "25%"}} src={`images/character_base/${job}.png`}/>
                                    </Tooltip>
                            )))}
                        </Col>
                    </Row>
                    <br/>
                    <div className="left-profile" style={{fontSize:"1.6rem"}}>
                                <b className="red">{garul_time.first}</b> 우선, {garul_time.etc}
                    </div>
                    <Divider orientation="center" style={{fontSize:"1.4rem"}}>Monster & Fear</Divider>
                    {garul_time.name === "미래 가를레아 대륙" ?
                        <div>
                        <h4><b>미래 가를에서 인카운트 광석을 얻게 되면</b></h4>
                        <h4><b>잡몹전을 거의 하지 않게 됨</b></h4>
                        <h4><b>또, 반짝이를 소모해 약점 부여도 가능함</b></h4>
                        <h4><b>그래서 약점표는 생략하고 링크로 대체</b></h4> 
                        </div> 
                    : null}
                    <a href={garul_time.weak} target="_blank" rel="noreferrer"><Button>링크</Button></a>
                
                    
                    <Row justify="center" align="middle">
                        <Col xs={24} sm={8}>
                        {garul_time.map.map(map => (
                                <div className="left-map">
                                    <Divider style={{fontSize:"1.4rem"}}>{language === "kor" ? map.kor : map.jap}</Divider>
                                    <div className="left-map-name" style={{fontSize:"1rem", marginBottom:"5px"}}>
                                        {map.description}
                                    </div>
                                    <img alt={map.kor} style={{ width: "75%", marginRight:"1rem", marginBottom: "2rem"}} src={`images/garul/map/${map.kor}.jpg`}/>
                                    {garul_time.name !== "미래 가를레아 대륙" ? <img alt={map.kor} style={{ width: "15%"}} src={`images/garul/map/${map.kor}_s.jpg`}/> : null}
                                </div>
                            ))}
                        </Col>
                        <Col xs={24} sm={8}>
                        {garul_time.boxmap.map(map => (
                                <div className="left-map">
                                    <Divider style={{fontSize:"1.4rem"}}>{language === "kor" ? map.kor : map.jap}</Divider>
                                    <div className="left-map-name" style={{fontSize:"1rem", marginBottom:"5px"}}>
                                        {map.description}
                                    </div>
                                    <img alt={map.kor} style={{ width: "75%", marginRight:"1rem", marginBottom: "2rem"}} src={`images/garul/map/${map.kor}.jpg`}/>
                                    {garul_time.name !== "미래 가를레아 대륙" ? <img alt={map.kor} style={{ width: "15%"}} src={`images/garul/map/${map.kor}_s.jpg`}/> : null}
                                </div>
                            ))}
                        </Col>
                        <Col xs={24} sm={8}>
                            <Divider orientation="center" style={{fontSize:"1.4rem"}}>BOSS</Divider>
                            {garul_time.boss.map(boss => (
                                <div>
                                    <Row justify="center" align="middle" style={{marginTop: "20px",marginBottom: "20px"}}>
                                        <Col span={12}>
                                            {boss.comment !== "본체" ? <b style={{fontSize: "1.4rem"}}>-{boss.comment}-</b> : 
                                            <img alt ={`boss${boss.id}`} style={{ width: "80%"}} src={`images/garul/boss/${garul_time.name}_${boss.id}.jpg`}/>
                                            }   
                                        </Col>
                                    </Row>
                                    <Row justify="center" align="middle" >    
                                        <Col span={9}>
                                                약점 {boss.weak === null ? <b>없음</b> : 
                                                (boss.weak.map(type => (
                                                    <Tooltip title={type}>
                                                        <img alt = {type} style={{ width: "23%"}} src={`images/types/${type}.png`}/>
                                                    </Tooltip>
                                                )))}
                                        </Col>
                                        <Col span={9}>
                                                내성 {boss.strong === null ? <b>없음</b> : 
                                                (boss.strong.map(type => (
                                                    <Tooltip title={type}>
                                                        <img alt = {type} style={{ width: "23%"}} src={`images/types/${type}.png`}/>
                                                    </Tooltip>
                                                )))}
                                        </Col>
                                    </Row>
                                    {boss.description ?
                                    <div>
                                        <Row justify="center" align="middle" style={{marginTop: "20px",marginBottom: "20px"}}>
                                            <Col span={24}>
                                                {boss.description.map(desc => (
                                                    <h4><b>{desc}</b></h4>
                                                ))}
                                            </Col>
                                        </Row>
                                        <Divider></Divider>
                                    </div>
                                    : null}
                                    
                                </div> ))}
                        </Col>
                    </Row>
                    <Row justify="center">
                        {garul_time.items.map(item =>(
                            <Col xs={24} sm={8}>
                                <Card cover={<img alt={item.id} 
                                style={{ width: "20%", margin: "0 auto"}} 
                                src={`images/garul/item/${garul_time.name}-${item.id}.jpg`}/>}>
                                {item.description.map(desc => (
                                    <h4><b>{desc}</b></h4>
                                ))}
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    garul_time: state.garul_time,
    language: state.language
})

export default connect(mapStateToProps)(withRouter(EtcPage))
