import * as types from "./types";

export const setDungeon = (dungeon) => ({
    type: types.SET_DUNGEON,
    dungeon
})

export const setLanguage = (language) => ({
    type: types.SET_LANGUAGE,
    language
})