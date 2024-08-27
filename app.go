package main

import (
	"context"
	"os"
	"path/filepath"
	"strings"
)

// ConfigType Config 结构体
type ConfigType struct {
	Title   string `json:"title"`    // 软件标题
	GameDir string `json:"rw_dir"`   // 游戏目录
	APIHost string `json:"api_host"` // API 监听地址
}

// FileInfo 文件信息结构体
type FileInfo struct {
	Name  string `json:"name"`
	IsDir bool   `json:"is_dir"`
	Path  string `json:"path"`
}

// App 结构体
type App struct {
	ctx    context.Context
	Config ConfigType
}

// New 创建一个新的 App 应用程序结构体
func New() *App {
	return &App{}
}

// startup 在应用程序启动时调用
func (a *App) startup(ctx context.Context) {
	// 在此处执行您的设置
	a.ctx = ctx
}

// domReady 在前端资源加载完成后调用
func (a App) domReady(ctx context.Context) {

}

// beforeClose 在应用程序即将退出时调用，
// 可能是通过点击窗口关闭按钮或调用 runtime.Quit。
// 返回 true 将导致应用程序继续运行，返回 false 将正常继续关闭。
func (a *App) beforeClose(ctx context.Context) (prevent bool) {
	return false
}

// shutdown 在应用程序终止时调用
func (a *App) shutdown(ctx context.Context) {

	// 在此处执行您的清理工作
}

func (a *App) GetContext(key string) any {
	return a.ctx.Value(key)
}

func (a *App) SetContext(key string, value any) {
	a.ctx = context.WithValue(a.ctx, key, value)
}

func (a *App) SetConfig(config ConfigType) {
	a.Config = config
	saveConfig(config)
}

func (a *App) GetConfig() ConfigType {
	a.Config = loadConfig()
	return a.Config
}

func (a *App) GetDisks() map[string]int {
	return getDisks()
}

func (a *App) ListDir(path string) []FileInfo {
	if !strings.Contains(path, "\\") {
		path = path + "\\"
	}
	res := make([]FileInfo, 0)
	fs, err := os.ReadDir(path)
	if err != nil {
		return nil
	}
	for _, file := range fs {
		absPath, err := filepath.Abs(filepath.Join(path, file.Name()))
		if err != nil {
			continue
		}
		res = append(res, FileInfo{
			Name:  file.Name(),
			IsDir: file.IsDir(),
			Path:  absPath,
		})
	}
	return res
}

// GetGameDir 获取游戏目录 推荐位置 尝试几个常用位置
func (a *App) GetGameDir() []string {
	res := make([]string, 0)

	// 常见位置
	paths := []string{
		":\\Program Files (x86)\\Steam\\steamapps\\common\\Rusted Warfare",
		":\\SteamLibrary\\Steam\\steamapps\\common\\Rusted Warfare",
		":\\SteamLibrary\\steamapps\\common\\Rusted Warfare",
		":\\Steam\\steamapps\\common\\Rusted Warfare",
	}

	for disk := range a.GetDisks() {
		for _, path := range paths {
			stat, err := os.Stat(disk + path)
			if err != nil {
				continue
			}
			if stat.IsDir() {
				if checkGameDir(disk + path) {
					res = append(res, disk+path)
				}
			}
		}
	}

	return res
}

// CheckGameDir 检查游戏目录是否正确
func (a *App) CheckGameDir(dir string) bool {
	return checkGameDir(dir)
}
