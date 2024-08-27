import { useEffect, useState } from "react";
import { main } from "@wails/go/models.ts";
import ConfigType = main.ConfigType;
import { SnackbarProvider, enqueueSnackbar } from 'notistack';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import "./ModList.css";
import ModInfoDialog from "@/components/ui/ModInfoDialog";
import { useNavigate } from "react-router-dom";
import { Refresh } from "@mui/icons-material";
import { Mod, Response } from "@/types";


export default function ModList({ config, setEditMod }: { config: ConfigType, setEditMod: (mod: Mod | null) => void }) {
    const [mods, setMods] = useState<Mod[]>([]);
    const [showModInfo, setShowModInfo] = useState<Mod | null>(null);
    const [deleteConfirmOpen, setDeleteConfirmOpen] = useState(false);
    const [modToDelete, setModToDelete] = useState<Mod | null>(null);
    const navigate = useNavigate()

    const getModThumbnail = (mod: Mod) => {
        let imgid = `${mod.path}-${mod.mod_info.thumbnail}`

        let thumbnailPath = mod.path + "\\" + mod.mod_info.thumbnail;
        let thumbnailPathApi = `http://${config.api_host}/mod/thumbnail?path=${encodeURI(thumbnailPath)}`;
        let thumbnailPathCheckApi = `http://${config.api_host}/mod/check_thumbnail?path=${encodeURI(thumbnailPath)}`;

        fetch(thumbnailPathCheckApi).then(res => res.json()).then((data: Response) => {
            if (data.code !== 200) {
                document.getElementById(imgid)?.remove()
                console.log(data)
            }
        })

        return <img className="mod-item-thumbnail" src={thumbnailPathApi} alt={mod.mod_info.title} id={imgid} />;
    }

    const init = () => {
        // if (mods.length !== 0) {
        //     // 防止重复加载
        //     return;
        // };

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

    const handleDeleteClick = (mod: Mod) => {
        setModToDelete(mod);
        setDeleteConfirmOpen(true);
    };

    const handleDeleteConfirm = () => {
        if (modToDelete) {
            // 删除逻辑

            fetch(`http://${config.api_host}/mod/delete?path=${encodeURIComponent(modToDelete.path)}`).then(
                res => res.json()
            ).then(data => {
                if (data.code === 200) {
                    setDeleteConfirmOpen(false);
                    setModToDelete(null);
                    setMods(mods.filter(mod => mod.path !== modToDelete.path))
                    init()
                }
            })
        }
    };

    const handleDeleteCancel = () => {
        setDeleteConfirmOpen(false);
        setModToDelete(null);
    };

    const handleEditMod = (mod: Mod) => {
        setEditMod(mod)
        if (mod) {
            // Navigate to the edit-mod route with the mod's path as a parameter
            navigate(`/edit-mod`);
        }
    }

    return (
        <Box className="mod-list">
            <SnackbarProvider />
            {showModInfo && <ModInfoDialog mod={showModInfo} onClose={() => {
                setShowModInfo(null)
            }} config={config} />}

            {/* 确定删除窗口 */}
            <Dialog
                open={deleteConfirmOpen}
                onClose={handleDeleteCancel}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                id="alert-remove-dialog"
            >
                <DialogTitle id="alert-dialog-title"
                    sx={{
                        background: "var(--bg-100)",
                        color: "var(--text-100)"
                    }}
                >{"确认删除"}</DialogTitle>
                <DialogContent sx={{
                    background: "var(--bg-100)"
                }}>
                    <DialogContentText id="alert-dialog-description" style={{
                        color: "var(--text-100)"
                    }}>
                        您确定要删除这个MOD吗?
                        <br />
                        <span style={{
                            color: "var(--text-200)"
                        }}>删除后无法恢复</span>
                    </DialogContentText>

                </DialogContent>
                <DialogActions sx={{
                    background: "var(--bg-100)"
                }}>
                    <Button onClick={handleDeleteCancel} sx={{
                        color: "var(--primary-100)"
                    }}>
                        取消
                    </Button>
                    <Button onClick={handleDeleteConfirm} autoFocus sx={{
                        color: "var(--primary-100)"
                    }}>
                        确认
                    </Button>
                </DialogActions>
            </Dialog>

            {

                // mod列表
                mods.map((mod) => (
                    <Box className="mod-list-item" key={mod.path} onClick={() => {
                        setShowModInfo(mod)
                    }}>
                        <div className="flex">
                            {getModThumbnail(mod)}
                            <div className="mod-info">
                                <div className="mod-info-title">{mod.mod_info.title}</div>
                                <div className="mod-info-description">
                                    {mod.mod_info.description}
                                </div>
                                <div className="mod-item-tags">
                                    {
                                        mod.mod_info.tags.map((tag) => (
                                            <span className="mod-item-tag" key={`${mod.path}-${tag}`}>{tag}</span>
                                        ))
                                    }
                                </div>
                                <div className="mod-item-options">
                                    <Button sx={{
                                        background: "var(--primary-100)",
                                        marginRight: "10px",
                                        color: "var(--text-200)",
                                        "&:hover": {
                                            background: "var(--primary-200)",
                                            color: "var(--bg-200)"
                                        }
                                    }}
                                        onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
                                            event.stopPropagation();
                                            handleEditMod(mod);
                                        }}
                                    >编辑</Button>
                                    <Button sx={{
                                        background: "var(--primary-100)",
                                        marginRight: "10px",
                                        color: "var(--text-200)",
                                        "&:hover": {
                                            background: "var(--primary-200)",
                                            color: "var(--bg-200)"
                                        }
                                    }}
                                        onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
                                            event.stopPropagation();
                                            handleDeleteClick(mod);
                                        }}>
                                        删除
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </Box>
                ))
            }
            <Button
                sx={{
                    position: "fixed",
                    bottom: "20px",
                    right: "20px",
                    background: "var(--primary-100)",
                    color: "var(--text-200)",
                    "&:hover": {
                        background: "var(--primary-200)",
                        color: "var(--bg-200)"
                    }
                }}
                onClick={() => {
                    const fn = () => {
                        init()
                        navigate("/")
                    }
                    fn()
                }}
            >
                <Refresh />
            </Button>
        </Box>
    );
}