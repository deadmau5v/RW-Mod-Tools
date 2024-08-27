import { useEffect, useState } from "react";
import { main } from "@wails/go/models.ts";
import ConfigType = main.ConfigType;
import { SnackbarProvider, enqueueSnackbar } from 'notistack';

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
}

// Response class
type Response = {
    code: number;
    msg: string;
    data: Mod[];
}

export default function ModList({ config }: { config: ConfigType }) {
    const [mods, setMods] = useState<Mod[]>([]);


    const init = () => {
        if (mods.length !== 0) {
            // 防止重复加载
            return;
        };

        const api = `http://${config.api_host}/mod/list?path=${encodeURIComponent(config.rw_dir)}`;

        fetch(api, {
            method: "GET",
        })
            .then((res) => res.json())
            .then((data: Response) => {
                try {
                    if (data.code === 200) {
                        setMods(data.data);
                        return
                    }
                    enqueueSnackbar(data.msg)
                } catch (error) {
                    enqueueSnackbar("数据处理错误")
                }
            })
            .catch((error) => {
                enqueueSnackbar("网络错误", error)
            });
    }

    useEffect(() => {
        init();
    }, []);


    return (
        <div>
            <SnackbarProvider />
            {mods.map((mod) => (
                <div key={mod.path}>
                    {mod.mod_info.title}
                </div>
            ))}
        </div>
    );
}