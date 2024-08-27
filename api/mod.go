package api

import "github.com/gin-gonic/gin"

func GetModList(ctx *gin.Context) {
	ctx.JSON(200, gin.H{
		"mods": []string{
			"mod1",
			"mod2",
		},
	})
}
