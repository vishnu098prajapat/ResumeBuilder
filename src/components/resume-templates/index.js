import ModernTemplate from './ModernTemplate';
import SimpleTemplate from './SimpleTemplate';
import CreativeTemplate from './CreativeTemplate';
import ProfessionalTemplate from './ProfessionalTemplate';
import BusinessTemplate from './BusinessTemplate';

// Premium Templates
import GoogleTemplate from './premium/GoogleTemplate';
import AmazonTemplate from './premium/AmazonTemplate';
import MicrosoftTemplate from './premium/MicrosoftTemplate';

export const templates = {
  // Free Templates
  modern: {
    id: 'modern',
    name: 'Modern Resume',
    description: 'Clean and contemporary design',
    thumbnail: '/images/templates/modern.png',
    component: ModernTemplate,
    category: 'professional',
    premium: false
  },
  simple: {
    id: 'simple',
    name: 'Simple Resume',
    description: 'Minimalist and effective',
    thumbnail: '/images/templates/simple.png',
    component: SimpleTemplate,
    category: 'simple',
    premium: false
  },
  creative: {
    id: 'creative',
    name: 'Creative Resume',
    description: 'Stand out with style',
    thumbnail: '/images/templates/creative.png',
    component: CreativeTemplate,
    category: 'creative',
    premium: true
  },
  professional: {
    id: 'professional',
    name: 'Professional Resume',
    description: 'Traditional and trusted format',
    thumbnail: '/images/templates/professional.png',
    component: ProfessionalTemplate,
    category: 'professional',
    premium: false
  },
  business: {
    id: 'business',
    name: 'Business Resume',
    description: 'Corporate and polished',
    thumbnail: '/images/templates/business.png',
    component: BusinessTemplate,
    category: 'free'
  },

  // Premium Company-Specific Templates
  google: {
    id: 'google',
    name: 'Google Resume',
    description: 'Optimized for Google applications',
    thumbnail: '/images/templates/google.png',
    component: GoogleTemplate,
    category: 'company',
    company: 'google',
    premium: true
  },
  amazon: {
    id: 'amazon',
    name: 'Amazon Resume',
    description: 'Aligned with Amazon leadership principles',
    thumbnail: '/images/templates/amazon.png',
    component: AmazonTemplate,
    category: 'company',
    company: 'amazon',
    premium: true
  },
  microsoft: {
    id: 'microsoft',
    name: 'Microsoft Resume',
    description: 'Perfect for Microsoft applications',
    thumbnail: '/images/templates/microsoft.png',
    component: MicrosoftTemplate,
    category: 'company',
    company: 'microsoft',
    premium: true
  }
}; 