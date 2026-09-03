import { useState, useEffect, useRef } from 'react'
import OurStorySection from './components/OurStorySection'
import PartnerWithUsModal from './components/PartnerWithUsModal'
import PrivacyPolicyPage from './components/PrivacyPolicyPage'
import TermsOfServicePage from './components/TermsOfServicePage'
import TrustCenterPage from './components/TrustCenterPage'
import ContactUsPage from './components/ContactUsPage'

const heroPhoto = 'https://appcdn.goqii.com/storeimg/75445_1786343196.jpg'
const heroPhotoMobile = 'https://appcdn.goqii.com/storeimg/53788_1788428746.jpg'
const coachAvatar = 'https://images.unsplash.com/photo-1561973027-6bdfea7b3324?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=80&h=80&fit=crop&auto=format'
const moreInfoPhoto = 'https://appcdn.goqii.com/storeimg/16134_1787052594.png'
const womanFitnessPhoto = 'https://images.unsplash.com/photo-1480179087180-d9f0ec044897?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600&q=80'

const partnerPhotos = {
  employers: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600&q=80',
  payers: 'https://images.unsplash.com/photo-1686771416282-3888ddaf249b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600&q=80',
  providers: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600&q=80',
  pharma: 'https://images.unsplash.com/photo-1486825586573-7131f7991bdd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600&q=80',
  government: 'https://images.unsplash.com/photo-1594581979864-36977b15d0dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600&q=80',
}
const runnersBg = 'https://images.unsplash.com/photo-1513593771513-7b58b6c4af38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1800&q=80'

const trustedLogos = [
  { id: 1, src: 'https://goqii.com/webApp/uswebsite2025/assets/images/img-slide-trusted1.png', alt: 'Trusted Partner 1' },
  { id: 2, src: 'https://goqii.com/webApp/uswebsite2025/assets/images/img-slide-trusted2.png', alt: 'Trusted Partner 2' },
  { id: 3, src: 'https://goqii.com/webApp/uswebsite2025/assets/images/img-slide-trusted3.png', alt: 'Trusted Partner 3' },
  { id: 4, src: 'https://goqii.com/webApp/uswebsite2025/assets/images/img-slide-trusted4.png', alt: 'Trusted Partner 4' },
  { id: 5, src: 'https://goqii.com/webApp/uswebsite2025/assets/images/img-slide-trusted5.png', alt: 'Trusted Partner 5' },
  { id: 6, src: 'https://goqii.com/webApp/uswebsite2025/assets/images/img-slide-trusted6.png', alt: 'Trusted Partner 6' },
  { id: 7, src: 'https://goqii.com/webApp/uswebsite2025/assets/images/img-slide-trusted7.png', alt: 'Trusted Partner 7' },
  { id: 8, src: 'https://goqii.com/webApp/uswebsite2025/assets/images/img-slide-trusted8.png', alt: 'Trusted Partner 8' },
  { id: 9, src: 'https://goqii.com/webApp/uswebsite2025/assets/images/img-slide-trusted9.png', alt: 'Trusted Partner 9' },
  { id: 10, src: 'https://goqii.com/webApp/uswebsite2025/assets/images/img-slide-trusted10.png', alt: 'Trusted Partner 10' },
  { id: 11, src: 'https://goqii.com/webApp/uswebsite2025/assets/images/img-slide-trusted11.png', alt: 'Trusted Partner 11' },
  { id: 12, src: 'https://goqii.com/webApp/uswebsite2025/assets/images/img-slide-trusted12.png', alt: 'Trusted Partner 12' },
]

const complianceLogos = [
  { id: 1, src: 'https://goqii.com/webApp/uswebsite2025/assets/images/img-partner1.png', alt: 'Compliance Partner 1' },
  { id: 2, src: 'https://goqii.com/webApp/uswebsite2025/assets/images/img-partner2.png', alt: 'Compliance Partner 2' },
  { id: 3, src: 'https://goqii.com/webApp/uswebsite2025/assets/images/img-partner3.png', alt: 'Compliance Partner 3' },
  { id: 4, src: 'https://goqii.com/webApp/uswebsite2025/assets/images/img-partner4.png', alt: 'Compliance Partner 4' },
  { id: 5, src: 'https://goqii.com/webApp/uswebsite2025/assets/images/img-partner5.png', alt: 'Compliance Partner 5' },
  { id: 6, src: 'https://goqii.com/webApp/uswebsite2025/assets/images/img-partner6.png', alt: 'Compliance Partner 6' },
]

function TrustedOrganizationsCarousel() {
  return (
    <div className="w-full relative">
      {/* Continuous Infinite Marquee Track with Hover Pause */}
      <div className="overflow-hidden py-4 relative group">
        {/* Left & Right subtle edge fade gradients */}
        <div className="pointer-events-none absolute left-0 inset-y-0 w-16 sm:w-28 bg-gradient-to-r from-[#fbfcfd] via-[#fbfcfd]/80 to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 inset-y-0 w-16 sm:w-28 bg-gradient-to-l from-[#fbfcfd] via-[#fbfcfd]/80 to-transparent z-10" />

        <div className="animate-marquee flex items-center gap-8 sm:gap-14">
          {[...trustedLogos, ...trustedLogos].map((logo, idx) => (
            <div
              key={`${logo.id}-${idx}`}
              className="flex-shrink-0 flex items-center justify-center h-14 sm:h-16 px-4 py-2 bg-white rounded-xl border border-slate-100/90 shadow-[0_2px_10px_rgba(0,0,0,0.03)] hover:shadow-md hover:border-slate-200 transition-all duration-300"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-9 sm:h-11 max-w-[130px] sm:max-w-[150px] object-contain filter grayscale opacity-75 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function ComplianceLogosMarquee() {
  return (
    <div className="w-full relative py-4">
      {/* Continuous Infinite Marquee Track with Hover Pause */}
      <div className="overflow-hidden py-3 relative group">
        {/* Left & Right subtle edge fade gradients */}
        <div className="pointer-events-none absolute left-0 inset-y-0 w-12 sm:w-24 bg-gradient-to-r from-white via-white/90 to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 inset-y-0 w-12 sm:w-24 bg-gradient-to-l from-white via-white/90 to-transparent z-10" />

        <div className="animate-marquee flex items-center gap-8 sm:gap-14">
          {[...complianceLogos, ...complianceLogos, ...complianceLogos, ...complianceLogos].map((logo, idx) => (
            <div
              key={`${logo.id}-${idx}`}
              className="flex-shrink-0 flex items-center justify-center p-2 transition-transform duration-300 hover:scale-110"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-14 sm:h-16 md:h-20 max-w-[170px] sm:max-w-[210px] object-contain drop-shadow-xs"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

interface TeamMember {
  num: string
  name: string
  role: string
  tags: string[]
  img: string
  bio: string
  company?: string
  credentials?: string
  highlight?: string
  expertise?: string[]
  showBioLabel?: boolean
}

const leadershipTeam: TeamMember[] = [
  {
    num: '01',
    name: 'Vishal Gondal',
    role: 'Founder & CEO',
    company: 'GOQII INC.',
    tags: ['PREVENTIVE HEALTHCARE', 'AI, TECH & GAMING'],
    img: 'https://appcdn.goqii.com/storeimg/95221_1781178862.png',
    bio: 'A leading global figure at the intersection of healthcare, gaming, and entrepreneurship. As Founder and CEO of GOQii, he has transformed preventive healthcare by integrating AI, technology, and gamification across India, the UK, and the Middle East.\n\nKnown globally as the "Father of the Indian Gaming Industry," his early success with Indiagames culminated in its acquisition by The Walt Disney Company; he subsequently launched nCore Games, creator of FAU-G. Organises Mumbai Hacks for healthcare AI innovation. An avid marathon runner, trekker, and skydiver.',
    credentials: '25+ Years in Tech & Health · Indiagames → Disney · GOQii',
    highlight: 'Pioneered preventive health tech and gamified wellness in India and globally.'
  },
  {
    num: '02',
    name: 'Sachin Janghel',
    role: 'Co-Founder & CTO',
    company: 'GOQII INC.',
    tags: ['AI & HEALTHTECH', 'BLOCKCHAIN / UHT', 'GAMING & IOT'],
    img: 'https://appcdn.goqii.com/storeimg/40238_1781259761.png',
    bio: "The technology brain behind the entire GOQii ecosystem. Sachin co-founded GOQii in 2013 and has spent over a decade building one of the world's most comprehensive AI-driven preventive health platforms — from wearables and IoT devices to blockchain initiatives like the Universal Health Token (UHT).\n\nHis career began with 11 years in game and interactive application development across mobile, online, and social platforms, including as Technology Director at Indiagames, India's #1 gaming company acquired by Disney UTV. At Disney UTV, he then led the build-out of Interactive TV platforms — satellite, digital cable, HITS, and IPTV. At GOQii, he leads AI-powered digital health solutions, remote patient monitoring, clinical workflow automation, and strategic technology partnerships with global insurers and healthcare providers. A football and hockey player who represented his home state at national level tournaments.",
    credentials: 'Co-Founder · 12+ Years Building GOQii · Disney UTV · UHT Core Team',
  },
  {
    num: '03',
    name: 'Abhishek Sharma',
    role: 'Co-Founder & CEO, GOQii UK',
    company: 'GOQII INC.',
    tags: ['BRAND & MARKETING', 'UK MARKET', 'CONSUMER HEALTH'],
    img: 'https://appcdn.goqii.com/storeimg/42684_1781265347.png',
    bio: "Abhishek leads GOQii's UK operations and has been instrumental in building the brand's presence in one of the world's most demanding health markets. He brings over seven years at Nike across India, the USA, and the UK — spanning senior product and consumer roles — along with deep expertise in brand development, product marketing, PR, and social media. As Co-Founder and CMO from 2013, then COO, and now CEO of GOQii UK, he has grown the business from a startup into a recognised NHS-aligned health platform. A strong believer in sustainability and social impact, he has collaborated with global non-profits on key social projects. An ardent football fan, travel photographer, and long-distance motorbike rider.",
    credentials: 'Co-Founder · CEO GOQii UK · Nike · IIM Calcutta',
  },
  {
    num: '04',
    name: 'Champ Alreja',
    role: 'Co-Founder & Chief Business Officer',
    company: 'GOQII INC.',
    tags: ['PREVENTIVE HEALTH', 'HEALTH STORE', 'APAC'],
    img: 'https://appcdn.goqii.com/storeimg/29324_1781260039.png',
    bio: "Radical in thought, meticulous in execution. Champ co-founded GOQii in 2014, bringing hardware engineering, behavioural product thinking, and commercial instinct to the company's growth. Before GOQii, he founded HitPlay — a gadget and consumer tech company built from scratch before Flipkart, before Amazon, at 24 with no playbook and no funding. As a product designer and inventor, he built GOQii's first lines of wearables from 2013 — at a time when the only comparable device was the original Fitbit Flex, which had no screen and no real-time feedback. His devices did. His career began as a Sound Engineer, giving him a ground-up understanding of how people interact with technology. He also conceived and built the GOQii Health Store — a scientifically designed rewards and retention engine grounded in behavioural economics and game theory, now one of the platform's most distinctive moats. Leads global BD and APAC expansion across Hong Kong, Singapore, and the Asia Pacific. A competitive tennis player who has built health discipline the same way he builds companies — one consistent rep at a time.",
    credentials: 'Co-Founder · Wearables Pioneer · Health Store Architect',
  },
  {
    num: '05',
    name: 'Krishna Kumar',
    role: 'Chief Customer Officer',
    company: 'GOQII INC.',
    tags: ['CONSUMER ENGAGEMENT', 'BRAND STRATEGY', 'DIGITAL MARKETING'],
    img: 'https://appcdn.goqii.com/storeimg/55864_1781259937.png',
    bio: "A passion for brands, mountains, and startups is what drives KK. At GOQii, he is Chief Customer Officer and leads overall marketing strategy and consumer engagement — building systems that help people make healthier choices and sustain them over time. His career began in advertising across networks including Publicis, Leo Burnett, and WPP (Mindshare), before he founded Media2win in 2004 — a digital agency that grew into one of India's top digital firms and won multiple industry awards. That brought him to GOQii, where he works at the intersection of technology, data, coaching, and behavioural science. Also a Core Team member at Universal Health Token (UHT), focused on marketing. Outside work, he scales 6000+ metre peaks in the Himalayas every year and runs multiple marathons — proof that he lives the preventive health philosophy he champions.",
    credentials: 'CCO · Media2win Founder · UHT Core Team · Mindshare / WPP',
  },
  {
    num: '06',
    name: 'Saurabh Joshi',
    role: 'Chief Financial Officer (CFO)',
    company: 'GOQII INC.',
    tags: ['FINANCIAL STRATEGY', 'M&A & GOVERNANCE', 'HEALTHCARE & LIFE SCIENCES'],
    img: 'https://appcdn.goqii.com/storeimg/90986_1786510650.jpg',
    bio: "Saurabh Joshi is the Chief Financial Officer at GOQii, bringing over 20 years of leadership experience in finance, strategy, and business transformation across the healthcare and life sciences sectors.\n\nThroughout his career, he has led finance functions for globally recognized organizations including Lotus Surgicals Pvt. Ltd., Thermo Fisher Scientific, Piramal Healthcare, Siemens Healthcare, and Bharat Serums & Vaccines. His expertise spans financial planning, business scaling, mergers & acquisitions, fundraising, compliance, governance, and strategic growth.\n\nAt GOQii, Saurabh is focused on strengthening the company's financial foundation, enabling sustainable growth, and supporting innovation as GOQii continues its mission to transform preventive healthcare through technology and AI.",
    credentials: '20+ Years · Lotus Surgicals · Thermo Fisher · Piramal · Siemens · BSV',
  },
  {
    num: '07',
    name: 'Piyush Karnani',
    role: 'Chief Business Officer',
    company: 'GOQII INC.',
    tags: ['BANKING & INSURANCE', 'PAYMENTS', 'STRATEGIC PARTNERSHIPS'],
    img: 'https://appcdn.goqii.com/storeimg/51996_1781265652.png',
    bio: 'Senior business leader with 23+ years spanning banking, insurance, and healthtech. At GOQii, Piyush leads P&L ownership and the banking, insurance, payments, and strategic initiatives verticals — building alliances with banks, fintechs, insurers, and governments. He launched industry-first contactless and wearable payment solutions and led global expansion at GOQii. Previously VP of Digital Insurance & Consumer Business at Marsh & McLennan (country head), Head of Consumer Banking Sales & Liabilities at Standard Chartered Bank, Regional Head at Barclays, and Bancassurance roles at Citibank. A specialist in strategic partnerships, payments ecosystems, and embedded finance across global markets.',
    credentials: '23+ Years · Marsh · Standard Chartered · Barclays · Citibank',
  },
  {
    num: '08',
    name: 'Srinivasan V Swamy',
    role: 'Director',
    company: 'GOQII INC.',
    tags: ['FINANCE & GOVERNANCE', 'INSURANCE', 'FRACTIONAL CFO'],
    img: 'https://appcdn.goqii.com/storeimg/85230_1781259873.png',
    bio: "A Chartered Accountant with over 25 years in corporate finance and operations. Srini served as CFO of Bharti AXA Life Insurance, where he led finance, strategy, legal, compliance, and investment functions — including direct engagement with IRDA and the Ministry of Finance on complex policy issues. He later served as Independent Director at Aegon Life and Acko Insurance. Since founding CFO Bridge in 2011, he has become one of India's pioneers of the fractional CXO model, partnering with 500+ SMEs and startups across India, the US, and UAE. Also co-founder of CTO Bridge and CHRO Bridge. A passionate sleep advocate, Vipassana meditator, and yoga practitioner.",
    credentials: 'CA · Bharti AXA CFO · CFO Bridge Founder · 500+ SMEs',
  },
  {
    num: '09',
    name: 'Luke Coutinho',
    role: 'Co-Founder, Master Coach & Head Nutritionist',
    company: 'GOQII INC.',
    tags: ['INTEGRATIVE MEDICINE', 'HOLISTIC NUTRITION', 'PREVENTIVE HEALTH'],
    img: 'https://appcdn.goqii.com/storeimg/66935_1781259927.png',
    bio: "India's foremost integrative and lifestyle medicine expert, and the clinical soul of GOQii's coaching model. Luke has consulted and treated over 20,000 patients globally — including cancer, Alzheimer's, diabetes, and rare metabolic syndromes — through his signature five-pillar framework: Cellular Nutrition, Adequate Exercise, Quality Sleep, Emotional Detox, and Spirit. His global community of 17M+ spans billionaires to A-listers across Bollywood, royal families in the Middle East, and elite athletes. Named Champion for Lifestyle & Wellness for Prime Minister Modi's Fit India Movement. Four-time bestselling author. Founder of You Care Lifestyle and the Lifeness Science Institute. Over 250 talks across the world.",
    credentials: '17M+ Community · 20K+ Patients · PM Fit India Champion · Author',
  },
  {
    num: '10',
    name: 'Kamal Chandran',
    role: 'Chief Compliance & HR Officer',
    company: 'GOQII INC.',
    tags: ['HR STRATEGY', 'TALENT & CULTURE', 'COMPLIANCE'],
    img: 'https://appcdn.goqii.com/storeimg/12935_1781178888.png',
    bio: "HR leader, talent strategist, and NLP Life Performance Coach driving people and AI synergy at GOQii. Kamal leads the company's compliance and human resources function, with a career spanning Accenture (Talent Acquisition Delivery Lead — Product Industry), ScaleneWorks (VP RPO Head), and senior HR business partner roles. Simultaneously serves as Group Head Human Resources at nCORE Games. Specialises in strategic HR planning, talent acquisition, employee relations, diversity and inclusion, succession planning, and coaching. An IIM Nagpur alumna, she brings a rare combination of enterprise rigour and startup agility to building GOQii's people infrastructure.",
    credentials: 'CHRO · nCORE Group HR Head · Accenture · ScaleneWorks · IIM Nagpur',
  },
]

const boardMembers: TeamMember[] = [
  {
    num: '01',
    name: 'Bala Deshpande',
    role: 'MD, MegaDelta Capital',
    company: 'GOQII INC.',
    tags: ['VENTURE CAPITAL', 'CONSUMER TECH', 'MUMBAI'],
    img: 'https://appcdn.goqii.com/storeimg/61485_1781259954.png',
    bio: "One of India's most respected venture investors with nearly two decades spanning early-stage and growth capital. Started at ICICI Venture in 2001, then joined NEA to lead their India platform for 10 years. Played an instrumental role in India's first Internet IPO, first 24-hour news channel, and first payments tech company. Independent board member of Info Edge Ltd — a multi-billion-dollar category leader.",
    credentials: 'MD at MegaDelta Capital · Info Edge Director · ICICI Venture',
  },
  {
    num: '02',
    name: 'Dr. Christine Li',
    role: 'VP, Mitsui Healthcare',
    company: 'GOQII INC.',
    tags: ['HEALTHCARE STRATEGY', 'HCIT'],
    img: 'https://appcdn.goqii.com/storeimg/28916_1781259772.png',
    bio: "Physician-turned-strategist at Mitsui's global healthcare platform. Previously Parkway Pantai and IHH. HBS MBA; MBBS NUS.",
    credentials: 'Mitsui & Co · Harvard Business School · NUS Medicine',
  },
  {
    num: '03',
    name: 'Pravin Gandhi',
    role: 'GP, Seedfund',
    company: 'GOQII INC.',
    tags: ['VENTURE CAPITAL', 'STARTUPS', 'MUMBAI'],
    img: 'https://appcdn.goqii.com/storeimg/15448_1781259911.png',
    bio: "Founding figure of India's tech and VC ecosystem. 40+ years across Hinditron and Seedfund. Former TiE Mumbai President.",
    credentials: "Founding Figure of India's VC Ecosystem · Seedfund",
  },
  {
    num: '04',
    name: 'Vishal Gondal',
    role: 'Founder & CEO',
    company: 'GOQII INC.',
    tags: ['PREVENTIVE HEALTHCARE', 'AI, TECH & GAMING'],
    img: 'https://appcdn.goqii.com/storeimg/95221_1781178862.png',
    bio: 'A leading global figure at the intersection of healthcare, gaming, and entrepreneurship. As Founder and CEO of GOQii, he has transformed preventive healthcare by integrating AI, technology, and gamification across India, the UK, and the Middle East.\n\nKnown globally as the "Father of the Indian Gaming Industry," his early success with Indiagames culminated in its acquisition by The Walt Disney Company; he subsequently launched nCore Games, creator of FAU-G. Organises Mumbai Hacks for healthcare AI innovation. An avid marathon runner, trekker, and skydiver.',
    credentials: '25+ Years in Tech & Health · Indiagames → Disney · GOQii',
  },
  {
    num: '05',
    name: 'Amit Singhal',
    role: 'Former SVP Search — Google',
    company: 'FOUNDER, SITARE FOUNDATION',
    tags: ['SEARCH / AI', 'ENGINEERING', 'PHILANTHROPY'],
    img: 'https://appcdn.goqii.com/storeimg/13742_1781259963.png',
    bio: 'The architect of modern Google Search. Joined Google as employee #176 in 2000 and spent 15 years as SVP and Google Fellow, rewriting the core ranking algorithm — a system serving over a billion daily users. Named by Fortune as one of the smartest people in tech; inducted into the National Academy of Engineering. PhD in Information Retrieval from Cornell. Post-Google, he founded Sitare Foundation to fund education for underprivileged Indian students through to US universities.',
    credentials: 'Google employee #176 · 15 years leading Search | IIT Roorkee · Cornell PhD',
  }
]

const advisoryBoard: TeamMember[] = [
  {
    num: '01',
    name: 'Yat Siu',
    role: 'Co-Founder & Executive Chairman',
    company: 'ANIMOCA BRANDS',
    tags: ['WEB3 / NFTS', 'GAMING', 'DIGITAL OWNERSHIP'],
    img: 'https://appcdn.goqii.com/storeimg/37296_1781251915.png',
    bio: "One of Asia's most influential tech entrepreneurs. Founded Asia's first free web and email provider in 1996, built Outblaze into a 75M-user platform before selling its messaging unit to IBM in 2009, then co-founded Animoca Brands — a global Web3 powerhouse with 500+ portfolio investments dedicated to digital property rights. WEF Global Leader of Tomorrow; Cointelegraph's Top 100 in Blockchain. Advisory board member of BAFTA; director of the Asian Youth Orchestra. Classically trained musician.",
    credentials: 'Animoca Brands · Outblaze · Dalton Lab',
  },
  {
    num: '02',
    name: 'Desmond Lin',
    role: 'Seasoned Investor & former Insurance-Senior Exec',
    company: 'DL INVESTMENTS',
    tags: ['INSURTECH', 'HEALTHTECH', 'PE / VC'],
    img: 'https://appcdn.goqii.com/storeimg/77844_1781251891.png',
    bio: "Founder and CEO of DL Investments, focusing on the (re)insurance, insurtech, healthtech and wellness ecosystems in Asia; member of the Strategic Advisory Committee of HSBC's global Fintech Fund; a board member of Korea's largest online insurance company Kyobo Lifeplanet Life Insurance; a Global Advisory Board member of leading international Insurtech fund Eos Venture Partners; Venture Partner of Wings Capital Ventures.",
    credentials: 'DL Investments | Swiss Re | PE Funds | Goldman Sachs',
  },
  {
    num: '03',
    name: 'Rich Robinson',
    role: 'Entrepreneur-in-Residence',
    company: 'ANIMOCA BRANDS',
    tags: ['WEB3', 'STARTUPS', 'ASIA'],
    img: 'https://appcdn.goqii.com/storeimg/58694_1781251928.png',
    bio: "Nearly 30 years building and backing technology businesses across Asia — from Web 1.0 through Web3. Co-founded or served as senior executive at 8 startups; 3 exited to publicly listed companies. Mentored and invested through HAX, Orbit/Chinaccelerator, and 500 Startups. Clinical Professor of Entrepreneurship at Peking University's Guanghua International MBA programme. A rare connector bridging Silicon Valley, China, and Southeast Asia.",
    credentials: '8 startups founded or led | Bali • HK • Beijing',
  },
  {
    num: '04',
    name: 'Vincent Sai',
    role: 'CEO & Partner, Modality Partnership (UK)',
    company: 'MODALITY PARTNERSHIP',
    tags: ['PRIMARY CARE TRANSFORMATION', 'POPULATION HEALTH MANAGEMENT'],
    img: 'https://appcdn.goqii.com/storeimg/91844_1781251940.png',
    expertise: [
      'Primary Care Transformation',
      'Population Health Management',
      'Healthcare Strategy & Innovation',
      'Large-Scale Health System Transformation',
      'Global Healthcare Leadership'
    ],
    showBioLabel: true,
    bio: "Vincent Sai is the CEO and Partner of Modality Partnership, an award-winning NHS GP super partnership delivering primary and community healthcare services across the United Kingdom. Since joining in 2015, he has led significant diversification and expansion, transforming Modality into the largest partnership of its kind in the UK.\n\nVincent is widely recognized for his expertise in primary care, population health management, and large-scale healthcare transformation across public and private healthcare systems in the UK and internationally. He is the only non-clinical owner within a national partnership comprising over 130 GP partners.\n\nPrior to Modality, Vincent served as Chief Executive of Aetna Health Management Services and advised public and private sector clients across the United States, Australia, Hong Kong, South Korea, and Indonesia during his tenure at Deloitte Consulting.\n\nHe was recently awarded the Honorary Fellowship of the Royal College of General Practitioners (RCGP) for his outstanding contribution to General Practice. He is also a Fellow of the Institute of Chartered Accountants in England and Wales and Australia & New Zealand, a Health Executive in Residence at the Global Business School for Health, University College London (UCL), a Visiting Fellow at London South Bank University (LSBU), and an expert guest lecturer at the University of Brighton.",
    credentials: 'Modality Partnership (UK) • RCGP Fellow • UCL Health Executive',
  },
  {
    num: '05',
    name: 'Amit Singhal',
    role: 'Former SVP Search — Google',
    company: 'FOUNDER, SITARE FOUNDATION',
    tags: ['SEARCH / AI', 'ENGINEERING', 'PHILANTHROPY'],
    img: 'https://appcdn.goqii.com/storeimg/13742_1781259963.png',
    bio: 'The architect of modern Google Search. Joined Google as employee #176 in 2000 and spent 15 years as SVP and Google Fellow, rewriting the core ranking algorithm — a system serving over a billion daily users. Named by Fortune as one of the smartest people in tech; inducted into the National Academy of Engineering. PhD in Information Retrieval from Cornell. Post-Google, he founded Sitare Foundation to fund education for underprivileged Indian students through to US universities.',
    credentials: 'Google employee #176 • 15 years leading Search | IIT Roorkee • Cornell PhD',
  },
  {
    num: '06',
    name: 'Lauren Selig',
    role: 'Founder & CEO',
    company: 'SHAKE AND BAKE PRODUCTIONS',
    tags: ['ENTERTAINMENT', 'VENTURE', 'AI & VR'],
    img: 'https://appcdn.goqii.com/storeimg/39753_1781251954.png',
    bio: "Entrepreneur and award-winning executive producer behind Hacksaw Ridge, Rocketman, and Wheel of Time. Co-founded V.A.L.I.S. Studios — winner of an Emmy for the first VR summit of Everest. Active investor in Galaxy Interactive, A16z, and Vaxxinity. Board member of XPRIZE. Holds a JD-MBA from Northwestern and a BS from Georgetown's School of Foreign Service.",
    credentials: '20+ years in media & startups | Los Angeles',
  },
  {
    num: '07',
    name: 'Manoj Narender Madnani',
    role: 'President',
    company: 'GASENTEC • BEACON MEDIA',
    tags: ['GLOBAL INVESTMENTS', 'ENERGY & AI', 'GCC / MENA'],
    img: 'https://appcdn.goqii.com/storeimg/47609_1781251967.png',
    bio: "Global business executive and investment strategist who has orchestrated transactions exceeding $20 billion across energy, infrastructure, blockchain, and media. Former Managing Director at Kulczyk Investments SA, responsible for global energy and infrastructure footprints. Co-founder of Beacon Media; instrumental in bringing enterprise AI firm Beyond Limits into the UAE and wider GCC. Member of the International Energy Forum Industry Advisory Council and The Energy Council advisory board. Babson College alumnus and Trustee; member of the Young Presidents Organization since 2003.",
    credentials: '$20B+ in transactions • Energy • Blockchain • Media | Dubai • GCC',
  }
]

const longevityCouncil: TeamMember[] = [
  {
    num: '01',
    name: 'Prof. Anurag Agrawal',
    role: 'Longevity Scientist',
    company: 'ASHOKA UNIVERSITY',
    tags: ['CLINICAL', 'LONGEVITY'],
    img: 'https://appcdn.goqii.com/storeimg/20066_1781263430.png',
    bio: 'Genomics & Precision Medicine. Former Director, CSIR-IGIB; Dean, Ashoka University. A global authority in genomics and precision medicine.',
    credentials: 'Former Director, CSIR-IGIB · Dean, Ashoka University',
  },
  {
    num: '02',
    name: 'Dr. Aashish Contractor',
    role: 'Cardiology & Rehabilitation',
    company: 'RELIANCE FOUNDATION HOSPITAL',
    tags: ['CARDIOLOGY', 'REHAB'],
    img: 'https://appcdn.goqii.com/storeimg/24768_1781260074.png',
    bio: 'Leading expert in cardiac rehab and preventive cardiology. Director at Sir H.N. Reliance Foundation Hospital.',
    credentials: 'Director, Sir H.N. Reliance Foundation Hospital',
  },
  {
    num: '03',
    name: 'Dr. Nirmal Punjabi',
    role: 'Metabolic Health',
    company: 'RELIANCE FOUNDATION HOSPITAL',
    tags: ['METABOLIC HEALTH', 'RESEARCH'],
    img: 'https://appcdn.goqii.com/storeimg/40334_1781259749.png',
    bio: 'Specialist in metabolic health and clinical trial validation. Expert in designing and validating clinical protocols.',
    credentials: 'Metabolic Health Specialist · Clinical Trial Expert',
  },
  {
    num: '04',
    name: 'Amit Mookim',
    role: 'Healthcare Leader & Strategist',
    company: 'IMMUNEEL THERAPEUTICS',
    tags: ['STRATEGY', 'HEALTHCARE VC'],
    img: 'https://appcdn.goqii.com/storeimg/7885_1781263563.png',
    bio: 'Experienced business leader specializing in healthcare strategy, venture investments, and startup growth. Brings deep expertise in scaling healthcare businesses, driving innovation, and building high-growth organizations across the health and life sciences ecosystem.',
    credentials: 'Healthcare Strategy · Venture Investments · Scaling',
  },
  {
    num: '05',
    name: 'Dr. Anindya Dasgupta',
    role: 'Microbiologist & Researcher',
    company: 'ASHOKA UNIVERSITY, KOITA CENTRE FOR DIGITAL HEALTH',
    tags: ['MICROBIOME', 'VIROLOGY'],
    img: 'https://appcdn.goqii.com/storeimg/76673_1781263672.png',
    bio: 'Microbiologist with over 20 years of experience in microbiome, virology, and immunology. His research focuses on how gut and skin microbes influence ageing, immunity, and long-term health outcomes, advancing the science of healthy longevity.',
    credentials: 'Over 20 Years Experience • Koita Centre for Digital Health',
  },
  {
    num: '06',
    name: 'Dr. Mahaveer Singh',
    role: 'Consultant Endocrinologist & Associate Professor',
    company: 'NIMS JAIPUR',
    tags: ['ENDOCRINOLOGY', 'METABOLIC HEALTH'],
    img: 'https://appcdn.goqii.com/storeimg/88054_1781263696.png',
    bio: "Consultant Endocrinologist and Associate Professor at NIMS Jaipur, with expertise in diabetes, adrenal disorders, and continuous glucose monitoring. Trained at India's leading medical institutes, he specializes in metabolic health and preventive endocrinology.",
    credentials: 'Associate Professor at NIMS Jaipur · Specialist in Diabetes',
  }
]

function PeopleBehindGoqiiSection() {
  const [activeTab, setActiveTab] = useState<'leadership' | 'board' | 'advisory' | 'longevity'>('leadership')
  const [selectedBio, setSelectedBio] = useState<TeamMember | null>(null)

  const tabs = [
    { id: 'leadership', label: 'LEADERSHIP TEAM', count: leadershipTeam.length, data: leadershipTeam },
    { id: 'board', label: 'BOARD OF DIRECTORS', count: boardMembers.length, data: boardMembers },
    { id: 'advisory', label: 'ADVISORY BOARD', count: advisoryBoard.length, data: advisoryBoard },
    { id: 'longevity', label: 'LONGEVITY COUNCIL', count: longevityCouncil.length, data: longevityCouncil },
  ] as const

  const currentMembers = tabs.find(t => t.id === activeTab)?.data || leadershipTeam

  return (
    <section id="leadership" className="w-full bg-[#fbfcfd] py-16 sm:py-20 xl:py-24 border-t border-slate-200/70" style={{ fontFamily: 'Poppins, sans-serif' }}>
      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-3">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            THE PEOPLE BEHIND GOQii
          </div>

          <h2 className="text-3xl sm:text-4xl xl:text-5xl font-semibold text-slate-900 tracking-tight leading-tight">
            Built by Experts.<br />
            <span className="text-[#f05a28]">Driven by a Shared Mission.</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed mt-4 max-w-2xl">
            GOQii brings together healthcare, technology, behavioral science, coaching, and business expertise to turn health intelligence into meaningful action.
          </p>
        </div>

        {/* Tab Selection Bar (Matching Image 1) */}
        <div className="flex items-center gap-3 overflow-x-auto no-scrollbar pb-3 mb-10 sm:mb-12">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`whitespace-nowrap px-6 py-3 rounded-full text-xs sm:text-sm font-bold tracking-wider uppercase transition-all duration-200 flex items-center gap-2.5 cursor-pointer select-none ${
                  isActive
                    ? 'bg-[#0B132B] text-white shadow-md'
                    : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200/90 hover:border-slate-300 shadow-[0_1px_4px_rgba(0,0,0,0.02)]'
                }`}
              >
                {isActive && <span className="w-2 h-2 rounded-full bg-[#10b981] flex-shrink-0 animate-pulse" />}
                <span>{tab.label}</span>
              </button>
            )
          })}
        </div>

        {/* Cards Grid (5-column layout for leadership cards as in Images 2 & 3) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 sm:gap-6">
          {currentMembers.map((member) => (
            <div
              key={member.num + member.name}
              className="bg-white rounded-3xl p-4 sm:p-5 border border-slate-200/80 shadow-[0_2px_14px_rgba(0,0,0,0.03)] hover:shadow-xl hover:border-emerald-300 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Photo container with top-left number badge and hover 'VIEW BIO' overlay */}
                <div className="relative rounded-2xl overflow-hidden aspect-[4/4.6] bg-slate-100 mb-4 group/img">
                  {/* Number Badge (01, 02, ...) */}
                  <div className="absolute top-3 left-3 w-7 h-7 rounded-full bg-white/95 backdrop-blur-xs text-slate-900 font-extrabold text-xs flex items-center justify-center shadow-sm z-10">
                    {member.num}
                  </div>

                  {/* Member Photo */}
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />

                  {/* Hover Overlay with VIEW BIO Button */}
                  <div
                    onClick={() => setSelectedBio(member)}
                    className="absolute inset-0 bg-slate-950/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-3 z-20 cursor-pointer"
                  >
                    <span className="px-4 py-2 rounded-full bg-white/90 text-slate-900 text-xs font-extrabold tracking-wider uppercase shadow-md hover:bg-white transition-all transform group-hover:scale-100 scale-95">
                      VIEW BIO
                    </span>
                  </div>
                </div>

                {/* Category Tags (Light mint green pills as in screenshots) */}
                <div className="flex flex-wrap gap-1.5 mb-3 min-h-[38px] items-start">
                  {member.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md bg-[#e8fbf3] text-[#059669] text-[9.5px] sm:text-[10px] font-extrabold tracking-wider uppercase"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Name */}
                <h3 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight leading-snug group-hover:text-[#f05a28] transition-colors">
                  {member.name}
                </h3>

                {/* Role */}
                <p className="text-xs sm:text-sm text-slate-500 font-medium leading-snug mt-1">
                  {member.role}
                </p>
              </div>

              {/* View Bio text link */}
              <div className="pt-4 mt-2 border-t border-slate-100">
                <button
                  onClick={() => setSelectedBio(member)}
                  className="text-xs font-bold text-emerald-600 hover:text-emerald-700 transition-colors inline-flex items-center gap-1 cursor-pointer group-hover:translate-x-0.5 transform"
                >
                  <span>View Bio</span>
                  <span>→</span>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Bio Modal Dialog */}
      {selectedBio && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn"
          onClick={() => setSelectedBio(null)}
        >
          <div 
            className="bg-white rounded-3xl max-w-xl w-full p-7 sm:p-9 shadow-2xl border border-slate-100 relative max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            {/* Top Bar with Tags and Close Button */}
            <div className="flex items-start justify-between gap-4 mb-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-md bg-[#0B132B] text-white text-[10.5px] font-black tracking-wider uppercase">
                  {selectedBio.company || 'GOQII INC.'}
                </span>
                {selectedBio.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-md bg-[#e8fbf3] text-[#059669] text-[10.5px] font-extrabold tracking-wider uppercase"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Close button */}
              <button
                onClick={() => setSelectedBio(null)}
                className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 flex items-center justify-center transition-colors cursor-pointer flex-shrink-0"
                aria-label="Close modal"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Name and Designation */}
            <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900 tracking-tight leading-tight mt-3">
              {selectedBio.name}
            </h2>
            <p className="text-base sm:text-lg font-semibold text-[#10b981] mt-1 mb-6">
              {selectedBio.role}
            </p>

            <div className="border-t border-slate-100 mb-6" />

            {/* Optional Expertise Section */}
            {selectedBio.expertise && selectedBio.expertise.length > 0 && (
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block"></span>
                  <span className="text-[11.5px] font-bold tracking-wider text-slate-900 uppercase">
                    EXPERTISE
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {selectedBio.expertise.map((item) => (
                    <span
                      key={item}
                      className="px-3.5 py-1.5 rounded-xl bg-slate-50 border border-slate-200/80 text-xs font-semibold text-slate-700"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {selectedBio.showBioLabel && (
              <div className="flex items-center gap-2 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block"></span>
                <span className="text-[11.5px] font-bold tracking-wider text-slate-900 uppercase">
                  BIO
                </span>
              </div>
            )}

            {/* Bio Paragraphs */}
            <div className="space-y-4 text-slate-600 text-sm sm:text-[14.5px] leading-relaxed font-normal">
              {selectedBio.bio.split('\n\n').map((para, i) => (
                <p key={i}>
                  {para}
                </p>
              ))}
            </div>

            {/* Bottom Credentials Footer */}
            <div className="border-t border-slate-100 mt-8 pt-5 flex items-center flex-wrap gap-2 text-xs text-slate-600 font-medium">
              <span className="font-extrabold uppercase tracking-widest text-slate-900 text-[11px]">
                CREDENTIALS
              </span>
              <span className="text-slate-300">|</span>
              <span className="text-slate-600 text-xs font-medium">
                {selectedBio.credentials || 'Healthcare & Technology Leadership'}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

function GoqiiEcosystemSection() {
  const ecosystemLogos = [
    {
      name: 'Universal Health Token',
      src: 'https://goqii.com/webApp/uswebsite2025/assets/images/img-slide-partner1.png',
    },
    {
      name: 'Modality',
      src: 'https://goqii.com/webApp/uswebsite2025/assets/images/img-slide-partner2.png',
    },
    {
      name: 'Harvard Business Publishing',
      src: 'https://goqii.com/webApp/uswebsite2025/assets/images/img-slide-partner3.png',
    },
    {
      name: 'IDC',
      src: 'https://goqii.com/webApp/uswebsite2025/assets/images/img-slide-partner4.png',
    },
    {
      name: 'DeviceWorld',
      src: 'https://goqii.com/webApp/uswebsite2025/assets/images/img-slide-partner5.png',
    },
    {
      name: 'Swiss Re',
      src: 'https://goqii.com/webApp/uswebsite2025/assets/images/img-slide-partner6.png',
    },
  ]

  return (
    <section id="ecosystem" className="w-full bg-[#fbfcfd] py-16 sm:py-20 xl:py-24 border-t border-slate-200/80 relative" style={{ fontFamily: 'Poppins, sans-serif' }}>
      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-50 border border-orange-200/80 text-[#f05a28] text-xs font-bold uppercase tracking-wider mb-3">
            <span className="w-2 h-2 rounded-full bg-[#f05a28] animate-pulse" />
            THE PARTNERS BEHIND THE IMPACT
          </div>

          <h2 className="text-3xl sm:text-4xl xl:text-5xl font-semibold text-slate-900 tracking-tight leading-[1.15]">
            Better Health <span className="text-[#f05a28]">Doesn't Happen Alone.</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed mt-4 max-w-2xl mx-auto">
            GOQii brings together healthcare, technology, research, and industry partners to create connected health experiences that reach people where they are—and help turn insight into action.
          </p>
        </div>

        {/* Mobile View: Prominent Infinite Marquee with Large Logos */}
        <div className="block sm:hidden w-full relative overflow-hidden py-3">
          {/* Subtle edge fade gradients */}
          <div className="pointer-events-none absolute left-0 inset-y-0 w-10 bg-gradient-to-r from-[#fbfcfd] to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 inset-y-0 w-10 bg-gradient-to-l from-[#fbfcfd] to-transparent z-10" />

          <div className="animate-marquee flex items-center gap-5">
            {[...ecosystemLogos, ...ecosystemLogos].map((item, idx) => (
              <div
                key={`mob-partner-${item.name}-${idx}`}
                className="flex-shrink-0 flex items-center justify-center h-16 px-6 py-2.5 bg-white rounded-2xl border border-slate-200/80 shadow-[0_2px_8px_rgba(0,0,0,0.03)]"
              >
                <img
                  src={item.src}
                  alt={item.name}
                  referrerPolicy="no-referrer"
                  className="h-10 max-h-10 w-auto max-w-[160px] object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Desktop View: Clean Single-Row Arrangement (All 6 logos in one line) */}
        <div className="hidden sm:block w-full max-w-4xl mx-auto py-1 overflow-hidden">
          <div className="flex items-center justify-center gap-3 sm:gap-4 md:gap-5 lg:gap-6 px-2">
            {ecosystemLogos.map((item) => (
              <div
                key={item.name}
                className="flex-1 min-w-0 flex items-center justify-center transition-transform duration-300 hover:scale-105"
              >
                <img
                  src={item.src}
                  alt={item.name}
                  referrerPolicy="no-referrer"
                  className="h-7 sm:h-9 md:h-10 lg:h-11 w-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

const enterpriseDropdownItems = [
  {
    title: 'HealthEngage Platform',
    description: 'AI-powered engagement, monitoring, and health insights.',
    href: 'https://goqii.com/healthengage',
  },
  {
    title: 'For Corporate',
    description: 'Preventive workforce health that improves engagement and productivity.',
    href: 'https://goqii.com/healthengage-corporate',
  },
  {
    title: 'For Health Care providers',
    description: 'Continuous patient monitoring and care beyond the hospital.',
    href: 'https://go-qii-connected-care-7c49.vercel.app/',
  },
  {
    title: 'For Pharma',
    description: 'Patient engagement, adherence, and real-world health insights.',
    href: 'https://goqii.com/healthengage-pharma',
  },
  {
    title: 'For Insurance',
    description: 'Preventive health engagement that helps reduce risk and claims.',
    href: 'https://goqii.com/healthengage-insurance',
  },
]

const personalDropdownItems = [
  {
    title: 'SuperLife',
    description: 'Science-led longevity for a healthier, longer life.',
    href: '#personal',
  },
  {
    title: 'SmartRx',
    description: 'Doctor-led, personalized weight management.',
    href: '#personal',
  },
  {
    title: 'NutriGenius',
    description: 'AI-powered food recognition and smart nutrition tracking.',
    href: '#personal',
  },
]

const navLinks = [
  { label: 'Enterprise Solutions', hasDropdown: true },
  { label: 'Personal Solutions', hasDropdown: true },
  { label: 'Plans', hasDropdown: false },
  { label: 'Project Sanjeevini', hasDropdown: false },
  { label: 'Contact', hasDropdown: false },
]

function GoqiiLogo({ onClick }: { onClick?: () => void }) {
  return (
    <a
      href="#"
      onClick={(e) => {
        if (onClick) {
          e.preventDefault()
          onClick()
        }
      }}
      className="flex items-center cursor-pointer"
    >
      <img
        src="https://appcdn.goqii.com/storeimg/36455_1779860387.png"
        alt="GOQii"
        className="h-8 sm:h-9 w-auto object-contain"
        referrerPolicy="no-referrer"
      />
    </a>
  )
}

const heroStats = [
  {
    category: 'Government Supported Care',
    stat: '90%',
    title: 'Patient Satisfaction',
    description: 'Improved patient experience and satisfaction in government programs.',
    bgColor: 'bg-emerald-50',
    textColor: 'text-emerald-600',
    borderColor: 'border-emerald-200/80',
    dotColor: 'bg-emerald-500',
    iconBg: 'bg-emerald-500 text-white',
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.5m-15 10.5V10.5M3 21h18M4.5 10.5h15" />
      </svg>
    ),
  },
  {
    category: 'Enterprise Wellness',
    stat: '85%',
    title: 'Reduced Absenteeism',
    description: 'Stronger employee engagement leads to healthier teams and improved productivity.',
    bgColor: 'bg-blue-50',
    textColor: 'text-blue-600',
    borderColor: 'border-blue-200/80',
    dotColor: 'bg-blue-600',
    iconBg: 'bg-blue-600 text-white',
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.25v4.5a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25v-4.5M3.75 9h16.5A1.5 1.5 0 0 1 21.75 10.5v1.5a1.5 1.5 0 0 1-1.5 1.5H3.75a1.5 1.5 0 0 1-1.5-1.5v-1.5A1.5 1.5 0 0 1 3.75 9Zm5.25-3a2.25 2.25 0 0 1 2.25-2.25h1.5A2.25 2.25 0 0 1 15 6v3H9V6Z" />
      </svg>
    ),
  },
  {
    category: 'Public Health Engagement',
    stat: '30%',
    title: 'Increase in Engagement',
    description: 'Better preventive health engagement across communities and population programs.',
    bgColor: 'bg-purple-50',
    textColor: 'text-purple-600',
    borderColor: 'border-purple-200/80',
    dotColor: 'bg-purple-600',
    iconBg: 'bg-purple-600 text-white',
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.999-3.199a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
      </svg>
    ),
  },
  {
    category: 'Chronic Care Management',
    stat: '28%',
    title: 'Increase in Digital Adherence',
    description: 'Better treatment adherence through continuous motivation and personalized support.',
    bgColor: 'bg-orange-50',
    textColor: 'text-[#f05a28]',
    borderColor: 'border-orange-200/80',
    dotColor: 'bg-[#f05a28]',
    iconBg: 'bg-[#f05a28] text-white',
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.5 12h2l1.5-3 2 6 1.5-3h1.5" />
      </svg>
    ),
  },
]

function HeroStatRotator() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    if (isPaused) return
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroStats.length)
    }, 4500)
    return () => clearInterval(timer)
  }, [isPaused])

  const current = heroStats[currentIndex]

  return (
    <div
      className="relative max-w-lg bg-white/95 backdrop-blur-md rounded-2xl p-4 sm:p-4.5 border border-slate-100/90 shadow-md hover:shadow-lg transition-all duration-300 select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Top Category Badge + Navigation Controls */}
      <div className="flex items-center justify-between mb-2.5">
        <div className="flex items-center gap-2">
          {/* Category Icon Badge */}
          <div className={`w-6 h-6 rounded-full flex items-center justify-center ${current.iconBg} shadow-2xs transition-colors duration-300`}>
            {current.icon}
          </div>
          <span className={`text-xs font-bold ${current.textColor} tracking-tight transition-colors duration-300`}>
            {current.category}
          </span>
        </div>

        {/* Next / Prev Controls */}
        <div className="flex items-center gap-1">
          <button
            onClick={() => setCurrentIndex((prev) => (prev - 1 + heroStats.length) % heroStats.length)}
            aria-label="Previous impact"
            className="w-5 h-5 rounded-full bg-slate-50 hover:bg-slate-100 text-slate-400 hover:text-slate-700 flex items-center justify-center transition-colors cursor-pointer"
          >
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
            </svg>
          </button>
          <button
            onClick={() => setCurrentIndex((prev) => (prev + 1) % heroStats.length)}
            aria-label="Next impact"
            className="w-5 h-5 rounded-full bg-slate-50 hover:bg-slate-100 text-slate-400 hover:text-slate-700 flex items-center justify-center transition-colors cursor-pointer"
          >
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>
      </div>

      {/* Main Stat & Content Area */}
      <div key={currentIndex} className="flex items-start gap-3.5 transition-all duration-300">
        <div>
          <span style={{ fontFamily: 'Poppins, sans-serif' }} className={`text-3xl sm:text-4xl font-black ${current.textColor} leading-none block tracking-tight transition-colors duration-300`}>
            {current.stat}
          </span>
        </div>

        <div className="flex-1 min-w-0">
          <p className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">
            {current.title}
          </p>
          <div className={`w-6 h-0.5 ${current.dotColor} rounded-full my-1 transition-colors duration-300`} />
          <p className="text-xs text-slate-500 font-normal leading-relaxed">
            {current.description}
          </p>
        </div>
      </div>

      {/* Bottom Pagination Indicators */}
      <div className="flex items-center justify-between mt-3 pt-2.5 border-t border-slate-100/90">
        <div className="flex items-center gap-1.5">
          {heroStats.map((item, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Go to impact ${idx + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                idx === currentIndex
                  ? `w-6 ${item.dotColor}`
                  : 'w-1.5 bg-slate-200 hover:bg-slate-300'
              }`}
            />
          ))}
        </div>
        <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">
          Impact ({currentIndex + 1}/4)
        </span>
      </div>
    </div>
  )
}

function MobilePhoneMockup() {
  const ethanAvatar = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=120&h=120&q=80"
  const doctorAvatar = "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=60&h=60&q=80"

  return (
    <div className="relative w-[300px] sm:w-[320px] select-none">
      {/* Outer Phone Frame (iPhone style with dark titanium finish) */}
      <div className="bg-[#1e293b] rounded-[3.2rem] p-2.5 shadow-2xl relative border-[4px] border-slate-700/80">
        {/* Physical Buttons */}
        <div className="absolute -left-[6px] top-24 w-[3px] h-7 bg-slate-600 rounded-l-md" />
        <div className="absolute -left-[6px] top-34 w-[3px] h-9 bg-slate-600 rounded-l-md" />
        <div className="absolute -left-[6px] top-46 w-[3px] h-9 bg-slate-600 rounded-l-md" />
        <div className="absolute -right-[6px] top-28 w-[3px] h-13 bg-slate-600 rounded-r-md" />

        {/* Screen Enclosure */}
        <div className="bg-[#fafafa] rounded-[2.6rem] overflow-hidden text-slate-900 font-sans shadow-inner flex flex-col justify-between pt-2 pb-2 px-2.5 min-h-[620px] relative">
          
          {/* Dynamic Island / Notch */}
          <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-24 h-5 bg-black rounded-full z-30 flex items-center justify-end px-2.5 gap-1.5 shadow-xs">
            <div className="w-2 h-2 rounded-full bg-[#1c1c1e] border border-slate-800" />
            <div className="w-1.5 h-1.5 rounded-full bg-blue-950/80" />
          </div>

          <div>
            {/* Top Status Bar: 2:47 with notifications and status icons */}
            <div className="flex justify-between items-center px-1.5 pt-0.5 pb-2 text-slate-900 z-10 relative text-[10px] font-semibold">
              <div className="flex items-center gap-1">
                <span className="font-bold tracking-tight">2:47</span>
                {/* WhatsApp & notification icons */}
                <svg className="w-2.5 h-2.5 text-emerald-600 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
                </svg>
                <span className="text-[7px] text-slate-500">•••</span>
              </div>

              <div className="flex items-center gap-1">
                <span className="text-[7px] font-bold text-slate-600 bg-slate-200/80 px-0.5 rounded-xs">VoLTE 4G+</span>
                {/* Signal bars */}
                <svg className="w-2.5 h-2.5 text-slate-800" fill="currentColor" viewBox="0 0 24 24">
                  <rect x="2" y="16" width="3" height="5" rx="0.5" />
                  <rect x="7" y="12" width="3" height="9" rx="0.5" />
                  <rect x="12" y="8" width="3" height="13" rx="0.5" />
                  <rect x="17" y="4" width="3" height="17" rx="0.5" />
                </svg>
                {/* Battery with 37 */}
                <div className="flex items-center border border-slate-700 rounded-xs px-0.5 py-px text-[7px] font-bold leading-none">
                  37
                </div>
              </div>
            </div>

            {/* Profile Bar: Ethan Miller + Doctor & Coach & Watch */}
            <div className="flex justify-between items-center mb-2 px-1">
              <div className="flex items-center gap-2">
                <img
                  src={ethanAvatar}
                  alt="Ethan Miller"
                  className="w-9 h-9 rounded-full object-cover border-2 border-white shadow-xs"
                />
                <div>
                  <h4 className="text-[12px] font-extrabold text-slate-900 leading-none">
                    Ethan Miller
                  </h4>
                  <div className="flex items-center gap-1 mt-0.5">
                    <span className="text-[8px] font-black text-blue-600 tracking-wider">››› Elite</span>
                    <span className="text-[8px] font-bold text-amber-600 bg-amber-50 px-1 rounded-xs">Insure+</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                {/* Doctor */}
                <div className="flex flex-col items-center">
                  <img
                    src={doctorAvatar}
                    alt="Doctor"
                    className="w-6 h-6 rounded-full object-cover border border-rose-200 shadow-2xs"
                  />
                  <span className="text-[7px] text-slate-500 font-semibold mt-0.5">Doctor</span>
                </div>
                {/* Coach */}
                <div className="flex flex-col items-center">
                  <div className="w-6 h-6 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-600 shadow-2xs">
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                    </svg>
                  </div>
                  <span className="text-[7px] text-slate-500 font-semibold mt-0.5">Coach</span>
                </div>
                {/* Smartwatch Icon */}
                <div className="w-7 h-7 rounded-full bg-blue-50/90 border border-blue-200 flex items-center justify-center text-blue-500 shadow-2xs">
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <rect x="6" y="5" width="12" height="14" rx="3" />
                    <path strokeLinecap="round" d="M9 5V3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2m-6 14v2a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-2" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Date Pill Strip */}
            <div className="flex items-center justify-between px-1 mb-2">
              <button className="w-6 h-6 rounded-lg bg-slate-100 flex items-center justify-center text-slate-700">
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <rect x="3" y="4" width="18" height="18" rx="2" />
                  <path d="M16 2v4M8 2v4M3 10h18" />
                </svg>
              </button>
              <span className="text-[10px] font-semibold text-slate-400">8</span>
              <div className="bg-[#1e293b] text-white px-3.5 py-1 rounded-full text-[10px] font-bold shadow-xs">
                Today, 9 Jun
              </div>
              <span className="text-[10px] font-semibold text-slate-400">10</span>
              <span className="text-[10px] font-semibold text-slate-400">11</span>
            </div>

            {/* GOQii Age & Health Protection Card (Ice-Blue Textured) */}
            <div className="bg-gradient-to-r from-sky-100/90 via-blue-50 to-indigo-100/80 rounded-2xl p-2.5 border border-sky-200/60 flex items-center justify-between mb-2 shadow-2xs relative overflow-hidden">
              {/* Left: Avatar with 5 LAC Protected Shield */}
              <div className="flex flex-col items-center flex-shrink-0 relative">
                <img
                  src={ethanAvatar}
                  alt="Ethan"
                  className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-2xs"
                />
                <div className="bg-[#0f172a] text-white text-[6.5px] font-black px-1.5 py-0.5 rounded-sm -mt-1.5 border border-blue-400/40 leading-none tracking-tight">
                  5 LAC
                </div>
                <span className="text-[6.5px] font-bold text-slate-800 tracking-tight leading-none mt-0.5">
                  I am Protected
                </span>
              </div>

              {/* Middle: Ethan Miller + GOQii Age */}
              <div className="flex-1 px-2.5">
                <p className="text-[11px] font-black text-slate-900 leading-tight">
                  Ethan Miller
                </p>
                <div className="flex items-center gap-1 mt-0.5">
                  <span className="text-[8px] font-bold text-slate-700">GOQii Age :</span>
                  <span className="text-[8px] text-emerald-600">▼</span>
                  <span className="bg-[#7c3aed] text-white text-[7.5px] font-extrabold px-1.5 py-0.5 rounded-sm">
                    32y 18d
                  </span>
                </div>
                <p className="text-[7.5px] text-slate-600 font-medium mt-0.5 leading-tight">
                  I follow a healthy lifestyle.
                </p>
              </div>

              {/* Right: SAFE ELITE Badge */}
              <div className="bg-[#2563eb] text-white rounded-xl p-1.5 flex items-center gap-1.5 shadow-sm flex-shrink-0">
                {/* SAFE Vertical Indicator */}
                <div className="flex flex-col gap-0.5">
                  <span className="w-2.5 h-2.5 bg-red-500 text-[6px] font-black rounded-xs flex items-center justify-center leading-none">S</span>
                  <span className="w-2.5 h-2.5 bg-amber-400 text-[6px] font-black rounded-xs flex items-center justify-center leading-none text-slate-900">A</span>
                  <span className="w-2.5 h-2.5 bg-emerald-500 text-[6px] font-black rounded-xs flex items-center justify-center leading-none">F</span>
                  <span className="w-2.5 h-2.5 bg-blue-400 text-[6px] font-black rounded-xs flex items-center justify-center leading-none">E</span>
                </div>
                {/* Running + Days */}
                <div className="flex flex-col items-start leading-none">
                  <span className="text-[7px] font-black tracking-wider uppercase opacity-90">ELITE</span>
                  <div className="flex items-center gap-0.5 mt-0.5">
                    <span className="text-[10px]">🏃</span>
                    <span className="text-xs font-black">58</span>
                  </div>
                  <span className="text-[6.5px] opacity-80 mt-0.5">days</span>
                </div>
              </div>
            </div>

            {/* 8 Key Health Metrics (4 x 2 Grid) */}
            <div className="grid grid-cols-4 gap-1 mb-2">
              {/* Heart Rate */}
              <div className="bg-white rounded-xl p-1.5 border border-slate-100 flex flex-col items-center text-center shadow-2xs">
                <span className="text-[7px] font-semibold text-slate-500 leading-none">Heart Rate</span>
                <div className="my-1 text-red-500">
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                  </svg>
                </div>
                <span className="text-[10px] font-black text-slate-900 leading-none">72</span>
                <span className="text-[7px] text-slate-400 font-medium mt-0.5">bpm</span>
              </div>

              {/* Activity */}
              <div className="bg-white rounded-xl p-1.5 border border-slate-100 flex flex-col items-center text-center shadow-2xs">
                <span className="text-[7px] font-semibold text-slate-500 leading-none">Activity</span>
                <div className="my-1 text-emerald-500">
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                  </svg>
                </div>
                <span className="text-[10px] font-black text-slate-900 leading-none">350</span>
                <span className="text-[7px] text-slate-400 font-medium mt-0.5">kcal</span>
              </div>

              {/* Calories */}
              <div className="bg-white rounded-xl p-1.5 border border-slate-100 flex flex-col items-center text-center shadow-2xs">
                <span className="text-[7px] font-semibold text-slate-500 leading-none">Calories</span>
                <div className="my-1 text-amber-500">
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2c-.6 3-3 5-3 8 0 3.31 2.69 6 6 6s6-2.69 6-6c0-3.3-2.6-5.8-3.4-6.6-.4-.4-1-.1-1 .4 0 1.5-.9 2.6-2.1 2.6-1.5 0-2.5-1.5-2.5-4.4z"/>
                  </svg>
                </div>
                <span className="text-[10px] font-black text-slate-900 leading-none">1,250</span>
                <span className="text-[7px] text-slate-400 font-medium mt-0.5">kcal</span>
              </div>

              {/* Body Weight */}
              <div className="bg-white rounded-xl p-1.5 border border-slate-100 flex flex-col items-center text-center shadow-2xs">
                <span className="text-[7px] font-semibold text-slate-500 leading-none">Body Weight</span>
                <div className="my-1 text-purple-500">
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <rect x="3" y="4" width="18" height="16" rx="3" />
                    <circle cx="12" cy="10" r="3" />
                    <path d="M12 9v2l1 1" />
                  </svg>
                </div>
                <span className="text-[10px] font-black text-slate-900 leading-none">70.5</span>
                <span className="text-[7px] text-slate-400 font-medium mt-0.5">kg</span>
              </div>

              {/* Body Fat */}
              <div className="bg-white rounded-xl p-1.5 border border-slate-100 flex flex-col items-center text-center shadow-2xs">
                <span className="text-[7px] font-semibold text-slate-500 leading-none">Body Fat</span>
                <div className="my-1 text-teal-500 font-bold text-[10px]">
                  %
                </div>
                <span className="text-[10px] font-black text-slate-900 leading-none">18.6</span>
                <span className="text-[7px] text-slate-400 font-medium mt-0.5">%</span>
              </div>

              {/* Muscle Mass */}
              <div className="bg-white rounded-xl p-1.5 border border-slate-100 flex flex-col items-center text-center shadow-2xs">
                <span className="text-[7px] font-semibold text-slate-500 leading-none">Muscle Mass</span>
                <div className="my-1 text-rose-500">
                  <span className="text-[10px]">💪</span>
                </div>
                <span className="text-[10px] font-black text-slate-900 leading-none">52.3</span>
                <span className="text-[7px] text-slate-400 font-medium mt-0.5">kg</span>
              </div>

              {/* BMI */}
              <div className="bg-white rounded-xl p-1.5 border border-slate-100 flex flex-col items-center text-center shadow-2xs">
                <span className="text-[7px] font-semibold text-slate-500 leading-none">BMI</span>
                <div className="my-1 text-blue-500">
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <circle cx="12" cy="6" r="3" />
                    <path strokeLinecap="round" d="M9 12h6m-5 9v-7m4 7v-7" />
                  </svg>
                </div>
                <span className="text-[10px] font-black text-slate-900 leading-none">22.4</span>
                <span className="text-[6.5px] text-slate-400 font-medium mt-0.5">Normal</span>
              </div>

              {/* Resting HR */}
              <div className="bg-white rounded-xl p-1.5 border border-slate-100 flex flex-col items-center text-center shadow-2xs">
                <span className="text-[7px] font-semibold text-slate-500 leading-none">Resting HR</span>
                <div className="my-1 text-purple-600 flex items-center justify-center">
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                  </svg>
                </div>
                <span className="text-[10px] font-black text-slate-900 leading-none">56</span>
                <span className="text-[7px] text-slate-400 font-medium mt-0.5">bpm</span>
              </div>
            </div>

            {/* Timestamp Bar */}
            <div className="flex items-center justify-center gap-1 text-[8px] text-slate-400 mb-2">
              <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <circle cx="12" cy="12" r="9" />
                <path strokeLinecap="round" d="M12 6v6l3 3" />
              </svg>
              <span>Updated at 02:29 PM</span>
            </div>

            {/* Daily Habit Trackers (2x2 Grid) */}
            <div className="grid grid-cols-2 gap-1.5 mb-2">
              {/* Steps */}
              <div className="bg-white rounded-xl p-2 border border-slate-100 flex flex-col items-center shadow-2xs">
                <span className="text-[8px] font-bold text-slate-700">Steps</span>
                <div className="w-10 h-10 rounded-full bg-amber-50/80 border-2 border-amber-300 flex items-center justify-center my-1 shadow-2xs">
                  <span className="text-xs">👣</span>
                </div>
                <span className="text-[8px] text-slate-600">
                  <strong className="text-slate-900">0</strong> of 5,000
                </span>
              </div>

              {/* Hydration */}
              <div className="bg-white rounded-xl p-2 border border-slate-100 flex flex-col items-center shadow-2xs">
                <span className="text-[8px] font-bold text-slate-700">Hydration</span>
                <div className="w-10 h-10 rounded-full bg-blue-50/80 border-2 border-blue-300 flex items-center justify-center my-1 shadow-2xs">
                  <span className="text-xs">🥤</span>
                </div>
                <span className="text-[8px] text-slate-600">
                  <strong className="text-slate-900">0.0L</strong> of 3.0L
                </span>
              </div>

              {/* Sleep */}
              <div className="bg-white rounded-xl p-2 border border-slate-100 flex flex-col items-center shadow-2xs">
                <span className="text-[8px] font-bold text-slate-700">Sleep</span>
                <div className="w-10 h-10 rounded-full bg-indigo-50/80 border-2 border-indigo-200 flex items-center justify-center my-1 shadow-2xs">
                  <span className="text-xs">🌙</span>
                </div>
              </div>

              {/* Food */}
              <div className="bg-white rounded-xl p-2 border border-slate-100 flex flex-col items-center shadow-2xs">
                <span className="text-[8px] font-bold text-slate-700">Food</span>
                <div className="w-10 h-10 rounded-full bg-rose-50/80 border-2 border-rose-200 flex items-center justify-center my-1 shadow-2xs">
                  <span className="text-xs">🍽️</span>
                </div>
              </div>
            </div>

          </div>

          {/* Bottom App Navigation Bar */}
          <div className="pt-1.5 border-t border-slate-100 mt-0.5">
            <div className="flex justify-between items-center px-1 text-center">
              {/* Home (Active) */}
              <div className="flex flex-col items-center gap-0.5 text-slate-900">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 11-1.06 1.06l-.92-.92v6.58A2.25 2.25 0 0117 21.5H7a2.25 2.25 0 01-2.25-2.25v-6.58l-.92.92a.75.75 0 01-1.06-1.06l8.7-8.69z" />
                </svg>
                <span className="text-[7px] font-bold">Home</span>
                <div className="w-3 h-0.5 bg-slate-900 rounded-full mt-px" />
              </div>

              {/* Play */}
              <div className="flex flex-col items-center gap-0.5 text-slate-400">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <rect x="4" y="4" width="16" height="16" rx="4" />
                  <polygon points="10 8 16 12 10 16 10 8" fill="currentColor" />
                </svg>
                <span className="text-[7px] font-medium">Play</span>
              </div>

              {/* Add (+) */}
              <div className="flex flex-col items-center justify-center">
                <div className="w-6 h-6 rounded-full border border-slate-300 text-slate-700 flex items-center justify-center">
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                  </svg>
                </div>
              </div>

              {/* Arena */}
              <div className="flex flex-col items-center gap-0.5 text-slate-400">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <circle cx="12" cy="5" r="2.5" />
                  <circle cx="6" cy="17" r="2.5" />
                  <circle cx="18" cy="17" r="2.5" />
                  <path strokeLinecap="round" d="m7.5 15 3.5-7.5 3.5 7.5M8 17h8" />
                </svg>
                <span className="text-[7px] font-medium">Arena</span>
              </div>

              {/* Store */}
              <div className="flex flex-col items-center gap-0.5 text-slate-400">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                </svg>
                <span className="text-[7px] font-medium">Store</span>
              </div>
            </div>
          </div>

          {/* Home Indicator */}
          <div className="w-24 h-1 bg-slate-900 rounded-full mx-auto mt-1.5 mb-0.5" />
        </div>
      </div>
    </div>
  )
}

export default function App() {
  const [currentView, setCurrentView] = useState<'home' | 'privacy' | 'terms' | 'trust' | 'contact'>(() => {
    if (typeof window !== 'undefined') {
      if (window.location.hash === '#privacy' || window.location.pathname === '/privacy') {
        return 'privacy'
      }
      if (window.location.hash === '#terms' || window.location.hash === '#section-terms-of-service-page' || window.location.pathname === '/terms') {
        return 'terms'
      }
      if (window.location.hash === '#trust' || window.location.hash === '#section-trust-center-page' || window.location.pathname === '/trust') {
        return 'trust'
      }
      if (
        window.location.hash === '#contact' ||
        window.location.hash === '#contact-us' ||
        window.location.hash === '#section-contact-page' ||
        window.location.pathname === '/contact'
      ) {
        return 'contact'
      }
    }
    return 'home'
  })
  const [mobileOpen, setMobileOpen] = useState(false)
  const [navVisible, setNavVisible] = useState(true)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null)
  const [isPartnerModalOpen, setIsPartnerModalOpen] = useState(false)
  const lastScrollY = useRef(0)
  const dropdownTimerRef = useRef<any>(null)

  const navigateToHome = () => {
    setCurrentView('home')
    if (
      window.location.hash === '#privacy' ||
      window.location.hash === '#terms' ||
      window.location.hash === '#section-terms-of-service-page' ||
      window.location.hash === '#trust' ||
      window.location.hash === '#section-trust-center-page' ||
      window.location.hash === '#contact' ||
      window.location.hash === '#contact-us' ||
      window.location.hash === '#section-contact-page'
    ) {
      window.history.pushState(null, '', window.location.pathname)
    }
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const navigateToPrivacy = () => {
    setCurrentView('privacy')
    window.location.hash = 'privacy'
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const navigateToTerms = () => {
    setCurrentView('terms')
    window.location.hash = 'terms'
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const navigateToTrust = () => {
    setCurrentView('trust')
    window.location.hash = 'trust'
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const navigateToContact = () => {
    setCurrentView('contact')
    window.location.hash = 'contact'
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#privacy' || window.location.pathname === '/privacy') {
        setCurrentView('privacy')
      } else if (window.location.hash === '#terms' || window.location.hash === '#section-terms-of-service-page' || window.location.pathname === '/terms') {
        setCurrentView('terms')
      } else if (window.location.hash === '#trust' || window.location.hash === '#section-trust-center-page' || window.location.pathname === '/trust') {
        setCurrentView('trust')
      } else if (
        window.location.hash === '#contact' ||
        window.location.hash === '#contact-us' ||
        window.location.hash === '#section-contact-page' ||
        window.location.pathname === '/contact'
      ) {
        setCurrentView('contact')
      } else if (window.location.hash === '' || window.location.hash === '#home') {
        setCurrentView('home')
      }
    }
    window.addEventListener('hashchange', handleHashChange)
    window.addEventListener('popstate', handleHashChange)
    return () => {
      window.removeEventListener('hashchange', handleHashChange)
      window.removeEventListener('popstate', handleHashChange)
    }
  }, [])

  const handleMouseEnter = (label: string) => {
    if (dropdownTimerRef.current) clearTimeout(dropdownTimerRef.current)
    setOpenDropdown(label)
  }

  const handleMouseLeave = () => {
    dropdownTimerRef.current = setTimeout(() => {
      setOpenDropdown(null)
    }, 150)
  }

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      if (currentScrollY > lastScrollY.current && currentScrollY > 80) {
        // Scrolling DOWN -> hide navbar
        setNavVisible(false)
        setOpenDropdown(null)
      } else {
        // Scrolling UP -> show navbar
        setNavVisible(true)
      }
      lastScrollY.current = currentScrollY
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isHeaderVisible = navVisible || mobileOpen

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
      {/* ── Navbar (Floating Pill with Scroll Hide/Show) ── */}
      <header className={`w-full sticky top-0 z-50 px-4 sm:px-6 lg:px-12 max-w-[1536px] mx-auto pointer-events-none pt-2 sm:pt-3 transition-all duration-300 ease-in-out ${isHeaderVisible ? 'translate-y-0 opacity-100' : '-translate-y-20 opacity-0'}`}>
        <div className="pointer-events-auto bg-white/95 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-slate-100 rounded-full px-6 sm:px-8 py-3 flex items-center justify-between transition-all duration-300 relative">
          <GoqiiLogo onClick={navigateToHome} />

          {/* Desktop nav links */}
          <nav className="hidden lg:flex items-center gap-7 xl:gap-10">
            {navLinks.map(link => {
              const isEnterprise = link.label === 'Enterprise Solutions'
              const isPersonal = link.label === 'Personal Solutions'
              const isOpen = openDropdown === link.label
              const items = isEnterprise ? enterpriseDropdownItems : isPersonal ? personalDropdownItems : []

              return (
                <div
                  key={link.label}
                  className="relative py-2"
                  onMouseEnter={() => link.hasDropdown && handleMouseEnter(link.label)}
                  onMouseLeave={() => link.hasDropdown && handleMouseLeave()}
                >
                  <button
                    onClick={() => {
                      if (link.hasDropdown) {
                        setOpenDropdown(isOpen ? null : link.label)
                      } else if (link.label === 'Contact') {
                        navigateToContact()
                      } else {
                        if (currentView !== 'home') navigateToHome()
                      }
                    }}
                    className={`flex items-center gap-1.5 text-[14px] font-semibold transition-colors cursor-pointer ${
                      isOpen || (link.label === 'Contact' && currentView === 'contact')
                        ? 'text-[#f05a28] font-bold'
                        : 'text-slate-700 hover:text-[#f05a28]'
                    }`}
                  >
                    <span>{link.label}</span>
                    {link.hasDropdown && (
                      <svg
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          isOpen ? 'rotate-180 text-slate-900' : 'text-slate-400 group-hover:text-slate-600'
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="m19 9-7 7-7-7" />
                      </svg>
                    )}
                  </button>

                  {/* Solutions Custom Dropdown */}
                  {(isEnterprise || isPersonal) && isOpen && (
                    <div
                      className="absolute top-full -left-6 mt-3 w-[360px] bg-white rounded-3xl p-3 sm:p-4 shadow-[0_20px_50px_rgba(0,0,0,0.14)] border border-slate-100 z-50 animate-fadeIn select-none"
                      style={{ fontFamily: 'Poppins, sans-serif' }}
                    >
                      <div className="flex flex-col gap-1">
                        {items.map((item) => (
                          <a
                            key={item.title}
                            href={item.href}
                            target={item.href.startsWith('http') ? '_blank' : undefined}
                            rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                            onClick={() => {
                              setOpenDropdown(null)
                              if (currentView !== 'home' && !item.href.startsWith('http')) {
                                navigateToHome()
                              }
                            }}
                            className="group block p-3 rounded-2xl hover:bg-slate-50 transition-colors text-left"
                          >
                            <h4 className="text-[14.5px] font-bold text-slate-900 group-hover:text-[#f05a28] transition-colors leading-snug">
                              {item.title}
                            </h4>
                            <p className="text-[12.5px] text-slate-500 font-normal leading-relaxed mt-0.5">
                              {item.description}
                            </p>
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )
            })}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center">
            <button
              onClick={() => setIsPartnerModalOpen(true)}
              className="px-6 py-2.5 rounded-full text-[14px] font-bold text-white transition-all duration-200 shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] cursor-pointer bg-[#f05a28] hover:bg-[#d94e1f]"
            >
              Partner with us
            </button>
          </div>

          {/* Mobile hamburger */}
          <button className="lg:hidden p-2 text-slate-700 hover:text-slate-900" onClick={() => setMobileOpen(!mobileOpen)}>
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
            </svg>
          </button>
        </div>

        {/* Mobile menu dropdown */}
        {mobileOpen && (
          <div className="pointer-events-auto lg:hidden mt-2 bg-white/98 backdrop-blur-md rounded-2xl border border-slate-100 shadow-xl px-6 py-5 flex flex-col gap-3">
            {navLinks.map(link => {
              const isEnterprise = link.label === 'Enterprise Solutions'
              const isPersonal = link.label === 'Personal Solutions'
              const isExpanded = mobileExpanded === link.label
              const items = isEnterprise ? enterpriseDropdownItems : isPersonal ? personalDropdownItems : []

              return (
                <div key={link.label} className="border-b border-slate-50 pb-2">
                  <button
                    onClick={() => {
                      if (link.hasDropdown) {
                        setMobileExpanded(isExpanded ? null : link.label)
                      } else {
                        setMobileOpen(false)
                        if (link.label === 'Contact') {
                          navigateToContact()
                        } else {
                          if (currentView !== 'home') navigateToHome()
                        }
                      }
                    }}
                    className={`w-full text-left text-sm font-semibold py-1 flex justify-between items-center transition-colors ${
                      link.label === 'Contact' && currentView === 'contact'
                        ? 'text-[#f05a28] font-bold'
                        : 'text-slate-700 hover:text-[#f05a28]'
                    }`}
                  >
                    <span>{link.label}</span>
                    {link.hasDropdown && (
                      <svg
                        className={`w-4 h-4 text-slate-400 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="m19 9-7 7-7-7" />
                      </svg>
                    )}
                  </button>

                  {/* Solutions Items in Mobile */}
                  {(isEnterprise || isPersonal) && isExpanded && (
                    <div className="mt-2 pl-3 flex flex-col gap-2 bg-slate-50/70 rounded-xl p-3 border border-slate-100">
                      {items.map(item => (
                        <a
                          key={item.title}
                          href={item.href}
                          target={item.href.startsWith('http') ? '_blank' : undefined}
                          rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          onClick={() => {
                            setMobileOpen(false)
                            if (currentView !== 'home' && !item.href.startsWith('http')) {
                              navigateToHome()
                            }
                          }}
                          className="block py-1 text-left"
                        >
                          <span className="text-xs font-bold text-slate-900 block">{item.title}</span>
                          <span className="text-[11px] text-slate-500 font-normal block leading-tight">{item.description}</span>
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              )
            })}
            <button
              onClick={() => {
                setMobileOpen(false)
                setIsPartnerModalOpen(true)
              }}
              className="w-full mt-2 py-3 rounded-full text-sm font-bold text-white shadow-md bg-[#f05a28] hover:bg-[#d94e1f] cursor-pointer"
            >
              Partner with us
            </button>
          </div>
        )}
      </header>

      {currentView === 'privacy' ? (
        <PrivacyPolicyPage onBack={navigateToHome} />
      ) : currentView === 'terms' ? (
        <TermsOfServicePage
          onBack={navigateToHome}
          onNavigateToPrivacy={navigateToPrivacy}
        />
      ) : currentView === 'trust' ? (
        <TrustCenterPage
          onBack={navigateToHome}
          onNavigateToPrivacy={navigateToPrivacy}
          onNavigateToTerms={navigateToTerms}
        />
      ) : currentView === 'contact' ? (
        <ContactUsPage onBack={navigateToHome} />
      ) : (
        <>
          {/* ── Hero ── */}
          <section className="relative w-full overflow-hidden bg-white -mt-[68px] sm:-mt-[76px]" style={{ minHeight: '100vh' }}>
        {/* Background hero photo — full background image (mobile & desktop) */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Mobile view banner image */}
          <img
            src={heroPhotoMobile}
            alt="GOQii Preventive Healthcare"
            className="block sm:hidden w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
          />
          {/* Subtle mobile dark scrim to ensure text & button legibility while keeping the center image clear */}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/65 via-transparent to-slate-950/60 sm:hidden pointer-events-none" />
          {/* Desktop & tablet view banner image */}
          <img
            src={heroPhoto}
            alt="GOQii Preventive Healthcare"
            className="hidden sm:block w-full h-full object-cover object-center sm:object-[center_30%]"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Content container */}
        <div className="relative z-10 max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-12 pt-24 sm:pt-36 pb-8 sm:pb-16 flex flex-col justify-between flex-1" style={{ minHeight: '100vh' }}>
          {/* Main Hero Copy */}
          <div className="max-w-2xl flex flex-col gap-4 sm:gap-6">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/15 sm:bg-orange-50 text-orange-400 sm:text-[#f05a28] text-xs font-bold tracking-wider uppercase w-fit border border-orange-400/30 sm:border-orange-100/80 backdrop-blur-xs">
              Preventive Health & Engagement
            </span>

            <h1 style={{ fontFamily: 'Poppins, sans-serif' }} className="text-2xl xs:text-[1.75rem] sm:text-4xl lg:text-5xl font-bold sm:font-semibold text-white sm:text-slate-900 leading-[1.2] sm:leading-[1.18] tracking-tight">
              <span className="block">Transforming Health.</span>
              <span style={{ color: '#f05a28' }} className="block">Powered by Dynamic Motivation.</span>
            </h1>

            <p className="text-sm sm:text-lg text-slate-200 sm:text-slate-600 leading-relaxed font-normal max-w-xl">
              GOQii combines AI, behavioral intelligence, and human expertise to turn health insights into lasting action and measurable outcomes.
            </p>

            {/* Dynamic Rotating Stat Proof Cards (Hidden on mobile so background image remains visible) */}
            <div className="hidden sm:block">
              <HeroStatRotator />
            </div>
          </div>

          {/* CTAs: Moved below on mobile with clean space between and open background */}
          <div className="max-w-2xl mt-auto sm:mt-6 pt-10 sm:pt-0 w-full">
            <div className="flex flex-row items-center justify-between sm:justify-start gap-4 sm:gap-4 w-full sm:w-auto">
              <button
                onClick={() => setIsPartnerModalOpen(true)}
                className="flex-1 sm:flex-initial px-4 xs:px-6 sm:px-7 py-3.5 rounded-full text-xs sm:text-sm font-bold text-white transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg cursor-pointer text-center justify-center whitespace-nowrap"
                style={{ background: '#f05a28' }}
              >
                Request a Demo
              </button>
              <button
                onClick={() => {
                  const el = document.getElementById('solutions') || document.querySelector('section:nth-of-type(2)')
                  el?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="flex-1 sm:flex-initial px-4 xs:px-6 sm:px-7 py-3.5 rounded-full text-xs sm:text-sm font-bold text-white sm:text-slate-800 border border-white/50 sm:border-slate-300 bg-slate-900/40 sm:bg-transparent hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all cursor-pointer text-center justify-center whitespace-nowrap backdrop-blur-sm shadow-md"
              >
                Explore Solutions
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 2: More Information. Less Action. ── */}
      <section className="w-full bg-white py-12 lg:py-16 overflow-hidden" style={{ fontFamily: 'Poppins, sans-serif' }}>
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Graphic Image */}
            <div className="lg:col-span-5 relative min-h-[380px] sm:min-h-[440px] lg:min-h-[480px] rounded-3xl overflow-hidden flex items-center justify-center bg-[#F8FAFC] shadow-sm border border-slate-100 p-4 sm:p-6">
              <img
                src={moreInfoPhoto}
                alt="More Information. Less Action."
                className="w-full h-full max-h-[480px] object-contain"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Right Column: Headings, paragraph, 4 process cards & bottom banner */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              {/* Headings */}
              <h2 className="text-3xl sm:text-4xl xl:text-[2.65rem] font-semibold text-[#0B192C] tracking-tight leading-tight">
                More Information. Less Action.
              </h2>
              <h2 className="text-3xl sm:text-4xl xl:text-[2.65rem] font-semibold text-[#f05a28] tracking-tight leading-tight mt-1">
                The Missing Link? Motivation.
              </h2>

              {/* Accent Bar */}
              <div className="w-10 h-1 bg-[#f05a28] rounded-full my-3.5" />

              {/* Paragraph */}
              <p className="text-sm sm:text-base lg:text-[1.05rem] text-slate-600 font-normal leading-relaxed mb-8 max-w-2xl">
                People know what to do, but struggle to do it consistently. GOQii bridges that gap with Dynamic Motivation—our proprietary approach that turns intent into action and action into lasting change.
              </p>

              {/* 4 Process Cards Row with Dotted Connecting Arrows */}
              <div className="relative grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-3.5 mb-6">
                {/* Card 1 */}
                <div className="bg-[#F8FAFC] rounded-2xl p-4 sm:p-4.5 flex flex-col items-center text-center border border-slate-100 shadow-2xs">
                  <div className="w-12 h-12 rounded-full bg-[#E2E8F0]/70 text-[#334155] flex items-center justify-center mb-3 flex-shrink-0">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                    </svg>
                  </div>
                  <div className="w-6 h-0.5 bg-[#f05a28] rounded-full mb-2" />
                  <h3 className="text-slate-900 font-semibold text-xs sm:text-sm leading-tight mb-1">
                    Overwhelmed<br />by Information
                  </h3>
                  <p className="text-[11px] sm:text-xs text-slate-500 font-normal leading-normal">
                    Too much data, not enough clarity.
                  </p>
                </div>

                {/* Arrow 1-2 */}
                <div className="hidden lg:flex absolute top-[30%] left-[23%] -translate-x-1/2 z-10 text-[#f05a28] items-center gap-0.5 font-bold text-xs opacity-80 pointer-events-none">
                  <span className="border-t-2 border-dashed border-[#f05a28] w-5"></span>
                  <span className="text-[10px] -ml-1">›</span>
                </div>

                {/* Card 2 */}
                <div className="bg-[#F8FAFC] rounded-2xl p-4 sm:p-4.5 flex flex-col items-center text-center border border-slate-100 shadow-2xs">
                  <div className="w-12 h-12 rounded-full bg-[#FEE2E2]/70 text-[#f05a28] flex items-center justify-center mb-3 flex-shrink-0">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                    </svg>
                  </div>
                  <div className="w-6 h-0.5 bg-[#f05a28] rounded-full mb-2" />
                  <h3 className="text-slate-900 font-semibold text-xs sm:text-sm leading-tight mb-1">
                    Lack of<br />Motivation
                  </h3>
                  <p className="text-[11px] sm:text-xs text-slate-500 font-normal leading-normal">
                    Intent fades without inspiration.
                  </p>
                </div>

                {/* Arrow 2-3 */}
                <div className="hidden lg:flex absolute top-[30%] left-[48%] -translate-x-1/2 z-10 text-[#f05a28] items-center gap-0.5 font-bold text-xs opacity-80 pointer-events-none">
                  <span className="border-t-2 border-dashed border-[#f05a28] w-5"></span>
                  <span className="text-[10px] -ml-1">›</span>
                </div>

                {/* Card 3 */}
                <div className="bg-[#F8FAFC] rounded-2xl p-4 sm:p-4.5 flex flex-col items-center text-center border border-slate-100 shadow-2xs">
                  <div className="w-12 h-12 rounded-full bg-[#FEE2E2]/70 text-[#f05a28] flex items-center justify-center mb-3 flex-shrink-0">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
                    </svg>
                  </div>
                  <div className="w-6 h-0.5 bg-[#f05a28] rounded-full mb-2" />
                  <h3 className="text-slate-900 font-semibold text-xs sm:text-sm leading-tight mb-1">
                    Inconsistent<br />Action
                  </h3>
                  <p className="text-[11px] sm:text-xs text-slate-500 font-normal leading-normal">
                    Starts and stops lead to frustration.
                  </p>
                </div>

                {/* Arrow 3-4 */}
                <div className="hidden lg:flex absolute top-[30%] left-[73%] -translate-x-1/2 z-10 text-[#f05a28] items-center gap-0.5 font-bold text-xs opacity-80 pointer-events-none">
                  <span className="border-t-2 border-dashed border-[#f05a28] w-5"></span>
                  <span className="text-[10px] -ml-1">›</span>
                </div>

                {/* Card 4 */}
                <div className="bg-[#F8FAFC] rounded-2xl p-4 sm:p-4.5 flex flex-col items-center text-center border border-slate-100 shadow-2xs">
                  <div className="w-12 h-12 rounded-full bg-[#E2E8F0]/70 text-[#334155] flex items-center justify-center mb-3 flex-shrink-0">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 3v1.5M3 21v-6m0 0l2.77-.693a9 9 0 0 1 6.208.682l.108.054a9 9 0 0 0 6.086.71l3.114-.732a48.524 48.524 0 0 1-.005-10.499l-3.11.732a9 9 0 0 1-6.085-.711l-.108-.054a9 9 0 0 0-6.208-.682L3 4.5M3 15V4.5" />
                    </svg>
                  </div>
                  <div className="w-6 h-0.5 bg-[#f05a28] rounded-full mb-2" />
                  <h3 className="text-slate-900 font-semibold text-xs sm:text-sm leading-tight mb-1">
                    Short-term<br />Results
                  </h3>
                  <p className="text-[11px] sm:text-xs text-slate-500 font-normal leading-normal">
                    No lasting change, cycle repeats.
                  </p>
                </div>
              </div>

              {/* Bottom Banner Callout Box */}
              <div className="bg-[#F8FAFC] rounded-2xl p-4 sm:p-5 border border-slate-100/90 flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#f05a28] text-white flex items-center justify-center flex-shrink-0 shadow-sm">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
                    <circle cx="12" cy="12" r="8" stroke="currentColor" />
                    <circle cx="12" cy="12" r="3" fill="currentColor" />
                  </svg>
                </div>
                <p className="text-sm sm:text-base text-slate-900 leading-snug">
                  <span className="font-semibold">GOQii closes the gap with </span>
                  <span className="text-[#f05a28] font-bold">Dynamic Motivation—</span>
                  <span className="font-semibold">personalized, adaptive, and designed for lasting change.</span>
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Section 3: GOQii Adapts to You ── */}
      <section className="w-full bg-[#F8FAFC] py-14 sm:py-20 lg:py-24 relative overflow-hidden" style={{ fontFamily: 'Poppins, sans-serif' }}>
        {/* Ambient background soft glow effects */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[950px] h-[700px] sm:h-[950px] bg-gradient-to-tr from-blue-100/40 via-orange-100/30 to-purple-100/40 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-gradient-to-tr from-sky-100/60 to-transparent rounded-full blur-2xl pointer-events-none -z-10" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-gradient-to-tl from-purple-100/60 to-transparent rounded-full blur-2xl pointer-events-none -z-10" />

        {/* Section Header */}
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-12 text-center mb-12 lg:mb-16 relative z-10">
          <h2 className="text-3xl sm:text-4xl lg:text-[2.85rem] font-semibold text-[#0B192C] tracking-tight leading-tight">
            GOQii Adapts to You.
          </h2>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.85rem] font-semibold text-[#f05a28] tracking-tight leading-tight mt-1 sm:mt-1.5">
            Every Journey. Every Goal. Every Day.
          </h2>

          <p className="text-sm sm:text-base text-slate-500 font-normal leading-relaxed max-w-3xl mx-auto mt-4 sm:mt-5">
            No two people are the same. GOQii continuously learns, adapts, and personalizes every health journey—combining AI, human expertise, and behavioral intelligence to keep people moving forward.
          </p>
        </div>

        {/* Center Stage: 4 Floating Cards around Central Phone with Curved Connector Lines */}
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
          <div className="relative flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-0">

            {/* Desktop SVG Connector Lines & Concentric Glow Rings */}
            <div className="hidden lg:block absolute inset-0 pointer-events-none z-0">
              <svg className="w-full h-full" viewBox="0 0 1200 680" fill="none" preserveAspectRatio="xMidYMid meet">
                <defs>
                  <linearGradient id="orbit-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#22c55e" stopOpacity="0.4" />
                    <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#a855f7" stopOpacity="0.4" />
                  </linearGradient>
                  <linearGradient id="orbit-grad-2" x1="0%" y1="100%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#f05a28" stopOpacity="0.3" />
                    <stop offset="50%" stopColor="#fb923c" stopOpacity="0.25" />
                    <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.35" />
                  </linearGradient>
                </defs>

                {/* Concentric Orbit Rings behind the Phone */}
                <circle cx="600" cy="330" r="230" stroke="url(#orbit-grad-1)" strokeWidth="1.5" strokeDasharray="6 6" className="opacity-60" />
                <circle cx="600" cy="330" r="300" stroke="url(#orbit-grad-2)" strokeWidth="1.5" strokeDasharray="8 8" className="opacity-50" />
                <circle cx="600" cy="330" r="370" stroke="#e2e8f0" strokeWidth="1" strokeDasharray="5 5" className="opacity-40" />

                {/* Top-Left Connector (Intelligent Health -> Phone) */}
                <path
                  d="M 320 220 C 390 220, 410 215, 465 220"
                  stroke="#22c55e"
                  strokeWidth="1.75"
                  strokeDasharray="4 4"
                  fill="none"
                  className="opacity-70"
                />
                <circle cx="320" cy="220" r="4" fill="#22c55e" />

                {/* Bottom-Left Connector (Personalized Goals -> Phone) */}
                <path
                  d="M 320 440 C 390 440, 410 445, 465 440"
                  stroke="#f05a28"
                  strokeWidth="1.75"
                  strokeDasharray="4 4"
                  fill="none"
                  className="opacity-70"
                />
                <circle cx="320" cy="440" r="4" fill="#f05a28" />

                {/* Top-Right Connector (Adaptive Coaching -> Phone) */}
                <path
                  d="M 880 220 C 810 220, 790 215, 735 220"
                  stroke="#3b82f6"
                  strokeWidth="1.75"
                  strokeDasharray="4 4"
                  fill="none"
                  className="opacity-70"
                />
                <circle cx="880" cy="220" r="4" fill="#3b82f6" />

                {/* Bottom-Right Connector (Motivation & Rewards -> Phone) */}
                <path
                  d="M 880 440 C 810 440, 790 445, 735 440"
                  stroke="#a855f7"
                  strokeWidth="1.75"
                  strokeDasharray="4 4"
                  fill="none"
                  className="opacity-70"
                />
                <circle cx="880" cy="440" r="4" fill="#a855f7" />
              </svg>
            </div>

            {/* Left Column: 2 Cards */}
            <div className="w-full lg:w-[320px] xl:w-[340px] flex flex-col gap-6 lg:gap-14 z-10">
              
              {/* Card 1: Intelligent Health */}
              <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-100/90 shadow-lg hover:shadow-xl transition-all duration-300 relative group">
                {/* Dot Anchor on Right for Desktop */}
                <div className="hidden lg:block absolute -right-2 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-emerald-50 border-2 border-emerald-500 shadow-xs">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mx-auto mt-0.5" />
                </div>

                {/* Icon Badge */}
                <div className="w-13 h-13 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-100/80 shadow-2xs">
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456z" />
                  </svg>
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug mt-4">
                  Intelligent Health
                </h3>
                <div className="w-8 h-0.5 bg-emerald-500 rounded-full my-2.5" />

                {/* Copy */}
                <p className="text-xs sm:text-sm text-slate-500 font-normal leading-relaxed">
                  Real-time insights powered by AI to help you make smarter health decisions.
                </p>
              </div>

              {/* Card 2: Personalized Goals */}
              <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-100/90 shadow-lg hover:shadow-xl transition-all duration-300 relative group">
                {/* Dot Anchor on Right for Desktop */}
                <div className="hidden lg:block absolute -right-2 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-orange-50 border-2 border-[#f05a28] shadow-xs">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#f05a28] mx-auto mt-0.5" />
                </div>

                {/* Icon Badge */}
                <div className="w-13 h-13 rounded-2xl bg-orange-50 text-[#f05a28] flex items-center justify-center border border-orange-100/80 shadow-2xs">
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <circle cx="12" cy="12" r="9" />
                    <circle cx="12" cy="12" r="5" />
                    <circle cx="12" cy="12" r="2" fill="#f05a28" />
                  </svg>
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug mt-4">
                  Personalized Goals
                </h3>
                <div className="w-8 h-0.5 bg-[#f05a28] rounded-full my-2.5" />

                {/* Copy */}
                <p className="text-xs sm:text-sm text-slate-500 font-normal leading-relaxed">
                  Smart goals and daily actions tailored to your unique needs and lifestyle.
                </p>
              </div>

            </div>

            {/* Center Phone Mockup */}
            <div className="mx-auto lg:mx-10 my-4 lg:my-0 z-20 flex items-center justify-center">
              <MobilePhoneMockup />
            </div>

            {/* Right Column: 2 Cards */}
            <div className="w-full lg:w-[320px] xl:w-[340px] flex flex-col gap-6 lg:gap-14 z-10">
              
              {/* Card 3: Adaptive Coaching */}
              <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-100/90 shadow-lg hover:shadow-xl transition-all duration-300 relative group">
                {/* Dot Anchor on Left for Desktop */}
                <div className="hidden lg:block absolute -left-2 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-blue-50 border-2 border-blue-600 shadow-xs">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mx-auto mt-0.5" />
                </div>

                {/* Icon Badge */}
                <div className="w-13 h-13 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-100/80 shadow-2xs">
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                  </svg>
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug mt-4">
                  Adaptive Coaching
                </h3>
                <div className="w-8 h-0.5 bg-blue-600 rounded-full my-2.5" />

                {/* Copy */}
                <p className="text-xs sm:text-sm text-slate-500 font-normal leading-relaxed">
                  Expert guidance that adapts to your progress, challenges, and changing needs.
                </p>
              </div>

              {/* Card 4: Motivation & Rewards */}
              <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-100/90 shadow-lg hover:shadow-xl transition-all duration-300 relative group">
                {/* Dot Anchor on Left for Desktop */}
                <div className="hidden lg:block absolute -left-2 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-purple-50 border-2 border-purple-600 shadow-xs">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-600 mx-auto mt-0.5" />
                </div>

                {/* Icon Badge */}
                <div className="w-13 h-13 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center border border-purple-100/80 shadow-2xs">
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.504-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 0 0 2.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 0 1 2.916.52 6.003 6.003 0 0 1-5.395 4.972m0 0a6.726 6.726 0 0 1-2.749 1.35m0 0a6.772 6.772 0 0 1-3.044 0" />
                  </svg>
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug mt-4">
                  Motivation & Rewards
                </h3>
                <div className="w-8 h-0.5 bg-purple-600 rounded-full my-2.5" />

                {/* Copy */}
                <p className="text-xs sm:text-sm text-slate-500 font-normal leading-relaxed">
                  Celebrate milestones and earn rewards that keep you inspired and consistent.
                </p>
              </div>

            </div>

          </div>

          {/* Bottom Floating Pill Banner */}
          <div className="mt-12 lg:mt-16 flex justify-center">
            <div className="bg-white/95 backdrop-blur-md px-6 sm:px-8 py-3 sm:py-3.5 rounded-full border border-slate-200/90 shadow-md flex items-center gap-3 sm:gap-4 max-w-xl text-center sm:text-left">
              {/* Trend Icon Badge */}
              <div className="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0 border border-emerald-200/80">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 0 5.814-5.518l2.74-1.22m0 0-3.94-1.22m3.94 1.22-1.22 3.94" />
                </svg>
              </div>

              {/* Text */}
              <p className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                Personalized every day. Backed by intelligence. Driven by you.
              </p>

              {/* Sparkle Icon */}
              <div className="text-emerald-500 flex-shrink-0 flex items-center gap-0.5 text-base">
                ✦ <span className="text-xs">✧</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── Section 4: Designed to Adapt. Built to Deliver. ── */}
      <section className="w-full bg-[#F8FAFC] py-16 xl:py-24 relative overflow-hidden" style={{ fontFamily: 'Poppins, sans-serif' }}>
        {/* Subtle background decorative dot patterns & ambient curves */}
        <div className="absolute -left-20 top-20 w-96 h-96 pointer-events-none opacity-30">
          <svg className="w-full h-full text-slate-300" viewBox="0 0 200 200" fill="none">
            <defs>
              <pattern id="dot-pattern-s4" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1.5" className="fill-slate-300" />
              </pattern>
            </defs>
            <circle cx="100" cy="100" r="100" fill="url(#dot-pattern-s4)" />
          </svg>
        </div>
        <div className="absolute -right-20 bottom-10 w-96 h-96 pointer-events-none opacity-30">
          <svg className="w-full h-full text-slate-300" viewBox="0 0 200 200" fill="none">
            <circle cx="100" cy="100" r="100" fill="url(#dot-pattern-s4)" />
          </svg>
        </div>

        {/* Ambient subtle decorative curved connector lines */}
        <div className="hidden lg:block absolute inset-0 pointer-events-none z-0">
          <svg className="w-full h-full" viewBox="0 0 1440 900" fill="none" preserveAspectRatio="none">
            <path
              d="M 380 420 C 500 520, 560 260, 680 320"
              stroke="#22c55e"
              strokeWidth="1.5"
              strokeDasharray="4 4"
              className="opacity-40"
            />
            <circle cx="580" cy="420" r="5" fill="#22c55e" className="opacity-80" />
            <circle cx="680" cy="320" r="4" fill="#3b82f6" className="opacity-70" />
          </svg>
        </div>

        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          
          {/* Top Stage: Left Copy & Stats + Right Enterprise Dashboard Mockup */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-14 items-center mb-14 lg:mb-18">

            {/* Left Column: Heading + Subtitle + 3 Stats */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <h2 className="text-3xl sm:text-4xl xl:text-[3.2rem] font-semibold text-[#0B192C] tracking-tight leading-[1.1]">
                Designed to Adapt.
              </h2>
              <h2 className="text-3xl sm:text-4xl xl:text-[3.2rem] font-semibold text-[#f05a28] tracking-tight leading-[1.1] mt-1 sm:mt-1.5">
                Built to Deliver.
              </h2>

              {/* Emerald Accent Line */}
              <div className="w-10 h-1 bg-emerald-500 rounded-full my-4" />

              <p className="text-sm sm:text-base lg:text-[1.05rem] text-slate-600 font-normal leading-relaxed max-w-lg mb-8">
                From engagement to outcomes, GOQii brings AI, coaching, analytics, and health intelligence together in one unified platform.
              </p>

              {/* 3 Key Stats Row */}
              <div className="grid grid-cols-3 gap-3 sm:gap-4 max-w-lg">
                
                {/* Stat 1: 5M+ Lives Impacted */}
                <div className="flex flex-col items-start">
                  <div className="w-11 h-11 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mb-2.5 shadow-2xs border border-emerald-100/80">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.999-3.199a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                    </svg>
                  </div>
                  <span className="text-xl sm:text-2xl font-black text-emerald-600 leading-none">
                    5M+
                  </span>
                  <span className="text-xs text-slate-600 font-medium leading-tight mt-1">
                    Lives Impacted
                  </span>
                </div>

                {/* Stat 2: 90% Member Satisfaction */}
                <div className="flex flex-col items-start">
                  <div className="w-11 h-11 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mb-2.5 shadow-2xs border border-blue-100/80">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 0 5.814-5.518l2.74-1.22m0 0-3.94-1.22m3.94 1.22-1.22 3.94" />
                    </svg>
                  </div>
                  <span className="text-xl sm:text-2xl font-black text-blue-600 leading-none">
                    90%
                  </span>
                  <span className="text-xs text-slate-600 font-medium leading-tight mt-1">
                    Member Satisfaction
                  </span>
                </div>

                {/* Stat 3: 85% Engagement Rate */}
                <div className="flex flex-col items-start">
                  <div className="w-11 h-11 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center mb-2.5 shadow-2xs border border-purple-100/80">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.5 12h2l1.5-3 2 6 1.5-3h1.5" />
                    </svg>
                  </div>
                  <span className="text-xl sm:text-2xl font-black text-purple-600 leading-none">
                    85%
                  </span>
                  <span className="text-xs text-slate-600 font-medium leading-tight mt-1">
                    Engagement Rate
                  </span>
                </div>

              </div>
            </div>

            {/* Right Column: GOQii Enterprise Dashboard Mockup */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-3xl p-4 sm:p-6 shadow-2xl border border-slate-100 relative">

                {/* Top Bar of Dashboard */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                  <div className="flex items-center gap-2.5">
                    {/* 4-Color Grid Logo Icon */}
                    <div className="grid grid-cols-2 gap-0.5 w-4 h-4 flex-shrink-0">
                      <div className="bg-[#f05a28] rounded-[1px]" />
                      <div className="bg-[#2ecc71] rounded-[1px]" />
                      <div className="bg-[#00a4ef] rounded-[1px]" />
                      <div className="bg-[#ffb900] rounded-[1px]" />
                    </div>
                    <span className="text-xs sm:text-sm font-extrabold text-slate-900">
                      GOQii Enterprise Dashboard
                    </span>
                  </div>

                  {/* Export Report Button */}
                  <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 text-xs font-semibold text-slate-600 hover:bg-slate-50 transition-colors shadow-2xs cursor-pointer">
                    <svg className="w-3.5 h-3.5 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                    </svg>
                    Export Report
                  </button>
                </div>

                {/* Dashboard Inner Body (Sidebar + Content) */}
                <div className="flex gap-3 sm:gap-4 pt-4">

                  {/* Left Sidebar inside Dashboard */}
                  <div className="hidden sm:flex flex-col items-center gap-4 pr-3 border-r border-slate-100 py-1">
                    {/* Home icon - active */}
                    <div className="w-8 h-8 rounded-xl bg-orange-50 text-[#f05a28] flex items-center justify-center shadow-2xs">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 11-1.06 1.06l-.92-.92v6.58A2.25 2.25 0 0117 21.5H7a2.25 2.25 0 01-2.25-2.25v-6.58l-.92.92a.75.75 0 01-1.06-1.06l8.7-8.69z" />
                      </svg>
                    </div>

                    {/* Analytics icon */}
                    <div className="w-8 h-8 rounded-xl text-slate-400 hover:text-slate-600 flex items-center justify-center cursor-pointer transition-colors">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                      </svg>
                    </div>

                    {/* Users icon */}
                    <div className="w-8 h-8 rounded-xl text-slate-400 hover:text-slate-600 flex items-center justify-center cursor-pointer transition-colors">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                      </svg>
                    </div>

                    {/* Target icon */}
                    <div className="w-8 h-8 rounded-xl text-slate-400 hover:text-slate-600 flex items-center justify-center cursor-pointer transition-colors">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <circle cx="12" cy="12" r="9" />
                        <circle cx="12" cy="12" r="3" />
                      </svg>
                    </div>

                    {/* Settings icon */}
                    <div className="w-8 h-8 rounded-xl text-slate-400 hover:text-slate-600 flex items-center justify-center cursor-pointer transition-colors">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                  </div>

                  {/* Right Dashboard Workspace */}
                  <div className="flex-1 flex flex-col gap-3.5">

                    {/* Greeting & Date Filter */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div>
                        <h3 className="text-sm sm:text-base font-bold text-slate-900 leading-tight">
                          Welcome back, Admin
                        </h3>
                        <p className="text-[11px] text-slate-400 font-normal">
                          Here's what's happening with your program today.
                        </p>
                      </div>

                      {/* Date Filter */}
                      <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg border border-slate-200 text-[11px] font-medium text-slate-600 bg-white shadow-2xs self-start sm:self-auto">
                        <svg className="w-3.5 h-3.5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                        </svg>
                        <span>May 20 – May 26, 2024</span>
                        <svg className="w-3 h-3 text-slate-400 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        </svg>
                      </div>
                    </div>

                    {/* 4 Top KPI Cards Row */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5">

                      {/* KPI 1: Active Members */}
                      <div className="bg-[#F8FAFC] rounded-2xl p-3 border border-slate-100 flex flex-col justify-between">
                        <div className="flex items-center justify-between mb-2">
                          <div className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0">
                            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                            </svg>
                          </div>
                        </div>
                        <div>
                          <p className="text-[10px] font-bold text-slate-400">Active Members</p>
                          <div className="flex items-baseline gap-1 mt-0.5">
                            <span className="text-base sm:text-lg font-black text-slate-900">23,456</span>
                            <span className="text-[10px] font-bold text-emerald-600">↑ 12%</span>
                          </div>
                          <p className="text-[9px] text-slate-400 mt-0.5">vs last 7 days</p>
                        </div>
                      </div>

                      {/* KPI 2: Engagement Score */}
                      <div className="bg-[#F8FAFC] rounded-2xl p-3 border border-slate-100 flex flex-col justify-between">
                        <div className="flex items-center justify-between mb-2">
                          <div className="w-7 h-7 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0">
                            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 0 5.814-5.518l2.74-1.22m0 0-3.94-1.22m3.94 1.22-1.22 3.94" />
                            </svg>
                          </div>
                        </div>
                        <div>
                          <p className="text-[10px] font-bold text-slate-400">Engagement Score</p>
                          <div className="flex items-baseline gap-1 mt-0.5">
                            <span className="text-base sm:text-lg font-black text-blue-600">82%</span>
                            <span className="text-[10px] font-bold text-emerald-600">↑ 9%</span>
                          </div>
                          <p className="text-[9px] text-slate-400 mt-0.5">vs last 7 days</p>
                        </div>
                      </div>

                      {/* KPI 3: Health Risk Score */}
                      <div className="bg-[#F8FAFC] rounded-2xl p-3 border border-slate-100 flex flex-col justify-between">
                        <div className="flex items-center justify-between mb-2">
                          <div className="w-7 h-7 rounded-full bg-orange-100 text-orange-500 flex items-center justify-center flex-shrink-0">
                            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                            </svg>
                          </div>
                        </div>
                        <div>
                          <p className="text-[10px] font-bold text-slate-400">Health Risk Score</p>
                          <div className="flex items-baseline gap-1 mt-0.5">
                            <span className="text-base sm:text-lg font-black text-slate-900">2.4</span>
                            <span className="text-[10px] font-bold text-emerald-600">↓ 0.4</span>
                          </div>
                          <p className="text-[9px] text-slate-400 mt-0.5">vs last 7 days</p>
                        </div>
                      </div>

                      {/* KPI 4: Program Completion */}
                      <div className="bg-[#F8FAFC] rounded-2xl p-3 border border-slate-100 flex flex-col justify-between">
                        <div className="flex items-center justify-between mb-2">
                          <div className="w-7 h-7 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center flex-shrink-0">
                            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </div>
                        </div>
                        <div>
                          <p className="text-[10px] font-bold text-slate-400">Program Completion</p>
                          <div className="flex items-baseline gap-1 mt-0.5">
                            <span className="text-base sm:text-lg font-black text-slate-900">76%</span>
                            <span className="text-[10px] font-bold text-emerald-600">↑ 10%</span>
                          </div>
                          <p className="text-[9px] text-slate-400 mt-0.5">vs last 7 days</p>
                        </div>
                      </div>

                    </div>

                    {/* Middle Row: Donut Chart + Top Goals */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">

                      {/* Card 1: Health Risk Distribution */}
                      <div className="bg-[#F8FAFC] rounded-2xl p-3.5 border border-slate-100 flex flex-col justify-between">
                        <div>
                          <h4 className="text-xs font-bold text-slate-900 mb-3">
                            Health Risk Distribution
                          </h4>

                          <div className="flex items-center justify-between gap-3">
                            {/* SVG Donut Chart */}
                            <div className="relative w-20 h-20 flex-shrink-0">
                              <svg viewBox="0 0 80 80" className="w-full h-full -rotate-90">
                                <circle cx="40" cy="40" r="28" fill="none" stroke="#f87171" strokeWidth="10"
                                  strokeDasharray={`${20 * 1.759} ${100 * 1.759}`} strokeDashoffset="0" />
                                <circle cx="40" cy="40" r="28" fill="none" stroke="#fb923c" strokeWidth="10"
                                  strokeDasharray={`${32 * 1.759} ${100 * 1.759}`} strokeDashoffset={`${-20 * 1.759}`} />
                                <circle cx="40" cy="40" r="28" fill="none" stroke="#22c55e" strokeWidth="10"
                                  strokeDasharray={`${48 * 1.759} ${100 * 1.759}`} strokeDashoffset={`${-(20 + 32) * 1.759}`} />
                              </svg>
                              <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                                <span className="text-xs font-extrabold text-slate-900 leading-none">23,456</span>
                                <span className="text-[7px] font-bold text-slate-400 leading-tight mt-0.5">Total Members</span>
                              </div>
                            </div>

                            {/* Legend */}
                            <div className="flex flex-col gap-1.5 flex-1">
                              <div className="flex items-center justify-between text-[10px]">
                                <div className="flex items-center gap-1.5">
                                  <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" />
                                  <span className="font-semibold text-slate-600">Low Risk</span>
                                </div>
                                <span className="font-extrabold text-slate-900">48%</span>
                              </div>
                              <div className="flex items-center justify-between text-[10px]">
                                <div className="flex items-center gap-1.5">
                                  <span className="w-2 h-2 rounded-full bg-orange-400 inline-block" />
                                  <span className="font-semibold text-slate-600">Moderate Risk</span>
                                </div>
                                <span className="font-extrabold text-slate-900">32%</span>
                              </div>
                              <div className="flex items-center justify-between text-[10px]">
                                <div className="flex items-center gap-1.5">
                                  <span className="w-2 h-2 rounded-full bg-red-400 inline-block" />
                                  <span className="font-semibold text-slate-600">High Risk</span>
                                </div>
                                <span className="font-extrabold text-slate-900">20%</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Bottom Banner inside Card 1 */}
                        <div className="bg-white rounded-xl p-2 mt-3 border border-slate-100 flex items-center justify-between text-[10px]">
                          <div className="flex items-center gap-2">
                            <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0">
                              <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                              </svg>
                            </div>
                            <div>
                              <p className="font-bold text-slate-900 leading-tight">High risk members reduced by 8%</p>
                              <p className="text-[9px] text-slate-400">Keep up the great work!</p>
                            </div>
                          </div>
                          {/* Mini Sparkline */}
                          <svg className="w-10 h-5 text-emerald-500" viewBox="0 0 40 20" fill="none">
                            <path d="M0,15 L10,12 L20,16 L30,6 L40,2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </div>
                      </div>

                      {/* Card 2: Top Health Goals */}
                      <div className="bg-[#F8FAFC] rounded-2xl p-3.5 border border-slate-100 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center justify-between mb-2.5">
                            <h4 className="text-xs font-bold text-slate-900">
                              Top Health Goals
                            </h4>
                            <button className="text-[10px] font-bold text-blue-600 hover:underline cursor-pointer">View all</button>
                          </div>

                          <div className="flex flex-col gap-2.5">
                            {/* Goal 1 */}
                            <div className="flex items-center gap-2 text-[10px]">
                              <div className="w-5 h-5 rounded-md bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0 text-xs">
                                ⚖️
                              </div>
                              <span className="font-semibold text-slate-700 w-28 truncate">Weight Management</span>
                              <div className="flex-1 h-1.5 bg-slate-200 rounded-full overflow-hidden">
                                <div className="h-full bg-emerald-500 rounded-full" style={{ width: '62%' }} />
                              </div>
                              <span className="font-extrabold text-slate-900 w-7 text-right">62%</span>
                            </div>

                            {/* Goal 2 */}
                            <div className="flex items-center gap-2 text-[10px]">
                              <div className="w-5 h-5 rounded-md bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0 text-xs">
                                👟
                              </div>
                              <span className="font-semibold text-slate-700 w-28 truncate">Increase Activity</span>
                              <div className="flex-1 h-1.5 bg-slate-200 rounded-full overflow-hidden">
                                <div className="h-full bg-emerald-500 rounded-full" style={{ width: '46%' }} />
                              </div>
                              <span className="font-extrabold text-slate-900 w-7 text-right">46%</span>
                            </div>

                            {/* Goal 3 */}
                            <div className="flex items-center gap-2 text-[10px]">
                              <div className="w-5 h-5 rounded-md bg-purple-100 text-purple-600 flex items-center justify-center flex-shrink-0 text-xs">
                                🧘
                              </div>
                              <span className="font-semibold text-slate-700 w-28 truncate">Reduce Stress</span>
                              <div className="flex-1 h-1.5 bg-slate-200 rounded-full overflow-hidden">
                                <div className="h-full bg-emerald-500 rounded-full" style={{ width: '41%' }} />
                              </div>
                              <span className="font-extrabold text-slate-900 w-7 text-right">41%</span>
                            </div>

                            {/* Goal 4 */}
                            <div className="flex items-center gap-2 text-[10px]">
                              <div className="w-5 h-5 rounded-md bg-indigo-100 text-indigo-600 flex items-center justify-center flex-shrink-0 text-xs">
                                🌙
                              </div>
                              <span className="font-semibold text-slate-700 w-28 truncate">Better Sleep</span>
                              <div className="flex-1 h-1.5 bg-slate-200 rounded-full overflow-hidden">
                                <div className="h-full bg-emerald-500 rounded-full" style={{ width: '36%' }} />
                              </div>
                              <span className="font-extrabold text-slate-900 w-7 text-right">36%</span>
                            </div>
                          </div>
                        </div>
                      </div>

                    </div>

                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* Bottom Grid: 6 Distinct Capability Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 sm:gap-4.5 mb-10">

            {/* Card 1: AI Intelligence */}
            <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center text-center group">
              <div className="w-13 h-13 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mb-3 shadow-2xs border border-emerald-100/80 group-hover:scale-105 transition-transform">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456z" />
                </svg>
              </div>
              <h3 className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                AI Intelligence
              </h3>
              <div className="w-6 h-0.5 bg-emerald-500 rounded-full my-2" />
              <p className="text-xs text-slate-500 font-normal leading-relaxed">
                AI-powered insights and predictions to drive better health outcomes.
              </p>
            </div>

            {/* Card 2: Expert Coaching */}
            <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center text-center group">
              <div className="w-13 h-13 rounded-full bg-orange-50 text-[#f05a28] flex items-center justify-center mb-3 shadow-2xs border border-orange-100/80 group-hover:scale-105 transition-transform">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                </svg>
              </div>
              <h3 className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                Expert Coaching
              </h3>
              <div className="w-6 h-0.5 bg-[#f05a28] rounded-full my-2" />
              <p className="text-xs text-slate-500 font-normal leading-relaxed">
                Human coaches provide personalized guidance and continuous support.
              </p>
            </div>

            {/* Card 3: Population Analytics */}
            <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center text-center group">
              <div className="w-13 h-13 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mb-3 shadow-2xs border border-blue-100/80 group-hover:scale-105 transition-transform">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                </svg>
              </div>
              <h3 className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                Population Analytics
              </h3>
              <div className="w-6 h-0.5 bg-blue-600 rounded-full my-2" />
              <p className="text-xs text-slate-500 font-normal leading-relaxed">
                Real-time analytics to track engagement, risks and program impact.
              </p>
            </div>

            {/* Card 4: Health Intelligence */}
            <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center text-center group">
              <div className="w-13 h-13 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center mb-3 shadow-2xs border border-purple-100/80 group-hover:scale-105 transition-transform">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.5 12h2l1.5-3 2 6 1.5-3h1.5" />
                </svg>
              </div>
              <h3 className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                Health Intelligence
              </h3>
              <div className="w-6 h-0.5 bg-purple-600 rounded-full my-2" />
              <p className="text-xs text-slate-500 font-normal leading-relaxed">
                Comprehensive health risk assessment and ongoing monitoring.
              </p>
            </div>

            {/* Card 5: Connected Ecosystem */}
            <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center text-center group">
              <div className="w-13 h-13 rounded-full bg-cyan-50 text-cyan-600 flex items-center justify-center mb-3 shadow-2xs border border-cyan-100/80 group-hover:scale-105 transition-transform">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                </svg>
              </div>
              <h3 className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                Connected Ecosystem
              </h3>
              <div className="w-6 h-0.5 bg-cyan-600 rounded-full my-2" />
              <p className="text-xs text-slate-500 font-normal leading-relaxed">
                Seamless integrations with devices, apps and enterprise systems.
              </p>
            </div>

            {/* Card 6: Enterprise Ready */}
            <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center text-center group">
              <div className="w-13 h-13 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center mb-3 shadow-2xs border border-amber-100/80 group-hover:scale-105 transition-transform">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
              </div>
              <h3 className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                Enterprise Ready
              </h3>
              <div className="w-6 h-0.5 bg-amber-600 rounded-full my-2" />
              <p className="text-xs text-slate-500 font-normal leading-relaxed">
                Secure, scalable and <span className="font-semibold text-slate-700">compliant—built</span> for enterprise needs.
              </p>
            </div>

          </div>

          {/* Bottom Pill Banner */}
          <div className="flex justify-center">
            <div className="bg-white/95 backdrop-blur-md px-6 sm:px-8 py-3.5 rounded-full border border-slate-200/90 shadow-sm flex items-center gap-3 sm:gap-4 max-w-2xl text-center sm:text-left">
              {/* Target / Bullseye Icon Badge */}
              <div className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0 border border-emerald-200/80">
                <svg className="w-4.5 h-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
                  <circle cx="12" cy="12" r="8" stroke="currentColor" />
                  <circle cx="12" cy="12" r="3" fill="currentColor" />
                </svg>
              </div>

              {/* Banner text with green highlights */}
              <p className="text-xs sm:text-sm font-medium text-slate-800 leading-snug">
                Empowering organizations to <span className="text-emerald-600 font-bold">engage more people</span>, <span className="text-emerald-600 font-bold">improve health</span> and achieve measurable outcomes.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ── Section 5: We Partner Across the Health Ecosystem ── */}
      <section className="w-full bg-gray-50 py-16 xl:py-24">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-12">
          <h2 style={{ fontFamily: 'Poppins, sans-serif' }} className="text-4xl xl:text-5xl font-semibold text-gray-900 text-center mb-12">
            We Partner Across the{' '}
            <span style={{ color: '#f05a28' }}>Health Ecosystem</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {[
              {
                photo: partnerPhotos.employers,
                icon: (
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
                  </svg>
                ),
                iconBg: '#f05a28',
                title: 'Employers',
                desc: 'Improve employee health, productivity, and reduce healthcare costs.',
              },
              {
                photo: partnerPhotos.payers,
                icon: (
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 8.25H9m6 3H9m3 6l-3-3h1.5a3 3 0 100-6M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                iconBg: '#6366f1',
                title: 'Payers',
                desc: 'Drive member engagement and better health outcomes at scale.',
              },
              {
                photo: partnerPhotos.providers,
                icon: (
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25z" />
                  </svg>
                ),
                iconBg: '#2ecc71',
                title: 'Providers',
                desc: 'Extend care, improve adherence and patient outcomes.',
              },
              {
                photo: partnerPhotos.pharma,
                icon: (
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                  </svg>
                ),
                iconBg: '#ec4899',
                title: 'Pharma & Clinical Research',
                desc: 'Accelerate trials, improve patient recruitment and retention.',
              },
              {
                photo: partnerPhotos.government,
                icon: (
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
                  </svg>
                ),
                iconBg: '#3b82f6',
                title: 'Governments & Public Sector',
                desc: 'Build healthier communities and nations.',
              },
            ].map(card => (
              <div key={card.title} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 flex flex-col group hover:shadow-lg transition-shadow">
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={card.photo}
                    alt={card.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  {/* Icon badge */}
                  <div
                    className="absolute bottom-3 left-3 w-9 h-9 rounded-xl flex items-center justify-center shadow-md"
                    style={{ background: card.iconBg }}
                  >
                    {card.icon}
                  </div>
                </div>
                <div className="p-4 flex flex-col gap-1">
                  <h3 style={{ fontFamily: 'Poppins, sans-serif' }} className="text-base font-semibold text-gray-900">{card.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 7: Trusted by Global Organizations Carousel ── */}
      <section className="w-full bg-[#fbfcfd] py-14 sm:py-16 border-y border-slate-100 overflow-hidden" style={{ fontFamily: 'Poppins, sans-serif' }}>
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-12">
          {/* Section Heading & Subtitle */}
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-100/80 text-[#f05a28] text-xs font-semibold uppercase tracking-wider mb-2">
              Partnerships & Trust
            </div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#0B192C] tracking-tight">
              Trusted by <span className="text-[#f05a28]">Global Organizations</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Powering preventative wellness, engagement, and scalable care across leading employers, health plans, and providers.
            </p>
          </div>

          {/* Interactive Infinite & Navigable Logo Carousel */}
          <TrustedOrganizationsCarousel />
        </div>
      </section>

      {/* ── Section 7.5: Built for Trust. Designed for Healthcare. ── */}
      <section className="w-full bg-gradient-to-b from-white via-slate-50/60 to-white py-16 sm:py-20 border-b border-slate-100 relative" style={{ fontFamily: 'Poppins, sans-serif' }}>
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-12">
          
          {/* Header & Subtitle */}
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-xs font-semibold uppercase tracking-wider mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              Security, Privacy & Governance
            </div>
            <h2 className="text-3xl sm:text-4xl xl:text-5xl font-semibold text-[#0B192C] tracking-tight leading-[1.15]">
              Built for Trust.<br />
              <span className="text-[#f05a28]">Designed for Healthcare.</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed mt-4 max-w-2xl mx-auto">
              GOQii is built with privacy, security, and compliance at the core—helping organizations protect sensitive health information while delivering connected health experiences at scale.
            </p>
          </div>

          {/* Standards & Certifications Partner Logo Marquee */}
          <div className="bg-white rounded-3xl border border-slate-200/80 shadow-[0_4px_24px_rgba(0,0,0,0.03)] p-6 sm:p-8 md:p-10 max-w-7xl mx-auto overflow-hidden">
            <div className="flex items-center justify-between gap-4 border-b border-slate-100 pb-4 mb-5">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#f05a28]" />
                <h3 className="text-xs sm:text-sm font-bold uppercase tracking-widest text-slate-800">
                  Privacy, Security & Regulatory Compliance
                </h3>
              </div>
              <span className="text-[11px] font-medium text-emerald-600 bg-emerald-50 border border-emerald-100 px-3 py-1 rounded-full">
                Enterprise Certified & Audited
              </span>
            </div>

            {/* Continuous Marquee of Official Healthcare & Security Badges */}
            <ComplianceLogosMarquee />
          </div>

        </div>
      </section>

      {/* ── Section: OUR STORY (From a Bold Idea to a Global Health Movement) ── */}
      <OurStorySection onOpenPartnerModal={() => setIsPartnerModalOpen(true)} />

      {/* ── Section: THE PEOPLE BEHIND GOQii (Built by Experts. Driven by a Shared Mission.) ── */}
      <PeopleBehindGoqiiSection />

      {/* ── Section: THE GOQii ECOSYSTEM (Better Health Doesn't Happen Alone.) ── */}
      <GoqiiEcosystemSection />

      {/* ── Section: Real Results. Real Change. (Shifted to last before footer) ── */}
      <section className="w-full relative overflow-hidden py-16 sm:py-20 xl:py-24" style={{ minHeight: '440px', fontFamily: 'Poppins, sans-serif' }}>
        {/* Background photo */}
        <img
          src={runnersBg}
          alt="People running outdoors at sunset"
          className="absolute inset-0 w-full h-full object-cover object-center scale-105"
        />
        {/* Dark gradient overlay for high contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B132B]/95 via-[#0B132B]/90 to-[#0B132B]/98" />

        <div className="relative z-10 max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-12">
          {/* Section Header */}
          <div className="max-w-3xl mb-12 sm:mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/15 text-[#f05a28] text-xs font-semibold uppercase tracking-wider mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#f05a28] animate-pulse" />
              Proven Impact
            </div>
            <h2 className="text-3xl sm:text-4xl xl:text-5xl font-semibold text-white tracking-tight leading-tight">
              Real Results. <span className="text-[#f05a28]">Real Change.</span>
            </h2>
            <p className="text-lg sm:text-xl font-semibold text-slate-200 mt-2">
              Health Engagement That Delivers Measurable Outcomes.
            </p>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed mt-2 max-w-2xl">
              From chronic care and employee health to population programs, GOQii turns intelligent engagement into measurable impact.
            </p>
          </div>

          {/* 5 Outcome Cards Grid with Hero Numbers */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 xl:gap-6">
            {[
              {
                tag: 'Card 01 — Payers & Health Plans',
                num: '34%',
                label: 'Reduction in ER Visits',
                desc: 'GOQii-powered engagement helped reduce ER visits and associated claims.',
                color: '#f05a28',
              },
              {
                tag: 'Card 02 — Chronic Care',
                num: '90%',
                label: 'Patient Satisfaction',
                desc: 'High patient satisfaction across NHS-backed care programs.',
                color: '#3b82f6',
              },
              {
                tag: 'Card 03 — Employers',
                num: '85%',
                label: 'Lower Absenteeism',
                desc: 'Improved employee engagement contributed to reduced absenteeism.',
                color: '#10b981',
              },
              {
                tag: 'Card 04 — Digital Adherence',
                num: '28%',
                label: 'Increase in Adherence',
                desc: 'Digital engagement helped strengthen adherence in chronic disease management.',
                color: '#a855f7',
              },
              {
                tag: 'Card 05 — Population Health',
                num: '30%',
                label: 'Higher Preventive Engagement',
                desc: 'GOQii-led programs increased participation in preventive health.',
                color: '#f59e0b',
              },
            ].map((card) => (
              <div
                key={card.tag}
                className="bg-white/[0.06] backdrop-blur-md rounded-2xl p-6 sm:p-7 border border-white/10 hover:border-white/25 hover:bg-white/[0.1] transition-all duration-300 flex flex-col justify-between group shadow-[0_4px_20px_rgba(0,0,0,0.2)]"
              >
                <div>
                  <span className="text-[11px] font-semibold tracking-wider text-slate-400 uppercase block mb-3">
                    {card.tag}
                  </span>

                  {/* Hero Metric Number */}
                  <div className="my-2">
                    <span
                      style={{ color: card.color }}
                      className="text-5xl sm:text-6xl font-black tracking-tight leading-none drop-shadow-sm"
                    >
                      {card.num}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white leading-snug mt-3 mb-2 group-hover:text-orange-200 transition-colors">
                    {card.label}
                  </h3>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed mt-2 pt-3 border-t border-white/10">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
        </>
      )}

      {/* ── Footer ── */}
      <footer className="w-full bg-white border-t border-slate-100 pt-16 pb-12 text-slate-800" style={{ fontFamily: 'Poppins, sans-serif' }}>
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-12">
          {/* Top 6 Link Columns */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-16">
            {/* 1. PERSONAL SOLUTIONS */}
            <div className="flex flex-col gap-4">
              <h4 className="text-[12px] font-bold tracking-widest text-slate-900 uppercase">Personal Solutions</h4>
              <ul className="flex flex-col gap-3 text-[14px] text-slate-600 font-normal">
                <li><a href="#" className="hover:text-slate-900 transition-colors">SuperLife</a></li>
                <li><a href="#" className="hover:text-slate-900 transition-colors">SmartRx</a></li>
                <li><a href="#" className="hover:text-slate-900 transition-colors">NutriGenius</a></li>
              </ul>
            </div>

            {/* 2. ENTERPRISE */}
            <div className="flex flex-col gap-4">
              <h4 className="text-[12px] font-bold tracking-widest text-slate-900 uppercase">Enterprise</h4>
              <ul className="flex flex-col gap-3 text-[14px] text-slate-600 font-normal">
                <li><a href="https://goqii.com/healthengage" target="_blank" rel="noopener noreferrer" className="hover:text-slate-900 transition-colors">HealthEngage</a></li>
                <li><a href="https://goqii.com/healthengage-corporate" target="_blank" rel="noopener noreferrer" className="hover:text-slate-900 transition-colors">For Corporate</a></li>
                <li><a href="https://go-qii-connected-care-7c49.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:text-slate-900 transition-colors">For Health Care Providers</a></li>
                <li><a href="https://goqii.com/healthengage-pharma" target="_blank" rel="noopener noreferrer" className="hover:text-slate-900 transition-colors">For Pharma</a></li>
                <li><a href="https://goqii.com/healthengage-insurance" target="_blank" rel="noopener noreferrer" className="hover:text-slate-900 transition-colors">For Insurance</a></li>
              </ul>
            </div>

            {/* 3. INNOVATION */}
            <div className="flex flex-col gap-4">
              <h4 className="text-[12px] font-bold tracking-widest text-slate-900 uppercase">Innovation</h4>
              <ul className="flex flex-col gap-3 text-[14px] text-slate-600 font-normal">
                <li><a href="#" className="hover:text-slate-900 transition-colors">Sanjeevini</a></li>
                <li><a href="#" className="hover:text-slate-900 transition-colors">UHT</a></li>
              </ul>
            </div>

            {/* 4. RESOURCES */}
            <div className="flex flex-col gap-4">
              <h4 className="text-[12px] font-bold tracking-widest text-slate-900 uppercase">Resources</h4>
              <ul className="flex flex-col gap-3 text-[14px] text-slate-600 font-normal">
                <li><a href="#" className="hover:text-slate-900 transition-colors">Blog</a></li>
              </ul>
            </div>

            {/* 5. COMPANY */}
            <div className="flex flex-col gap-4">
              <h4 className="text-[12px] font-bold tracking-widest text-slate-900 uppercase">Company</h4>
              <ul className="flex flex-col gap-3 text-[14px] text-slate-600 font-normal">
                <li><a href="#our-story" className="hover:text-slate-900 transition-colors">Our Story</a></li>
                <li>
                  <a
                    href="#contact"
                    onClick={(e) => {
                      e.preventDefault()
                      navigateToContact()
                    }}
                    className={`transition-colors cursor-pointer ${
                      currentView === 'contact'
                        ? 'text-[#f05a28] font-bold underline'
                        : 'hover:text-slate-900'
                    }`}
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            {/* 6. SUPPORT */}
            <div className="flex flex-col gap-4">
              <h4 className="text-[12px] font-bold tracking-widest text-slate-900 uppercase">Support</h4>
              <ul className="flex flex-col gap-3 text-[14px] text-slate-600 font-normal">
                <li><a href="#" className="hover:text-slate-900 transition-colors">FAQs</a></li>
              </ul>
            </div>
          </div>

          {/* Middle Brand & Tagline + App Badges & Social Icons Bar */}
          <div className="border-t border-slate-100 py-8 flex flex-col xl:flex-row items-start xl:items-center justify-between gap-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 max-w-xl">
              <GoqiiLogo onClick={navigateToHome} />
              <p className="text-[14px] text-slate-600 leading-normal">
                Transforming healthcare from reactive treatment to continuous, intelligent prevention.
              </p>
            </div>

            {/* App Badges + Social Circle Buttons + Scroll to top */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6">
              {/* App Store & Google Play Badges */}
              <div className="flex items-center gap-3">
                <a
                  href="https://apps.apple.com/in/app/goqii/id868625946"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block transition-transform hover:opacity-90 hover:scale-[1.02] active:scale-[0.98]"
                  aria-label="Download GOQii on Apple App Store"
                >
                  <img
                    src="https://goqii.com/webApp/uswebsite2025/assets/images/icon-app-store.png"
                    alt="Download on the App Store"
                    className="h-[38px] w-auto object-contain rounded-lg"
                    referrerPolicy="no-referrer"
                  />
                </a>
                <a
                  href="https://play.google.com/store/apps/details?id=qii.go.com.goqii"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block transition-transform hover:opacity-90 hover:scale-[1.02] active:scale-[0.98]"
                  aria-label="Get GOQii on Google Play"
                >
                  <img
                    src="https://goqii.com/webApp/uswebsite2025/assets/images/icon-play-store.png"
                    alt="Get it on Google Play"
                    className="h-[38px] w-auto object-contain rounded-lg"
                    referrerPolicy="no-referrer"
                  />
                </a>
              </div>

              <div className="hidden sm:block h-6 w-px bg-slate-200" />

              {/* Social Circle Buttons */}
              <div className="flex items-center gap-2.5 sm:gap-3">
                {/* Facebook */}
                <a
                  href="https://www.facebook.com/GOQiiLife"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow GOQii on Facebook"
                  className="w-10 h-10 rounded-full bg-slate-100/90 hover:bg-[#1877F2] hover:text-white transition-all flex items-center justify-center text-slate-700 shadow-xs active:scale-95"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                {/* X / Twitter */}
                <a
                  href="https://twitter.com/goqii"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow GOQii on X (Twitter)"
                  className="w-10 h-10 rounded-full bg-slate-100/90 hover:bg-black hover:text-white transition-all flex items-center justify-center text-slate-700 shadow-xs active:scale-95"
                >
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/company/goqii/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow GOQii on LinkedIn"
                  className="w-10 h-10 rounded-full bg-slate-100/90 hover:bg-[#0A66C2] hover:text-white transition-all flex items-center justify-center text-slate-700 shadow-xs active:scale-95"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                  </svg>
                </a>
                {/* Instagram */}
                <a
                  href="https://www.instagram.com/goqiilife"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow GOQii on Instagram"
                  className="w-10 h-10 rounded-full bg-slate-100/90 hover:bg-[#E4405F] hover:text-white transition-all flex items-center justify-center text-slate-700 shadow-xs active:scale-95"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                {/* YouTube */}
                <a
                  href="https://www.youtube.com/user/GOQii"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Subscribe to GOQii on YouTube"
                  className="w-10 h-10 rounded-full bg-slate-100/90 hover:bg-[#FF0000] hover:text-white transition-all flex items-center justify-center text-slate-700 shadow-xs active:scale-95"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>

                {/* Scroll to top button */}
                <button
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  aria-label="Scroll to top"
                  className="w-10 h-10 rounded-full bg-slate-100/80 hover:bg-slate-200 transition-colors flex items-center justify-center text-slate-700 ml-2 cursor-pointer"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Bar: Legal & Copyright */}
          <div className="border-t border-slate-100 pt-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-[13px] text-slate-500">
            <div>
              <p className="text-[12px] text-slate-400">© 2026 GOQii Technologies Private Limited. All rights reserved.</p>
            </div>

            <div className="flex items-center gap-2">
              <span className="font-extrabold text-slate-800 uppercase tracking-wider text-[11px]">LEGAL:</span>
              <a
                href="#privacy"
                onClick={(e) => {
                  e.preventDefault()
                  navigateToPrivacy()
                }}
                className={`transition-colors cursor-pointer ${
                  currentView === 'privacy'
                    ? 'text-[#f05a28] font-bold underline'
                    : 'text-slate-600 hover:text-[#f05a28]'
                }`}
              >
                Privacy Policy
              </a>
              <span>|</span>
              <a
                href="#terms"
                onClick={(e) => {
                  e.preventDefault()
                  navigateToTerms()
                }}
                className={`transition-colors cursor-pointer ${
                  currentView === 'terms'
                    ? 'text-[#f05a28] font-bold underline'
                    : 'text-slate-600 hover:text-[#f05a28]'
                }`}
              >
                Terms of Service
              </a>
              <span>|</span>
              <a
                href="#trust"
                onClick={(e) => {
                  e.preventDefault()
                  navigateToTrust()
                }}
                className={`transition-colors cursor-pointer ${
                  currentView === 'trust'
                    ? 'text-[#f05a28] font-bold underline'
                    : 'text-slate-600 hover:text-[#f05a28]'
                }`}
              >
                Trust Center
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* ── Partner With GOQii Modal ── */}
      <PartnerWithUsModal
        isOpen={isPartnerModalOpen}
        onClose={() => setIsPartnerModalOpen(false)}
      />
    </div>
  )
}
