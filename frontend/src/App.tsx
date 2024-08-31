import { useEffect, useState } from "react";
import Aside from "@/components/ui/aside";
import TitleBar from "@/components/ui/title_bar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GetConfig } from "@wails/go/main/App";
import { main } from "@wails/go/models.ts";
import ConfigType = main.ConfigType;
import SelectGameDir from "@/SelectGameDir.tsx";
import ImgEdit from "./components/ui/imgEdit";
import ModList from "@/page/ModList";
import { Mod } from "./types";
import EditMod from "./page/EditMod";
// @ts-ignore
// import Welcome from "@/page/Welcome"
// Mod information

function App() {

    const [config, setConfig] = useState<ConfigType>();
    const [editMod, setEditMod] = useState<Mod | null>(null);

    useEffect(() => {
        console.log(`%c RW MOD %c Tools %c 欢迎使用`, "color: #ffffff; background: #14823B", "color: #0000000; background: #FFD700", "")

        if (config) {
            console.log("%c 全局配置 API地址 %s", "color: #ffffff; background: #14823B", config?.api_host)
            console.log("%c 全局配置 游戏地址 %s", "color: #ffffff; background: #14823B", config?.rw_dir)
            console.log("%c 全局设置 应用标题 %s", "color: #ffffff; background: #14823B", config?.title)
        }

        if (config) return;


        async function init() {
            const config = await GetConfig();
            setConfig(config);
        }
        init();

        const handleContextMenu = (event: any) => {
            event.preventDefault();
        };

        const handleDragOver = (event: any) => {
            event.preventDefault();
        };

        const handleDrop = (event: any) => {
            event.preventDefault();
        };

        document.addEventListener("contextmenu", handleContextMenu);
        document.addEventListener('dragover', handleDragOver);
        document.addEventListener('drop', handleDrop);
        // 禁用右键 拖入
        document.removeEventListener("contextmenu", handleContextMenu);
        document.removeEventListener('dragover', handleDragOver);
        document.removeEventListener('drop', handleDrop);
    }, []);

    //#region 渲染
    return (
        <div id="root">
            <TitleBar config={config} />
            {
                config?.rw_dir ?
                    <div className="flex w-full h-[calc(100vh-32px)]">
                        <Router>
                            <Aside config={config} />

                            <div id="content">
                                <Routes>
                                    {/* <Route path="/" element={<Welcome config={config} />} /> */}
                                    {/* <Route path="/modlist" element={<ModList config={config} />} /> */}
                                    <Route path="/" element={<ModList config={config} setEditMod={setEditMod} />} />
                                    { editMod && <Route path="/edit-mod" element={<EditMod config={config} mod={editMod} />} /> }
                                </Routes>
                            </div>
                        </Router>
                    </div>
                    :
                    // <SelectGameDir config={config} setConfig={setConfig} />
                    <ImgEdit />
                    // <></>
            }
        </div>
    );
    //#endregion
}

export default App