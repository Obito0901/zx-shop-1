export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  badge?: 'New' | 'Limited' | 'Hot';
  category: string;
  collection: string;
}

export const featuredProducts: Product[] = [
  {
    id: 'naruto-hokage-tee',
    name: 'OBITO MASS  Tee',
    description: 'Premium cotton tee featuring exclusive Naruto-inspired design with glow-in-the-dark elements',
    price: 399,
    originalPrice: 999,
    image: 'images/my-hoodie.jpg.png?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',

    rating: 4.8,
    badge: 'New',
    category: 'T-Shirts',
    collection: 'Featured'
  },
  {
    id: 'demon-slayer-hoodie',
    name: 'Demon Slayer Corps Hoodie',
    description: 'Ultra-soft hoodie with embroidered Demon Slayer corps symbol and premium finishing',
    price: 399,
    image: 'images/2.png?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    rating: 4.9,
    badge: 'Hot',
    category: 'JJK',
    collection: 'Featured'
  },
  {
    id: 'cyberpunk-akira-jacket',
    name: 'Neo Tokyo Rider Jacket',
    description: 'Limited edition bomber jacket inspired by Akira with neon reflective strips',
    price: 399,
    originalPrice: 999,
    image: 'images/3.png?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    rating: 5.0,
    badge: 'Limited',
    category: 'JJK',
    collection: 'Featured'
  },
  {
    id: 'one-piece-luffy-tank',
    name: 'Pirate King Tank Top',
    description: 'Breathable mesh tank with One Piece inspired graphics and UV-reactive print',
    price: 399,
    image: 'images/4.png?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    rating: 4.7,
    category: 'JJK',
    collection: 'Featured'
  },
  {
    id: 'attack-titan-sweater',
    name: 'Scout Regiment Sweater',
    description: 'Cozy knit sweater featuring Attack on Titan Survey Corps emblem with metallic threads',
    price: 399,
    image: 'images/5.png?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    rating: 4.6,
    badge: 'New',
    category: 'JJK',
    collection: 'Featured'
  }
];

export const newDrops: Product[] = [
  {
    id: 'jjk-gojo-tee',
    name: 'Limitless Gojo Tee',
    description: 'Jujutsu Kaisen inspired design with holographic Six Eyes print that shifts colors',
    price: 399,
    image: 'images/6.png?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    rating: 4.9,
    badge: 'New',
    category: 'JJK',
    collection: 'New Drops'
  },
  {
    id: 'spirited-away-hoodie',
    name: 'Spirit World Hoodie',
    description: 'Spirited Away inspired oversized hoodie with embroidered No-Face and thermal color-change',
    price: 399,
    image: 'images/7.png?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    rating: 4.8,
    badge: 'New',
    category: 'JJK',
    collection: 'New Drops'
  },
  {
    id: 'dragon-ball-vegeta-shirt',
    name: 'Saiyan Prince Battle Shirt',
    description: 'Dragon Ball Z Vegeta training shirt with moisture-wicking fabric and power level indicator',
    price: 399,
    image: 'images/8.png?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    rating: 4.7,
    badge: 'New',
    category: 'JJK',
    collection: 'New Drops'
  },
  {
    id: 'mha-all-might-hoodie',
    name: 'Plus Ultra Hero Hoodie',
    description: 'My Hero Academia All Might inspired hoodie with glow-in-the-dark Plus Ultra text',
    price: 399,
    image: 'images/9.png?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    rating: 4.9,
    badge: 'New',
    category: 'JJK',
    collection: 'New Drops'
  }
];

export const limitedEdition: Product[] = [
  {
    id: 'evangelion-unit01-jacket',
    name: 'EVA Unit-01 Combat Jacket',
    description: 'Ultra-limited Evangelion Unit-01 inspired tactical jacket with LED accents (50 pieces only)',
    price: 399,
    originalPrice: 999,
    image: 'images/10.png?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    rating: 5.0,
    badge: 'Limited',
    category: 'JJK',
    collection: 'Limited Edition'
  },
  {
    id: 'fullmetal-transmutation-hoodie',
    name: 'Alchemist Transmutation Hoodie',
    description: 'Fullmetal Alchemist premium hoodie with real transmutation circle that glows under blacklight',
    price: 399,
    originalPrice: 999,
    image: 'images/11.png?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    rating: 4.9,
    badge: 'Limited',
    category: 'JJK',
    collection: 'Limited Edition'
  },
  {
    id: 'akatsuki-cloud-bomber',
    name: 'Akatsuki Cloud Bomber',
    description: 'Naruto Akatsuki inspired bomber jacket with embroidered red clouds and ninja mesh lining',
    price: 399,
    image: 'images/12.png?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    rating: 4.8,
    badge: 'Limited',
    category: 'JJK',
    collection: 'Limited Edition'
  },
  {
    id: 'obito a',
    name: 'Akatsuki t Bomber',
    description: 'Naruto Akatsuki inspired bomber jacket with embroidered red clouds and ninja mesh lining',
    price: 399,
    image: 'images/13.png?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    rating: 4.8,
    badge: 'Limited',
    category: 'JJK',
    collection: 'Limited Edition'
  },
  {
    id: 'akatsuki-ewreref-bomber',
    name: 'Akatsuki efesfef Bomber',
    description: 'Naruto Akatsuki inspired bomber jacket with embroidered red clouds and ninja mesh lining',
    price: 399,
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    rating: 4.8,
    badge: 'Limited',
    category: 'JJK',
    collection: 'Limited Edition'
  },
  {
    id: 'n1 ',
    name: 'Akatsuki ttjjj Bomber',
    description: 'Naruto Akatsuki inspired bomber jacket with embroidered red clouds and ninja mesh lining',
    price: 399,
    image: 'images/NARUTO/N1.png?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    rating: 4.8,
    badge: 'Limited',
    category: 'NARUTO',
    collection: 'Limited Edition'
  },
  {
    id: 'n2 ',
    name: 'Akatsuki ttjjj Bomber',
    description: 'Naruto Akatsuki inspired bomber jacket with embroidered red clouds and ninja mesh lining',
    price: 399,
    image: 'images/NARUTO/N2.png?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    rating: 4.8,
    badge: 'Limited',
    category: 'NARUTO',
    collection: 'Limited Edition'
  },
  {
    id: 'n79 ',
    name: 'Akatsuki ttjjj Bomber',
    description: 'Naruto Akatsuki inspired bomber jacket with embroidered red clouds and ninja mesh lining',
    price: 399,
    image: 'images/NARUTO/N3.png?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    rating: 4.8,
    badge: 'Limited',
    category: 'NARUTO',
    collection: 'Limited Edition'
  },
  {
    id: 'n3 ',
    name: 'Akatsuki ttjjj Bomber',
    description: 'Naruto Akatsuki inspired bomber jacket with embroidered red clouds and ninja mesh lining',
    price: 399,
    image: 'images/NARUTO/N4.png?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    rating: 4.8,
    badge: 'Limited',
    category: 'NARUTO',
    collection: 'Limited Edition'
  },
  {
    id: 'n4',
    name: 'Akatsuki ttjjj Bomber',
    description: 'Naruto Akatsuki inspired bomber jacket with embroidered red clouds and ninja mesh lining',
    price: 399,
    image: 'images/NARUTO/N11.png?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    rating: 4.8,
    badge: 'Limited',
    category: 'NARUTO',
    collection: 'Limited Edition'
  },{
    id: 'obito aabt 5',
    name: 'Akatsuki ttjjj Bomber',
    description: 'Naruto Akatsuki inspired bomber jacket with embroidered red clouds and ninja mesh lining',
    price: 399,
    image: 'images/NARUTO/N5.png?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    rating: 4.8,
    badge: 'Limited',
    category: 'NARUTO',
    collection: 'Limited Edition'
  },
  {
    id: 'obito aabt6 ',
    name: 'Akatsuki ttjjj Bomber',
    description: 'Naruto Akatsuki inspired bomber jacket with embroidered red clouds and ninja mesh lining',
    price: 399,
    image: 'images/NARUTO/N6.png?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    rating: 4.8,
    badge: 'Limited',
    category: 'NARUTO',
    collection: 'Limited Edition'
  },
  {
    id: 'obito aabt 7',
    name: 'Akatsuki ttjjj Bomber',
    description: 'Naruto Akatsuki inspired bomber jacket with embroidered red clouds and ninja mesh lining',
    price: 399,
    image: 'images/NARUTO/N7.png?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    rating: 4.8,
    badge: 'Limited',
    category: 'NARUTO',
    collection: 'Limited Edition'
  },
 {
    id: 'obito aabt 8',
    name: 'Akatsuki ttjjj Bomber',
    description: 'Naruto Akatsuki inspired bomber jacket with embroidered red clouds and ninja mesh lining',
    price: 399,
    image: 'images/NARUTO/N8.png?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    rating: 4.8,
    badge: 'Limited',
    category: 'NARUTO',
    collection: 'Limited Edition'
  },
 {
    id: 'obito aabt 9',
    name: 'Akatsuki ttjjj Bomber',
    description: 'Naruto Akatsuki inspired bomber jacket with embroidered red clouds and ninja mesh lining',
    price: 399,
    image: 'images/NARUTO/N9.png?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    rating: 4.8,
    badge: 'Limited',
    category: 'NARUTO',
    collection: 'Limited Edition'
  },{
    id: 'obito aabt 10',
    name: 'Akatsuki ttjjj Bomber',
    description: 'Naruto Akatsuki inspired bomber jacket with embroidered red clouds and ninja mesh lining',
    price: 399,
    image: 'images/NARUTO/N10.png?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    rating: 4.8,
    badge: 'Limited',
    category: 'NARUTO',
    collection: 'Limited Edition'
  },
  {
    id: 'obito aabt 11',
    name: 'Akatsuki ttjjj Bomber',
    description: 'Naruto Akatsuki inspired bomber jacket with embroidered red clouds and ninja mesh lining',
    price: 399,
    image: 'images/NARUTO/N12.png?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    rating: 4.8,
    badge: 'Limited',
    category: 'NARUTO',
    collection: 'Limited Edition'
  },
  {
    id: 'obito aabt 12',
    name: 'Akatsuki ttjjj Bomber',
    description: 'Naruto Akatsuki inspired bomber jacket with embroidered red clouds and ninja mesh lining',
    price: 399,
    image: 'images/NARUTO/N13.png?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    rating: 4.8,
    badge: 'Limited',
    category: 'NARUTO',
    collection: 'Limited Edition'
  },
  {
    id: 'obito aabt 13',
    name: 'Akatsuki ttjjj Bomber',
    description: 'Naruto Akatsuki inspired bomber jacket with embroidered red clouds and ninja mesh lining',
    price: 399,
    image: 'images/NARUTO/N14.png?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    rating: 4.8,
    badge: 'Limited',
    category: 'NARUTO',
    collection: 'Limited Edition'
  },
  {
    id: 'obito aabt 14',
    name: 'Akatsuki ttjjj Bomber',
    description: 'Naruto Akatsuki inspired bomber jacket with embroidered red clouds and ninja mesh lining',
    price: 399,
    image: 'images/NARUTO/N15.png?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    rating: 4.8,
    badge: 'Limited',
    category: 'NARUTO',
    collection: 'Limited Edition'
  },
  {
    id: 'obito aabt 15',
    name: 'Akatsuki ttjjj Bomber',
    description: 'Naruto Akatsuki inspired bomber jacket with embroidered red clouds and ninja mesh lining',
    price: 399,
    image: 'images/NARUTO/N16.png?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    rating: 4.8,
    badge: 'Limited',
    category: 'NARUTO',
    collection: 'Limited Edition'
  },
  {
    id: 'obito aabt 16',
    name: 'Akatsuki ttjjj Bomber',
    description: 'Naruto Akatsuki inspired bomber jacket with embroidered red clouds and ninja mesh lining',
    price: 399,
    image: 'images/NARUTO/N17.png?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    rating: 4.8,
    badge: 'Limited',
    category: 'NARUTO',
    collection: 'Limited Edition'
  },
  {
    id: 'obito aabt 17',
    name: 'Akatsuki ttjjj Bomber',
    description: 'Naruto Akatsuki inspired bomber jacket with embroidered red clouds and ninja mesh lining',
    price: 399,
    image: 'images/NARUTO/N18.png?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    rating: 4.8,
    badge: 'Limited',
    category: 'NARUTO',
    collection: 'Limited Edition'
  },
  {
    id: 'obito aabt 18',
    name: 'Akatsuki ttjjj Bomber',
    description: 'Naruto Akatsuki inspired bomber jacket with embroidered red clouds and ninja mesh lining',
    price: 399,
    image: 'images/NARUTO/N19.png?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    rating: 4.8,
    badge: 'Limited',
    category: 'NARUTO',
    collection: 'Limited Edition'
  },
  {
    id: 'obito aabt 19',
    name: 'Akatsuki ttjjj Bomber',
    description: 'Naruto Akatsuki inspired bomber jacket with embroidered red clouds and ninja mesh lining',
    price: 399,
    image: 'images/NARUTO/N20.png?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    rating: 4.8,
    badge: 'Limited',
    category: 'NARUTO',
    collection: 'Limited Edition'
  },
  {
    id: 'obito aabt 20',
    name: 'Akatsuki ttjjj Bomber',
    description: 'Naruto Akatsuki inspired bomber jacket with embroidered red clouds and ninja mesh lining',
    price: 399,
    image: 'images/NARUTO/N22.png?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    rating: 4.8,
    badge: 'Limited',
    category: 'NARUTO',
    collection: 'Limited Edition'
  },

];


export const allProducts = [...featuredProducts, ...newDrops, ...limitedEdition];