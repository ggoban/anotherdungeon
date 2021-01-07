import * as types from "./types";

export function setDungeon(dungeon) {
    return {
        type: types.SET_DUNGEON,
        dungeon
    };
}

export const setLanguage = (language) => ({
    type: types.SET_LANGUAGE,
    language
})