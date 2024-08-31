package Mod

import (
	"crypto/md5"
	"embed"
	"encoding/hex"
	"encoding/json"
	"fmt"
	"image"
	"image/draw"
	"image/png"
	"io"
	"os"
	"path/filepath"
	"regexp"
	"strings"

	"gopkg.in/ini.v1"
)

func isDir(path string) bool {
	stat, err := os.Stat(path)
	if err != nil {
		return false
	}
	if !stat.IsDir() {
		return false
	}

	return true
}

func isFile(path string) bool {
	stat, err := os.Stat(path)
	if err != nil {
		return false
	}
	if stat.IsDir() {
		return false
	}

	return true
}

func getConfigItem(cfg *ini.File, section, key string) string {
	return cfg.Section(section).Key(key).String()
}

func getConfigItemBool(cfg *ini.File, section, key string) bool {
	val := cfg.Section(section).Key(key).MustBool(false)
	return val
}

func isImage(path string) bool {
	if !isFile(path) {
		return false
	}
	if filepath.Ext(path) == ".png" || filepath.Ext(path) == ".jpg" || filepath.Ext(path) == ".jpeg" {
		return true
	}
	return false
}

// DeepFindFile 查找目录下嵌套的文件
func DeepFindFile(path, ext string) []string {
	var filePaths []string

	if isDir(path) {
		files, err := os.ReadDir(path)
		if err != nil {
			return filePaths
		}
		for _, file := range files {
			filePaths = append(filePaths, DeepFindFile(strings.Join([]string{path, file.Name()}, SEP), ext)...)
		}
	} else if isFile(path) {
		if ext == "" || filepath.Ext(path) == ext {
			filePaths = append(filePaths, path)
		}
	}

	return filePaths
}

func filterUnitPath(paths []string) []string {
	var res []string
	for _, path := range paths {
		iniConfig, err := ini.Load(path)
		if err != nil {
			continue
		}

		unitName := iniConfig.Section("core").Key("name").String()
		if unitName == "" {
			continue
		}
		res = append(res, path)
	}
	return res
}

// SectionsRe 通配符替换
var SectionsRe = map[string]string{
	"NAME": ".*",
	"#":    ".*",
}

// caseSectionName 检查sectionName是否符合通配符
func caseSectionName(sectionName string, sc Code) bool {
	var reTemplate string
	reTemplate = strings.ReplaceAll(sc.Section.Key, "[", "")
	reTemplate = strings.ReplaceAll(reTemplate, "]", "")

	for k, v := range SectionsRe {
		reTemplate = strings.ReplaceAll(reTemplate, k, v)
	}

	re := regexp.MustCompile(reTemplate)
	if re.MatchString(sectionName) {
		return true
	}

	return false
}

// copyCodeFromTemplate 从模板复制配置项
func copyCodeFromTemplate(sc Code) Code {
	var res = Code{
		Section:     sc.Section,
		Comment:     sc.Comment,
		Demo:        sc.Demo,
		Description: sc.Description,
		Key:         sc.Key,
		Name:        sc.Name,
		ValueType:   sc.ValueType,
		Value:       sc.Value,
	}
	return res
}

// getSectionObj 获取配置项对象
func getSectionObj(section *ini.Section, key *ini.Key) Code {
	keyName := key.Name()
	sectionName := section.Name()

	for _, c := range jsonData {
		if keyName == c.Key && caseSectionName(sectionName, c) {
			nc := copyCodeFromTemplate(c)
			nc.Section.Key = "[" + section.Name() + "]"
			nc.Value = key.MustString("")
			return nc
		}
	}

	res := Code{
		Section: Section{
			Key: "[" + section.Name() + "]",
		},
		Key:       keyName,
		ValueType: "string",
		Value:     key.MustString(""),
	}

	for _, c := range jsonData {
		if caseSectionName(sectionName, c) {
			res.Section.Name = c.Section.Name
		}
	}

	return res
}

func parseCodes(cfg *ini.File) []Code {
	res := make([]Code, 0)
	for _, section := range cfg.Sections() {
		for _, key := range section.Keys() {
			res = append(res, getSectionObj(section, key))
		}
	}
	return res
}

//go:embed data.json
var staticConfigJson embed.FS

var jsonData []Code

func init() {
	data, err := staticConfigJson.ReadFile("data.json")
	if err != nil {
		return
	}
	jsonData = make([]Code, 0)
	type dataType struct {
		Data []Code `json:"data"`
	}
	var d dataType
	err = json.Unmarshal(data, &d)
	jsonData = d.Data
}

func ImageToPng(totalFrames int, path string) string {
	fmt.Println("Extracting first frame as PNG", path)
	file, err := os.Open(path)
	if err != nil {
		return ""
	}
	defer file.Close()

	hash := md5.New()
	if _, err := io.Copy(hash, file); err != nil {
		return ""
	}
	md5sum := hex.EncodeToString(hash.Sum(nil))

	pngDir := ".pngs"
	pngPath := filepath.Join(pngDir, md5sum+".png")
	if _, err := os.Stat(pngPath); err == nil {
		return pngPath
	}

	file.Seek(0, 0)

	img, err := png.Decode(file)
	if err != nil {
		return ""
	}

	bounds := img.Bounds()
	width := bounds.Dx()
	height := bounds.Dy()
	frameWidth := width / totalFrames

	rect := image.Rect(0, 0, frameWidth, height)
	frame := image.NewRGBA(rect)
	draw.Draw(frame, frame.Bounds(), img, image.Point{0, 0}, draw.Src)

	os.MkdirAll(pngDir, 0755)

	f, err := os.Create(pngPath)
	if err != nil {
		return ""
	}
	defer f.Close()

	png.Encode(f, frame)
	return pngPath
}
