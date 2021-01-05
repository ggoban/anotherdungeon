import * as types from "../_actions/types";
import present_beast_castle from "../data/present_beast_castle.json";
import ancient_zer_jung from "../data/ancient_zer_jung.json";
import ancient_nadara from "../data/ancient_nadara.json";
import ancient_swamp from "../data/ancient_swamp.json";
import future_mayu from "../data/future_mayu.json";
import future_industry from "../data/future_industry.json";
import present_dogma from "../data/present_dogma.json"
import present_moon from "../data/present_moon.json"
import present_miglance from "../data/present_miglance.json"

const dungeons = {
    present_beast_castle: present_beast_castle,
    ancient_zer_jung: ancient_zer_jung,
    future_mayu: future_mayu,
    present_dogma: present_dogma,
    present_moon: present_moon,
    future_industry: future_industry,
    ancient_nadara: ancient_nadara,
    ancient_swamp: ancient_swamp,
    present_miglance: present_miglance
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