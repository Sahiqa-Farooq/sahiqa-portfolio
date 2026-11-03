export interface WritingSample {
  id: string;
  title: string;
  subtitle: string;
  category: 'E-Commerce Content' | 'SEO Blog Posts' | 'Website Content' | 'Article Writing' | 'Product Descriptions';
  contentType: string;
  readTime: string;
  excerpt: string;
  image: string;
  keyFeatures: { label: string; value: string }[];
  tags: string[];
  fullStory: {
    projectGoal: string;
    writingApproach: string;
    sampleExcerpt: string;
    deliverables: string;
  };
}

export interface SkillItem {
  id: string;
  name: string;
  category: string;
  description: string;
  highlights: string[];
  iconName: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  benefits: string[];
  badge?: string;
}

export interface ContactFormData {
  fullName: string;
  email: string;
  serviceType: string;
  timeline: string;
  budget: string;
  projectBrief: string;
}

export interface FormValidationErrors {
  fullName?: string;
  email?: string;
  serviceType?: string;
  timeline?: string;
  budget?: string;
  projectBrief?: string;
}
