// 欢迎页

import { Container } from "@mui/material";
import { main } from "@wails/go/models";
type ConfigType = main.ConfigType


export default function Welcome({ config }: { config: ConfigType }) {
    config

    return <Container sx={{
        color: "var(--text-100)"
    }}>
        欢迎使用
    </Container>
}