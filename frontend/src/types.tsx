
// Mod information
type ModInfo = {
    path: string;
    minVersion: string;
    title: string;
    description: string;
    tags: string[];
    thumbnail: string;
    music: MusicInfo;
}

// Mod music information
type MusicInfo = {
    sourceFolder: string;
    whenUsingUnitsFromThisModPlayExclusively: string;
    addToNormalPlaylist: boolean;
}

// Mod class
type Mod = {
    mod_info: ModInfo;
    path: string;
    steam_workshop_id: string;
}

// Response class
type Response = {
    code: number;
    msg: string;
    data: Mod[];
}

export type {Response, Mod, ModInfo, MusicInfo}