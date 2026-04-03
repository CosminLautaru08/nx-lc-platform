export type Service = {
  id: string;
  slug: string;
  name: string;
  badge?: string;
  shortDescription: string;
  description: string;
  priceFrom: number;
  duration: string;
  image: string;
  highlights: string[];
};

export type Slide = {
  id: string;
  title: string;
  subtitle: string;
  image: string;
};

export const services: Service[] = [
  {
    id: 'svc-01',
    slug: 'signature-exterior',
    name: 'Detailare Exterioara Signature',
    badge: 'Cel mai cerut',
    shortDescription:
      'Spalare in doi pasi cu spuma, decontaminare, sealant mecanic, dressing anvelope si plastice.',
    description:
      'Reset complet exterior care elimina contaminantii, reda claritatea si aplica un sealant durabil pentru luni de luciu. Potrivit la 3-4 luni sau inainte de drumuri importante.',
    priceFrom: 189,
    duration: '2-3 ore',
    image:
      'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=1600&q=80',
    highlights: [
      'Pre-spalare neutra + contact wash',
      'Decontaminare clay + iron remover',
      'Sealant mecanic intr-o trecere',
      'Finisare anvelope, plastice, evacuare',
    ],
  },
  {
    id: 'svc-02',
    slug: 'interior-reset',
    name: 'Reset Interior',
    shortDescription:
      'Abur, samponare si tratare cu ozon pentru un habitaclu curat si mat.',
    description:
      'Detox interior complet cu abur pentru guri si imbinari, extractie pentru textile, curatare si hidratare piele, plus tratament cu ozon pentru neutralizarea mirosurilor. Ca in prima zi de proprietate.',
    priceFrom: 165,
    duration: '2 ore',
    image:
      'https://images.unsplash.com/photo-1530047520930-dce1309622e4?auto=format&fit=crop&w=1600&q=80',
    highlights: [
      'Abur + aer comprimat in zone greu accesibile',
      'Extractie sampon textile',
      'Curatare si hidratare piele pH-balanced',
      'Neutralizare mirosuri cu ozon',
    ],
  },
  {
    id: 'svc-03',
    slug: 'ceramic-coating',
    name: 'Acoperire Ceramica',
    badge: 'Protectie',
    shortDescription:
      'Sistem ceramic 3 ani pe vopsea si jante, cu inspectie de high-spot si suport la maturare.',
    description:
      'Pregatire vopsea, degresare si acoperire ceramica profesionala 3 ani pe vopsea, fete de jante si plastice exterioare. Creste luciul, rezistenta chimica si usureaza fiecare spalare.',
    priceFrom: 650,
    duration: '1.5 zile',
    image:
      'https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?auto=format&fit=crop&w=1600&q=80',
    highlights: [
      'Polish in doua treceri pentru claritate',
      'Ceramica 3 ani pe vopsea si plastice',
      'Coating pe fete jante + sigilare sticla',
      'Monitorizare maturare + ghid de spalare',
    ],
  },
  {
    id: 'svc-04',
    slug: 'full-rejuvenation',
    name: 'Rejuvenare Totala',
    shortDescription:
      'Interventie completa interior + exterior cu corectie tintita si protectie.',
    description:
      'Pachetul de varf combina reset interior, decontaminare exterior, polish tintit si sealant ceramic. Perfect pentru pre-vanzare sau un reset veritabil al masinii tale.',
    priceFrom: 320,
    duration: '1 zi',
    image:
      'https://images.unsplash.com/photo-1502877828070-33c90b3adcc8?auto=format&fit=crop&w=1600&q=80',
    highlights: [
      'Reset interior + ozon',
      'Corectie pe panouri prioritare',
      'Sealant sau ceramic-lite',
      'Curatare usoara compartiment motor',
    ],
  },
];

export const heroSlides: Slide[] = [
  {
    id: 'slide-01',
    title: 'Detailing care se simte personalizat, nu standard.',
    subtitle:
      'Exterior, interior si protectie gandite pentru masina ta si felul in care o conduci.',
    image:
      'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=1800&q=80&sat=-10',
  },
  {
    id: 'slide-02',
    title: 'Protectie ceramica cu follow-up real.',
    subtitle:
      'Pregatim, aplicam si iti aratam mentenanta astfel incat finisajul sa ramana slick si hidrofob ani de zile.',
    image:
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1800&q=80&sat=-10',
  },
  {
    id: 'slide-03',
    title: 'Interioare care respira din nou.',
    subtitle:
      'Abur, ozon si extractie pentru textile care sterg aerul inchis, ca fiecare drum sa para nou.',
    image:
      'https://images.unsplash.com/photo-1530047520930-dce1309622e4?auto=format&fit=crop&w=1800&q=80',
  },
];
