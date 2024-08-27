import { Box } from '@mui/material';
// @ts-ignore
import { main } from "@wails/go/models.ts";
import ConfigType = main.ConfigType;
import { Typography, Button } from '@mui/material';
import { Upload } from '@mui/icons-material';
import { useState } from 'react';
import { SetConfig } from '@wails/go/main/App';
import DirectoryPicker from "@/components/ui/selectDir"

export default function SelectGameDir({ config, setConfig }: { config: ConfigType | undefined, setConfig: (config: ConfigType) => void }) {

    const [gameDir, setGameDir] = useState<string>('');
    const [showDirectoryPicker, setShowDirectoryPicker] = useState<boolean>(false);

    return (
        <>
            {
                showDirectoryPicker &&
                <DirectoryPicker setDir={setGameDir} onClose={() => {setShowDirectoryPicker(false)}}/>
            }

            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                height: '80vh',
                width: '80%',
                background: 'var(--bg-100)',
                borderRadius: '16px',
                border: '5px dashed var(--bg-300)',
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
            }}
                onClick={() => {
                    console.log("选择..")
                    setShowDirectoryPicker(true);
                }}>
                <Upload sx={{
                    color: 'var(--text-100)',
                    fontSize: '100px',
                }} />
                <Typography variant="h5" component="h1" gutterBottom style={{
                    color: 'var(--text-100)',
                    marginTop: '16px',
                }}>请选择目录</Typography>
                <Typography variant="h5" component="h1" gutterBottom style={{
                    color: 'var(--text-200)',
                    marginTop: '5px'
                }}>拖动或点击选择</Typography>
                {gameDir &&
                    <>
                        <Typography variant="h5" component="h1" gutterBottom style={{
                            color: 'var(--accent-100)',
                            marginTop: '5px'
                        }}>{gameDir.length > 55 ? gameDir.substring(0, 55) + "..." : gameDir}</Typography>
                        <Button style={{
                            background: 'var(--primary-100)',
                            color: 'var(--text-100)',
                            marginTop: '16px',
                        }} onClick={(event) => {
                            event.stopPropagation();
                            const newConfig = ConfigType.createFrom(config);
                            newConfig.rw_dir = gameDir;
                            SetConfig(newConfig);
                            setConfig(newConfig);
                        }}>保存</Button>
                    </>
                }
            </Box>
        </>
    );
}