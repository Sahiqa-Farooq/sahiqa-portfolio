import { WritingSample, SkillItem, ServiceItem } from '../types';

export const WRITER_PROFILE = {
  name: 'Sahiqa Farooq',
  title: 'Content Writer',
  experience: 'Over 1 year of experience in e-commerce & digital content writing',
  email: 'sahiqa960@gmail.com',
  summary: 'Dedicated Content Writer with over one year of hands-on experience crafting compelling e-commerce copy, SEO-friendly articles, and engaging digital content. Skilled at conducting thorough research, adapting tone to diverse audiences, and delivering clear, error-free copy that drives reader engagement.',
};

export const SKILLS_DATA: SkillItem[] = [
  {
    id: 'content-writing',
    name: 'Content Writing',
    category: 'Core Competency',
    description: 'Creating clear, engaging, and audience-tailored written content across multiple digital formats including blog posts, website copy, and informational guides.',
    highlights: ['Audience-centered tone', 'Compelling storytelling', 'Structured headings & readability'],
    iconName: 'Feather',
  },
  {
    id: 'seo-writing',
    name: 'SEO Writing',
    category: 'Digital Optimization',
    description: 'Integrating targeted keywords naturally into headers and body copy, writing click-worthy meta titles and descriptions, and structuring articles for search visibility.',
    highlights: ['Keyword integration', 'Search intent alignment', 'Optimized headings (H1, H2, H3)'],
    iconName: 'Search',
  },
  {
    id: 'research',
    name: 'Research',
    category: 'Information Gathering',
    description: 'Conducting in-depth subject research across reputable sources, verifying facts, and breaking down complex topics into easily digestible points for readers.',
    highlights: ['Fact-checking & verification', 'Competitor & topic analysis', 'Data-backed explanations'],
    iconName: 'BookOpen',
  },
  {
    id: 'editing',
    name: 'Editing & Proofreading',
    category: 'Quality Assurance',
    description: 'Refining sentence structure, eliminating fluff, ensuring grammatical accuracy, and maintaining consistent brand voice across all deliverables.',
    highlights: ['Grammar & syntax precision', 'Clarity & flow enhancement', 'Tone & voice consistency'],
    iconName: 'CheckCircle2',
  },
  {
    id: 'communication',
    name: 'Communication',
    category: 'Professional Collaboration',
    description: 'Collaborating effectively with clients, understanding project briefs, asking clarifying questions, and delivering revisions promptly to meet project goals.',
    highlights: ['Prompt client updates', 'Receptive to constructive feedback', 'Clear brief comprehension'],
    iconName: 'MessageSquare',
  },
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'blog-writing',
    title: 'Blog Writing',
    tagline: 'Informative, engaging blog posts that capture interest and keep readers coming back.',
    description: 'High-quality blog content crafted to answer your audience’s key questions, establish your brand’s authority, and foster ongoing reader connection.',
    deliverables: [
      'Well-researched, original blog posts',
      'Captivating hooks and readable formatting',
      'Relevant subheadings, bullet points, and summaries',
      'Call-to-action (CTA) tailored to your goals',
    ],
    benefits: ['Builds steady organic traffic', 'Engages your target audience', 'Positions your brand as a trusted resource'],
    badge: 'Popular',
  },
  {
    id: 'article-writing',
    title: 'Article Writing',
    tagline: 'In-depth, well-structured articles backed by factual research and clear exposition.',
    description: 'Comprehensive long-form articles that explore topics deeply, explain concepts clearly, and provide actionable value to your readers.',
    deliverables: [
      'Comprehensive topic research and outline',
      'Detailed, engaging multi-section articles',
      'Fact-checked citations and references',
      'Polished, publication-ready draft',
    ],
    benefits: ['Demonstrates subject-matter expertise', 'High reader retention', 'Shareable across social platforms'],
  },
  {
    id: 'product-descriptions',
    title: 'Product Descriptions',
    tagline: 'Persuasive e-commerce descriptions that highlight benefits and drive purchases.',
    description: 'Benefit-driven product copy tailored for online stores. Focuses on sensory details, key specifications, and addressing customer pain points to improve conversion rates.',
    deliverables: [
      'Compelling benefit-focused headlines',
      'Concise, scannable bullet points highlighting key features',
      'Clear sizing, material, or technical specifications',
      'Persuasive call-to-action that encourages checkout',
    ],
    benefits: ['Reduces purchase hesitation', 'Enhances product appeal', 'Optimized for e-commerce search'],
    badge: 'E-Commerce Specialty',
  },
  {
    id: 'website-content',
    title: 'Website Content',
    tagline: 'Crisp, professional copy for Home, About, Services, and Landing Pages.',
    description: 'Clear, modern website copy that introduces your business with clarity, highlights your unique value proposition, and guides visitors to take action.',
    deliverables: [
      'Homepage hero copy and value propositions',
      'Authentic "About Us" brand storytelling',
      'Clear, descriptive Services / Offerings sections',
      'Engaging conversion-focused microcopy',
    ],
    benefits: ['Clear first impressions', 'Smooth user journey', 'Consistent brand messaging'],
  },
  {
    id: 'seo-content',
    title: 'SEO Content',
    tagline: 'Search-optimized articles and pages designed to rank on Google without sounding robotic.',
    description: 'Content strategically written around user search intent and keywords, ensuring your articles appeal to both search engine crawlers and human readers.',
    deliverables: [
      'Natural integration of primary & secondary keywords',
      'Optimized meta title and meta description drafts',
      'Logical H1, H2, and H3 header hierarchy',
      'Internal and external linking opportunities identified',
    ],
    benefits: ['Higher search engine visibility', 'Targeted organic traffic', 'Sustainable, long-term readership'],
  },
];

export const WRITING_SAMPLES: WritingSample[] = [
  {
    id: 'sample-ecommerce-skincare',
    title: 'E-Commerce Product Collection: Botanical Radiance Skincare',
    subtitle: 'A suite of benefit-focused product descriptions combining sensory language with ingredient transparency.',
    category: 'Product Descriptions',
    contentType: 'E-Commerce Product Copy',
    readTime: '3 min read',
    excerpt: 'Crafted engaging, sensory-rich descriptions for a natural skincare line, emphasizing botanical ingredients, application rituals, and skin benefits to help online shoppers make confident buying decisions.',
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1200&q=80',
    keyFeatures: [
      { label: 'Content Type', value: 'Product Copy' },
      { label: 'Target Audience', value: 'Skincare Shoppers' },
      { label: 'Focus', value: 'Benefits & Ingredients' },
    ],
    tags: ['E-Commerce', 'Product Descriptions', 'Consumer Goods'],
    fullStory: {
      projectGoal: 'Create clear, alluring product copy for an online boutique skincare brand that answers customer questions, highlights botanical ingredients, and motivates purchases.',
      writingApproach: 'Structured each description with an attention-grabbing hook, bulleted highlights of key botanical extracts (like Jojoba Oil and Hyaluronic Acid), exact usage rituals, and clear skin benefits.',
      sampleExcerpt: '“Infused with cold-pressed rosehip seed oil and plant-based squalane, this featherlight elixir melts effortlessly into tired skin. Designed to replenish lost hydration without a hint of greasiness, it leaves behind a dewy, luminous finish that lasts from your morning coffee through evening downtime.”',
      deliverables: '8 Complete product listings including headlines, feature bullets, sensory descriptions, and specifications.',
    },
  },
  {
    id: 'sample-seo-buyer-guide',
    title: 'SEO Buyer’s Guide: Choosing the Right Ergonomic Home Office Setup',
    subtitle: 'A comprehensive, keyword-optimized guide designed to assist remote workers in selecting ergonomic furniture.',
    category: 'SEO Blog Posts',
    contentType: 'Comprehensive Buying Guide',
    readTime: '5 min read',
    excerpt: 'Researched and wrote a 1,800-word SEO-friendly buyer’s guide targeting search terms around ergonomic work chairs, monitor placement, and posture support for work-from-home professionals.',
    image: 'https://images.unsplash.com/photo-1593062096033-9a26b09da705?auto=format&fit=crop&w=1200&q=80',
    keyFeatures: [
      { label: 'Primary Focus', value: 'Search Intent & UX' },
      { label: 'Length', value: '1,800 Words' },
      { label: 'Keyword Optimization', value: 'Natural Density' },
    ],
    tags: ['SEO Writing', 'Home Office', 'Buying Guide'],
    fullStory: {
      projectGoal: 'Help readers navigate the crowded market of ergonomic desk chairs and standing desks with clear, objective criteria while targeting high-intent search queries.',
      writingApproach: 'Organized the guide with clear H2/H3 headers addressing specific pain points (e.g. lumbar support adjustability, seat depth, and desk height math). Incorporated search terms smoothly without keyword stuffing.',
      sampleExcerpt: '“An ergonomic chair is not simply a piece of office furniture; it is an active investment in your spinal health. When evaluating lumbar support, look for two-dimensional adjustability: height adjustment to match the natural curve of your lower back, and depth tension to provide responsive firmness throughout long focus blocks.”',
      deliverables: 'Full-length SEO guide, recommended meta tags, image alt text suggestions, and internal link anchor ideas.',
    },
  },
  {
    id: 'sample-website-landing-page',
    title: 'Website Content: Modern Sustainable Living Brand Landing Page',
    subtitle: 'Homepage and About Us copy crafted with clear value propositions and an approachable brand voice.',
    category: 'Website Content',
    contentType: 'Website & Brand Copy',
    readTime: '4 min read',
    excerpt: 'Developed customer-friendly homepage hero messaging, mission statement copy, and service overview cards for an eco-conscious home essentials store.',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
    keyFeatures: [
      { label: 'Pages Covered', value: 'Home & About' },
      { label: 'Tone', value: 'Warm & Professional' },
      { label: 'Goal', value: 'Brand Clarity' },
    ],
    tags: ['Website Copy', 'Brand Identity', 'Landing Page'],
    fullStory: {
      projectGoal: 'Transform a fledgling brand’s mission into direct, welcoming website copy that makes sustainable living accessible and practical rather than overwhelming.',
      writingApproach: 'Focused on clarity above all. Used concise, active sentences for the hero section, followed by customer-focused benefit sections that directly explain the products’ everyday value.',
      sampleExcerpt: '“Sustainable living shouldn’t feel like a compromise. We design durable, thoughtfully crafted essentials for your home that respect both your everyday routine and the planet. No complex jargon—just honest products built to last.”',
      deliverables: 'Hero section copy, "Why Choose Us" 3-pillar section, product category blurbs, and compelling call-to-action buttons.',
    },
  },
  {
    id: 'sample-informative-article',
    title: 'Informative Article: 5 Practical Ways E-Commerce Stores Can Boost Conversions with Better Copy',
    subtitle: 'An actionable industry article outlining straightforward copywriting techniques that improve user experience.',
    category: 'Article Writing',
    contentType: 'Industry Blog Article',
    readTime: '4 min read',
    excerpt: 'Wrote an engaging, practical article detailing how subtle adjustments in microcopy, clarity, and scannable bullet points can dramatically improve online shoppers’ trust and cart completion.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    keyFeatures: [
      { label: 'Style', value: 'Actionable Advice' },
      { label: 'Format', value: 'Scannable Listicle' },
      { label: 'Key Audience', value: 'Online Merchants' },
    ],
    tags: ['Content Strategy', 'E-Commerce Tips', 'Article'],
    fullStory: {
      projectGoal: 'Provide actionable, easy-to-implement advice for e-commerce store owners looking to polish their store text and communicate effectively with first-time visitors.',
      writingApproach: 'Used an engaging problem-solution structure with real before-and-after copy examples. Ensured each point ended with a quick "Action Step" the reader could immediately test.',
      sampleExcerpt: '“Shoppers don’t read every sentence on a product page; they scan for answers. If your text hides crucial details like dimensions, return windows, or material care inside dense blocks of prose, buyers leave. Format your key specifications with clean, bulleted lines that provide immediate clarity.”',
      deliverables: '1,400-word informative article, formatted with subheadings, actionable takeaways, and a concise summary.',
    },
  },
];

export const WRITING_APPROACH = [
  {
    number: '01',
    title: 'Thorough Topic & Audience Research',
    description: 'Before writing a single sentence, I dive into the subject matter, study the target readers, and analyze what makes top-ranking content valuable.',
  },
  {
    number: '02',
    title: 'Clear, Engaging & SEO-Friendly Drafting',
    description: 'I write well-organized copy with natural keyword integration, smooth transitions, and scannable subheadings that make reading effortless.',
  },
  {
    number: '03',
    title: 'Rigorous Editing & Polishing',
    description: 'Every draft undergoes attentive proofreading to eliminate errors, tighten syntax, and ensure the tone aligns perfectly with your brand voice.',
  },
];
