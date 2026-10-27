/**
 * Health blog content — post front-matter plus typed body blocks.
 * Authored by the clinical team; posts render at /blog/[slug].
 * New posts: append newest first, the hub and sitemap pick them up
 * automatically (same contract as SERVICES/CLINICS).
 */

export type PostBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "callout"; title: string; text: string };

export interface Post {
  slug: string;
  /** Absolute metadata title (no template suffix). */
  title: string;
  /** On-page headline (kept short — also used as the last breadcrumb). */
  h1: string;
  metaDescription: string;
  /** Card summary, one or two sentences. */
  excerpt: string;
  category: string;
  author: string;
  /** ISO date, yyyy-mm-dd, newest first by array order. */
  date: string;
  imageKey: string;
  imageAlt: string;
  featured?: boolean;
  body: PostBlock[];
}

export const POSTS: Post[] = [
  {
    slug: "when-to-go-to-the-emergency-room",
    title: "When to Go to the Emergency Room | Lifeline Hospitals Blog",
    h1: "When to Go to the Emergency Room",
    metaDescription:
      "Chest pain, a bad fall, a deep cut — how do you know when it can't wait until morning? The warning signs that mean you should come straight to a 24-hour emergency room.",
    excerpt:
      "Chest pain, a bad fall, a deep cut — how do you know when it can't wait until morning? A practical guide to the warning signs that mean come in now.",
    category: "Emergency Care",
    author: "Lifeline Clinical Team",
    date: "2026-10-20",
    imageKey: "svc-emergency",
    imageAlt:
      "Lifeline emergency team receiving a patient at The Lifeline Group of Hospitals, Nairobi",
    featured: true,
    body: [
      {
        type: "p",
        text: "Almost everyone faces that moment of uncertainty: a symptom that feels wrong, at an hour when no clinic is open. Is this an emergency, or can it wait until morning? It is never a comfortable decision to make alone. At The Lifeline Group of Hospitals, our emergency department runs 24 hours a day, every day, at both our Kahawa Wendani and Membley branches — and we would always rather see you and send you home reassured than have you wait at home with something serious.",
      },
      {
        type: "h2",
        text: "Come in immediately if you notice these signs",
      },
      {
        type: "ul",
        items: [
          "Chest pain or pressure that does not pass within a few minutes, especially if it spreads to the arm, jaw or back",
          "Difficulty breathing, or breathing that is fast, noisy or getting worse",
          "Sudden weakness or numbness on one side of the body, a drooping face, or slurred speech — possible signs of a stroke",
          "A seizure, or any loss of consciousness",
          "Severe bleeding that does not stop with firm pressure",
          "Serious injuries — road accidents, falls from a height, deep wounds or large burns",
          "A sudden, severe headache described as the worst ever experienced",
          "In babies and small children: persistent vomiting or diarrhoea with signs of dehydration — no tears, a dry mouth, or far fewer wet nappies than usual",
        ],
      },
      { type: "h2", text: "When a same-day visit is usually enough" },
      {
        type: "p",
        text: "Not every worrying symptom is an emergency. A fever without red-flag signs in a healthy adult, a mild sprain, a small cut that stops bleeding, or a stomach upset that still allows drinks and rest can usually wait for a booked consultation — the same day, rather than a midnight dash. If you are unsure where your situation falls, call us. Our team can help you judge over the phone whether to book a normal appointment or come straight in.",
      },
      { type: "h2", text: "What to bring — and what not to worry about" },
      {
        type: "p",
        text: "Bring your ID, any insurance card, and a list of the medicines the patient takes, if you have them to hand. But never delay arrival to gather paperwork — treatment can begin first and questions can be sorted afterwards. If someone else is driving you, our teams at both branches receive incoming cases around the clock, with the laboratory, imaging and operating theatres on site so testing continues without a referral elsewhere.",
      },
      {
        type: "callout",
        title: "In doubt, call or come",
        text: "Our emergency line — +254 711 420 359 — is answered 24 hours a day. If a symptom feels frightening or is getting worse quickly, waiting is never the safe option.",
      },
      {
        type: "p",
        text: "The decision you will never regret is coming in and being told everything is fine. The signs above are the ones our emergency teams see most — knowing them in advance turns a frightening hour into a clear plan.",
      },
    ],
  },
  {
    slug: "antenatal-visits-trimester-guide",
    title: "Antenatal Visits: A Trimester Guide | Lifeline Hospitals Blog",
    h1: "Antenatal Visits: A Trimester Guide",
    metaDescription:
      "What happens at an antenatal visit, how often to come, and the tests worth doing at each stage — a plain-language antenatal care guide for expectant mothers in Nairobi.",
    excerpt:
      "What happens at an antenatal visit, how often you should come, and the tests worth doing at each stage — a plain-language guide for expectant mothers.",
    category: "Maternal Health",
    author: "Lifeline Clinical Team",
    date: "2026-10-06",
    imageKey: "svc-antenatal",
    imageAlt:
      "Expectant mother during an antenatal consultation at The Lifeline Group of Hospitals, Nairobi",
    body: [
      {
        type: "p",
        text: "Antenatal care is the single most effective way to protect both mother and baby through pregnancy. Each visit builds a picture of how the pregnancy is progressing and catches the problems that respond best to early treatment — anaemia, high blood pressure and gestational diabetes among them. Here is what to expect at The Lifeline Group of Hospitals, from your first positive test to delivery day.",
      },
      {
        type: "h2",
        text: "Your first visit — the earlier the better",
      },
      {
        type: "p",
        text: "Book your first antenatal visit as soon as you know you are pregnant, ideally within the first three months. That first appointment is the longest: we take your medical and pregnancy history, check your blood pressure and weight, and arrange baseline blood tests — your blood group and haemoglobin level, and screening for conditions that are straightforward to treat in pregnancy if found early. An ultrasound scan dates the pregnancy and confirms that everything is progressing as it should.",
      },
      { type: "h2", text: "How often you will come in" },
      {
        type: "p",
        text: "A typical schedule runs monthly until about 28 weeks, every two weeks until 36 weeks, and weekly until delivery — more often if a pregnancy needs closer monitoring. If you are joining us after missing some visits, come anyway and we will pick up where the pregnancy is now; it is never too late to start.",
      },
      { type: "h2", text: "Tests and scans along the way" },
      {
        type: "ul",
        items: [
          "An early ultrasound to date the pregnancy and confirm its position",
          "A detailed anomaly scan, usually between 18 and 22 weeks, to check the baby's development",
          "Repeat haemoglobin checks to catch anaemia early — common in pregnancy and very treatable",
          "Blood pressure and urine checks at every visit to watch for pre-eclampsia",
          "Routine supplements — iron and folic acid — and tetanus vaccination as recommended",
          "Growth scans in the final trimester when the team wants a closer look",
        ],
      },
      { type: "h2", text: "Signs that mean come in — don't wait for the next visit" },
      {
        type: "ul",
        items: [
          "Any bleeding or fluid leaking from the vagina",
          "A severe headache, blurred vision or sudden swelling of the face and hands",
          "The baby moving noticeably less than usual later in pregnancy",
          "Regular painful contractions before your due date",
        ],
      },
      {
        type: "callout",
        title: "Book early, stay on schedule",
        text: "The conditions we most want to catch — anaemia, high blood pressure, gestational diabetes — rarely announce themselves. Regular visits are how they get found in time.",
      },
      {
        type: "p",
        text: "Our antenatal clinics run at both branches, with ultrasound and laboratory services on site so results stay in one place. When the day comes, our maternity teams deliver 24 hours a day, seven days a week — supported by the theatre and blood services a hospital should have on hand.",
      },
    ],
  },
  {
    slug: "blood-tests-explained-cbc",
    title: "Blood Tests Explained: Your CBC Results | Lifeline Blog",
    h1: "Blood Tests Explained: Your CBC Results",
    metaDescription:
      "A complete blood count is one of the most requested lab tests in Nairobi. What each part of the report means, and why doctors order it so often.",
    excerpt:
      "The complete blood count is one of the most requested tests in our laboratory. What each line of the report means — and why doctors order it so often.",
    category: "Laboratory",
    author: "Lifeline Clinical Team",
    date: "2026-09-22",
    imageKey: "svc-laboratory",
    imageAlt:
      "Laboratory scientist analysing blood samples at The Lifeline Group of Hospitals, Nairobi",
    body: [
      {
        type: "p",
        text: "A complete blood count — CBC for short — is usually the first test a doctor orders, whether you have come in with a fever, for a routine check, or ahead of a procedure. It needs only a small sample, and at our on-site laboratory the results are typically ready within hours. Here is what the report is actually measuring.",
      },
      { type: "h2", text: "The three families of blood cells" },
      {
        type: "p",
        text: "Your blood carries three types of cells, and the CBC counts and sizes each of them. Red blood cells and their haemoglobin carry oxygen around the body. White blood cells are your defence against infection. Platelets are what allow blood to clot after a cut or injury. An abnormality in any of these three lines tells the doctor which direction to look.",
      },
      { type: "h2", text: "What common results can mean" },
      {
        type: "p",
        text: "A low haemoglobin reading points to anaemia — among the most common findings we see, especially in pregnancy, in women with heavy periods, and in diets short of iron. It explains tiredness, dizziness and breathlessness, and usually responds well to treatment once the cause is identified. A raised white cell count suggests the body is fighting an infection or inflammation. A low platelet count is less common and deserves a proper review rather than self-diagnosis.",
      },
      {
        type: "p",
        text: "Single numbers rarely tell the whole story. A slightly low reading on one line, in someone who feels well, may mean nothing at all — which is why results are read together, alongside your symptoms and history, rather than line by line.",
      },
      { type: "h2", text: "Why doctors order it so often" },
      {
        type: "p",
        text: "The CBC is fast, low-cost and safe, and it covers a lot of ground: it screens for anaemia and infection, triages a fever, checks on a chronic condition, and confirms fitness ahead of surgery. For many complaints it is the sensible first step before more specific tests — normal results let both doctor and patient move on with confidence.",
      },
      { type: "h2", text: "Do you need to prepare?" },
      {
        type: "p",
        text: "No fasting is needed for a CBC — a normal breakfast will not change your counts. Drink water as usual, wear a sleeve that rolls up easily, and tell the team which medicines you take, because a few can affect the results. If one CBC is a photograph, a repeat test is a video: a second count a week or two later often tells the doctor more than the first.",
      },
      {
        type: "callout",
        title: "Results in hours, not days",
        text: "Our laboratory operates around the clock at both branches. If anything in your report is unclear, ask — explaining results is part of the service, not an extra.",
      },
    ],
  },
  {
    slug: "high-blood-pressure-what-to-know",
    title: "High Blood Pressure: Signs & When to Act | Lifeline Blog",
    h1: "High Blood Pressure: What to Know",
    metaDescription:
      "Most people with high blood pressure feel perfectly well. What the numbers mean, the habits that protect your heart, and when hypertension becomes an emergency.",
    excerpt:
      "Most people with high blood pressure feel perfectly fine. What the numbers mean, the habits that protect your heart, and when it becomes an emergency.",
    category: "Heart Health",
    author: "Lifeline Clinical Team",
    date: "2026-09-08",
    imageKey: "clinic-cardiac",
    imageAlt:
      "Cardiac care consultation at The Lifeline Group of Hospitals, Nairobi",
    body: [
      {
        type: "p",
        text: "High blood pressure earns its nickname — the silent condition — honestly. It usually causes no symptoms at all while, year after year, it strains the heart, kidneys, eyes and brain. That is why the cuff appears at the start of almost every consultation at The Lifeline Group of Hospitals, and why we would rather find a high reading in a healthy-feeling patient than the complications it quietly builds.",
      },
      { type: "h2", text: "What the numbers mean" },
      {
        type: "p",
        text: "Blood pressure is written as two numbers, for example 120/80 mmHg — the pressure when the heart beats, and the pressure between beats. Readings that stay at or above 140/90 across repeated checks are generally considered hypertension, and anything consistently above that calls for a treatment conversation with a clinician. One high reading after climbing the stairs, a poor night, or a stressful commute is not a diagnosis — that is what repeat measurement is for.",
      },
      { type: "h2", text: "Who should be checked?" },
      {
        type: "p",
        text: "Every adult should know their numbers, and from middle age it deserves a place in routine care. Come in sooner if high blood pressure runs in your family, if you live with diabetes or kidney disease, if you are carrying extra weight, or if you smoke. A blood pressure check takes minutes — ask for one at any of our clinics.",
      },
      { type: "h2", text: "Habits that genuinely lower blood pressure" },
      {
        type: "ul",
        items: [
          "Cutting back on salt — the biggest single win for most Kenyan tables, from added salt at the stove to processed and packaged foods",
          "Moving most days of the week — a brisk 30-minute walk counts",
          "Limiting alcohol and stopping smoking",
          "Rest and stress — sleep matters, and so does finding a sustainable way to slow down",
          "Taking prescribed blood pressure medicine every day, even on the days you feel well — treatment is usually long-term by design",
        ],
      },
      { type: "h2", text: "When high blood pressure becomes an emergency" },
      {
        type: "p",
        text: "Hypertension that is suddenly severe and paired with a crushing headache, blurred vision, chest pain, breathlessness, or weakness on one side of the body is not a manage-at-home moment. Come straight to our emergency department — both branches are open 24 hours — or call us first on +254 711 420 359.",
      },
      {
        type: "callout",
        title: "Get to know your numbers",
        text: "A blood pressure check takes five minutes at any of our clinics. If it has been over a year since your last one, that is the appointment to make.",
      },
      {
        type: "p",
        text: "Our cardiac unit works with the laboratory and imaging services on site to assess the heart fully — blood pressure, cholesterol, blood sugar and ECG in one place. Found early, high blood pressure is one of the most manageable conditions in medicine; the trouble is only ever in finding it late.",
      },
    ],
  },
  {
    slug: "fever-in-children-when-to-worry",
    title: "Fever in Children: When to Worry | Lifeline Hospitals Blog",
    h1: "Fever in Children: When to Worry",
    metaDescription:
      "Fever is the body's defence, not a disease. How to keep a child with fever comfortable at home, and the red-flag signs that mean see a doctor — day or night.",
    excerpt:
      "Fever is the body's defence, not a disease in itself. How to keep your child comfortable at home — and the signs that mean it is time to see a doctor.",
    category: "Child Health",
    author: "Lifeline Clinical Team",
    date: "2026-08-25",
    imageKey: "pediatric-care",
    imageAlt:
      "Lifeline clinician examining a child at The Lifeline Group of Hospitals, Nairobi",
    body: [
      {
        type: "p",
        text: "Few things bring parents to our doors at 2 a.m. like a hot forehead. The reassuring truth is that fever is the body's defence working as designed, not a disease in itself — with ordinary childhood infections, it is part of the fight, not the enemy. The real skill is knowing when a fever is part of an ordinary course and when it is waving a red flag.",
      },
      { type: "h2", text: "When home care is reasonable" },
      {
        type: "p",
        text: "If your child has a temperature of about 38°C or above, is still drinking, responds to you normally, and has no red-flag signs (below), a quiet day at home with careful watching is a reasonable plan. Fevers from common viral infections typically settle within two to three days.",
      },
      { type: "h2", text: "Keeping your child comfortable" },
      {
        type: "ul",
        items: [
          "Offer fluids often — small sips of water, diluted juice or breast milk. Children lose a lot of fluid with fever",
          "Dress them lightly; a couch and a blanket they can shed beats heavy layering that traps heat",
          "Paracetamol given by weight, at the right dose and interval, eases discomfort — our team or pharmacist can advise on dosing",
          "Never give aspirin to a child",
          "Let them rest, but a child who wants to play is a good sign — vigorous play is fine",
        ],
      },
      { type: "h2", text: "Bring your child in right away if" },
      {
        type: "ul",
        items: [
          "They are under three months old with any fever at all — this is always a see-a-doctor-now situation",
          "The fever lasts more than three days, or keeps returning",
          "A seizure, stiff neck, unusual drowsiness, or difficulty breathing",
          "They refuse all drinks, cannot be comforted, or cry without tears and have a dry mouth — signs of dehydration",
          "You notice a rash that does not fade when pressed",
          "The fever follows recent travel, contact with someone seriously ill, or suspected contaminated water or food",
        ],
      },
      {
        type: "callout",
        title: "Trust your instincts",
        text: "You know your child best. If they simply do not seem like themselves, bring them in — our paediatric team sees children around the clock at both branches, no appointment needed.",
      },
      {
        type: "p",
        text: "Our paediatric clinic runs alongside the 24-hour laboratory, so a fever workup — examination, blood tests where needed, and a clear plan — happens in one visit. And because children do not schedule their illnesses, we are open every hour of every day.",
      },
    ],
  },
];

export function postBySlug(slug: string): Post | undefined {
  return POSTS.find((p) => p.slug === slug);
}

/** Other posts, newest first — used for "Continue reading". */
export function relatedPosts(slug: string, count: number): Post[] {
  return POSTS.filter((p) => p.slug !== slug).slice(0, count);
}

export function featuredPost(): Post {
  return POSTS.find((p) => p.featured) ?? POSTS[0];
}

/** ~200 wpm reading speed, minimum 2. */
export function readingMinutes(post: Post): number {
  const words = post.body.reduce((n, block) => {
    if (block.type === "p" || block.type === "h2") return n + block.text.split(/\s+/).length;
    if (block.type === "ul") return n + block.items.join(" ").split(/\s+/).length;
    return n + (block.title + " " + block.text).split(/\s+/).length;
  }, 0);
  return Math.max(2, Math.round(words / 200));
}

const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

/** "2026-10-20" → "20 October 2026" (no locale parsing → no SSR mismatch). */
export function formatDate(iso: string): string {
  const [y, m, d] = iso.split("-").map(Number);
  return `${d} ${MONTHS[m - 1]} ${y}`;
}
