import React, { useState } from "react";
import { ChevronRight, ChevronLeft, List } from "lucide-react";
import { NavLink } from 'react-router-dom';
import { BrowserOpenURL } from "@wails/runtime/runtime"
// @ts-ignore
import { main } from "@wails/go/models.ts";
import ConfigType = main.ConfigType;
import { Folder } from "@mui/icons-material";
const cn = (...classes: string[]) => {
    return classes.join(" ");
};


export default function Aside({ config }: { config: ConfigType }) {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [showPaths, setShowPaths] = useState(false);

    function openPath(path: string, config: ConfigType) {
        async function fn() {
            path = `"${config.rw_dir}/${path}"`
                .replaceAll('\\', '/')
                .replaceAll('//', '/')
            BrowserOpenURL(path);
            setShowPaths(false);
        }
        fn();
    }

    return (
        <div id="aside" className={cn("w-[200px] h-full", isCollapsed ? "w-[60px]" : "", "p-2 flex flex-col")}>
            {/* 折叠按钮 */}
            <AsideOption
                Icon={<ChevronLeft className="w-4 h-4 text-[var(--text-100)] transition-all duration-300" />}
                IconCollapsed={<ChevronRight className="w-4 h-4 text-[var(--text-100)] transition-all duration-300" />}
                Text={"折叠"}
                onClick={() => setIsCollapsed(!isCollapsed)}
                isCollapsed={isCollapsed}
            />
            <hr className="w-full h-[1px] mt-2 mb-2 border-[var(--bg-300)]" />

            <NavLink to="/" className={({ isActive }) => cn("flex items-center justify-center w-full h-10 hover:bg-[var(--bg-300)] rounded-xl transition-all duration-300 mt-2 mb-2", isActive ? 'bg-[var(--bg-300)]' : '')}>
                {!isCollapsed ? (
                    <>
                        <List className="w-4 h-4 text-[var(--text-100)] transition-all duration-300" />
                        <span className="text-[var(--text-100)] ml-2 hidden md:block text-sm whitespace-nowrap overflow-hidden transition-all duration-300">Mod列表</span>
                    </>
                ) : (
                    <List className="w-4 h-4 text-[var(--text-100)] transition-all duration-300" />
                )}
            </NavLink>

            <hr className="w-full h-[1px] mt-auto mb-2 border-[var(--bg-300)]" />

            <button className={"flex items-center justify-center w-full h-10 hover:bg-[var(--bg-300)] rounded-xl transition-all duration-300 mb-2"} onClick={() => setShowPaths(!showPaths)}>
                {!isCollapsed ? (
                    <>
                        <Folder className="w-4 h-4 text-[var(--text-100)] transition-all duration-300" />
                        <span className="text-[var(--text-100)] ml-2 hidden md:block text-sm whitespace-nowrap overflow-hidden transition-all duration-300">打开游戏路径</span>
                    </>
                ) : (
                    <Folder className="w-4 h-4 text-[var(--text-100)] transition-all duration-300" />
                )}
            </button>

            {showPaths && (
                <div className="flex flex-col mt-2">
                    {isCollapsed ?
                        <button title="模组" onClick={() => openPath('mods/units', config)} className="flex items-center justify-center w-full h-10 hover:bg-[var(--bg-300)] rounded-xl transition-all duration-300 mb-1">
                            <span className="text-[var(--text-100)]">模</span>
                        </button>
                        : <button onClick={() => openPath('mods/units', config)} className="flex items-center justify-center w-full h-10 hover:bg-[var(--bg-300)] rounded-xl transition-all duration-300 mb-1">
                            <span className="text-[var(--text-100)]">Mod</span>
                        </button>}
                    {isCollapsed ?
                        <button title="地图" onClick={() => openPath('mods/maps', config)} className="flex items-center justify-center w-full h-10 hover:bg-[var(--bg-300)] rounded-xl transition-all duration-300 mb-1">
                            <span className="text-[var(--text-100)]">图</span>
                        </button>
                        : <button onClick={() => openPath('mods/maps', config)} className="flex items-center justify-center w-full h-10 hover:bg-[var(--bg-300)] rounded-xl transition-all duration-300 mb-1">
                            <span className="text-[var(--text-100)]">地图</span>
                        </button>}
                    {isCollapsed ?
                        <button title="游戏根目录" onClick={() => openPath('', config)} className="flex items-center justify-center w-full h-10 hover:bg-[var(--bg-300)] rounded-xl transition-all duration-300 mb-1">
                            <span className="text-[var(--text-100)]">根</span>
                        </button>
                        : <button onClick={() => openPath('', config)} className="flex items-center justify-center w-full h-10 hover:bg-[var(--bg-300)] rounded-xl transition-all duration-300 mb-1">
                            <span className="text-[var(--text-100)]">游戏根目录</span>
                        </button>}
                </div>
            )}
        </div>
    );
}

function AsideOption({ Icon, Text, onClick, isCollapsed, IconCollapsed, ClassName }: { Icon: React.ReactNode, Text: string, onClick: () => void, isCollapsed: boolean, IconCollapsed: React.ReactNode, ClassName?: string }) {

    return (
        <button className={cn("flex items-center justify-center w-full h-10 hover:bg-[var(--bg-300)] rounded-xl transition-all duration-300 mt-2 mb-2", ClassName ? ClassName : "")} onClick={onClick}>
            {isCollapsed ? IconCollapsed : Icon}
            {!isCollapsed && (
                <span className="text-[var(--text-100)] ml-2 hidden md:block text-sm whitespace-nowrap overflow-hidden transition-all duration-300"
                    style={{ width: isCollapsed ? '0' : 'auto', opacity: isCollapsed ? 0 : 1 }}>
                    {Text}
                </span>
            )}
        </button>
    )
}
