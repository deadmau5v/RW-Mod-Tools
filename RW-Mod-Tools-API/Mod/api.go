package Mod

import (
	"fmt"
	"github.com/gin-gonic/gin"
	"gopkg.in/ini.v1"
	"os"
	"strconv"
	"strings"
)

var SEP = string(os.PathSeparator)

func GetModList(ctx *gin.Context) {
	path := ctx.Query("path")
	modBasePath := strings.Join([]string{path, "mods", "units"}, SEP)

	// 路径错误
	if !isDir(modBasePath) {
		ctx.JSON(400, gin.H{
			"code": 400,
			"msg":  "错误的路径",
		})
		return
	}

	// 读取目录
	modDirs, err := os.ReadDir(modBasePath)
	if err != nil {
		ctx.JSON(500, gin.H{
			"code": 500,
			"msg":  "读取目录失败",
		})
		return
	}

	mods := make([]Mod, 0)

	// 读取mod信息
	for _, modStat := range modDirs {
		modInfoTxtFilePath := strings.Join([]string{modBasePath, modStat.Name(), "mod-info.txt"}, SEP)
		modPath := strings.Join([]string{modBasePath, modStat.Name()}, SEP)

		if isFile(modInfoTxtFilePath) {
			mod, err := NewMod(modPath)
			if err != nil {
				fmt.Println(err.Error())
				continue
			}
			mods = append(mods, *mod)
		}
	}
	ctx.JSON(200, gin.H{
		"code": 200,
		"msg":  "success",
		"data": mods,
	})
}

func GetModThumbnail(ctx *gin.Context) {
	path := ctx.Query("path")
	// 用于对动态图片切片
	flag := false
	totalFrames := ctx.Query("total_frames")
	totalFramesInt, err := strconv.Atoi(totalFrames)
	if err != nil {
		flag = false
	} else {
		flag = true
	}
	if !isImage(path) {
		ctx.JSON(400, gin.H{
			"code": 400,
			"msg":  "Invalid file type. Only .png .jpg .jpeg files are allowed.",
		})
		return
	}

	if _, err := os.Stat(path); os.IsNotExist(err) {
		ctx.JSON(404, gin.H{
			"code": 404,
			"msg":  "File not found.",
		})
		return
	}

	if flag {
		ctx.File(ImageToPng(totalFramesInt, path))
		return
	} else {
		ctx.File(path)
		return
	}
}

func CheckModThumbnail(ctx *gin.Context) {
	path := ctx.Query("path")

	if !isImage(path) {
		ctx.JSON(400, gin.H{
			"code": 400,
			"msg":  "Invalid file type. Only .png .jpg .jpeg files are allowed.",
		})
		return
	}

	if _, err := os.Stat(path); os.IsNotExist(err) {
		ctx.JSON(404, gin.H{
			"code": 404,
			"msg":  "File not found.",
		})
		return
	}

	ctx.JSON(200, gin.H{
		"code": 200,
		"msg":  "success",
	})
}

func DeleteMod(ctx *gin.Context) {
	path := ctx.Query("path")

	if !isDir(path) {
		ctx.JSON(400, gin.H{
			"code": 400,
			"msg":  "Invalid path.",
		})
		return
	}

	err := os.RemoveAll(path)
	if err != nil {
		ctx.JSON(500, gin.H{
			"code": 500,
			"msg":  "Delete failed.",
		})
		return
	}

	ctx.JSON(200, gin.H{
		"code": 200,
		"msg":  "success",
	})
}

func GetModUnitsPaths(ctx *gin.Context) {
	path := ctx.Query("path")
	if !isDir(path) {
		ctx.JSON(400, gin.H{
			"code": 400,
			"msg":  "无效路径",
		})
		return
	}

	paths := DeepFindFile(path, ".ini")
	paths = filterUnitPath(paths)

	var configs []Config

	for _, path := range paths {
		file, err := os.Stat(path)
		if err != nil {
			continue
		}

		unitIniConfig, err := ini.Load(path)
		if err != nil {
			continue
		}

		codes := parseCodes(unitIniConfig)
		config := Config{
			Name:  strings.ReplaceAll(file.Name(), ".ini", ""),
			Codes: codes,
			Path:  path,
		}
		configs = append(configs, config)
	}

	ctx.JSON(200, gin.H{
		"code": 200,
		"msg":  "success",
		"data": configs,
	})
}
