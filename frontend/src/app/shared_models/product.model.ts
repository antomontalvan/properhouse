// ¿QUÉ VA ACÁ?
// Las interfaces y los datos de productos.
// Es una traducción directa del store-data.ts de Figma.

export type Category = 'TODOS' | 'GROOMING' | 'ROPA' | 'GIFT CARDS';

export interface Product {
  id: string;
  name: string;
  category: Exclude<Category, 'TODOS'>;
  price: number;
  image: string;
  images: string[];
  description: string;
  ingredients?: string;
  howToUse?: string;
  isNew?: boolean;
  isSale?: boolean;
  hasSize?: boolean;
  isGiftCard?: boolean;
}

export const PRODUCTS: Product[] = [
  {
    id: 'pomada-texturizante',
    name: 'Pomada Texturizante',
    category: 'GROOMING',
    price: 3200,
    image: 'https://images.unsplash.com/photo-1543463573-35e4afd0ab43?w=600',
    images: [
      'https://images.unsplash.com/photo-1543463573-35e4afd0ab43?w=600',
      'https://images.unsplash.com/photo-1611040105312-44ae37975383?w=600',
    ],
    description: 'Fijación media con acabado natural. Ideal para looks texturizados y definidos sin rigidez.',
    ingredients: 'Cera de abeja, aceite de argán, manteca de karité.',
    howToUse: 'Aplicar una pequeña cantidad sobre cabello húmedo o seco.',
    isNew: true,
  },
  {
    id: 'polvo-texturizador',
    name: 'Polvo Texturizador',
    category: 'GROOMING',
    price: 2800,
    image: 'https://images.unsplash.com/photo-1611040105312-44ae37975383?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600',
    images: [
      'https://images.unsplash.com/photo-1611040105312-44ae37975383?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600',
      'https://images.unsplash.com/photo-1543463573-35e4afd0ab43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600',
    ],
    description: 'Volumen instantáneo y textura mate sin residuo. Perfecto para estilos casuales con movimiento natural.',
    ingredients: 'Sílice, caolín, extracto de bambú.',
    howToUse: 'Aplicar directamente en el cabello seco. Masajear con los dedos para activar el volumen.',
  },
  {
    id: 'cera-modeladora',
    name: 'Cera Modeladora',
    category: 'GROOMING',
    price: 2900,
    image: 'https://images.unsplash.com/photo-1647140655311-b36dc374a95a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600',
    images: [
      'https://images.unsplash.com/photo-1647140655311-b36dc374a95a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600',
      'https://images.unsplash.com/photo-1611040105312-44ae37975383?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600',
    ],
    description: 'Control total con acabado brillante. Reformulación de nuestra cera clásica con mayor maleabilidad y mayor durabilidad.',
    ingredients: 'Cera de carnauba, lanolina, aceite de jojoba.',
    howToUse: 'Calentar entre las palmas antes de aplicar. Distribuir de manera uniforme por el cabello.',
  },
  {
    id: 'aftershave-locion',
    name: 'After Shave Loción',
    category: 'GROOMING',
    price: 3500,
    image: 'https://images.unsplash.com/photo-1620018646973-e3e257a1002c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600',
    images: [
      'https://images.unsplash.com/photo-1620018646973-e3e257a1002c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600',
      'https://images.unsplash.com/photo-1673350963997-fc802e774580?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600',
    ],
    description: 'Loción refrescante post-afeitado con alcohol de alta pureza. Sella los poros, previene irritaciones y deja un aroma amaderado duradero.',
    ingredients: 'Alcohol, agua, mentol, extracto de aloe vera, fragancia.',
    howToUse: 'Aplicar con suaves palmadas sobre la piel tras el afeitado.',
  },
  {
    id: 'aftershave-balsamo',
    name: 'After Shave Bálsamo',
    category: 'GROOMING',
    price: 3800,
    image: 'https://images.unsplash.com/photo-1587909209111-5097ee578ec3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600',
    images: [
      'https://images.unsplash.com/photo-1587909209111-5097ee578ec3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600',
      'https://images.unsplash.com/photo-1620018646973-e3e257a1002c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600',
    ],
    description: 'Bálsamo hidratante sin alcohol. Calma la irritación, hidrata profundamente y protege la piel sensible post-afeitado.',
    ingredients: 'Agua, glicerina, manteca de karité, alantoína, extracto de manzanilla.',
    howToUse: 'Aplicar generosamente sobre la zona afeitada y masajear hasta absorción.',
    isNew: true,
  },
  {
    id: 'aceite-barba',
    name: 'Aceite para Barba',
    category: 'GROOMING',
    price: 4200,
    image: 'https://images.unsplash.com/photo-1673350963924-cb4267d9b6eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600',
    images: [
      'https://images.unsplash.com/photo-1673350963924-cb4267d9b6eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600',
      'https://images.unsplash.com/photo-1673350963997-fc802e774580?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600',
    ],
    description: 'Mezcla premium de aceites naturales para suavizar, nutrir y dar brillo a la barba. Aroma a madera de cedro y bergamota.',
    ingredients: 'Aceite de argán, aceite de jojoba, aceite de almendras dulces, vitamina E, fragancia natural.',
    howToUse: 'Aplicar 4-6 gotas sobre la barba limpia y masajear hasta la piel. Peinar para distribuir.',
  },
  {
    id: 'peine-bolsillo',
    name: 'Peine de Bolsillo',
    category: 'GROOMING',
    price: 1200,
    image: 'https://images.unsplash.com/photo-1590159763121-7c9fd312190d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600',
    images: [
      'https://images.unsplash.com/photo-1590159763121-7c9fd312190d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600',
    ],
    description: 'Peine profesional de acetato para bolsillo. Dientes anchos y finos en un solo cuerpo. Resistente y de larga duración.',
    ingredients: 'Acetato premium, libre de estática.',
    howToUse: 'Usar sobre cabello húmedo o seco para dar forma y definir el estilo.',
  },
  {
    id: 'remera-logo',
    name: 'Remera Logo',
    category: 'ROPA',
    price: 5500,
    image: 'https://images.unsplash.com/photo-1611066773627-40bacce458dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600',
    images: [
      'https://images.unsplash.com/photo-1611066773627-40bacce458dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600',
      'https://images.unsplash.com/photo-1763750581767-b367bcd6c117?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600',
    ],
    description: 'Remera de algodón 100% peinado. Logo bordado en pecho. Corte recto, unisex. Colección permanente.',
    ingredients: '100% algodón peinado 180g/m².',
    howToUse: 'Lavar a 30°C. No usar secadora.',
    hasSize: true,
  },
  {
    id: 'buzo-capucha',
    name: 'Buzo Con Capucha',
    category: 'ROPA',
    price: 9800,
    image: 'https://images.unsplash.com/photo-1760540337052-aa66039ef041?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600',
    images: [
      'https://images.unsplash.com/photo-1760540337052-aa66039ef041?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600',
      'https://images.unsplash.com/photo-1611066773627-40bacce458dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600',
    ],
    description: 'Hoodie premium peso invernal. Interior afelpado. Logo bordado en pecho izquierdo. Capucha doble capa.',
    ingredients: '80% algodón / 20% poliéster, 320g/m².',
    howToUse: 'Lavar a 30°C al revés. No usar secadora.',
    hasSize: true,
  },
  {
    id: 'gorrito-lana',
    name: 'Gorrito Lana',
    category: 'ROPA',
    price: 3200,
    image: 'https://images.unsplash.com/photo-1763750581767-b367bcd6c117?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600',
    images: [
      'https://images.unsplash.com/photo-1763750581767-b367bcd6c117?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600',
    ],
    description: 'Gorro beanie de acrílico premium. Dobladillo ribeteado con bordado sutil del logo. Talle único ajustable.',
    ingredients: '100% acrílico premium.',
    howToUse: 'Lavar a mano en agua fría.',
  },
  {
    id: 'gorra-snapback',
    name: 'Gorra Snapback',
    category: 'ROPA',
    price: 4500,
    image: 'https://images.unsplash.com/photo-1762292914574-c0b645265e9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600',
    images: [
      'https://images.unsplash.com/photo-1762292914574-c0b645265e9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600',
    ],
    description: 'Gorra 5 paneles con visera plana y cierre snapback. Bordado frontal del logo. Diseño estructurado premium.',
    ingredients: '100% algodón canvas.',
    howToUse: 'Limpiar con paño húmedo. No lavar a máquina.',
  },
  {
    id: 'gift-card-5000',
    name: 'Gift Card $5.000',
    category: 'GIFT CARDS',
    price: 5000,
    image: '',
    images: [],
    description: 'Tarjeta regalo de $5.000 para usar en servicios o productos de ProperHouse. Válida por 12 meses desde la fecha de emisión.',
    isGiftCard: true,
  },
  {
    id: 'gift-card-10000',
    name: 'Gift Card $10.000',
    category: 'GIFT CARDS',
    price: 10000,
    image: '',
    images: [],
    description: 'Tarjeta regalo de $10.000 para usar en servicios o productos de ProperHouse. Válida por 12 meses desde la fecha de emisión.',
    isGiftCard: true,
  },
  {
    id: 'gift-card-25000',
    name: 'Gift Card $25.000',
    category: 'GIFT CARDS',
    price: 25000,
    image: '',
    images: [],
    description: 'Tarjeta regalo de $25.000 para usar en servicios o productos de ProperHouse. Válida por 12 meses desde la fecha de emisión.',
    isGiftCard: true,
    isNew: true,
  },
];

export function formatPrice(price: number) {
  return `$${price.toLocaleString('es-AR')}`;
}