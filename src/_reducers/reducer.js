import * as types from "../_actions/types";
import present_beast_castle from "../data/present_beast_castle.json";
import ancient_zer_jung from "../data/ancient_zer_jung.json";
import future_mayu from "../data/future_mayu.json";
import present_dogma from "../data/present_dogma.json"
import present_moon from "../data/present_moon.json"

const dungeons = {
    present_beast_castle: present_beast_castle,
    ancient_zer_jung: ancient_zer_jung,
    future_mayu: future_mayu,
    present_dogma: present_dogma,
    present_moon: present_moon
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