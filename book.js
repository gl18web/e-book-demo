module.exports = {
    
        // 书籍信息
        "title": "书名",
        "description": "描述",
        "isbn": "图书编号",
          "author": "作者",
          "lang": "zh-cn",
    
        // 插件列表
        "plugins": ["-lunr", "-search", "search-pro" , "-code","theme-default","expandable-chapters","back-to-top-button", "flexible-alerts"],
    
        // 插件全局配置
        "pluginsConfig": {
             "flexible-alerts": {
            style: "flat" // callout 或 flat
        }
    },
    
          // 模板变量
          "variables": {
              // 自定义
        }
    
}