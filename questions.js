 var bridge = 'BRIDGE'
 exports.questions = [
  {
    type: 'input',
    name: 'manifest_version',
    message: 'manifest_version',
    default: 2
  },
  {
    type: 'input',
    name: 'name',
    message: 'name',
    default: 'My Extension'
  },
  {
    type: 'input',
    name: 'version',
    message: 'version',
    default: 'versionString'
  },
  {
    type: 'input',
    name: 'default_locale',
    message: 'default_locale',
    default: 'en'
  },
  {
    type: 'input',
    name: 'description',
    message: 'description',
    default: 'A plain text description'
  },
  {
    type: 'input',
    name: 'icons.' + bridge + '-16', // inquier里 如果对象 key 都是数字 该对象会视为数组对待 （暂不清楚 是机制 还是bug）
    message: 'icons.16',
    default: 'icons16.png'
  },
  {
    type: 'input',
    name: 'icons["48"]',
    message: 'icons.48',
    default: 'icons48.png'
  },
  {
    type: 'input',
    name: 'icons["128"]',
    message: 'icons.128',
    default: 'icons128.png'
  },
  {
    type: 'input',
    name: 'browser_action.default_icon.' + bridge + '-16', // 同上
    message: 'browser_action.default_icon.16',
    default: 'images/icon16.png',
  },
  {
    type: 'input',
    name: 'browser_action.default_icon[24]',
    message: 'browser_action.default_icon.24',
    default: 'images/icon24.png',
  },
  {
    type: 'input',
    name: 'browser_action.default_icon[32]',
    message: 'browser_action.default_icon.32',
    default: 'images/icon32.png',
  },
  {
    type: 'input',
    name: 'browser_action.default_title',
    message: 'browser_action.title',
    default: 'google chrome',
  },
  {
    type: 'input',
    name: 'browser_action.default_popup',
    message: 'browser_action.popup',
    default: 'popup.html',
  },
  {
    type: 'input',
    name: 'page_action.default_icon.' + bridge + '-16', // 同上
    message: 'page_action.default_icon.16',
    default: 'images/icon16.png',
  },
  {
    type: 'input',
    name: 'page_action.default_icon[24]',
    message: 'page_action.default_icon.24',
    default: 'images/icon24.png',
  },
  {
    type: 'input',
    name: 'page_action.default_icon[32]',
    message: 'page_action.default_icon.32',
    default: 'images/icon32.png',
  },
  {
    type: 'input',
    name: 'page_action.default_title',
    message: 'page_action.default_title',
    default: 'google chrome',
  },
  {
    type: 'input',
    name: 'page_action.default_popup',
    message: 'page_action.default_popup',
    default: 'popup.html',
  },
  {
    type: 'input',
    name: 'author',
    message: 'author',
    default: 'sogo.com',
  },
  {
    type: 'input',
    name: 'automation',
    message: 'automation',
    default: '',
  },
  {
    type: 'input',
    name: 'background.script',
    message: 'background.script',
    default: ["background.js"],
    filter: function (val) {
      if (typeof val === 'string') {
        return val.split(',')
      }
    },
    validate: function (val) { // @note：有这个配置是 default 貌似不生效
      // @todo 校验
      return true
    }
  },
  {
    type: 'input',
    name: 'background.page',
    message: 'background.page',
    default: "background.html",
  },
  {
    type: 'confirm',
    name: 'background.persistent',
    message: 'background.persistent',
    default: false,
  },
  {
    type: 'input',
    name: 'background_page',
    message: 'background_page',
    default: "background.html",
  },
  {
    type: 'input',
    name: 'chrome_settings_overrides.homepage',
    message: 'chrome_settings_overrides.homepage',
    default: "http://www.homepage.com",
  },
  {
    type: 'input',
    name: 'chrome_settings_overrides.search_provider.name',
    message: 'chrome_settings_overrides.search_provider.name',
    default: "name.__MSG_url_domain__",
  },
  {
    type: 'input',
    name: 'chrome_settings_overrides.search_provider.keyword',
    message: 'chrome_settings_overrides.search_provider.keyword',
    default: "keyword.__MSG_url_domain__",
  },
  {
    type: 'input',
    name: 'chrome_settings_overrides.search_provider.search_url',
    message: 'chrome_settings_overrides.search_provider.search_url',
    default: "http://www.foo.__MSG_url_domain__/s?q={searchTerms}",
  },
  {
    type: 'input',
    name: 'chrome_settings_overrides.search_provider.favicon_url',
    message: 'chrome_settings_overrides.search_provider.favicon_url',
    default: "http://www.foo.__MSG_url_domain__/favicon.ico",
  },
  {
    type: 'input',
    name: 'chrome_settings_overrides.search_provider.suggest_url',
    message: 'chrome_settings_overrides.search_provider.suggest_url',
    default: "http://www.foo.__MSG_url_domain__/suggest?q={searchTerms}",
  },
  {
    type: 'input',
    name: 'chrome_settings_overrides.search_provider.instant_url',
    message: 'chrome_settings_overrides.search_provider.instant_url',
    default: "http://www.foo.__MSG_url_domain__/instant?q={searchTerms}",
  },
  {
    type: 'input',
    name: 'chrome_settings_overrides.search_provider.image_url',
    message: 'chrome_settings_overrides.search_provider.image_url',
    default: "http://www.foo.__MSG_url_domain__/image?q={searchTerms}",
  },
  {
    type: 'input',
    name: 'chrome_settings_overrides.search_provider.search_url_post_params',
    message: 'chrome_settings_overrides.search_provider.search_url_post_params',
    default: "search_lang=__MSG_url_domain__",
  },
  {
    type: 'input',
    name: 'chrome_settings_overrides.search_provider.suggest_url_post_params',
    message: 'chrome_settings_overrides.search_provider.suggest_url_post_params',
    default: "suggest_lang=__MSG_url_domain__",
  },
  {
    type: 'input',
    name: 'chrome_settings_overrides.search_provider.instant_url_post_params',
    message: 'chrome_settings_overrides.search_provider.instant_url_post_params',
    default: "instant_lang=__MSG_url_domain__",
  },
  {
    type: 'input',
    name: 'chrome_settings_overrides.search_provider.image_url_post_params',
    message: 'chrome_settings_overrides.search_provider.image_url_post_params',
    default: "image_lang=__MSG_url_domain__",
  },
  {
    type: 'input',
    name: 'chrome_settings_overrides.search_provider.alternate_urls',
    message: 'chrome_settings_overrides.search_provider.alternate_urls',
    default: ["http://www.moo.__MSG_url_domain__/s?q={searchTerms}", "http://www.noo.__MSG_url_domain__/s?q={searchTerms}"],
    filter: function (val) {
      if (typeof val === 'string') {
        return val.split(',')
      }
    },
    validate: function (val) { // @note：有这个配置是 default 貌似不生效
      // @todo 校验
      return true
    }
  },
  {
    type: 'input',
    name: 'chrome_settings_overrides.search_provider.encoding',
    message: 'chrome_settings_overrides.search_provider.encoding',
    default: 'UTF-8'
  },
  {
    type: 'confirm',
    name: 'chrome_settings_overrides.search_provider.is_default',
    message: 'chrome_settings_overrides.search_provider.is_default',
    default: true
  },
  {
    type: 'input',
    name: 'chrome_settings_overrides.startup_pages',
    message: 'chrome_settings_overrides.startup_pages',
    default: ["http://www.startup.com"],
    filter: function (val) {
      if (typeof val === 'string') {
        return val.split(',')
      }
    },
    validate: function (val) { // @note：有这个配置是 default 貌似不生效
      // @todo 校验
      return true
    }
  },
  {
    type: 'confirm',
    name: 'chrome_ui_overrides.bookmarks_ui.remove_button',
    message: 'chrome_ui_overrides.bookmarks_ui.remove_button',
    default: true
  },
  {
    type: 'confirm',
    name: 'chrome_ui_overrides.bookmarks_ui.remove_bookmark_shortcut',
    message: 'chrome_ui_overrides.bookmarks_ui.remove_bookmark_shortcut',
    default: true
  },
  {
    type: 'input',
    name: 'chrome_url_overrides.pageToOverride',
    message: 'chrome_url_overrides.pageToOverride',
    default: 'myPage.html'
  },
  {
    type: 'input',
    name: 'commands.toggle-feature-foo.suggested_key.default',
    message: 'commands.toggle-feature-foo.suggested_key.default',
    default: 'Ctrl+Shift+Y'
  },
  {
    type: 'input',
    name: 'commands.toggle-feature-foo.suggested_key.mac',
    message: 'commands.toggle-feature-foo.suggested_key.mac',
    default: 'Command+Shift+Y'
  },
  {
    type: 'input',
    name: 'commands.toggle-feature-foo.description',
    message: 'commands.toggle-feature-foo.description',
    default: 'Toggle feature foo'
  },
  {
    type: 'input',
    name: 'commands._execute_browser_action.suggested_key.windows',
    message: 'commands._execute_browser_action.suggested_key.windows',
    default: 'Ctrl+Shift+Y'
  },
  {
    type: 'input',
    name: 'commands._execute_browser_action.suggested_key.mac',
    message: 'commands._execute_browser_action.suggested_key.mac',
    default: 'Command+Shift+Y'
  },
  {
    type: 'input',
    name: 'commands._execute_browser_action.suggested_key.chromeos',
    message: 'commands._execute_browser_action.suggested_key.chromeos',
    default: 'Ctrl+Shift+U'
  },
  {
    type: 'input',
    name: 'commands._execute_browser_action.suggested_key.linux',
    message: 'commands._execute_browser_action.suggested_key.linux',
    default: 'Ctrl+Shift+J'
  },
  {
    type: 'input',
    name: 'commands._execute_page_action.suggested_key.default',
    message: 'commands._execute_page_action.suggested_key.default',
    default: 'Ctrl+Shift+E'
  },
  {
    type: 'input',
    name: 'commands._execute_page_action.suggested_key.windows',
    message: 'commands._execute_page_action.suggested_key.windows',
    default: 'Alt+Shift+P'
  },
  {
    type: 'input',
    name: 'commands._execute_page_action.suggested_key.mac',
    message: 'commands._execute_page_action.suggested_key.mac',
    default: 'Alt+Shift+P'
  },
  {
    type: 'input',
    name: 'content_capabilities',
    message: 'content_capabilities',
    default: ''
  },
  {
    type: 'input',
    name: 'content_scripts[0].matches',
    message: 'content_scripts[0].matches',
    default: ["http://www.google.com/*"],
    when: function(answers) {
      return answers.bacon;
    }
  }
]

// 转换成最终需要的key
exports.revise = function (answers) {
   // icons
   answers.icons["16"] = answers.icons[ bridge + '-16']
   delete answers.icons[bridge + '-16']

   // browser_action.default_icon
   answers.browser_action.default_icon["16"] = answers.browser_action.default_icon[bridge + '-16']
   delete answers.browser_action.default_icon[bridge + '-16']

   // page_action.default_icon
   answers.page_action.default_icon["16"] = answers.page_action.default_icon[bridge + '-16']
   delete answers.page_action.default_icon[bridge + '-16']

   return answers
}