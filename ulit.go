package main

import (
	"encoding/json"
	"golang.org/x/sys/windows"
	"io"
	"os"
)

var defaultConfig = ConfigType{
	Title:   "RW Mod Tools",
	APIHost: "localhost:5124",
}

func saveConfig(config ConfigType) {
	file, err := os.OpenFile("config.json", os.O_RDWR|os.O_CREATE, 0644)
	if err != nil {
		panic(err)
	}
	defer file.Close()

	if err := file.Truncate(0); err != nil {
		panic(err)
	}

	configBytes, err := json.Marshal(config)
	if err != nil {
		return
	}

	_, err = file.Write(configBytes)
	if err != nil {
		panic(err)
	}
}

func loadConfig() ConfigType {
	file, err := os.Open("config.json")
	if err != nil {
		saveConfig(defaultConfig)
		return defaultConfig
	}

	defer func(file *os.File) {
		err := file.Close()
		if err != nil {
			panic(err)
		}
	}(file)

	config := ConfigType{}
	configContent, err := io.ReadAll(file)
	if err != nil {
		return defaultConfig
	}
	err = json.Unmarshal(configContent, &config)
	if err != nil {
		return defaultConfig

	}

	return config
}

func getDisks() map[string]int {
	res := make(map[string]int)
	for _, drive := range "ABCDEFGHIJKLMNOPQRSTUVWXYZ" {
		driveLetter := string(drive) + ":/"
		if _, err := os.Stat(driveLetter); err == nil {
			usage, err := getDiskUsage(driveLetter)
			if err != nil {
				usage = 0
			}
			res[string(drive)] = int(usage)
		}
	}
	return res
}

func getDiskUsage(drive string) (float64, error) {
	var freeBytes, totalBytes, freeBytesReturned uint64
	rootPath := windows.StringToUTF16Ptr(drive)

	err := windows.GetDiskFreeSpaceEx(rootPath, &freeBytes, &totalBytes, &freeBytesReturned)
	if err != nil {
		return 0, err
	}

	usedBytes := totalBytes - freeBytes
	usage := (float64(usedBytes) / float64(totalBytes)) * 100
	return usage, nil
}

// checkGameDir 检查游戏目录是否有效
func checkGameDir(path string) bool {
	// 需要包含的文件
	needFiles := []string{
		"game-lib.jar",
		"Rusted Warfare - 64.exe",
	}

	needDirs := []string{
		"mods\\units",
		"mods\\maps",
	}

	for _, file := range needFiles {
		path := path + "\\" + file
		if stat, err := os.Stat(path); err != nil || stat.IsDir() {
			return false
		}
	}

	for _, dir := range needDirs {
		path := path + "\\" + dir
		if stat, err := os.Stat(path); err != nil || !stat.IsDir() {
			return false
		}
	}

	return true
}
