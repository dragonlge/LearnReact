{
    "window.zoomLevel": 2,
    "workbench.colorTheme": "Rebecca-dark",
    "editor.renderIndentGuides": false,
    "workbench.iconTheme": "material-icon-theme",
    "editor.formatOnSave": true,
    "eslint.autoFixOnSave": true,
    "eslint.validate": [
        "javascript",
        "javascriptreact",
        {
            "language": "vue",
            "autoFix": true
        }
    ],
    // 使用插件格式化 html
    "vetur.format.defaultFormatter.html": "js-beautify-html",
    // 屏蔽vetur的js格式化
    "vetur.format.defaultFormatter.js": "prettier",
    "vetur.format.defaultFormatterOptions": {
        "js-beautify-html": {
            // force-aligned | force-expand-multiline
            "wrap_attributes": "force-aligned"
        },
        "prettyhtml": {
            "printWidth": 100,
            "singleQuote": false,
            "wrapAttributes": false,
            "sortAttributes": true
        },
        // --- 解决问题 ---
        "prettier": {
            "semi": false,
            "singleQuote": true
        }
        // --- 解决问题 ---
    },
    "editor.formatOnPaste": true,
    "editor.formatOnType": true,
    "editor.suggestSelection": "first",
    "vsintellicode.modify.editor.suggestSelection": "automaticallyOverrodeDefaultValue",
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true
    },
    "files.autoSave": "afterDelay",
    "files.autoSaveDelay": 5000,
    "[javascript]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    }

}