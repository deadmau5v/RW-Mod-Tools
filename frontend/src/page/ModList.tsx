import { useEffect, useState } from "react";
import { main } from "@wails/go/models.ts";
import ConfigType = main.ConfigType;
import { SnackbarProvider, enqueueSnackbar } from 'notistack';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Backdrop, CircularProgress, Typography } from "@mui/material";
import "./ModList.css";
import ModInfoDialog from "@/components/ui/ModInfoDialog";
import { useNavigate } from "react-router-dom";
import { Refresh } from "@mui/icons-material";
import { Mod, Response } from "@/types";

const dialogStyles = {
    background: "var(--bg-100)",
    color: "var(--text-100)"
};

const buttonStyles = {
    background: "var(--primary-100)",
    marginRight: "10px",
    color: "var(--text-200)",
    "&:hover": {
        background: "var(--primary-200)",
        color: "var(--bg-200)"
    }
};

export default function ModList({ config, setEditMod }: { config: ConfigType, setEditMod: (mod: Mod | null) => void }) {
    const [mods, setMods] = useState<Mod[]>([]);
    const [showModInfo, setShowModInfo] = useState<Mod | null>(null);
    const [deleteConfirmOpen, setDeleteConfirmOpen] = useState(false);
    const [modToDelete, setModToDelete] = useState<Mod | null>(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    const getModThumbnail = (mod: Mod) => {
        const imgid = `${mod.path}-${mod.mod_info.thumbnail}`;
        const thumbnailPath = `${mod.path}\\${mod.mod_info.thumbnail}`;
        const thumbnailPathApi = `http://${config.api_host}/mod/thumbnail?path=${encodeURI(thumbnailPath)}`;
        const thumbnailPathCheckApi = `http://${config.api_host}/mod/check_thumbnail?path=${encodeURI(thumbnailPath)}`;

        fetch(thumbnailPathCheckApi).then(res => res.json()).then((data: Response) => {
            if (data.code !== 200) {
                document.getElementById(imgid)?.remove();
                console.log(data);
            }
        });

        return <img className="mod-item-thumbnail" src={thumbnailPathApi} alt={mod.mod_info.title} id={imgid} />;
    };

    const init = () => {
        const api = `http://${config.api_host}/mod/list?path=${encodeURIComponent(config.rw_dir)}`;
        setLoading(true);

        fetch(api)
            .then(res => res.json())
            .then((data: Response) => {
                if (data.code === 200) {
                    setMods(data.data);
                } else {
                    enqueueSnackbar(data.msg);
                }
            })
            .catch(() => {
                enqueueSnackbar("网络错误");
            })
            .finally(() => {
                setLoading(false); 
            });
    };

    useEffect(() => {
        init();
    }, []);

    const handleDeleteClick = (mod: Mod) => {
        setModToDelete(mod);
        setDeleteConfirmOpen(true);
    };

    const handleDeleteConfirm = () => {
        if (modToDelete) {
            fetch(`http://${config.api_host}/mod/delete?path=${encodeURIComponent(modToDelete.path)}`)
                .then(res => res.json())
                .then(data => {
                    if (data.code === 200) {
                        setDeleteConfirmOpen(false);
                        setModToDelete(null);
                        setMods(mods.filter(mod => mod.path !== modToDelete.path));
                        init();
                    }
                });
        }
    };

    const handleDeleteCancel = () => {
        setDeleteConfirmOpen(false);
        setModToDelete(null);
    };

    const handleEditMod = (mod: Mod) => {
        setEditMod(mod);
        if (mod) {
            navigate(`/edit-mod`);
        }
    };

    return (
        <Box className="mod-list">
            <SnackbarProvider />
            {showModInfo && <ModInfoDialog mod={showModInfo} onClose={() => setShowModInfo(null)} config={config} />}

            <Dialog
                open={deleteConfirmOpen}
                onClose={handleDeleteCancel}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                id="alert-remove-dialog"
            >
                <DialogTitle id="alert-dialog-title" sx={dialogStyles}>{"确认删除"}</DialogTitle>
                <DialogContent sx={dialogStyles}>
                    <DialogContentText id="alert-dialog-description" style={{ color: "var(--text-100)" }}>
                        您确定要删除这个MOD吗?
                        <br />
                        <span style={{ color: "var(--text-200)" }}>删除后无法恢复</span>
                    </DialogContentText>
                </DialogContent>
                <DialogActions sx={dialogStyles}>
                    <Button onClick={handleDeleteCancel} sx={{ color: "var(--primary-100)" }}>取消</Button>
                    <Button onClick={handleDeleteConfirm} autoFocus sx={{ color: "var(--primary-100)" }}>确认</Button>
                </DialogActions>
            </Dialog>

            {loading ? (
                <Backdrop
                    sx={(theme) => ({
                        color: 'var(--primary-100)',
                        zIndex: theme.zIndex.drawer + 1,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '10px',
                    })}
                    open={loading}
                >
                    <CircularProgress color="inherit" />
                    <Typography>加载中...</Typography>
                </Backdrop>
            ) : (
                mods.map((mod) => (
                    <Box className="mod-list-item" key={mod.path} onClick={() => setShowModInfo(mod)}>
                        <div className="flex">
                            {getModThumbnail(mod)}
                            <div className="mod-info">
                                <div className="mod-info-title">{mod.mod_info.title}</div>
                                <div className="mod-info-description">
                                    {mod.mod_info.description.replaceAll("\\n", " ")}
                                </div>
                                <div className="mod-item-tags">
                                    {mod.mod_info.tags.map((tag) => (
                                        <span className="mod-item-tag" key={`${mod.path}-${tag}`}>{tag}</span>
                                    ))}
                                </div>
                                <div className="mod-item-options">
                                    <Button sx={buttonStyles} onClick={(event) => {
                                        event.stopPropagation();
                                        handleEditMod(mod);
                                    }}>编辑</Button>
                                    <Button sx={buttonStyles} onClick={(event) => {
                                        event.stopPropagation();
                                        handleDeleteClick(mod);
                                    }}>删除</Button>
                                </div>
                            </div>
                        </div>
                    </Box>
                ))
            )}
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
                    init();
                    navigate("/");
                }}
            >
                <Refresh />
            </Button>
        </Box>
    );
}