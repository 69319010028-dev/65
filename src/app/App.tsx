import { useState, useEffect } from 'react';
import svgPaths from "./imports/svg-6sovak61ez";
import imgAdobeExpressFile31 from "figma:asset/7ba16f5335969b66c314f7955ee4897ab548acd6.png";

// =================================================================
// 📌 ส่วนที่ 1: เมนูนำทางด้านบน (HEADER / NAVIGATION)
// =================================================================
function Navigation() {
  const [activeSection, setActiveSection] = useState('home');

  // ✏️ [จุดแก้ไข 1]: รายการเมนูภาษาไทย
  const navItems = [
    { id: 'home', label: 'หน้าแรก' },
    { id: 'about', label: 'เกี่ยวกับฉัน' },
    { id: 'education', label: 'ประวัติการศึกษา' },
    { id: 'motto', label: 'คติประจำใจ' },
    { id: 'contacts', label: 'ติดต่อเรา' }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.id);
      const scrollPosition = window.scrollY + 100;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1f1f1f]/90 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-12">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`font-['Poppins:Regular',_sans-serif] text-[18px] transition-colors duration-200 ${
                  activeSection === item.id ? 'text-[#f8f7f9]' : 'text-[#f8f7f9]/70 hover:text-[#f8f7f9]'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
          
          <div className="flex items-center gap-6">
            <div className="h-11 w-px bg-[#f8f7f9]" />
            <div className="flex gap-6">
              <SocialIcon type="instagram" />
              <SocialIcon type="twitter" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

function SocialIcon({ type }: { type: 'instagram' | 'twitter' }) {
  const url = type === 'instagram' 
    ? 'https://www.instagram.com/sang_onname?dlrf=MTI2dGkwdTdoMmU0dA==' 
    : 'https://twitter.com';

  const getPath = () => {
    if (type === 'instagram') {
      return (
        <>
          <path
            d={svgPaths.p4fdb300}
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
          <path
            d={svgPaths.p39557800}
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
          <path
            d="M17.5 6.5H17.51"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        </>
      );
    } else {
      return (
        <path
          d={svgPaths.p3350a500}
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      );
    }
  };

  return (
    <a 
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="text-[#f8f7f9] hover:text-[#f8f7f9]/80 transition-colors duration-200"
    >
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24">
        {getPath()}
      </svg>
    </a>
  );
}

// =================================================================
// 📌 ส่วนที่ 2: หน้าแรก / ข้อความต้อนรับ (HERO & WELCOME SECTION)
// ⭐ [ตรงนี้คือเวลคัม สามารถเปลี่ยนชื่อและตำแหน่งงานได้ตามต้องการ]
// =================================================================
function HeroSection() {
  const scrollToEducation = () => {
    const element = document.getElementById('education');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Background blur effect */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[905px] h-[897px]">
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" viewBox="0 0 1417 1409">
              <defs>
                <filter id="blur" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
                  <feGaussianBlur stdDeviation="128" />
                </filter>
              </defs>
              <ellipse
                cx="708.5"
                cy="704.5"
                rx="452.5"
                ry="448.5"
                fill="#f8f7f9"
                filter="url(#blur)"
              />
            </svg>
          </div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* ฝั่งซ้าย: ข้อความต้อนรับและปุ่มกด */}
        <div className="space-y-8">
          <div className="space-y-4">
            {/* 👇 [แก้ไขข้อความทักทายและชื่อของคุณได้ที่นี่] 👇 */}
            <h2 className="font-['Poppins:Bold',_sans-serif] text-[24px] text-[#f8f7f9]">
              HI, I'M SANG
            </h2>
            {/* 👇 [แก้ไขตำแหน่งงานของคุณได้ที่นี่] 👇 */}
            <h1 className="font-['Poppins:Bold',_sans-serif] text-[64px] lg:text-[96px] leading-[0.9] text-[#f8f7f9]">
              I'M A student
            </h1>
          </div>
          
          {/* ปุ่มกดดูประวัติการศึกษา */}
          <button 
            onClick={scrollToEducation}
            className="group border-2 border-[#f8f7f9] px-8 py-4 rounded-2xl transition-all duration-300 hover:bg-[#f8f7f9] hover:text-[#1f1f1f]"
          >
            {/* 👇 [แก้ไขข้อความบนปุ่มได้ที่นี่] 👇 */}
            <span className="font-['Poppins:Bold',_sans-serif] text-[24px] text-[#f8f7f9] group-hover:text-[#1f1f1f] transition-colors duration-300">
              เกี่ยวกับฉัน (about)
            </span>
          </button>
        </div>

        {/* ฝั่งขวา: รูปภาพโปรไฟล์ */}
        <div className="relative">
          {/* 👇 [เปลี่ยนรูปภาพโปรไฟล์ของคุณได้ที่นี่] 👇 */}
          <div
            className="w-full h-[600px] lg:h-[800px] bg-cover bg-center bg-no-repeat rounded-lg"
            style={{ backgroundImage: `url('/profile.jpg')` }}
          />
        </div>
      </div>
    </section>
  );
}

// =================================================================
// 📌 ส่วนที่ 3: เกี่ยวกับฉัน (ABOUT ME & EDUCATION)
// ⭐ [ตรงนี้คือประวัติส่วนตัว วุฒิการศึกษา และประวัติการทำงาน]
// =================================================================
function AboutSection() {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="font-['Poppins:Bold',_sans-serif] text-[64px] lg:text-[96px] text-[#f8f7f9] mb-12">
          เกี่ยวกับฉัน (About me)
        </h2>
        
        <div className="max-w-4xl">
          {/* ✏️ [จุดแก้ไข 3.1]: ข้อความแนะนำตัว ย่อหน้าที่ 1 */}
          <p className="font-['Poppins:Regular',_sans-serif] text-[24px] text-[rgba(248,247,249,0.5)] leading-[1.5] mb-8">
            I'm Dynamic and results-driven Senior Business Development Associate with a robust background in sales, client relations, and Agile product management.
          </p>
          {/* ✏️ [จุดแก้ไข 3.2]: ข้อความแนะนำตัว ย่อหน้าที่ 2 */}
          <p className="font-['Poppins:Regular',_sans-serif] text-[24px] text-[rgba(248,247,249,0.5)] leading-[1.5]">
            I have a proven track record of exceeding targets, driving revenue growth, and leading high-performing teams. Experienced in utilizing data analytics, market research, and innovative strategies to achieve business objectives. Certified Scrum Product Owner (CSPO) with advanced expertise in Agile methodologies, product backlog management, and sprint planning. Passionate about continuous improvement and delivering customer-centric solutions that drive operational efficiency and market success.
          </p>
        </div>
      </div>
    </section>
  );
}

// =================================================================
// 📌 ส่วนที่ 4: ประวัติการศึกษา (EDUCATION)
// ⭐ [ตรงนี้คือส่วนแสดงประวัติการศึกษา สามารถแก้ไขหรือเพิ่มระดับการศึกษาได้]
// =================================================================
function EducationSection() {
  const educationList = [
    {
      title: "ปริญญาตรี — วิทยาศาสตรบัณฑิต หรือ วิศวกรรมศาสตรบัณฑิต",
      period: "2563 — 2567 (2020 — 2024)",
      description: "มหาวิทยาลัย / คณะ / สาขาวิชา — เกรดเฉลี่ย (GPA): 3.50 รายละเอียดวิชาเอกหรือโปรเจกต์จบการศึกษา"
    },
    {
      title: "มัธยมศึกษาตอนปลาย — แผนการเรียนวิทยาศาสตร์-คณิตศาสตร์",
      period: "2560 — 2563 (2017 — 2020)",
      description: "โรงเรียนมัธยมศึกษา — เกรดเฉลี่ยสะสม (GPAX): 3.75 กิจกรรมเด่นและผลงานวิชาการ"
    },
    {
      title: "มัธยมศึกษาตอนต้น",
      period: "2557 — 2560 (2014 — 2017)",
      description: "โรงเรียนมัธยมศึกษา — สำเร็จการศึกษาตามหลักสูตรการศึกษาขั้นพื้นฐาน"
    }
  ];

  return (
    <section id="education" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="font-['Poppins:Bold',_sans-serif] text-[64px] lg:text-[96px] text-[#f8f7f9] mb-12">
          ประวัติการศึกษา (Education)
        </h2>
        
        <div className="space-y-8">
          {educationList.map((item, index) => (
            <EducationItem
              key={index}
              title={item.title}
              period={item.period}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function EducationItem({ title, period, description }: { title: string; period: string; description: string }) {
  return (
    <div className="max-w-4xl relative">
      <div className="pl-8 relative">
        <div className="absolute left-[-9px] top-[12px] w-[15px] h-[15px] bg-white/80 rounded-full backdrop-blur-sm" 
             style={{ filter: 'blur(0.5px)' }} />
        <h3 className="font-['Poppins:ExtraBold',_sans-serif] text-[24px] text-[rgba(248,247,249,0.5)] mb-1">
          {title}
        </h3>
        <p className="font-['Poppins:ExtraLight',_sans-serif] text-[24px] text-[rgba(248,247,249,0.5)] mb-3">
          {period}
        </p>
        <p className="font-['Poppins:Medium',_sans-serif] text-[24px] text-[rgba(248,247,249,0.5)] leading-[1.5]">
          {description}
        </p>
      </div>
    </div>
  );
}

// =================================================================
// 📌 ส่วนที่ 5: คติประจำใจ (MOTTO & INSPIRATION)
// ⭐ [ตรงนี้คือส่วนคติประจำใจ สามารถเปลี่ยนคำคมและแนวคิดได้]
// =================================================================
function MottoSection() {
  return (
    <section id="motto" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="font-['Poppins:Bold',_sans-serif] text-[64px] lg:text-[96px] text-[#f8f7f9] mb-12">
          คติประจำใจ (Motto)
        </h2>
        
        <div className="max-w-4xl space-y-8">
          {/* การ์ดคติประจำใจหลัก */}
          <div className="relative pl-8 border-l-2 border-white/30 bg-white/[0.02] p-8 rounded-r-2xl border-t border-b border-r border-white/5">
            <div className="absolute -left-[9px] top-[24px] w-[16px] h-[16px] bg-white rounded-full backdrop-blur-sm" 
                 style={{ filter: 'blur(0.5px)' }} />
            <div className="text-[#f8f7f9]/20 text-[54px] font-serif leading-none mb-2">“</div>
            {/* 👇 [แก้ไขคติประจำใจของคุณที่นี่] 👇 */}
            <p className="font-['Poppins:Bold',_sans-serif] text-[26px] md:text-[34px] text-[#f8f7f9] leading-[1.4] mb-6 italic">
              ความพยายามไม่เคยทรยศใคร ถ้าเราไม่หยุดพัฒนาตัวเอง
            </p>
            <p className="font-['Poppins:Medium',_sans-serif] text-[18px] md:text-[20px] text-[#f8f7f9]/60">
              — คติพจน์ประจำใจในการดำเนินชีวิตและการทำงาน
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// =================================================================
// 📌 ส่วนที่ 6: ข้อมูลติดต่อ (CONTACTS)
// ⭐ [ตรงนี้คือส่วนแสดงช่องทางติดต่อ สามารถเปลี่ยนอีเมลและเบอร์โทรได้]
// =================================================================
function ContactsSection() {
  return (
    <section id="contacts" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="font-['Poppins:Bold',_sans-serif] text-[64px] lg:text-[96px] text-[#f8f7f9] mb-12">
          ติดต่อเรา (Contacts)
        </h2>
        
        <div className="space-y-4 max-w-4xl">
          {/* ✏️ [จุดแก้ไข 6.1]: อีเมลของคุณ */}
          <div>
            <span className="font-['Poppins:ExtraBold',_sans-serif] text-[24px] text-[rgba(248,247,249,0.5)]">
              Email - 
            </span>
            <span className="font-['Poppins:Medium',_sans-serif] text-[24px] text-[rgba(248,247,249,0.5)]">
              neo.maddison17@gmail.com
            </span>
          </div>
          {/* ✏️ [จุดแก้ไข 6.2]: เบอร์โทรศัพท์ของคุณ */}
          <div>
            <span className="font-['Poppins:ExtraBold',_sans-serif] text-[24px] text-[rgba(248,247,249,0.5)]">
              Phone - 
            </span>
            <span className="font-['Poppins:Medium',_sans-serif] text-[24px] text-[rgba(248,247,249,0.5)]">
              +916282587126
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <div className="bg-[#1f1f1f] min-h-screen text-white">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <EducationSection />
        <MottoSection />
        <ContactsSection />
      </main>
    </div>
  );
}