package Mod

import (
	"gopkg.in/ini.v1"
	"strings"
)

// ModInfo Mod 信息结构体
type ModInfo struct {
	Path        string    `json:"path"`
	Config      *ini.File `json:"-"`
	MinVersion  string    `json:"min_version"`
	Title       string    `json:"title"`
	Description string    `json:"description"`
	Tags        []string  `json:"tags"`
	Thumbnail   string    `json:"thumbnail"`
	Music       MusicInfo `json:"music"`
}

type MusicInfo struct {
	SourceFolder                             string `json:"source_folder"`
	WhenUsingUnitsFromThisModPlayExclusively string `json:"when_using_units_from_this_mod_play_exclusively"`
	AddToNormalPlaylist                      bool   `json:"add_to_normal_playlist"`
}

type Mod struct {
	ModInfo         ModInfo `json:"mod_info"`
	Path            string  `json:"path"`
	SteamWorkshopID string  `json:"steam_workshop_id"`
}

func NewMod(path string) (*Mod, error) {
	mod := &Mod{Path: path}
	err := mod.LoadConfig()
	if err != nil {
		return nil, err
	}
	return mod, nil
}

type Unit struct {
}

type Config struct {
	Name  string `json:"name"`
	Codes []Code `json:"code"`
	Path  string `json:"path"`
}

type Section struct {
	Key  string `json:"key"`
	Name string `json:"name"`
}

type Code struct {
	Section     Section `json:"Section"`
	Comment     string  `json:"comment"`
	Demo        string  `json:"demo"`
	Description string  `json:"description"`
	Key         string  `json:"key"`
	Name        string  `json:"name"`
	ValueType   string  `json:"value_type"`
	Value       string  `json:"value"`
}

func (m *Mod) LoadConfig() error {
	modInfoPath := strings.Join([]string{m.Path, "mod-info.txt"}, SEP)
	cfg, err := ini.Load(modInfoPath)
	if err != nil {
		return err
	}

	steamDataPath := strings.Join([]string{m.Path, "steam.dat"}, SEP)
	if isFile(steamDataPath) {
		steamData, err := ini.Load(steamDataPath)
		if err == nil {
			m.SteamWorkshopID = getConfigItem(steamData, "steam", "id")
		}
	}

	m.ModInfo = ModInfo{
		Path:        modInfoPath,
		Config:      cfg,
		MinVersion:  getConfigItem(cfg, "mod", "minVersion"),
		Title:       getConfigItem(cfg, "mod", "title"),
		Description: getConfigItem(cfg, "mod", "description"),
		Tags:        strings.Split(getConfigItem(cfg, "mod", "tags"), ","),
		Thumbnail:   getConfigItem(cfg, "mod", "thumbnail"),
		Music: MusicInfo{
			SourceFolder:                             getConfigItem(cfg, "music", "sourceFolder"),
			WhenUsingUnitsFromThisModPlayExclusively: getConfigItem(cfg, "music", "whenUsingUnitsFromThisMod_playExclusively"),
			AddToNormalPlaylist:                      getConfigItemBool(cfg, "music", "addToNormalPlaylist"),
		},
	}
	return nil
}
