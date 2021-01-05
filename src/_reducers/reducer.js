import * as types from "../_actions/types";
import present_beast_castle from "../data/present_beast_castle.json";
import ancient_zer_jung from "../data/ancient_zer_jung.json";

const dungeons = {
    present_beast_castle: present_beast_castle,
    ancient_zer_jung: ancient_zer_jung
}

const initialState = {
    dungeon: dungeons.ancient_zer_jung,
    language: "kor"
}

const counter = (state=initialState, action) => {
    switch(action.type) {
        case types.SET_DUNGEON:
            return {
                ...state,
                dungeon: dungeons[action.dungeon]
            }
        case types.SET_LANGUAGE:
            return {
                ...state,
                language: action.language
            }
        default: 
            return state;
    }
}

export default counter;