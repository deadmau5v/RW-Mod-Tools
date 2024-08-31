import { Code, Config, Mod, Response } from "@/types";
import { main } from "@wails/go/models.ts";
import { useEffect, useState } from "react";
import { enqueueSnackbar, SnackbarProvider } from 'notistack';
import { Box, Skeleton, Typography, Backdrop, CircularProgress, Chip } from "@mui/material";
import ConfigType = main.ConfigType;
import "./EditMod.css";
import EditModWindow from "@/components/ui/editModWindow";
import { searchCodeMap } from "@/utils";
import { GetConfig } from "@wails/go/main/App";

// 标签
const Tag: React.FC<{ label: string, color: string }> = ({ label, color }) => {
    return (
        <Chip label={label} sx={{
            backgroundColor: "var(--bg-300)",
            color: color,
            fontSize: "0.8rem",
            height: "18px",
            borderRadius: "10px",
            marginRight: "5px",
        }} />
    )
}
const UnitCard: React.FC<{ unit: Config; onClick: () => void }> = ({ unit, onClick }) => {
    const title = unit.name;

    const keysToCheck = {
        "[core]": ["price", "displayText", "isBuilding", "isBio", "canNotBeDirectlyAttacked", "experimental"],
        "[graphics]": ["total_frames", "image"],
    };
    const results = searchCodeMap(keysToCheck, unit);
    const showTitle = results["[core]"]["displayText"];
    const isBuilding = results["[core]"]["isBuilding"];
    const canNotBeDirectlyAttacked = results["[core]"]["canNotBeDirectlyAttacked"];
    const experimental = results["[core]"]["experimental"];
    const price = results["[core]"]["price"];

    const tags = [
        price ? [price.value.includes("=") ? "自定义资源: " + price.value : "$" + price.value, "#3add10"] : null,
        isBuilding ? ["建筑", "#e7e9ea"] : null,
        canNotBeDirectlyAttacked ? ["无敌", "#cb5b64"] : null,
        experimental ? ["实验单位", "#e7bf14"] : null,
    ].filter((x) => x !== null);

    const [image, setImage] = useState<JSX.Element | null>(null);
    const [imageLoaded, setImageLoaded] = useState(false); // Track if image is loaded

    useEffect(() => {
        const getImage = async () => {
            const graphics = results['[graphics]'];
            const image: Code | undefined = graphics?.["image"];

            if (!image || image.value === "" || unit.path.startsWith("ROOT:") || unit.path.startsWith("/")) {
                return;
            }

            const total_frames_arg = graphics["total_frames"]?.value ? `&total_frames=${graphics["total_frames"].value}` : "";
            const path = unit.path.split("\\");
            const thumbnailPath = path.slice(0, path.length - 1).join("\\") + "\\" + image.value;
            const config = await GetConfig();
            const thumbnailPathApi = `http://${config.api_host}/mod/thumbnail?path=${encodeURI(thumbnailPath)}${total_frames_arg}`;
            const thumbnailPathCheckApi = `http://${config.api_host}/mod/check_thumbnail?path=${encodeURI(thumbnailPath)}`;

            const data = await fetch(thumbnailPathCheckApi).then(res => res.json());
            if (data.code === 200) {
                setImage(<img src={thumbnailPathApi} alt="Thumbnail" onLoad={() => setImageLoaded(true)} />);
            } else {
                setImage(null);
            }
        };

        if (!imageLoaded) {
            getImage();
        }
    }, [unit.path, results, imageLoaded]);

    return (
        <div onClick={onClick} style={{ width: '100%', display: 'flex' }}>
            <Box key={unit.path} className="unit-card" sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                {image && <Box sx={{ flex: '1', maxWidth: '10%', display: "flex", justifyContent: "center" }}>{image}</Box>}
                <Box sx={{ flex: '2', padding: '10px' }}>
                    {showTitle ? (
                        <Typography style={{ fontSize: "1.2rem", fontWeight: "bold", color: "var(--primary-100)" }}>
                            <span style={{ color: 'var(--primary-100)' }}>{showTitle.value}</span> <span style={{ color: 'var(--accent-100)', fontSize: "0.8rem" }}>({title})</span>
                        </Typography>
                    ) : (
                        <Typography sx={{ fontSize: "1.2rem", fontWeight: "bold", color: "var(--primary-100)" }}>
                            {title}
                        </Typography>
                    )}
                    <Typography sx={{ fontSize: "0.8rem", color: "var(--text-200)" }}>
                        {unit.path}
                    </Typography>
                    <Box sx={{ display: 'flex', gap: '5px', marginTop: '5px' }}>
                        {tags && tags.map((tag) => { return tag ? <Tag key={tag[0]} label={tag[0]} color={tag[1]} /> : <></> })}
                    </Box>
                </Box>
            </Box>
        </div>
    );
};

const LoadingSkeleton: React.FC = () => (
    <Skeleton variant="rectangular" width="100%" height="100%" sx={{
        background: 'var(--bg-200)',
        borderRadius: '10px',
        border: '1px solid var(--bg-300)',
        padding: '10px',
    }}>
        <div style={{ height: '80px' }}></div>
    </Skeleton>
);

export default function EditMod({ config, mod }: { config: ConfigType, mod: Mod }) {
    const [units, setUnits] = useState<Config[]>([]);
    const [selectUnit, setSelectUnit] = useState<Config>();
    const [open, setOpen] = useState(true);

    const sortUnit = (units: Config[]) => {
        // 对代码进行排序
        // 可能后续增加搜索 暂时写在这里作为函数
        return units.sort((a, b) => a.name.localeCompare(b.name));
    }

    const init = async () => {
        const api = `http://${config.api_host}/units/list?path=${encodeURI(mod.path)}`;
        fetch(api).then(data => data.json()).then((data: Response) => {
            if (data.code === 200) {
                const sortedData = sortUnit(data.data)
                setUnits(sortedData);
                setOpen(false);
            } else {
                enqueueSnackbar(data.msg, { variant: "error" });
                setOpen(false);
            }
        }).catch(() => {
            enqueueSnackbar("网络错误", { variant: "error" });
            setOpen(false);
        });
    };

    useEffect(() => {
        if (units.length === 0) {
            init();
        }
    }, [units]);

    return (
        <Box id="edit-main-box">
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
                open={open}
            >
                <CircularProgress color="inherit" />
                <Typography>解析中...</Typography>
            </Backdrop>

            {selectUnit && <EditModWindow mod={mod} unit={selectUnit} setConfig={setSelectUnit} />}

            <SnackbarProvider />
            <div className="edit-mod-info">
                <h2 style={{ color: "var(--primary-100)", fontSize: "1.5rem", fontWeight: "bold" }}>
                    {mod.mod_info.title}
                </h2>
                <h4 style={{ color: "var(--text-200)", fontStyle: "bold", paddingRight: 10 }}>
                    {mod.mod_info.description.replaceAll("\\n", " ")}
                </h4>
            </div>
            {/* 编辑Mod ini */}
            <div id="unit-cards">
                {units.length > 0 ? units.map((u) => (
                    <UnitCard key={u.path} unit={u} onClick={() => setSelectUnit(u)} />
                )) : (
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        <LoadingSkeleton />
                        <LoadingSkeleton />
                        <LoadingSkeleton />
                        <LoadingSkeleton />
                        <LoadingSkeleton />
                    </Box>
                )}
            </div>
        </Box>
    );
}