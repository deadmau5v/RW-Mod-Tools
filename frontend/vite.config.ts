import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import {fileURLToPath} from 'url'
import {dirname} from 'path'

// if in ESM context
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
            '@wails/runtime': path.resolve(__dirname, './wailsjs/runtime'),
            '@wails/go/main/App': path.resolve(__dirname, './wailsjs/go/main/App'),
            '@wails/go/mod/Mod': path.resolve(__dirname, './wailsjs/go/mod/Mod'),
            '@wails/go/models.ts': path.resolve(__dirname, './wailsjs/go/models.ts'),

        }
    },
    build: {
        rollupOptions: {
            external: [
                '@wails',
            ]
        }
    }
})
