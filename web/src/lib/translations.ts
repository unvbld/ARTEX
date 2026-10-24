export type Language = 'en' | 'zh-CN';

export const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navbar
    'navbar.version': 'Version',

    // Update badge
    'update.new_version': 'New version {version}, click to update',
    'update.new_version_short': 'New version',

    // Account / Nav User
    'account.change_password': 'Change Password',
    'account.logout': 'Log Out',

    // Change Password Dialog
    'changepw.title': 'Change Password',
    'changepw.description': 'Username is fixed as ARTEX. Current password required to verify; existing tokens remain valid until expiry.',
    'changepw.current_password': 'Current Password',
    'changepw.new_password': 'New Password',
    'changepw.confirm_new_password': 'Confirm New Password',
    'changepw.cancel': 'Cancel',
    'changepw.saving': 'Saving…',
    'changepw.confirm': 'Confirm',
    'changepw.fill_required': 'Please fill in current and new passwords',
    'changepw.not_match': 'New passwords do not match',
    'changepw.success': 'Password changed',
    'changepw.failed': 'Failed: {error}',

    // Copy Button
    'copy.label': 'Copy',
    'copy.copied': 'Copied',
    'copy.failed': 'Copy failed, please select text manually',

    // Login Page
    'login.checking': 'Checking login status…',
    'login.title': 'Login',
    'login.subtitle': 'Welcome back, enter your password to continue using ARTEX',
    'login.username': 'Username',
    'login.password': 'Password',
    'login.password_placeholder': 'Enter password',
    'login.agree_prefix': 'I have read and agree to ',
    'login.terms_link': 'Terms of Use',
    'login.signing_in': 'Signing in...',
    'login.sign_in': 'Sign In',
    'login.cannot_connect': 'Unable to connect to backend service',
    'login.agree_first': 'Please read and agree to the Terms of Use first',
    'login.invalid_credentials': 'Invalid username or password',
    'login.terms_title': 'ARTEX Terms of Use & Disclaimer',
    'login.terms_version': 'Version v1.0 · Effective 2026-09-18 · Please read all terms before logging in',
    'login.terms_read_end': 'You have read all terms',
    'login.terms_scroll': 'Please scroll to the bottom to confirm',
    'login.terms_agree_btn': 'I have read and agree to all terms',

    // Setup Page
    'setup.unable_to_connect': 'Unable to connect to backend service',
    'setup.passwords_not_match': 'The passwords you entered do not match',
    'setup.password_too_short': 'Password must be at least 8 characters',
    'setup.init_failed': 'Initialization failed',
    'setup.unable_to_confirm_status': 'Unable to confirm initialization status',
    'setup.init_password': 'Initialize Password',
    'setup.backend_unavailable': 'Backend or database is temporarily unavailable. To avoid overwriting existing passwords, this entry has been temporarily closed — please restore the service and try again.',
    'setup.first_time_message': 'First time using ARTEX, please set a login password (at least 8 characters)',
    'setup.retry': 'Retry',
    'setup.new_password': 'New Password',
    'setup.at_least_8_chars': 'At least 8 characters',
    'setup.confirm_password': 'Confirm Password',
    'setup.re_enter_password': 'Re-enter password',
    'setup.saving': 'Saving...',
    'setup.set_password_and_login': 'Set Password & Log In',

    // Sidebar group labels
    'sidebar.features': 'Features',
    'sidebar.system': 'System',
  },
  'zh-CN': {
    // Navbar
    'navbar.version': '版本',

    // Update badge
    'update.new_version': '发现新版本 {version}，点击前往更新',
    'update.new_version_short': '新版本',

    // Account / Nav User
    'account.change_password': '修改密码',
    'account.logout': '退出登录',

    // Change Password Dialog
    'changepw.title': '修改密码',
    'changepw.description': '用户名固定为 ARTEX。需先输入当前密码验证；修改后已签发的登录 token 仍有效直至过期。',
    'changepw.current_password': '当前密码',
    'changepw.new_password': '新密码',
    'changepw.confirm_new_password': '确认新密码',
    'changepw.cancel': '取消',
    'changepw.saving': '修改中…',
    'changepw.confirm': '确认修改',
    'changepw.fill_required': '请填写当前密码和新密码',
    'changepw.not_match': '两次输入的新密码不一致',
    'changepw.success': '密码已修改',
    'changepw.failed': '修改失败：{error}',

    // Copy Button
    'copy.label': '复制',
    'copy.copied': '已复制',
    'copy.failed': '复制失败，请手动选择文本复制',

    // Login Page
    'login.checking': '正在检查登录状态…',
    'login.title': '登录',
    'login.subtitle': '欢迎回来，请输入密码以继续使用 ARTEX',
    'login.username': '用户名',
    'login.password': '密码',
    'login.password_placeholder': '请输入密码',
    'login.agree_prefix': '我已阅读并同意',
    'login.terms_link': '《使用须知》',
    'login.signing_in': '登录中...',
    'login.sign_in': '登录',
    'login.cannot_connect': '无法连接到后端服务',
    'login.agree_first': '请先阅读并同意《使用须知》',
    'login.invalid_credentials': '用户名或密码错误',
    'login.terms_title': 'ARTEX 使用须知与免责声明',
    'login.terms_version': '版本 v1.0 · 生效日期 2026-09-18 · 请在登录前完整阅读以下全部条款',
    'login.terms_read_end': '您已浏览全部条款',
    'login.terms_scroll': '请将条款滚动至底部后再确认',
    'login.terms_agree_btn': '我已阅读并同意全部条款',

    // Setup Page
    'setup.unable_to_connect': '无法连接到后端服务',
    'setup.passwords_not_match': '两次输入的密码不一致',
    'setup.password_too_short': '密码长度至少 8 位',
    'setup.init_failed': '初始化失败',
    'setup.unable_to_confirm_status': '无法确认初始化状态',
    'setup.init_password': '初始化密码',
    'setup.backend_unavailable': '后端或数据库暂时不可用。为避免覆盖实例上已有的密码，初始化入口已临时关闭——请恢复服务后重试。',
    'setup.first_time_message': '首次使用 ARTEX，请为账户设置一个登录密码（至少 8 位）',
    'setup.retry': '重试',
    'setup.new_password': '新密码',
    'setup.at_least_8_chars': '至少 8 位',
    'setup.confirm_password': '确认密码',
    'setup.re_enter_password': '再次输入密码',
    'setup.saving': '保存中...',
    'setup.set_password_and_login': '设置密码并登录',

    // Sidebar group labels
    'sidebar.features': '功能',
    'sidebar.system': '系统',
  },
};

export function t(key: string, lang: Language = 'zh-CN', replacements?: Record<string, string>): string {
  let text = translations[lang]?.[key] ?? translations['zh-CN']?.[key] ?? key;
  if (replacements) {
    for (const [k, v] of Object.entries(replacements)) {
      text = text.replace(`{${k}}`, v);
    }
  }
  return text;
}

/** Hook-free helper: read language from localStorage (client only, fallback zh-CN) */
export function getStoredLanguage(): Language {
  if (typeof window === 'undefined') return 'zh-CN';
  const v = localStorage.getItem('language');
  return v === 'en' || v === 'zh-CN' ? v : 'zh-CN';
}

// Extra translations appended
export const extraTranslations: Record<Language, Record<string, string>> = {
  en: {
    // Dashboard header
    'dash.title': 'Overview',
    'dash.subtitle': 'System global status · Live refresh',

    // Stat cards
    'dash.active_tasks': 'Active Tasks',
    'dash.no_tasks': 'No tasks',
    'dash.exploring': 'Exploring',
    'dash.paused': 'Paused',
    'dash.done': 'Done',
    'dash.confirmed_findings': 'Findings',
    'dash.critical': 'Critical',
    'dash.high': 'High',
    'dash.medium': 'Medium',
    'dash.low': 'Low',
    'dash.asset_nodes': 'Assets',
    'dash.cross_task': 'Shared across tasks',
    'dash.traffic': 'Traffic',
    'dash.recording': 'Recording',
    'dash.capture_off': 'Capture disabled',
    'dash.token_usage': 'Token Usage',
    'dash.token_in': 'In',
    'dash.token_incache': '(incl. cache',
    'dash.token_out': 'Out',

    // LLM token section
    'dash.llm_tokens': 'LLM Token Usage',
    'dash.old_ver': 'Legacy',
    'dash.new_ver': 'New',
    'dash.all': 'All',
    'dash.default': 'default',
    'dash.total_io': 'Total (Input+Output)',
    'dash.tasks_count': 'tasks',
    'dash.input_miss': 'Input (miss)',
    'dash.cache_hit': 'Cache Hit',
    'dash.output': 'Output',
    'dash.cache_rate': 'Cache Hit Rate',
    'dash.no_data': 'No data',
    'dash.7d': '7d',
    'dash.30d': '30d',
    'dash.3m': '3mo',
    'dash.6m': '6mo',
    'dash.1y': '1yr',

    // Activity
    'dash.activity': 'Activity',
    'dash.events': 'events',
    'dash.view_tasks': 'View Tasks',
    'dash.no_activity': 'No activity',

    // Findings
    'dash.findings': 'Findings',
    'dash.all_findings': 'All',
    'dash.no_findings': 'No findings',

    // Tasks section
    'dash.tasks': 'Tasks',
    'dash.tasks_count_label': 'tasks',
    'dash.all_tasks': 'All',
    'dash.status': 'Status',
    'dash.engine': 'Engine',
    'dash.target_progress': 'Target Progress',
    'dash.in_flight': 'In-Flight',
    'dash.last_activity': 'Last Activity',
    'dash.no_tasks_yet': 'No tasks',

    // Asset distribution
    'dash.asset_dist': 'Asset Distribution',
    'dash.by_type': 'By Type',
    'dash.no_assets': 'No asset data',
    'dash.total_nodes': 'nodes',
    'dash.root_domain': 'Root Domain',
    'dash.ip': 'IP',
    'dash.subdomain': 'Subdomain',
    'dash.app': 'App',
    'dash.service': 'Service',
    'dash.endpoint': 'Endpoint',

    // Traffic
    'dash.traffic_codes': 'Traffic Status Codes',
    'dash.requests': 'requests',
    'dash.no_traffic': 'No traffic data',

    // System status
    'dash.system_status': 'System Status',
    'dash.llm_config': 'LLM Config',
    'dash.configured': 'Configured',
    'dash.traffic_capture': 'Traffic Capture',
    'dash.off': 'Off',
    'dash.no_pending': 'No pending approvals',
    'dash.pending_intercept': 'Pending Intercepts',

    // Asset intercept page
    'intercept.title': 'Asset Intercept',
    'intercept.desc': 'Global asset blocklist: matched domains / IPs / URLs / subnets will be blocked from all operations',
    'intercept.hint': 'Supports exact and fuzzy matching for domains / IPs / URLs, and CIDR subnets; built-in fuzzy blocks for government (.gov / .gov.cn) and education (.edu / .edu.cn) sites',
    'intercept.new_rule': 'New Rule',
    'intercept.loading': 'Loading…',
    'intercept.no_rules': 'No asset intercept rules',
    'intercept.add_first': 'Add first rule',
    'intercept.type': 'Type',
    'intercept.pattern': 'Pattern',
    'intercept.note': 'Note',
    'intercept.enabled': 'Enabled',
    'intercept.builtin': 'Built-in',
    'intercept.edit_rule': 'Edit Rule',
    'intercept.new_rule_sheet': 'New Rule',
    'intercept.sheet_desc': 'Assets matching this rule will be blocked globally',
    'intercept.match_type': 'Match Type',
    'intercept.match_content': 'Match Content',
    'intercept.hint_cidr': 'CIDR subnet, e.g. 192.168.0.0/16',
    'intercept.hint_fuzzy': 'Fuzzy match: target is blocked if it contains this value',
    'intercept.hint_exact': 'Exact match: target must match exactly',
    'intercept.notes_optional': 'Notes (optional)',
    'intercept.notes_placeholder': 'Describe the purpose of this rule',
    'intercept.enable_rule': 'Enable this rule',
    'intercept.cancel': 'Cancel',
    'intercept.saving': 'Saving…',
    'intercept.save': 'Save',
    'intercept.pattern_empty': 'Pattern cannot be empty',
    'intercept.cidr_invalid': 'Invalid CIDR format, e.g. 192.168.0.0/16',
    'intercept.load_fail': 'Failed to load rules',
    'intercept.rule_updated': 'Rule updated',
    'intercept.rule_created': 'Rule created',
    'intercept.rule_deleted': 'Rule deleted',
    'intercept.confirm_delete': 'Delete asset intercept rule "{pattern}"?',
    'intercept.exact_domain': 'Domain (exact)',
    'intercept.exact_ip': 'IP (exact)',
    'intercept.exact_url': 'URL (exact)',
    'intercept.fuzzy_domain': 'Domain (fuzzy)',
    'intercept.fuzzy_ip': 'IP (fuzzy)',
    'intercept.fuzzy_url': 'URL (fuzzy)',
    'intercept.cidr': 'CIDR Subnet',
    'intercept.group_exact': 'Exact Match',
    'intercept.group_fuzzy': 'Fuzzy Match',
    'intercept.group_cidr': 'Subnet',
  },
  'zh-CN': {
    // Dashboard header
    'dash.title': '总览',
    'dash.subtitle': '系统全局状态 · 实时刷新',

    // Stat cards
    'dash.active_tasks': '活跃任务',
    'dash.no_tasks': '暂无任务',
    'dash.exploring': '探索',
    'dash.paused': '暂停',
    'dash.done': '完成',
    'dash.confirmed_findings': '确认发现',
    'dash.critical': '严重',
    'dash.high': '高危',
    'dash.medium': '中危',
    'dash.low': '低危',
    'dash.asset_nodes': '资产节点',
    'dash.cross_task': '跨任务共享',
    'dash.traffic': '流量交互',
    'dash.recording': '录制中',
    'dash.capture_off': '捕获未开启',
    'dash.token_usage': 'Token 用量',
    'dash.token_in': '入',
    'dash.token_incache': '（含缓存',
    'dash.token_out': '出',

    // LLM token section
    'dash.llm_tokens': 'LLM Token 消耗',
    'dash.old_ver': '旧版',
    'dash.new_ver': '新版',
    'dash.all': '全部',
    'dash.default': '默认',
    'dash.total_io': '合计 (输入+输出)',
    'dash.tasks_count': '个任务',
    'dash.input_miss': '输入(未命中)',
    'dash.cache_hit': '缓存命中',
    'dash.output': '输出',
    'dash.cache_rate': '缓存命中率',
    'dash.no_data': '暂无数据',
    'dash.7d': '7天',
    'dash.30d': '30天',
    'dash.3m': '3月',
    'dash.6m': '6月',
    'dash.1y': '一年',

    // Activity
    'dash.activity': '活动流',
    'dash.events': '条事件',
    'dash.view_tasks': '查看任务',
    'dash.no_activity': '暂无活动记录',

    // Findings
    'dash.findings': '发现',
    'dash.all_findings': '全部',
    'dash.no_findings': '暂无发现',

    // Tasks section
    'dash.tasks': '任务',
    'dash.tasks_count_label': '个任务',
    'dash.all_tasks': '全部',
    'dash.status': '状态',
    'dash.engine': '引擎',
    'dash.target_progress': '目标进度',
    'dash.in_flight': '在途',
    'dash.last_activity': '最近活动',
    'dash.no_tasks_yet': '暂无任务',

    // Asset distribution
    'dash.asset_dist': '资产分布',
    'dash.by_type': '按类型',
    'dash.no_assets': '暂无资产数据',
    'dash.total_nodes': '节点',
    'dash.root_domain': '根域名',
    'dash.ip': 'IP',
    'dash.subdomain': '子域名',
    'dash.app': '应用',
    'dash.service': '服务',
    'dash.endpoint': '端点',

    // Traffic
    'dash.traffic_codes': '流量状态码',
    'dash.requests': '次请求',
    'dash.no_traffic': '暂无流量数据',

    // System status
    'dash.system_status': '系统状态',
    'dash.llm_config': 'LLM 配置',
    'dash.configured': '已配置',
    'dash.traffic_capture': '流量捕获',
    'dash.off': '关闭',
    'dash.no_pending': '无待审批拦截',
    'dash.pending_intercept': '待审批拦截',

    // Asset intercept page
    'intercept.title': '资产拦截',
    'intercept.desc': '全局资产黑名单：命中的域名 / IP / URL / 网段将被拦截，不对其执行任何操作',
    'intercept.hint': '支持全等与模糊匹配的域名 / IP / URL，以及 CIDR 网段；默认内置模糊拦截政府（.gov / .gov.cn）与教育（.edu / .edu.cn）网站',
    'intercept.new_rule': '新建规则',
    'intercept.loading': '加载中…',
    'intercept.no_rules': '暂无资产拦截规则',
    'intercept.add_first': '新建第一条规则',
    'intercept.type': '类型',
    'intercept.pattern': '匹配内容',
    'intercept.note': '备注',
    'intercept.enabled': '启用',
    'intercept.builtin': '内置',
    'intercept.edit_rule': '编辑资产拦截规则',
    'intercept.new_rule_sheet': '新建资产拦截规则',
    'intercept.sheet_desc': '命中此规则的目标资产会被全局拦截',
    'intercept.match_type': '匹配类型',
    'intercept.match_content': '匹配内容',
    'intercept.hint_cidr': 'CIDR 网段，形如 192.168.0.0/16',
    'intercept.hint_fuzzy': '模糊匹配：目标包含此内容即命中',
    'intercept.hint_exact': '全等匹配：目标需与此内容完全一致',
    'intercept.notes_optional': '备注（可选）',
    'intercept.notes_placeholder': '说明这条规则的用途',
    'intercept.enable_rule': '启用此规则',
    'intercept.cancel': '取消',
    'intercept.saving': '保存中…',
    'intercept.save': '保存',
    'intercept.pattern_empty': '匹配内容不能为空',
    'intercept.cidr_invalid': 'CIDR 格式无效，形如 192.168.0.0/16',
    'intercept.load_fail': '加载资产拦截规则失败',
    'intercept.rule_updated': '规则已更新',
    'intercept.rule_created': '规则已创建',
    'intercept.rule_deleted': '规则已删除',
    'intercept.confirm_delete': '确定删除资产拦截规则「{pattern}」？',
    'intercept.exact_domain': '域名（全等）',
    'intercept.exact_ip': 'IP（全等）',
    'intercept.exact_url': 'URL（全等）',
    'intercept.fuzzy_domain': '域名（模糊）',
    'intercept.fuzzy_ip': 'IP（模糊）',
    'intercept.fuzzy_url': 'URL（模糊）',
    'intercept.cidr': 'CIDR 网段',
    'intercept.group_exact': '全等匹配',
    'intercept.group_fuzzy': '模糊匹配',
    'intercept.group_cidr': '网段',
  },
};

// Merge extraTranslations into main translations
for (const lang of Object.keys(extraTranslations) as Language[]) {
  Object.assign(translations[lang], extraTranslations[lang]);
}
