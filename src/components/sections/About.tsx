import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Badge } from "@/components/ui/Badge";
import profilePhoto from "@/assets/profile-photo.jpg";

const facts = [
  { label: "โรงเรียน", value: "Princess Chulabhorn Science High School, Lopburi" },
  {
    label: "มหาวิทยาลัย",
    value: "King Mongkut's University of Technology Thonburi",
  },
  { label: "สาขา", value: "Computer Engineering" },
  { label: "สนใจ", value: "AI · Computer Vision · Full-stack Development" },
];

export function About() {
  return (
    <Section id="about" aria-label="About">
      <div className="grid gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <Reveal>
          <div className="glow-border relative mx-auto aspect-square w-full max-w-sm overflow-hidden rounded-2xl border border-border">
            <img
              src={profilePhoto}
              alt="Nattawat ในงานแข่งขัน hackathon"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </Reveal>

        <div>
          <Reveal>
            <p className="mb-4 text-sm text-muted">เกี่ยวกับผม</p>
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Princess Chulabhorn Science High School Lopburi{" "}
              <span className="text-muted">→</span> KMUTT, Computer
              Engineering
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-6 max-w-xl font-body leading-relaxed text-muted">
              เรียนวิศวกรรมคอมพิวเตอร์ที่ King Mongkut&apos;s University of
              Technology Thonburi สนใจงานด้าน AI, Computer Vision และการพัฒนา
              full-stack เป็นพิเศษ ชอบลงมือทำโปรเจกต์จริงมากกว่าอ่านทฤษฎีอย่าง
              เดียว ตั้งแต่บอทเทรดทองคำที่วิเคราะห์กราฟและแปลกลยุทธ์ภาษาคนให้
              เป็นพารามิเตอร์การเทรด ไปจนถึงเว็บแอปที่ใช้ machine learning
              ช่วยอ่านฉลากยา นอกเวลาเรียนก็มักหาโจทย์จากการแข่งขัน hackathon
              มาฝึกฝีมือเรื่อยๆ
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <dl className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {facts.map((fact) => (
                <div key={fact.label}>
                  <dt className="text-xs uppercase tracking-wide text-muted">
                    {fact.label}
                  </dt>
                  <dd className="mt-1 text-sm text-foreground">
                    {fact.value}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="mt-8 flex flex-wrap gap-2">
              <Badge>AI</Badge>
              <Badge>Computer Vision</Badge>
              <Badge>Full-stack</Badge>
              <Badge>Quant / Trading Tools</Badge>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
