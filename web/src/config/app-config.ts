import packageJson from "../../package.json";

const currentYear = new Date().getFullYear();

export const APP_CONFIG = {
  name: "ARTEX",
  version: packageJson.version,
  copyright: `© ${currentYear}, ARTEX.`,
  meta: {
    // Default to English, but support bilingual
    title: "ARTEX — Autonomous Penetration Testing Console",
    titleZh: "ARTEX — 自主渗透测试控制台",
    description: "LLM-Powered Autonomous Penetration Testing System Console",
    descriptionZh: "LLM 驱动的自主渗透测试系统控制台",
  },
};
