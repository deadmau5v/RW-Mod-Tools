import { Code, Config } from "./types"

const codeMap = {
    "author": "deadmau5v",
    "data": [
        {
            "Section": {
                "key": "[core]",
                "name": "核心"
            },
            "comment": "通用代码,多是必要的代码，如果不包括这些，可能导致错误",
            "demo": "name:自定义坦克",
            "description": "定义单位原始名称，可以是中文。\r\n游戏使用它区分其它单位。\r\n如果没有在displayText或者语言文件设置显示名称，那么它也将作为单位的显示名称。\r\n具体描述文件位置:\r\nassets/translationsStrings_zh.properties\r\n格式:units.单位名称.name=单位显示的名称\r\nunits.单位名称.description= [[填单位显示的描述]]",
            "key": "name",
            "name": "名字",
            "value_type": "string"
        },
        {
            "Section": {
                "key": "[core]",
                "name": "核心"
            },
            "comment": "通用代码,多是必要的代码，如果不包括这些，可能导致错误",
            "demo": "altNames:custTank1,customTank1,cTank1",
            "description": "以逗号分隔的名称列表。像名称一样，但优先级较低，对于启用多个自定义nod有用。",
            "key": "altNames",
            "name": "别名",
            "value_type": "string"
        },
        {
            "Section": {
                "key": "[core]",
                "name": "核心"
            },
            "comment": "通用代码,多是必要的代码，如果不包括这些，可能导致错误",
            "demo": "strictLevel:1",
            "description": "默认值为0，忽略代码重复。设为1时如果当前单位内有重复代码，则报错。建议添加到\"all-units.template\"以应用于所有单位,进行统一查错。",
            "key": "strictLevel",
            "name": "严格级别",
            "value_type": "float"
        },
        {
            "Section": {
                "key": "[core]",
                "name": "核心"
            },
            "comment": "通用代码,多是必要的代码，如果不包括这些，可能导致错误",
            "demo": "price: 500",
            "description": "设定单位造价，可以是负数，负数时提直接供资金。",
            "key": "price",
            "name": "价格",
            "value_type": "int"
        },
        {
            "Section": {
                "key": "[core]",
                "name": "核心"
            },
            "comment": "通用代码,多是必要的代码，如果不包括这些，可能导致错误",
            "demo": "mass: 3000",
            "description": "单位的“重量”定义了它与其他单位的碰撞方式，值越大，推动就越困难。",
            "key": "mass",
            "name": "质量",
            "value_type": "int"
        },
        {
            "Section": {
                "key": "[core]",
                "name": "核心"
            },
            "comment": "通用代码,多是必要的代码，如果不包括这些，可能导致错误",
            "demo": "techLevel: 1",
            "description": "设置单位的科技等级，共有3个级别，1级GUI显示为绿色，2、3级显示为黄色。",
            "key": "techLevel",
            "name": "科技等级",
            "value_type": "int"
        },
        {
            "Section": {
                "key": "[core]",
                "name": "核心"
            },
            "comment": "通用代码,多是必要的代码，如果不包括这些，可能导致错误",
            "demo": "buildSpeed: 3s",
            "description": "建造此单位需要的时间，填秒。以前的计算方式为：此处所填时间=1÷(60x你需要的秒)如果定义了工厂速率则需要乘以建造乘数。",
            "key": "buildSpeed",
            "name": "建造速度",
            "value_type": "float"
        },
        {
            "Section": {
                "key": "[core]",
                "name": "核心"
            },
            "comment": "通用代码,多是必要的代码，如果不包括这些，可能导致错误",
            "demo": "radius: 20",
            "description": "单位的实际碰擦体积，也是实际的可选择范围。其光圈在displayRadius覆盖时真实体积不变。",
            "key": "radius",
            "name": "半径",
            "value_type": "int"
        },
        {
            "Section": {
                "key": "[core]",
                "name": "核心"
            },
            "comment": "通用代码,多是必要的代码，如果不包括这些，可能导致错误",
            "demo": "isBio: true",
            "description": "此单位是否为生物，为生物则影响死亡声音和血迹（图像在drawable/blood_mark.png，hideScorchMark：true时可以隐藏）非生物则为黑色爆炸效果。",
            "key": "isBio",
            "name": "是生物",
            "value_type": "bool"
        },
        {
            "Section": {
                "key": "[core]",
                "name": "核心"
            },
            "comment": "通用代码,多是必要的代码，如果不包括这些，可能导致错误",
            "demo": "isBug: false",
            "description": "是否为虫子，用于沙盒中的单独分类。",
            "key": "isBug",
            "name": "是虫子",
            "value_type": "bool"
        },
        {
            "Section": {
                "key": "[core]",
                "name": "核心"
            },
            "comment": "通用代码,多是必要的代码，如果不包括这些，可能导致错误",
            "demo": "isBuilder: true",
            "description": "若需要此单位建造建筑物，则通常需要此代码。并且默认设为[ai] useAsBuilder。",
            "key": "isBuilder",
            "name": "是建造者",
            "value_type": "bool"
        },
        {
            "Section": {
                "key": "[core]",
                "name": "核心"
            },
            "comment": "通用代码,多是必要的代码，如果不包括这些，可能导致错误",
            "demo": "streamingCos:100",
            "description": "就像价格，但在建造时逐渐消耗资金，如果在构建过程中资源耗尽，建造或生产队列将暂停。就像是红警中那样。铁锈默认是预先扣除资金。",
            "key": "streamingCost",
            "name": "流式造价",
            "value_type": "int"
        },
        {
            "Section": {
                "key": "[core]",
                "name": "核心"
            },
            "comment": "通用代码,多是必要的代码，如果不包括这些，可能导致错误",
            "demo": "switchPriceWithStreamingCost:true",
            "description": "快捷设置为默认资金消耗方式或为流式建造方式。建议使用模板快速将一个模组为所有单位切换流资源。",
            "key": "switchPriceWithStreamingCost",
            "name": "切换价格为流造价",
            "value_type": "bool"
        },
        {
            "Section": {
                "key": "[core]",
                "name": "核心"
            },
            "comment": "单位统计代码",
            "demo": "maxHp: 200",
            "description": "单位最大生命值，默认生成时即为此值。",
            "key": "maxHp",
            "name": "生命值",
            "value_type": "int"
        },
        {
            "Section": {
                "key": "[core]",
                "name": "核心"
            },
            "comment": "单位统计代码",
            "demo": "selfRegenRate: 0.01",
            "description": "此数值决定每帧增加血量。游戏内默认速度下，一秒为60逻辑帧，而你看到的FPS帧数为渲染帧，所以电脑上几百帧和手机上60帧和省电模式下30帧并不影响计算。所以不要写太大。可以写负值用于自毁。",
            "key": "selfRegenRate",
            "name": "生命恢复速度",
            "value_type": "float"
        },
        {
            "Section": {
                "key": "[core]",
                "name": "核心"
            },
            "comment": "单位统计代码",
            "demo": "maxShield: 500",
            "description": "单位最大护盾值，默认生成时即为此值。如果设置了startShieldAtZero:true，则初始为0.",
            "key": "maxShield",
            "name": "护盾值",
            "value_type": "int"
        },
        {
            "Section": {
                "key": "[core]",
                "name": "核心"
            },
            "comment": "单位统计代码",
            "demo": "startShieldAtZero: true",
            "description": "如果为true，则单位护盾值从0开始增加。",
            "key": "startShieldAtZero",
            "name": "护盾初始为0",
            "value_type": "bool"
        },
        {
            "Section": {
                "key": "[core]",
                "name": "核心"
            },
            "comment": "单位统计代码",
            "demo": "shieldRegen: 0.15",
            "description": "此数值决定每帧增加护盾值，游戏内一秒为60帧，所以不要写太大。可以写负值。",
            "key": "shieldRegen",
            "name": "护盾恢复速度",
            "value_type": "float"
        },
        {
            "Section": {
                "key": "[core]",
                "name": "核心"
            },
            "comment": "单位统计代码",
            "demo": "energyMax: 1",
            "description": "默认值为0。可以用作炮塔，激光防御和行动的弹药的能量。",
            "key": "energyMax",
            "name": "能量值",
            "value_type": "float"
        },
        {
            "Section": {
                "key": "[core]",
                "name": "核心"
            },
            "comment": "单位统计代码",
            "demo": "energyRegen: 0.01",
            "description": "能量每帧恢复速度，游戏内一秒为60帧，所以不要写太大。可以写负值。",
            "key": "energyRegen",
            "name": "能量恢复速度",
            "value_type": "float"
        },
        {
            "Section": {
                "key": "[core]",
                "name": "核心"
            },
            "comment": "单位统计代码",
            "demo": "energyRegenWhenRecharging:0.1",
            "description": "能量恢复是持续的，如果你设置了energyNeedsToRechargeToFull，那么攻击时按energyRegen恢复，耗尽时的灰条按此处设定值恢复。",
            "key": "energyRegenWhenRecharging",
            "name": "充能时能量恢复速度",
            "value_type": "float"
        },
        {
            "Section": {
                "key": "[core]",
                "name": "核心"
            },
            "comment": "单位统计代码",
            "demo": "energyStartingPercentage: 0.5",
            "description": "单位生成时所携带的能量百分比。",
            "key": "energyStartingPercentage",
            "name": "能量初始百分比",
            "value_type": "float"
        },
        {
            "Section": {
                "key": "[core]",
                "name": "核心"
            },
            "comment": "单位统计代码",
            "demo": "energyNeedsToRechargeToFull: true",
            "description": "若果能量耗尽，则需要完全充能才能进行攻击。",
            "key": "energyNeedsToRechargeToFull",
            "name": "能量需要充满",
            "value_type": "float"
        },
        {
            "Section": {
                "key": "[core]",
                "name": "核心"
            },
            "comment": "单位统计代码",
            "demo": "energyDisplayName:柴犬",
            "description": "能量显示名称,目前似乎无效.1.15",
            "key": "energyDisplayName",
            "name": "能量显示名称",
            "value_type": "string"
        },
        {
            "Section": {
                "key": "[core]",
                "name": "核心"
            },
            "comment": "单位统计代码",
            "demo": "armour: 6",
            "description": "抵消敌方攻击所造成的伤害。",
            "key": "armour",
            "name": "装甲",
            "value_type": "int"
        },
        {
            "Section": {
                "key": "[core]",
                "name": "核心"
            },
            "comment": "单位统计代码",
            "demo": "armourMinDamageToKeep: 2",
            "description": "至少造成多少点伤害，默认为1.防止护甲太高完全打不动。",
            "key": "armourMinDamageToKeep",
            "name": "装甲最低伤害",
            "value_type": "int"
        },
        {
            "Section": {
                "key": "[core]",
                "name": "核心"
            },
            "comment": "单位统计代码",
            "demo": "borrowResourcesWhileAlive: gold=10",
            "description": "创建时获取这些资源，删除或销毁时将其返回。例如用于电力逻辑，负数供电和正数耗电。",
            "key": "borrowResourcesWhileAlive",
            "name": "资源活着时借用",
            "value_type": "res ref"
        },
        {
            "Section": {
                "key": "[core]",
                "name": "核心"
            },
            "comment": "单位统计代码",
            "demo": "generation_resources: credits=5, gold=20",
            "description": "单位定时获得的资源，可自定义资源。",
            "key": "generation_resources",
            "name": "资源获取",
            "value_type": "res ref"
        },
        {
            "Section": {
                "key": "[core]",
                "name": "核心"
            },
            "comment": "单位统计代码",
            "demo": "generation_active: if not self.hp(lessThan=100)",
            "description": "获取资源条件。可用于受损时无法产出。",
            "key": "generation_active",
            "name": "资源取得条件",
            "value_type": "logic"
        },
        {
            "Section": {
                "key": "[core]",
                "name": "核心"
            },
            "comment": "单位统计代码",
            "demo": "generation_credits: 2",
            "description": "生成资源，仅用于默认的资金，也就是铁锈默认的金钱。",
            "key": "generation_credits",
            "name": "资金获取",
            "value_type": "int"
        },
        {
            "Section": {
                "key": "[core]",
                "name": "核心"
            },
            "comment": "单位统计代码",
            "demo": "generation_delay: 40",
            "description": "多久帧添加添加一次资源(generation_creditsvi指定数值)。默认值为40，一秒为60帧。Luke不建议使用。",
            "key": "generation_delay",
            "name": "资金获取时间",
            "value_type": "int"
        },
        {
            "Section": {
                "key": "[core]",
                "name": "核心"
            },
            "comment": "UI和图形代码",
            "demo": "showInEditor: false",
            "description": "设置为false可在沙箱编辑器中隐藏此单位。 （默认为true）",
            "key": "showInEditor",
            "name": "显示在沙盒中",
            "value_type": "bool"
        },
        {
            "Section": {
                "key": "[core]",
                "name": "核心"
            },
            "comment": "UI和图形代码",
            "demo": "displayText: Custom Tank",
            "description": "默认单位显示给玩家的单位名称。不填则显示core下的单位name。此条目依据语言设定不同会被下一条覆盖。",
            "key": "displayText",
            "name": "界面显示名称",
            "value_type": "string"
        },
        {
            "Section": {
                "key": "[core]",
                "name": "核心"
            },
            "comment": "UI和图形代码",
            "demo": "displayText_es: Tanque Personalizado\r\ndisplayText_zh:中文名",
            "description": "为单位名称添加多语言支持。此方法并不方便，不如设置游戏内部语言文件，建议催luke改。zh(中文通用) zh-cn(简体) zh-tw(台湾) zh-hk中文(香港) en(英语通用) ru(俄语) 其它自查(此列表并不全)，不过你应该不会闲着支持这么多语言。西班牙语（西班牙）es-ES、葡萄牙语（葡萄牙）pt-PT、日语ja、阿姆哈拉语am、爱沙尼亚语et、保加利亚语bg、冰岛语is、波兰语pl、丹麦语da、德语de、法语（法国）fr-FR、法语（加拿大）fr-CA、菲律宾语fil、芬兰语fi、韩语ko、荷兰语nl、加泰罗尼亚语ca、捷克语cs、克罗地亚语hr、拉脱维亚语lv、立陶宛语lt、罗马尼亚语ro、马来语ms、南非荷兰语af、挪威语no、葡萄牙语（巴西）pt-BR、瑞典语sv、塞尔维亚语sr、斯洛伐克语sk、斯洛文尼亚语sl、斯瓦希里语sw、泰语th、土耳其语tr、乌克兰语uk、西班牙语（拉丁美洲）es-419、希伯来语he、希腊语el、匈牙利语hu、意大利语it、印地语hi、印度尼西亚语id in、英语（美国）en-US、英语（英国）en-GB、越南语vi、祖鲁语zu",
            "key": "displayText_{LANG}",
            "name": "界面显示文本多语言",
            "value_type": "string"
        },
        {
            "Section": {
                "key": "[core]",
                "name": "核心"
            },
            "comment": "UI和图形代码",
            "demo": "displayDescription:-Fast movement\\n炮灰",
            "description": "单位显示给玩家的单位描述。",
            "key": "displayDescription",
            "name": "界面显示描述",
            "value_type": "string"
        },
        {
            "Section": {
                "key": "[core]",
                "name": "核心"
            },
            "comment": "UI和图形代码",
            "demo": "displayDescription_es: -Movimiento rápido\\n-Daño ligero",
            "description": "为单位描述添加多语言支持。此方法并不方便，不如设置游戏内部语言文件，建议催luke改。地区码见上。",
            "key": "displayDescription_{LANG}",
            "name": "界面显示描述_其它语言",
            "value_type": "string"
        },
        {
            "Section": {
                "key": "[core]",
                "name": "核心"
            },
            "comment": "UI和图形代码",
            "demo": "displayLocaleKey: units.mechArtillery",
            "description": "调用内部语言文件的单位名称和说明的翻译文件。",
            "key": "displayLocaleKey",
            "name": "界面显示内部调用",
            "value_type": "string"
        },
        {
            "Section": {
                "key": "[core]",
                "name": "核心"
            },
            "comment": "UI和图形代码",
            "demo": "displayRadius: 20",
            "description": "修改选择单位时显示的绿色圆圈，不更改实际碰撞(radius)和可选择范围。",
            "key": "displayRadius",
            "name": "单位选择时显示圆圈",
            "value_type": "int"
        },
        {
            "Section": {
                "key": "[core]",
                "name": "核心"
            },
            "comment": "UI和图形代码",
            "demo": "uiTargetRadius:20",
            "description": "默认值为displayRadius。当攻击/回收/等等这个单位使用半径",
            "key": "uiTargetRadius",
            "name": "为目标时半径",
            "value_type": "int"
        },
        {
            "Section": {
                "key": "[core]",
                "name": "核心"
            },
            "comment": "UI和图形代码",
            "demo": "shieldRenderRadius: 12",
            "description": "护盾绘制半径，默认值比半径大一点。可以设置在单位上显示更大或更小的护盾圈。",
            "key": "shieldRenderRadius",
            "name": "单位护盾显示半径",
            "value_type": "int"
        },
        {
            "Section": {
                "key": "[core]",
                "name": "核心"
            },
            "comment": "UI和图形代码",
            "demo": "shieldDisplayOnlyDeflection: true",
            "description": "隐藏护盾，只在受到攻击时显示。",
            "key": "shieldDisplayOnlyDeflection",
            "name": "护盾只在受攻击时显示",
            "value_type": "bool"
        },
        {
            "Section": {
                "key": "[core]",
                "name": "核心"
            },
            "comment": "UI和图形代码",
            "demo": "shieldDeflectionDisplayRate: 3",
            "description": "默认值为4。数值越大消失越快。",
            "key": "shieldDeflectionDisplayRate",
            "name": "护盾消失速度",
            "value_type": "float"
        },
        {
            "Section": {
                "key": "[core]",
                "name": "核心"
            },
            "comment": "UI和图形代码",
            "demo": "showOnMinimap: false",
            "description": "默认为true。如果为false，则在小地图上不显示此单位。",
            "key": "showOnMinimap",
            "name": "显示在小地图上",
            "value_type": "bool"
        },
        {
            "Section": {
                "key": "[core]",
                "name": "核心"
            },
            "comment": "UI和图形代码",
            "demo": "showOnMinimapToEnemies:false",
            "description": "是否在敌人小地图上显示。目前不支持逻辑。",
            "key": "showOnMinimapToEnemies",
            "name": "显示于敌人小地图",
            "value_type": "bool"
        },
        {
            "Section": {
                "key": "[core]",
                "name": "核心"
            },
            "comment": "UI和图形代码",
            "demo": "showActionsWithMixedSelectionIfOtherUnitsHaveTag:tag_联系",
            "description": "如果选择的单位都包含此处使用的标签，则合并“行为(action)”。比如你的步兵通过部署转化成另一个单位，在混合时可以当作同一个单位处理，不再是默认的谁都无法执行操作。例子如红警的盟军大兵在混合选中后依旧可执行部署或解除。",
            "key": "showActionsWithMixedSelectionIfOtherUnitsHaveTag",
            "name": "混合所选单位所显示的行为",
            "value_type": "string"
        },
        {
            "Section": {
                "key": "[core]",
                "name": "核心"
            },
            "comment": "仅构建代码",
            "demo": "isBuilding: true",
            "description": "定义单位是否为建筑物。",
            "key": "isBuilding",
            "name": "是建筑",
            "value_type": "bool"
        },
        {
            "Section": {
                "key": "[core]",
                "name": "核心"
            },
            "comment": "仅构建代码",
            "demo": "（1x1）footprint: 0,0,0,0\r\n（2X2）footprint: 0,0,1,1\r\n（3X3）footprint: -1,-1,1,1",
            "description": "填四个数值(左，上，右，下)，单位是格子，建筑默认占一格，向左和向上需要填负数，填整数在选择时有偏移。\r\n四个数值可以完全颠倒，这样不会阻碍单位移动。\r\n决定建筑单位碰撞体积，此区域内单位不能通过，如果在单位运动途中单位则会绕过。单位实际可选择面积使用的是radius。",
            "key": "footprint",
            "name": "建筑碰撞范围",
            "value_type": "string"
        },
        {
            "Section": {
                "key": "[core]",
                "name": "核心"
            },
            "comment": "仅构建代码",
            "demo": "constructionFootprint: -1,-1,1,3",
            "description": "基础规则同上，这个区域内不能建造建筑，但是单位可以通过。一般需要设定比上一个面积大。好处是即使建造的密密麻麻，单位也有路可走",
            "key": "constructionFootprint",
            "name": "建筑覆盖范围",
            "value_type": "string"
        },
        {
            "Section": {
                "key": "[core]",
                "name": "核心"
            },
            "comment": "仅构建代码",
            "demo": "displayFootprint: 0,0,1,1",
            "description": "基础规则同上，用于选择单位时UI显示。不设定则默认为建筑覆盖区域。",
            "key": "displayFootprint",
            "name": "建筑选择UI",
            "value_type": "string"
        },
        {
            "Section": {
                "key": "[core]",
                "name": "核心"
            },
            "comment": "仅构建代码",
            "demo": "buildingSelectionOffset: 4",
            "description": "默认值为0。以像素为单位对选框额外设定。",
            "key": "buildingSelectionOffset",
            "name": "建筑UI调整",
            "value_type": "int"
        },
        {
            "Section": {
                "key": "[core]",
                "name": "核心"
            },
            "comment": "仅构建代码",
            "demo": "buildingToFootprintOffsetX: 4",
            "description": "设置X轴位置偏移，默认10.若设置非对称的建筑，单位会根据覆盖范围会挤在角上，这时如果要准确显示就需要额外偏移。与直接使用图像偏移的区别:\r\n由于铁锈判断选中单位是根据单位体积(radius),因此图像偏移实际上单位的位置不变，会容易造成点击时的误差。而当前代码实际上是移动单位，则不会造成这个问题。",
            "key": "buildingToFootprintOffsetX",
            "name": "建筑X轴偏移",
            "value_type": "float"
        },
        {
            "Section": {
                "key": "[core]",
                "name": "核心"
            },
            "comment": "仅构建代码",
            "demo": "buildingToFootprintOffsetY: 6",
            "description": "设置Y轴位置偏移，默认10.其它参上条",
            "key": "buildingToFootprintOffsetY",
            "name": "建筑Y轴偏移",
            "value_type": "float"
        },
        {
            "Section": {
                "key": "[core]",
                "name": "核心"
            },
            "comment": "仅构建代码",
            "demo": "placeOnlyOnResPool: true",
            "description": "通常用于提取器，会强制在资源池中进行建筑物构造。可以用于在自定义战役中限制某单位只能在某地建造。",
            "key": "placeOnlyOnResPool",
            "name": "建筑只能建造在资源池上",
            "value_type": "bool"
        },
        {
            "Section": {
                "key": "[core]",
                "name": "核心"
            },
            "comment": "仅构建代码",
            "demo": "selfBuildRate: 0.0008",
            "description": "此单位自动构造所需要的时间，目前用于虫族。计算方式为：此处所填时间=1÷(60x你需要的秒)。",
            "key": "selfBuildRate",
            "name": "自动建造速度",
            "value_type": "float"
        },
        {
            "Section": {
                "key": "[core]",
                "name": "核心"
            },
            "comment": "仅构建代码",
            "demo": "ignoreInUnitCapCalculation:true",
            "description": "铁锈中有单位数量上限设定，填true时不计入统计，多用于辅助单位，建筑物的默认值为true。",
            "key": "ignoreInUnitCapCalculation",
            "name": "不计入单位数量统计",
            "value_type": "bool"
        },
        {
            "Section": {
                "key": "[core]",
                "name": "核心"
            },
            "comment": "杂项代码",
            "demo": "copyFrom: ROOT:defaultTanks.template, tankT1.ini",
            "description": "加载其它文件的单位数据作为该单位的默认值，支持多个文件。无后缀名限制，可不写dont_load，用于模块化。",
            "key": "copyFrom",
            "name": "复制数据自",
            "value_type": "files"
        },
        {
            "Section": {
                "key": "[core]",
                "name": "核心"
            },
            "comment": "杂项代码",
            "demo": "dont_load: true",
            "description": "不加载此单位，缺失数据时不会出错。与copyFrom一起使用时很有用。",
            "key": "dont_load",
            "name": "禁止加载",
            "value_type": "bool"
        },
        {
            "Section": {
                "key": "[core]",
                "name": "核心"
            },
            "comment": "杂项代码",
            "demo": "overrideAndReplace: builder, combatEngineer",
            "description": "用此单位覆盖另一个单位，地图上所有单位也将被替换，可以用来替换dex内无法修改的单位。",
            "key": "overrideAndReplace",
            "name": "覆盖单位",
            "value_type": "string"
        },
        {
            "Section": {
                "key": "[core]",
                "name": "核心"
            },
            "comment": "杂项代码",
            "demo": "[core]\r\nname:钻矿机\r\nonNewMapSpawn:emptyResourcePools_asNeutral",
            "description": "在地图上添加此单位。可以用于覆盖铁锈默认的资源逻辑。参数：\r\nemptyResourcePools_asNeutral  产生位置于空资源池，并且为中立所属\r\nemptyOrOccupiedResourcePools_asNeutral 空的或者已经占用的资源池，并且为中立所属\r\nmapCenter_asNeutral 地图中心，且为中立所属\r\nmapCenter_eachActiveTeam 地图中心，且给与每个玩家\r\nspawnPoint_eachActiveTeam 玩家初始位置，给与每个玩家",
            "key": "onNewMapSpawn",
            "name": "地图位置产生指定单位",
            "value_type": "string"
        },
        {
            "Section": {
                "key": "[core]",
                "name": "核心"
            },
            "comment": "杂项代码",
            "demo": "globalScale: 2",
            "description": "废弃代码，不要用。将一个单位按比例放大，但不放大攻击力。默认值为1。不建议更改。",
            "key": "globalScale",
            "name": "全局缩放",
            "value_type": "float"
        },
        {
            "Section": {
                "key": "[core]",
                "name": "核心"
            },
            "comment": "杂项代码",
            "demo": "isLocked: true",
            "description": "禁止建造该单位。可以与overrideAndReplace一起使用，以限制玩家可以建造的单位。",
            "key": "isLocked",
            "name": "锁定",
            "value_type": "bool"
        },
        {
            "Section": {
                "key": "[core]",
                "name": "核心"
            },
            "comment": "杂项代码",
            "demo": "isLockedIfGameModeNoNuke: true",
            "description": "如果在游戏开始前选择了禁用核武器，禁止建造此单位。",
            "key": "isLockedIfGameModeNoNuke",
            "name": "禁核模式锁定",
            "value_type": "bool"
        },
        {
            "Section": {
                "key": "[core]",
                "name": "核心"
            },
            "comment": "杂项代码",
            "demo": "experimental: true",
            "description": "标记单位为实验单位。影响缩小图标和游戏结束统计。",
            "key": "experimental",
            "name": "实验单位标志",
            "value_type": "bool"
        },
        {
            "Section": {
                "key": "[core]",
                "name": "核心"
            },
            "comment": "杂项代码",
            "demo": "stayNeutral: false",
            "description": "设置为false时，单位处于中立队伍情况下，禁止靠近时更改为玩家所属。仍然有其它方式获得。",
            "key": "stayNeutral",
            "name": "保持中立",
            "value_type": "bool"
        },
        {
            "Section": {
                "key": "[core]",
                "name": "核心"
            },
            "comment": "杂项代码",
            "demo": "createNeutral: true",
            "description": "设置为true时，产生该单位总是自动转变为中立队伍。创建时中立，但不妨碍玩家捕获。",
            "key": "createNeutral",
            "name": "创建时中立",
            "value_type": "bool"
        },
        {
            "Section": {
                "key": "[core]",
                "name": "核心"
            },
            "comment": "杂项代码",
            "demo": "createOnAggressiveTeam: true",
            "description": "设置为true时，此中立单位对所有玩家有敌意。",
            "key": "createOnAggressiveTeam",
            "name": "创建为敌对中立",
            "value_type": "bool"
        },
        {
            "Section": {
                "key": "[core]",
                "name": "核心"
            },
            "comment": "杂项代码",
            "demo": "tags: tank, smallTank, piercingDamage",
            "description": "标签，用于对单位进行分类，用于实现各种各样的特殊作。比如单位数量限制，伤害修正，增益损益，触发条件等等",
            "key": "tags",
            "name": "标签",
            "value_type": "string"
        },
        {
            "Section": {
                "key": "[core]",
                "name": "核心"
            },
            "comment": "杂项代码",
            "demo": "defineUnitMemory:unit attackunit",
            "description": "为每个单元创建唯一的自定义存储变量。允许的类型:boolean, float/number, unit, string\r\n格式:defineUnitMemory:类型 变量名称\r\n\"defineUnitMemory: boolean nukeActive,boolean laserReady, float experience, unit nextTarget, unit homeBase, string customText\"",
            "key": "defineUnitMemory",
            "name": "定义单位内存",
            "value_type": "string"
        },
        {
            "Section": {
                "key": "[core]",
                "name": "核心"
            },
            "comment": "杂项代码",
            "demo": "fogOfWarSightRange: 18",
            "description": "设置单位视野，在战争迷雾中可以看到的瓷砖数量。默认为15。",
            "key": "fogOfWarSightRange",
            "name": "视野",
            "value_type": "int"
        },
        {
            "Section": {
                "key": "[core]",
                "name": "核心"
            },
            "comment": "杂项代码",
            "demo": "fogOfWarSightRangeWhileNotBuilt:3",
            "description": "填数值，当建筑或单位没有建造完成时，它的视野范围",
            "key": "fogOfWarSightRangeWhileNotBuilt",
            "name": "未完成时视野",
            "value_type": "int"
        },
        {
            "Section": {
                "key": "[core]",
                "name": "核心"
            },
            "comment": "杂项代码",
            "demo": "softCollisionOnAll: 3",
            "description": "与其他单位碰撞时产生柔和的碰撞效果，填负数会导致单位相互吸引。",
            "key": "softCollisionOnAll",
            "name": "碰撞体积软化",
            "value_type": "int"
        },
        {
            "Section": {
                "key": "[core]",
                "name": "核心"
            },
            "comment": "杂项代码",
            "demo": "disableAllUnitCollisions: true",
            "description": "如果为true，则该单位无视与其它单位碰撞。无碰撞体积单位可以用于固定位置制造效果，或是用于一些不影响单位通行的场景。",
            "key": "disableAllUnitCollisions",
            "name": "禁用碰撞",
            "value_type": "bool"
        },
        {
            "Section": {
                "key": "[core]",
                "name": "核心"
            },
            "comment": "杂项代码",
            "demo": "isUnrepairableUnit: true",
            "description": "如果为true，则任何单位都无法修复此单位。但负伤害仍然可以维修。",
            "key": "isUnrepairableUnit",
            "name": "禁止被修复",
            "value_type": "bool"
        },
        {
            "Section": {
                "key": "[core]",
                "name": "核心"
            },
            "comment": "杂项代码",
            "demo": "isUnselectable: true",
            "description": "如果为true，则无法选择单位。 （包括AI）可用于效果单位，禁止被玩家选择。",
            "key": "isUnselectable",
            "name": "禁止选择",
            "value_type": "bool"
        },
        {
            "Section": {
                "key": "[core]",
                "name": "核心"
            },
            "comment": "杂项代码",
            "demo": "isUnselectableAsTarget:true",
            "description": "默认效果为isUnselectable。可以用来创造不能被选择但是可以被攻击，回收的单位",
            "key": "isUnselectableAsTarget",
            "name": "禁止选择和作为目标",
            "value_type": "bool"
        },
        {
            "Section": {
                "key": "[core]",
                "name": "核心"
            },
            "comment": "杂项代码",
            "demo": "isPickableStartingUnit:true",
            "description": "如果为true，则将单位添加到游戏高级设置菜单中，用于可选初始单位菜单。",
            "key": "isPickableStartingUnit",
            "name": "为可选初始单位",
            "value_type": "bool"
        },
        {
            "Section": {
                "key": "[core]",
                "name": "核心"
            },
            "comment": "杂项代码",
            "demo": "startFallingWhenStartingUnit: true",
            "description": "如果为true，则游戏开始时，此单位会从从天而降。",
            "key": "startFallingWhenStartingUnit",
            "name": "为可选单位开局后从天而降",
            "value_type": "bool"
        },
        {
            "Section": {
                "key": "[core]",
                "name": "核心"
            },
            "comment": "杂项代码",
            "demo": "soundOnAttackOrder: tankAttackOrder1.ogg:0.6, tankAttackOrder2.ogg ",
            "description": "填音效名称列表。用,隔开。每次下达攻击指令时只播放其中一个。仅支持.ogg和.wav格式，注意如果你mod用于pc端，则不要直接修改后缀名，要转换格式。",
            "key": "soundOnAttackOrder",
            "name": "攻击指令音效",
            "value_type": "sound"
        },
        {
            "Section": {
                "key": "[core]",
                "name": "核心"
            },
            "comment": "杂项代码",
            "demo": "soundOnMoveOrder: tankMoveOrder1.ogg, tankMoveOrder2.ogg",
            "description": "填声音名称列表。用,隔开。每次下达移动指令时只播放其中一个。仅支持.ogg和.wav格式，注意不要直接修改后缀名，要转换格式。",
            "key": "soundOnMoveOrder",
            "name": "移动指令音效",
            "value_type": "sound"
        },
        {
            "Section": {
                "key": "[core]",
                "name": "核心"
            },
            "comment": "杂项代码",
            "demo": "soundOnNewSelection: tankSelection1.ogg, tankSelection2.ogg",
            "description": "填声音名称列表。用,隔开。每次下达选择指令时只播放其中一个。仅支持.ogg和.wav格式，注意不要直接修改后缀名，要转换格式。",
            "key": "soundOnNewSelection",
            "name": "选择指令音效",
            "value_type": "sound"
        },
        {
            "Section": {
                "key": "[core]",
                "name": "核心"
            },
            "comment": "杂项代码",
            "demo": "canNotBeDirectlyAttacked: true",
            "description": "无敌，如果为true，任何单位都不能直接瞄准此单位，也不会受到范围武器伤害。则还将在胜利/失败检查中跳过检查。",
            "key": "canNotBeDirectlyAttacked",
            "name": "禁止直接攻击",
            "value_type": "bool"
        },
        {
            "Section": {
                "key": "[core]",
                "name": "核心"
            },
            "comment": "杂项代码",
            "demo": "canNotBeDamaged:true",
            "description": "无敌，可被敌方攻击，但不造成实质伤害。如果canNotBeDirectlyAttacked为true,此语句为false,则不可被直接攻击但受到范围伤害。",
            "key": "canNotBeDamaged",
            "name": "禁止受到伤害",
            "value_type": "bool"
        },
        {
            "Section": {
                "key": "[core]",
                "name": "核心"
            },
            "comment": "杂项代码",
            "demo": "canNotBeGivenOrdersByPlayer: true",
            "description": "如果为true，则单位不会接受玩家或AI的命令。可以选中查看信息。",
            "key": "canNotBeGivenOrdersByPlayer",
            "name": "禁止接受指令",
            "value_type": "bool"
        },
        {
            "Section": {
                "key": "[core]",
                "name": "核心"
            },
            "comment": "杂项代码",
            "demo": "canOnlyBeAttackedByUnitsWithTags: piercingTank, powerfulTank",
            "description": "填标签，只有带有这些标签的单位才能直接定位到该单位。",
            "key": "canOnlyBeAttackedByUnitsWithTags",
            "name": "仅许带此标签单位攻击",
            "value_type": "string"
        },
        {
            "Section": {
                "key": "[core]",
                "name": "核心"
            },
            "comment": "运输代码",
            "demo": "transportSlotsNeeded: 2",
            "description": "默认值为1。此单位在运输载具中占据的格子数。",
            "key": "transportSlotsNeeded",
            "name": "运输占用位置",
            "value_type": "int"
        },
        {
            "Section": {
                "key": "[core]",
                "name": "核心"
            },
            "comment": "运输代码",
            "demo": "maxTransportingUnits: 5",
            "description": "该单位载员格子数量。",
            "key": "maxTransportingUnits",
            "name": "运输槽位数量",
            "value_type": "int"
        },
        {
            "Section": {
                "key": "[core]",
                "name": "核心"
            },
            "comment": "运输代码",
            "demo": "transportUnitsRequireTag: smallTank, soldier",
            "description": "仅允许运输具有这些标签之一的单位。可以用于运输类型分类，如人运物资，步兵车运人，气垫船运车辆。或是子机限制，如航母飞机只能降落到航母。",
            "key": "transportUnitsRequireTag",
            "name": "被运输单位需要标签",
            "value_type": "string"
        },
        {
            "Section": {
                "key": "[core]",
                "name": "核心"
            },
            "comment": "运输代码",
            "demo": "transportUnitsRequireMovementType: AIR, WATER",
            "description": "仅允许运输具有这些移动类型之一的单位。默认陆地。比如可以设定某单位可以运输空军以实现停机坪，只运输海军等。",
            "key": "transportUnitsRequireMovementType",
            "name": "被运输单位类型限制",
            "value_type": "string"
        },
        {
            "Section": {
                "key": "[core]",
                "name": "核心"
            },
            "comment": "运输代码",
            "demo": "transportUnitsBlockAirAndWaterUnits: false",
            "description": "禁止运输空军和海军，默认为true。如果为true，则此单位只能运输LAND单位。",
            "key": "transportUnitsBlockAirAndWaterUnits",
            "name": "禁止运输空军和海军",
            "value_type": "bool"
        },
        {
            "Section": {
                "key": "[core]",
                "name": "核心"
            },
            "comment": "运输代码",
            "demo": "transportUnitsKeepBuiltUnits: true",
            "description": "使建造的单位留在运输者中，而不是造完直接从载具中出来。",
            "key": "transportUnitsKeepBuiltUnits",
            "name": "单位建造完成时保留在载具内",
            "value_type": "logic"
        },
        {
            "Section": {
                "key": "[core]",
                "name": "核心"
            },
            "comment": "运输代码",
            "demo": "transportUnitsCanUnloadUnits: false",
            "description": "载具卸载单位需要满足条件，默认为“ if not self.isOverLiquid() and not self.isMoving()”(不在液体上且没有移动)",
            "key": "transportUnitsCanUnloadUnits",
            "name": "载具可以卸载单位",
            "value_type": "logic"
        },
        {
            "Section": {
                "key": "[core]",
                "name": "核心"
            },
            "comment": "运输代码",
            "demo": "transportUnitsAddUnloadOption: false",
            "description": "是否显示卸载按钮",
            "key": "transportUnitsAddUnloadOption",
            "name": "载具显示卸载按钮",
            "value_type": "logic"
        },
        {
            "Section": {
                "key": "[core]",
                "name": "核心"
            },
            "comment": "运输代码",
            "demo": "transportUnitsUnloadDelayBetweenEachUnit: 12",
            "description": "卸载单位之间的延迟时间。",
            "key": "transportUnitsUnloadDelayBetweenEachUnit",
            "name": "载具卸载时间间隔",
            "value_type": "float"
        },
        {
            "Section": {
                "key": "[core]",
                "name": "核心"
            },
            "comment": "运输代码",
            "demo": "transportUnitsKillOnDeath: if self.isOverLiquid()",
            "description": "默认为true。如果载具死亡，则其中单位也死亡。",
            "key": "transportUnitsKillOnDeath",
            "name": "载具内单位和载具一同死亡",
            "value_type": "logic"
        },
        {
            "Section": {
                "key": "[core]",
                "name": "核心"
            },
            "comment": "运输代码",
            "demo": "transportUnitsHealBy: 0.1",
            "description": "填数值，以帧为单位。自动治疗载具内部单位。",
            "key": "transportUnitsHealBy",
            "name": "载具治疗内部单位速度",
            "value_type": "float"
        },
        {
            "Section": {
                "key": "[core]",
                "name": "核心"
            },
            "comment": "运输代码",
            "demo": "transportUnitsBlockOtherTransports: false",
            "description": "默认值为true，如果为false，则此载具可以装载其它载具。比如步兵装物资，载具装步兵，运输船装载具。",
            "key": "transportUnitsBlockOtherTransports",
            "name": "载具禁止装载其它载具",
            "value_type": "bool"
        },
        {
            "Section": {
                "key": "[core]",
                "name": "核心"
            },
            "comment": "运输代码",
            "demo": "whileNeutralTransportAnyTeam: true",
            "description": "如果是中立的，则这个部队可以装载任何队伍的部队。可用于占领中立单位，比如坦克需要驾驶员，步兵建筑平民建筑。",
            "key": "whileNeutralTransportAnyTeam",
            "name": "中立时可装载任意所属单位",
            "value_type": "bool"
        },
        {
            "Section": {
                "key": "[core]",
                "name": "核心"
            },
            "comment": "运输代码",
            "demo": "whileNeutralConvertToTransportedTeam: true",
            "description": "中立时将其转换为载员队伍。与whileNeutralTransportAnyTeam一起使用，用于占领中立单位。",
            "key": "whileNeutralConvertToTransportedTeam",
            "name": "中立时转换为载员队伍",
            "value_type": "bool"
        },
        {
            "Section": {
                "key": "[core]",
                "name": "核心"
            },
            "comment": "运输代码",
            "demo": "convertToNeutralIfNotTransporting: true",
            "description": "卸载单位时将其恢复为中立队伍。与whileNeutralTransportAnyTeam一起使用。",
            "key": "convertToNeutralIfNotTransporting",
            "name": "卸载所有单位时恢复为中立",
            "value_type": "bool"
        },
        {
            "Section": {
                "key": "[core]",
                "name": "核心"
            },
            "comment": "运输代码",
            "demo": "transportUnitsOnTeamChangeKeepCurrentTeam: true",
            "description": "如果为true，则单位转换阵营时仍然将运输的单位保留在其原始队伍中。",
            "key": "transportUnitsOnTeamChangeKeepCurrentTeam",
            "name": "转换所属时保留内部单位所属",
            "value_type": "bool"
        },
        {
            "Section": {
                "key": "[core]",
                "name": "核心"
            },
            "comment": "运输代码",
            "demo": "transportUnitsEachUnitAlwaysUsesSingleSlot:true",
            "description": "所有载员无论体积只占用一个运输槽。但体积大于载员数时仍然不能进入。",
            "key": "transportUnitsEachUnitAlwaysUsesSingleSlot",
            "name": "载员只占用一个槽位",
            "value_type": "bool"
        },
        {
            "Section": {
                "key": "[core]",
                "name": "核心"
            },
            "comment": "运输代码",
            "demo": "transportUnitsKeepWaypoints:true",
            "description": "目前无效",
            "key": "transportUnitsKeepWaypoints",
            "name": "载员保持路径点",
            "value_type": "bool"
        },
        {
            "Section": {
                "key": "[core]",
                "name": "核心"
            },
            "comment": "资源节点代码",
            "demo": "resourceRate:1",
            "description": "回收速度。每帧回收血量。与canReclaimResources一起使用。允许其他队伍回收该单位。通常与中立队伍配合使用。使用价格来设置获取哪些资源。",
            "key": "resourceRate",
            "name": "回收速率",
            "value_type": "float"
        },
        {
            "Section": {
                "key": "[core]",
                "name": "核心"
            },
            "comment": "资源节点代码",
            "demo": "similarResourcesHaveTag: goldResource",
            "description": "有这些标签时，资源采集单位将视为同一种资源",
            "key": "similarResourcesHaveTag",
            "name": "像用于此标签的单位",
            "value_type": "string"
        },
        {
            "Section": {
                "key": "[core]",
                "name": "核心"
            },
            "comment": "资源节点代码",
            "demo": "resourceMaxConcurrentReclaimingThis: 3",
            "description": "默认为无限制。限制有多少单位可以同时回收此资源。",
            "key": "resourceMaxConcurrentReclaimingThis",
            "name": "可同时被此数目单位回收",
            "value_type": "int"
        },
        {
            "Section": {
                "key": "[core]",
                "name": "核心"
            },
            "comment": "资源节点代码",
            "demo": "reclaimPrice: gold=1000",
            "description": "自定义资源，类似价格。对于自定义资源很有用。",
            "key": "reclaimPrice",
            "name": "回收价格",
            "value_type": "int"
        },
        {
            "Section": {
                "key": "[core]",
                "name": "核心"
            },
            "comment": "资源收集器代码",
            "demo": "canReclaimResources: true",
            "description": "如果为true，则此单位可以收集资源，这对于resourceRate很有用。",
            "key": "canReclaimResources",
            "name": "可以回收资源",
            "value_type": "bool"
        },
        {
            "Section": {
                "key": "[core]",
                "name": "核心"
            },
            "comment": "资源收集器代码",
            "demo": "canReclaimResourcesNextSearchRange: 100",
            "description": "当一处资源采集完后，搜寻更多资源的范围。",
            "key": "canReclaimResourcesNextSearchRange",
            "name": "搜寻资源范围",
            "value_type": "int"
        },
        {
            "Section": {
                "key": "[core]",
                "name": "核心"
            },
            "comment": "建筑和工厂代码",
            "demo": "canRepairBuildings: true",
            "description": "如果为true，该单位可以修复建筑。 （isBuilder：true是必需的）",
            "key": "canRepairBuildings",
            "name": "可以修建筑",
            "value_type": "bool"
        },
        {
            "Section": {
                "key": "[core]",
                "name": "核心"
            },
            "comment": "建筑和工厂代码",
            "demo": "canRepairUnits: true",
            "description": "如果为true，此单位可以修复单位。 （isBuilder：true是必需的）",
            "key": "canRepairUnits",
            "name": "可以修单位",
            "value_type": "bool"
        },
        {
            "Section": {
                "key": "[core]",
                "name": "核心"
            },
            "comment": "建筑和工厂代码",
            "demo": "autoRepair: true",
            "description": "自动维修附近单位，范围为nanoRange。 （isBuilder：true是必需的）",
            "key": "autoRepair",
            "name": "可以自动修",
            "value_type": "bool"
        },
        {
            "Section": {
                "key": "[core]",
                "name": "核心"
            },
            "comment": "建筑和工厂代码",
            "demo": "canReclaimUnitsOnlyWithTags:shibaInu",
            "description": "仅允许此单位回收具有特定标签单位。",
            "key": "canReclaimUnitsOnlyWithTags",
            "name": "仅允许回收特定标签单位",
            "value_type": "string"
        },
        {
            "Section": {
                "key": "[core]",
                "name": "核心"
            },
            "comment": "建筑和工厂代码",
            "demo": "canRepairUnitsOnlyWithTags:cat",
            "description": "仅允许此单位维修具有特定标签单位。",
            "key": "canRepairUnitsOnlyWithTags",
            "name": "仅允许维修特定标签单位",
            "value_type": "string"
        },
        {
            "Section": {
                "key": "[core]",
                "name": "核心"
            },
            "comment": "建筑和工厂代码",
            "demo": "nanoRange: 110",
            "description": "默认值为85。定义单位的构建/修复/回收范围。",
            "key": "nanoRange",
            "name": "维修或建造范围",
            "value_type": "int"
        },
        {
            "Section": {
                "key": "[core]",
                "name": "核心"
            },
            "comment": "建筑和工厂代码",
            "demo": "nanoRepairSpeed: 0.01",
            "description": "默认值为0.2。定义单位修复速度。",
            "key": "nanoRepairSpeed",
            "name": "维修速度",
            "value_type": "float"
        },
        {
            "Section": {
                "key": "[core]",
                "name": "核心"
            },
            "comment": "建筑和工厂代码",
            "demo": "nanoBuildSpeed: 0.9",
            "description": "默认值为1。定义单位建造速度。 （可能与目标的buildSpeed相乘）",
            "key": "nanoBuildSpeed",
            "name": "建造速度",
            "value_type": "float"
        },
        {
            "Section": {
                "key": "[core]",
                "name": "核心"
            },
            "comment": "建筑和工厂代码",
            "demo": "nanoRangeForRepairIsMelee: true",
            "description": "定义此单位维修时是否为近战算法，默认计算是从自身中心到目标中心，如果单位过大运动又受到阻碍，则虽然看起来很近，然而实际太远无法建造。\r\n近战类算法则是算上其半径，由中心计算改为从边缘计算。",
            "key": "nanoRangeForRepairIsMelee",
            "name": "维修范围按近战逻辑",
            "value_type": "bool"
        },
        {
            "Section": {
                "key": "[core]",
                "name": "核心"
            },
            "comment": "建筑和工厂代码",
            "demo": "nanoRangeForReclaimIsMelee: true",
            "description": "与上条类似，本条定义其回收范围是否为近战算法。",
            "key": "nanoRangeForReclaimIsMelee",
            "name": "回收范围按近战逻辑",
            "value_type": "bool"
        },
        {
            "Section": {
                "key": "[core]",
                "name": "核心"
            },
            "comment": "建筑和工厂代码",
            "demo": "nanoRangeForRepair: 60",
            "description": "此单位维修距离。",
            "key": "nanoRangeForRepair",
            "name": "维修距离",
            "value_type": "int"
        },
        {
            "Section": {
                "key": "[core]",
                "name": "核心"
            },
            "comment": "建筑和工厂代码",
            "demo": "nanoRangeForReclaim: 60",
            "description": "此单位回收距离。",
            "key": "nanoRangeForReclaim",
            "name": "回收距离",
            "value_type": "int"
        },
        {
            "Section": {
                "key": "[core]",
                "name": "核心"
            },
            "comment": "建筑和工厂代码",
            "demo": "nanoFactorySpeed: 1.2",
            "description": "默认值为1。如果此单位是工厂，则乘以创建单位的buildSpeed值。用于加速或者减速建造。",
            "key": "nanoFactorySpeed",
            "name": "工厂速度乘数",
            "value_type": "float"
        },
        {
            "Section": {
                "key": "[core]",
                "name": "核心"
            },
            "comment": "建筑和工厂代码",
            "demo": "extraBuildRangeWhenBuildingThis: 90",
            "description": "此单位额外的建造距离，可以使建造者在更远的地方建造它，多用于水上建筑。",
            "key": "extraBuildRangeWhenBuildingThis",
            "name": "额外建造距离",
            "value_type": "int"
        },
        {
            "Section": {
                "key": "[core]",
                "name": "核心"
            },
            "comment": "建筑和工厂代码",
            "demo": "builtFrom_1_name: landFactory, airFactory",
            "description": "除非你向原版工厂添加单位，否则不建议使用。将该单位添加到目标建筑物中。",
            "key": "builtFrom_#_name",
            "name": "从此单位建造",
            "value_type": "string"
        },
        {
            "Section": {
                "key": "[core]",
                "name": "核心"
            },
            "comment": "建筑和工厂代码",
            "demo": "builtFrom_1_pos: 0.1",
            "description": "在列表中的排序，越小越靠前。",
            "key": "builtFrom_#_pos",
            "name": "从此单位建造排序",
            "value_type": "float"
        },
        {
            "Section": {
                "key": "[core]",
                "name": "核心"
            },
            "comment": "建筑和工厂代码",
            "demo": "builtFrom_1_forceNano: true",
            "description": "如果为true，则像构建建筑一样造此单位。 （即使是一个单位）",
            "key": "builtFrom_#_forceNano",
            "name": "从此单位像建筑一样建造",
            "value_type": "bool"
        },
        {
            "Section": {
                "key": "[core]",
                "name": "核心"
            },
            "comment": "建筑和工厂代码",
            "demo": "builtFrom_1_isLocked: if self.hp(lessThan=100)",
            "description": "如果为true，则无法在目标中构建此单位。 （逻辑布尔值，设置建造条件）",
            "key": "builtFrom_#_isLocked",
            "name": "从此单位建造条件",
            "value_type": "logic"
        },
        {
            "Section": {
                "key": "[core]",
                "name": "核心"
            },
            "comment": "建筑和工厂代码",
            "demo": "builtFrom_1_isLockedMessage: -Needs more population",
            "description": "无法建造时显示的信息。",
            "key": "builtFrom_#_isLockedMessage",
            "name": "从此单位建造锁定信息",
            "value_type": "string"
        },
        {
            "Section": {
                "key": "[core]",
                "name": "核心"
            },
            "comment": "建筑和工厂代码",
            "demo": "exit_x: 0",
            "description": "从载具卸载或者工厂生产完成时，单位出现的位置，默认为0",
            "key": "exit_x",
            "name": "离开x轴",
            "value_type": "float"
        },
        {
            "Section": {
                "key": "[core]",
                "name": "核心"
            },
            "comment": "建筑和工厂代码",
            "demo": "exit_x: 5",
            "description": "从载具卸载或者工厂生产完成时，单位出现的位置，默认为5，正数向下。",
            "key": "exit_y",
            "name": "离开y轴",
            "value_type": "float"
        },
        {
            "Section": {
                "key": "[core]",
                "name": "核心"
            },
            "comment": "建筑和工厂代码",
            "demo": "exit_dirOffset: 140",
            "description": "单位默认为180(朝下)，建筑物默认为0(朝右)。定义已创建或卸载单位的退出方向。",
            "key": "exit_dirOffset",
            "name": "离开旋转角度",
            "value_type": "float"
        },
        {
            "Section": {
                "key": "[core]",
                "name": "核心"
            },
            "comment": "建筑和工厂代码",
            "demo": "exit_heightOffset: 16",
            "description": "默认值为0。定义创建或卸载的单位出现的高度。",
            "key": "exit_heightOffset",
            "name": "离开高度",
            "value_type": "float"
        },
        {
            "Section": {
                "key": "[core]",
                "name": "核心"
            },
            "comment": "建筑和工厂代码",
            "demo": "exit_moveAwayAmount: 10",
            "description": "默认值为70。定义创建或卸载的单位与该单位的距离。",
            "key": "exit_moveAwayAmount",
            "name": "离开距离",
            "value_type": "float"
        },
        {
            "Section": {
                "key": "[core]",
                "name": "核心"
            },
            "comment": "建筑和工厂代码",
            "demo": "exitHeightIgnoreParent:true",
            "description": "离开时的高度不考虑父高度;用于与父单位一起建造时分离附件",
            "key": "exitHeightIgnoreParent",
            "name": "离开高度忽略父单位",
            "value_type": "bool"
        },
        {
            "Section": {
                "key": "[core]",
                "name": "核心"
            },
            "comment": "死亡代码",
            "demo": "dieOnConstruct: true",
            "description": "如果为true，则创建建筑时删除自身。（目标建筑物/单位需要selfBuildRate以自动建造完成）",
            "key": "dieOnConstruct",
            "name": "构建时死亡",
            "value_type": "bool"
        },
        {
            "Section": {
                "key": "[core]",
                "name": "核心"
            },
            "comment": "死亡代码",
            "demo": "dieOnZeroEnergy: true",
            "description": "如果能量值为零，该单位死亡。",
            "key": "dieOnZeroEnergy",
            "name": "无能量时死亡",
            "value_type": "bool"
        },
        {
            "Section": {
                "key": "[core]",
                "name": "核心"
            },
            "comment": "死亡代码",
            "demo": "numBitsOnDeath: 20",
            "description": "定义该单位死亡时散落的碎片的数量。",
            "key": "numBitsOnDeath",
            "name": "死亡产生碎片",
            "value_type": "int"
        },
        {
            "Section": {
                "key": "[core]",
                "name": "核心"
            },
            "comment": "死亡代码",
            "demo": "nukeOnDeath: true",
            "description": "不推荐使用。建议使用死亡武器代替，其拥有更丰富的设定选项。如果为true，单位死亡时会生成一个内置的核弹爆炸效果。",
            "key": "nukeOnDeath",
            "name": "死亡核爆",
            "value_type": "bool"
        },
        {
            "Section": {
                "key": "[core]",
                "name": "核心"
            },
            "comment": "死亡代码",
            "demo": "nukeOnDeathRange: 140",
            "description": "不推荐使用。定义使用nukeOnDeath时的核弹效果范围。",
            "key": "nukeOnDeathRange",
            "name": "死亡核爆范围",
            "value_type": "float"
        },
        {
            "Section": {
                "key": "[core]",
                "name": "核心"
            },
            "comment": "死亡代码",
            "demo": "nukeOnDeathDamage: 2000",
            "description": "不推荐使用。定义使用nukeOnDeath时的核武器效果区域伤害。",
            "key": "nukeOnDeathDamage",
            "name": "死亡核爆伤害",
            "value_type": "float"
        },
        {
            "Section": {
                "key": "[core]",
                "name": "核心"
            },
            "comment": "死亡代码",
            "demo": "nukeOnDeathDisableWhenNoNuke: true",
            "description": "不推荐使用。默认为false。如果为true，则禁用核武器时，该单位死亡时不会产生核爆炸。",
            "key": "nukeOnDeathDisableWhenNoNuke",
            "name": "死亡核爆条件",
            "value_type": "bool"
        },
        {
            "Section": {
                "key": "[core]",
                "name": "核心"
            },
            "comment": "死亡代码",
            "demo": "fireTurretXAtSelfOnDeath: turret_1",
            "description": "死亡武器。单位死后，使用指定炮塔攻击自身所在位置。",
            "key": "fireTurretXAtSelfOnDeath",
            "name": "死亡武器",
            "value_type": "turret ref"
        },
        {
            "Section": {
                "key": "[core]",
                "name": "核心"
            },
            "comment": "死亡代码",
            "demo": "explodeOnDeath: false",
            "description": "默认为true。如果为false，则禁用单位死亡时的内置爆炸效果。",
            "key": "explodeOnDeath",
            "name": "死亡爆炸",
            "value_type": "bool"
        },
        {
            "Section": {
                "key": "[core]",
                "name": "核心"
            },
            "comment": "死亡代码",
            "demo": "explodeOnDeathGroundCollision: false",
            "description": "默认为true。如果为false，则禁用接触地面时内置爆炸效果。",
            "key": "explodeOnDeathGroundCollision",
            "name": "死亡撞击地面爆炸",
            "value_type": "bool"
        },
        {
            "Section": {
                "key": "[core]",
                "name": "核心"
            },
            "comment": "死亡代码",
            "demo": "effectOnDeath: shockwave, CUSTOM:pieces*3, CUSTOM:deathSound",
            "description": "单位死亡时产生内置或自定义效果。",
            "key": "effectOnDeath",
            "name": "死亡效果",
            "value_type": "effect"
        },
        {
            "Section": {
                "key": "[core]",
                "name": "核心"
            },
            "comment": "死亡代码",
            "demo": "effectOnDeathGroundCollision: CUSTOM:bigExplosion",
            "description": "类似于effectOnDeath，但当单位接触地面时。对飞行单位有用。",
            "key": "effectOnDeathGroundCollision",
            "name": "死亡撞击地面效果",
            "value_type": "effect"
        },
        {
            "Section": {
                "key": "[core]",
                "name": "核心"
            },
            "comment": "死亡代码",
            "demo": "unitsSpawnedOnDeath: tank*5, hoverTank",
            "description": "死亡时产生这些单位。逗号分隔的单位标识符。",
            "key": "unitsSpawnedOnDeath",
            "name": "死亡产生单位",
            "value_type": "string"
        },
        {
            "Section": {
                "key": "[core]",
                "name": "核心"
            },
            "comment": "死亡代码",
            "demo": "unitsSpawnedOnDeath_setToTeamOfLastAttacker: true",
            "description": "如果为true，死亡时产生的单位将更改归属为最后一个攻击者的队伍。",
            "key": "unitsSpawnedOnDeath_setToTeamOfLastAttacker",
            "name": "死亡产生单位所属",
            "value_type": "bool"
        },
        {
            "Section": {
                "key": "[core]",
                "name": "核心"
            },
            "comment": "死亡代码",
            "demo": "hideScorchMark: true",
            "description": "如果为true，则禁止单位死亡时留下焦痕。",
            "key": "hideScorchMark",
            "name": "死亡痕迹",
            "value_type": "bool"
        },
        {
            "Section": {
                "key": "[core]",
                "name": "核心"
            },
            "comment": "死亡代码",
            "demo": "soundOnDeath: tankExplosion1.ogg, tankExplosion2.ogg",
            "description": "为该单位设置自定义死亡声音。",
            "key": "soundOnDeath",
            "name": "死亡音效",
            "value_type": "string"
        },
        {
            "Section": {
                "key": "[core]",
                "name": "核心"
            },
            "comment": "死亡代码",
            "demo": "explodeTypeOnDeath:small",
            "description": "options: verysmall, small, normal, large, largeUnit, building, buildingNoShockwaveOrSmoke, verylargeBuilding\r\n添加内置死亡效果关键字，选项：非常小，很小，正常，大，大单位，建筑物，没有冲击波和烟雾的建筑物，非常大建筑",
            "key": "explodeTypeOnDeath",
            "name": "死亡时爆炸类型",
            "value_type": "string"
        },
        {
            "Section": {
                "key": "[core]",
                "name": "核心"
            },
            "comment": "死亡代码",
            "demo": "effectOnDeathIfUnbuilt: CUSTOM:implode",
            "description": "如果这个单位没建造完成就被毁了，则播放此效果",
            "key": "effectOnDeathIfUnbuilt",
            "name": "没建造完成时死亡效果",
            "value_type": "effect"
        },
        {
            "Section": {
                "key": "[core]",
                "name": "核心"
            },
            "comment": "死亡代码",
            "demo": "disableDeathOnZeroHp:true",
            "description": "如果为true，允许单位在0血量的情况下仍然存活，单位不会自然死亡。对自定义“死亡”动作很有用",
            "key": "disableDeathOnZeroHp",
            "name": "禁用零血死亡",
            "value_type": "bool"
        },
        {
            "Section": {
                "key": "[core]",
                "name": "核心"
            },
            "comment": "动作代码",
            "demo": "autoTriggerCooldownTime:0.1s",
            "description": "设置自动触发动作间隔。默认为1s。警告：对于许多设备，将此值设置得太低可能会影响性能，具体取决于操作效果。",
            "key": "autoTriggerCooldownTime",
            "name": "自动触发间隔",
            "value_type": "string"
        },
        {
            "Section": {
                "key": "[core]",
                "name": "核心"
            },
            "comment": "动作代码",
            "demo": "autoTriggerCooldownTime_allowDangerousHighCPU:true",
            "description": "自动触发冷却时间，允许高CPU占用，也就是可以使用非常高频的触发，但不建议这么做。",
            "key": "autoTriggerCooldownTime_allowDangerousHighCPU",
            "name": "允许超高频触发",
            "value_type": "bool"
        },
        {
            "Section": {
                "key": "[canBuild_NAME]",
                "name": "建造"
            },
            "comment": null,
            "demo": "name: tank, hoverTank, heavyTank",
            "description": "该单位可以创建的单位名列表。可以是建筑物或单位。",
            "key": "name",
            "name": "名字",
            "value_type": "string"
        },
        {
            "Section": {
                "key": "[canBuild_NAME]",
                "name": "建造"
            },
            "comment": null,
            "demo": "pos: 0.1",
            "description": "此单位在用户界面中排序，越小越靠上。",
            "key": "pos",
            "name": "排序",
            "value_type": "float"
        },
        {
            "Section": {
                "key": "[canBuild_NAME]",
                "name": "建造"
            },
            "comment": null,
            "demo": "tech: 2",
            "description": "没啥用。科技等级。通常只会影响此单位界面中的颜色。默认为1，只能填1、2、3。",
            "key": "tech",
            "name": "科技",
            "value_type": "int"
        },
        {
            "Section": {
                "key": "[canBuild_NAME]",
                "name": "建造"
            },
            "comment": null,
            "demo": "forceNano: true",
            "description": "如果为true，则将目标当作是建筑物建造。 （即使是一个单位）",
            "key": "forceNano",
            "name": "建造方式",
            "value_type": "bool"
        },
        {
            "Section": {
                "key": "[canBuild_NAME]",
                "name": "建造"
            },
            "comment": null,
            "demo": "isVisible: if not self.energy(greaterThan=100)",
            "description": "如果满足条件，则从界面中显示此单位。比如用于科技树。",
            "key": "isVisible",
            "name": "可见条件",
            "value_type": "logic"
        },
        {
            "Section": {
                "key": "[canBuild_NAME]",
                "name": "建造"
            },
            "comment": null,
            "demo": "isLocked: if self.hp(lessThan=100)",
            "description": "如果满足条件，则从界面中锁定此单位。比如用于科技树，或是限造单位。",
            "key": "isLocked",
            "name": "锁定",
            "value_type": "logic"
        },
        {
            "Section": {
                "key": "[canBuild_NAME]",
                "name": "建造"
            },
            "comment": null,
            "demo": "isLockedMessage: -Needs 2 Barracks",
            "description": "告知玩家单位为何被锁定。",
            "key": "isLockedMessage",
            "name": "锁定原因描述",
            "value_type": "string"
        },
        {
            "Section": {
                "key": "[canBuild_NAME]",
                "name": "建造"
            },
            "comment": null,
            "demo": "isLockedMessage_es: -Necesita 2 Cuarteles",
            "description": "设置锁定文本在不同语言下显示的内容。语言代码点击此处。",
            "key": "isLockedMessage_{LANG}",
            "name": "锁定文本多语言",
            "value_type": "string"
        },
        {
            "Section": {
                "key": "[canBuild_NAME]",
                "name": "建造"
            },
            "comment": null,
            "demo": "isLockedAlt: if self.energy(greaterThan=90)",
            "description": "另一个被锁定原因。只是允许显示不同的消息。",
            "key": "isLockedAlt",
            "name": "更多锁定原因",
            "value_type": "logic"
        },
        {
            "Section": {
                "key": "[canBuild_NAME]",
                "name": "建造"
            },
            "comment": null,
            "demo": "isLockedAltMessage: -Needs less energy",
            "description": "另一个被锁定原因描述。",
            "key": "isLockedAltMessage",
            "name": "锁定原因描述",
            "value_type": "string"
        },
        {
            "Section": {
                "key": "[canBuild_NAME]",
                "name": "建造"
            },
            "comment": null,
            "demo": "isLockedAlt2: if self.isMoving()",
            "description": "更多的锁定原因…",
            "key": "isLockedAlt2",
            "name": "更多锁定原因2",
            "value_type": "logic"
        },
        {
            "Section": {
                "key": "[canBuild_NAME]",
                "name": "建造"
            },
            "comment": null,
            "demo": "isLockedAlt2Message: -Needs to be quiet",
            "description": "更多的锁定描述…",
            "key": "isLockedAlt2Message",
            "name": "锁定文本2描述",
            "value_type": "string"
        },
        {
            "Section": {
                "key": "[canBuild_NAME]",
                "name": "建造"
            },
            "comment": null,
            "demo": "addResources: ammo=5, setFlag=1",
            "description": "在放置建筑物或生产单位时，将这些资源添加到自身中。",
            "key": "addResources",
            "name": "增加资源",
            "value_type": "res ref"
        },
        {
            "Section": {
                "key": "[canBuild_NAME]",
                "name": "建造"
            },
            "comment": null,
            "demo": "price: credits=1000, ammo=5",
            "description": "覆盖单位/建筑物的价格。 默认为单位内置的价格。\r\n用处如建造一个建筑时候附送一个单位。此代码可用设定为两者价钱之和,矿场600,送矿车1400,而建造时花2000,送1400,卖600,可避免玩家刷钱。",
            "key": "price",
            "name": "价格",
            "value_type": "res ref"
        },
        {
            "Section": {
                "key": "[canBuild_NAME]",
                "name": "建造"
            },
            "comment": null,
            "demo": "isGuiBlinking: true",
            "description": "如果为true，则在UI中生成闪烁效果。",
            "key": "isGuiBlinking",
            "name": "界面闪烁",
            "value_type": "logic"
        },
        {
            "Section": {
                "key": "[graphics]",
                "name": "图像"
            },
            "comment": null,
            "demo": "image:base.png",
            "description": "填图片名称，格式为png。",
            "key": "image",
            "name": "主体图像",
            "value_type": "image"
        },
        {
            "Section": {
                "key": "[graphics]",
                "name": "图像"
            },
            "comment": null,
            "demo": "image_back:back.png",
            "description": "可选的在单位后面绘制图像，不随单位转动。可用于工厂底图，单位角标等。",
            "key": "image_back",
            "name": "背景图像",
            "value_type": "image"
        },
        {
            "Section": {
                "key": "[graphics]",
                "name": "图像"
            },
            "comment": null,
            "demo": "image_back_always_use_full_image:true",
            "description": "默认会裁剪或拉伸或平铺到和主体图像一致.",
            "key": "image_back_always_use_full_image",
            "name": "图像背景总是使用完整的图像",
            "value_type": "bool"
        },
        {
            "Section": {
                "key": "[graphics]",
                "name": "图像"
            },
            "comment": null,
            "demo": "image_wreak:wreak.png",
            "description": "可选的单位死亡时使用的图像。",
            "key": "image_wreak",
            "name": "死亡图像",
            "value_type": "image"
        },
        {
            "Section": {
                "key": "[graphics]",
                "name": "图像"
            },
            "comment": null,
            "demo": "image_shield:shibe.png",
            "description": "自定义护盾所使用的图像。",
            "key": "image_shield",
            "name": "护盾图像",
            "value_type": "image"
        },
        {
            "Section": {
                "key": "[graphics]",
                "name": "图像"
            },
            "comment": null,
            "demo": "image_offsetX:10",
            "description": "图像在X轴偏移，用于不对称图像，比如你的单位有个吊臂，这样中心不在正中间。",
            "key": "image_offsetX",
            "name": "图像X轴偏移",
            "value_type": "int"
        },
        {
            "Section": {
                "key": "[graphics]",
                "name": "图像"
            },
            "comment": null,
            "demo": "image_offsetY:-20",
            "description": "图像在Y轴偏移,用于比较高的单位。",
            "key": "image_offsetY",
            "name": "图像Y轴偏移",
            "value_type": "int"
        },
        {
            "Section": {
                "key": "[graphics]",
                "name": "图像"
            },
            "comment": null,
            "demo": "isVisible: if self.hasFlag(id=1)",
            "description": "默认为true,如果为false将隐藏单位。",
            "key": "isVisible",
            "name": "可见",
            "value_type": "logic"
        },
        {
            "Section": {
                "key": "[graphics]",
                "name": "图像"
            },
            "comment": null,
            "demo": "isVisibleToEnemies:if not self.isAttacking()",
            "description": "与showOnMinimapToEnemies,canOnlyBeAttackedByUnitsWithTags一起使用时，可以创建隐形系统。",
            "key": "isVisibleToEnemies",
            "name": "对敌人可见",
            "value_type": "logic"
        },
        {
            "Section": {
                "key": "[graphics]",
                "name": "图像"
            },
            "comment": null,
            "demo": "teamColorsUseHue:true",
            "description": "luke不建议使用。单位上的绿色像素转换为团队颜色。 若为true整个单位都带有团队色彩。 默认为false，挺难看的。",
            "key": "teamColorsUseHue",
            "name": "阵营色色相",
            "value_type": "bool"
        },
        {
            "Section": {
                "key": "[graphics]",
                "name": "图像"
            },
            "comment": null,
            "demo": "teamColoringMode:hueAdd",
            "description": "设置单位着色逻辑，默认是纯绿。有四个值disabled,hueShift,hueAdd,pureGreen。(禁用，色相偏移，色相添加，纯绿)",
            "key": "teamColoringMode",
            "name": "阵营色模式",
            "value_type": "string"
        },
        {
            "Section": {
                "key": "[graphics]",
                "name": "图像"
            },
            "comment": null,
            "demo": "scaleImagesTo:15",
            "description": "单位像素。调整图像大小以使其适合像素值。同时影响腿部和阴影图像。",
            "key": "scaleImagesTo",
            "name": "缩放图像到",
            "value_type": "float"
        },
        {
            "Section": {
                "key": "[graphics]",
                "name": "图像"
            },
            "comment": null,
            "demo": "imageScale:0.9",
            "description": "调整图像大小。默认值为1。也可以影响腿部和阴影图像。",
            "key": "imageScale",
            "name": "图像缩放比例",
            "value_type": "float"
        },
        {
            "Section": {
                "key": "[graphics]",
                "name": "图像"
            },
            "comment": null,
            "demo": "drawLayer:ground",
            "description": "陆上单位通常默认为ground或ground2。运输船为ground2。wreaks, underwater, bottom, ground, ground2, experimentals, air, top",
            "key": "drawLayer",
            "name": "绘制图层",
            "value_type": "string"
        },
        {
            "Section": {
                "key": "[graphics]",
                "name": "图像"
            },
            "comment": null,
            "demo": "whenBeingBuiltMakeTransparentTill:0.5",
            "description": "设为0则一开始便完全不透明，设为1则直到建造完成时才不透明。",
            "key": "whenBeingBuiltMakeTransparentTill",
            "name": "建造时透明度",
            "value_type": "float"
        },
        {
            "Section": {
                "key": "[graphics]",
                "name": "图像"
            },
            "comment": null,
            "demo": "icon_zoomed_out:tank_zoomed.png",
            "description": "缩放时显示的图标",
            "key": "icon_zoomed_out",
            "name": "缩放图标",
            "value_type": "image"
        },
        {
            "Section": {
                "key": "[graphics]",
                "name": "图像"
            },
            "comment": null,
            "demo": "icon_zoomed_out_neverShow:false",
            "description": "缩放图标永不显示。",
            "key": "icon_zoomed_out_neverShow",
            "name": "缩放图标永不显示",
            "value_type": "bool"
        },
        {
            "Section": {
                "key": "[graphics]",
                "name": "图像"
            },
            "comment": null,
            "demo": "icon_build:icon_shiba.pmg",
            "description": "填文件名,指定图像作为单位在列表中显示的图像.",
            "key": "icon_build",
            "name": "建造图标",
            "value_type": "image"
        },
        {
            "Section": {
                "key": "[graphics]",
                "name": "图像"
            },
            "comment": "炮塔（也可以在每个炮塔上设置图像）",
            "demo": "image_turret:tank_turret.png",
            "description": "所有炮塔的默认图像，也可以为每个炮塔设置专用图像。",
            "key": "image_turret",
            "name": "炮塔图像",
            "value_type": "image"
        },
        {
            "Section": {
                "key": "[graphics]",
                "name": "图像"
            },
            "comment": "炮塔（也可以在每个炮塔上设置图像）",
            "demo": "turretImageScale:2",
            "description": "按比例缩放炮塔图像",
            "key": "turretImageScale",
            "name": "炮塔图像缩放",
            "value_type": "float"
        },
        {
            "Section": {
                "key": "[graphics]",
                "name": "图像"
            },
            "comment": "炮塔（也可以在每个炮塔上设置图像）",
            "demo": "teamColorsOnTurret:true",
            "description": "默认为false。在转塔上也应用团队颜色。",
            "key": "teamColorsOnTurret",
            "name": "炮塔使用队伍色",
            "value_type": "bool"
        },
        {
            "Section": {
                "key": "[graphics]",
                "name": "图像"
            },
            "comment": "炮塔（也可以在每个炮塔上设置图像）",
            "demo": "scaleTurretImagesTo:12",
            "description": "单位像素。缩放炮塔图像至指定像素，只用填宽度",
            "key": "scaleTurretImagesTo",
            "name": "炮塔图像缩放",
            "value_type": "float"
        },
        {
            "Section": {
                "key": "[graphics]",
                "name": "图像"
            },
            "comment": "炮塔（也可以在每个炮塔上设置图像）",
            "demo": "lock_body_rotation_with_main_turret:true",
            "description": "锁定主体图像旋转追随主炮塔",
            "key": "lock_body_rotation_with_main_turret",
            "name": "锁定主体旋转随主炮塔",
            "value_type": "bool"
        },
        {
            "Section": {
                "key": "[graphics]",
                "name": "图像"
            },
            "comment": "炮塔（也可以在每个炮塔上设置图像）",
            "demo": "lock_leg_rotation_with_main_turret:true",
            "description": "锁定腿脚图像旋转追随主炮塔",
            "key": "lock_leg_rotation_with_main_turret",
            "name": "锁定腿脚旋转随主炮塔",
            "value_type": "bool"
        },
        {
            "Section": {
                "key": "[graphics]",
                "name": "图像"
            },
            "comment": "阴影",
            "demo": "image_shadow:AUTO",
            "description": "填NONE或AUTO,或图像文件。",
            "key": "image_shadow",
            "name": "阴影图像",
            "value_type": "image"
        },
        {
            "Section": {
                "key": "[graphics]",
                "name": "图像"
            },
            "comment": "阴影",
            "demo": "shadowOffsetX:1",
            "description": "阴影x轴偏移值，正数往右",
            "key": "shadowOffsetX",
            "name": "阴影图像偏移X轴",
            "value_type": "float"
        },
        {
            "Section": {
                "key": "[graphics]",
                "name": "图像"
            },
            "comment": "阴影",
            "demo": "shadowOffsetY:2",
            "description": "阴影y轴偏移值，正数往下",
            "key": "shadowOffsetY",
            "name": "阴影图像偏移Y轴",
            "value_type": "float"
        },
        {
            "Section": {
                "key": "[graphics]",
                "name": "图像"
            },
            "comment": "阴影",
            "demo": "image_shadow_frames:true",
            "description": "true时阴影不随单位移动而改变方向。",
            "key": "image_shadow_frames",
            "name": "阴影图像指定",
            "value_type": "bool"
        },
        {
            "Section": {
                "key": "[graphics]",
                "name": "图像"
            },
            "comment": "阴影",
            "demo": "lock_shadow_rotation_with_main_turret:true",
            "description": "将身体图像阴影锁定到主炮塔的方向",
            "key": "lock_shadow_rotation_with_main_turret",
            "name": "阴影锁定为主炮塔方向",
            "value_type": "bool"
        },
        {
            "Section": {
                "key": "[graphics]",
                "name": "图像"
            },
            "comment": "效果和动画",
            "demo": "total_frames:15",
            "description": "默认值为1。将图像分割为指定分数，用于动画。第一帧编号为0",
            "key": "total_frames",
            "name": "图像帧数",
            "value_type": "int"
        },
        {
            "Section": {
                "key": "[graphics]",
                "name": "图像"
            },
            "comment": "效果和动画",
            "demo": "default_frame:1",
            "description": "指定默认显示为第几帧,默认为0即第一帧",
            "key": "default_frame",
            "name": "默认帧",
            "value_type": "int"
        },
        {
            "Section": {
                "key": "[graphics]",
                "name": "图像"
            },
            "comment": "效果和动画",
            "demo": "frame_width:35",
            "description": "设置单帧宽度，自动计算并覆盖总帧数。",
            "key": "frame_width",
            "name": "图像宽度",
            "value_type": "int"
        },
        {
            "Section": {
                "key": "[graphics]",
                "name": "图像"
            },
            "comment": "效果和动画",
            "demo": "frame_height:35",
            "description": "默认为图像高度",
            "key": "frame_height",
            "name": "图像高度",
            "value_type": "int"
        },
        {
            "Section": {
                "key": "[graphics]",
                "name": "图像"
            },
            "comment": "效果和动画",
            "demo": "splastEffect:true",
            "description": "在水上时创建水波效果。默认为false",
            "key": "splastEffect",
            "name": "水波效果",
            "value_type": "bool"
        },
        {
            "Section": {
                "key": "[graphics]",
                "name": "图像"
            },
            "comment": "效果和动画",
            "demo": "dustEffect:true",
            "description": "在地面上产生灰尘效果。默认为false",
            "key": "dustEffect",
            "name": "灰尘效果",
            "value_type": "bool"
        },
        {
            "Section": {
                "key": "[graphics]",
                "name": "图像"
            },
            "comment": "效果和动画",
            "demo": "splastEffectReverse:true",
            "description": "填true时，在倒车时也能产生效果",
            "key": "splastEffectReverse",
            "name": "逆向水波效果",
            "value_type": "bool"
        },
        {
            "Section": {
                "key": "[graphics]",
                "name": "图像"
            },
            "comment": "效果和动画",
            "demo": "dustEffectReverse:true",
            "description": "填true时，在倒车时也能产生效果",
            "key": "dustEffectReverse",
            "name": "逆向灰尘效果",
            "value_type": "bool"
        },
        {
            "Section": {
                "key": "[graphics]",
                "name": "图像"
            },
            "comment": "效果和动画",
            "demo": "movementEffect:smoke, CUSTOM:fastDust*2, CUSTOM:pop*5",
            "description": "自定义运动效果，可以是内置的或者自定义的。",
            "key": "movementEffect",
            "name": "运动效果",
            "value_type": "effect"
        },
        {
            "Section": {
                "key": "[graphics]",
                "name": "图像"
            },
            "comment": "效果和动画",
            "demo": "movementEffectReverse:smoke",
            "description": "自定义倒车效果。",
            "key": "movementEffectReverse",
            "name": "逆向运动效果",
            "value_type": "effect"
        },
        {
            "Section": {
                "key": "[graphics]",
                "name": "图像"
            },
            "comment": "效果和动画",
            "demo": "movementEffectRate:8",
            "description": "自定义效果产生频率，每隔多少帧一次。",
            "key": "movementEffectRate",
            "name": "运动效果频率",
            "value_type": "float"
        },
        {
            "Section": {
                "key": "[graphics]",
                "name": "图像"
            },
            "comment": "效果和动画",
            "demo": "movementEffectReverseFlipEffects:true",
            "description": "倒车时反转效果",
            "key": "movementEffectReverseFlipEffects",
            "name": "逆向时反转运动效果",
            "value_type": "bool"
        },
        {
            "Section": {
                "key": "[graphics]",
                "name": "图像"
            },
            "comment": "效果和动画",
            "demo": "repairEffect:smoke",
            "description": "自定义维修效果，可以是任何东西。替换构建时的默认效果",
            "key": "repairEffect",
            "name": "维修效果",
            "value_type": "effect"
        },
        {
            "Section": {
                "key": "[graphics]",
                "name": "图像"
            },
            "comment": "效果和动画",
            "demo": "repairEffectAtTarget:smoke",
            "description": "维修目标上产生的效果。",
            "key": "repairEffectAtTarget",
            "name": "维修目标效果",
            "value_type": "effect"
        },
        {
            "Section": {
                "key": "[graphics]",
                "name": "图像"
            },
            "comment": "效果和动画",
            "demo": "repairEffectRate:8",
            "description": "维修效果每隔多少帧产生一次。",
            "key": "repairEffectRate",
            "name": "维修效果频率",
            "value_type": "float"
        },
        {
            "Section": {
                "key": "[graphics]",
                "name": "图像"
            },
            "comment": "效果和动画",
            "demo": "reclaimEffect:smoke",
            "description": "自定义回收效果，可以是任何东西。替换回收时的默认效果",
            "key": "reclaimEffect",
            "name": "回收效果",
            "value_type": "effect"
        },
        {
            "Section": {
                "key": "[graphics]",
                "name": "图像"
            },
            "comment": "效果和动画",
            "demo": "reclaimEffectAtTarget:smoke",
            "description": "回收目标上产生的效果。",
            "key": "reclaimEffectAtTarget",
            "name": "回收目标效果",
            "value_type": "effect"
        },
        {
            "Section": {
                "key": "[graphics]",
                "name": "图像"
            },
            "comment": "效果和动画",
            "demo": "reclaimEffectRate:8",
            "description": "回收效果每隔多少帧产生一次。",
            "key": "reclaimEffectRate",
            "name": "回收效果频率",
            "value_type": "float"
        },
        {
            "Section": {
                "key": "[graphics]",
                "name": "图像"
            },
            "comment": "效果和动画",
            "demo": "rotate_with_direction:false",
            "description": "默认为true。设置为false时将单位图像锁定为0度。通常与animation_direction_ *一起用作多向视图。",
            "key": "rotate_with_direction",
            "name": "随角度旋转",
            "value_type": "bool"
        },
        {
            "Section": {
                "key": "[graphics]",
                "name": "图像"
            },
            "comment": "效果和动画",
            "demo": "animation_direction_units:45",
            "description": "每隔多少度切换一次素材,比如填45代表8个方向，90个代表4个方向的动画。与rotate_with_direction一起使用。",
            "key": "animation_direction_units",
            "name": "多向动画度数",
            "value_type": "float"
        },
        {
            "Section": {
                "key": "[graphics]",
                "name": "图像"
            },
            "comment": "效果和动画",
            "demo": "animation_direction_strideX:0",
            "description": "动画帧取值在X方向改变时偏移。一般填0",
            "key": "animation_direction_strideX",
            "name": "多向动画x向",
            "value_type": "int"
        },
        {
            "Section": {
                "key": "[graphics]",
                "name": "图像"
            },
            "comment": "效果和动画",
            "demo": "animation_direction_strideY:1",
            "description": "动画帧在方向改变Y轴偏移偏移。与frame_height一起使用。一般填1",
            "key": "animation_direction_strideY",
            "name": "多向动画y向",
            "value_type": "int"
        },
        {
            "Section": {
                "key": "[graphics]",
                "name": "图像"
            },
            "comment": "效果和动画",
            "demo": "animation_direction_starting:90",
            "description": "第一帧的方向，取决于你的素材。你要考虑转向后避免正负数交替现象，否则会导致素材朝向异常。",
            "key": "animation_direction_starting",
            "name": "多向动画朝向",
            "value_type": "float"
        },
        {
            "Section": {
                "key": "[graphics]",
                "name": "图像"
            },
            "comment": "效果和动画",
            "demo": "disableLowHpFire:true",
            "description": "禁用低生命值时冒火的视觉效果",
            "key": "disableLowHpFire",
            "name": "禁用低生命冒火",
            "value_type": "bool"
        },
        {
            "Section": {
                "key": "[graphics]",
                "name": "图像"
            },
            "comment": "效果和动画",
            "demo": "disableLowHpSmoke:true",
            "description": "禁用低生命值时冒烟的视觉效果",
            "key": "disableLowHpSmoke",
            "name": "禁用低生命冒烟",
            "value_type": "bool"
        },
        {
            "Section": {
                "key": "[graphics]",
                "name": "图像"
            },
            "comment": "效果和动画",
            "demo": "showTransportBar:false",
            "description": "填true时显示运输条,false禁用。默认为true.",
            "key": "showTransportBar",
            "name": "显示运输条",
            "value_type": "bool"
        },
        {
            "Section": {
                "key": "[graphics]",
                "name": "图像"
            },
            "comment": "效果和动画",
            "demo": "showHealthBar:false",
            "description": "填true时显示生命条,false禁用。默认为true.",
            "key": "showHealthBar",
            "name": "显示生命条",
            "value_type": "bool"
        },
        {
            "Section": {
                "key": "[graphics]",
                "name": "图像"
            },
            "comment": "效果和动画",
            "demo": "showEnergyBar:false",
            "description": "填true时显示能量条,false禁用。默认为true.",
            "key": "showEnergyBar",
            "name": "显示能量条",
            "value_type": "bool"
        },
        {
            "Section": {
                "key": "[graphics]",
                "name": "图像"
            },
            "comment": "效果和动画",
            "demo": "showShieldBar:false",
            "description": "填true时显示护盾条,false禁用。默认为true.",
            "key": "showShieldBar",
            "name": "显示护盾条",
            "value_type": "bool"
        },
        {
            "Section": {
                "key": "[graphics]",
                "name": "图像"
            },
            "comment": "效果和动画",
            "demo": "showQueueBar:false",
            "description": "填true时显示操作、生成的队列条,false禁用。默认为true.",
            "key": "showQueueBar",
            "name": "显示队列条",
            "value_type": "bool"
        },
        {
            "Section": {
                "key": "[graphics]",
                "name": "图像"
            },
            "comment": "LUKE不推荐使用的代码（可以使用，但是有更好的方法）",
            "demo": "animation_moving_start: 0",
            "description": "已弃用，请改用[animation]部分",
            "key": "animation_TYPE_start",
            "name": "动画_类型_开始",
            "value_type": "int"
        },
        {
            "Section": {
                "key": "[graphics]",
                "name": "图像"
            },
            "comment": "LUKE不推荐使用的代码（可以使用，但是有更好的方法）",
            "demo": "animation_moving_end: 3",
            "description": "结束帧，必须更大然后开始",
            "key": "animation_TYPE_end",
            "name": "动画_类型_结束:",
            "value_type": "int"
        },
        {
            "Section": {
                "key": "[graphics]",
                "name": "图像"
            },
            "comment": "LUKE不推荐使用的代码（可以使用，但是有更好的方法）",
            "demo": "animation_idle_scale_start:0.8",
            "description": "比例单位图像。默认值为1。适用于生物单位或呼吸效果。",
            "key": "animation_TYPE_scale_start",
            "name": "动画_类型_缩放开始:",
            "value_type": "float"
        },
        {
            "Section": {
                "key": "[graphics]",
                "name": "图像"
            },
            "comment": "LUKE不推荐使用的代码（可以使用，但是有更好的方法）",
            "demo": "animation_idle_scale_end:1.2",
            "description": "比例单位图像。默认值为1。适用于生物单位或呼吸效果。",
            "key": "animation_TYPE_scale_end",
            "name": "动画_类型_缩放结束:",
            "value_type": "float"
        },
        {
            "Section": {
                "key": "[graphics]",
                "name": "图像"
            },
            "comment": "LUKE不推荐使用的代码（可以使用，但是有更好的方法）",
            "demo": "animation_idle_speed:1",
            "description": "动画每一帧的延迟。较大的值会导致动画变慢",
            "key": "animation_TYPE_speed",
            "name": "动画_类型_速度:",
            "value_type": "float"
        },
        {
            "Section": {
                "key": "[graphics]",
                "name": "图像"
            },
            "comment": "LUKE不推荐使用的代码（可以使用，但是有更好的方法）",
            "demo": "animation_idle_pingPong:true",
            "description": "重复播放之前，请反向播放动画。与scale_start / scale_end一起使用",
            "key": "animation_TYPE_pingPong",
            "name": "动画_类型_膨胀:",
            "value_type": "bool"
        },
        {
            "Section": {
                "key": "[attack]",
                "name": "攻击"
            },
            "comment": null,
            "demo": "maxAttackRange:999",
            "description": "最大攻击距离。（会乘以globalScale，但不建议使用globalScale）",
            "key": "maxAttackRange",
            "name": "攻击距离",
            "value_type": "float"
        },
        {
            "Section": {
                "key": "[attack]",
                "name": "攻击"
            },
            "comment": null,
            "demo": "canAttack:true",
            "description": "如果设置为false，则不能攻击任何单位。其他canAttack选项将无效。",
            "key": "canAttack",
            "name": "可以攻击",
            "value_type": "bool"
        },
        {
            "Section": {
                "key": "[attack]",
                "name": "攻击"
            },
            "comment": null,
            "demo": "canAttackFlyingUnits:true",
            "description": "可以攻击空中单位，下面的攻击条件代码可于任意炮塔单独设置。",
            "key": "canAttackFlyingUnits",
            "name": "可攻击空中单位",
            "value_type": "logic"
        },
        {
            "Section": {
                "key": "[attack]",
                "name": "攻击"
            },
            "comment": null,
            "demo": "canAttackLandUnits:true",
            "description": "可以攻击表面单位（包括陆地和水面）",
            "key": "canAttackLandUnits",
            "name": "可攻击表面单位",
            "value_type": "logic"
        },
        {
            "Section": {
                "key": "[attack]",
                "name": "攻击"
            },
            "comment": null,
            "demo": "canAttackUnderwaterUnits:true",
            "description": "可以攻击水下单位",
            "key": "canAttackUnderwaterUnits",
            "name": "可攻击水下单位",
            "value_type": "logic"
        },
        {
            "Section": {
                "key": "[attack]",
                "name": "攻击"
            },
            "comment": null,
            "demo": "canAttackNotTouchingWaterUnits:true",
            "description": "可以攻击非接触水单位，默认为true。如果是false，则只能攻击与水接触的单位，不能攻击岸上。用于鱼雷逻辑。也可以根据炮塔需要设置。",
            "key": "canAttackNotTouchingWaterUnits",
            "name": "可以攻击非接触水单位",
            "value_type": "logic"
        },
        {
            "Section": {
                "key": "[attack]",
                "name": "攻击"
            },
            "comment": null,
            "demo": "canOnlyAttackUnitsWithTags:sp_spy",
            "description": "只能攻击带特定标签的单位",
            "key": "canOnlyAttackUnitsWithTags",
            "name": "只攻击带特定标签单位",
            "value_type": "string"
        },
        {
            "Section": {
                "key": "[attack]",
                "name": "攻击"
            },
            "comment": null,
            "demo": "canOnlyAttackUnitsWithoutTags:sp_tm",
            "description": "不能攻击带特定标签的单位",
            "key": "canOnlyAttackUnitsWithoutTags",
            "name": "不攻击带特定标签单位",
            "value_type": "string"
        },
        {
            "Section": {
                "key": "[attack]",
                "name": "攻击"
            },
            "comment": null,
            "demo": "setMainTurretAs:1",
            "description": "设置主炮塔，有些代码要锁定主炮塔，对其有用。",
            "key": "setMainTurretAs",
            "name": "设置主炮塔",
            "value_type": "turret ref"
        },
        {
            "Section": {
                "key": "[attack]",
                "name": "攻击"
            },
            "comment": null,
            "demo": "turretMultiTargeting:true",
            "description": "允许每个炮塔同时向不同的目标射击。如果使用[turretlimitingAngle(限制角度)非常有用",
            "key": "turretMultiTargeting",
            "name": "每个炮塔向不同目标射击",
            "value_type": "bool"
        },
        {
            "Section": {
                "key": "[attack]",
                "name": "攻击"
            },
            "comment": null,
            "demo": "isMelee:true",
            "description": "近战单位。与低攻击范围配合使用（例如maxAttackRange：9）可使自身和目标半径添加到范围内，并影响AI。",
            "key": "isMelee",
            "name": "近战",
            "value_type": "bool"
        },
        {
            "Section": {
                "key": "[attack]",
                "name": "攻击"
            },
            "comment": null,
            "demo": "meleeEngangementDistance:255",
            "description": "使部队游猎，自动移动以攻击附近的敌方部队。近战默认为250，非近战默认为0（即使非近战也可以使用。）",
            "key": "meleeEngangementDistance",
            "name": "近战索敌距离",
            "value_type": "int"
        },
        {
            "Section": {
                "key": "[attack]",
                "name": "攻击"
            },
            "comment": null,
            "demo": "turretRotateWithBody:true",
            "description": "炮塔随主体旋转。默认true",
            "key": "turretRotateWithBody",
            "name": "炮塔随主体旋转",
            "value_type": "bool"
        },
        {
            "Section": {
                "key": "[attack]",
                "name": "攻击"
            },
            "comment": null,
            "demo": "attackMovement:normal\r\nattackMovement:bomber",
            "description": "移动攻击类型。填normal/bomber。能量耗尽时，轰炸机攻击运动将后退。可填moveaway，strafing但无效。",
            "key": "attackMovement",
            "name": "攻击移动类型",
            "value_type": "string"
        },
        {
            "Section": {
                "key": "[attack]",
                "name": "攻击"
            },
            "comment": null,
            "demo": "dieOnAttack:true",
            "description": "攻击时自毁。",
            "key": "dieOnAttack",
            "name": "自杀攻击",
            "value_type": "bool"
        },
        {
            "Section": {
                "key": "[attack]",
                "name": "攻击"
            },
            "comment": null,
            "demo": "removeOnAttack:true",
            "description": "攻击时移除自身.",
            "key": "removeOnAttack",
            "name": "移除攻击",
            "value_type": "bool"
        },
        {
            "Section": {
                "key": "[attack]",
                "name": "攻击"
            },
            "comment": null,
            "demo": "isFixedFiring:true",
            "description": "必须将身体对准目标射击。通常会使得部队需要停下来才能瞄准和射击。比如火炮。",
            "key": "isFixedFiring",
            "name": "固定射击",
            "value_type": "bool"
        },
        {
            "Section": {
                "key": "[attack]",
                "name": "攻击"
            },
            "comment": null,
            "demo": "aimOffsetSpread:0",
            "description": "将每次攻击时的偏移量乘以目标半径。默认为0.6。设为0则不偏移，对范围武器影响较大。",
            "key": "aimOffsetSpread",
            "name": "瞄准偏移",
            "value_type": "bool"
        },
        {
            "Section": {
                "key": "[attack]",
                "name": "攻击"
            },
            "comment": null,
            "demo": "stopTargetingAfterFiring:true",
            "description": "单位射击后停止瞄准。很少使用或需要。如用于你不希望胡乱攻击浪费弹药的单位。",
            "key": "stopTargetingAfterFiring",
            "name": "自动停火",
            "value_type": "bool"
        },
        {
            "Section": {
                "key": "[attack]",
                "name": "攻击"
            },
            "comment": null,
            "demo": "disablePassiveTargetingg:true",
            "description": "单位只攻击手动选择的目标。很少使用或需要。如用于自爆卡车守家，如果自动攻击敌人就太蠢了。",
            "key": "disablePassiveTargeting",
            "name": "不能主动攻击",
            "value_type": "bool"
        },
        {
            "Section": {
                "key": "[attack]",
                "name": "攻击"
            },
            "comment": null,
            "demo": "showRangeUIGuide:false",
            "description": "显示攻击范围的白圈。默认true.",
            "key": "showRangeUIGuide",
            "name": "显示范围UI",
            "value_type": "bool"
        },
        {
            "Section": {
                "key": "[attack]",
                "name": "攻击"
            },
            "comment": null,
            "demo": "shootDelayMultiplier:1",
            "description": "默认为1。可以在setUnitStats动态改变",
            "key": "shootDelayMultiplier",
            "name": "开火间隔乘数",
            "value_type": "float"
        },
        {
            "Section": {
                "key": "[attack]",
                "name": "攻击"
            },
            "comment": null,
            "demo": "shootDamageMultiplier:1",
            "description": "默认为1。可以在setUnitStats动态改变",
            "key": "shootDamageMultiplier",
            "name": "开火伤害乘数",
            "value_type": "float"
        },
        {
            "Section": {
                "key": "[attack]",
                "name": "攻击"
            },
            "comment": null,
            "demo": "turretSize:10",
            "description": "设置所有炮塔大小。填数值，按像素计算，不决定素材大小，而是以此为半径的开火位置。",
            "key": "turretSize",
            "name": "炮塔大小",
            "value_type": "float"
        },
        {
            "Section": {
                "key": "[attack]",
                "name": "攻击"
            },
            "comment": null,
            "demo": "turretTurnSpeed:1",
            "description": "炮塔转速，单位是每帧旋转角度。",
            "key": "turretTurnSpeed",
            "name": "炮塔转速",
            "value_type": "float"
        },
        {
            "Section": {
                "key": "[attack]",
                "name": "攻击"
            },
            "comment": null,
            "demo": "shootDelay:233",
            "description": "开火间隔，也可以在每个转塔上使用延迟",
            "key": "shootDelay",
            "name": "攻击间隔",
            "value_type": "float"
        },
        {
            "Section": {
                "key": "[turret_NAME]",
                "name": "炮塔"
            },
            "comment": null,
            "demo": "x:10",
            "description": "坐标X",
            "key": "x",
            "name": "x:",
            "value_type": "float"
        },
        {
            "Section": {
                "key": "[turret_NAME]",
                "name": "炮塔"
            },
            "comment": null,
            "demo": "y:10",
            "description": "坐标Y",
            "key": "y",
            "name": "y:",
            "value_type": "float"
        },
        {
            "Section": {
                "key": "[turret_NAME]",
                "name": "炮塔"
            },
            "comment": null,
            "demo": "copyFrom: 1",
            "description": "复制指定炮塔的所有值，作为该炮塔的默认值。新写代码重复时则覆盖掉它。",
            "key": "copyFrom",
            "name": "复制数据自",
            "value_type": "turret ref"
        },
        {
            "Section": {
                "key": "[turret_NAME]",
                "name": "炮塔"
            },
            "comment": null,
            "demo": "projectile:torpedo",
            "description": "使用此抛射物。默认为第一个抛射物。",
            "key": "projectile",
            "name": "抛射物",
            "value_type": "projectile"
        },
        {
            "Section": {
                "key": "[turret_NAME]",
                "name": "炮塔"
            },
            "comment": null,
            "demo": "altProjectile:lowEnergy",
            "description": "当altProjectileCondition为true时，从此炮塔发射的抛射物。",
            "key": "altProjectile",
            "name": "关联抛射物",
            "value_type": "projectile"
        },
        {
            "Section": {
                "key": "[turret_NAME]",
                "name": "炮塔"
            },
            "comment": null,
            "demo": "altProjectileCondition:if not self.energy(full=true)",
            "description": "用于altProjectile",
            "key": "altProjectileCondition",
            "name": "关联抛射物条件",
            "value_type": "logic"
        },
        {
            "Section": {
                "key": "[turret_NAME]",
                "name": "炮塔"
            },
            "comment": null,
            "demo": "barrelX:0",
            "description": "默认值为0。控制抛射物生成的X轴位置。",
            "key": "barrelX",
            "name": "炮弹x",
            "value_type": "float"
        },
        {
            "Section": {
                "key": "[turret_NAME]",
                "name": "炮塔"
            },
            "comment": null,
            "demo": "barrelY:10",
            "description": "默认为大0。注意：size和barrelY含义相同",
            "key": "barrelY",
            "name": "炮弹y",
            "value_type": "float"
        },
        {
            "Section": {
                "key": "[turret_NAME]",
                "name": "炮塔"
            },
            "comment": null,
            "demo": "barrelHeight:10",
            "description": "高度（用于3d）。影响抛射物产生的高度。",
            "key": "barrelHeight",
            "name": "炮弹高度",
            "value_type": "float"
        },
        {
            "Section": {
                "key": "[turret_NAME]",
                "name": "炮塔"
            },
            "comment": null,
            "demo": "size: 5",
            "description": "控制炮塔中心与弹丸产生点之间的距离。",
            "key": "size",
            "name": "炮塔大小",
            "value_type": "float"
        },
        {
            "Section": {
                "key": "[turret_NAME]",
                "name": "炮塔"
            },
            "comment": null,
            "demo": "turnSpeed:5",
            "description": "炮塔最大转动速度。单位度每帧。",
            "key": "turnSpeed",
            "name": "炮塔转速",
            "value_type": "float"
        },
        {
            "Section": {
                "key": "[turret_NAME]",
                "name": "炮塔"
            },
            "comment": null,
            "demo": "turnSpeedAcceleration:1",
            "description": "炮塔加速度，默认设置为禁用，并使用全转速度。",
            "key": "turnSpeedAcceleration",
            "name": "炮塔旋转加速度",
            "value_type": "float"
        },
        {
            "Section": {
                "key": "[turret_NAME]",
                "name": "炮塔"
            },
            "comment": null,
            "demo": "turnSpeedDeceleration:1",
            "description": "默认为turnSpeedAcceleration。将此值设置为高于转弯加速度可能会允许更快地命中目标",
            "key": "turnSpeedDeceleration",
            "name": "炮塔旋转减速度",
            "value_type": "float"
        },
        {
            "Section": {
                "key": "[turret_NAME]",
                "name": "炮塔"
            },
            "comment": null,
            "demo": "idleDir:90",
            "description": "闲置时角度。",
            "key": "idleDir",
            "name": "闲时角度",
            "value_type": "float"
        },
        {
            "Section": {
                "key": "[turret_NAME]",
                "name": "炮塔"
            },
            "comment": null,
            "demo": "idleDirReversing:1",
            "description": "允许闲置时角度反转。除非连接到另一个炮塔（否则连接的炮塔在反转时通常会旋转），否则默认为idleDir + 180。如重坦逆行时炮塔转向。",
            "key": "idleDirReversing",
            "name": "闲时角度反转",
            "value_type": "float"
        },
        {
            "Section": {
                "key": "[turret_NAME]",
                "name": "炮塔"
            },
            "comment": null,
            "demo": "shouldResetTurret:false",
            "description": "默认为true。 填false时禁止炮塔自动归位。",
            "key": "shouldResetTurret",
            "name": "空闲自动归位",
            "value_type": "bool"
        },
        {
            "Section": {
                "key": "[turret_NAME]",
                "name": "炮塔"
            },
            "comment": null,
            "demo": "idleSweepAngle:45",
            "description": "炮塔闲时扫描角度。这一系列用于设置炮塔闲置时候转圈警戒动作。",
            "key": "idleSweepAngle",
            "name": "空闲扫描角度",
            "value_type": "int"
        },
        {
            "Section": {
                "key": "[turret_NAME]",
                "name": "炮塔"
            },
            "comment": null,
            "demo": "idleSweepDelay:120",
            "description": "炮塔闲时扫描间隔，多久动一次。",
            "key": "idleSweepDelay",
            "name": "空闲扫描延迟",
            "value_type": "float"
        },
        {
            "Section": {
                "key": "[turret_NAME]",
                "name": "炮塔"
            },
            "comment": null,
            "demo": "idleSweepSpeed:0.2",
            "description": "炮塔闲时扫描转向的速度。",
            "key": "idleSweepSpeed",
            "name": "空闲扫描速度",
            "value_type": "float"
        },
        {
            "Section": {
                "key": "[turret_NAME]",
                "name": "炮塔"
            },
            "comment": null,
            "demo": "idleSweepCondition:if not self.isMoving()",
            "description": "炮塔闲时扫描的条件，比如单位移动但没攻击时炮塔确实是闲置的，但这时可能不该旋转。",
            "key": "idleSweepCondition",
            "name": "空闲扫描条件",
            "value_type": "logic"
        },
        {
            "Section": {
                "key": "[turret_NAME]",
                "name": "炮塔"
            },
            "comment": null,
            "demo": "idleSweepAddRandomDelay:40",
            "description": "炮塔闲时扫描的随机延迟",
            "key": "idleSweepAddRandomDelay",
            "name": "空闲扫描随机延迟",
            "value_type": "float"
        },
        {
            "Section": {
                "key": "[turret_NAME]",
                "name": "炮塔"
            },
            "comment": null,
            "demo": "idleSweepAddRandomAngle:10",
            "description": "炮塔闲时扫描的随机角度",
            "key": "idleSweepAddRandomAngle",
            "name": "空闲扫描随机角度",
            "value_type": "int"
        },
        {
            "Section": {
                "key": "[turret_NAME]",
                "name": "炮塔"
            },
            "comment": null,
            "demo": "attachedTo:1",
            "description": "要连接的另一个炮塔的ID，将相对于它定位，并随其旋转。",
            "key": "attachedTo",
            "name": "链接到",
            "value_type": "turret ref"
        },
        {
            "Section": {
                "key": "[turret_NAME]",
                "name": "炮塔"
            },
            "comment": null,
            "demo": "slave:true",
            "description": "锁定此转塔的方向，并为附加的转塔发射冷却时间。常用于多炮管单位。",
            "key": "slave",
            "name": "隶属",
            "value_type": "bool"
        },
        {
            "Section": {
                "key": "[turret_NAME]",
                "name": "炮塔"
            },
            "comment": null,
            "demo": "isMainNanoTurret:true",
            "description": "默认为false。用于创建建筑物的炮塔。只能在一个炮塔上为true，并且canShoot设置为false。",
            "key": "isMainNanoTurret",
            "name": "是主构建炮塔",
            "value_type": "bool"
        },
        {
            "Section": {
                "key": "[turret_NAME]",
                "name": "炮塔"
            },
            "comment": null,
            "demo": "energyUsage:1",
            "description": "发射武器所需的能量。与resourceUsage相同：energy = X",
            "key": "energyUsage",
            "name": "能量需求",
            "value_type": "float"
        },
        {
            "Section": {
                "key": "[turret_NAME]",
                "name": "炮塔"
            },
            "comment": null,
            "demo": "resourceUsage: credits=5, energy=5, hp=100, shield=5, ammo=1",
            "description": "可以使用资金/能源/生命/护盾/弹药等。如果不符合条件则停止攻击。credits/energy/hp/shield/ammo",
            "key": "resourceUsage",
            "name": "资源需求",
            "value_type": "res ref"
        },
        {
            "Section": {
                "key": "[turret_NAME]",
                "name": "炮塔"
            },
            "comment": "计时",
            "demo": "delay:60",
            "description": "设置攻击间隔，覆盖全局炮塔间隔数据。",
            "key": "delay",
            "name": "开火间隔",
            "value_type": "float"
        },
        {
            "Section": {
                "key": "[turret_NAME]",
                "name": "炮塔"
            },
            "comment": "计时",
            "demo": "linkDelayWithTurret:1",
            "description": "当另一炮塔开火时，该炮塔上的冷却延迟将被重置/删除",
            "key": "linkDelayWithTurret",
            "name": "链接间隔",
            "value_type": "turret ref"
        },
        {
            "Section": {
                "key": "[turret_NAME]",
                "name": "炮塔"
            },
            "comment": "计时",
            "demo": "warmup:10",
            "description": "射击前延迟。需要准备多长时间才能攻击，可以制作出蓄力效果。",
            "key": "warmup",
            "name": "预热",
            "value_type": "float"
        },
        {
            "Section": {
                "key": "[turret_NAME]",
                "name": "炮塔"
            },
            "comment": "计时",
            "demo": "warmupCallDownRate:0.6",
            "description": "停止攻击后预热条下降速度",
            "key": "warmupCallDownRate",
            "name": "预热下降速度",
            "value_type": "float"
        },
        {
            "Section": {
                "key": "[turret_NAME]",
                "name": "炮塔"
            },
            "comment": "计时",
            "demo": "warmupNoReset:true",
            "description": "默认为false。射击后未重设真正的预热时。与warmupCallDownRate一起使用",
            "key": "warmupNoReset",
            "name": "预热不重置",
            "value_type": "bool"
        },
        {
            "Section": {
                "key": "[turret_NAME]",
                "name": "炮塔"
            },
            "comment": "计时",
            "demo": "warmupShootDelayTransfer:17",
            "description": "默认值为0，这是一个乘数，用于通过预热值减少下一次开火延迟。与warmupNoReset一起使用时，可以使攻击速度越来越快。",
            "key": "warmupShootDelayTransfer",
            "name": "开火间隔过渡",
            "value_type": "float"
        },
        {
            "Section": {
                "key": "[turret_NAME]",
                "name": "炮塔"
            },
            "comment": "射击时",
            "demo": "onShoot_freezeBodyMovementFor:true",
            "description": "射击时禁止运动。",
            "key": "onShoot_freezeBodyMovementFor",
            "name": "射击时冻结主体",
            "value_type": "bool"
        },
        {
            "Section": {
                "key": "[turret_NAME]",
                "name": "炮塔"
            },
            "comment": "射击时",
            "demo": null,
            "description": "默认0。在奇数射击时横向偏移，用于简化双管单位制作。",
            "key": "barrelOffsetX_onOddShots",
            "name": "奇数射击时炮弹偏移",
            "value_type": "float"
        },
        {
            "Section": {
                "key": "[turret_NAME]",
                "name": "炮塔"
            },
            "comment": "定位控制",
            "demo": "canShoot:true",
            "description": "可以开火，默认为true",
            "key": "canShoot",
            "name": "可以开火",
            "value_type": "bool"
        },
        {
            "Section": {
                "key": "[turret_NAME]",
                "name": "炮塔"
            },
            "comment": "定位控制",
            "demo": "canAttackFlyingUnits:true",
            "description": "可以攻击空中单位，覆盖[attack]的设定。",
            "key": "canAttackFlyingUnits",
            "name": "可攻击空中单位",
            "value_type": "logic"
        },
        {
            "Section": {
                "key": "[turret_NAME]",
                "name": "炮塔"
            },
            "comment": "定位控制",
            "demo": "canAttackCondition: if not self.flying",
            "description": "攻击需要满足条件。",
            "key": "canAttackCondition",
            "name": "攻击条件",
            "value_type": "logic"
        },
        {
            "Section": {
                "key": "[turret_NAME]",
                "name": "炮塔"
            },
            "comment": "定位控制",
            "demo": "clearTurretTargetAfterFiring:true",
            "description": "射击后重置炮塔目标。",
            "key": "clearTurretTargetAfterFiring",
            "name": "射击后重置炮塔目标",
            "value_type": "bool"
        },
        {
            "Section": {
                "key": "[turret_NAME]",
                "name": "炮塔"
            },
            "comment": "定位控制",
            "demo": "limitingRange:150",
            "description": "限制此炮塔的最远攻击范围。不要将此代码应用到所有炮塔，如果需要则设置maxAttackRange。",
            "key": "limitingRange",
            "name": "限制范围",
            "value_type": "float"
        },
        {
            "Section": {
                "key": "[turret_NAME]",
                "name": "炮塔"
            },
            "comment": "定位控制",
            "demo": "limitingAngle:60",
            "description": "与idleDir配合。炮塔只能以+/-此角度进行攻击。",
            "key": "limitingAngle",
            "name": "限制角度",
            "value_type": "float"
        },
        {
            "Section": {
                "key": "[turret_NAME]",
                "name": "炮塔"
            },
            "comment": "定位控制",
            "demo": "limitingMinRange: 60",
            "description": "设置炮塔的最小攻击范围，不能攻击此范围内单位，也就是死角。",
            "key": "limitingMinRange",
            "name": "最小距离",
            "value_type": "float"
        },
        {
            "Section": {
                "key": "[turret_NAME]",
                "name": "炮塔"
            },
            "comment": "定位控制",
            "demo": "canAttackMaxAngle:90",
            "description": "设置炮塔的最大射击角度。如果单位在可攻击角度外则不会开火。默认值为5，不要设置得更低。可以设置为181炮塔，即不需要转向就可发射炮弹。",
            "key": "canAttackMaxAngle",
            "name": "可攻击最大角度",
            "value_type": "float"
        },
        {
            "Section": {
                "key": "[turret_NAME]",
                "name": "炮塔"
            },
            "comment": "定位控制",
            "demo": "interceptProjectiles_withTags: nuke",
            "description": "拦截具有此标签的抛射物，目前铁锈用于反核武器。",
            "key": "interceptProjectiles_withTags",
            "name": "拦截抛射物需有标签",
            "value_type": "string"
        },
        {
            "Section": {
                "key": "[turret_NAME]",
                "name": "炮塔"
            },
            "comment": "定位控制",
            "demo": "interceptProjectiles_andTargetingGroundUnderDistance: 500",
            "description": "守护的范围，只有当敌方攻击目标地点落在此圈子内时才考虑拦截。",
            "key": "interceptProjectiles_andTargetingGroundUnderDistance",
            "name": "拦截抛射物检索范围",
            "value_type": "int"
        },
        {
            "Section": {
                "key": "[turret_NAME]",
                "name": "炮塔"
            },
            "comment": "定位控制",
            "demo": "interceptProjectiles_andUnderDistance: 1600",
            "description": "默认值为2000，当抛射物到达这个距离时才开始发射拦截。",
            "key": "interceptProjectiles_andUnderDistance",
            "name": "拦截抛射物攻击范围",
            "value_type": "int"
        },
        {
            "Section": {
                "key": "[turret_NAME]",
                "name": "炮塔"
            },
            "comment": "定位控制",
            "demo": "interceptProjectiles_andOverHeight:50",
            "description": "需要超过此高度才会拦截。默认值为0.",
            "key": "interceptProjectiles_andOverHeight",
            "name": "拦截抛射物高度",
            "value_type": "int"
        },
        {
            "Section": {
                "key": "[turret_NAME]",
                "name": "炮塔"
            },
            "comment": "定位控制",
            "demo": "interceptProjectile_removeTargetLifeOnly:false",
            "description": "默认值为false，当为false时射弹移除。true时使被击中的抛射物爆炸或分裂。用于设定命中抛射物时是否执行分裂逻辑。",
            "key": "interceptProjectile_removeTargetLifeOnly",
            "name": "拦截抛射物移除目标存活时间",
            "value_type": "bool"
        },
        {
            "Section": {
                "key": "[turret_NAME]",
                "name": "炮塔"
            },
            "comment": "定位控制",
            "demo": "laserDefenceEnergyUse:1",
            "description": "炮塔启用激光防御拦截敌方抛射物。还应在core中设置energyMax。",
            "key": "laserDefenceEnergyUse",
            "name": "激光防御能量需求",
            "value_type": "float"
        },
        {
            "Section": {
                "key": "[turret_NAME]",
                "name": "炮塔"
            },
            "comment": "图形和效果",
            "demo": "invisible:true",
            "description": "即不显示炮塔本身图像，但是攻击什么的还是可以。",
            "key": "invisible",
            "name": "隐藏炮塔图像",
            "value_type": "logic"
        },
        {
            "Section": {
                "key": "[turret_NAME]",
                "name": "炮塔"
            },
            "comment": "图形和效果",
            "demo": "image:shibaingtooth.png",
            "description": "使用自定义图片。覆盖单位的主炮塔图像",
            "key": "image",
            "name": "图像",
            "value_type": "image"
        },
        {
            "Section": {
                "key": "[turret_NAME]",
                "name": "炮塔"
            },
            "comment": "图形和效果",
            "demo": "image_applyTeamColors",
            "description": "炮塔图像使用队伍颜色。默认为false。",
            "key": "image_applyTeamColors",
            "name": "图像应用队伍颜色",
            "value_type": "bool"
        },
        {
            "Section": {
                "key": "[turret_NAME]",
                "name": "炮塔"
            },
            "comment": "图形和效果",
            "demo": "image_drawOffsetX",
            "description": "炮塔图像在X轴偏移。",
            "key": "image_drawOffsetX",
            "name": "图像绘制偏移x",
            "value_type": "float"
        },
        {
            "Section": {
                "key": "[turret_NAME]",
                "name": "炮塔"
            },
            "comment": "图形和效果",
            "demo": "image_drawOffsetY",
            "description": "炮塔图像在Y轴偏移。",
            "key": "image_drawOffsetY",
            "name": "图像绘制偏移y",
            "value_type": "float"
        },
        {
            "Section": {
                "key": "[turret_NAME]",
                "name": "炮塔"
            },
            "comment": "图形和效果",
            "demo": "chargeEffectImage:\r\n",
            "description": "预热时的充能效果。默认是由小变大。",
            "key": "chargeEffectImage",
            "name": "充能效果图像",
            "value_type": "image"
        },
        {
            "Section": {
                "key": "[turret_NAME]",
                "name": "炮塔"
            },
            "comment": "图形和效果",
            "demo": "warmupStartEffect",
            "description": "开火延迟时产生效果。",
            "key": "warmupStartEffect",
            "name": "预热效果",
            "value_type": "effect"
        },
        {
            "Section": {
                "key": "[turret_NAME]",
                "name": "炮塔"
            },
            "comment": "图形和效果",
            "demo": "shoot_sound:move:0.5",
            "description": "开火音效，填声音文件。有以下内置条目。attack、move、click、missile_fire、missile_hit、unit_explode、buiding_explode、\r\ntank_firing、cannon_firing、gun_fire、lighting_burst、plasma_fire、plasma_fire2、firing3、firing4、large_gun_fire1、\r\nlarge_gun_fire2、bug_die、bug_attack、interface_error、nuke_explode、nuke_launch、laser_deflect、laser_deflect2",
            "key": "shoot_sound",
            "name": "开火音效",
            "value_type": "string"
        },
        {
            "Section": {
                "key": "[turret_NAME]",
                "name": "炮塔"
            },
            "comment": "图形和效果",
            "demo": "shoot_sound_vol:",
            "description": "播放声音大小。",
            "key": "shoot_sound_vol",
            "name": "开火音效大小",
            "value_type": "float"
        },
        {
            "Section": {
                "key": "[turret_NAME]",
                "name": "炮塔"
            },
            "comment": "图形和效果",
            "demo": "shoot_flame: smoke\r\nshoot_flame: CUSTOM:lightFade",
            "description": "开火动画，内置参考表末尾。Luke推荐为：small, large, smoke, shockwave。可以自定义。",
            "key": "shoot_flame",
            "name": "开火动画",
            "value_type": "effect"
        },
        {
            "Section": {
                "key": "[turret_NAME]",
                "name": "炮塔"
            },
            "comment": "图形和效果",
            "demo": "shoot_light:#afafaf",
            "description": "开火时闪光，16进制argb格式。#AARRGGBB,透明度，红，绿，蓝",
            "key": "shoot_light",
            "name": "开火闪光",
            "value_type": "color"
        },
        {
            "Section": {
                "key": "[turret_NAME]",
                "name": "炮塔"
            },
            "comment": "图形和效果",
            "demo": "idleSpin:2",
            "description": "炮塔闲置时的旋转速度,单位度每帧。",
            "key": "idleSpin",
            "name": "闲时转速",
            "value_type": "float"
        },
        {
            "Section": {
                "key": "[turret_NAME]",
                "name": "炮塔"
            },
            "comment": "图形和效果",
            "demo": "onShoot_playAnimation:animation_1",
            "description": "开火后播放[Animation]中的自定义动画",
            "key": "onShoot_playAnimation",
            "name": "开火播放动画",
            "value_type": "string"
        },
        {
            "Section": {
                "key": "[turret_NAME]",
                "name": "炮塔"
            },
            "comment": "图形和效果",
            "demo": "onShoot_freezeBodyMovementFor",
            "description": "开火时冻结单位主体运动。",
            "key": "onShoot_freezeBodyMovementFor",
            "name": "开火冻结移动",
            "value_type": "bool"
        },
        {
            "Section": {
                "key": "[turret_NAME]",
                "name": "炮塔"
            },
            "comment": "图形和效果",
            "demo": "onShoot_triggerActions:foxsay",
            "description": "每次这个炮塔开火时触发这些动作",
            "key": "onShoot_triggerActions",
            "name": "开火触发行为",
            "value_type": "action"
        },
        {
            "Section": {
                "key": "[turret_NAME]",
                "name": "炮塔"
            },
            "comment": "图形和效果",
            "demo": "unloadUpToXUnitsAndGiveAttackOrder:5",
            "description": "在炮塔炮筒位置卸下X个单位，并让它们攻击炮塔指定的目标。",
            "key": "unloadUpToXUnitsAndGiveAttackOrder",
            "name": "卸载单位并赋予攻击目标",
            "value_type": "int"
        },
        {
            "Section": {
                "key": "[turret_NAME]",
                "name": "炮塔"
            },
            "comment": "图形和效果",
            "demo": "recoilOffset:-10",
            "description": "开火后向前或向后推动炮塔，以产生后坐力。填像素。",
            "key": "recoilOffset",
            "name": "后坐力大小",
            "value_type": "float"
        },
        {
            "Section": {
                "key": "[turret_NAME]",
                "name": "炮塔"
            },
            "comment": "图形和效果",
            "demo": "recoilOutTime:2",
            "description": "开火后到达偏移位置的时间",
            "key": "recoilOutTime",
            "name": "后坐力速度",
            "value_type": "float"
        },
        {
            "Section": {
                "key": "[turret_NAME]",
                "name": "炮塔"
            },
            "comment": "图形和效果",
            "demo": "recoilReturnTime:15",
            "description": "开火后回到默认位置所需时间。",
            "key": "recoilReturnTime",
            "name": "后坐力恢复",
            "value_type": "float"
        },
        {
            "Section": {
                "key": "[turret_NAME]",
                "name": "炮塔"
            },
            "comment": "图形和效果",
            "demo": "yAxisScaling:0.5",
            "description": "多用于用于2.5D效果，也就是伪3D。",
            "key": "yAxisScaling",
            "name": "Y轴缩放比例",
            "value_type": "float"
        },
        {
            "Section": {
                "key": "[projectile_NAME]",
                "name": "抛射物"
            },
            "comment": null,
            "demo": "life:120",
            "description": "开火后炮弹在没命中时的存活时间，单位为帧。60为1s。多少合适取决于速度与射程。",
            "key": "life",
            "name": "存在时间",
            "value_type": "int"
        },
        {
            "Section": {
                "key": "[projectile_NAME]",
                "name": "抛射物"
            },
            "comment": null,
            "demo": "deflectionPower:-1",
            "description": "默认值为1。此抛射物被激光防御摧毁所需的能量。 -1为禁止拦截。（对特殊武器如火焰）",
            "key": "deflectionPower",
            "name": "激光拦截耗能",
            "value_type": "float"
        },
        {
            "Section": {
                "key": "[projectile_NAME]",
                "name": "抛射物"
            },
            "comment": null,
            "demo": "explodeOnEndOfLife:true",
            "description": "默认为false。True则会在寿命终结时爆炸，并产生其命中时该有的效果。而不是直接消失。",
            "key": "explodeOnEndOfLife",
            "name": "寿终爆炸",
            "value_type": "bool"
        },
        {
            "Section": {
                "key": "[projectile_NAME]",
                "name": "抛射物"
            },
            "comment": null,
            "demo": "autoTargetingOnDeadTarget:true",
            "description": "如果目标死亡则自动切换单位。填true时如果有代码\"targetGround:true\"炮弹将会追踪距离它最近的单位。如果没有\"targetGround\"时将会在单位死亡后再改变目标。",
            "key": "autoTargetingOnDeadTarget",
            "name": "自动切换目标",
            "value_type": "bool"
        },
        {
            "Section": {
                "key": "[projectile_NAME]",
                "name": "抛射物"
            },
            "comment": null,
            "demo": "autoTargetingOnDeadTargetRange:45",
            "description": "当旧目标死亡时选择新目标的范围",
            "key": "autoTargetingOnDeadTargetRange",
            "name": "自动切换目标检索范围",
            "value_type": "int"
        },
        {
            "Section": {
                "key": "[projectile_NAME]",
                "name": "抛射物"
            },
            "comment": null,
            "demo": "autoTargetingOnDeadTargetLead:1",
            "description": "尝试新的目标时的预判",
            "key": "autoTargetingOnDeadTargetLead",
            "name": "自动切换目标预判",
            "value_type": "float"
        },
        {
            "Section": {
                "key": "[projectile_NAME]",
                "name": "抛射物"
            },
            "comment": null,
            "demo": "unloadUpToXUnitsFromSource:1",
            "description": "将指定个数单位卸载到抛射物爆炸位置。",
            "key": "unloadUpToXUnitsFromSource",
            "name": "卸载单位至命中地",
            "value_type": "int"
        },
        {
            "Section": {
                "key": "[projectile_NAME]",
                "name": "抛射物"
            },
            "comment": null,
            "demo": "teleportSource:true",
            "description": "将单位移动到抛射物爆炸的位置，用于传送自身。",
            "key": "teleportSource",
            "name": "传送",
            "value_type": "bool"
        },
        {
            "Section": {
                "key": "[projectile_NAME]",
                "name": "抛射物"
            },
            "comment": null,
            "demo": "spawnUnit:heavyTank,tank*5,hoverTank(offsetX=10)",
            "description": "在弹丸爆炸位置产生这种单位",
            "key": "spawnUnit",
            "name": "产生单位",
            "value_type": "string"
        },
        {
            "Section": {
                "key": "[projectile_NAME]",
                "name": "抛射物"
            },
            "comment": null,
            "demo": "convertHitToSourceTeam:true",
            "description": "将更改被命中的单位转换队伍为自身所属。",
            "key": "convertHitToSourceTeam",
            "name": "命中时更改所属",
            "value_type": "bool"
        },
        {
            "Section": {
                "key": "[projectile_NAME]",
                "name": "抛射物"
            },
            "comment": null,
            "demo": "tags:nuke",
            "description": "用于抛射物拦截功能。",
            "key": "tags",
            "name": "标签",
            "value_type": "string"
        },
        {
            "Section": {
                "key": "[projectile_NAME]",
                "name": "抛射物"
            },
            "comment": null,
            "demo": "flameWeapon:true",
            "description": "命中时产生小火焰（仅用于装饰）",
            "key": "flameWeapon",
            "name": "火焰武器",
            "value_type": "bool"
        },
        {
            "Section": {
                "key": "[projectile_NAME]",
                "name": "抛射物"
            },
            "comment": null,
            "demo": "spawnProjectilesOnEndOfLife:torpedo_split(offsetDir=90),torpedo_split(offsetDir=-90)",
            "description": "填抛射物名。在寿命(life)结束时刷抛射物。刷抛射物逻辑具体参数参考后面刷抛射物大项。这简化了过去许多需要多炮塔(如贯穿攻击)或是刷辅助单位才能实现的操作。",
            "key": "spawnProjectilesOnEndOfLife",
            "name": "在寿命结束时刷抛射物",
            "value_type": "projectile"
        },
        {
            "Section": {
                "key": "[projectile_NAME]",
                "name": "抛射物"
            },
            "comment": null,
            "demo": "spawnProjectilesOnExplode:shiba(offsetDir=60,recursionLimit=6)",
            "description": "填抛射物名。只在爆炸时刷抛射物，如果耗光life则不会刷。",
            "key": "spawnProjectilesOnExplode",
            "name": "在爆炸时刷抛射物",
            "value_type": "projectile"
        },
        {
            "Section": {
                "key": "[projectile_NAME]",
                "name": "抛射物"
            },
            "comment": null,
            "demo": "spawnProjectilesOnCreate:1.5,2,3,4,5",
            "description": "填抛射物名。抛射物创建时刷抛射物。",
            "key": "spawnProjectilesOnCreate",
            "name": "在创建时刷抛射物",
            "value_type": "projectile"
        },
        {
            "Section": {
                "key": "[projectile_NAME]",
                "name": "抛射物"
            },
            "comment": null,
            "demo": "directDamage:999",
            "description": "击中对目标单位造成伤害。不适用于targetGround:true。",
            "key": "directDamage",
            "name": "直接伤害",
            "value_type": "int"
        },
        {
            "Section": {
                "key": "[projectile_NAME]",
                "name": "抛射物"
            },
            "comment": null,
            "demo": "areaDamage:99",
            "description": "范围伤害值，此区域内敌方单位都将受到损伤，默认向边缘递减。",
            "key": "areaDamage",
            "name": "范围伤害",
            "value_type": "int"
        },
        {
            "Section": {
                "key": "[projectile_NAME]",
                "name": "抛射物"
            },
            "comment": null,
            "demo": "areaRadius:99",
            "description": "范围伤害区域大小，此区域内敌方单位都将受到损伤，默认向边缘递减。数值类型为像素，大小算法为半径，铁锈内地块一格长为20像素。",
            "key": "areaRadius",
            "name": "范围半径",
            "value_type": "float"
        },
        {
            "Section": {
                "key": "[projectile_NAME]",
                "name": "抛射物"
            },
            "comment": null,
            "demo": "areaDamageNoFalloff:true",
            "description": "默认false.为true时范围伤害不再向边缘递减。",
            "key": "areaDamageNoFalloff",
            "name": "范围伤害不衰减",
            "value_type": "bool"
        },
        {
            "Section": {
                "key": "[projectile_NAME]",
                "name": "抛射物"
            },
            "comment": null,
            "demo": "areaRadiusFromEdge:true",
            "description": "范围伤害将从单位的边缘计算，而不是默认的中心计算。主要用于攻击大型单位。",
            "key": "areaRadiusFromEdge",
            "name": "范围伤害从边缘计算",
            "value_type": "bool"
        },
        {
            "Section": {
                "key": "[projectile_NAME]",
                "name": "抛射物"
            },
            "comment": null,
            "demo": "areaExpandTime:15",
            "description": "将区域伤害变为爆炸波向边缘扩散。效果如核弹。",
            "key": "areaExpandTime",
            "name": "范围扩展时间",
            "value_type": "float"
        },
        {
            "Section": {
                "key": "[projectile_NAME]",
                "name": "抛射物"
            },
            "comment": null,
            "demo": "areaHitAirAndLandAtSameTime:true",
            "description": "范围武器将同时打击空中和地面。",
            "key": "areaHitAirAndLandAtSameTime",
            "name": "范围武器同时攻击空中和地面",
            "value_type": "bool"
        },
        {
            "Section": {
                "key": "[projectile_NAME]",
                "name": "抛射物"
            },
            "comment": null,
            "demo": "areaHitUnderwaterAlways:true",
            "description": "范围武器将可以打击深海单位如潜艇。",
            "key": "areaHitUnderwaterAlways",
            "name": "范围武器可攻击深海",
            "value_type": "bool"
        },
        {
            "Section": {
                "key": "[projectile_NAME]",
                "name": "抛射物"
            },
            "comment": null,
            "demo": "areaIgnoreUnitsCloserThan:20",
            "description": "小于此范围的单位不会受到攻击影响。需要比areaRadius小，否则造不成伤害。",
            "key": "areaIgnoreUnitsCloserThan",
            "name": "范围伤害忽略区域",
            "value_type": "int"
        },
        {
            "Section": {
                "key": "[projectile_NAME]",
                "name": "抛射物"
            },
            "comment": null,
            "demo": "buildingDamageMultiplier:0.5",
            "description": "默认为1。对建筑物伤害乘上此数值，用于伤害修正。比如闪电对建筑物伤害低，火焰对建筑物伤害高。",
            "key": "buildingDamageMultiplier",
            "name": "建筑伤害乘数",
            "value_type": "float"
        },
        {
            "Section": {
                "key": "[projectile_NAME]",
                "name": "抛射物"
            },
            "comment": null,
            "demo": "shieldDamageMultiplier:2",
            "description": "默认为1。对护盾伤害乘数。如0对护盾不造成伤害，2对护盾造成双倍伤害",
            "key": "shieldDamageMultiplier",
            "name": "护盾伤害乘数",
            "value_type": "float"
        },
        {
            "Section": {
                "key": "[projectile_NAME]",
                "name": "抛射物"
            },
            "comment": null,
            "demo": "shieldDefectionMultiplier:0",
            "description": "护盾阻挡乘数，填0则可无视护盾，同时对单位和盾造成伤害。",
            "key": "shieldDefectionMultiplier",
            "name": "护盾阻挡乘数",
            "value_type": "float"
        },
        {
            "Section": {
                "key": "[projectile_NAME]",
                "name": "抛射物"
            },
            "comment": null,
            "demo": "hullDamageMultiplier:0",
            "description": "可以用来制造只影响护盾的电磁脉冲武器。0忽略单位，只伤害护盾",
            "key": "hullDamageMultiplier",
            "name": "护盾损伤乘数",
            "value_type": "float"
        },
        {
            "Section": {
                "key": "[projectile_NAME]",
                "name": "抛射物"
            },
            "comment": null,
            "demo": "ignoreParentShootDamageMultiplier:true",
            "description": "是否忽略父单位射击伤害乘数",
            "key": "ignoreParentShootDamageMultiplier",
            "name": "忽略父单位射击伤害乘数",
            "value_type": "bool"
        },
        {
            "Section": {
                "key": "[projectile_NAME]",
                "name": "抛射物"
            },
            "comment": null,
            "demo": "armourIgnoreAmount:10",
            "description": "无视目标装甲数量并造成伤害。",
            "key": "armourIgnoreAmount",
            "name": "无视装甲数量",
            "value_type": "int"
        },
        {
            "Section": {
                "key": "[projectile_NAME]",
                "name": "抛射物"
            },
            "comment": null,
            "demo": "friendlyFire: false/true/only-ignoreEnemy",
            "description": "范围武器有友伤，可以伤害自己单位。\r\n铁锈限制不能对盟友有伤害。\r\n负数友伤可以用于范围维修，\r\n如果修盟友则需要用中立单位实现。\r\n参数false true only-ignoreEnemy",
            "key": "friendlyFire",
            "name": "友伤",
            "value_type": "bool"
        },
        {
            "Section": {
                "key": "[projectile_NAME]",
                "name": "抛射物"
            },
            "comment": null,
            "demo": "mutator1_ifUnitWithTags: infantry",
            "description": "伤害修正所需标签，仅对携带标签单位有效。否则为原始伤害。",
            "key": "mutatorX_ifUnitWithTags",
            "name": "修正需要标签",
            "value_type": "float"
        },
        {
            "Section": {
                "key": "[projectile_NAME]",
                "name": "抛射物"
            },
            "comment": null,
            "demo": "mutator1_ifUnitWithoutTags: strongArmour",
            "description": "伤害修正除此标签外有效。",
            "key": "mutatorX_ifUnitWithoutTags",
            "name": "修正除此标签",
            "value_type": "float"
        },
        {
            "Section": {
                "key": "[projectile_NAME]",
                "name": "抛射物"
            },
            "comment": null,
            "demo": "mutator1_directDamageMultiplier:2",
            "description": "伤害修正,直接伤害(directDamage)乘数。比如直接伤害100，这里填2，对目标就造成200伤害。",
            "key": "mutatorX_directDamageMultiplier",
            "name": "修正直接伤害",
            "value_type": "float"
        },
        {
            "Section": {
                "key": "[projectile_NAME]",
                "name": "抛射物"
            },
            "comment": null,
            "demo": "mutator1_areaDamageMultiplier:0.5",
            "description": "伤害修正,范围伤害(areaDamage)乘数。比如直接伤害100，这里填2，对目标就造成200伤害。",
            "key": "mutatorX_areaDamageMultiplier",
            "name": "修正范围伤害",
            "value_type": "float"
        },
        {
            "Section": {
                "key": "[projectile_NAME]",
                "name": "抛射物"
            },
            "comment": null,
            "demo": "mutator1_changedExplodeEffect:custom:small",
            "description": "如果此修正处于有效状态，则更改爆炸效果。",
            "key": "mutatorX_changedExplodeEffect",
            "name": "修正命中效果",
            "value_type": "effect"
        },
        {
            "Section": {
                "key": "[projectile_NAME]",
                "name": "抛射物"
            },
            "comment": null,
            "demo": "mutatorX_addResourcesDirectHit:shibaMove=1",
            "description": "伤害修正,用于直接伤害(directDamage)，给目标添加指定资源。用途如给目标资源后，目标检测自身资源然后禁止移动。",
            "key": "mutatorX_addResourcesDirectHit",
            "name": "修正直接添加资源",
            "value_type": "res ref"
        },
        {
            "Section": {
                "key": "[projectile_NAME]",
                "name": "抛射物"
            },
            "comment": null,
            "demo": "mutatorX_addResourcesAreaHit:shibaMove=1",
            "description": "伤害修正,用于范+C393围伤害(areaDamage)，给目标添加指定资源。",
            "key": "mutatorX_addResourcesAreaHit",
            "name": "修正区域添加资源",
            "value_type": "res ref"
        },
        {
            "Section": {
                "key": "[projectile_NAME]",
                "name": "抛射物"
            },
            "comment": null,
            "demo": "targetGround:true",
            "description": "抛射物瞄准并攻击目标所在的地面，而不是追踪目标。直接伤害(directDamage)将会失效，需要使用areaDamage和areaRadius。",
            "key": "targetGround",
            "name": "目标为地面",
            "value_type": "bool"
        },
        {
            "Section": {
                "key": "[projectile_NAME]",
                "name": "抛射物"
            },
            "comment": null,
            "demo": "targetGround_includeTargetHeight",
            "description": "区域影响AA武器",
            "key": "targetGround_includeTargetHeight",
            "name": "目标为地面包括目标高度",
            "value_type": "float"
        },
        {
            "Section": {
                "key": "[projectile_NAME]",
                "name": "抛射物"
            },
            "comment": null,
            "demo": "targetGroundHeightOffset:10",
            "description": "在目标上方或下方射击。可能对分裂和落下的炮弹有用。",
            "key": "targetGroundHeightOffset",
            "name": "目标为地面高度偏移",
            "value_type": "float"
        },
        {
            "Section": {
                "key": "[projectile_NAME]",
                "name": "抛射物"
            },
            "comment": null,
            "demo": "speed:2",
            "description": "抛射物飞行速度，单位是每帧飞行像素。铁锈地块1格20像素，填1则每秒飞行3格。",
            "key": "speed",
            "name": "速度",
            "value_type": "float"
        },
        {
            "Section": {
                "key": "[projectile_NAME]",
                "name": "抛射物"
            },
            "comment": null,
            "demo": "targetSpeed:8",
            "description": "加速到这个速度",
            "key": "targetSpeed",
            "name": "到达速度",
            "value_type": "float"
        },
        {
            "Section": {
                "key": "[projectile_NAME]",
                "name": "抛射物"
            },
            "comment": null,
            "demo": "targetSpeedAcceleration:1",
            "description": "加速度，控制targetSpeed的速度提升",
            "key": "targetSpeedAcceleration",
            "name": "加速度",
            "value_type": "float"
        },
        {
            "Section": {
                "key": "[projectile_NAME]",
                "name": "抛射物"
            },
            "comment": null,
            "demo": "ballistic:true",
            "description": "弹道导弹效果，使抛射物先飞向空中并向下飞，而不是走直线。",
            "key": "ballistic",
            "name": "弹道",
            "value_type": "bool"
        },
        {
            "Section": {
                "key": "[projectile_NAME]",
                "name": "抛射物"
            },
            "comment": null,
            "demo": "ballistic_delaymove_height:1",
            "description": "弹道导弹发射初期效果，决定弹道一开始先升高多少，再斜向爬升到最高过度。",
            "key": "ballistic_delaymove_height",
            "name": "弹道垂直飞行高度",
            "value_type": "float"
        },
        {
            "Section": {
                "key": "[projectile_NAME]",
                "name": "抛射物"
            },
            "comment": null,
            "demo": "ballistic_height:15",
            "description": "弹道最终高度。",
            "key": "ballistic_height",
            "name": "弹道高度",
            "value_type": "float"
        },
        {
            "Section": {
                "key": "[projectile_NAME]",
                "name": "抛射物"
            },
            "comment": null,
            "demo": "targetGroundSpread:15",
            "description": "填数值，用于目标为地面时随机造成偏差效果",
            "key": "targetGroundSpread",
            "name": "目标为地面散布",
            "value_type": "float"
        },
        {
            "Section": {
                "key": "[projectile_NAME]",
                "name": "抛射物"
            },
            "comment": null,
            "demo": "speedSpread:1",
            "description": "随机改变炮弹初始速度",
            "key": "speedSpread",
            "name": "速度散布",
            "value_type": "float"
        },
        {
            "Section": {
                "key": "[projectile_NAME]",
                "name": "抛射物"
            },
            "comment": null,
            "demo": "instant:true",
            "description": "开火时立即击中目标,用于激光、闪电、波束。",
            "key": "instant",
            "name": "瞬间命中",
            "value_type": "bool"
        },
        {
            "Section": {
                "key": "[projectile_NAME]",
                "name": "抛射物"
            },
            "comment": null,
            "demo": "instantReuseLast:true",
            "description": "用于激光和闪电。激光或闪电命中后还会存在一段时间，当此抛射物命中后，清除上一个抛射物效果。使得只有一个抛射物存在。如使用高频射速变成光束武器，而不是瞎眼叠加。",
            "key": "instantReuseLast",
            "name": "瞬间命中回收最后抛射物",
            "value_type": "bool"
        },
        {
            "Section": {
                "key": "[projectile_NAME]",
                "name": "抛射物"
            },
            "comment": null,
            "demo": "instantReuseLast_alsoChangeTurretAim:true",
            "description": "使炮塔瞄准受到命中目标扫描效果的影响，对光束武器有用",
            "key": "instantReuseLast_alsoChangeTurretAim",
            "name": "命中回收抛射物且改变瞄准",
            "value_type": "bool"
        },
        {
            "Section": {
                "key": "[projectile_NAME]",
                "name": "抛射物"
            },
            "comment": null,
            "demo": "instantReuseLast_keepAreaDamageList:false",
            "description": "瞬间命中并回收最后的抛射物并且保持区域伤害列表，默认false,保持列表是1.13的正常行为，造成区域伤害不会第二次生效，但不是很有用。只有当你想要旧的行为时才使用这个。",
            "key": "instantReuseLast_keepAreaDamageList",
            "name": "命中回收抛射物区域伤害列表",
            "value_type": "bool"
        },
        {
            "Section": {
                "key": "[projectile_NAME]",
                "name": "抛射物"
            },
            "comment": null,
            "demo": "disableLeadTargeting:true",
            "description": "瞄准移动目标时，禁用预判计算。默认为false。",
            "key": "disableLeadTargeting",
            "name": "禁用预判",
            "value_type": "bool"
        },
        {
            "Section": {
                "key": "[projectile_NAME]",
                "name": "抛射物"
            },
            "comment": null,
            "demo": "leadTargetingSpeedCalculation:0.5",
            "description": "用于使用targetGround时预判计算。目标计算的预期速度。默认为“targetSpeed”。如果设置则基于speed. ",
            "key": "leadTargetingSpeedCalculation",
            "name": "预判计算",
            "value_type": "float"
        },
        {
            "Section": {
                "key": "[projectile_NAME]",
                "name": "抛射物"
            },
            "comment": null,
            "demo": "initialUnguidedSpeedHeight:1",
            "description": "设置抛射物和地面间的垂直速度，利用gravity制造出平滑的抛物线。比较迷，填1左右，重力可以不填。",
            "key": "initialUnguidedSpeedHeight",
            "name": "初始非制导垂直速度",
            "value_type": "float"
        },
        {
            "Section": {
                "key": "[projectile_NAME]",
                "name": "抛射物"
            },
            "comment": null,
            "demo": "initialUnguidedSpeedX:3",
            "description": "让抛射物以弧线形式移动,负数向左，正数向右。",
            "key": "initialUnguidedSpeedX",
            "name": "初非导引速度X",
            "value_type": "float"
        },
        {
            "Section": {
                "key": "[projectile_NAME]",
                "name": "抛射物"
            },
            "comment": null,
            "demo": "initialUnguidedSpeedY:3",
            "description": "修改抛射物的高度，正数向下，负数向上。",
            "key": "initialUnguidedSpeedY",
            "name": "初非导引速度Y",
            "value_type": "float"
        },
        {
            "Section": {
                "key": "[projectile_NAME]",
                "name": "抛射物"
            },
            "comment": null,
            "demo": "gravity:0.5",
            "description": "控制地面的弹丸的拉力。与initialUnguidedSpeedHeight一起使用。",
            "key": "gravity",
            "name": "重力",
            "value_type": "float"
        },
        {
            "Section": {
                "key": "[projectile_NAME]",
                "name": "抛射物"
            },
            "comment": null,
            "demo": "turnSpeed:2",
            "description": "限制抛射物的转弯速度，更好的做出弹道效果。",
            "key": "turnSpeed",
            "name": "转弯速度",
            "value_type": "float"
        },
        {
            "Section": {
                "key": "[projectile_NAME]",
                "name": "抛射物"
            },
            "comment": null,
            "demo": "turnSpeedWhenNear:true",
            "description": "用于当射弹非常接近目标时，默认禁用转弯速度以使其能够命中。",
            "key": "turnSpeedWhenNear",
            "name": "靠近时转弯速度",
            "value_type": "bool"
        },
        {
            "Section": {
                "key": "[projectile_NAME]",
                "name": "抛射物"
            },
            "comment": null,
            "demo": "wobbleAmplitude:0.2",
            "description": "抛射物飞行中摆动的剧烈程度。",
            "key": "wobbleAmplitude",
            "name": "摆动幅度",
            "value_type": "float"
        },
        {
            "Section": {
                "key": "[projectile_NAME]",
                "name": "抛射物"
            },
            "comment": null,
            "demo": "wobbleFrequency:0.8",
            "description": "抛射物飞行中摆动的频率。",
            "key": "wobbleFrequency",
            "name": "摆动频率",
            "value_type": "float"
        },
        {
            "Section": {
                "key": "[projectile_NAME]",
                "name": "抛射物"
            },
            "comment": null,
            "demo": "pushForce:2",
            "description": "弹丸所携带的“重量”,质量越大，推力越大。推动（或以负值拉动）被击中的单位。除以目标质量",
            "key": "pushForce",
            "name": "推动力量",
            "value_type": "float"
        },
        {
            "Section": {
                "key": "[projectile_NAME]",
                "name": "抛射物"
            },
            "comment": null,
            "demo": "pushVelocity:2",
            "description": "抛射物爆炸后可用推动单位,推力相对于方向的速度，推动（或以负值拉动）被击中的单位。忽略目标质量",
            "key": "pushVelocity",
            "name": "推进速度",
            "value_type": "float"
        },
        {
            "Section": {
                "key": "[projectile_NAME]",
                "name": "抛射物"
            },
            "comment": null,
            "demo": "moveWithParent:true",
            "description": "当父单位移动时也移动抛射物。对光束效果武器很有用。",
            "key": "moveWithParent",
            "name": "随父物体移动",
            "value_type": "bool"
        },
        {
            "Section": {
                "key": "[projectile_NAME]",
                "name": "抛射物"
            },
            "comment": null,
            "demo": "sweepOffset:10",
            "description": "扫描偏移，用于制作类似于两栖护盾坦克的激光武器。对光束效果很有用。",
            "key": "sweepOffset",
            "name": "扫描偏移",
            "value_type": "float"
        },
        {
            "Section": {
                "key": "[projectile_NAME]",
                "name": "抛射物"
            },
            "comment": null,
            "demo": "sweepSpeed:10",
            "description": "扫描速度，用于制作类似于两栖护盾坦克的激光武器。对光束效果很有用。",
            "key": "sweepSpeed",
            "name": "扫描速度",
            "value_type": "float"
        },
        {
            "Section": {
                "key": "[projectile_NAME]",
                "name": "抛射物"
            },
            "comment": null,
            "demo": "sweepOffsetFromTargetRadius:0.4",
            "description": "以目标半径作为扫描偏移量乘数，用于制作类似于两栖护盾坦克的激光武器。对光束效果很有用。",
            "key": "sweepOffsetFromTargetRadius",
            "name": "扫描偏移目标半径",
            "value_type": "float"
        },
        {
            "Section": {
                "key": "[projectile_NAME]",
                "name": "抛射物"
            },
            "comment": null,
            "demo": "retargetingInFlight:true",
            "description": "在飞行过程中重新瞄准一个新的目标，非常适合投掷式武器和相互碰撞的抛射物",
            "key": "retargetingInFlight",
            "name": "重新瞄准在飞行时",
            "value_type": "bool"
        },
        {
            "Section": {
                "key": "[projectile_NAME]",
                "name": "抛射物"
            },
            "comment": null,
            "demo": "retargetingInFlightSearchDelay:10",
            "description": "寻找新目标之间的时间。默认5",
            "key": "retargetingInFlightSearchDelay",
            "name": "重新瞄准在飞行时搜索延迟",
            "value_type": "float"
        },
        {
            "Section": {
                "key": "[projectile_NAME]",
                "name": "抛射物"
            },
            "comment": null,
            "demo": "retargetingInFlightSearchRange:45",
            "description": "重新选择目标的范围。默认值120",
            "key": "retargetingInFlightSearchRange",
            "name": "重新瞄准在飞行时搜索范围",
            "value_type": "int"
        },
        {
            "Section": {
                "key": "[projectile_NAME]",
                "name": "抛射物"
            },
            "comment": null,
            "demo": "retargetingInFlightSearchLead:1",
            "description": "引导射弹试图击中目标。默认15",
            "key": "retargetingInFlightSearchLead",
            "name": "重新瞄准在飞行时预判",
            "value_type": "float"
        },
        {
            "Section": {
                "key": "[projectile_NAME]",
                "name": "抛射物"
            },
            "comment": null,
            "demo": "retargetingInFlightSearchOnlyTags:tg_project",
            "description": "只针对具有这些标签的单位进行重定向。",
            "key": "retargetingInFlightSearchOnlyTags",
            "name": "重新瞄准在飞行时针对标签",
            "value_type": "string"
        },
        {
            "Section": {
                "key": "[projectile_NAME]",
                "name": "抛射物"
            },
            "comment": null,
            "demo": "color: #bebe50",
            "description": "使用十六进制值对该抛射物重新着色，它也决定了激光颜色，颜色格式为#AARRGGBB。",
            "key": "color",
            "name": "颜色",
            "value_type": "color"
        },
        {
            "Section": {
                "key": "[projectile_NAME]",
                "name": "抛射物"
            },
            "comment": null,
            "demo": "teamColorRatio:0.5",
            "description": "将团队颜色混合到抛射物颜色中，填0-1。",
            "key": "teamColorRatio",
            "name": "阵营色色相",
            "value_type": "float"
        },
        {
            "Section": {
                "key": "[projectile_NAME]",
                "name": "抛射物"
            },
            "comment": null,
            "demo": "teamColorRatio_sourceRatio:0.5",
            "description": "将团队颜色混合到抛射物颜色中与原色比例，默认为(1-teamColorRatio)",
            "key": "teamColorRatio_sourceRatio",
            "name": "阵营色色相比例",
            "value_type": "float"
        },
        {
            "Section": {
                "key": "[projectile_NAME]",
                "name": "抛射物"
            },
            "comment": null,
            "demo": "invisible:true",
            "description": "隐藏抛射物图像。",
            "key": "invisible",
            "name": "隐藏",
            "value_type": "bool"
        },
        {
            "Section": {
                "key": "[projectile_NAME]",
                "name": "抛射物"
            },
            "comment": null,
            "demo": "image:233.png",
            "description": "使用自定义图片。覆盖drawType和frame",
            "key": "image",
            "name": "图像",
            "value_type": "image"
        },
        {
            "Section": {
                "key": "[projectile_NAME]",
                "name": "抛射物"
            },
            "comment": null,
            "demo": "shadowImage:SHADOW:PRO_fd.png",
            "description": "使用自定义图片给抛射物加阴影。",
            "key": "shadowImage",
            "name": "阴影图像",
            "value_type": "image"
        },
        {
            "Section": {
                "key": "[projectile_NAME]",
                "name": "抛射物"
            },
            "comment": null,
            "demo": "drawType:1",
            "description": "使用内置抛射物图像。 0:projectiles.png 1:projectiles_large.png 2:projectiles2.png",
            "key": "drawType",
            "name": "绘制类型",
            "value_type": "int"
        },
        {
            "Section": {
                "key": "[projectile_NAME]",
                "name": "抛射物"
            },
            "comment": null,
            "demo": "drawSize:0.5",
            "description": "缩放抛射物大小。默认为1",
            "key": "drawSize",
            "name": "绘制大小",
            "value_type": "float"
        },
        {
            "Section": {
                "key": "[projectile_NAME]",
                "name": "抛射物"
            },
            "comment": null,
            "demo": "frame:1",
            "description": "使用的内置图像帧，编号从零开始。和drawType结合使用。",
            "key": "frame",
            "name": "帧",
            "value_type": "int"
        },
        {
            "Section": {
                "key": "[projectile_NAME]",
                "name": "抛射物"
            },
            "comment": null,
            "demo": "hitSound:true",
            "description": "启用命中音效，默认true",
            "key": "hitSound",
            "name": "打击音效",
            "value_type": "bool"
        },
        {
            "Section": {
                "key": "[projectile_NAME]",
                "name": "抛射物"
            },
            "comment": null,
            "demo": "explodeEffect: smallExplosion, CUSTOM:myExplodeEffect",
            "description": "抛射物爆炸效果",
            "key": "explodeEffect",
            "name": "爆炸效果",
            "value_type": "effect"
        },
        {
            "Section": {
                "key": "[projectile_NAME]",
                "name": "抛射物"
            },
            "comment": null,
            "demo": "explodeEffectOnShield:small",
            "description": "如果目标上有护盾，则使用此效果",
            "key": "explodeEffectOnShield",
            "name": "护盾上爆炸效果",
            "value_type": "effect"
        },
        {
            "Section": {
                "key": "[projectile_NAME]",
                "name": "抛射物"
            },
            "comment": null,
            "demo": "drawUnderUnits:true",
            "description": "绘制于单位下方。",
            "key": "drawUnderUnits",
            "name": "绘制与单位下",
            "value_type": "bool"
        },
        {
            "Section": {
                "key": "[projectile_NAME]",
                "name": "抛射物"
            },
            "comment": null,
            "demo": "effectOnCreate:large",
            "description": "创建时效果，会追随抛射物。",
            "key": "effectOnCreate",
            "name": "创建时效果",
            "value_type": "effect"
        },
        {
            "Section": {
                "key": "[projectile_NAME]",
                "name": "抛射物"
            },
            "comment": null,
            "demo": "shouldRevealFog:true",
            "description": "抛射物在爆炸时向玩家揭开迷雾。",
            "key": "shouldRevealFog",
            "name": "揭开迷雾",
            "value_type": "bool"
        },
        {
            "Section": {
                "key": "[projectile_NAME]",
                "name": "抛射物"
            },
            "comment": null,
            "demo": "alwaysVisibleInFog:true",
            "description": "抛射物总是在迷雾中显示。",
            "key": "alwaysVisibleInFog",
            "name": "迷雾中显示",
            "value_type": "bool"
        },
        {
            "Section": {
                "key": "[projectile_NAME]",
                "name": "抛射物"
            },
            "comment": null,
            "demo": "nukeWeapon:true",
            "description": "发射时在迷你地图上显示。还有其他一些效果。",
            "key": "nukeWeapon",
            "name": "核武器",
            "value_type": "bool"
        },
        {
            "Section": {
                "key": "[projectile_NAME]",
                "name": "抛射物"
            },
            "comment": null,
            "demo": "trailEffect:true",
            "description": "设置为true时为默认的尾焰。但也可以指向任何自定义效果，或使用内置效果。",
            "key": "trailEffect",
            "name": "尾焰",
            "value_type": "effect"
        },
        {
            "Section": {
                "key": "[projectile_NAME]",
                "name": "抛射物"
            },
            "comment": null,
            "demo": "trailEffectRate:8",
            "description": "尾焰产生频率，默认为3",
            "key": "trailEffectRate",
            "name": "尾焰频率",
            "value_type": "float"
        },
        {
            "Section": {
                "key": "[projectile_NAME]",
                "name": "抛射物"
            },
            "comment": null,
            "demo": "lightSize:2",
            "description": "抛射物光照大小,单位半径是地块格子",
            "key": "lightSize",
            "name": "闪光大小",
            "value_type": "float"
        },
        {
            "Section": {
                "key": "[projectile_NAME]",
                "name": "抛射物"
            },
            "comment": null,
            "demo": "lightColor: #ffe92b",
            "description": "抛射物光照颜色,不决定激光颜色，激光由color决定。",
            "key": "lightColor",
            "name": "闪光颜色",
            "value_type": "color"
        },
        {
            "Section": {
                "key": "[projectile_NAME]",
                "name": "抛射物"
            },
            "comment": null,
            "demo": "lightCastOnGround:true",
            "description": "将闪光效果映射到地面，如火炮的光和抛射物是分离的。",
            "key": "lightCastOnGround",
            "name": "闪光映射到地面",
            "value_type": "bool"
        },
        {
            "Section": {
                "key": "[projectile_NAME]",
                "name": "抛射物"
            },
            "comment": null,
            "demo": "largeHitEffect:true",
            "description": "为true时会产生大的爆炸效果和声音（仅用于装饰），设为false时会禁用范围武器的冲击波效果。",
            "key": "largeHitEffect",
            "name": "大的打击效果",
            "value_type": "bool"
        },
        {
            "Section": {
                "key": "[projectile_NAME]",
                "name": "抛射物"
            },
            "comment": null,
            "demo": "lightingEffect:true",
            "description": "将抛射物图像修改为闪电，一般需要instant(瞬间命中)搭配.",
            "key": "lightingEffect",
            "name": "闪电效果",
            "value_type": "bool"
        },
        {
            "Section": {
                "key": "[projectile_NAME]",
                "name": "抛射物"
            },
            "comment": null,
            "demo": "laserEffect:true",
            "description": "将抛射物图像修改为激光。",
            "key": "laserEffect",
            "name": "激光效果",
            "value_type": "bool"
        },
        {
            "Section": {
                "key": "[projectile_NAME]",
                "name": "抛射物"
            },
            "comment": null,
            "demo": "delayedStartTimer:15",
            "description": "抛射物发射延迟时间。",
            "key": "delayedStartTimer",
            "name": "延迟时间",
            "value_type": "string"
        },
        {
            "Section": {
                "key": "[projectile_NAME]",
                "name": "抛射物"
            },
            "comment": null,
            "demo": "beamImage:shibaray.png",
            "description": "用于激光效果的主体图像，图像会被复制为多份显示。例如可用于做红警中的正弦波状辐射武器。因为本质是图像拼接,所以长度限制不能小于20",
            "key": "beamImage",
            "name": "波束图像",
            "value_type": "image"
        },
        {
            "Section": {
                "key": "[projectile_NAME]",
                "name": "抛射物"
            },
            "comment": null,
            "demo": "beamImageOffsetRate:0",
            "description": "波束图像的移动频率。",
            "key": "beamImageOffsetRate",
            "name": "波束偏移频率",
            "value_type": "float"
        },
        {
            "Section": {
                "key": "[projectile_NAME]",
                "name": "抛射物"
            },
            "comment": null,
            "demo": "beamImageStart:beam1_start.png",
            "description": "光束动画开火端效果图像",
            "key": "beamImageStart",
            "name": "波束开始图像",
            "value_type": "image"
        },
        {
            "Section": {
                "key": "[projectile_NAME]",
                "name": "抛射物"
            },
            "comment": null,
            "demo": "beamImageEnd:beam1_end.png",
            "description": "光束动画命中端效果图像",
            "key": "beamImageEnd",
            "name": "波束命中图像",
            "value_type": "image"
        },
        {
            "Section": {
                "key": "[projectile_NAME]",
                "name": "抛射物"
            },
            "comment": null,
            "demo": "beamImageStartRotated:true",
            "description": "光束动画开火端效果图像是否以炮塔角度旋转旋转,默认false,不旋转.",
            "key": "beamImageStartRotated",
            "name": "波束始端旋转",
            "value_type": "bool"
        },
        {
            "Section": {
                "key": "[projectile_NAME]",
                "name": "抛射物"
            },
            "comment": null,
            "demo": "beamImageEndRotated:true",
            "description": "光束动画命中端效果图像是否旋转,默认false.",
            "key": "beamImageEndRotated",
            "name": "波束末端旋转",
            "value_type": "bool"
        },
        {
            "Section": {
                "key": "[movement]",
                "name": "运动"
            },
            "comment": null,
            "demo": "movementType: LAND",
            "description": "定义单位将能够通过的地形以及与单位类型相关的其他属性。类型：无、陆地、建筑、空中、水面、两栖、跨悬崖、跨水和悬崖\r\nNONE、LAND、BUILDING、AIR、WATER、HOVER、OVER_CLIFF、OVER_CLIFF_WATER",
            "key": "movementType",
            "name": "运动类型",
            "value_type": "string"
        },
        {
            "Section": {
                "key": "[movement]",
                "name": "运动"
            },
            "comment": null,
            "demo": "moveSpeed: 1.2",
            "description": "单位的最大移动速度。",
            "key": "moveSpeed",
            "name": "移动速度",
            "value_type": "float"
        },
        {
            "Section": {
                "key": "[movement]",
                "name": "运动"
            },
            "comment": null,
            "demo": "moveAccelerationSpeed: 0.07",
            "description": "定义单位加速到最大速度的加速度。",
            "key": "moveAccelerationSpeed",
            "name": "加速度",
            "value_type": "float"
        },
        {
            "Section": {
                "key": "[movement]",
                "name": "运动"
            },
            "comment": null,
            "demo": "moveDecelerationSpeed: 0.17",
            "description": "与加速度相对应得减速度。不要设的太小。",
            "key": "moveDecelerationSpeed",
            "name": "减速度",
            "value_type": "float"
        },
        {
            "Section": {
                "key": "[movement]",
                "name": "运动"
            },
            "comment": null,
            "demo": "reverseSpeedPercentage: 0",
            "description": "0.6默认值。超过0.4会在短距离（以40％的速度）时反转。 如果设置为1前进后退则不转弯。 填0时禁止倒退，必须旋转。",
            "key": "reverseSpeedPercentage",
            "name": "倒车速度比率",
            "value_type": "float"
        },
        {
            "Section": {
                "key": "[movement]",
                "name": "运动"
            },
            "comment": null,
            "demo": "landOnGround: false",
            "description": "闲置时使飞行器降落。",
            "key": "landOnGround",
            "name": "降落到地面",
            "value_type": "bool"
        },
        {
            "Section": {
                "key": "[movement]",
                "name": "运动"
            },
            "comment": null,
            "demo": "targetHeight: 25",
            "description": "默认为0，但如果运动类型为空军则默认为35。",
            "key": "targetHeight",
            "name": "到达高度",
            "value_type": "float"
        },
        {
            "Section": {
                "key": "[movement]",
                "name": "运动"
            },
            "comment": null,
            "demo": "targetHeightDrift: 1",
            "description": "默认0，空军1.5.单位高度上下浮动高度。",
            "key": "targetHeightDrift",
            "name": "高度浮动",
            "value_type": "float"
        },
        {
            "Section": {
                "key": "[movement]",
                "name": "运动"
            },
            "comment": null,
            "demo": "startingHeightOffset:100",
            "description": "单位在创建时高度。负数上升比较慢。",
            "key": "startingHeightOffset",
            "name": "创建时高度偏移",
            "value_type": "float"
        },
        {
            "Section": {
                "key": "[movement]",
                "name": "运动"
            },
            "comment": null,
            "demo": "maxTurnSpeed:3",
            "description": "最大转弯速度。",
            "key": "maxTurnSpeed",
            "name": "转弯速度",
            "value_type": "float"
        },
        {
            "Section": {
                "key": "[movement]",
                "name": "运动"
            },
            "comment": null,
            "demo": "turnAcceleration:1",
            "description": "转弯加速度。",
            "key": "turnAcceleration",
            "name": "转弯加速度",
            "value_type": "float"
        },
        {
            "Section": {
                "key": "[movement]",
                "name": "运动"
            },
            "comment": null,
            "demo": "moveSlidingMode:true",
            "description": "移动后滑动，相当于惯性。和单位的速度，加速度，转弯速度有关。True时受推力影响",
            "key": "moveSlidingMode",
            "name": "移动后滑动",
            "value_type": "bool"
        },
        {
            "Section": {
                "key": "[movement]",
                "name": "运动"
            },
            "comment": null,
            "demo": "moveIgnoringBody:true",
            "description": "true效果即不必转弯便能运动，false效果即原地转弯完成才能运动",
            "key": "moveIgnoringBody",
            "name": "移动忽略转向",
            "value_type": "bool"
        },
        {
            "Section": {
                "key": "[movement]",
                "name": "运动"
            },
            "comment": null,
            "demo": "moveSlidingDir:100",
            "description": "移动滑动角度。无明显效果。",
            "key": "moveSlidingDir",
            "name": "移动滑动角度",
            "value_type": "int"
        },
        {
            "Section": {
                "key": "[movement]",
                "name": "运动"
            },
            "comment": null,
            "demo": "joinsGroupFormations:false",
            "description": "将单位组成小队。铁锈调集大量部队时将其组成方阵以降低运算压力，但队形可能影响速度或浪费时间。禁用后则不参与组队。",
            "key": "joinsGroupFormations",
            "name": "加入队形",
            "value_type": "bool"
        },
        {
            "Section": {
                "key": "[movement]",
                "name": "运动"
            },
            "comment": null,
            "demo": "ignoreMoveOrders:true",
            "description": "忽略移动指令,此代码强制要求移动速度为0，适用例子：红警中单位部署忽略移动指令。",
            "key": "ignoreMoveOrders",
            "name": "忽略移动指令",
            "value_type": "bool"
        },
        {
            "Section": {
                "key": "[movement]",
                "name": "运动"
            },
            "comment": null,
            "demo": null,
            "description": "垂直方向单位移动速度乘数，适用于2.5D，也就是用铁锈模拟3D。典型如红警。",
            "key": "moveYAxisScaling",
            "name": "Y轴速度比例",
            "value_type": "string"
        },
        {
            "Section": {
                "key": "[movement]",
                "name": "运动"
            },
            "comment": null,
            "demo": "slowDeathFall: true",
            "description": "为\"true\"时，被击毁时降落速度减慢，并且向前滑行一段距离。注意，必须设置死亡图像，不然坠落后会显示生前图像，而不是直接炸掉。",
            "key": "slowDeathFall",
            "name": "死亡缓慢降落",
            "value_type": "bool"
        },
        {
            "Section": {
                "key": "[movement]",
                "name": "运动"
            },
            "comment": null,
            "demo": "heightChangeRate: 3",
            "description": "单位改变高度的频率，无论是转换还是浮动",
            "key": "heightChangeRate",
            "name": "高度改变速率",
            "value_type": "float"
        },
        {
            "Section": {
                "key": "[movement]",
                "name": "运动"
            },
            "comment": null,
            "demo": "fallingAcceleration:1",
            "description": "单位降落时的加速度",
            "key": "fallingAcceleration",
            "name": "降落加速度",
            "value_type": "float"
        },
        {
            "Section": {
                "key": "[movement]",
                "name": "运动"
            },
            "comment": null,
            "demo": "fallingAccelerationDead:1",
            "description": "单位被摧毁时降落的加速度",
            "key": "fallingAccelerationDead",
            "name": "坠毁加速度",
            "value_type": "float"
        },
        {
            "Section": {
                "key": "[ai]",
                "name": "AI"
            },
            "comment": null,
            "demo": "useAsBuilder:true",
            "description": "作为建造者。如果单位可以建造或维修建筑物，则设置为true。 默认为[core] isBuilder。",
            "key": "useAsBuilder",
            "name": "用作建造者",
            "value_type": "bool"
        },
        {
            "Section": {
                "key": "[ai]",
                "name": "AI"
            },
            "comment": null,
            "demo": "useAsTransport:true",
            "description": "作为载具。如果单位可以运输单位，则默认为true.如果你的单位可以运输又能攻击，则AI可能囤积起来而不攻击，则需要设置false.",
            "key": "useAsTransport",
            "name": "用作运输",
            "value_type": "bool"
        },
        {
            "Section": {
                "key": "[ai]",
                "name": "AI"
            },
            "comment": null,
            "demo": "useAsAttacker:true",
            "description": "是否作为攻击者。",
            "key": "useAsAttacker",
            "name": "用作攻击者",
            "value_type": "bool"
        },
        {
            "Section": {
                "key": "[ai]",
                "name": "AI"
            },
            "comment": null,
            "demo": "useAsHarvester:true",
            "description": "作为采集者。如果单位可以回收资源，则默认为true",
            "key": "useAsHarvester",
            "name": "用作采集",
            "value_type": "bool"
        },
        {
            "Section": {
                "key": "[ai]",
                "name": "AI"
            },
            "comment": null,
            "demo": "disableUse:true",
            "description": "禁止AI建立这个单位或建筑物",
            "key": "disableUse",
            "name": "禁用",
            "value_type": "bool"
        },
        {
            "Section": {
                "key": "[ai]",
                "name": "AI"
            },
            "comment": null,
            "demo": "ai_upgradePriority:0.1",
            "description": "升级优先级。默认值为0.06。 设置在0-1之间，越高，表示AI更有可能先于其他升级该单位。",
            "key": "ai_upgradePriority",
            "name": "AI升级优先级",
            "value_type": "float"
        },
        {
            "Section": {
                "key": "[ai]",
                "name": "AI"
            },
            "comment": "仅建筑物",
            "demo": "buildPriority:0.6",
            "description": "建造优先级，填0-1。 越大越AI越可能造。Luke的的第一座土地工厂使用0.8，空中工厂使用0.48，第一炮塔使用0.47。",
            "key": "buildPriority",
            "name": "建造优先级",
            "value_type": "float"
        },
        {
            "Section": {
                "key": "[ai]",
                "name": "AI"
            },
            "comment": "仅建筑物",
            "demo": "noneInBaseExtraPriority:0.2",
            "description": "如果AI基地中不存在此单位，则增加其优先级。",
            "key": "noneInBaseExtraPriority",
            "name": "基地内没有时优先级",
            "value_type": "float"
        },
        {
            "Section": {
                "key": "[ai]",
                "name": "AI"
            },
            "comment": "仅建筑物",
            "demo": "noneGlobalExtraPriority:0.4",
            "description": "如果此单位在地图上的任何位置都不存在，则增加其优先级。",
            "key": "noneGlobalExtraPriority",
            "name": "全图没有时优先级",
            "value_type": "float"
        },
        {
            "Section": {
                "key": "[ai]",
                "name": "AI"
            },
            "comment": "仅建筑物",
            "demo": "recommendedInEachBaseNum:5",
            "description": "推荐在每个基地中的数量。",
            "key": "recommendedInEachBaseNum",
            "name": "推荐在每个基地的数量",
            "value_type": "int"
        },
        {
            "Section": {
                "key": "[ai]",
                "name": "AI"
            },
            "comment": "仅建筑物",
            "demo": "recommendedInEachBasePriorityIfUnmet:0.2",
            "description": "如果未满足，推荐在基地中的优先级。",
            "key": "recommendedInEachBasePriorityIfUnmet",
            "name": "推荐条件不满足时优先级",
            "value_type": "float"
        },
        {
            "Section": {
                "key": "[ai]",
                "name": "AI"
            },
            "comment": "仅建筑物",
            "demo": "upgradedFrom:炮塔",
            "description": "创建到另一个单位的链接，用于保留同一单位已升级和未升级的计数。",
            "key": "upgradedFrom",
            "name": "升级自",
            "value_type": "string"
        },
        {
            "Section": {
                "key": "[ai]",
                "name": "AI"
            },
            "comment": "仅建筑物",
            "demo": "maxGlobal:10",
            "description": "全图最多拥有的数量。",
            "key": "maxGlobal",
            "name": "全图最大数量",
            "value_type": "int"
        },
        {
            "Section": {
                "key": "[ai]",
                "name": "AI"
            },
            "comment": "仅建筑物",
            "demo": "maxEachBase:1",
            "description": "每个基地最多拥有的数量。",
            "key": "maxEachBase",
            "name": "每个基地最大数量",
            "value_type": "int"
        },
        {
            "Section": {
                "key": "[ai]",
                "name": "AI"
            },
            "comment": "仅建筑物",
            "demo": "notPassivelyTargetedByOtherUnits:true",
            "description": "允许更好的墙壁建筑物，默认情况下，这些建筑物不会瞄准目标。用于围墙",
            "key": "notPassivelyTargetedByOtherUnits",
            "name": "不被动地被其他单位瞄准",
            "value_type": "bool"
        },
        {
            "Section": {
                "key": "[ai]",
                "name": "AI"
            },
            "comment": "仅建筑物",
            "demo": "lowPriorityTargetForOtherUnits:true",
            "description": "其它单位不优先考虑此单位。用于围墙",
            "key": "lowPriorityTargetForOtherUnits",
            "name": "低优先级目标",
            "value_type": "bool"
        },
        {
            "Section": {
                "key": "[ai]",
                "name": "AI"
            },
            "comment": "采集",
            "demo": "whenUsingAsHarvester_recommendedInEachBase:10",
            "description": "当此单位用作采集者时，每个基地推荐的采集者数量。",
            "key": "whenUsingAsHarvester_recommendedInEachBase",
            "name": "每个基地此采集者数量",
            "value_type": "int"
        },
        {
            "Section": {
                "key": "[ai]",
                "name": "AI"
            },
            "comment": "采集",
            "demo": "whenUsingAsHarvester_recommendedGlobal:20",
            "description": "当此单位用作采集者时，全图推荐的采集者数量。",
            "key": "whenUsingAsHarvester_recommendedGlobal",
            "name": "全地图推荐采集者数量",
            "value_type": "int"
        },
        {
            "Section": {
                "key": "[ai]",
                "name": "AI"
            },
            "comment": "采集",
            "demo": "whenUsingAsHarvester_includeOtherHarvesterCounts:false",
            "description": "当此单位用作采集者时，是否算在其它采集者统计中。",
            "key": "whenUsingAsHarvester_includeOtherHarvesterCounts",
            "name": "是否算在采集者计数中",
            "value_type": "bool"
        },
        {
            "Section": {
                "key": "[ai]",
                "name": "AI"
            },
            "comment": "采集",
            "demo": "onlyUseAsHarvester_ifBaseHasUnitTagged:false",
            "description": "只有当基地有单位标记时才可以作为采集者使用.",
            "key": "onlyUseAsHarvester_ifBaseHasUnitTagged",
            "name": "有此标签才作为采集者",
            "value_type": "string"
        },
        {
            "Section": {
                "key": "[leg_#] / [arm_#]",
                "name": "腿脚胳膊"
            },
            "comment": null,
            "demo": "x:15",
            "description": "设置脚在X轴上的位置。",
            "key": "x",
            "name": "x:",
            "value_type": "float"
        },
        {
            "Section": {
                "key": "[leg_#] / [arm_#]",
                "name": "腿脚胳膊"
            },
            "comment": null,
            "demo": "y:15",
            "description": "设置脚在Y轴上的位置。",
            "key": "y",
            "name": "y:",
            "value_type": "float"
        },
        {
            "Section": {
                "key": "[leg_#] / [arm_#]",
                "name": "腿脚胳膊"
            },
            "comment": null,
            "demo": "copyFrom:1",
            "description": "从另一条腿复制。仅需设置一次腿部值时有用",
            "key": "copyFrom",
            "name": "复制与",
            "value_type": "int"
        },
        {
            "Section": {
                "key": "[leg_#] / [arm_#]",
                "name": "腿脚胳膊"
            },
            "comment": null,
            "demo": "attach_x: -15",
            "description": "在X轴上设置腿部的附着点。",
            "key": "attach_x",
            "name": "x轴链接位置",
            "value_type": "float"
        },
        {
            "Section": {
                "key": "[leg_#] / [arm_#]",
                "name": "腿脚胳膊"
            },
            "comment": null,
            "demo": "attach_y: 0",
            "description": "在Y轴上设置腿部的附着点。",
            "key": "attach_y",
            "name": "Y轴链接位置",
            "value_type": "float"
        },
        {
            "Section": {
                "key": "[leg_#] / [arm_#]",
                "name": "腿脚胳膊"
            },
            "comment": null,
            "demo": "rotateSpeed:30",
            "description": "设置脚旋转速度，非对称情况下很明显。",
            "key": "rotateSpeed",
            "name": "旋转速度",
            "value_type": "float"
        },
        {
            "Section": {
                "key": "[leg_#] / [arm_#]",
                "name": "腿脚胳膊"
            },
            "comment": null,
            "demo": "endDirOffset:45",
            "description": "目标脚/末端相对于身体的旋转角度。",
            "key": "endDirOffset",
            "name": "末端角度偏移值",
            "value_type": "int"
        },
        {
            "Section": {
                "key": "[leg_#] / [arm_#]",
                "name": "腿脚胳膊"
            },
            "comment": null,
            "demo": "lockMovement:true",
            "description": "禁止使用腿脚，将其锁定到主体。用于将行走单位转换为飞行单。",
            "key": "lockMovement",
            "name": "锁定运动",
            "value_type": "bool"
        },
        {
            "Section": {
                "key": "[leg_#] / [arm_#]",
                "name": "腿脚胳膊"
            },
            "comment": null,
            "demo": "heightSpeed:2",
            "description": "移动时脚抬高速度和高度。",
            "key": "heightSpeed",
            "name": "高度速度",
            "value_type": "float"
        },
        {
            "Section": {
                "key": "[leg_#] / [arm_#]",
                "name": "腿脚胳膊"
            },
            "comment": null,
            "demo": "moveSpeed:3",
            "description": "腿脚移动速度。",
            "key": "moveSpeed",
            "name": "移动速度",
            "value_type": "float"
        },
        {
            "Section": {
                "key": "[leg_#] / [arm_#]",
                "name": "腿脚胳膊"
            },
            "comment": null,
            "demo": "moveWarmUp:15",
            "description": "腿脚移动延迟",
            "key": "moveWarmUp",
            "name": "移动延迟",
            "value_type": "float"
        },
        {
            "Section": {
                "key": "[leg_#] / [arm_#]",
                "name": "腿脚胳膊"
            },
            "comment": null,
            "demo": "holdDisMin:10",
            "description": "默认值为7。如果相邻的腿还没有重新移动，则至少移动此距离。",
            "key": "holdDisMin",
            "name": "最小移动距离",
            "value_type": "float"
        },
        {
            "Section": {
                "key": "[leg_#] / [arm_#]",
                "name": "腿脚胳膊"
            },
            "comment": null,
            "demo": "holdDisMax:40",
            "description": "默认值为16。如果已经移动超过此距离则强制重新放置腿。",
            "key": "holdDisMax",
            "name": "最大移动距离",
            "value_type": "float"
        },
        {
            "Section": {
                "key": "[leg_#] / [arm_#]",
                "name": "腿脚胳膊"
            },
            "comment": null,
            "demo": "holdDisMin_maxMovingLegs:4",
            "description": "最多移动腿数目",
            "key": "holdDisMin_maxMovingLegs",
            "name": "最大移动腿数目",
            "value_type": "int"
        },
        {
            "Section": {
                "key": "[leg_#] / [arm_#]",
                "name": "腿脚胳膊"
            },
            "comment": null,
            "demo": "hold_moveOnlyIfFurthest:true",
            "description": "保持移动仅在最远时候。",
            "key": "hold_moveOnlyIfFurthest",
            "name": "只在最远时保持移动",
            "value_type": "bool"
        },
        {
            "Section": {
                "key": "[leg_#] / [arm_#]",
                "name": "腿脚胳膊"
            },
            "comment": null,
            "demo": "holdDisMin_checkNeighbours:true",
            "description": "移动最小距离时检查相邻的腿脚。",
            "key": "holdDisMin_checkNeighbours",
            "name": "最小移动距离检查相邻",
            "value_type": "bool"
        },
        {
            "Section": {
                "key": "[leg_#] / [arm_#]",
                "name": "腿脚胳膊"
            },
            "comment": null,
            "demo": "hardLimit:99",
            "description": "默认值为50。强制腿部不要走的超过此数值。最好不要用到。",
            "key": "hardLimit",
            "name": "硬性限制",
            "value_type": "float"
        },
        {
            "Section": {
                "key": "[leg_#] / [arm_#]",
                "name": "腿脚胳膊"
            },
            "comment": null,
            "demo": "estimatingPositionMultiplier:1",
            "description": "默认值为1。根据单位速度预测单位可用的腿脚放置位置。",
            "key": "estimatingPositionMultiplier",
            "name": "预测位置乘数",
            "value_type": "float"
        },
        {
            "Section": {
                "key": "[leg_#] / [arm_#]",
                "name": "腿脚胳膊"
            },
            "comment": null,
            "demo": "hidden:if self.isInWater()",
            "description": "隐藏",
            "key": "hidden",
            "name": "隐藏",
            "value_type": "logic"
        },
        {
            "Section": {
                "key": "[leg_#] / [arm_#]",
                "name": "腿脚胳膊"
            },
            "comment": null,
            "demo": "image_end:爪子.png",
            "description": "末端图像，相当于脚。",
            "key": "image_end",
            "name": "末端图像",
            "value_type": "image"
        },
        {
            "Section": {
                "key": "[leg_#] / [arm_#]",
                "name": "腿脚胳膊"
            },
            "comment": null,
            "demo": "image_end_shadow:SHADOW:爪子.png",
            "description": "末端图像阴影。",
            "key": "image_end_shadow",
            "name": "末端图像阴影",
            "value_type": "image"
        },
        {
            "Section": {
                "key": "[leg_#] / [arm_#]",
                "name": "腿脚胳膊"
            },
            "comment": null,
            "demo": "image_end_teamColors:true",
            "description": "末端图像使用阵营色。",
            "key": "image_end_teamColors",
            "name": "末端图像着色",
            "value_type": "bool"
        },
        {
            "Section": {
                "key": "[leg_#] / [arm_#]",
                "name": "腿脚胳膊"
            },
            "comment": null,
            "demo": "image_foot:爪子.png",
            "description": "脚图像，与image_end相同",
            "key": "image_foot",
            "name": "脚图像",
            "value_type": "image"
        },
        {
            "Section": {
                "key": "[leg_#] / [arm_#]",
                "name": "腿脚胳膊"
            },
            "comment": null,
            "demo": "image_foot_shadow:SHADOW:爪子.png",
            "description": "脚图像阴影。",
            "key": "image_foot_shadow",
            "name": "脚图像阴影",
            "value_type": "image"
        },
        {
            "Section": {
                "key": "[leg_#] / [arm_#]",
                "name": "腿脚胳膊"
            },
            "comment": null,
            "demo": "image_middle:腿.png",
            "description": "中部图像，相当于腿。",
            "key": "image_middle",
            "name": "中部图像",
            "value_type": "image"
        },
        {
            "Section": {
                "key": "[leg_#] / [arm_#]",
                "name": "腿脚胳膊"
            },
            "comment": null,
            "demo": "image_leg:腿.png",
            "description": "腿图像，与image_middle相同",
            "key": "image_leg",
            "name": "腿图像",
            "value_type": "image"
        },
        {
            "Section": {
                "key": "[leg_#] / [arm_#]",
                "name": "腿脚胳膊"
            },
            "comment": null,
            "demo": "draw_foot_on_top:true",
            "description": "绘制脚在顶层。",
            "key": "draw_foot_on_top",
            "name": "绘制脚在顶层",
            "value_type": "bool"
        },
        {
            "Section": {
                "key": "[leg_#] / [arm_#]",
                "name": "腿脚胳膊"
            },
            "comment": null,
            "demo": "drawOverBody:true",
            "description": "绘制在主体之上。",
            "key": "drawOverBody",
            "name": "绘制主体之上",
            "value_type": "bool"
        },
        {
            "Section": {
                "key": "[leg_#] / [arm_#]",
                "name": "腿脚胳膊"
            },
            "comment": null,
            "demo": "drawUnderAllUnits:true",
            "description": "绘制所有单位之下。",
            "key": "drawUnderAllUnits",
            "name": "绘制所有单位之下",
            "value_type": "bool"
        },
        {
            "Section": {
                "key": "[leg_#] / [arm_#]",
                "name": "腿脚胳膊"
            },
            "comment": null,
            "demo": "drawDirOffset:45",
            "description": "绘制角度偏移。",
            "key": "drawDirOffset",
            "name": "绘制角度偏移",
            "value_type": "float"
        },
        {
            "Section": {
                "key": "[leg_#] / [arm_#]",
                "name": "腿脚胳膊"
            },
            "comment": null,
            "demo": "dust_effect:true",
            "description": "脚落地时产生灰尘。",
            "key": "dust_effect",
            "name": "灰尘效果",
            "value_type": "bool"
        },
        {
            "Section": {
                "key": "[leg_#] / [arm_#]",
                "name": "腿脚胳膊"
            },
            "comment": null,
            "demo": "spinRate:3",
            "description": "使手臂/腿脚一直旋转，像转塔的idleSpin。用处如直升机的螺旋桨。",
            "key": "spinRate",
            "name": "旋转速度",
            "value_type": "float"
        },
        {
            "Section": {
                "key": "[leg_#] / [arm_#]",
                "name": "腿脚胳膊"
            },
            "comment": null,
            "demo": "favourOppositeSideNeighbours:true",
            "description": "填true时，使得左右的腿脚拉开时间差，这样更好看。否则看起来顺拐。计算相邻的X比接近的Y查10倍时间。",
            "key": "favourOppositeSideNeighbours",
            "name": "偏向于临近一侧",
            "value_type": "bool"
        },
        {
            "Section": {
                "key": "[leg_#] / [arm_#]",
                "name": "腿脚胳膊"
            },
            "comment": null,
            "demo": "drawLegWhenZoomedOut:true",
            "description": "在缩小显示倍数(看到东西更多)后绘制腿。False时不绘制。为了提高绘制腿性能，默认值根据单位大小而变化。",
            "key": "drawLegWhenZoomedOut",
            "name": "缩小时绘制腿",
            "value_type": "bool"
        },
        {
            "Section": {
                "key": "[leg_#] / [arm_#]",
                "name": "腿脚胳膊"
            },
            "comment": null,
            "demo": "drawFootWhenZoomedOut:false",
            "description": "在缩小显示倍数(看到东西更多)后绘制脚。False时不绘制。为了提高绘制腿性能，默认值根据单位大小而变化。如果单独设置阴影则可能比较怪异。",
            "key": "drawFootWhenZoomedOut",
            "name": "缩小时绘制脚",
            "value_type": "bool"
        },
        {
            "Section": {
                "key": "[leg_#] / [arm_#]",
                "name": "腿脚胳膊"
            },
            "comment": null,
            "demo": "resetAngle:45",
            "description": "复位角度。",
            "key": "resetAngle",
            "name": "复位角度",
            "value_type": "float"
        },
        {
            "Section": {
                "key": "[attachment_NAME]",
                "name": "附属"
            },
            "comment": null,
            "demo": "x:10",
            "description": "子单位x轴位置",
            "key": "x",
            "name": "x",
            "value_type": "float"
        },
        {
            "Section": {
                "key": "[attachment_NAME]",
                "name": "附属"
            },
            "comment": null,
            "demo": "y:15",
            "description": "子单位Y轴位置",
            "key": "y",
            "name": "y",
            "value_type": "float"
        },
        {
            "Section": {
                "key": "[attachment_NAME]",
                "name": "附属"
            },
            "comment": null,
            "demo": "height:3",
            "description": "子单位高度。",
            "key": "height",
            "name": "高度",
            "value_type": "float"
        },
        {
            "Section": {
                "key": "[attachment_NAME]",
                "name": "附属"
            },
            "comment": null,
            "demo": "idleDir:45",
            "description": "闲置时角度。",
            "key": "idleDir",
            "name": "闲置方向",
            "value_type": "int"
        },
        {
            "Section": {
                "key": "[attachment_NAME]",
                "name": "附属"
            },
            "comment": null,
            "demo": "idleDirReversing:1",
            "description": "允许朝向反转，比如重坦倒退移动时炮塔反转，而不需要整个单位转向。",
            "key": "idleDirReversing",
            "name": "闲置方向反转",
            "value_type": "float"
        },
        {
            "Section": {
                "key": "[attachment_NAME]",
                "name": "附属"
            },
            "comment": null,
            "demo": "isVisible:true",
            "description": "是可见的。",
            "key": "isVisible",
            "name": "是可见",
            "value_type": "bool"
        },
        {
            "Section": {
                "key": "[attachment_NAME]",
                "name": "附属"
            },
            "comment": null,
            "demo": "onCreateSpawnUnitOf:flydog",
            "description": "此创造时也产生此子单位。",
            "key": "onCreateSpawnUnitOf",
            "name": "创建时生成单位",
            "value_type": "string"
        },
        {
            "Section": {
                "key": "[attachment_NAME]",
                "name": "附属"
            },
            "comment": null,
            "demo": "canBeAttackedAndDamaged:true",
            "description": "可以被攻击或受到伤害。",
            "key": "canBeAttackedAndDamaged",
            "name": "可被攻击或损坏",
            "value_type": "bool"
        },
        {
            "Section": {
                "key": "[attachment_NAME]",
                "name": "附属"
            },
            "comment": null,
            "demo": "isUnselectable:true",
            "description": "是不可选择的。",
            "key": "isUnselectable",
            "name": "不可选择",
            "value_type": "bool"
        },
        {
            "Section": {
                "key": "[attachment_NAME]",
                "name": "附属"
            },
            "comment": null,
            "demo": "lockLegMovement:true",
            "description": "锁定腿脚防止乱动。",
            "key": "lockLegMovement",
            "name": "锁定腿脚运动",
            "value_type": "bool"
        },
        {
            "Section": {
                "key": "[attachment_NAME]",
                "name": "附属"
            },
            "comment": null,
            "demo": "keepAliveWhenParentDies:true",
            "description": "当此单位死亡时，子单位保持存活。",
            "key": "keepAliveWhenParentDies",
            "name": "保持子存活",
            "value_type": "bool"
        },
        {
            "Section": {
                "key": "[attachment_NAME]",
                "name": "附属"
            },
            "comment": null,
            "demo": "setDrawLayerOnTop:true",
            "description": "此子单位绘制于顶层。",
            "key": "setDrawLayerOnTop",
            "name": "绘制于顶层",
            "value_type": "bool"
        },
        {
            "Section": {
                "key": "[attachment_NAME]",
                "name": "附属"
            },
            "comment": null,
            "demo": "setDrawLayerOnBottom:true",
            "description": "此子单位绘制于底层。",
            "key": "setDrawLayerOnBottom",
            "name": "绘制于底层",
            "value_type": "bool"
        },
        {
            "Section": {
                "key": "[attachment_NAME]",
                "name": "附属"
            },
            "comment": null,
            "demo": "addTransportedUnits:true",
            "description": "添加到运输单位槽中。",
            "key": "addTransportedUnits",
            "name": "增加被运输单位",
            "value_type": "bool"
        },
        {
            "Section": {
                "key": "[attachment_NAME]",
                "name": "附属"
            },
            "comment": null,
            "demo": "lockRotation:true",
            "description": "锁定方向，禁止旋转。",
            "key": "lockRotation",
            "name": "锁定旋转",
            "value_type": "bool"
        },
        {
            "Section": {
                "key": "[attachment_NAME]",
                "name": "附属"
            },
            "comment": null,
            "demo": "rotateWithParent:true",
            "description": "旋转时子单位是否一同旋转。",
            "key": "rotateWithParent",
            "name": "子单位一同旋转",
            "value_type": "bool"
        },
        {
            "Section": {
                "key": "[attachment_NAME]",
                "name": "附属"
            },
            "comment": null,
            "demo": "resetRotationWhenNotAttacking:true",
            "description": "不攻击时恢复到自身默认角度",
            "key": "resetRotationWhenNotAttacking",
            "name": "不攻击时重置角度",
            "value_type": "bool"
        },
        {
            "Section": {
                "key": "[attachment_NAME]",
                "name": "附属"
            },
            "comment": null,
            "demo": "deattachIfWantingToMove:true",
            "description": "若收到移动命令，子单位将自动分离。这包括来自action的路径点。可以用来制作机场。",
            "key": "deattachIfWantingToMove",
            "name": "移动时脱离",
            "value_type": "bool"
        },
        {
            "Section": {
                "key": "[attachment_NAME]",
                "name": "附属"
            },
            "comment": null,
            "demo": "prioritizeParentsMainTarget:true",
            "description": "子单位优先考虑父单位当前的目标。",
            "key": "prioritizeParentsMainTarget",
            "name": "优先考虑父单位的主要目标",
            "value_type": "bool"
        },
        {
            "Section": {
                "key": "[attachment_NAME]",
                "name": "附属"
            },
            "comment": null,
            "demo": "alwaysAllowedToAttackParentsMainTarget:true",
            "description": "子单总是跟随攻击父单位的主要目标。",
            "key": "alwaysAllowedToAttackParentsMainTarget",
            "name": "总是攻击父单位的主要目标",
            "value_type": "bool"
        },
        {
            "Section": {
                "key": "[attachment_NAME]",
                "name": "附属"
            },
            "comment": null,
            "demo": "canAttack:true",
            "description": "默认值为true。设置为false以阻止子单位自动攻击。",
            "key": "canAttack",
            "name": "可攻击",
            "value_type": "bool"
        },
        {
            "Section": {
                "key": "[attachment_NAME]",
                "name": "附属"
            },
            "comment": null,
            "demo": "onParentTeamChangeKeepCurrentTeam:true",
            "description": "默认值为false。如果为true则父单位改变队伍时子单位不改变队伍。",
            "key": "onParentTeamChangeKeepCurrentTeam",
            "name": "改变队伍时子单位保持原队伍",
            "value_type": "bool"
        },
        {
            "Section": {
                "key": "[attachment_NAME]",
                "name": "附属"
            },
            "comment": null,
            "demo": "smoothlyBlendPositionWhenExistingUnitAdded:true",
            "description": "补充所装载单位至槽位时平滑移动。",
            "key": "smoothlyBlendPositionWhenExistingUnitAdded",
            "name": "补充时平滑移动",
            "value_type": "bool"
        },
        {
            "Section": {
                "key": "[attachment_NAME]",
                "name": "附属"
            },
            "comment": null,
            "demo": "keepWaypointsNeedingMovement:false",
            "description": "默认值为false。当为false时，队列中任何需要移动才能完成的队列路径点都会被移除。",
            "key": "keepWaypointsNeedingMovement",
            "name": "保持需要移动路径点",
            "value_type": "bool"
        },
        {
            "Section": {
                "key": "[attachment_NAME]",
                "name": "附属"
            },
            "comment": null,
            "demo": "showAllActionsFrom:if self.hasFlag(id=1)",
            "description": "当被选中时，在父单元列表中显示所有附加单位的动作",
            "key": "showAllActionsFrom",
            "name": "显示所有操作来源",
            "value_type": "logic"
        },
        {
            "Section": {
                "key": "[attachment_NAME]",
                "name": "附属"
            },
            "comment": null,
            "demo": "createIncompleteIfParentIs:false",
            "description": "如果父节单位不完整，则创建子单位不完整",
            "key": "createIncompleteIfParentIs",
            "name": "创建随父单位",
            "value_type": "bool"
        },
        {
            "Section": {
                "key": "[attachment_NAME]",
                "name": "附属"
            },
            "comment": null,
            "demo": "redirectDamageToParent:true",
            "description": "将对附属造成的伤害重定向到父单位，而不是伤害子单位自身。",
            "key": "redirectDamageToParent",
            "name": "重定向伤害到父单位",
            "value_type": "bool"
        },
        {
            "Section": {
                "key": "[attachment_NAME]",
                "name": "附属"
            },
            "comment": null,
            "demo": "redirectDamageToParent_shieldOnly:true",
            "description": "只将对附属造成的伤害重定向到父单位的护盾，而不是伤害子单位自身。如果盾没了那就伤害自身，如模块蜘蛛。",
            "key": "redirectDamageToParent_shieldOnly",
            "name": "重定向伤害到父单位护盾",
            "value_type": "bool"
        },
        {
            "Section": {
                "key": "[effect_NAME]",
                "name": "效果"
            },
            "comment": null,
            "demo": "effect:custom:doge",
            "description": "默认值为200。到时间效果消失。 设置得尽可能低以减少效果开销。",
            "key": "life",
            "name": "效果存在时间",
            "value_type": "float"
        },
        {
            "Section": {
                "key": "[effect_NAME]",
                "name": "效果"
            },
            "comment": null,
            "demo": "lifeRandom: 12",
            "description": "效果存在时间的随机范围。",
            "key": "lifeRandom",
            "name": "效果存在时间随机值",
            "value_type": "float"
        },
        {
            "Section": {
                "key": "[effect_NAME]",
                "name": "效果"
            },
            "comment": null,
            "demo": "alsoEmitEffectsOnDeath:shibadie",
            "description": "在生命耗尽的时候创造这些效果。",
            "key": "alsoEmitEffectsOnDeath",
            "name": "死亡时创建效果",
            "value_type": "effect"
        },
        {
            "Section": {
                "key": "[effect_NAME]",
                "name": "效果"
            },
            "comment": null,
            "demo": "alsoEmitEffects:custom:doge2",
            "description": "创建时创建更多效果，对于多效果很有用。 注意：创建的效果上的其他“ alsoEmitEffects”将被忽略，禁止套娃。",
            "key": "alsoEmitEffects",
            "name": "也创造效果",
            "value_type": "effect"
        },
        {
            "Section": {
                "key": "[effect_NAME]",
                "name": "效果"
            },
            "comment": null,
            "demo": "ifSpawnFailsEmitEffects:custom:doge3",
            "description": "如果此效果的“spawnChance”失败，则产生这些效果。",
            "key": "ifSpawnFailsEmitEffects",
            "name": "如果失败则创建效果",
            "value_type": "effect"
        },
        {
            "Section": {
                "key": "[effect_NAME]",
                "name": "效果"
            },
            "comment": null,
            "demo": "alsoPlaySound:ao.ogg",
            "description": "播放音效，填文件名或内置。",
            "key": "alsoPlaySound",
            "name": "也播放音效",
            "value_type": "sound"
        },
        {
            "Section": {
                "key": "[effect_NAME]",
                "name": "效果"
            },
            "comment": null,
            "demo": "createWhenOffscreen:true",
            "description": "允许在画面之外产生此效果，默认为false。",
            "key": "createWhenOffscreen",
            "name": "可创建于画面之外",
            "value_type": "bool"
        },
        {
            "Section": {
                "key": "[effect_NAME]",
                "name": "效果"
            },
            "comment": null,
            "demo": "createWhenZoomedOut:true",
            "description": "允许缩小时产生此效果，默认值为true",
            "key": "createWhenZoomedOut",
            "name": "缩小时可产生效果",
            "value_type": "bool"
        },
        {
            "Section": {
                "key": "[effect_NAME]",
                "name": "效果"
            },
            "comment": null,
            "demo": "createWhenOverLiquid:true",
            "description": "允许在液体上方产生此效果，默认值为true",
            "key": "createWhenOverLiquid",
            "name": "创建于液体上",
            "value_type": "bool"
        },
        {
            "Section": {
                "key": "[effect_NAME]",
                "name": "效果"
            },
            "comment": null,
            "demo": "createWhenOverLand:true",
            "description": "允许在陆地上方产生此效果，默认值为true",
            "key": "createWhenOverLand",
            "name": "创建于陆地上",
            "value_type": "bool"
        },
        {
            "Section": {
                "key": "[effect_NAME]",
                "name": "效果"
            },
            "comment": null,
            "demo": "spawnChance:0.9",
            "description": "默认值1.如果小于1，则效果随机被创建",
            "key": "spawnChance",
            "name": "产生几率",
            "value_type": "float"
        },
        {
            "Section": {
                "key": "[effect_NAME]",
                "name": "效果"
            },
            "comment": null,
            "demo": "showInFog:true",
            "description": "默认为false",
            "key": "showInFog",
            "name": "在雾中显示",
            "value_type": "bool"
        },
        {
            "Section": {
                "key": "[effect_NAME]",
                "name": "效果"
            },
            "comment": null,
            "demo": "delayedStartTimer:10",
            "description": "等待这么久再播放此动画，单位为帧。",
            "key": "delayedStartTimer",
            "name": "延迟创建",
            "value_type": "float"
        },
        {
            "Section": {
                "key": "[effect_NAME]",
                "name": "效果"
            },
            "comment": null,
            "demo": "delayedStartTimerRandom:10",
            "description": "等待时间随机变化",
            "key": "delayedStartTimerRandom",
            "name": "延迟创建随机时间",
            "value_type": "float"
        },
        {
            "Section": {
                "key": "[effect_NAME]",
                "name": "效果"
            },
            "comment": null,
            "demo": "liveAfterAttachedDies:true",
            "description": "目标死后动画继续存活,使用AttachedToUnit时默认为false.",
            "key": "liveAfterAttachedDies",
            "name": "目标死后存活",
            "value_type": "bool"
        },
        {
            "Section": {
                "key": "[effect_NAME]",
                "name": "效果"
            },
            "comment": null,
            "demo": "priority:low",
            "description": "默认为高，一次显示太多效果时依据重要程度丢弃不重要的以用于创建新的。verylow/low/high/veryhigh/critical(很低，低，高，很高，至关重要)",
            "key": "priority",
            "name": "优先级",
            "value_type": "string"
        },
        {
            "Section": {
                "key": "[effect_NAME]",
                "name": "效果"
            },
            "comment": "移动",
            "demo": "attachedToUnit:true",
            "description": "此效果产生时吸附到目标单位或抛射物。将与之一起移动。",
            "key": "attachedToUnit",
            "name": "附着在单位上",
            "value_type": "bool"
        },
        {
            "Section": {
                "key": "[effect_NAME]",
                "name": "效果"
            },
            "comment": "移动",
            "demo": "alwayStartDirAtZero:true",
            "description": "忽略附属单位或者产者的角度。",
            "key": "alwayStartDirAtZero",
            "name": "初始角度总是为零",
            "value_type": "bool"
        },
        {
            "Section": {
                "key": "[effect_NAME]",
                "name": "效果"
            },
            "comment": "移动",
            "demo": "atmospheric:true",
            "description": "添加阻力使此效果减慢速度，并添加随机移动。用于模拟尾焰。",
            "key": "atmospheric",
            "name": "空气效果",
            "value_type": "bool"
        },
        {
            "Section": {
                "key": "[effect_NAME]",
                "name": "效果"
            },
            "comment": "移动",
            "demo": "physics:true",
            "description": "撞击地面时反弹。需要高度才能生效。",
            "key": "physics",
            "name": "物理效果",
            "value_type": "bool"
        },
        {
            "Section": {
                "key": "[effect_NAME]",
                "name": "效果"
            },
            "comment": "移动",
            "demo": "physicsGravity:1",
            "description": "默认为1。physics:true时的垂直方向加速度。",
            "key": "physicsGravity",
            "name": "物理重力",
            "value_type": "float"
        },
        {
            "Section": {
                "key": "[effect_NAME]",
                "name": "效果"
            },
            "comment": "移动",
            "demo": "xOffsetRelative:0",
            "description": "效果起始时相对于炮塔，炮弹，单位的偏移的方向位置。正数向右，负数向左。",
            "key": "xOffsetRelative",
            "name": "X相对偏移量",
            "value_type": "float"
        },
        {
            "Section": {
                "key": "[effect_NAME]",
                "name": "效果"
            },
            "comment": "移动",
            "demo": "yOffsetRelative:-25",
            "description": "效果起始时相对于炮塔，炮弹，单位的偏移的方向位置。正数向前，负数向后。",
            "key": "yOffsetRelative",
            "name": "Y相对偏移量",
            "value_type": "float"
        },
        {
            "Section": {
                "key": "[effect_NAME]",
                "name": "效果"
            },
            "comment": "移动",
            "demo": "xOffsetRelativeRandom:1",
            "description": "X相对目标随机偏移量。随机增加或减少此值，用于偏移像素。",
            "key": "xOffsetRelativeRandom",
            "name": "X相对随机偏移量",
            "value_type": "float"
        },
        {
            "Section": {
                "key": "[effect_NAME]",
                "name": "效果"
            },
            "comment": "移动",
            "demo": "yOffsetRelativeRandom:10",
            "description": "Y相对目标随机偏移量。随机增加或减少此值，用于偏移像素。",
            "key": "yOffsetRelativeRandom",
            "name": "Y相对随机偏移量",
            "value_type": "float"
        },
        {
            "Section": {
                "key": "[effect_NAME]",
                "name": "效果"
            },
            "comment": "移动",
            "demo": "xOffsetAbsolute:0",
            "description": "Absolute类为绝对偏移，它不像Relative那样考虑单位的方向。比如设置x向速度为1，绝对偏移则始终向右移动，相对偏移可以向任意方向移动。",
            "key": "xOffsetAbsolute",
            "name": "X绝对偏移量",
            "value_type": "float"
        },
        {
            "Section": {
                "key": "[effect_NAME]",
                "name": "效果"
            },
            "comment": "移动",
            "demo": "yOffsetAbsolute:10",
            "description": "按位置偏移起动效果，忽略附加炮塔单位等的方向。",
            "key": "yOffsetAbsolute",
            "name": "Y绝对偏移量",
            "value_type": "float"
        },
        {
            "Section": {
                "key": "[effect_NAME]",
                "name": "效果"
            },
            "comment": "移动",
            "demo": "xOffsetAbsoluteRandom:2",
            "description": "随机增加或减少此值，用于偏移像素。",
            "key": "xOffsetAbsoluteRandom",
            "name": "X绝对随机偏移量",
            "value_type": "float"
        },
        {
            "Section": {
                "key": "[effect_NAME]",
                "name": "效果"
            },
            "comment": "移动",
            "demo": "yOffsetAbsoluteRandom:2",
            "description": "随机增加或减少此值，用于偏移像素。",
            "key": "yOffsetAbsoluteRandom",
            "name": "Y绝对随机偏移量",
            "value_type": "float"
        },
        {
            "Section": {
                "key": "[effect_NAME]",
                "name": "效果"
            },
            "comment": "移动",
            "demo": "xSpeedRelative:1",
            "description": "X轴相对于目标的移动速度。，正数向右，负数向左。",
            "key": "xSpeedRelative",
            "name": "X相对速度",
            "value_type": "float"
        },
        {
            "Section": {
                "key": "[effect_NAME]",
                "name": "效果"
            },
            "comment": "移动",
            "demo": "ySpeedRelative:1",
            "description": "Y轴相对于目标的移动速度。正数向前，负数向后。",
            "key": "ySpeedRelative",
            "name": "Y相对速度",
            "value_type": "float"
        },
        {
            "Section": {
                "key": "[effect_NAME]",
                "name": "效果"
            },
            "comment": "移动",
            "demo": "xSpeedRelativeRandom:0.1",
            "description": "随机增加或减少此值，用于偏移像素。",
            "key": "xSpeedRelativeRandom",
            "name": "X随机相对速度",
            "value_type": "float"
        },
        {
            "Section": {
                "key": "[effect_NAME]",
                "name": "效果"
            },
            "comment": "移动",
            "demo": "ySpeedRelativeRandom:0.1",
            "description": "随机增加或减少此值，用于偏移像素。",
            "key": "ySpeedRelativeRandom",
            "name": "Y随机相对速度",
            "value_type": "float"
        },
        {
            "Section": {
                "key": "[effect_NAME]",
                "name": "效果"
            },
            "comment": "移动",
            "demo": "xSpeedAbsolute:0.1",
            "description": "X轴相对于起点的绝对移动速度。",
            "key": "xSpeedAbsolute",
            "name": "X绝对速度",
            "value_type": "float"
        },
        {
            "Section": {
                "key": "[effect_NAME]",
                "name": "效果"
            },
            "comment": "移动",
            "demo": "ySpeedAbsolute:0.6",
            "description": "Y轴相对于起点的绝对移动速度。",
            "key": "ySpeedAbsolute",
            "name": "Y绝对速度",
            "value_type": "float"
        },
        {
            "Section": {
                "key": "[effect_NAME]",
                "name": "效果"
            },
            "comment": "移动",
            "demo": "xSpeedAbsoluteRandom:0.1",
            "description": "按此值随机更改初始值。",
            "key": "xSpeedAbsoluteRandom",
            "name": "X随机绝对速度",
            "value_type": "float"
        },
        {
            "Section": {
                "key": "[effect_NAME]",
                "name": "效果"
            },
            "comment": "移动",
            "demo": "ySpeedAbsoluteRandom:0.4",
            "description": "按此值随机更改初始值。",
            "key": "ySpeedAbsoluteRandom",
            "name": "Y随机绝对速度",
            "value_type": "float"
        },
        {
            "Section": {
                "key": "[effect_NAME]",
                "name": "效果"
            },
            "comment": "移动",
            "demo": "hOffset:5",
            "description": "距目标的高度偏移。正数向上，负数向下。",
            "key": "hOffset",
            "name": "高度偏移",
            "value_type": "float"
        },
        {
            "Section": {
                "key": "[effect_NAME]",
                "name": "效果"
            },
            "comment": "移动",
            "demo": "hOffsetRandom:3",
            "description": "按此值随机更改初始值。",
            "key": "hOffsetRandom",
            "name": "随机高度偏移",
            "value_type": "float"
        },
        {
            "Section": {
                "key": "[effect_NAME]",
                "name": "效果"
            },
            "comment": "移动",
            "demo": "hSpeed:1",
            "description": "高度移动速度。正数向上，负数向下。",
            "key": "hSpeed",
            "name": "高度速度",
            "value_type": "float"
        },
        {
            "Section": {
                "key": "[effect_NAME]",
                "name": "效果"
            },
            "comment": "移动",
            "demo": "hSpeedRandom:0.1",
            "description": "按此值随机更改初始值。",
            "key": "hSpeedRandom",
            "name": "随机高度速度偏移",
            "value_type": "float"
        },
        {
            "Section": {
                "key": "[effect_NAME]",
                "name": "效果"
            },
            "comment": "移动",
            "demo": "dirOffset:180",
            "description": "角度偏移，修改初始朝向。注意,0度可能存在朝向问题。",
            "key": "dirOffset",
            "name": "角度偏移",
            "value_type": "float"
        },
        {
            "Section": {
                "key": "[effect_NAME]",
                "name": "效果"
            },
            "comment": "移动",
            "demo": "dirOffsetRandom:180",
            "description": "按此值随机更改偏移角度。",
            "key": "dirOffsetRandom",
            "name": "随机角度偏移量",
            "value_type": "float"
        },
        {
            "Section": {
                "key": "[effect_NAME]",
                "name": "效果"
            },
            "comment": "移动",
            "demo": "dirSpeed:5",
            "description": "修改效果的旋转速度。",
            "key": "dirSpeed",
            "name": "转速",
            "value_type": "float"
        },
        {
            "Section": {
                "key": "[effect_NAME]",
                "name": "效果"
            },
            "comment": "移动",
            "demo": "dirSpeedRandom:2",
            "description": "按此值随机更改旋转速度。",
            "key": "dirSpeedRandom",
            "name": "随机转速",
            "value_type": "float"
        },
        {
            "Section": {
                "key": "[effect_NAME]",
                "name": "效果"
            },
            "comment": "移动",
            "demo": "pivotOffset: 20",
            "description": "像 dirOffset，但也旋转所有的相对键，并产生子效果",
            "key": "pivotOffset",
            "name": "枢轴偏移",
            "value_type": "float"
        },
        {
            "Section": {
                "key": "[effect_NAME]",
                "name": "效果"
            },
            "comment": "移动",
            "demo": "pivotOffsetRandom: 34",
            "description": "在指定值的 正负区间随机 如(-34, 34)",
            "key": "pivotOffsetRandom",
            "name": "枢轴偏移随机",
            "value_type": "float"
        },
        {
            "Section": {
                "key": "[effect_NAME]",
                "name": "效果"
            },
            "comment": "图形",
            "demo": "frameIndex:1",
            "description": "使用内置效果时所取用的帧编号，0取第一帧。",
            "key": "frameIndex",
            "name": "帧索引",
            "value_type": "int"
        },
        {
            "Section": {
                "key": "[effect_NAME]",
                "name": "效果"
            },
            "comment": "图形",
            "demo": "frameIndexRandom:1",
            "description": "随机增减索引值，用于随机使用同组内不同的图像。",
            "key": "frameIndexRandom",
            "name": "帧随机",
            "value_type": "int"
        },
        {
            "Section": {
                "key": "[effect_NAME]",
                "name": "效果"
            },
            "comment": "图形",
            "demo": "stripIndex:shockwave",
            "description": "要使用的内置图像集。\r\n不能与自定义图像一起使用。\r\n如effects 效果1对应res内文件effects.png，以此类推。\r\nexplode_big爆炸效果图、\r\nlight_50闪光贴图、\r\nflame开火图火焰、\r\ndust灰尘贴图、\r\nsmoke_black黑烟、\r\nshockwave冲击波、\r\nfire火焰图、\r\nlava_bubble岩浆泡、\r\neffects2效果2、\r\nplasma_shot等离子、\r\nshockwave_large大冲击波、\r\nexplode_bits碎片、\r\nexplode_big2大爆炸、\r\nexplode_bits_bug虫碎片、\r\nprojectiles抛射物、\r\nprojectiles2抛射物2、\r\neffects3效果3",
            "key": "stripIndex",
            "name": "图像集",
            "value_type": "string"
        },
        {
            "Section": {
                "key": "[effect_NAME]",
                "name": "效果"
            },
            "comment": "图形",
            "demo": "Image:shibaing.png",
            "description": "要使用的自定义图像文件。不能与stripIndex一起使用。",
            "key": "Image",
            "name": "图像",
            "value_type": "image"
        },
        {
            "Section": {
                "key": "[effect_NAME]",
                "name": "效果"
            },
            "comment": "图形",
            "demo": "imageShadow:SHADOW:shibaing.png",
            "description": "用于自定义阴影的图像",
            "key": "imageShadow",
            "name": "阴影图像",
            "value_type": "image"
        },
        {
            "Section": {
                "key": "[effect_NAME]",
                "name": "效果"
            },
            "comment": "图形",
            "demo": "scaleTo:2",
            "description": "效果结束时缩放倍数。",
            "key": "scaleTo",
            "name": "结束缩放倍数",
            "value_type": "float"
        },
        {
            "Section": {
                "key": "[effect_NAME]",
                "name": "效果"
            },
            "comment": "图形",
            "demo": "scaleFrom:0.5",
            "description": "效果初始时缩放倍数，用于效果从小到大缩放，或者反向缩放。",
            "key": "scaleFrom",
            "name": "初始缩放倍数",
            "value_type": "float"
        },
        {
            "Section": {
                "key": "[effect_NAME]",
                "name": "效果"
            },
            "comment": "图形",
            "demo": "color:#FFFF0000",
            "description": "填16进制颜色值，给图像上叠加颜色。一般建议图像使用灰度图，然后叠加颜色。注意彩色图是无法叠加白色变白的。",
            "key": "color",
            "name": "颜色",
            "value_type": "color"
        },
        {
            "Section": {
                "key": "[effect_NAME]",
                "name": "效果"
            },
            "comment": "图形",
            "demo": "teamColorRatio:0.5",
            "description": "填0-1在图像上叠加阵营色，1为完全为阵营色。",
            "key": "teamColorRatio",
            "name": "队伍色相",
            "value_type": "float"
        },
        {
            "Section": {
                "key": "[effect_NAME]",
                "name": "效果"
            },
            "comment": "图形",
            "demo": "drawUnderUnits:true",
            "description": "将此效果绘制在单位下方。",
            "key": "drawUnderUnits",
            "name": "绘制在单位下方",
            "value_type": "bool"
        },
        {
            "Section": {
                "key": "[effect_NAME]",
                "name": "效果"
            },
            "comment": "图形",
            "demo": "fadeInTime:15",
            "description": "设置淡入效果时间，从透明到不透明。透明度值从0%到100%。",
            "key": "fadeInTime",
            "name": "淡入时间",
            "value_type": "float"
        },
        {
            "Section": {
                "key": "[effect_NAME]",
                "name": "效果"
            },
            "comment": "图形",
            "demo": "fadeOut:true",
            "description": "设置淡入效果时间，透明度从100%淡出到%0。把alpha设置为高于1可以延长淡出。",
            "key": "fadeOut",
            "name": "淡出",
            "value_type": "bool"
        },
        {
            "Section": {
                "key": "[effect_NAME]",
                "name": "效果"
            },
            "comment": "图形",
            "demo": "alpha:1",
            "description": "介于0-1之间。可以设置为大于1以延迟淡出效果",
            "key": "alpha",
            "name": "透明度",
            "value_type": "float"
        },
        {
            "Section": {
                "key": "[effect_NAME]",
                "name": "效果"
            },
            "comment": "图形",
            "demo": "shadow:true",
            "description": "true时绘制阴影。如果使用imageShadow则强制为true",
            "key": "shadow",
            "name": "阴影",
            "value_type": "bool"
        },
        {
            "Section": {
                "key": "[effect_NAME]",
                "name": "效果"
            },
            "comment": "动画",
            "demo": "total_frames:15",
            "description": "动画的总帧数，与图像(image)或frameIndex一起使用。",
            "key": "total_frames",
            "name": "动画总帧数",
            "value_type": "int"
        },
        {
            "Section": {
                "key": "[effect_NAME]",
                "name": "效果"
            },
            "comment": "动画",
            "demo": "animateFrameStart:0",
            "description": "动画从哪一帧开始,第一帧编号为0",
            "key": "animateFrameStart",
            "name": "动画开始帧",
            "value_type": "int"
        },
        {
            "Section": {
                "key": "[effect_NAME]",
                "name": "效果"
            },
            "comment": "动画",
            "demo": "animateFrameEnd:14",
            "description": "动画在哪一帧结束。",
            "key": "animateFrameEnd",
            "name": "动画结束帧",
            "value_type": "int"
        },
        {
            "Section": {
                "key": "[effect_NAME]",
                "name": "效果"
            },
            "comment": "动画",
            "demo": "animateFramePingPong:true",
            "description": "动画正序播放完毕后再倒序播放一次。",
            "key": "animateFramePingPong",
            "name": "动画帧重放",
            "value_type": "int"
        },
        {
            "Section": {
                "key": "[effect_NAME]",
                "name": "效果"
            },
            "comment": "动画",
            "demo": "animateFrameSpeed:0.2",
            "description": "动画播放速度，单位位游戏帧，一般动画帧数也不高，所以设置一般为0.x",
            "key": "animateFrameSpeed",
            "name": "动画帧速度",
            "value_type": "string"
        },
        {
            "Section": {
                "key": "[effect_NAME]",
                "name": "效果"
            },
            "comment": "动画",
            "demo": "animateFrameSpeedRandom0.1",
            "description": "按此值随机更改动画速度。",
            "key": "animateFrameSpeedRandom",
            "name": "动画帧随机速度",
            "value_type": "string"
        },
        {
            "Section": {
                "key": "[effect_NAME]",
                "name": "效果"
            },
            "comment": "动画",
            "demo": "animateFrameLooping:false",
            "description": "默认false。当为false时,效果被移除时，动画结束",
            "key": "animateFrameLooping",
            "name": "动画帧循环",
            "value_type": "bool"
        },
        {
            "Section": {
                "key": "[animation_NAME]",
                "name": "动画"
            },
            "comment": null,
            "demo": "onActions : Unknown\r\nonActions : queuedUnits",
            "description": "动画触发条件：移动、攻击、闲置、在建造中、建造中并将动画拉伸至建造时长、生产中、未知\r\nmove, attack, idle, underConstruction, underConstructionWithLinkedBuiltTime, queuedUnits、Unknown",
            "key": "onActions",
            "name": "动画条件",
            "value_type": "string"
        },
        {
            "Section": {
                "key": "[animation_NAME]",
                "name": "动画"
            },
            "comment": null,
            "demo": "onActionsQueuedUnitPlayAt :1",
            "description": "当使用onAction:queueedUnits时，动画开始之前需要达到值，设置为0-1之间",
            "key": "onActionsQueuedUnitPlayAt",
            "name": "在队列中有单位播放",
            "value_type": "float"
        },
        {
            "Section": {
                "key": "[animation_NAME]",
                "name": "动画"
            },
            "comment": null,
            "demo": "blendIn : time",
            "description": "与上一个动画融合时间。",
            "key": "blendIn",
            "name": "融入时间",
            "value_type": "string"
        },
        {
            "Section": {
                "key": "[animation_NAME]",
                "name": "动画"
            },
            "comment": null,
            "demo": "blendOut : time",
            "description": "与下一个动画融合时间。",
            "key": "blendOut",
            "name": "切换融合",
            "value_type": "string"
        },
        {
            "Section": {
                "key": "[animation_NAME]",
                "name": "动画"
            },
            "comment": null,
            "demo": "pingPong:true",
            "description": "结束后反向播放动画，它一般用来做生物的呼吸效果。",
            "key": "pingPong",
            "name": "缩放效果",
            "value_type": "bool"
        },
        {
            "Section": {
                "key": "[animation_NAME]",
                "name": "动画"
            },
            "comment": null,
            "demo": "KeyframeTimeScale : float",
            "description": "缩放所有关键帧时间，这有助于在不更改所有内容的情况下更快/更慢地制作动画",
            "key": "KeyframeTimeScale",
            "name": "帧时长缩放",
            "value_type": "float"
        },
        {
            "Section": {
                "key": "[animation_NAME]",
                "name": "动画"
            },
            "comment": "关键帧-根据需要创建多个",
            "demo": "arm1_5s: {x: 5, dir: 90 }",
            "description": "添加一个关键帧。用来创建多个动作的动画。",
            "key": "arm#_[time]",
            "name": "胳膊关键帧",
            "value_type": "string"
        },
        {
            "Section": {
                "key": "[animation_NAME]",
                "name": "动画"
            },
            "comment": "关键帧-根据需要创建多个",
            "demo": "leg1_5s: {x: 5, dir: 90 }",
            "description": "添加一个关键帧。用来创建多个动作的动画。",
            "key": "leg#_[time]",
            "name": "腿关键帧",
            "value_type": "string"
        },
        {
            "Section": {
                "key": "[animation_NAME]",
                "name": "动画"
            },
            "comment": "关键帧-根据需要创建多个",
            "demo": "body_4s: {frame: 4, scale: 0.5}",
            "description": "随时为主体添加关键帧。身体仅允许使用frame和scale",
            "key": "body_[time]",
            "name": "主体关键帧",
            "value_type": "string"
        },
        {
            "Section": {
                "key": "[animation_NAME]",
                "name": "动画"
            },
            "comment": "关键帧-根据需要创建多个",
            "demo": "eg: effect_2s: {x: 0,y: 5, explode}",
            "description": "在播放动画时产生效果",
            "key": "effect_[time]",
            "name": "效果关键帧",
            "value_type": "string"
        },
        {
            "Section": {
                "key": "[animation_NAME]",
                "name": "动画"
            },
            "comment": "多向",
            "demo": "direction_units:45",
            "description": "播放此动画时，覆盖[graphics] animation_direction_units。多向动画度数\t45个代表8个方向，90个代表4个方向的动画。",
            "key": "direction_units",
            "name": "多向动画度数",
            "value_type": "float"
        },
        {
            "Section": {
                "key": "[animation_NAME]",
                "name": "动画"
            },
            "comment": "多向",
            "demo": "direction_strideX:0",
            "description": "覆盖[graphics] animation_direction_strideX，动画帧取值在方向改变时偏移。一般填0",
            "key": "direction_strideX",
            "name": "多向动画x向",
            "value_type": "int"
        },
        {
            "Section": {
                "key": "[animation_NAME]",
                "name": "动画"
            },
            "comment": "多向",
            "demo": "direction_strideY:1",
            "description": "覆盖[graphics] animation_direction_strideY，动画帧在方向改变Y轴偏移偏移。与frame_height一起使用。一般填1",
            "key": "direction_strideY",
            "name": "多向动画y向",
            "value_type": "int"
        },
        {
            "Section": {
                "key": "[animation_NAME]",
                "name": "动画"
            },
            "comment": "多向",
            "demo": "direction_starting:90",
            "description": "覆盖[graphics] animation_direction_starting，第一帧的方向，取决于你的素材。",
            "key": "direction_starting",
            "name": "多向动画朝向",
            "value_type": "float"
        },
        {
            "Section": {
                "key": "[animation_NAME]",
                "name": "动画"
            },
            "comment": "多向",
            "demo": "animation_move_start:1",
            "description": "开始图像框。不推荐使用，用于类似此形式的动画。animation_TYPE_pingPong",
            "key": "start  int",
            "name": "开始",
            "value_type": "int"
        },
        {
            "Section": {
                "key": "[animation_NAME]",
                "name": "动画"
            },
            "comment": "多向",
            "demo": "end : ",
            "description": "结束图像帧。不推荐使用",
            "key": "end  int",
            "name": "结束",
            "value_type": "int"
        },
        {
            "Section": {
                "key": "[animation_NAME]",
                "name": "动画"
            },
            "comment": "多向",
            "demo": "scale_start : ",
            "description": "开始规模。不推荐使用，而是使用主体关键帧。",
            "key": "scale_start  float",
            "name": "缩放开始",
            "value_type": "float"
        },
        {
            "Section": {
                "key": "[animation_NAME]",
                "name": "动画"
            },
            "comment": "多向",
            "demo": "scale_end : ",
            "description": "最终规模。不推荐使用，而是使用主体关键帧。",
            "key": "scale_end  float",
            "name": "缩放结束",
            "value_type": "float"
        },
        {
            "Section": {
                "key": "[animation_NAME]",
                "name": "动画"
            },
            "comment": "多向",
            "demo": "speed : ",
            "description": "速度越小越快。仅效果开始，结束，scale_start，scale_end",
            "key": "speed  float",
            "name": "速度",
            "value_type": "float"
        },
        {
            "Section": {
                "key": "[action_NAME] / [hiddenAction_NAME]",
                "name": "行动/动作/触发"
            },
            "comment": null,
            "demo": "text:柴犬",
            "description": "界面中显示的文字",
            "key": "text",
            "name": "文本",
            "value_type": "string"
        },
        {
            "Section": {
                "key": "[action_NAME] / [hiddenAction_NAME]",
                "name": "行动/动作/触发"
            },
            "comment": null,
            "demo": "text: [ textPostFix: ] \r\ntextAddUnitName: unitRef self.attachment(slot=\"${slotId}\")",
            "description": "显示为后缀的文本，与textAddUnitName一起用于创建文本UI",
            "key": "textPostFix",
            "name": "文本动态更改",
            "value_type": "string"
        },
        {
            "Section": {
                "key": "[action_NAME] / [hiddenAction_NAME]",
                "name": "行动/动作/触发"
            },
            "comment": null,
            "demo": "text_zh:柴犬",
            "description": "界面中显示的文字，多语言",
            "key": "text_{LANG}",
            "name": "文字多语言",
            "value_type": "string"
        },
        {
            "Section": {
                "key": "[action_NAME] / [hiddenAction_NAME]",
                "name": "行动/动作/触发"
            },
            "comment": null,
            "demo": "description:柴犬翻译",
            "description": "选中时显示的文本，用于解释其用途。",
            "key": "description",
            "name": "描述",
            "value_type": "string"
        },
        {
            "Section": {
                "key": "[action_NAME] / [hiddenAction_NAME]",
                "name": "行动/动作/触发"
            },
            "comment": null,
            "demo": "description_en:shibainu",
            "description": "描述多语言。",
            "key": "description_{LANG}",
            "name": "描述",
            "value_type": "string"
        },
        {
            "Section": {
                "key": "[action_NAME] / [hiddenAction_NAME]",
                "name": "行动/动作/触发"
            },
            "comment": null,
            "demo": "displayType:infoOnly",
            "description": "行动的显示类型正常模式为none，无(绿色)、集结(白色R)、升级(蓝色U)、单位队列（绿色）、建筑(绿色)、行为(蓝色)、仅信息(灰色)、无框信息\r\nnone, rally, upgrade, queueUnit, building, action, infoOnly, infoOnlyNoBox",
            "key": "displayType",
            "name": "显示类型",
            "value_type": "string"
        },
        {
            "Section": {
                "key": "[action_NAME] / [hiddenAction_NAME]",
                "name": "行动/动作/触发"
            },
            "comment": null,
            "demo": "displayRemainingStockpile:true",
            "description": "显示剩余库存,显示为根据资源计算可以触发操作的次数。",
            "key": "displayRemainingStockpile",
            "name": "显示剩余库存",
            "value_type": "bool"
        },
        {
            "Section": {
                "key": "[action_NAME] / [hiddenAction_NAME]",
                "name": "行动/动作/触发"
            },
            "comment": null,
            "demo": "pos:0",
            "description": "此动作在用户界面排序。",
            "key": "pos",
            "name": "位置",
            "value_type": "float"
        },
        {
            "Section": {
                "key": "[action_NAME] / [hiddenAction_NAME]",
                "name": "行动/动作/触发"
            },
            "comment": null,
            "demo": "iconImage:shiba.png",
            "description": "使用图像作为此动作图标。",
            "key": "iconImage",
            "name": "图标",
            "value_type": "image"
        },
        {
            "Section": {
                "key": "[action_NAME] / [hiddenAction_NAME]",
                "name": "行动/动作/触发"
            },
            "comment": null,
            "demo": "iconExtraImage:shibaUPD.png",
            "description": "使用图像作为此动作图标。和上一个一致,但显示更靠上。绘制在图标图像上方。对升级图标等有用",
            "key": "iconExtraImage",
            "name": "额外图标图像",
            "value_type": "image"
        },
        {
            "Section": {
                "key": "[action_NAME] / [hiddenAction_NAME]",
                "name": "行动/动作/触发"
            },
            "comment": null,
            "demo": "iconExtraColor:#FFAAAAAA",
            "description": "将图标叠加上额外的颜色。默认为#64FFFFFF",
            "key": "iconExtraColor",
            "name": "额外图标颜色",
            "value_type": "color"
        },
        {
            "Section": {
                "key": "[action_NAME] / [hiddenAction_NAME]",
                "name": "行动/动作/触发"
            },
            "comment": null,
            "demo": "iconExtraIsVisible:if self.hasFlag(id=${slotid})",
            "description": "设置图标什么时候可显示。",
            "key": "iconExtraIsVisible",
            "name": "额外图标显示条件",
            "value_type": "logic"
        },
        {
            "Section": {
                "key": "[action_NAME] / [hiddenAction_NAME]",
                "name": "行动/动作/触发"
            },
            "comment": null,
            "demo": "unitShownInUI: unitRef self.transporting(slot=0)\r\nunitShownInUI:shibainu",
            "description": "使用此单位作为动作图标。",
            "key": "unitShownInUI",
            "name": "UI中显示的单位",
            "value_type": "unit"
        },
        {
            "Section": {
                "key": "[action_NAME] / [hiddenAction_NAME]",
                "name": "行动/动作/触发"
            },
            "comment": null,
            "demo": "setBuilt:1",
            "description": "默认为1。填0-1之间的数字，将指定单位建造完成度。比如填0.5，执行完操作后单位自身建造完成度就成了50%",
            "key": "setBuilt",
            "name": "设置完成度",
            "value_type": "float"
        },
        {
            "Section": {
                "key": "[action_NAME] / [hiddenAction_NAME]",
                "name": "行动/动作/触发"
            },
            "comment": null,
            "demo": "guiBuildUnit:turret_artillery",
            "description": "将action图标和鼠标指针改为指定单位，这就像你用建造者去造建筑，会受地形影响，可为action或路径点提供坐标。",
            "key": "guiBuildUnit",
            "name": "界面显示单位",
            "value_type": "unit"
        },
        {
            "Section": {
                "key": "[action_NAME] / [hiddenAction_NAME]",
                "name": "行动/动作/触发"
            },
            "comment": "单位参考-从已经存在的单位动态的组成部分，有用的/也可以被敌人看到",
            "demo": "textAddUnitName:$(section.convertTo)",
            "description": "从指定单位添加名称。",
            "key": "textAddUnitName",
            "name": "从单元添加名称",
            "value_type": "string"
        },
        {
            "Section": {
                "key": "[action_NAME] / [hiddenAction_NAME]",
                "name": "行动/动作/触发"
            },
            "comment": "单位参考-从已经存在的单位动态的组成部分，有用的/也可以被敌人看到",
            "demo": "descriptionAddFromUnit:unitRef self.attachment(slot=\"unitSlot${slotId}\")",
            "description": "从指定单位添加单位描述。",
            "key": "descriptionAddFromUnit",
            "name": "从单元添加描述",
            "value_type": "string"
        },
        {
            "Section": {
                "key": "[action_NAME] / [hiddenAction_NAME]",
                "name": "行动/动作/触发"
            },
            "comment": "单位参考-从已经存在的单位动态的组成部分，有用的/也可以被敌人看到",
            "demo": "descriptionAddUnitStats:unitRef self.attachment(slot=\"unitSlot${slotId}\")",
            "description": "从指定单位添加详细信息描述，比如攻击力，攻击范围。",
            "key": "descriptionAddUnitStats",
            "name": "从单元添加属性",
            "value_type": "string"
        },
        {
            "Section": {
                "key": "[action_NAME] / [hiddenAction_NAME]",
                "name": "行动/动作/触发"
            },
            "comment": "单位参考-从已经存在的单位动态的组成部分，有用的/也可以被敌人看到",
            "demo": "unitShownInUIWithHpBar:true",
            "description": "在ui中显示单位血条。默认true,仅当unitShownInUI是unitRef时使用",
            "key": "unitShownInUIWithHpBar",
            "name": "单元在UI显示Hp条",
            "value_type": "bool"
        },
        {
            "Section": {
                "key": "[action_NAME] / [hiddenAction_NAME]",
                "name": "行动/动作/触发"
            },
            "comment": "单位参考-从已经存在的单位动态的组成部分，有用的/也可以被敌人看到",
            "demo": "unitShownInUIWithProgressBar:true",
            "description": "在ui中显示单位进度条。默认true,仅当unitShownInUI是unitRef时使用。如果激活，则替换HP bar",
            "key": "unitShownInUIWithProgressBar",
            "name": "单元在UI显示进度条",
            "value_type": "bool"
        },
        {
            "Section": {
                "key": "[action_NAME] / [hiddenAction_NAME]",
                "name": "行动/动作/触发"
            },
            "comment": "在UI中显示/ AI的要求",
            "demo": "price: credits=5, energy=5, hp=100, shield=5, ammo=1",
            "description": "此行为需要的价格，可以是多种资源或自定义资源。如果不满足则行为不可用。如果没设定资源类型则默认为资金。如果价格为0，AI可能很少甚至不会使用。",
            "key": "price",
            "name": "价格",
            "value_type": "res ref"
        },
        {
            "Section": {
                "key": "[action_NAME] / [hiddenAction_NAME]",
                "name": "行动/动作/触发"
            },
            "comment": "在UI中显示/ AI的要求",
            "demo": "isActive:true",
            "description": "默认为true。如果为false，则会禁用操作，并在用户界面中以红色显示。",
            "key": "isActive",
            "name": "可用",
            "value_type": "logic"
        },
        {
            "Section": {
                "key": "[action_NAME] / [hiddenAction_NAME]",
                "name": "行动/动作/触发"
            },
            "comment": "在UI中显示/ AI的要求",
            "demo": "isVisible:true",
            "description": "默认为true。如果false则从UI中隐藏并被禁用。",
            "key": "isVisible",
            "name": "可见",
            "value_type": "logic"
        },
        {
            "Section": {
                "key": "[action_NAME] / [hiddenAction_NAME]",
                "name": "行动/动作/触发"
            },
            "comment": "在UI中显示/ AI的要求",
            "demo": "isLocked:true",
            "description": "默认为false。如果true则禁用操作，则会显示一个锁定文本。可用作禁核或者科技树，或是条件限制。",
            "key": "isLocked",
            "name": "锁定",
            "value_type": "logic"
        },
        {
            "Section": {
                "key": "[action_NAME] / [hiddenAction_NAME]",
                "name": "行动/动作/触发"
            },
            "comment": "在UI中显示/ AI的要求",
            "demo": "isLockedMessage:你不够可爱",
            "description": "显示锁定的原因。",
            "key": "isLockedMessage",
            "name": "锁定消息",
            "value_type": "string"
        },
        {
            "Section": {
                "key": "[action_NAME] / [hiddenAction_NAME]",
                "name": "行动/动作/触发"
            },
            "comment": "在UI中显示/ AI的要求",
            "demo": "isLockedAlt:if not self.isFlying()",
            "description": "另一个原因被锁定。用于显示不同的消息。",
            "key": "isLockedAlt",
            "name": "更多锁定",
            "value_type": "logic"
        },
        {
            "Section": {
                "key": "[action_NAME] / [hiddenAction_NAME]",
                "name": "行动/动作/触发"
            },
            "comment": "在UI中显示/ AI的要求",
            "demo": "isLockedAltMessage:上天才给你施展。",
            "description": "显示更多锁定的原因。",
            "key": "isLockedAltMessage",
            "name": "更多锁定消息",
            "value_type": "string"
        },
        {
            "Section": {
                "key": "[action_NAME] / [hiddenAction_NAME]",
                "name": "行动/动作/触发"
            },
            "comment": "在UI中显示/ AI的要求",
            "demo": "isLockedAlt2:if self.isInWater()",
            "description": "另一个原因被锁定。用于显示更多锁定的原因。",
            "key": "isLockedAlt2",
            "name": "更多锁定2",
            "value_type": "logic"
        },
        {
            "Section": {
                "key": "[action_NAME] / [hiddenAction_NAME]",
                "name": "行动/动作/触发"
            },
            "comment": "在UI中显示/ AI的要求",
            "demo": "isLockedAlt2Message:水中自然要划水了~",
            "description": "显示更多锁定的原因。",
            "key": "isLockedAlt2Message",
            "name": "更多锁定消息2",
            "value_type": "string"
        },
        {
            "Section": {
                "key": "[action_NAME] / [hiddenAction_NAME]",
                "name": "行动/动作/触发"
            },
            "comment": "在UI中显示/ AI的要求",
            "demo": "allowMultipleInQueue:true",
            "description": "允许多次点击此行为形成队列，false时则只能点一次，不能累加。",
            "key": "allowMultipleInQueue",
            "name": "允许多个队列",
            "value_type": "bool"
        },
        {
            "Section": {
                "key": "[action_NAME] / [hiddenAction_NAME]",
                "name": "行动/动作/触发"
            },
            "comment": "在UI中显示/ AI的要求",
            "demo": "onlyOneUnitAtATime:true",
            "description": "填true时选中多个同类单位时，只有一个执行此行为。",
            "key": "onlyOneUnitAtATime",
            "name": "一次只有一个单位",
            "value_type": "bool"
        },
        {
            "Section": {
                "key": "[action_NAME] / [hiddenAction_NAME]",
                "name": "行动/动作/触发"
            },
            "comment": "在UI中显示/ AI的要求",
            "demo": "isGuiBlinking:true",
            "description": "此行为在界面中闪烁。",
            "key": "isGuiBlinking",
            "name": "界面闪烁",
            "value_type": "logic"
        },
        {
            "Section": {
                "key": "[action_NAME] / [hiddenAction_NAME]",
                "name": "行动/动作/触发"
            },
            "comment": "在UI中显示/ AI的要求",
            "demo": "alwaysSinglePress",
            "description": "点击就执行，不需要确认。默认false,不需要在手机上确认，使用canPlayerCancel: false和allowMultipleInQueue: false也隐藏队列接口。",
            "key": "alwaysSinglePress",
            "name": "总是按一次",
            "value_type": "bool"
        },
        {
            "Section": {
                "key": "[action_NAME] / [hiddenAction_NAME]",
                "name": "行动/动作/触发"
            },
            "comment": "在UI中显示/ AI的要求",
            "demo": "isAlsoViewableByAllies:false",
            "description": "允许盟友玩家看到这个单位的动作，对显示其他玩家有用(例如导弹数量，收集的物品)",
            "key": "isAlsoViewableByAllies",
            "name": "显示给盟友",
            "value_type": "bool"
        },
        {
            "Section": {
                "key": "[action_NAME] / [hiddenAction_NAME]",
                "name": "行动/动作/触发"
            },
            "comment": "在UI中显示/ AI的要求",
            "demo": "isAlsoViewableByEnemies:false",
            "description": "允许敌方玩家看到这个单位的动作，对显示其他玩家有用(例如导弹数量，收集的物品)",
            "key": "isAlsoViewableByEnemies",
            "name": "显示给敌人",
            "value_type": "bool"
        },
        {
            "Section": {
                "key": "[action_NAME] / [hiddenAction_NAME]",
                "name": "行动/动作/触发"
            },
            "comment": "在UI中显示/ AI的要求",
            "demo": "extraLagHidingInUI:true",
            "description": "用于联机，在UI中立即更新而不需要从服务器确认的等待时间。",
            "key": "extraLagHidingInUI",
            "name": "消除ui额外延迟",
            "value_type": "bool"
        },
        {
            "Section": {
                "key": "[action_NAME] / [hiddenAction_NAME]",
                "name": "行动/动作/触发"
            },
            "comment": "AI",
            "demo": "ai_isDisabled:true",
            "description": "默认为false。使用此操作停止AI使用此动作。",
            "key": "ai_isDisabled",
            "name": "AI被禁用",
            "value_type": "logic"
        },
        {
            "Section": {
                "key": "[action_NAME] / [hiddenAction_NAME]",
                "name": "行动/动作/触发"
            },
            "comment": "AI",
            "demo": "ai_isHighPriority:true",
            "description": "AI将优先执行此动作。",
            "key": "ai_isHighPriority",
            "name": "AI高优先级",
            "value_type": "bool"
        },
        {
            "Section": {
                "key": "[action_NAME] / [hiddenAction_NAME]",
                "name": "行动/动作/触发"
            },
            "comment": "AI",
            "demo": "ai_considerSameAsBuilding:BU_cq",
            "description": "填建筑。考虑动作的优先级将会跟建筑物建优先级一样。",
            "key": "ai_considerSameAsBuilding",
            "name": "AI作为建筑",
            "value_type": "string"
        },
        {
            "Section": {
                "key": "[action_NAME] / [hiddenAction_NAME]",
                "name": "行动/动作/触发"
            },
            "comment": "触发器-这些触发器跳过队列并且不使用价格，忽略isLocked，buildTime等",
            "demo": "autoTriggerOnEvent:destroyed",
            "description": "满足此条件则自动触发。参数表：\r\n创建，完成且激活，销毁，杀死任何单位，队列中单位完成，队列添加项目，队列项目取消，传送，接触目标成功，玩家指定路径，队伍变更，运输新单位，卸载或移除单位，受到伤害\r\ncreated, completeAndActive, destroyed, killedAnyUnit, queuedUnitFinished, queueItemAdded, queueItemCancelled, teleported, touchTargetSuccess, newWaypointGivenByPlayer, teamChanged, transportingNewUnit，transportUnloadedOrRemovedUnit，tookDamage",
            "key": "autoTriggerOnEvent",
            "name": "自动触发事件",
            "value_type": "string"
        },
        {
            "Section": {
                "key": "[action_NAME] / [hiddenAction_NAME]",
                "name": "行动/动作/触发"
            },
            "comment": "触发器-这些触发器跳过队列并且不使用价格，忽略isLocked，buildTime等",
            "demo": "autoTrigger: if self.overWater()",
            "description": "如果为true，则立即触发此操作的效果（忽略价格，isActive，isVisible，buildSpeed等）",
            "key": "autoTrigger",
            "name": "自动触发",
            "value_type": "logic"
        },
        {
            "Section": {
                "key": "[action_NAME] / [hiddenAction_NAME]",
                "name": "行动/动作/触发"
            },
            "comment": "当在队列时(准备)时",
            "demo": "buildSpeed:1s",
            "description": "建造此动作所需要的时间，这个读条过程下面称之为准备以区分建造，机翻或是多个动作称之为队列。完成时的效果称为结果。",
            "key": "buildSpeed",
            "name": "建造速度",
            "value_type": "string"
        },
        {
            "Section": {
                "key": "[action_NAME] / [hiddenAction_NAME]",
                "name": "行动/动作/触发"
            },
            "comment": "当在队列时(准备)时",
            "demo": "highPriorityQueue:true",
            "description": "默认为false。如果为true，则此操作将跳过队列中的所有其他低优先级操作。适用于fireTurret类动作。",
            "key": "highPriorityQueue",
            "name": "高优先级队列",
            "value_type": "bool"
        },
        {
            "Section": {
                "key": "[action_NAME] / [hiddenAction_NAME]",
                "name": "行动/动作/触发"
            },
            "comment": "当在队列时(准备)时",
            "demo": "canPlayerCancel:true",
            "description": "玩家可以取消此动作。",
            "key": "canPlayerCancel",
            "name": "玩家可以取消",
            "value_type": "bool"
        },
        {
            "Section": {
                "key": "[action_NAME] / [hiddenAction_NAME]",
                "name": "行动/动作/触发"
            },
            "comment": "当在队列时(准备)时",
            "demo": "whenBuilding_cannotMove:true",
            "description": "执行操作准备时停止单位移动。适用于类似部署类动作。",
            "key": "whenBuilding_cannotMove",
            "name": "建造时无法移动",
            "value_type": "bool"
        },
        {
            "Section": {
                "key": "[action_NAME] / [hiddenAction_NAME]",
                "name": "行动/动作/触发"
            },
            "comment": "当在队列时(准备)时",
            "demo": "whenBuilding_playAnimation:AM_shiba",
            "description": "准备此动作时，播放[animation]中自定义的动画。",
            "key": "whenBuilding_playAnimation",
            "name": "建造时播放动画",
            "value_type": "string"
        },
        {
            "Section": {
                "key": "[action_NAME] / [hiddenAction_NAME]",
                "name": "行动/动作/触发"
            },
            "comment": "当在队列时(准备)时",
            "demo": "whenBuilding_rotateTo:-180",
            "description": "准备此动作时，将单位主体旋转到该方向",
            "key": "whenBuilding_rotateTo",
            "name": "建造时旋转",
            "value_type": "float"
        },
        {
            "Section": {
                "key": "[action_NAME] / [hiddenAction_NAME]",
                "name": "行动/动作/触发"
            },
            "comment": "当在队列时(准备)时",
            "demo": "whenBuilding_rotateTo_orBackwards:true",
            "description": "如果为true，则当角度较小时，允许从whenBuilding_rotateTo旋转180度。",
            "key": "whenBuilding_rotateTo_orBackwards",
            "name": "建造时旋转或反转",
            "value_type": "bool"
        },
        {
            "Section": {
                "key": "[action_NAME] / [hiddenAction_NAME]",
                "name": "行动/动作/触发"
            },
            "comment": "当在队列时(准备)时",
            "demo": "whenBuilding_rotateTo_waitTillRotated:true",
            "description": "暂停准备的行为，直到旋转完成再继续。",
            "key": "whenBuilding_rotateTo_waitTillRotated",
            "name": "建造时需等待旋转完成",
            "value_type": "bool"
        },
        {
            "Section": {
                "key": "[action_NAME] / [hiddenAction_NAME]",
                "name": "行动/动作/触发"
            },
            "comment": "当在队列时(准备)时",
            "demo": "whenBuilding_temporarilyConvertTo:TEM_shiba",
            "description": "准备此操作时临时转换为另一个单位。原始单位的操作将保留。",
            "key": "whenBuilding_temporarilyConvertTo",
            "name": "建造时临时转换为",
            "value_type": "unit"
        },
        {
            "Section": {
                "key": "[action_NAME] / [hiddenAction_NAME]",
                "name": "行动/动作/触发"
            },
            "comment": "当在队列时(准备)时",
            "demo": "whenBuilding_temporarilyConvertTo_keepFields: maxHp, maxEnergy, moveSpeed",
            "description": "不要在使用whenbuilding_temporaryconvertto时更改这些字段(无论是从或到)，这对setUnitStats很有用",
            "key": "whenBuilding_temporarilyConvertTo_keepFields",
            "name": "转换时保留字段",
            "value_type": "string"
        },
        {
            "Section": {
                "key": "[action_NAME] / [hiddenAction_NAME]",
                "name": "行动/动作/触发"
            },
            "comment": "当在队列时(准备)时",
            "demo": "whenBuilding_triggerAction:ACT_shiba",
            "description": "准备时触发另一个动作",
            "key": "whenBuilding_triggerAction",
            "name": "建造时触发动作",
            "value_type": "action"
        },
        {
            "Section": {
                "key": "[action_NAME] / [hiddenAction_NAME]",
                "name": "行动/动作/触发"
            },
            "comment": "当在队列时(准备)时",
            "demo": "whenBuilding_rotateTo_aimAtActionTarget:true",
            "description": "准备时转向瞄准目标,luke:测试版注意:在某些情况下是坏的",
            "key": "whenBuilding_rotateTo_aimAtActionTarget",
            "name": "建造时转向瞄准目标",
            "value_type": "bool"
        },
        {
            "Section": {
                "key": "[action_NAME] / [hiddenAction_NAME]",
                "name": "行动/动作/触发"
            },
            "comment": "当在队列时(准备)时",
            "demo": "whenBuilding_rotateTo_rotateTurretX:shi",
            "description": "准备此操作时转向指定炮塔。",
            "key": "whenBuilding_rotateTo_rotateTurretX",
            "name": "建造时转向指定炮塔",
            "value_type": "turret ref"
        },
        {
            "Section": {
                "key": "[action_NAME] / [hiddenAction_NAME]",
                "name": "行动/动作/触发"
            },
            "comment": "当在队列时(准备)时",
            "demo": "spawnEffectsOnQueue:custom:shiba",
            "description": "动作准备开始时产生的效果。",
            "key": "spawnEffectsOnQueue",
            "name": "队列产生效果",
            "value_type": "effect"
        },
        {
            "Section": {
                "key": "[action_NAME] / [hiddenAction_NAME]",
                "name": "行动/动作/触发"
            },
            "comment": "当在队列时(准备)时",
            "demo": "playSoundToPlayerOnQueue:shiba.ogg",
            "description": "动作准备时播放给玩家的声音。",
            "key": "playSoundToPlayerOnQueue",
            "name": "队列播放声音",
            "value_type": "sound"
        },
        {
            "Section": {
                "key": "[action_NAME] / [hiddenAction_NAME]",
                "name": "行动/动作/触发"
            },
            "comment": "杂项结果/结果（发生的情况）（注意：要显示的动作必须至少有一项结果）",
            "demo": "requireConditional:if not numberOfUnitsInTeam(withTag='shiba',withinRange=233,greaterThan=0)",
            "description": "如果结果为false，则跳过此操作所有结果。",
            "key": "requireConditional",
            "name": "需要条件",
            "value_type": "logic"
        },
        {
            "Section": {
                "key": "[action_NAME] / [hiddenAction_NAME]",
                "name": "行动/动作/触发"
            },
            "comment": "杂项结果/结果（发生的情况）（注意：要显示的动作必须至少有一项结果）",
            "demo": "convertTo:SC_shiba",
            "description": "将你的单位转换为另一个单位。许多属性被保留。",
            "key": "convertTo",
            "name": "转换成",
            "value_type": "unit"
        },
        {
            "Section": {
                "key": "[action_NAME] / [hiddenAction_NAME]",
                "name": "行动/动作/触发"
            },
            "comment": "杂项结果/结果（发生的情况）（注意：要显示的动作必须至少有一项结果）",
            "demo": "convertTo_keepCurrentTags: true",
            "description": "将单位转换为另一个单位。并且保留拥有的标签。",
            "key": "convertTo_keepCurrentTags",
            "name": "转换时保留标签",
            "value_type": "bool"
        },
        {
            "Section": {
                "key": "[action_NAME] / [hiddenAction_NAME]",
                "name": "行动/动作/触发"
            },
            "comment": "杂项结果/结果（发生的情况）（注意：要显示的动作必须至少有一项结果）",
            "demo": "convertTo_keepCurrentFields:maxHp",
            "description": "转换时不要更改这些字段，这在setUnitStats中很有用\r\n(允许的字段:maxHp, maxShield, shield dregen, maxEnergy, armor, mass, shootDelayMultiplier, movespeed, maxAttackRange)",
            "key": "convertTo_keepCurrentFields",
            "name": "转换时保留字段",
            "value_type": "string"
        },
        {
            "Section": {
                "key": "[action_NAME] / [hiddenAction_NAME]",
                "name": "行动/动作/触发"
            },
            "comment": "杂项结果/结果（发生的情况）（注意：要显示的动作必须至少有一项结果）",
            "demo": "addEnergy:1",
            "description": "为单位增加能量。需要设置了energyMax，否则不起作用。（与addResources相同：energy = X）",
            "key": "addEnergy",
            "name": "增加能量",
            "value_type": "float"
        },
        {
            "Section": {
                "key": "[action_NAME] / [hiddenAction_NAME]",
                "name": "行动/动作/触发"
            },
            "comment": "杂项结果/结果（发生的情况）（注意：要显示的动作必须至少有一项结果）",
            "demo": "addResources: credits=5, energy=-5, hp=-100, shield=5, ammo=1",
            "description": "操作完成后，添加这些资源。",
            "key": "addResources",
            "name": "添加资源",
            "value_type": "res ref"
        },
        {
            "Section": {
                "key": "[action_NAME] / [hiddenAction_NAME]",
                "name": "行动/动作/触发"
            },
            "comment": "杂项结果/结果（发生的情况）（注意：要显示的动作必须至少有一项结果）",
            "demo": "addResourcesScaledByAIHandicaps:true",
            "description": "与addResources类似，但根据AI难度级别增加或减少。比例：最简单40%、简单70%、中等100%、困难140%、很困难180%、不可能370%",
            "key": "addResourcesScaledByAIHandicaps",
            "name": "根据AI难度添加资源。",
            "value_type": "bool"
        },
        {
            "Section": {
                "key": "[action_NAME] / [hiddenAction_NAME]",
                "name": "行动/动作/触发"
            },
            "comment": "杂项结果/结果（发生的情况）（注意：要显示的动作必须至少有一项结果）",
            "demo": "addResourcesWithLogic: hp = select( self.parent.energy>5, 10, 20 ) ",
            "description": "与addResources类似，但允许对资源值使用逻辑",
            "key": "addResourcesWithLogic",
            "name": "用逻辑添加资源",
            "value_type": "string"
        },
        {
            "Section": {
                "key": "[action_NAME] / [hiddenAction_NAME]",
                "name": "行动/动作/触发"
            },
            "comment": "杂项结果/结果（发生的情况）（注意：要显示的动作必须至少有一项结果）",
            "demo": "setResourcesWithLogic: hp=self.parent.hp - 10, energy = self.energy / 2",
            "description": "将目标资源设置为此值，而不是添加。小心对全局资源使用。",
            "key": "setResourcesWithLogic",
            "name": "用逻辑设置资源",
            "value_type": "string"
        },
        {
            "Section": {
                "key": "[action_NAME] / [hiddenAction_NAME]",
                "name": "行动/动作/触发"
            },
            "comment": "杂项结果/结果（发生的情况）（注意：要显示的动作必须至少有一项结果）",
            "demo": "deleteSelf:true",
            "description": "删除执行此操作的单位，没有死亡效果，不执行死亡触发。",
            "key": "deleteSelf",
            "name": "删除自身",
            "value_type": "logic"
        },
        {
            "Section": {
                "key": "[action_NAME] / [hiddenAction_NAME]",
                "name": "行动/动作/触发"
            },
            "comment": "杂项结果/结果（发生的情况）（注意：要显示的动作必须至少有一项结果）",
            "demo": "resetCustomTimer:if self.customTimer(laterThanSeconds=5)",
            "description": "重置自定义计时器，与self.customTimer()",
            "key": "resetCustomTimer",
            "name": "重置自定义计时器",
            "value_type": "logic"
        },
        {
            "Section": {
                "key": "[action_NAME] / [hiddenAction_NAME]",
                "name": "行动/动作/触发"
            },
            "comment": "杂项结果/结果（发生的情况）（注意：要显示的动作必须至少有一项结果）",
            "demo": "setBodyRotation:45",
            "description": "设置单位旋转度数。单位朝右为0度。因为是结果而不是准备过程，所以很突然。",
            "key": "setBodyRotation",
            "name": "设置身体旋转",
            "value_type": "int"
        },
        {
            "Section": {
                "key": "[action_NAME] / [hiddenAction_NAME]",
                "name": "行动/动作/触发"
            },
            "comment": "杂项结果/结果（发生的情况）（注意：要显示的动作必须至少有一项结果）",
            "demo": "setUnitStats: maxHp+=self.energy+100, hp+=50, shieldRegen=0.5",
            "description": "字段值。允许在不转换的情况下动态更改选定的字段数量。支持=/+=/-=，动态数学/逻辑。可以改变的领域:maxHp, hp, maxShield, shield, shield dregen, maxEnergy, energy, armor, mass, shootDelayMultiplier, shootDamageMultiplier, movespeed, maxTurnSpeed, maxAttackRange",
            "key": "setUnitStats",
            "name": "设置单位状态",
            "value_type": "string"
        },
        {
            "Section": {
                "key": "[action_NAME] / [hiddenAction_NAME]",
                "name": "行动/动作/触发"
            },
            "comment": "杂项结果/结果（发生的情况）（注意：要显示的动作必须至少有一项结果）",
            "demo": "resetUnitStats:true",
            "description": "将setUnitStats所做的更改重置为基本值",
            "key": "resetUnitStats",
            "name": "恢复单位状态",
            "value_type": "bool"
        },
        {
            "Section": {
                "key": "[action_NAME] / [hiddenAction_NAME]",
                "name": "行动/动作/触发"
            },
            "comment": "杂项结果/结果（发生的情况）（注意：要显示的动作必须至少有一项结果）",
            "demo": null,
            "description": "键值对。改变此单元的内存，值可以用逻辑设定。内存必须首先用defineUnitMemory定义。\r\nsetUnitMemory: \"\"\"\r\ncustomText=memory.customText+'hello',\r\nnukeActive=true, \r\nnextTarget=self.attacking.nearestUnit(withinRange=300, withTag='x', relation='enemy')\r\n\"\"\"",
            "key": "setUnitMemory",
            "name": "设置单位内存",
            "value_type": "string"
        },
        {
            "Section": {
                "key": "[action_NAME] / [hiddenAction_NAME]",
                "name": "行动/动作/触发"
            },
            "comment": "结果-连锁动作",
            "demo": "alsoTriggerAction: addCredits, playSound",
            "description": "触发其他动作的结果。忽略行动的要求。",
            "key": "alsoTriggerAction",
            "name": "也执行动作",
            "value_type": "action"
        },
        {
            "Section": {
                "key": "[action_NAME] / [hiddenAction_NAME]",
                "name": "行动/动作/触发"
            },
            "comment": "结果-连锁动作",
            "demo": "alsoQueueAction",
            "description": "将另一个动作添加到序列中。忽略行动的要求",
            "key": "alsoQueueAction",
            "name": "也添加进队列",
            "value_type": "action"
        },
        {
            "Section": {
                "key": "[action_NAME] / [hiddenAction_NAME]",
                "name": "行动/动作/触发"
            },
            "comment": "结果-连锁动作",
            "demo": "alsoTriggerOrQueueActionConditional:if not self.isFlying()",
            "description": "将此操作添加到序列。如果条件不满足(false)则忽略alsoQueueAction。默认true.",
            "key": "alsoTriggerOrQueueActionConditional",
            "name": "也执行队列或需执行条件",
            "value_type": "logic"
        },
        {
            "Section": {
                "key": "[action_NAME] / [hiddenAction_NAME]",
                "name": "行动/动作/触发"
            },
            "comment": "结果-声音",
            "demo": "playSoundAtUnit:shiba.ogg",
            "description": "动作结束时在当前位置播放声音。",
            "key": "playSoundAtUnit",
            "name": "播放声音至单位",
            "value_type": "sound"
        },
        {
            "Section": {
                "key": "[action_NAME] / [hiddenAction_NAME]",
                "name": "行动/动作/触发"
            },
            "comment": "结果-声音",
            "demo": "playSoundGlobally:shiba.ogg:0.5",
            "description": "播放全局声音，所有玩家都能听到。",
            "key": "playSoundGlobally",
            "name": "播放声音至全图",
            "value_type": "sound"
        },
        {
            "Section": {
                "key": "[action_NAME] / [hiddenAction_NAME]",
                "name": "行动/动作/触发"
            },
            "comment": "结果-声音",
            "demo": "playSoundToPlayer:shiba.ogg:999",
            "description": "播放声音，只有自己能听到。",
            "key": "playSoundToPlayer",
            "name": "播放声音至玩家",
            "value_type": "sound"
        },
        {
            "Section": {
                "key": "[action_NAME] / [hiddenAction_NAME]",
                "name": "行动/动作/触发"
            },
            "comment": "结果-炮塔发射抛射物",
            "demo": "fireTurretXAtGround: nukeSilo",
            "description": "使用此炮塔攻击玩家所指定的地面。",
            "key": "fireTurretXAtGround",
            "name": "指定攻击地面炮塔",
            "value_type": "turret ref"
        },
        {
            "Section": {
                "key": "[action_NAME] / [hiddenAction_NAME]",
                "name": "行动/动作/触发"
            },
            "comment": "结果-炮塔发射抛射物",
            "demo": "fireTurretXAtGround_withOffset: 0,0",
            "description": "攻击指定坐标所在地面，不需要手动选择，",
            "key": "fireTurretXAtGround_withOffset",
            "name": "指定攻击地面坐标",
            "value_type": "string"
        },
        {
            "Section": {
                "key": "[action_NAME] / [hiddenAction_NAME]",
                "name": "行动/动作/触发"
            },
            "comment": "结果-炮塔发射抛射物",
            "demo": "fireTurretXAtGround_withProjectile:PRO_1",
            "description": "设定使用的抛射物，如果不设置则为炮塔默认的抛射物。",
            "key": "fireTurretXAtGround_withProjectile",
            "name": "指定攻击地面抛射物",
            "value_type": "projectile"
        },
        {
            "Section": {
                "key": "[action_NAME] / [hiddenAction_NAME]",
                "name": "行动/动作/触发"
            },
            "comment": "结果-炮塔发射抛射物",
            "demo": null,
            "description": "炮塔瞄准指示的单位或标记的位置发射",
            "key": "fireTurretXAtGround_withTarget",
            "name": "指定攻击目标",
            "value_type": "unit"
        },
        {
            "Section": {
                "key": "[action_NAME] / [hiddenAction_NAME]",
                "name": "行动/动作/触发"
            },
            "comment": "结果-炮塔发射抛射物",
            "demo": "fireTurretXAtGround_count:9",
            "description": "设置发射的抛射物数量，默认为1",
            "key": "fireTurretXAtGround_count",
            "name": "指定攻击地面数量",
            "value_type": "int"
        },
        {
            "Section": {
                "key": "[action_NAME] / [hiddenAction_NAME]",
                "name": "行动/动作/触发"
            },
            "comment": "结果-炮塔发射抛射物",
            "demo": "fireTurretXAtGround_onlyOverPassableTileOf:LAND",
            "description": "设置手动选择的地面需要满足这种运动方式。列表：无，陆地，建筑，空军，水。两栖，跨悬崖，跨悬崖和度水。\r\nNONE LAND BUILDING AIR WATER HOVER OVER_CLIFF OVER_CLIFF_WATER ",
            "key": "fireTurretXAtGround_onlyOverPassableTileOf",
            "name": "指定攻击地面类型",
            "value_type": "string"
        },
        {
            "Section": {
                "key": "[action_NAME] / [hiddenAction_NAME]",
                "name": "行动/动作/触发"
            },
            "comment": "结果-刷单位",
            "demo": "eg: spawnUnits: heavyTank, tank*5, hoverTank(offsetX=10)",
            "description": "产生指定单位，可用是多种。",
            "key": "spawnUnits",
            "name": "产生单位",
            "value_type": "unit"
        },
        {
            "Section": {
                "key": "[action_NAME] / [hiddenAction_NAME]",
                "name": "行动/动作/触发"
            },
            "comment": "结果-刷单位",
            "demo": "spawnEffects:custom:shiba",
            "description": "产生指定效果",
            "key": "spawnEffects",
            "name": "产生效果",
            "value_type": "effect"
        },
        {
            "Section": {
                "key": "[action_NAME] / [hiddenAction_NAME]",
                "name": "行动/动作/触发"
            },
            "comment": "结果-刷单位",
            "demo": "produceUnits:bigshibainu",
            "description": "类似spawnUnits，但是单位像正常生产一样，并获得路径的移动。1.13只对非建筑物刷的单位有效。",
            "key": "produceUnits",
            "name": "生产单位",
            "value_type": "unit"
        },
        {
            "Section": {
                "key": "[action_NAME] / [hiddenAction_NAME]",
                "name": "行动/动作/触发"
            },
            "comment": "结果-位置",
            "demo": "offsetSelfAbsolute: 0, 0, 40 [x,y,height]",
            "description": "使用时将修改单位当前位置，以单位为中心的绝对坐标。",
            "key": "offsetSelfAbsolute",
            "name": "自身位置偏移",
            "value_type": "string"
        },
        {
            "Section": {
                "key": "[action_NAME] / [hiddenAction_NAME]",
                "name": "行动/动作/触发"
            },
            "comment": "成果-运输变化",
            "demo": "addUnitsIntoTransport: tank*3, heavyTank",
            "description": "将单位添加到运输槽中，在添加之前会检查空间是否够。",
            "key": "addUnitsIntoTransport",
            "name": "添加单位到载具",
            "value_type": "unit"
        },
        {
            "Section": {
                "key": "[action_NAME] / [hiddenAction_NAME]",
                "name": "行动/动作/触发"
            },
            "comment": "成果-运输变化",
            "demo": "deleteNumUnitsFromTransport:3",
            "description": "从载具中删除指定数量单位。",
            "key": "deleteNumUnitsFromTransport",
            "name": "从载具中删除单位数",
            "value_type": "int"
        },
        {
            "Section": {
                "key": "[action_NAME] / [hiddenAction_NAME]",
                "name": "行动/动作/触发"
            },
            "comment": "成果-运输变化",
            "demo": "deleteNumUnitsFromTransport_onlyWithTags:cat",
            "description": "从载具中删除具有此标签的指定数量单位。",
            "key": "deleteNumUnitsFromTransport_onlyWithTags",
            "name": "从载具删除带标签单位",
            "value_type": "string"
        },
        {
            "Section": {
                "key": "[action_NAME] / [hiddenAction_NAME]",
                "name": "行动/动作/触发"
            },
            "comment": "成果-运输变化",
            "demo": "startUnloadingTransport:true",
            "description": "开始卸载单位",
            "key": "startUnloadingTransport",
            "name": "开始卸载单位",
            "value_type": "bool"
        },
        {
            "Section": {
                "key": "[action_NAME] / [hiddenAction_NAME]",
                "name": "行动/动作/触发"
            },
            "comment": "成果-运输变化",
            "demo": "forceUnloadTransportNow:true",
            "description": "立即强制卸载单位",
            "key": "forceUnloadTransportNow",
            "name": "强制卸载单位",
            "value_type": "bool"
        },
        {
            "Section": {
                "key": "[action_NAME] / [hiddenAction_NAME]",
                "name": "行动/动作/触发"
            },
            "comment": "成果-运输变化",
            "demo": "forceUnloadTransportNow_onlyOnSlot:1",
            "description": "强制卸载指定槽位单位",
            "key": "forceUnloadTransportNow_onlyOnSlot",
            "name": "强制卸载指定槽位单位",
            "value_type": "int"
        },
        {
            "Section": {
                "key": "[action_NAME] / [hiddenAction_NAME]",
                "name": "行动/动作/触发"
            },
            "comment": "结果-路径点",
            "demo": "clearAllWaypoints:true",
            "description": "清除当前所有路径。",
            "key": "clearAllWaypoints",
            "name": "清除所有路径点",
            "value_type": "bool"
        },
        {
            "Section": {
                "key": "[action_NAME] / [hiddenAction_NAME]",
                "name": "行动/动作/触发"
            },
            "comment": "结果-路径点",
            "demo": "clearActiveWaypoint:true",
            "description": "清除当前路径，也就是停止当前动作，执行下一个路径点。",
            "key": "clearActiveWaypoint",
            "name": "清除当前路径点",
            "value_type": "bool"
        },
        {
            "Section": {
                "key": "[action_NAME] / [hiddenAction_NAME]",
                "name": "行动/动作/触发"
            },
            "comment": "结果-路径点",
            "demo": "addWaypoint_type:move",
            "description": "添加的路径点类型。值列表：移动，移动攻击，防守，进入载具，主动装载，攻击，回收，维修，靠近目标，建造，跟随，被动。\r\nmove, attackMove, guard, loadInto, loadUp, attack, reclaim, repair, touchTarget, build, follow，setPassiveTarget",
            "key": "addWaypoint_type",
            "name": "添加路径点动作类型",
            "value_type": "string"
        },
        {
            "Section": {
                "key": "[action_NAME] / [hiddenAction_NAME]",
                "name": "行动/动作/触发"
            },
            "comment": "结果-路径点",
            "demo": "addWaypoint_unitType:BU_shiba",
            "description": "用于让当前单位去建造指定单位。仅用于addWaypoint_type:build",
            "key": "addWaypoint_unitType",
            "name": "添加路径点单位类型",
            "value_type": "string"
        },
        {
            "Section": {
                "key": "[action_NAME] / [hiddenAction_NAME]",
                "name": "行动/动作/触发"
            },
            "comment": "结果-路径点",
            "demo": "addWaypoint_prepend:true",
            "description": "添加到路径点的开头或结尾",
            "key": "addWaypoint_prepend",
            "name": "添加路径点序列位置",
            "value_type": "bool"
        },
        {
            "Section": {
                "key": "[action_NAME] / [hiddenAction_NAME]",
                "name": "行动/动作/触发"
            },
            "comment": "结果-路径点",
            "demo": "addWaypoint_triggerActionIfFailed:act_fail",
            "description": "如果target_nearestUnit找不到匹配项，因此无法添加路径点，则触发此操作",
            "key": "addWaypoint_triggerActionIfFailed",
            "name": "添加路径点失败触发",
            "value_type": "action"
        },
        {
            "Section": {
                "key": "[action_NAME] / [hiddenAction_NAME]",
                "name": "行动/动作/触发"
            },
            "comment": "结果-路径点",
            "demo": "addWaypoint_triggerActionIfMatched:act_suc",
            "description": "如果操作添加的路径点是有效的，则执行指定操作。",
            "key": "addWaypoint_triggerActionIfMatched",
            "name": "添加路径点匹配触发",
            "value_type": "action"
        },
        {
            "Section": {
                "key": "[action_NAME] / [hiddenAction_NAME]",
                "name": "行动/动作/触发"
            },
            "comment": "结果-路径点",
            "demo": "addWaypoint_maxTime:10s",
            "description": "如果此路径点这么久还无法执行完成，则取消。",
            "key": "addWaypoint_maxTime",
            "name": "添加路径点检索时间",
            "value_type": "string"
        },
        {
            "Section": {
                "key": "[action_NAME] / [hiddenAction_NAME]",
                "name": "行动/动作/触发"
            },
            "comment": "结果-路径点",
            "demo": "addWaypoint_target_nearestUnit_tagged:tag_shiba",
            "description": "添加的路径点目标为靠近有此标签的单位。",
            "key": "addWaypoint_target_nearestUnit_tagged",
            "name": "添加路径点检索标签",
            "value_type": "string"
        },
        {
            "Section": {
                "key": "[action_NAME] / [hiddenAction_NAME]",
                "name": "行动/动作/触发"
            },
            "comment": "结果-路径点",
            "demo": "addWaypoint_target_nearestUnit_team:own",
            "description": "添加的路径点目标需要的所属方：己方|中立|盟友|敌人|任何，own|neutral|ally|enemy|any",
            "key": "addWaypoint_target_nearestUnit_team",
            "name": "添加路径点靠近队伍",
            "value_type": "string"
        },
        {
            "Section": {
                "key": "[action_NAME] / [hiddenAction_NAME]",
                "name": "行动/动作/触发"
            },
            "comment": "结果-路径点",
            "demo": "addWaypoint_target_nearestUnit_maxRange:999",
            "description": "添加的路径点靠近某目标时考虑的最大范围。",
            "key": "addWaypoint_target_nearestUnit_maxRange",
            "name": "添加路径点检索范围",
            "value_type": "float"
        },
        {
            "Section": {
                "key": "[action_NAME] / [hiddenAction_NAME]",
                "name": "行动/动作/触发"
            },
            "comment": "结果-路径点",
            "demo": "addWaypoint_target_mapMustBeReachable:true",
            "description": "添加的路径点靠近某目标时必须是有可到达路径的。",
            "key": "addWaypoint_target_mapMustBeReachable",
            "name": "添加路径点路径可达",
            "value_type": "bool"
        },
        {
            "Section": {
                "key": "[action_NAME] / [hiddenAction_NAME]",
                "name": "行动/动作/触发"
            },
            "comment": "结果-路径点",
            "demo": "addWaypoint_target_fromReference: self.memory.lastDock",
            "description": "添加路径点来自单位信息引用。",
            "key": "addWaypoint_target_fromReference",
            "name": "添加路径点来自参考",
            "value_type": "unit"
        },
        {
            "Section": {
                "key": "[action_NAME] / [hiddenAction_NAME]",
                "name": "行动/动作/触发"
            },
            "comment": "结果-路径点",
            "demo": "addWaypoint_position_offsetFromSelf:10,10",
            "description": "添加的路径点相对于自身偏移的坐标。",
            "key": "addWaypoint_position_offsetFromSelf",
            "name": "添加路径点坐标偏移",
            "value_type": "string"
        },
        {
            "Section": {
                "key": "[action_NAME] / [hiddenAction_NAME]",
                "name": "行动/动作/触发"
            },
            "comment": "结果-路径点",
            "demo": "addWaypoint_position_fromAction:true",
            "description": "将当前动作指定的坐标添加进路径序列中。",
            "key": "addWaypoint_position_fromAction",
            "name": "添加路径点动作坐标",
            "value_type": "bool"
        },
        {
            "Section": {
                "key": "[action_NAME] / [hiddenAction_NAME]",
                "name": "行动/动作/触发"
            },
            "comment": "结果-路径点",
            "demo": "addWaypoint_position_randomOffsetFromSelf:5,5",
            "description": "添加坐标进路径点时的随机值。",
            "key": "addWaypoint_position_randomOffsetFromSelf",
            "name": "添加路径点随机偏移",
            "value_type": "string"
        },
        {
            "Section": {
                "key": "[action_NAME] / [hiddenAction_NAME]",
                "name": "行动/动作/触发"
            },
            "comment": "结果-路径点",
            "demo": "addWaypoint_position_relativeOffsetFromSelf:10,10",
            "description": "添加路径点位置相对自身偏移量。",
            "key": "addWaypoint_position_relativeOffsetFromSelf",
            "name": "添加路径点相对偏移",
            "value_type": "string"
        },
        {
            "Section": {
                "key": "[action_NAME] / [hiddenAction_NAME]",
                "name": "行动/动作/触发"
            },
            "comment": "结果-路径点",
            "demo": "addWaypoint_target_randomUnit_tagged:shibaInu",
            "description": "添加路径点单位为指定标签的随机单位",
            "key": "addWaypoint_target_randomUnit_tagged",
            "name": "添加指定标签的随机单位",
            "value_type": "unit"
        },
        {
            "Section": {
                "key": "[action_NAME] / [hiddenAction_NAME]",
                "name": "行动/动作/触发"
            },
            "comment": "结果-路径点",
            "demo": "addWaypoint_target_randomUnit_team:own",
            "description": "添加路径点单位为指定队伍的随机单位",
            "key": "addWaypoint_target_randomUnit_team",
            "name": "添加指定队伍的随机单位",
            "value_type": "string"
        },
        {
            "Section": {
                "key": "[action_NAME] / [hiddenAction_NAME]",
                "name": "行动/动作/触发"
            },
            "comment": "结果-路径点",
            "demo": "addWaypoint_target_randomUnit_maxRange:999",
            "description": "添加路径点单位为指定范围的随机单位",
            "key": "addWaypoint_target_randomUnit_maxRange",
            "name": "添加指定范围的随机单位",
            "value_type": "int"
        },
        {
            "Section": {
                "key": "[action_NAME] / [hiddenAction_NAME]",
                "name": "行动/动作/触发"
            },
            "comment": "结果-冷却",
            "demo": "addAllActionCooldownsTime:10s",
            "description": "增加所有action的冷却时间。",
            "key": "addAllActionCooldownsTime",
            "name": "增加所有动作冷却时间",
            "value_type": "string"
        },
        {
            "Section": {
                "key": "[action_NAME] / [hiddenAction_NAME]",
                "name": "行动/动作/触发"
            },
            "comment": "结果-冷却",
            "demo": "addActionCooldownTime:10s",
            "description": "增加动作冷却时间，制作先充能再使用的action更加容易了。",
            "key": "addActionCooldownTime",
            "name": "增加动作冷却时间",
            "value_type": "string"
        },
        {
            "Section": {
                "key": "[action_NAME] / [hiddenAction_NAME]",
                "name": "行动/动作/触发"
            },
            "comment": "结果-冷却",
            "demo": "addActionCooldownApplyToActions:",
            "description": "action id，设置addActionCooldownTime的目标。默认情况下是当前操作本身。",
            "key": "addActionCooldownApplyToActions",
            "name": "添加指定动作冷却时间",
            "value_type": "action"
        },
        {
            "Section": {
                "key": "[action_NAME] / [hiddenAction_NAME]",
                "name": "行动/动作/触发"
            },
            "comment": "结果-冷却",
            "demo": "clearAllActionCooldowns:true",
            "description": "清除所有动作冷却时间，使其立即可用。",
            "key": "clearAllActionCooldowns",
            "name": "清除所有动作冷却时间",
            "value_type": "bool"
        },
        {
            "Section": {
                "key": "[action_NAME] / [hiddenAction_NAME]",
                "name": "行动/动作/触发"
            },
            "comment": "结果-动画",
            "demo": "playAnimation:shiba",
            "description": "播放[animation_xx]类型动画。",
            "key": "playAnimation",
            "name": "播放动画",
            "value_type": "string"
        },
        {
            "Section": {
                "key": "[action_NAME] / [hiddenAction_NAME]",
                "name": "行动/动作/触发"
            },
            "comment": "结果-动画",
            "demo": "playAnimationIfNotPlaying:true",
            "description": "如果该动画已经在播放，就不再播放动画。",
            "key": "playAnimationIfNotPlaying",
            "name": "播放动画限制",
            "value_type": "bool"
        },
        {
            "Section": {
                "key": "[action_NAME] / [hiddenAction_NAME]",
                "name": "行动/动作/触发"
            },
            "comment": "结果-动画",
            "demo": "finishPlayingLastAnimation:true",
            "description": "完成最后一个动画，包括融合",
            "key": "finishPlayingLastAnimation",
            "name": "完成最会动画",
            "value_type": "bool"
        },
        {
            "Section": {
                "key": "[action_NAME] / [hiddenAction_NAME]",
                "name": "行动/动作/触发"
            },
            "comment": "结果-动画",
            "demo": "stopLastAnimation:true",
            "description": "停止最后一个动画，跳过融合",
            "key": "stopLastAnimation",
            "name": "停止最后动画",
            "value_type": "bool"
        },
        {
            "Section": {
                "key": "[action_NAME] / [hiddenAction_NAME]",
                "name": "行动/动作/触发"
            },
            "comment": "结果-中立",
            "demo": "switchToNeutralTeam:true",
            "description": "将队伍更改为中立。该队伍与其他所有队伍结盟。除非使用[core]stayNeutral:true，否则它将被附近的单位捕获。",
            "key": "switchToNeutralTeam",
            "name": "切换至中立队伍",
            "value_type": "bool"
        },
        {
            "Section": {
                "key": "[action_NAME] / [hiddenAction_NAME]",
                "name": "行动/动作/触发"
            },
            "comment": "结果-中立",
            "demo": "switchToAggressiveTeam:true",
            "description": "将此单位队伍更改为侵略性的内置队伍。不能被其它单位捕获。",
            "key": "switchToAggressiveTeam",
            "name": "切换至侵略性队伍",
            "value_type": "bool"
        },
        {
            "Section": {
                "key": "[action_NAME] / [hiddenAction_NAME]",
                "name": "行动/动作/触发"
            },
            "comment": "结果-中立",
            "demo": "switchtoteam:-1",
            "description": "切换到小队id。从0开始。(中立-1，敌对中立-2)",
            "key": "switchtoteam",
            "name": "切换至特定队伍",
            "value_type": "int"
        },
        {
            "Section": {
                "key": "[action_NAME] / [hiddenAction_NAME]",
                "name": "行动/动作/触发"
            },
            "comment": "结果-从其他单位获取资源，多数代码我并没有实验。",
            "demo": "takeResources: hp=5, gold=10",
            "description": "提取资源，至少写一种资源。",
            "key": "takeResources",
            "name": "提取资源",
            "value_type": "customPrice"
        },
        {
            "Section": {
                "key": "[action_NAME] / [hiddenAction_NAME]",
                "name": "行动/动作/触发"
            },
            "comment": "结果-从其他单位获取资源，多数代码我并没有实验。",
            "demo": "takeResources_includeUnitsInTransport:true",
            "description": "提取资源，包括载具内单位。",
            "key": "takeResources_includeUnitsInTransport",
            "name": "提取资源包括载具内",
            "value_type": "bool"
        },
        {
            "Section": {
                "key": "[action_NAME] / [hiddenAction_NAME]",
                "name": "行动/动作/触发"
            },
            "comment": "结果-从其他单位获取资源，多数代码我并没有实验。",
            "demo": "takeResources_includeParent:true",
            "description": "提取资源，包括父单位和运输载具。",
            "key": "takeResources_includeParent",
            "name": "提取资源包括父单位或载具",
            "value_type": "bool"
        },
        {
            "Section": {
                "key": "[action_NAME] / [hiddenAction_NAME]",
                "name": "行动/动作/触发"
            },
            "comment": "结果-从其他单位获取资源，多数代码我并没有实验。",
            "demo": "[action]takeResources_includeReference: self.lastDamagedBy",
            "description": "提取资源包括指定单位。",
            "key": "takeResources_includeReference",
            "name": "提取资源包括引用",
            "value_type": "unit"
        },
        {
            "Section": {
                "key": "[action_NAME] / [hiddenAction_NAME]",
                "name": "行动/动作/触发"
            },
            "comment": "结果-从其他单位获取资源，多数代码我并没有实验。",
            "demo": "takeResources_includeUnitsWithinRange:350",
            "description": "提取资源，在此范围内。",
            "key": "takeResources_includeUnitsWithinRange",
            "name": "提取资源范围",
            "value_type": "float"
        },
        {
            "Section": {
                "key": "[action_NAME] / [hiddenAction_NAME]",
                "name": "行动/动作/触发"
            },
            "comment": "结果-从其他单位获取资源，多数代码我并没有实验。",
            "demo": "takeResources_includeUnitsWithinRange_team:own",
            "description": "提取在此范围内队伍的资源。与“includeUnitsWithinRange”一起使用，默认为own。可以是：\r\n己方|中立|盟友|任何|除自己外盟友，own|neutral|ally|enemy|any|allyNotOwn",
            "key": "takeResources_includeUnitsWithinRange_team",
            "name": "提取资源队伍",
            "value_type": "string"
        },
        {
            "Section": {
                "key": "[action_NAME] / [hiddenAction_NAME]",
                "name": "行动/动作/触发"
            },
            "comment": "结果-从其他单位获取资源，多数代码我并没有实验。",
            "demo": "takeResources_excludeUnitsWithoutTags:TAG_shiba",
            "description": "提取资源，但排除没有此标签的单位。",
            "key": "takeResources_excludeUnitsWithoutTags",
            "name": "提取资源标签",
            "value_type": "string"
        },
        {
            "Section": {
                "key": "[action_NAME] / [hiddenAction_NAME]",
                "name": "行动/动作/触发"
            },
            "comment": "结果-从其他单位获取资源，多数代码我并没有实验。",
            "demo": "takeResources_excludeUnitsWithTheseResources:CP_shiba",
            "description": "提取资源，不包括拥有这些资源的单位。",
            "key": "takeResources_excludeUnitsWithTheseResources",
            "name": "提取资源排除资源",
            "value_type": "customPrice"
        },
        {
            "Section": {
                "key": "[action_NAME] / [hiddenAction_NAME]",
                "name": "行动/动作/触发"
            },
            "comment": "结果-从其他单位获取资源，多数代码我并没有实验。",
            "demo": "takeResources_excludeUnitsWithoutAllResources:true",
            "description": "提取资源，排除缺乏资源者。默认为true.",
            "key": "takeResources_excludeUnitsWithoutAllResources",
            "name": "提取资源排除不足",
            "value_type": "bool"
        },
        {
            "Section": {
                "key": "[action_NAME] / [hiddenAction_NAME]",
                "name": "行动/动作/触发"
            },
            "comment": "结果-从其他单位获取资源，多数代码我并没有实验。",
            "demo": "takeResources_triggerActionIfAnyCollected:ACT_shiba",
            "description": "如果有任何收集，则触发动作。",
            "key": "takeResources_triggerActionIfAnyCollected",
            "name": "提取资源成功触发",
            "value_type": "action"
        },
        {
            "Section": {
                "key": "[action_NAME] / [hiddenAction_NAME]",
                "name": "行动/动作/触发"
            },
            "comment": "结果-从其他单位获取资源，多数代码我并没有实验。",
            "demo": "takeResources_triggerActionIfNoneCollected:act_shibainu",
            "description": "如果没有收集，则触发操作。",
            "key": "takeResources_triggerActionIfNoneCollected",
            "name": "提取资源失败触发",
            "value_type": "action"
        },
        {
            "Section": {
                "key": "[action_NAME] / [hiddenAction_NAME]",
                "name": "行动/动作/触发"
            },
            "comment": "结果-从其他单位获取资源，多数代码我并没有实验。",
            "demo": "takeResources_discardCollected:true",
            "description": "从目标中获取资源，但不向自身添加也就是删除。",
            "key": "takeResources_discardCollected",
            "name": "提取资源删除",
            "value_type": "bool"
        },
        {
            "Section": {
                "key": "[action_NAME] / [hiddenAction_NAME]",
                "name": "行动/动作/触发"
            },
            "comment": "结果-从其他单位获取资源，多数代码我并没有实验。",
            "demo": "takeResources_keepResourcesOnTarget:true",
            "description": "不从目标添加或删除资源。但克隆资源。与takeResources_discardCollected和takeResources_triggerActionIfAnyCollected一起使用以创建资源检测器。",
            "key": "takeResources_keepResourcesOnTarget",
            "name": "提取资源克隆",
            "value_type": "bool"
        },
        {
            "Section": {
                "key": "[action_NAME] / [hiddenAction_NAME]",
                "name": "行动/动作/触发"
            },
            "comment": "结果-从其他单位获取资源，多数代码我并没有实验。",
            "demo": "takeResources_maxUnits:1",
            "description": "最多从多少单位提取资源，默认为1。",
            "key": "takeResources_maxUnits",
            "name": "提取资源目标量",
            "value_type": "int"
        },
        {
            "Section": {
                "key": "[action_NAME] / [hiddenAction_NAME]",
                "name": "行动/动作/触发"
            },
            "comment": "结果-从其他单位获取资源，多数代码我并没有实验。",
            "demo": "takeResources_directTransferStoppingAtZero:true",
            "description": "提取资源直接转换至0,用于完全转换。如果目标上的资源少于转帐金额，则只有剩余的资源将被转帐。不支持使用其他一些takeResources_*代码",
            "key": "takeResources_directTransferStoppingAtZero",
            "name": "提取资源直接转换至零",
            "value_type": "bool"
        },
        {
            "Section": {
                "key": "[action_NAME] / [hiddenAction_NAME]",
                "name": "行动/动作/触发"
            },
            "comment": "结果-转换资源",
            "demo": "convertResource_from:SP_cat",
            "description": "将此资源转换资源为别的资源。",
            "key": "convertResource_from",
            "name": "转换资源来源",
            "value_type": "customResource"
        },
        {
            "Section": {
                "key": "[action_NAME] / [hiddenAction_NAME]",
                "name": "行动/动作/触发"
            },
            "comment": "结果-转换资源",
            "demo": "convertResource_to:SP_shiba",
            "description": "将资源转后为此资源，要提供的自定义资源的名称",
            "key": "convertResource_to",
            "name": "转换资源至",
            "value_type": "customResource"
        },
        {
            "Section": {
                "key": "[action_NAME] / [hiddenAction_NAME]",
                "name": "行动/动作/触发"
            },
            "comment": "结果-转换资源",
            "demo": "convertResource_minAmount:0",
            "description": "如果来源中资源小于该数量，则跳过。默认为0。在大多数情况下可能不需要。",
            "key": "convertResource_minAmount",
            "name": "转换资源至少",
            "value_type": "int"
        },
        {
            "Section": {
                "key": "[action_NAME] / [hiddenAction_NAME]",
                "name": "行动/动作/触发"
            },
            "comment": "结果-转换资源",
            "demo": "convertResource_maxAmount:999",
            "description": "“来源资源”和“转换后资源”之间的最大转化量",
            "key": "convertResource_maxAmount",
            "name": "转换资源至多",
            "value_type": "int"
        },
        {
            "Section": {
                "key": "[action_NAME] / [hiddenAction_NAME]",
                "name": "行动/动作/触发"
            },
            "comment": "结果-转换资源",
            "demo": "convertResource_multiplyAmountBy:0.1",
            "description": "资源转换倍率，不影响提取的数量。默认值为1。",
            "key": "convertResource_multiplyAmountBy",
            "name": "转换资源倍率",
            "value_type": "float"
        },
        {
            "Section": {
                "key": "[action_NAME] / [hiddenAction_NAME]",
                "name": "行动/动作/触发"
            },
            "comment": "结果-设置资源",
            "demo": "resourceAmount:SP_cat",
            "description": "自定义资源的名称，使用以下3个键进行设置。所有键都是可选的，可以一起使用。",
            "key": "resourceAmount",
            "name": "资源类型",
            "value_type": "customResource"
        },
        {
            "Section": {
                "key": "[action_NAME] / [hiddenAction_NAME]",
                "name": "行动/动作/触发"
            },
            "comment": "结果-设置资源",
            "demo": "resourceAmount_setValue:99",
            "description": "设置此资源的绝对值，忽略资源的当前值。默认忽略。",
            "key": "resourceAmount_setValue",
            "name": "资源类型设置数值",
            "value_type": "float"
        },
        {
            "Section": {
                "key": "[action_NAME] / [hiddenAction_NAME]",
                "name": "行动/动作/触发"
            },
            "comment": "结果-设置资源",
            "demo": "resourceAmount_addOtherResource:SP_shiba",
            "description": "添加到其中的另一个自定义资源的名称。可以不使用resourceAmount_setValue，只是添加资源。或者使用resourceAmount_setValue:0复制一个资源值。",
            "key": "resourceAmount_addOtherResource",
            "name": "资源类型添加至",
            "value_type": "customResource"
        },
        {
            "Section": {
                "key": "[action_NAME] / [hiddenAction_NAME]",
                "name": "行动/动作/触发"
            },
            "comment": "结果-设置资源",
            "demo": "resourceAmount_multiplyBy:1",
            "description": "默认值为1。将当前资源值乘上此值。",
            "key": "resourceAmount_multiplyBy",
            "name": "资源类型乘数",
            "value_type": "float"
        },
        {
            "Section": {
                "key": "[action_NAME] / [hiddenAction_NAME]",
                "name": "行动/动作/触发"
            },
            "comment": "结果-附件(附属，子单位)更改",
            "demo": "attachments_addNewUnits:shiba",
            "description": "添加单位作为其子单位，需要定义附属位置。",
            "key": "attachments_addNewUnits",
            "name": "附属添加单位",
            "value_type": "unit"
        },
        {
            "Section": {
                "key": "[action_NAME] / [hiddenAction_NAME]",
                "name": "行动/动作/触发"
            },
            "comment": "结果-附件(附属，子单位)更改",
            "demo": "attachments_deleteNumUnits:1",
            "description": "删除单位数量",
            "key": "attachments_deleteNumUnits",
            "name": "附属删除单位数",
            "value_type": "int"
        },
        {
            "Section": {
                "key": "[action_NAME] / [hiddenAction_NAME]",
                "name": "行动/动作/触发"
            },
            "comment": "结果-附件(附属，子单位)更改",
            "demo": "attachments_onlyOnSlots:SL_shiba",
            "description": "只将附属物添加于特定的槽位",
            "key": "attachments_onlyOnSlots",
            "name": "附属添加于槽位",
            "value_type": "string"
        },
        {
            "Section": {
                "key": "[action_NAME] / [hiddenAction_NAME]",
                "name": "行动/动作/触发"
            },
            "comment": "结果-附件(附属，子单位)更改",
            "demo": "disconnectFromParent:true",
            "description": "用于子单位脱离父单位",
            "key": "disconnectFromParent",
            "name": "脱离父单位",
            "value_type": "bool"
        },
        {
            "Section": {
                "key": "[action_NAME] / [hiddenAction_NAME]",
                "name": "行动/动作/触发"
            },
            "comment": "结果-附件(附属，子单位)更改",
            "demo": "attachments_unload:true",
            "description": "卸载所有附属。可以与attachments_onlyonslot一起使用。与运输单位卸载相同",
            "key": "attachments_unload",
            "name": "卸载附属",
            "value_type": "bool"
        },
        {
            "Section": {
                "key": "[action_NAME] / [hiddenAction_NAME]",
                "name": "行动/动作/触发"
            },
            "comment": "结果-附件(附属，子单位)更改",
            "demo": "attachments_disconnect:true",
            "description": "断开所有现在所在位置的附属。可以与attachments_onlyonslot一起使用。",
            "key": "attachments_disconnect",
            "name": "附属断开连接",
            "value_type": "bool"
        },
        {
            "Section": {
                "key": "[action_NAME] / [hiddenAction_NAME]",
                "name": "行动/动作/触发"
            },
            "comment": "结果-标签变更",
            "demo": "temporarilyAddTags:TEM_PD_shiba",
            "description": "将标签添加到单位，直到转换或重置。",
            "key": "temporarilyAddTags",
            "name": "临时标签添加",
            "value_type": "string"
        },
        {
            "Section": {
                "key": "[action_NAME] / [hiddenAction_NAME]",
                "name": "行动/动作/触发"
            },
            "comment": "结果-标签变更",
            "demo": "temporarilyRemoveTags:TEM_PD_shiba",
            "description": "从单位上删除标签，直到将其转换或重置。",
            "key": "temporarilyRemoveTags",
            "name": "临时标签删除",
            "value_type": "string"
        },
        {
            "Section": {
                "key": "[action_NAME] / [hiddenAction_NAME]",
                "name": "行动/动作/触发"
            },
            "comment": "结果-标签变更",
            "demo": "resetToDefaultTags:true",
            "description": "重置为默认标签。",
            "key": "resetToDefaultTags",
            "name": "标签重置",
            "value_type": "bool"
        },
        {
            "Section": {
                "key": "[action_NAME] / [hiddenAction_NAME]",
                "name": "行动/动作/触发"
            },
            "comment": "结果-标签变更",
            "demo": "addGlobalTeamTags:TEM_UP_shiba",
            "description": "为玩家的团队添加此全局标签。与self.globalTeamTags()一起使用可创建解锁和升级。",
            "key": "addGlobalTeamTags",
            "name": "添加全局标签",
            "value_type": "string"
        },
        {
            "Section": {
                "key": "[action_NAME] / [hiddenAction_NAME]",
                "name": "行动/动作/触发"
            },
            "comment": "结果-标签变更",
            "demo": "removeGlobalTeamTags:TEM_UP_shiba",
            "description": "从玩家队伍中删除此全局标签。",
            "key": "removeGlobalTeamTags",
            "name": "移除全局标签",
            "value_type": "string"
        },
        {
            "Section": {
                "key": "[action_NAME] / [hiddenAction_NAME]",
                "name": "行动/动作/触发"
            },
            "comment": "结果-显示讯息",
            "demo": "showMessageToPlayer:对面傻蛋，你看不到！",
            "description": "向玩家个人发送信息。自己发给自己。",
            "key": "showMessageToPlayer",
            "name": "发送消息至玩家",
            "value_type": "string"
        },
        {
            "Section": {
                "key": "[action_NAME] / [hiddenAction_NAME]",
                "name": "行动/动作/触发"
            },
            "comment": "结果-显示讯息",
            "demo": "showMessageToPlayer_es:text test shiba\r\nshowMessageToPlayer_zh:文本测试柴犬",
            "description": "向玩家个人发送信息。自己发给自己。多语言版。注意:这种格式是支持几乎所有字符串显示给玩家，即使当引用不显示它",
            "key": "showMessageToPlayer_{LANG}",
            "name": "发送消息至玩家",
            "value_type": "string"
        },
        {
            "Section": {
                "key": "[action_NAME] / [hiddenAction_NAME]",
                "name": "行动/动作/触发"
            },
            "comment": "结果-显示讯息",
            "demo": "showMessageToAllPlayers:对面傻猫，队友说是不是？",
            "description": "向所有玩家发送消息。",
            "key": "showMessageToAllPlayers",
            "name": "发送消息至所有",
            "value_type": "string"
        },
        {
            "Section": {
                "key": "[action_NAME] / [hiddenAction_NAME]",
                "name": "行动/动作/触发"
            },
            "comment": "结果-显示讯息",
            "demo": "showMessageToAllEnemyPlayers:我投靠，收不？",
            "description": "发送消息给所有敌人。",
            "key": "showMessageToAllEnemyPlayers",
            "name": "发送消息给所有敌人",
            "value_type": "string"
        },
        {
            "Section": {
                "key": "[action_NAME] / [hiddenAction_NAME]",
                "name": "行动/动作/触发"
            },
            "comment": "结果-显示讯息",
            "demo": "showQuickWarLogToPlayer:对面制杖，你看不到。",
            "description": "向玩家个人发送战争快报。（在左下角）",
            "key": "showQuickWarLogToPlayer",
            "name": "发送战争快报至玩家",
            "value_type": "string"
        },
        {
            "Section": {
                "key": "[action_NAME] / [hiddenAction_NAME]",
                "name": "行动/动作/触发"
            },
            "comment": "结果-显示讯息",
            "demo": "showQuickWarLogToAllPlayers:这是单位全局嘲讽。",
            "description": "向所有玩家发送战争快报。（在左下角）",
            "key": "showQuickWarLogToAllPlayers",
            "name": "发送战争快报至所有",
            "value_type": "string"
        },
        {
            "Section": {
                "key": "[action_NAME] / [hiddenAction_NAME]",
                "name": "行动/动作/触发"
            },
            "comment": "结果-显示讯息",
            "demo": "debugMessage:true",
            "description": "仅在启用调试模式的沙箱中显示。",
            "key": "debugMessage",
            "name": "排错信息",
            "value_type": "bool"
        },
        {
            "Section": {
                "key": "[placementRule_NAME]",
                "name": "放置规则"
            },
            "comment": null,
            "demo": "anyRuleInGroup:DogFoodPlace",
            "description": "放置规则组名。（仅需要通过此组规则中的1条，而不是全部通过。在其他放置规则中可使用相同的组名称来创建组。）",
            "key": "anyRuleInGroup",
            "name": "放置规则组",
            "value_type": "string"
        },
        {
            "Section": {
                "key": "[placementRule_NAME]",
                "name": "放置规则"
            },
            "comment": null,
            "demo": "searchTags:redFox",
            "description": "搜索至少包含这些标签之一的任何单位",
            "key": "searchTags",
            "name": "检索标签",
            "value_type": "string"
        },
        {
            "Section": {
                "key": "[placementRule_NAME]",
                "name": "放置规则"
            },
            "comment": null,
            "demo": "searchTeam:own",
            "description": "要搜索的团队可以是：自身|中立|盟友非自身|盟友|敌人|任何。  own|neutral|allyNotOwn|ally|enemy|any",
            "key": "searchTeam",
            "name": "检索队伍",
            "value_type": "string"
        },
        {
            "Section": {
                "key": "[placementRule_NAME]",
                "name": "放置规则"
            },
            "comment": null,
            "demo": "searchOffsetX:0",
            "description": "检索偏移，默认为0",
            "key": "searchOffsetX",
            "name": "检索偏移",
            "value_type": "float"
        },
        {
            "Section": {
                "key": "[placementRule_NAME]",
                "name": "放置规则"
            },
            "comment": null,
            "demo": "searchOffsetY:0",
            "description": "检索偏移，默认为0",
            "key": "searchOffsetY",
            "name": "检索偏移",
            "value_type": "float"
        },
        {
            "Section": {
                "key": "[placementRule_NAME]",
                "name": "放置规则"
            },
            "comment": null,
            "demo": "searchDistance:99",
            "description": "搜索距离",
            "key": "searchDistance",
            "name": "搜索距离",
            "value_type": "float"
        },
        {
            "Section": {
                "key": "[placementRule_NAME]",
                "name": "放置规则"
            },
            "comment": null,
            "demo": "excludeIncompleteBuildings:true",
            "description": "排除不完整的建筑",
            "key": "excludeIncompleteBuildings",
            "name": "排除不完整建筑",
            "value_type": "bool"
        },
        {
            "Section": {
                "key": "[placementRule_NAME]",
                "name": "放置规则"
            },
            "comment": null,
            "demo": "excludeNonBuildings:true",
            "description": "排除非建筑",
            "key": "excludeNonBuildings",
            "name": "排除非建筑",
            "value_type": "bool"
        },
        {
            "Section": {
                "key": "[placementRule_NAME]",
                "name": "放置规则"
            },
            "comment": null,
            "demo": "minCount:1",
            "description": "设定需要在搜索中找到的单位的最小数量。(如需要靠近某物)。默认值为0",
            "key": "minCount",
            "name": "最小数量",
            "value_type": "int"
        },
        {
            "Section": {
                "key": "[placementRule_NAME]",
                "name": "放置规则"
            },
            "comment": null,
            "demo": "maxCount:1",
            "description": "在匹配失败前设置最大单位数量(例如不能接近某个值)。默认为无限的",
            "key": "maxCount",
            "name": "最大数量",
            "value_type": "int"
        },
        {
            "Section": {
                "key": "[placementRule_NAME]",
                "name": "放置规则"
            },
            "comment": null,
            "demo": "blocksPlacement:true",
            "description": "禁止放置。默认为true。",
            "key": "blocksPlacement",
            "name": "禁止放置",
            "value_type": "bool"
        },
        {
            "Section": {
                "key": "[placementRule_NAME]",
                "name": "放置规则"
            },
            "comment": null,
            "demo": "cannotPlaceMessage:你不能睡觉，因为附近有柴犬在游荡~",
            "description": "如果此放置规则失败，则会向玩家显示消息（将成为mergedRuleGroup中的第一个失败规则）",
            "key": "cannotPlaceMessage",
            "name": "失败信息",
            "value_type": "string"
        },
        {
            "Section": {
                "key": "[placementRule_NAME]",
                "name": "放置规则"
            },
            "comment": null,
            "demo": "checkEachTile:true",
            "description": "[true / false]默认为true（仅对测试单元中心设置为false，true会检查显示在放置网格上的单元下方的每个图块）",
            "key": "checkEachTile",
            "name": "检查每个地块",
            "value_type": "bool"
        },
        {
            "Section": {
                "key": "[global_resource_NAME]",
                "name": "全局资源"
            },
            "comment": "定义与玩家所有单位共享的新资源，其工作方式类似于内置的资金。添加到\"all-units.template\"（位于mod根目录）",
            "demo": "displayName:资金",
            "description": "用户界面中此资源的名称",
            "key": "displayName",
            "name": "显示名称",
            "value_type": "string"
        },
        {
            "Section": {
                "key": "[global_resource_NAME]",
                "name": "全局资源"
            },
            "comment": "定义与玩家所有单位共享的新资源，其工作方式类似于内置的资金。添加到\"all-units.template\"（位于mod根目录）",
            "demo": "displayNameShort:￥",
            "description": "在较小的UI上显示的文本（如action的悬浮文本）默认为displayName",
            "key": "displayNameShort",
            "name": "显示短名称",
            "value_type": "string"
        },
        {
            "Section": {
                "key": "[global_resource_NAME]",
                "name": "全局资源"
            },
            "comment": "定义与玩家所有单位共享的新资源，其工作方式类似于内置的资金。添加到\"all-units.template\"（位于mod根目录）",
            "demo": "hidden:true",
            "description": "向玩家隐藏此资源",
            "key": "hidden",
            "name": "隐藏",
            "value_type": "bool"
        },
        {
            "Section": {
                "key": "[global_resource_NAME]",
                "name": "全局资源"
            },
            "comment": "定义与玩家所有单位共享的新资源，其工作方式类似于内置的资金。添加到\"all-units.template\"（位于mod根目录）",
            "demo": "priority:1",
            "description": "如果多个mod单元中定义了同名的资源，则使用具有最高优先级的displayName/displayColor",
            "key": "priority",
            "name": "优先级",
            "value_type": "float"
        },
        {
            "Section": {
                "key": "[global_resource_NAME]",
                "name": "全局资源"
            },
            "comment": "定义与玩家所有单位共享的新资源，其工作方式类似于内置的资金。添加到\"all-units.template\"（位于mod根目录）",
            "demo": "displayColor:#FF0000",
            "description": "颜色，可以是十六进制，带有可选的alpha",
            "key": "displayColor",
            "name": "显示颜色",
            "value_type": "color"
        },
        {
            "Section": {
                "key": "[global_resource_NAME]",
                "name": "全局资源"
            },
            "comment": "定义与玩家所有单位共享的新资源，其工作方式类似于内置的资金。添加到\"all-units.template\"（位于mod根目录）",
            "demo": "displayRoundedDown:true",
            "description": "对资源进行舍入显示为整数。",
            "key": "displayRoundedDown",
            "name": "显示为整数",
            "value_type": "bool"
        },
        {
            "Section": {
                "key": "[global_resource_NAME]",
                "name": "全局资源"
            },
            "comment": "定义与玩家所有单位共享的新资源，其工作方式类似于内置的资金。添加到\"all-units.template\"（位于mod根目录）",
            "demo": "displayWhenZero:true",
            "description": "资源为零时也显示。",
            "key": "displayWhenZero",
            "name": "为零时显示",
            "value_type": "bool"
        },
        {
            "Section": {
                "key": "[resource_NAME]",
                "name": "局部资源"
            },
            "comment": "为单元定义一个新的局部资源。工作方式就像内置的ammo资源",
            "demo": "displayName:计数器",
            "description": "UI中此资源的名称(如悬停在单元信息上)",
            "key": "displayName",
            "name": "显示名称",
            "value_type": "string"
        },
        {
            "Section": {
                "key": "[resource_NAME]",
                "name": "局部资源"
            },
            "comment": "为单元定义一个新的局部资源。工作方式就像内置的ammo资源",
            "demo": "displayNameShort:s",
            "description": "在较小的UI上显示的文本（如action的悬浮文本）默认为displayName",
            "key": "displayNameShort",
            "name": "显示短名称",
            "value_type": "string"
        },
        {
            "Section": {
                "key": "[resource_NAME]",
                "name": "局部资源"
            },
            "comment": "为单元定义一个新的局部资源。工作方式就像内置的ammo资源",
            "demo": "hidden:true",
            "description": "对玩家隐藏这个资源",
            "key": "hidden",
            "name": "隐藏",
            "value_type": "bool"
        },
        {
            "Section": {
                "key": "[resource_NAME]",
                "name": "局部资源"
            },
            "comment": "为单元定义一个新的局部资源。工作方式就像内置的ammo资源",
            "demo": "equivalentGlobalResourceForAI:true",
            "description": "用于向AI提示具有本地资源的资源节点可用于获取不同的全局资源。例如，当一台收割机卸载资源",
            "key": "equivalentGlobalResourceForAI",
            "name": "作为AI的全局资源",
            "value_type": "bool"
        },
        {
            "Section": {
                "key": "[template_NAME]",
                "name": "模板"
            },
            "comment": "模板部分可以具有任何键，并且其自身无效。\r\n\r\n可以使用[core]copyFrom从其他文件中引用模板。\r\n例如：[core]\r\ncopyFrom:ROOT:effects/explodeEffects.template。\r\ncopyFrom可以一次引用多个文件。\r\n\r\n这些功能都可以与任何部分一起使用，而不仅仅是模板",
            "demo": "@copyFromSection:projectile_1",
            "description": "在任何节中使用，以引用节或模板的代码。如@copyFromSection template_name/action_name/projectile_name",
            "key": "@copyFromSection",
            "name": "复制节",
            "value_type": "string"
        },
        {
            "Section": {
                "key": "[template_NAME]",
                "name": "模板"
            },
            "comment": "模板部分可以具有任何键，并且其自身无效。\r\n\r\n可以使用[core]copyFrom从其他文件中引用模板。\r\n例如：[core]\r\ncopyFrom:ROOT:effects/explodeEffects.template。\r\ncopyFrom可以一次引用多个文件。\r\n\r\n这些功能都可以与任何部分一起使用，而不仅仅是模板",
            "demo": "[action_test]\r\n@copyFrom_skipThisSection:true",
            "description": "在任何节中使用，例如，在引用时候不复制某个action.",
            "key": "@copyFrom_skipThisSection",
            "name": "复制但跳过节",
            "value_type": "string"
        },
        {
            "Section": {
                "key": "[template_NAME]",
                "name": "模板"
            },
            "comment": "模板部分可以具有任何键，并且其自身无效。\r\n\r\n可以使用[core]copyFrom从其他文件中引用模板。\r\n例如：[core]\r\ncopyFrom:ROOT:effects/explodeEffects.template。\r\ncopyFrom可以一次引用多个文件。\r\n\r\n这些功能都可以与任何部分一起使用，而不仅仅是模板",
            "demo": "@define targetEffect: boom",
            "description": "在一个节中定义一个局部变量(最好在模板外部)",
            "key": "@define X",
            "name": "局部变量",
            "value_type": "string"
        },
        {
            "Section": {
                "key": "[template_NAME]",
                "name": "模板"
            },
            "comment": "模板部分可以具有任何键，并且其自身无效。\r\n\r\n可以使用[core]copyFrom从其他文件中引用模板。\r\n例如：[core]\r\ncopyFrom:ROOT:effects/explodeEffects.template。\r\ncopyFrom可以一次引用多个文件。\r\n\r\n这些功能都可以与任何部分一起使用，而不仅仅是模板",
            "demo": "@global targetEffect: pop",
            "description": "定义在所有节中使用的全局变量。注意：局部变量具有更高的优先级",
            "key": "@global X",
            "name": "全局变量",
            "value_type": "string"
        },
        {
            "Section": {
                "key": "[template_NAME]",
                "name": "模板"
            },
            "comment": "模板部分可以具有任何键，并且其自身无效。\r\n\r\n可以使用[core]copyFrom从其他文件中引用模板。\r\n例如：[core]\r\ncopyFrom:ROOT:effects/explodeEffects.template。\r\ncopyFrom可以一次引用多个文件。\r\n\r\n这些功能都可以与任何部分一起使用，而不仅仅是模板",
            "demo": "spawnEffects:effect_${targetEffect}",
            "description": "${X}可以用来引用变量(也可以在模板外部完成)",
            "key": "${X}",
            "name": "变量引用",
            "value_type": "string"
        },
        {
            "Section": {
                "key": "[template_NAME]",
                "name": "模板"
            },
            "comment": "模板部分可以具有任何键，并且其自身无效。\r\n\r\n可以使用[core]copyFrom从其他文件中引用模板。\r\n例如：[core]\r\ncopyFrom:ROOT:effects/explodeEffects.template。\r\ncopyFrom可以一次引用多个文件。\r\n\r\n这些功能都可以与任何部分一起使用，而不仅仅是模板",
            "demo": "addResources:credits=${core.price * 2 + 10}",
            "description": "${section.key}可以用来引用键（也可以在模板外部完成）。",
            "key": "${section.key}",
            "name": "值引用",
            "value_type": "string"
        },
        {
            "Section": {
                "key": "[template_NAME]",
                "name": "模板"
            },
            "comment": "模板部分可以具有任何键，并且其自身无效。\r\n\r\n可以使用[core]copyFrom从其他文件中引用模板。\r\n例如：[core]\r\ncopyFrom:ROOT:effects/explodeEffects.template。\r\ncopyFrom可以一次引用多个文件。\r\n\r\n这些功能都可以与任何部分一起使用，而不仅仅是模板",
            "demo": null,
            "description": "可用于将动态逻辑添加到某些字符串中。 （不能在任何地方使用）。 该值将每一帧更新。\r\n [action]text: Missing hp %{self.maxHp - self.hp}",
            "key": "%{X}",
            "name": null,
            "value_type": "string"
        },
        {
            "Section": {
                "key": "[template_NAME]",
                "name": "模板"
            },
            "comment": "模板部分可以具有任何键，并且其自身无效。\r\n\r\n可以使用[core]copyFrom从其他文件中引用模板。\r\n例如：[core]\r\ncopyFrom:ROOT:effects/explodeEffects.template。\r\ncopyFrom可以一次引用多个文件。\r\n\r\n这些功能都可以与任何部分一起使用，而不仅仅是模板",
            "demo": "copyFrom:\"\"\"\r\nROOT:a.ini,\r\nROOT:b.ini,\r\nROOT:c.ini\r\n\"\"\"\r\n",
            "description": "可用于多行字符串。 从最终结果中删除换行符。",
            "key": "\"\"\" text \"\"\"",
            "name": null,
            "value_type": "string"
        }
    ],
    "version": "0.0.1"
}

export function getCodeMap() {
    return codeMap
}

export function searchCodeMap(keysToCheck: { [sec: string]: string[] }, unit: Config): { [sec: string]: { [key: string]: Code } } {
    const results: { [sec: string]: { [key: string]: Code } } = {};
    for (const code of unit.code) {
        const sec = code.Section.key;
        if (keysToCheck[sec]) {
            if (!results[sec]) {
                results[sec] = {};
            }
            for (const key of keysToCheck[sec]) {
                if (code.key === key) {
                    results[sec][key] = code;
                }
            }
        }
    }
    return results;
}