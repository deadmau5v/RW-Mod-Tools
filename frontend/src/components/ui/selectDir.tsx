import { Box, Drawer, Button, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { Storage, InsertDriveFile, Folder, ArrowBack } from '@mui/icons-material';
import { GetDisks, ListDir, GetGameDir } from '@wails/go/main/App';
// @ts-ignore
import { main } from "@wails/go/models.ts";
import FileInfo = main.FileInfo;

const DirectoryPicker = ({ setDir, onClose }: { setDir: (dir: string) => void; onClose: () => void }) => {
    const [disks, setDisks] = useState<{ [key: string]: number }>({});
    const [selectDir, setSelectDir] = useState<string>('');
    const [files, setFiles] = useState<FileInfo[]>([]);
    const [gameDirs, setGameDirs] = useState<string[]>([]);

    const GetFileList = async () => {
        if (selectDir) {
            const filesList = await ListDir(selectDir);
            setFiles(filesList);
        }
    };

    useEffect(() => {
        const fetchDisks = async () => {
            const disksData = await GetDisks();
            setDisks(disksData);
        };
        fetchDisks();

        const fetchGameDir = async () => {
            const gameDirs = await GetGameDir();
            setGameDirs(gameDirs);
        };
        fetchGameDir();
    }, []);

    useEffect(() => {
        GetFileList();
    }, [selectDir]);

    return (
        <Drawer open={true} onClose={onClose} sx={{
            '& .MuiDrawer-paper': {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start',
                width: '70%',
                height: '70vh',
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
                background: 'var(--bg-100)',
                borderRadius: '16px',
                color: 'var(--text-100)',
            },
        }}>
            <div style={{
                width: '100%',
                height: '32px',
                background: 'var(--bg-200)',
                borderRadius: '16px 16px 0 0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'end'
            }}>
                <div className="absolute items-center justify-start flex h-8 left-5 text-[var(--text-100)]">
                    选择 铁锈战争 目录
                </div>
                <button
                    className="title-bar-controls flex items-center justify-center w-12 h-8 hover:bg-[var(--accent-100)] hover:text-[var(--text-100)] transition-all"
                    onClick={onClose}>
                    <svg className="w-4 h-4 text-[var(--text-100)]" viewBox="0 0 24 24" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                            strokeLinejoin="round" />
                    </svg>
                </button>
            </div>

            {selectDir ?
                // 选择文件夹
                <>
                    <div style={{
                        background: "var(--bg-300)",
                        margin: 10,
                        height: 30,
                        width: "80%",
                        borderRadius: 10,
                        alignContent: 'center',
                        border: "1px solid var(--accent-200)",
                        display: "flex",
                        alignItems: "center",
                    }}>
                        <div onClick={() => {
                            setSelectDir(selectDir.substring(0, selectDir.lastIndexOf('\\')))
                        }} className='back-icon'>
                            <ArrowBack />
                        </div>
                        {selectDir.length > 55 ? selectDir.substring(0, 55) + "..." : selectDir}
                    </div>

                    <Box
                        id="files"
                    >
                        {
                            // 文件列表
                            files.map((file) => (
                                <div key={file.path} className={file.is_dir ? 'folderCard' : 'fileCard'} onClick={() => {
                                    if (file.is_dir) {
                                        setSelectDir(file.path);
                                        GetFileList();
                                    }
                                }}>
                                    {file.is_dir ?
                                        <Folder sx={{
                                            color: "var(--text-100)",
                                            marginRight: 1,
                                        }} />
                                        :
                                        <InsertDriveFile sx={{
                                            color: "var(--text-200)",
                                            marginRight: 1,
                                        }} />

                                    }
                                    {file.name}
                                </div>
                            ))}
                    </Box>
                    {/* 提交按钮 */}
                    <Button sx={{
                        background: "var(--accent-200)",
                        color: "var(--text-100)",
                        marginTop: "auto",
                        marginBottom: 2,
                        width: "80%",
                        borderRadius: "10px",
                        border: "1px solid var(--accent-100)",
                        "&:hover": {
                            background: "var(--accent-200)",
                            border: "1px solid var(--accent-200)",
                        },
                    }} onClick={() => {
                        setDir(selectDir);
                        onClose();
                    }}> 提交 </Button>
                </>
                // 选择磁盘
                : (
                    <div className="flex items-center justify-center w-full h-full">
                        {Object.keys(disks).map((disk) => (
                            <div className='diskCard' key={disk} onClick={() => {
                                setSelectDir(disk + ":");
                            }}>
                                <div style={{ marginBottom: "10px" }}>{disk}</div>
                                <Storage />
                                <div style={{
                                    background: "var(--bg-100)",
                                    marginTop: 10,
                                    borderRadius: 2.5,
                                    height: 5,
                                    width: "80%",
                                    display: "flex"
                                }}>
                                    <div style={{
                                        height: "100%",
                                        borderRadius: 2.5,
                                        width: disks[disk],
                                        background: "var(--primary-100)"
                                    }} />
                                </div>
                            </div>
                        ))}
                    </div>
                )
            }
            {(gameDirs.length > 0 && !selectDir) &&
                <Box sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "80%",
                    height: "40%",
                    marginTop: "auto",
                    marginBottom: "auto",
                }}>
                    <Typography>推荐位置</Typography>
                    {gameDirs.map((dir) => (
                        <Button className='gameDirCard' key={dir} sx={{
                            background: "var(--bg-200)",
                            color: "var(--text-100)",
                            marginTop: "auto",
                            marginBottom: "auto",
                            width: "80%",
                            borderRadius: "10px",
                            border: "1px solid var(--accent-100)",
                            "&:hover": {
                                background: "var(--bg-200)",
                                border: "1px solid var(--accent-200)",
                            }
                        }} onClick={() => {
                            setDir(dir);
                            onClose();
                        }}
                        >
                        <Typography fontSize={12}>{ dir.length > 55 ? dir.substring(0, 55) + "..." : dir }</Typography>
                    </Button>
                    ))}
                </Box>
            }
        </Drawer>
    );
};

export default DirectoryPicker;