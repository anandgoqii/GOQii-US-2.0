export interface FaqArticle {
  id: string;
  title: string;
  category: string;
  categoryCode: string;
  deviceTag?: string;
  naturalQueries: string[];
  summary: string;
  content: string[];
  relatedIds?: string[];
}

export interface FaqCategory {
  code: string;
  title: string;
  description: string;
  cta: string;
  icon: string;
  topics: string[];
}

export const FAQ_CATEGORIES: FaqCategory[] = [
  {
    "code": "01",
    "title": "Getting Started",
    "description": "Welcome to GOQii. Learn platform basics, account setup, and onboarding.",
    "cta": "View Getting Started \u2192",
    "icon": "Compass",
    "topics": [
      "What is GOQii?",
      "How does GOQii work?",
      "How do I get started?",
      "How do I set up my GOQii subscription?",
      "Create a GOQii account",
      "Login to GOQii",
      "Choose a coach",
      "Connect your first device"
    ]
  },
  {
    "code": "02",
    "title": "GOQii App",
    "description": "Master navigation, activity logging, custom reminders, and app settings.",
    "cta": "Explore App Help \u2192",
    "icon": "Smartphone",
    "topics": [
      "Using the GOQii App",
      "Account setup",
      "Goals & Habits",
      "Health data",
      "Logging food, water and activity",
      "Notifications",
      "Connected Apps",
      "App connectivity",
      "Syncing health data"
    ]
  },
  {
    "code": "03",
    "title": "Devices & Trackers",
    "description": "Pairing guides, Bluetooth troubleshooting, sensor care, and third-party sync.",
    "cta": "Explore Trackers \u2192",
    "icon": "Watch",
    "topics": [
      "Connect a GOQii device",
      "Syncing problems",
      "Charging & Battery",
      "Device accuracy",
      "Notifications",
      "Device setup",
      "Warranty",
      "Compatible third-party devices"
    ]
  },
  {
    "code": "04",
    "title": "Coaching",
    "description": "Connect 1-on-1 with certified health coaches, nutritionists, and fitness experts.",
    "cta": "Coaching FAQs \u2192",
    "icon": "Users",
    "topics": [
      "Who is a GOQii Coach?",
      "Coaching methodology",
      "Choosing a coach",
      "Communicating with your coach",
      "Sharing health information",
      "Changing your coach",
      "Coaching plans"
    ]
  },
  {
    "code": "05",
    "title": "Health Features",
    "description": "Store medical reports, consult doctors, and view AI longevity insights.",
    "cta": "Health Features \u2192",
    "icon": "HeartPulse",
    "topics": [
      "Health Locker",
      "Health Risk Assessment",
      "Diagnostics",
      "GOQii Doctor",
      "Health records",
      "Vitals tracking",
      "Health insights"
    ]
  },
  {
    "code": "06",
    "title": "Challenges & Rewards",
    "description": "Earn GOQii Cash & Karma points by completing daily active health goals.",
    "cta": "Challenges & Rewards \u2192",
    "icon": "Award",
    "topics": [
      "GOQii Challenges",
      "Corporate Challenges",
      "Spot Challenges",
      "GOQii Karma",
      "Rewards",
      "Activity integrations",
      "Challenge tracking"
    ]
  },
  {
    "code": "07",
    "title": "Orders & Store",
    "description": "Check delivery status, track marketplace dispatches, and manage store returns.",
    "cta": "Order Support \u2192",
    "icon": "ShoppingBag",
    "topics": [
      "Track my order",
      "Shipping & delivery",
      "Returns",
      "Damaged products",
      "Wrong order",
      "Health Store",
      "Order support"
    ]
  },
  {
    "code": "08",
    "title": "Account & Subscription",
    "description": "Manage membership plans, update email or phone numbers, and security options.",
    "cta": "Account Help \u2192",
    "icon": "UserCheck",
    "topics": [
      "My Account",
      "Login & Password",
      "Profile & Privacy",
      "Subscription renewal",
      "Account settings",
      "Personal information"
    ]
  },
  {
    "code": "09",
    "title": "Warranty & Product Support",
    "description": "Submit 1-year hardware warranty claims and request authorized service.",
    "cta": "Warranty Support \u2192",
    "icon": "ShieldCheck",
    "topics": [
      "Product warranty",
      "Warranty eligibility",
      "Claim warranty",
      "Device replacement",
      "Manufacturing defects",
      "Straps & accessories",
      "Returns policy"
    ]
  }
];

export const POPULAR_SEARCHES: string[] = [
  "Connect my device",
  "Sync issue",
  "Coaching",
  "Warranty",
  "Track order"
];

export const POPULAR_ARTICLE_IDS: string[] = [
  "art-what-is-goqii",
  "art-device-connect",
  "art-device-sync-issue",
  "art-coach-communication",
  "art-third-party-devices",
  "art-track-order",
  "art-claim-warranty",
  "art-contact-support"
];

export const FAQ_ARTICLES: FaqArticle[] = [
  {
    "id": "art-what-is-goqii",
    "title": "What is GOQii and how does it work?",
    "category": "Getting Started",
    "categoryCode": "01",
    "naturalQueries": [
      "what is goqii",
      "how does goqii work",
      "about goqii",
      "getting started",
      "goqii platform"
    ],
    "summary": "GOQii is a smart preventive healthcare ecosystem combining wearable trackers, 1-on-1 human coaching, health risk assessments, and medical consultations.",
    "content": [
      "GOQii is an end-to-end preventive healthcare platform engineered to bridge continuous health tracking with expert human guidance.",
      "Key Pillars of GOQii:",
      "\u2022 Smart Devices & Wearables: Track steps, sleep architecture, continuous SpO2, body temperature, and heart rate dynamics.",
      "\u2022 Certified Human Coaching: Work 1-on-1 with dedicated health coaches, certified clinical nutritionists, and fitness instructors who personalize your daily targets.",
      "\u2022 Health Locker & Diagnostics: Securely store lab reports, track medical history, and order doorstep blood tests.",
      "\u2022 Doctor Consultations: Schedule instant video or audio consultations with qualified doctors for health evaluations and prescription guidance.",
      "\u2022 Karma & Active Rewards: Earn Karma points for every healthy habit you complete, which support charitable causes or unlock store discounts."
    ],
    "relatedIds": [
      "art-get-started-setup",
      "art-choose-coach",
      "art-contact-support"
    ]
  },
  {
    "id": "art-get-started-setup",
    "title": "How do I set up my GOQii account and subscription?",
    "category": "Getting Started",
    "categoryCode": "01",
    "naturalQueries": [
      "how to setup goqii",
      "setup subscription",
      "activate goqii account",
      "onboarding guide"
    ],
    "summary": "Complete guide on creating a GOQii account, redeeming activation codes, and starting your personal wellness subscription.",
    "content": [
      "Setting up your GOQii account takes under 2 minutes:",
      "1. Download the GOQii App from Google Play Store or Apple App Store.",
      "2. Open the app and enter your 10-digit mobile number to receive an instant OTP.",
      "3. Enter the 6-digit OTP code to verify your mobile number.",
      "4. Enter your activation code (provided inside your GOQii smart tracker box or email receipt) to unlock your coaching subscription.",
      "5. Complete your Health Profile (Age, Height, Weight, Dietary Preferences, and Primary Health Goal).",
      "6. You are now ready to connect your tracker and pair with your dedicated GOQii Health Coach!"
    ],
    "relatedIds": [
      "art-what-is-goqii",
      "art-choose-coach",
      "art-forgot-password"
    ]
  },
  {
    "id": "art-choose-coach",
    "title": "How do I select & match with a GOQii Coach?",
    "category": "Getting Started",
    "categoryCode": "01",
    "naturalQueries": [
      "choose coach",
      "select coach",
      "coach onboarding",
      "matching with coach"
    ],
    "summary": "Learn how GOQii algorithms match you with certified nutritionists, fitness experts, or habit coaches aligned with your goals.",
    "content": [
      "During initial onboarding, GOQii presents a curated selection of certified coaches based on your health profile:",
      "\u2022 Goal Alignment: Filter coaches by specialization (e.g., Weight Loss, Diabetes Management, Hypertension, Endurance Training, or Stress Reduction).",
      "\u2022 Language Preference: Select coaches fluent in English, Hindi, Marathi, Gujarati, Tamil, Telugu, Kannada, or Bengali.",
      "\u2022 Coach Bio & Reviews: View coach qualifications, certifications, success stories, and user ratings before confirming.",
      "\u2022 First Consultation Call: Once assigned, your coach will initiate a welcome message and schedule an intro consultation to establish your baseline habits."
    ],
    "relatedIds": [
      "art-coach-communication",
      "art-change-coach"
    ]
  },
  {
    "id": "art-app-overview",
    "title": "How do I navigate the GOQii App and log daily habits?",
    "category": "GOQii App",
    "categoryCode": "02",
    "naturalQueries": [
      "using goqii app",
      "app overview",
      "log food",
      "log water",
      "habit tracking"
    ],
    "summary": "Master the GOQii App interface: logging meals with NutriGenius, tracking hydration, water logs, and step targets.",
    "content": [
      "The GOQii App dashboard is structured into intuitive daily health cards:",
      "1. Home / Log Tab: View step count, active calories burned, sleep score, and real-time heart rate.",
      "2. Food & Water Logging: Tap the '+' icon to log meals. Use NutriGenius AI camera photo recognition to instantly count calories and macros.",
      "3. Habit Tracker: Tick off daily habits assigned by your coach (e.g., 8 glasses of water, 10-minute mindfulness breathing, 10k steps).",
      "4. Vitals & Sync: Pull down on the home screen at any time to initiate instant Bluetooth sync with your GOQii tracker."
    ],
    "relatedIds": [
      "art-app-syncing",
      "art-device-connect"
    ]
  },
  {
    "id": "art-app-syncing",
    "title": "How to connect Google Fit or Apple Health with GOQii?",
    "category": "GOQii App",
    "categoryCode": "02",
    "naturalQueries": [
      "google fit sync",
      "apple health sync",
      "connect app",
      "sync health data"
    ],
    "summary": "Pass activity logs, workouts, and vitals seamlessly between GOQii and third-party health apps.",
    "content": [
      "Connecting Apple Health (iOS) or Google Fit / Health Connect (Android) allows auto-syncing of steps and workouts:",
      "\u2022 Apple Health (iOS): Go to GOQii App \u2192 Profile \u2192 Settings \u2192 Connected Apps \u2192 Apple Health \u2192 Enable All Permissions.",
      "\u2022 Google Fit (Android): Go to GOQii App \u2192 Profile \u2192 Settings \u2192 Connected Apps \u2192 Google Fit / Health Connect \u2192 Authorize Google Account.",
      "Data synced includes step count, active calories, distance walked, and sleep duration."
    ],
    "relatedIds": [
      "art-third-party-devices",
      "art-device-sync-issue"
    ]
  },
  {
    "id": "art-device-connect",
    "title": "How do I connect & pair my GOQii tracker to the app?",
    "category": "Devices & Trackers",
    "categoryCode": "03",
    "deviceTag": "Smart Vital",
    "naturalQueries": [
      "how do i connect my tracker?",
      "connect my device",
      "pair tracker",
      "how to connect watch",
      "device setup",
      "bluetooth pair"
    ],
    "summary": "Step-by-step instructions to pair your GOQii Smart Vital, Vital 3.0, or Vital ECG device with the Android or iOS GOQii app.",
    "content": [
      "Follow these simple steps to pair your GOQii Smart Tracker with your mobile device:",
      "1. Turn on Bluetooth and Location Services on your smartphone.",
      "2. Download and launch the GOQii App from Google Play Store or Apple App Store.",
      "3. Log in with your registered phone number or GOQii account.",
      "4. Navigate to Home \u2192 Profile / Tracker Settings \u2192 Add / Connect Tracker.",
      "5. Select your specific model (e.g., Smart Vital, Vital 3.0, Vital ECG, or Smart Scale).",
      "6. Ensure your tracker is fully charged (>20%) and kept next to your smartphone.",
      "7. Tap 'Search Tracker' and select your device name from the discovered Bluetooth list.",
      "8. Accept the 6-digit Bluetooth pairing request on both your phone and tracker screen.",
      "Once connected, the app will perform an initial background sync of your firmware and baseline vitals."
    ],
    "relatedIds": [
      "art-device-sync-issue",
      "art-third-party-devices",
      "art-smart-vital-guide"
    ]
  },
  {
    "id": "art-device-sync-issue",
    "title": "Why isn't my GOQii device syncing and how to fix it?",
    "category": "Devices & Trackers",
    "categoryCode": "03",
    "deviceTag": "Smart Vital",
    "naturalQueries": [
      "my watch isn't syncing",
      "sync issue",
      "why isn't my goqii device syncing?",
      "syncing problems",
      "tracker not syncing",
      "bluetooth connection failed"
    ],
    "summary": "Troubleshooting steps for resolving Bluetooth disconnects, background sync pauses, and data synchronization issues.",
    "content": [
      "If your GOQii tracker is not syncing data or shows 'Disconnected', try these troubleshooting steps in sequence:",
      "Step 1: Toggle Phone Bluetooth",
      "Turn off Bluetooth in your phone's quick settings bar for 10 seconds, then turn it back on.",
      "Step 2: Restart the GOQii App",
      "Force close the GOQii app from your phone's recent apps switcher and reopen it. Pull down on the app Home screen to trigger a manual refresh.",
      "Step 3: Verify Operating System Permissions",
      "Go to your phone's Settings \u2192 Apps \u2192 GOQii \u2192 Permissions. Ensure both 'Location' and 'Nearby Devices / Bluetooth' permissions are set to 'Allow all the time'.",
      "Step 4: Restart your Tracker",
      "Long press the side button or menu touch panel on your GOQii tracker for 8 seconds until the logo appears and the device restarts.",
      "Step 5: Unpair and Re-pair Device",
      "In the GOQii App, go to Profile \u2192 Tracker Settings \u2192 Unpair Tracker. Restart your phone's Bluetooth, then repeat the device pairing process from scratch.",
      "Note: Do not pair the device directly inside your phone's native Bluetooth settings menu; pairing must always be initiated through the GOQii App."
    ],
    "relatedIds": [
      "art-device-connect",
      "art-claim-warranty",
      "art-smart-vital-guide"
    ]
  },
  {
    "id": "art-third-party-devices",
    "title": "Can I use another smartwatch or Apple Watch / Fitbit with GOQii?",
    "category": "Devices & Trackers",
    "categoryCode": "03",
    "deviceTag": "Other Devices",
    "naturalQueries": [
      "can i use another smartwatch with goqii?",
      "apple watch",
      "fitbit",
      "google fit",
      "apple health",
      "samsung health",
      "garmin"
    ],
    "summary": "Instructions for linking Apple Health, Google Fit, Garmin, and third-party smartwatches to the GOQii ecosystem.",
    "content": [
      "Yes! You can use third-party smartwatches and health apps with GOQii by bridging your fitness data via Apple Health (iOS) or Google Fit / Health Connect (Android).",
      "Connecting via Apple Health (iPhone):",
      "1. Open GOQii App \u2192 Profile \u2192 Settings \u2192 Connected Apps & Services.",
      "2. Select 'Apple Health'.",
      "3. Grant permissions for Steps, Heart Rate, Active Calories, and Sleep Analysis.",
      "Connecting via Google Fit / Health Connect (Android):",
      "1. Open GOQii App \u2192 Profile \u2192 Settings \u2192 Connected Apps & Services.",
      "2. Select 'Google Fit' or 'Health Connect'.",
      "3. Authorize your Google account to pass activity and sensor logs directly into GOQii."
    ],
    "relatedIds": [
      "art-device-connect",
      "art-device-sync-issue"
    ]
  },
  {
    "id": "art-coach-communication",
    "title": "How do I communicate with & message my GOQii Coach?",
    "category": "Coaching",
    "categoryCode": "04",
    "naturalQueries": [
      "how do i talk to my coach?",
      "coaching",
      "message my coach",
      "communicating with your coach",
      "chat with coach",
      "schedule video call coach"
    ],
    "summary": "Learn how to send daily messages, meal photos, activity updates, and schedule 1-on-1 audio/video calls with your coach.",
    "content": [
      "Your certified GOQii Coach is your personal guide for habit building, nutrition adjustments, and physical activity guidance.",
      "How to Message Your Coach:",
      "1. Open the GOQii App and tap the 'Coach' tab on the bottom menu.",
      "2. Tap the chat text bar to send real-time text notes, voice messages, or upload meal photos.",
      "3. Your coach reviews your logged meals, step counts, and sleep logs during active shift hours (Mon\u2013Sat) and responds with tailored recommendations.",
      "Scheduling Voice / Video Calls:",
      "1. Inside the Coach section, tap the 'Call Coach' or 'Schedule Consultation' button.",
      "2. Select your preferred date and available time slot.",
      "3. You will receive a push notification reminder 10 minutes prior to your scheduled consultation."
    ],
    "relatedIds": [
      "art-change-coach",
      "art-what-is-goqii"
    ]
  },
  {
    "id": "art-change-coach",
    "title": "Can I change my assigned GOQii Coach?",
    "category": "Coaching",
    "categoryCode": "04",
    "naturalQueries": [
      "change coach",
      "how to change coach",
      "switch coach",
      "choose another coach",
      "different coach"
    ],
    "summary": "How to request a coach reassignment based on language preferences, health goals, or schedule alignment.",
    "content": [
      "We want to ensure you have the best possible synergy with your personal health coach.",
      "To Request a Coach Change:",
      "1. Open GOQii App \u2192 Coach Tab \u2192 Tap Settings / Gear Icon on the top right.",
      "2. Select 'Request Coach Change'.",
      "3. Choose your reason (e.g., Language preference, specific health focus like Diabetes Management or Weight Loss, or timing alignment).",
      "4. Our care team will re-assign a new certified coach matching your criteria within 24 hours."
    ],
    "relatedIds": [
      "art-coach-communication",
      "art-what-is-goqii"
    ]
  },
  {
    "id": "art-health-locker",
    "title": "How to use Health Locker & store medical records?",
    "category": "Health Features",
    "categoryCode": "05",
    "naturalQueries": [
      "health locker",
      "medical records",
      "upload blood test",
      "store prescriptions",
      "health data"
    ],
    "summary": "Store, digitize, and share blood reports, prescriptions, and diagnostic lab tests securely inside GOQii Health Locker.",
    "content": [
      "GOQii Health Locker is your secure, HIPAA-compliant digital vault for lifelong health records:",
      "\u2022 Upload Reports: Take a camera photo or upload PDF files of blood tests, doctor prescriptions, or radiology scans.",
      "\u2022 AI Digitization: Key vital parameters (HbA1c, Cholesterol, Lipid Profile, Thyroid) are auto-extracted into trend charts.",
      "\u2022 Doctor Sharing: Share encrypted health locker records with your GOQii doctor or personal physician in 1 click."
    ],
    "relatedIds": [
      "art-goqii-doctor",
      "art-what-is-goqii"
    ]
  },
  {
    "id": "art-goqii-doctor",
    "title": "How do I consult a GOQii Doctor online?",
    "category": "Health Features",
    "categoryCode": "05",
    "naturalQueries": [
      "consult doctor",
      "goqii doctor",
      "online doctor consultation",
      "book appointment doctor"
    ],
    "summary": "Schedule instant tele-consultations with certified MBBS doctors, physicians, and specialists.",
    "content": [
      "As a GOQii member, you have direct access to qualified medical doctors:",
      "1. Open GOQii App \u2192 Health Tab \u2192 Consult Doctor.",
      "2. Select instant audio/video consultation or schedule a preferred appointment slot.",
      "3. Review your Health Locker records with the doctor during the session.",
      "4. Receive an official digital prescription immediately after your consultation ends."
    ],
    "relatedIds": [
      "art-health-locker",
      "art-what-is-goqii"
    ]
  },
  {
    "id": "art-challenges-rewards",
    "title": "How do GOQii Challenges, Karma points, and rewards work?",
    "category": "Challenges & Rewards",
    "categoryCode": "06",
    "naturalQueries": [
      "karma points",
      "goqii rewards",
      "challenges",
      "earn goqii cash",
      "corporate challenge"
    ],
    "summary": "Earn Karma points for active habits, donate to charitable causes, or redeem GOQii Cash for store discounts.",
    "content": [
      "GOQii turns healthy living into a rewarding social journey:",
      "\u2022 Karma Points: Earn Karma for every 1,000 steps walked or habit logged. Karma points can be donated to partner NGOs (providing meals to children, planting trees).",
      "\u2022 GOQii Cash: Earn wellness reward points for winning step challenges. Use GOQii Cash to get up to 50% off on GOQii Health Store purchases.",
      "\u2022 Challenges: Participate in monthly national step challenges, corporate leaderboards, and spot habit streaks."
    ],
    "relatedIds": [
      "art-what-is-goqii",
      "art-app-overview"
    ]
  },
  {
    "id": "art-track-order",
    "title": "How do I track my order & delivery status?",
    "category": "Orders & Store",
    "categoryCode": "07",
    "naturalQueries": [
      "where is my order?",
      "how do i track my order?",
      "track order",
      "shipping status",
      "delivery date",
      "courier tracking"
    ],
    "summary": "Check shipment dispatch details, courier tracking links, and estimated delivery dates for GOQii devices and store orders.",
    "content": [
      "You can track the live status of your GOQii tracker or marketplace store order easily:",
      "1. Open the GOQii App or visit store.goqii.com.",
      "2. Go to Profile \u2192 My Orders.",
      "3. Tap on your recent Order Number to view dispatch status, courier name (e.g. BlueDart, Delhivery, Expressbees), and Air Waybill (AWB) number.",
      "4. Click 'Track Shipment' to open the live courier portal.",
      "Orders are typically dispatched within 24\u201348 hours of confirmation. Delivery takes 2\u20135 business days depending on your pin code location."
    ],
    "relatedIds": [
      "art-claim-warranty",
      "art-returns-refunds"
    ]
  },
  {
    "id": "art-returns-refunds",
    "title": "What is GOQii's return and refund policy?",
    "category": "Orders & Store",
    "categoryCode": "07",
    "naturalQueries": [
      "returns policy",
      "refund policy",
      "return product",
      "cancel order",
      "damaged product"
    ],
    "summary": "Guidelines on 7-day return windows for hardware products purchased from the official GOQii webstore.",
    "content": [
      "GOQii offers a 7-day replacement/return policy for hardware devices ordered directly through store.goqii.com or the GOQii App.",
      "Return Guidelines:",
      "\u2022 Product must be unused, in original packaging, with all accessories, user manuals, and seals intact.",
      "\u2022 Damaged on arrival or transit defect items must be reported within 48 hours of delivery.",
      "\u2022 Digital coaching subscriptions, lab tests, or digital passes once activated are non-refundable."
    ],
    "relatedIds": [
      "art-track-order",
      "art-claim-warranty"
    ]
  },
  {
    "id": "art-forgot-password",
    "title": "I forgot my password or cannot log in to my account",
    "category": "Account & Subscription",
    "categoryCode": "08",
    "naturalQueries": [
      "i forgot my password",
      "forgot password",
      "reset password",
      "login error",
      "cannot log in",
      "otp issue"
    ],
    "summary": "Reset your GOQii login password using SMS OTP or registered email authentication.",
    "content": [
      "If you are unable to log in to your GOQii account, follow these recovery steps:",
      "1. On the GOQii App Login Screen, tap 'Forgot Password?'.",
      "2. Enter your registered 10-digit mobile phone number or registered email address.",
      "3. Tap 'Send Verification Code'. You will receive a 6-digit OTP via SMS / Email.",
      "4. Enter the OTP code on screen and tap Verify.",
      "5. Create a new secure password (minimum 8 characters with at least 1 number).",
      "If you no longer have access to your registered mobile number, please contact support@goqii.com with your proof of identity and order details."
    ],
    "relatedIds": [
      "art-get-started-setup",
      "art-contact-support"
    ]
  },
  {
    "id": "art-subscription-renewal",
    "title": "How do I renew or upgrade my GOQii Subscription?",
    "category": "Account & Subscription",
    "categoryCode": "08",
    "naturalQueries": [
      "renew subscription",
      "extend membership",
      "upgrade plan",
      "coaching subscription renewal"
    ],
    "summary": "How to renew 3-month, 6-month, or 12-month personal coaching & health plans.",
    "content": [
      "To renew or extend your active coaching subscription:",
      "1. Open GOQii App \u2192 Profile \u2192 Subscription Plans.",
      "2. Choose your preferred plan duration (3 Months, 6 Months, or 12 Months).",
      "3. Apply available GOQii Cash discount coupons.",
      "4. Pay securely via UPI, Credit/Debit Card, or Netbanking. Your current coach assignment will seamlessly continue without interruption!"
    ],
    "relatedIds": [
      "art-forgot-password",
      "art-coach-communication"
    ]
  },
  {
    "id": "art-claim-warranty",
    "title": "How do I claim warranty for my GOQii device?",
    "category": "Warranty & Product Support",
    "categoryCode": "09",
    "naturalQueries": [
      "how do i claim warranty?",
      "warranty",
      "claim warranty",
      "warranty support",
      "defective watch",
      "device replacement",
      "hardware defect"
    ],
    "summary": "Submit a 1-year limited manufacturer warranty claim for hardware defects, display issues, or charging port faults.",
    "content": [
      "All official GOQii smart trackers and smart scales are covered by a 1-year manufacturer warranty against hardware and manufacturing defects.",
      "Eligibility Requirements:",
      "\u2022 Device purchased from official GOQii webstore or authorized retailer (Amazon, Flipkart, Croma).",
      "\u2022 Valid purchase invoice showing date of purchase within 12 months.",
      "\u2022 Issue caused by internal hardware/manufacturing defect (excludes physical impact damage, water submersion beyond IP rating, or unauthorized liquid entry).",
      "How to Submit a Warranty Claim:",
      "1. Open GOQii App \u2192 Support \u2192 Register Warranty Claim.",
      "2. Fill in your Order/Invoice ID, device serial number (located on product packaging box), and describe the hardware issue.",
      "3. Attach a brief 10-second video clip demonstrating the defect (e.g. screen non-responsive, charging fault).",
      "4. Our technical evaluation team will review your ticket within 24 hours and arrange doorstep courier pickup for replacement."
    ],
    "relatedIds": [
      "art-device-sync-issue",
      "art-track-order"
    ]
  },
  {
    "id": "art-smart-vital-guide",
    "title": "GOQii Smart Vital \u2014 Setup, Blood Pressure & SpO2 Diagnostics",
    "category": "Devices & Trackers",
    "categoryCode": "03",
    "deviceTag": "Smart Vital",
    "naturalQueries": [
      "smart vital",
      "goqii smart vital",
      "spo2 sensor",
      "body temperature vital",
      "blood pressure vital"
    ],
    "summary": "Detailed overview of GOQii Smart Vital features including continuous body temperature, blood oxygen SpO2, and blood pressure monitoring.",
    "content": [
      "The GOQii Smart Vital features a 1.3-inch HD touch screen with integrated clinical-grade medical sensors.",
      "Key Features & Operations:",
      "\u2022 SpO2 Blood Oxygen: Tap 'SpO2' on the watch menu. Sit still with your arm resting on a flat surface for 15 seconds to complete the measurement.",
      "\u2022 Body Temperature: Continuous sensor monitors surface body temperature. View real-time temperature logs inside GOQii App \u2192 Vitals.",
      "\u2022 Blood Pressure Monitoring: Calibrate your Smart Vital using a standard cuff monitor once every 30 days under Profile \u2192 Device Calibration for optical sensor precision.",
      "\u2022 Battery & Charging: Includes magnetic USB charging cable. Full charge time is ~90 minutes providing 7 days of normal operational battery life."
    ],
    "relatedIds": [
      "art-device-connect",
      "art-device-sync-issue"
    ]
  },
  {
    "id": "art-vital-3-guide",
    "title": "GOQii Vital 3.0 \u2014 Temperature Calibration & Battery Care",
    "category": "Devices & Trackers",
    "categoryCode": "03",
    "deviceTag": "Vital 3.0",
    "naturalQueries": [
      "vital 3.0",
      "goqii vital 3",
      "vital 3 temperature",
      "vital 3 charging"
    ],
    "summary": "Charging instructions, thermal sensor usage, and waterproof maintenance for the GOQii Vital 3.0 activity tracker.",
    "content": [
      "The GOQii Vital 3.0 tracker incorporates integrated body temperature sensing with automated thermal alerts.",
      "Charging Your Vital 3.0:",
      "1. Remove the bottom strap to reveal the built-in USB charging dongle.",
      "2. Plug the USB connector directly into any standard 5V/1A USB wall adapter or computer USB port.",
      "3. A battery charging icon will illuminate on the OLED display. Full charge takes approximately 1.5 hours.",
      "Water Resistance:",
      "Vital 3.0 is IP68 water resistant. It can withstand sweat, rain, and hand washing, but should not be used in hot showers, saunas, or deep diving."
    ],
    "relatedIds": [
      "art-device-connect",
      "art-device-sync-issue"
    ]
  },
  {
    "id": "art-vital-ecg-guide",
    "title": "GOQii Vital ECG \u2014 ECG Recording & Heart Rhythm Analysis",
    "category": "Devices & Trackers",
    "categoryCode": "03",
    "deviceTag": "Vital ECG",
    "naturalQueries": [
      "vital ecg",
      "goqii ecg",
      "ecg recording",
      "heart rhythm report",
      "arrhythmia tracking"
    ],
    "summary": "How to record lead-1 ECG traces, generate PDF health reports, and share readings with your GOQii doctor.",
    "content": [
      "The GOQii Vital ECG provides medical-grade single-lead ECG recording to detect sinus rhythms and irregular heart beats.",
      "How to Take an ECG Reading:",
      "1. Open the GOQii App and select 'Record ECG' or navigate to ECG on your device.",
      "2. Place your index finger firmly on the metal ECG electrode on the front face of the band.",
      "3. Keep your hands resting still on a table for 30 seconds while the electrical trace records.",
      "4. The app generates a PDF report categorized by AI algorithm and certified cardiologists, accessible in your Health Locker."
    ],
    "relatedIds": [
      "art-device-connect",
      "art-claim-warranty"
    ]
  },
  {
    "id": "art-smart-scale-guide",
    "title": "GOQii Smart Scale \u2014 Body Composition & BMI Syncing",
    "category": "Devices & Trackers",
    "categoryCode": "03",
    "deviceTag": "Smart Scale",
    "naturalQueries": [
      "smart scale",
      "goqii scale",
      "body fat percentage",
      "bmi sync",
      "body composition scale"
    ],
    "summary": "BIA bio-impedance measurement guide for tracking body fat %, visceral fat, muscle mass, and hydration metrics.",
    "content": [
      "The GOQii Smart Scale utilizes Bioelectrical Impedance Analysis (BIA) to measure 18 essential body composition metrics.",
      "How to Get Accurate Readings:",
      "1. Place the Smart Scale on a hard, flat floor surface (avoid carpets or uneven tiles).",
      "2. Step onto the metallic electrode plates with bare, clean, dry feet.",
      "3. Ensure the GOQii App is open on your smartphone with Bluetooth enabled.",
      "4. Remain still for 5 seconds until your weight and body fat % stabilize on the LED display and sync automatically to your health profile."
    ],
    "relatedIds": [
      "art-device-connect",
      "art-device-sync-issue"
    ]
  },
  {
    "id": "art-contact-support",
    "title": "How do I contact GOQii Support directly?",
    "category": "Getting Started",
    "categoryCode": "01",
    "naturalQueries": [
      "how do i contact goqii support?",
      "contact support",
      "support phone number",
      "customer service email",
      "help desk",
      "talk to support"
    ],
    "summary": "Connect with GOQii 24/7 customer care via in-app live chat, toll-free phone line, or support email.",
    "content": [
      "Our customer assistance team is ready to help you resolve any account, coaching, or hardware questions:",
      "1. In-App Support Chat (Fastest response):",
      "Open GOQii App \u2192 Home \u2192 Support \u2192 Tap 'Chat with GOQii Support'. Automated guidance is available 24/7, with live customer success agents available Mon\u2013Sat (9 AM \u2013 8 PM IST).",
      "2. Email Support:",
      "Send your queries to support@goqii.com along with your registered mobile number, order ID, or screenshots.",
      "3. Toll-Free Customer Helpline:",
      "Call 1800-313-2288 (Toll-Free India) available Monday to Saturday between 9:00 AM and 7:00 PM IST."
    ],
    "relatedIds": [
      "art-what-is-goqii",
      "art-claim-warranty",
      "art-track-order"
    ]
  }
];
