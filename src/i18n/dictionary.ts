export type Lang = "en" | "bn";

const en = {
  brand: "Flex Fit Gym",
  city: "Khulna",
  skip: "Skip to main content",
  nav: { home: "Home", membership: "Membership", gallery: "Gallery", contact: "Contact" },
  menuOpen: "Open menu",
  menuClose: "Close menu",
  langSwitch: "বাংলা",
  langSwitchLabel: "Switch language to Bangla",
  demoBanner: "Concept demo — not an official Flex Fit Gym website. Details are awaiting owner confirmation.",
  cta: "Enquire about membership",
  footer: {
    tagline: "A concept website for a Khulna fitness community.",
    unverified: "Phone, address and opening hours are not yet confirmed.",
    rights: "Independent concept demo.",
  },
  home: {
    eyebrow: "Khulna · Strength & conditioning",
    title: "Train with purpose. Build lasting strength.",
    lead: "A welcoming space for first-timers and experienced lifters alike. Explore memberships and get in touch to start.",
    secondary: "View membership",
    imageNote: "Placeholder — concept image",
  },
  comingSoon: "This page is being built in the next phase.",
  pages: {
    membership: "Membership",
    gallery: "Gallery",
    contact: "Contact",
  },
};

export type Dict = typeof en;

const bn: Dict = {
  brand: "ফ্লেক্স ফিট জিম",
  city: "খুলনা",
  skip: "মূল বিষয়বস্তুতে যান",
  nav: { home: "হোম", membership: "মেম্বারশিপ", gallery: "গ্যালারি", contact: "যোগাযোগ" },
  menuOpen: "মেনু খুলুন",
  menuClose: "মেনু বন্ধ করুন",
  langSwitch: "English",
  langSwitchLabel: "ভাষা ইংরেজিতে পরিবর্তন করুন",
  demoBanner: "কনসেপ্ট ডেমো — এটি ফ্লেক্স ফিট জিমের অফিসিয়াল ওয়েবসাইট নয়। তথ্যগুলো মালিকের নিশ্চিতকরণের অপেক্ষায়।",
  cta: "মেম্বারশিপ সম্পর্কে জানুন",
  footer: {
    tagline: "খুলনার একটি ফিটনেস কমিউনিটির জন্য কনসেপ্ট ওয়েবসাইট।",
    unverified: "ফোন, ঠিকানা ও খোলার সময় এখনো নিশ্চিত নয়।",
    rights: "স্বতন্ত্র কনসেপ্ট ডেমো।",
  },
  home: {
    eyebrow: "খুলনা · শক্তি ও কন্ডিশনিং",
    title: "লক্ষ্য নিয়ে ট্রেনিং করুন। স্থায়ী শক্তি গড়ুন।",
    lead: "নতুন ও অভিজ্ঞ — সবার জন্য একটি স্বাগত জানানো জায়গা। মেম্বারশিপ দেখুন এবং শুরু করতে যোগাযোগ করুন।",
    secondary: "মেম্বারশিপ দেখুন",
    imageNote: "প্লেসহোল্ডার — কনসেপ্ট ছবি",
  },
  comingSoon: "এই পৃষ্ঠাটি পরবর্তী ধাপে তৈরি হচ্ছে।",
  pages: {
    membership: "মেম্বারশিপ",
    gallery: "গ্যালারি",
    contact: "যোগাযোগ",
  },
};

export const dictionaries: Record<Lang, Dict> = { en, bn };
