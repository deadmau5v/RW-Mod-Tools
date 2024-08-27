package main

import (
	api2 "RW-Mod-Tools/api"
	"embed"
	"github.com/gin-gonic/gin"
	"github.com/wailsapp/wails/v2"
	"log"

	"github.com/wailsapp/wails/v2/pkg/logger"
	"github.com/wailsapp/wails/v2/pkg/options"
	"github.com/wailsapp/wails/v2/pkg/options/assetserver"
	"github.com/wailsapp/wails/v2/pkg/options/mac"
	"github.com/wailsapp/wails/v2/pkg/options/windows"
)

//go:embed all:frontend/dist
var assets embed.FS

//go:embed build/appicon.png
var icon []byte

func main() {
	// Create an instance of the app structure
	api := gin.Default()
	api.Use(func(ctx *gin.Context) {
		ctx.Request.Header.Set("Access-Control-Allow-Origin", "*")
		ctx.Request.Header.Set("Access-Control-Allow-Methods", "GET,POST,OPTIONS")
		ctx.Request.Header.Set("Access-Control-Allow-Headers", "Content-Type")
		ctx.Request.Header.Set("Access-Control-Max-Age", "3600")
		ctx.Writer.Header().Set("Access-Control-Allow-Origin", "*")
		ctx.Writer.Header().Set("Access-Control-Allow-Methods", "GET,POST,OPTIONS")
		ctx.Writer.Header().Set("Access-Control-Allow-Headers", "Content-Type")
		ctx.Writer.Header().Set("Access-Control-Max-Age", "3600")
		ctx.Next()
	})
	api.GET("/Mod/GetModList", api2.GetModList)

	app := New()
	app.Config = loadConfig()

	//if app.Config.APIHost == "" {
	//	go api.Run(defaultConfig.APIHost)
	//} else {
	//	go api.Run(app.Config.APIHost)
	//}

	var title string
	if app.Config.Title == "" {
		title = defaultConfig.Title
	} else {
		title = app.Config.Title
	}

	err := wails.Run(&options.App{
		Title:  title,
		Width:  1024,
		Height: 768,

		DisableResize: true,

		BackgroundColour: &options.RGBA{R: 255, G: 255, B: 255, A: 255},
		AssetServer: &assetserver.Options{
			Assets: assets,
		},
		Menu:     nil,
		Logger:   nil,
		LogLevel: logger.DEBUG,

		OnStartup:        app.startup,
		OnDomReady:       app.domReady,
		OnBeforeClose:    app.beforeClose,
		OnShutdown:       app.shutdown,
		WindowStartState: options.Normal,
		Bind: []interface{}{
			app,
			&ConfigType{},
			&FileInfo{},
		},
		Frameless: true,

		// Windows平台特定选项
		Windows: &windows.Options{
			DisableWindowIcon:                 false,
			WebviewUserDataPath:               "",
			ZoomFactor:                        1.0,
			WebviewIsTransparent:              true,
			WindowIsTranslucent:               true,
			DisableFramelessWindowDecorations: true,
			Theme:                             windows.SystemDefault,
		},
		// Mac platform specific options
		Mac: &mac.Options{
			TitleBar: &mac.TitleBar{
				TitlebarAppearsTransparent: true,
				HideTitle:                  false,
				HideTitleBar:               false,
				FullSizeContent:            false,
				UseToolbar:                 false,
				HideToolbarSeparator:       true,
			},
			Appearance:           mac.NSAppearanceNameDarkAqua,
			WebviewIsTransparent: true,
			WindowIsTranslucent:  true,
			About: &mac.AboutInfo{
				Title:   "RW-Mod-Tools",
				Message: "铁锈战争模组工具",
				Icon:    icon,
			},
		},
	})

	if err != nil {
		log.Fatal(err)
	}
}
