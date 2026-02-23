import type { Plant } from "@/lib/types"

export const mockPlants: Plant[] = [
  {
    id: "plant-1",
    name: "Cherry Tomato",
    image: "/images/plants/tomato.jpg",
    description:
      "Sweet and prolific cherry tomatoes perfect for containers and garden beds. These compact plants produce clusters of bright red, bite-sized fruits throughout the growing season.",
    category: "Vegetables",
    growthStages: [
      {
        stage: "Seed",
        description: "Plant seeds indoors 6-8 weeks before last frost",
        duration: "1-2 weeks",
      },
      {
        stage: "Seedling",
        description: "First true leaves appear, ready for transplant",
        duration: "3-4 weeks",
      },
      {
        stage: "Vegetative",
        description: "Rapid stem and leaf growth, begin staking",
        duration: "4-6 weeks",
      },
      {
        stage: "Flowering",
        description: "Yellow flowers appear, pollination begins",
        duration: "2-3 weeks",
      },
      {
        stage: "Fruiting",
        description: "Green fruits form and ripen to red",
        duration: "4-6 weeks",
      },
    ],
    wateringFrequency: "Every 1-2 days",
    sunlight: "Full Sun (6-8 hours)",
    difficulty: "Easy",
  },
  {
    id: "plant-2",
    name: "Sweet Basil",
    image: "/images/plants/basil.jpg",
    description:
      "A fragrant culinary herb essential in Italian and Thai cuisines. Basil thrives in warm conditions and pairs perfectly with tomatoes both in the garden and on the plate.",
    category: "Herbs",
    growthStages: [
      {
        stage: "Seed",
        description: "Sow seeds directly or start indoors",
        duration: "5-10 days",
      },
      {
        stage: "Seedling",
        description: "Small leaves emerge, thin to strongest plants",
        duration: "2-3 weeks",
      },
      {
        stage: "Vegetative",
        description: "Bushy growth, begin harvesting leaves",
        duration: "3-4 weeks",
      },
      {
        stage: "Mature",
        description: "Full harvest, pinch flowers to prolong leaf production",
        duration: "Ongoing",
      },
    ],
    wateringFrequency: "Every 1-2 days",
    sunlight: "Full Sun (6-8 hours)",
    difficulty: "Easy",
  },
  {
    id: "plant-3",
    name: "Mammoth Sunflower",
    image: "/images/plants/sunflower.jpg",
    description:
      "Towering sunflowers that can reach 10-12 feet tall with massive golden heads. A stunning garden centerpiece that also attracts pollinators and produces edible seeds.",
    category: "Flowers",
    growthStages: [
      {
        stage: "Seed",
        description: "Direct sow after last frost in warm soil",
        duration: "7-10 days",
      },
      {
        stage: "Seedling",
        description: "First pair of true leaves develop",
        duration: "2-3 weeks",
      },
      {
        stage: "Growth",
        description: "Rapid vertical growth, stake if needed",
        duration: "6-8 weeks",
      },
      {
        stage: "Blooming",
        description: "Large flower head opens, faces the sun",
        duration: "2-3 weeks",
      },
      {
        stage: "Seed Set",
        description: "Seeds develop in the flower head, ready to harvest",
        duration: "3-4 weeks",
      },
    ],
    wateringFrequency: "Every 2-3 days",
    sunlight: "Full Sun (6-8 hours)",
    difficulty: "Easy",
  },
  {
    id: "plant-4",
    name: "English Lavender",
    image: "/images/plants/lavender.jpg",
    description:
      "A beloved aromatic perennial with silvery-green foliage and spikes of fragrant purple flowers. Excellent for borders, sachets, and essential oils.",
    category: "Flowers",
    growthStages: [
      {
        stage: "Seed/Cutting",
        description: "Start from seed or cuttings in spring",
        duration: "2-4 weeks",
      },
      {
        stage: "Establishment",
        description: "Root system develops, minimal top growth",
        duration: "6-8 weeks",
      },
      {
        stage: "Vegetative",
        description: "Bushy grey-green foliage develops",
        duration: "First season",
      },
      {
        stage: "Flowering",
        description: "Purple flower spikes appear in early summer",
        duration: "4-6 weeks",
      },
    ],
    wateringFrequency: "Every 3-5 days",
    sunlight: "Full Sun (6-8 hours)",
    difficulty: "Medium",
  },
  {
    id: "plant-5",
    name: "Peppermint",
    image: "/images/plants/mint.jpg",
    description:
      "A vigorous and aromatic herb perfect for teas, cocktails, and culinary use. Mint is incredibly easy to grow but best kept in containers to control its spreading nature.",
    category: "Herbs",
    growthStages: [
      {
        stage: "Cutting/Root",
        description: "Plant cuttings or root divisions in moist soil",
        duration: "1-2 weeks",
      },
      {
        stage: "Establishment",
        description: "Roots develop, new shoots appear",
        duration: "2-3 weeks",
      },
      {
        stage: "Spreading",
        description: "Vigorous runner growth, contain as needed",
        duration: "Ongoing",
      },
      {
        stage: "Harvest",
        description: "Pick leaves regularly for best flavor",
        duration: "Ongoing",
      },
    ],
    wateringFrequency: "Every 1-2 days",
    sunlight: "Partial Sun (4-6 hours)",
    difficulty: "Easy",
  },
  {
    id: "plant-6",
    name: "Bell Pepper",
    image: "/images/plants/pepper.jpg",
    description:
      "Colorful and crunchy bell peppers that mature from green to vibrant red, yellow, or orange. A warm-season crop that rewards patient gardeners with sweet, crisp fruits.",
    category: "Vegetables",
    growthStages: [
      {
        stage: "Seed",
        description: "Start seeds indoors 8-10 weeks before last frost",
        duration: "10-14 days",
      },
      {
        stage: "Seedling",
        description: "True leaves develop, harden off before transplant",
        duration: "4-6 weeks",
      },
      {
        stage: "Vegetative",
        description: "Branching growth, strong stems develop",
        duration: "4-5 weeks",
      },
      {
        stage: "Flowering",
        description: "Small white flowers appear at branch joints",
        duration: "2-3 weeks",
      },
      {
        stage: "Fruiting",
        description: "Peppers form and ripen to full color",
        duration: "6-8 weeks",
      },
    ],
    wateringFrequency: "Every 1-2 days",
    sunlight: "Full Sun (6-8 hours)",
    difficulty: "Medium",
  },
  {
    id: "plant-7",
    name: "Alpine Strawberry",
    image: "/images/plants/strawberry.jpg",
    description:
      "Compact everbearing strawberry plants producing small, intensely sweet berries from spring to fall. Perfect for hanging baskets, containers, and edible borders.",
    category: "Fruits",
    growthStages: [
      {
        stage: "Planting",
        description: "Set crowns or transplants in early spring",
        duration: "1-2 weeks",
      },
      {
        stage: "Establishment",
        description: "Root system develops, first leaves unfurl",
        duration: "3-4 weeks",
      },
      {
        stage: "Runner",
        description: "Plants send out runners, new plants form",
        duration: "Ongoing",
      },
      {
        stage: "Flowering",
        description: "White flowers appear, pollinate for fruit set",
        duration: "2-3 weeks",
      },
      {
        stage: "Fruiting",
        description: "Sweet red berries ripen continuously",
        duration: "Spring to fall",
      },
    ],
    wateringFrequency: "Every 1-2 days",
    sunlight: "Full Sun (6-8 hours)",
    difficulty: "Easy",
  },
  {
    id: "plant-8",
    name: "Rosemary",
    image: "/images/plants/rosemary.jpg",
    description:
      "A woody Mediterranean herb with fragrant needle-like leaves, perfect for roasts and breads. Rosemary is drought-tolerant once established and makes a beautiful evergreen shrub.",
    category: "Herbs",
    growthStages: [
      {
        stage: "Cutting",
        description: "Root stem cuttings in moist sandy mix",
        duration: "3-4 weeks",
      },
      {
        stage: "Establishment",
        description: "Roots develop, new growth appears at tips",
        duration: "4-6 weeks",
      },
      {
        stage: "Vegetative",
        description: "Woody stems develop, bush shape forms",
        duration: "First season",
      },
      {
        stage: "Mature",
        description:
          "Full-sized shrub, small blue flowers appear in spring",
        duration: "Perennial",
      },
    ],
    wateringFrequency: "Every 3-5 days",
    sunlight: "Full Sun (6-8 hours)",
    difficulty: "Medium",
  },
]
