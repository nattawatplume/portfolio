import type { Project } from "@/types";
import vismedsLogo from "@/assets/vismeds-logo.png";

export const PROJECTS: Project[] = [
  {
    id: "vismeds",
    title: "VisMedS",
    description:
      "เว็บแอปค้นหาและตรวจสอบข้อมูลฉลากยา ผู้ใช้ค้นหาชื่อยาเพื่อดูรายละเอียด สรรพคุณ วิธีใช้ และข้อควรระวัง พร้อมโมเดล Machine Learning (TFLite) ช่วยจำแนกภาพยาเพื่อระบุตัวยาจากรูปถ่าย",
    tags: ["Python", "TensorFlow Lite", "HTML", "CSS"],
    year: "2025",
    role: "ออกแบบและพัฒนา",
    logo: vismedsLogo,
    links: {
      live: "https://nattawatplume.github.io/med-label-web/",
      github: "https://github.com/nattawatplume/med-label-web",
    },
    featured: true,
  },
  {
    id: "xauusd-sniper-bot",
    title: "XAUUSD Sniper Bot",
    description:
      "บอทเทรดทองคำ (XAUUSD) วิเคราะห์หลาย timeframe พร้อมระบบ AI Trader ที่แปลงกลยุทธ์ภาษาธรรมชาติเป็นพารามิเตอร์การเทรด เชื่อมต่อ MetaTrader 5 และแจ้งเตือนผ่าน Discord",
    tags: ["Python", "MetaTrader 5", "Groq LLM", "Discord API"],
    year: "2025",
    role: "ออกแบบและพัฒนา",
    links: {
      github: "https://github.com/nattawatplume/Xauusd_Bot",
    },
    featured: true,
  },
];
