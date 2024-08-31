package main

import (
	"RW-Mod-Tools-API/Mod"
	"github.com/gin-gonic/gin"
)

func main() {
	gin.SetMode(gin.DebugMode)
	api := gin.Default()
	api.Use(func(ctx *gin.Context) {
		ctx.Writer.Header().Set("Access-Control-Allow-Origin", "*")
		ctx.Writer.Header().Set("Access-Control-Allow-Methods", "GET,POST,OPTIONS")
		ctx.Writer.Header().Set("Access-Control-Allow-Headers", "Content-Type")
		ctx.Writer.Header().Set("Access-Control-Max-Age", "3600")
		ctx.Next()
	})

	api.GET("/mod/list", Mod.GetModList)
	api.GET("/mod/thumbnail", Mod.GetModThumbnail)
	api.GET("/mod/check_thumbnail", Mod.CheckModThumbnail)
	api.GET("/mod/delete", Mod.DeleteMod)
	api.GET("/units/list", Mod.GetModUnitsPaths)

	err := api.Run("localhost:5128")
	if err != nil {
		return
	}
}
