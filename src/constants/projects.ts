import type { Project } from "@/types";
import vismedsLogo from "@/assets/vismeds-logo.png";

const GH = "https://github.com/nattawatplume/";

export const PROJECTS: Project[] = [
  {
    id: "vismeds",
    title: "VisMedS",
    category: "AI / Vision",
    status: "Live",
    description:
      "ระบบให้ข้อมูลยาจากฉลากและรูปถ่าย แบ่งเป็น 3 ส่วนที่ทำงานร่วมกัน ตั้งแต่เว็บค้นหายา เว็บวิเคราะห์ภาพยา ไปจนถึง LINE Bot ที่ตอบจากฐานข้อมูลยาเท่านั้น",
    highlights: [
      "ฐานข้อมูลยา 30 รายการในเว็บค้นหา พร้อมหน้ารายละเอียดและ FAQ",
      "โมเดล TFLite จำแนกภาพยา มีคลาส not-a-drug กันภาพที่ไม่ใช่ยา",
      "LINE Bot มี guardrail ข้อความฉุกเฉิน และให้ LLM ตอบจากฐานข้อมูลเท่านั้น",
    ],
    modules: [
      { name: "Label Search", desc: "HTML · JS", href: GH + "med-label-web" },
      { name: "Image Analyzer", desc: "Flask · TFLite", href: GH + "VidMedS_Website" },
      { name: "LINE Bot", desc: "FastAPI · Typhoon", href: GH + "VisMedS_LineChatBot" },
    ],
    tags: ["Python", "TensorFlow Lite", "FastAPI", "Flask", "LINE API"],
    year: "2025",
    role: "ออกแบบและพัฒนา",
    logo: vismedsLogo,
    links: { live: "https://nattawatplume.github.io/med-label-web/", github: GH + "VisMedS_LineChatBot" },
    featured: true,
  },
  {
    id: "xauusd",
    title: "XAUUSD AI Trader",
    category: "Trading",
    status: "Research",
    description:
      "ระบบเทรดทองคำบน MetaTrader 5 ประกอบด้วย EA (MQL5) พร้อม backtest ด้วย Python และต้นแบบ AI ที่ให้โมเดล local (Ollama) หรือ Gemini เสนอสัญญาณ โดย EA เป็นผู้ตรวจสอบและส่งคำสั่งเอง",
    highlights: [
      "AI รันแบบ shadow mode เป็นค่าเริ่มต้น",
      "Fail-closed: ถ้า AI ตอบผิดรูปแบบหรือหมดเวลา จะไม่เปิดออเดอร์",
      "จำกัดความเสี่ยงต่อไม้ ออเดอร์ต่อวัน และมี equity kill-switch",
      "เป็นโปรเจกต์วิจัย ยังไม่ได้พิสูจน์ผลกำไร",
    ],
    tags: ["MQL5", "Python", "FastAPI", "Ollama", "Gemini"],
    year: "2025",
    role: "ออกแบบและพัฒนา",
    links: { github: GH + "Xauusd_Bot" },
  },
  {
    id: "gembot",
    title: "Gembot Robot",
    category: "Robotics",
    status: "Competition build",
    description:
      "หุ่นยนต์เก็บหินอัตโนมัติ ใช้กล้องกับ OpenCV ตรวจจับสนาม สีหิน และตำแหน่งหุ่นผ่าน ArUco แล้วให้ state machine วางแผนและสั่ง ESP32 ผ่าน UDP มีโหมดจำลองไว้ทดสอบโดยไม่ต้องมีหุ่นจริง",
    highlights: [
      "Planner รันที่ 20 Hz พร้อมตัวกรองให้หินนิ่งก่อนเชื่อ",
      "แอปเดียวรวมขั้นตอนเตรียมแข่ง ตั้งแต่ปรับกล้องจนถึงจูนสี",
      "มี hand teleop ด้วย gesture recognizer",
    ],
    tags: ["Python", "OpenCV", "ArUco", "ESP32", "C++"],
    year: "2026",
    role: "ออกแบบและพัฒนา",
    links: { github: GH + "Gembot_Robot" },
  },
  {
    id: "genworld",
    title: "AI GenWorld Game",
    category: "Game",
    status: "Prototype",
    description:
      "เกมจำลองเมืองเพื่อการเรียนรู้ ใช้ LLM แต่งเนื้อเรื่องโลก เหตุการณ์ประจำช่อง และเหตุการณ์ระดับโลก โดยทุกตัวเลือกต้องเป็น trade-off และผ่านตัวตรวจสอบก่อนเข้าเกม",
    highlights: [
      "เมืองมี 5 สถานะ: ความมั่งคั่ง ทรัพยากร ประชากร ความก้าวหน้า ความสุข",
      "Validator ตรวจรูปแบบและความสมดุลของผล AI พร้อม fallback เมื่อ AI ตอบผิด",
      "ให้ครูอนุมัติเนื้อเรื่องก่อนเริ่มเกม",
    ],
    tags: ["Node.js", "JavaScript", "LLM API"],
    year: "2026",
    role: "ออกแบบและพัฒนา",
    links: { github: GH + "ai_genworldGame" },
  },
];
