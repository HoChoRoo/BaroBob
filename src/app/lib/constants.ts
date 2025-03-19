import { Category, MenuItem } from "./types";

export const CATEGORIES: Category[] = [
  { id: 1, name: "정식류" },
  { id: 2, name: "돈까스류" },
  { id: 3, name: "덮밥류" },
  { id: 4, name: "우동류" },
  { id: 5, name: "모밀류" },
  { id: 6, name: "사이드" },
];

export const MENU_ITEMS: MenuItem[] = [
  // 정식류
  {
    id: 1,
    name: "김치우동정식",
    price: 10000,
    imageUrl: "/images/menu/kimchi-udon-set.png",
    category: "정식류",
    description: "김치우동 정식",
  },
  {
    id: 2,
    name: "김치치즈가츠나베",
    price: 12500,
    imageUrl: "/images/menu/kimchi-cheese-katsu-nabe.png",
    category: "정식류",
    description: "김치와 치즈의 조합",
  },
  {
    id: 3,
    name: "치즈돈까스정식",
    price: 13000,
    imageUrl: "/images/menu/cheese-donkatsu-set.png",
    category: "정식류",
    description: "치즈를 곁들인 돈까스 정식",
  },
  {
    id: 4,
    name: "김치까스나베정식",
    price: 12500,
    imageUrl: "/images/menu/kimchi-katsu-nabe-set.png",
    category: "정식류",
    description: "김치와 까스를 함께 즐기는 나베 정식",
  },
  {
    id: 5,
    name: "돈까스정식",
    price: 8900,
    imageUrl: "/images/menu/donkatsu-set.png",
    category: "정식류",
    description: "기본 돈까스 정식",
  },
  {
    id: 6,
    name: "가츠나베정식",
    price: 10000,
    imageUrl: "/images/menu/katsu-nabe-set.png",
    category: "정식류",
    description: "가츠나베 정식",
  },
  {
    id: 7,
    name: "돈까스알밥정식",
    price: 10000,
    imageUrl: "/images/menu/donkatsu-albob-set.png",
    category: "정식류",
    description: "특별한 돈까스 알밥 정식",
  },
  {
    id: 8,
    name: "해물오뎅우동정식",
    price: 13000,
    imageUrl: "/images/menu/seafood-oden-udon-set.png",
    category: "정식류",
    description: "해물과 오뎅이 풍부한 우동 정식",
  },

  // 돈까스류
  {
    id: 9,
    name: "치즈돈까스정식",
    price: 13000,
    imageUrl: "/images/menu/cheese-donkatsu-set.png",
    category: "돈까스류",
    description: "치즈가 들어간 돈까스 세트",
  },
  {
    id: 10,
    name: "안심까스정식",
    price: 11500,
    imageUrl: "/images/menu/tenderloin-katsu-set.png",
    category: "돈까스류",
    description: "부드러운 안심으로 만든 까스 정식",
  },
  {
    id: 11,
    name: "생선까스정식",
    price: 11500,
    imageUrl: "/images/menu/fish-katsu-set.png",
    category: "돈까스류",
    description: "생선으로 만든 까스 정식",
  },
  {
    id: 12,
    name: "고구마치즈돈까스정식",
    price: 13000,
    imageUrl: "/images/menu/sweet-potato-cheese-donkatsu-set.png",
    category: "돈까스류",
    description: "고구마와 치즈가 들어간 돈까스 정식",
  },
  {
    id: 13,
    name: "돈까스정식",
    price: 8900,
    imageUrl: "/images/menu/donkatsu-set.png",
    category: "돈까스류",
    description: "클래식 돈까스 정식",
  },
  {
    id: 14,
    name: "치킨까스정식",
    price: 11500,
    imageUrl: "/images/menu/chicken-katsu-set.png",
    category: "돈까스류",
    description: "닭고기로 만든 까스 정식",
  },

  // 덮밥류

  {
    id: 16,
    name: "가츠동",
    price: 9000,
    imageUrl: "/images/menu/katsudon.png",
    category: "덮밥류",
    description: "가츠가 올라간 덮밥",
  },
  {
    id: 17,
    name: "돌솥알밥",
    price: 8400,
    imageUrl: "/images/menu/mixed-rice-bowl.png",
    category: "덮밥류",
    description: "여러 재료가 섞인 덮밥",
  },

  // 우동류
  {
    id: 18,
    name: "해물오뎅우동",
    price: 9400,
    imageUrl: "/images/menu/seafood-oden-udon.png",
    category: "우동류",
    description: "해물과 오뎅이 들어간 우동",
  },
  {
    id: 19,
    name: "새우튀김우동",
    price: 8400,
    imageUrl: "/images/menu/shrimp-tempura-udon.png",
    category: "우동류",
    description: "바삭한 새우튀김이 올라간 우동",
  },
  {
    id: 20,
    name: "어묵우동",
    price: 8400,
    imageUrl: "/images/menu/fish-cake-udon.png",
    category: "우동류",
    description: "어묵이 풍성한 우동",
  },
  {
    id: 21,
    name: "와우동",
    price: 7400,
    imageUrl: "/images/menu/wa-udon.png",
    category: "우동류",
    description: "기본 우동",
  },
  {
    id: 22,
    name: "김치해물우동",
    price: 9400,
    imageUrl: "/images/menu/kimchi-seafood-udon.png",
    category: "우동류",
    description: "김치와 해물이 들어간 우동",
  },
  {
    id: 23,
    name: "김치우동",
    price: 8900,
    imageUrl: "/images/menu/kimchi-udon.png",
    category: "우동류",
    description: "김치가 들어간 우동",
  },

  // 모밀류
  {
    id: 24,
    name: "냉모밀",
    price: 9000,
    imageUrl: "/images/menu/cold-buckwheat-noodles.png",
    category: "모밀류",
    description: "시원한 냉모밀",
  },
  {
    id: 25,
    name: "냉모밀돈까스",
    price: 12500,
    imageUrl: "/images/menu/cold-buckwheat-noodles-pork-cutlet.png",
    category: "모밀류",
    description: "냉모밀과 돈까스",
  },
  {
    id: 26,
    name: "냉모밀알밥",
    price: 12500,
    imageUrl: "/images/menu/cold-buckwheat-noodles-rice-fish-roe.png",
    category: "모밀류",
    description: "냉모밀과 양밥",
  },
  {
    id: 27,
    name: "자루소바",
    price: 8400,
    imageUrl: "/images/menu/zaru-soba.png",
    category: "모밀류",
    description: "자루소바",
  },
  {
    id: 28,
    name: "돈까스자루소바",
    price: 12000,
    imageUrl: "/images/menu/pork-cutlet-zaru-soba.png",
    category: "모밀류",
    description: "돈까스와 자루소바",
  },
  {
    id: 29,
    name: "알밥자루소바",
    price: 12000,
    imageUrl: "/images/menu/rice-with-fish-roe-zaru-soba.png",
    category: "모밀류",
    description: "알밥과 자루소바",
  },

  {
    id: 31,
    name: "새우튀김",
    price: 18000,
    imageUrl: "/images/menu/fried-shrimp.png",
    category: "사이드",
    description: "바삭한 새우튀김",
  },
  {
    id: 32,
    name: "타코야끼",
    price: 6500,
    imageUrl: "/images/menu/takoyaki.png",
    category: "사이드",
    description: "타코야끼 10개",
  },
  {
    id: 33,
    name: "고로케세트",
    price: 4500,
    imageUrl: "/images/menu/croquette.png",
    category: "사이드",
    description: "고로케 3개",
  },
  {
    id: 34,
    name: "공기밥",
    price: 0,
    imageUrl: "/images/menu/croquette.png",
    category: "사이드",
    description: "공기밥은 무료입니다 양심없이 시킨다면 서비스 제외될수도..",
  },
  {
    id: 35,
    name: "칠리철판돈까스",
    price: 12500,
    imageUrl: "/images/menu/croquette.png",
    category: "돈까스류",
    description: "칠리철판돈까스",
  },
  {
    id: 36,
    name: "음료",
    price: 2000,
    imageUrl: "/images/menu/croquette.png",
    category: "사이드",
    description: "음료는 직접 가서 선택해주세요.",
  },
  {
    id: 17,
    name: "카레가츠나베정식",
    price: 11500,
    imageUrl: "/images/menu/chicken-katsu-set.png",
    category: "정식류",
    description: "카레가츠나베정식",
  },
];
