import React from 'react'
import {Typography} from "antd";

const {Title} = Typography;

function DungeonInfo( {dungeon} ) {
    return (
        <div style={{marginTop: "10px"}}>
            <Title level={2}>{dungeon.name}</Title>
            <div>
                권장레벨 : <b className="green">
                    {dungeon.hard ? dungeon.hard.level : "X"}
                </b> / <b className="red">
                    {dungeon.veryhard ? dungeon.veryhard.level : "X"}
                </b>
            </div>
            3번째 칸 : {dungeon.reward} <br/>
            <b className="green">Hard</b> : {dungeon.hard ? dungeon.hard.count : "없음"} <br/>
            <b className="red">Very Hard</b> : {dungeon.veryhard ? dungeon.veryhard.count : "없음"}
        </div>
    )
}

export default DungeonInfo
