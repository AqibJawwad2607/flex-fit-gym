import type { Lang } from "./dictionary";

const en = {
  draft: "Draft — awaiting owner confirmation",
  intro: {
    title: "A gym for every starting point",
    body: "Whether you are lifting for the first time or returning to structured training, the aim is a clear, supportive place to work on your goals at your own pace.",
  },
  facilities: {
    title: "Facilities",
    lead: "Planned areas shown for this concept. The actual layout and equipment will be confirmed with the gym.",
    items: [
      { title: "Strength area", body: "Space for free weights and racks." },
      { title: "Cardio zone", body: "Room for conditioning and warm-ups." },
      { title: "Functional floor", body: "Open floor for mobility and bodyweight work." },
      { title: "Changing area", body: "Somewhere to prepare before and after training." },
    ],
  },
  services: {
    title: "Services",
    items: [
      { title: "General gym access", body: "Train independently during opening hours." },
      { title: "Beginner guidance", body: "Help getting comfortable with the basics." },
      { title: "Personal training", body: "One-to-one sessions, subject to availability." },
    ],
  },
  membership: {
    title: "Membership options",
    lead: "Prices are not shown until they are confirmed. Send an enquiry for current details.",
    plans: ["Monthly", "Quarterly", "Annual"],
    planNote: "Benefits to be confirmed",
    cta: "See membership",
  },
  gallery: { title: "Inside the gym", cta: "Open gallery", note: "Placeholder — concept images" },
  faq: {
    title: "Frequently asked questions",
    items: [
      { q: "Can complete beginners join?", a: "The concept is designed to welcome beginners. Exact onboarding support will be confirmed by the gym." },
      { q: "What are the opening hours?", a: "Opening hours have not been confirmed yet. Please check the gym's official social profiles." },
      { q: "How much does membership cost?", a: "Prices are not published on this demo. Send an enquiry to ask about current rates." },
      { q: "Do I need to book a visit?", a: "Visit arrangements have not been confirmed yet." },
    ],
  },
  location: {
    title: "Find us",
    city: "Khulna, Bangladesh",
    pending: "Exact address, phone and WhatsApp are not yet confirmed.",
    call: "Call",
    whatsapp: "WhatsApp",
    directions: "Directions",
    unavailable: "Not yet confirmed",
    contactCta: "Go to contact page",
  },
};

export type HomeDict = typeof en;

const bn: HomeDict = {
  draft: "খসড়া — মালিকের নিশ্চিতকরণের অপেক্ষায়",
  intro: {
    title: "প্রতিটি শুরুর জন্য একটি জিম",
    body: "প্রথমবার ওজন তুলছেন বা আবার নিয়মিত ট্রেনিংয়ে ফিরছেন — নিজের গতিতে লক্ষ্য পূরণের জন্য একটি পরিষ্কার ও সহায়ক জায়গাই আমাদের উদ্দেশ্য।",
  },
  facilities: {
    title: "সুবিধাসমূহ",
    lead: "এই কনসেপ্টের জন্য পরিকল্পিত জায়গা। প্রকৃত বিন্যাস ও সরঞ্জাম জিমের সাথে নিশ্চিত করা হবে।",
    items: [
      { title: "স্ট্রেংথ এরিয়া", body: "ফ্রি ওয়েট ও র‍্যাকের জন্য জায়গা।" },
      { title: "কার্ডিও জোন", body: "কন্ডিশনিং ও ওয়ার্ম-আপের জায়গা।" },
      { title: "ফাংশনাল ফ্লোর", body: "মোবিলিটি ও বডিওয়েট ব্যায়ামের খোলা জায়গা।" },
      { title: "চেঞ্জিং এরিয়া", body: "ট্রেনিংয়ের আগে ও পরে প্রস্তুতির জায়গা।" },
    ],
  },
  services: {
    title: "সেবাসমূহ",
    items: [
      { title: "সাধারণ জিম অ্যাক্সেস", body: "খোলার সময়ে নিজে নিজে ট্রেনিং করুন।" },
      { title: "নতুনদের জন্য নির্দেশনা", body: "মৌলিক বিষয়ে স্বচ্ছন্দ হতে সহায়তা।" },
      { title: "পার্সোনাল ট্রেনিং", body: "প্রাপ্যতা সাপেক্ষে একক সেশন।" },
    ],
  },
  membership: {
    title: "মেম্বারশিপের ধরন",
    lead: "নিশ্চিত না হওয়া পর্যন্ত মূল্য দেখানো হচ্ছে না। বর্তমান তথ্যের জন্য জিজ্ঞাসা পাঠান।",
    plans: ["মাসিক", "ত্রৈমাসিক", "বার্ষিক"],
    planNote: "সুবিধাগুলো নিশ্চিত করা হবে",
    cta: "মেম্বারশিপ দেখুন",
  },
  gallery: { title: "জিমের ভেতরে", cta: "গ্যালারি খুলুন", note: "প্লেসহোল্ডার — কনসেপ্ট ছবি" },
  faq: {
    title: "সাধারণ জিজ্ঞাসা",
    items: [
      { q: "একেবারে নতুনরা কি যোগ দিতে পারবেন?", a: "কনসেপ্টটি নতুনদের স্বাগত জানাতে তৈরি। নির্দিষ্ট সহায়তা জিম নিশ্চিত করবে।" },
      { q: "খোলার সময় কখন?", a: "খোলার সময় এখনো নিশ্চিত নয়। অনুগ্রহ করে জিমের অফিসিয়াল সোশ্যাল প্রোফাইল দেখুন।" },
      { q: "মেম্বারশিপের খরচ কত?", a: "এই ডেমোতে মূল্য প্রকাশ করা হয়নি। বর্তমান মূল্য জানতে জিজ্ঞাসা পাঠান।" },
      { q: "ভিজিটের জন্য কি বুকিং লাগবে?", a: "ভিজিটের ব্যবস্থা এখনো নিশ্চিত নয়।" },
    ],
  },
  location: {
    title: "আমাদের খুঁজুন",
    city: "খুলনা, বাংলাদেশ",
    pending: "সঠিক ঠিকানা, ফোন ও হোয়াটসঅ্যাপ এখনো নিশ্চিত নয়।",
    call: "কল",
    whatsapp: "হোয়াটসঅ্যাপ",
    directions: "দিকনির্দেশনা",
    unavailable: "এখনো নিশ্চিত নয়",
    contactCta: "যোগাযোগ পৃষ্ঠায় যান",
  },
};

export const homeDict: Record<Lang, HomeDict> = { en, bn };
