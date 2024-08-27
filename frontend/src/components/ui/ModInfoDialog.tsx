import "./ModInfoDialog.css";
import Window from "./window";
import { main } from "@wails/go/models.ts";
import ConfigType = main.ConfigType;
import { Typography, TableContainer, Table, TableBody, TableRow, TableCell, Paper } from '@mui/material';
import { SnackbarProvider, enqueueSnackbar } from 'notistack';
import { Mod, Response } from "@/types";

export default function ModInfoDialog({ mod, onClose, config }: { mod: Mod, onClose: () => void, config: ConfigType }) {

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

        return <img className="mod-info-dw-thumbnail" src={thumbnailPathApi} alt={mod.mod_info.title} id={imgid} />;
    }

    const getTableItem = (key: string, value: string) => {
        if (value === "" || value === null || value === undefined) {
            return <></>
        }

        return <TableRow sx={{
            borderBottom: "1px solid var(--bg-200)",
            overflow: "hidden"
        }}>
            <TableCell component="th" scope="row"
                sx={{
                    color: "var(--text-100)",
                    border: "none",
                    minWidth: "100px"
                }}
            >
                {key}
            </TableCell>
            <TableCell align="right"
                sx={{
                    color: "var(--text-100)",
                    border: "none"
                }}

                onClick={() => {
                    navigator.clipboard.writeText(value).then(() => {
                        enqueueSnackbar('已复制到剪贴板', { variant: 'success' });
                    }).catch(() => {
                        enqueueSnackbar('复制失败', { variant: 'error' });
                    });
                }}
            >
                {value}
            </TableCell>
        </TableRow>
    }

    return <Window onClose={onClose} title={"MOD 信息 - " + mod.mod_info.title}>
        <SnackbarProvider />
        <div style={{
            margin: "30px 0 50px 0",
            display: "flex",
            justifyContent: "flex-start",
            flexDirection: "column",
            alignItems: "center"
        }}>
            {getModThumbnail(mod)}
            <div className="mod-dw-detil">
                <Typography variant="h6" gutterBottom component="div" sx={{
                    textAlign: "center",
                    fontWeight: 'bold', color: 'var(--primary-200)'
                }}>
                    {mod.mod_info.title}
                </Typography>
                <TableContainer component={Paper}>
                    <Table aria-label="simple table" sx={{
                        background: "var(--bg-100)",
                    }}>
                        <TableBody sx={{
                            overflow: "hidden"
                        }}>
                            {getTableItem("标题", mod.mod_info.title)}
                            {getTableItem("描述", mod.mod_info.description)}
                            {getTableItem("位置", mod.path)}
                            {getTableItem("标签", mod.mod_info.tags.join(", "))}
                            {getTableItem("版本", mod.mod_info.minVersion)}
                            {getTableItem("创意工坊", `https://steamcommunity.com/sharedfiles/filedetails/?id=${mod.steam_workshop_id}`)}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
    </Window>
}