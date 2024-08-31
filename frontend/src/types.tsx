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
    data: any;
}


type Section = {
    key: string,
    name: string,
}

type Code = {
    Section: Section,
    comment: string,
    demo: string,
    description: string,
    key: string,
    name: string,
    value_type: string,
    value: string,
}

type Config = {
    name: string
    code: Code[]
    path: string
}

export type {Response, Mod, ModInfo, MusicInfo, Section, Code, Config}
