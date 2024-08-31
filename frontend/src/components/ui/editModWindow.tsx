import Window from "./window"
import { Mod, Config, Section } from "@/types"
import { Box, FormControlLabel, Input, Switch, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import CodeTooltip from "./codeTooltip"

export default function EditModWindow({ mod, unit, setConfig }: { mod: Mod, unit: Config, setConfig: (config: Config | undefined) => void }) {
    mod
    const [scs, setScs] = useState<Section[]>([])

    useEffect(() => {
        const temp_scs: Section[] = []
        const sectionKeys = new Set<string>();
        unit.code.forEach((code) => {
            if (!sectionKeys.has(code.Section.key)) {
                sectionKeys.add(code.Section.key);
                temp_scs.push(code.Section);
            }
        });
        setScs(temp_scs);
    }, [unit])

    return <Window title={"编辑 " + unit.name} onClose={() => { setConfig(undefined) }}>
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
            padding: '10px',
            overflowY: 'auto',
        }}>
            {scs.map((sc) => {

                const filterdUnits = unit.code.filter((code) => code.Section.key === sc.key)
                const secTitle = `${sc.key}${sc.name ? " - " + sc.name : ""}`

                return <div key={sc.key} style={{
                    background: "var(--bg-200)",
                    padding: '5px',
                    borderRadius: '4px',
                    border: '1px solid var(--border-color)',
                    marginBottom: '10px',
                }}>
                    {/* 节标题 */}
                    <Typography sx={{
                        color: 'var(--primary-100)',
                        fontSize: '1.2rem',
                        fontWeight: 'bold',
                    }}>{secTitle}</Typography>
                    {/* 这个字段下的所有键值对 */}
                    {filterdUnits.map((code) => {

                        return <div key={code.key} style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '5px',
                            padding: '5px',
                            borderRadius: '4px',
                            border: '1px solid var(--border-color)',
                        }}>
                            {/* 匹配类型 使用不同的组件 */}
                            {code.value_type == "bool" && <>
                                <FormControlLabel
                                    control={
                                        <Switch
                                            checked={code.value === "true"}
                                            onChange={(e) => {
                                                code.value = e.target.checked ? "true" : "false";
                                                setConfig({ ...unit });
                                            }}
                                            style={{
                                                color: 'var(--primary-100)',
                                            }}
                                        />
                                    }
                                    label={
                                        <>
                                            {code.name ? code.name : code.key}
                                            <CodeTooltip code={code} />
                                        </>
                                    }
                                />
                            </>}
                            {/* Todo 暂时 */}
                            {code.value_type !== "bool" && <>
                                {/* code 标题 */}
                                <Typography sx={{
                                    color: 'var(--primary-200)',
                                    fontSize: '1rem',
                                    paddingLeft: '1px',
                                    overflow: 'hidden',
                                    position: 'relative',
                                    display: 'inline-block',
                                }}>
                                    {/* 弹出提示 */}
                                    {code.name ? (
                                        <>
                                            {code.name}
                                            <CodeTooltip code={code} />
                                        </>
                                    ) : code.key}
                                </Typography>
                                <Box sx={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    width: '100%',
                                }}>
                                    <Input
                                        type="text"
                                        defaultValue={code.value}
                                        onBlur={(e) => {
                                            code.value = e.target.value;
                                            setConfig({ ...unit });
                                        }}
                                        sx={{
                                            fontSize: '0.8rem',
                                            padding: '5px',
                                            marginBottom: '15px',
                                            borderRadius: '4px',
                                            border: '1px solid var(--border-color)',
                                            flex: '1 1 auto',
                                            color: "var(--text-200)",
                                            "::after": {
                                                borderColor: "var(--primary-100)"
                                            }
                                        }}
                                    />
                                    <Typography sx={{
                                        color: 'var(--primary-200)',
                                        fontSize: '1rem',
                                        marginLeft: '10px',
                                        width: 'auto',
                                        textAlign: 'right',
                                        whiteSpace: 'nowrap',
                                    }}>{code.value_type}</Typography>
                                </Box>
                            </>}
                        </div>
                    })}
                </div>
            })}
        </Box>
    </Window>
}