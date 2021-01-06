import * as types from "../_actions/types";

import ancient_zer_jung from "../data/ancient_zer_jung.json";
import ancient_zer_thund from "../data/ancient_zer_thund.json";
import ancient_nadara from "../data/ancient_nadara.json";
import ancient_swamp from "../data/ancient_swamp.json";
import ancient_time from "../data/ancient_time.json";
import ancient_star from "../data/ancient_star.json";
import ancient_dragon from "../data/ancient_dragon.json";
import future_mayu from "../data/future_mayu.json";
import future_saki from "../data/future_saki.json";
import future_zeno from "../data/future_zeno.json";
import future_ship from "../data/future_ship.json";
import future_toto from "../data/future_toto.json";
import future_kms from "../data/future_kms.json";
import future_corridor from "../data/future_corridor.json";
import future_industry from "../data/future_industry.json";
import present_dogma from "../data/present_dogma.json"
import present_moon from "../data/present_moon.json"
import present_damak from "../data/present_damak.json"
import present_miglance from "../data/present_miglance.json"
import present_beast_castle from "../data/present_beast_castle.json";
import present_fire_beast from "../data/present_fire_beast.json";
import present_weird from "../data/present_weird.json";
import present_labyrinth from "../data/present_labyrinth.json";
import etc_exp from "../data/etc_exp.json";
import etc_git from "../data/etc_git.json";

const dungeons = {
    present_beast_castle: present_beast_castle,
    ancient_zer_jung: ancient_zer_jung,
    ancient_zer_thund: ancient_zer_thund,
    future_mayu: future_mayu,
    present_dogma: present_dogma,
    present_moon: present_moon,
    future_industry: future_industry,
    ancient_nadara: ancient_nadara,
    ancient_swamp: ancient_swamp,
    present_miglance: present_miglance,
    future_zeno: future_zeno,
    future_ship: future_ship,
    ancient_time: ancient_time,
    future_corridor: future_corridor,
    ancient_star: ancient_star,
    present_damak: present_damak,
    future_toto: future_toto,
    present_fire_beast: present_fire_beast,
    present_weird: present_weird,
    future_kms: future_kms,
    present_labyrinth: present_labyrinth,
    future_saki: future_saki,
    ancient_dragon: ancient_dragon,
    etc_exp: etc_exp,
    etc_git: etc_git
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