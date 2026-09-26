import { Ingredients } from "./ingredients";
import { type Recipe } from "../interfaces/Recipe";
import { RecipeStepsActions } from "./recipeSteps";

export enum RecipeLevel {
  VERY_EASY = "VERY_EASY",
  EASY = "EASY",
  NORMAL = "NORMAL",
  HARD = "HARD",
  VERY_HARD = "VERY_HARD",
}

export enum RecipePrice {
  VERY_EASY = 8,
  EASY = 10,
  NORMAL = 14,
  HARD = 16,
  VERY_HARD = 18,
}

export const BASE_RECIPES: Record<RecipeLevel, Recipe[]> = {
  [RecipeLevel.VERY_EASY]: [
    {
      id: "coffee_black",
      name: "Café Preto",
      price: RecipePrice[RecipeLevel.VERY_EASY],
      level: RecipeLevel.VERY_EASY,
      steps: [
        {
          action: RecipeStepsActions.ADD,
          ingredient: Ingredients.CUP,
        },
        {
          action: RecipeStepsActions.ADD,
          ingredient: Ingredients.COFFEE,
        },
        {
          action: RecipeStepsActions.CLOSE,
          ingredient: Ingredients.LID,
        },
        {
          action: RecipeStepsActions.SERVE,
        },
      ],
    },
    {
      id: "iced_tea",
      name: "Chá Gelado",
      price: RecipePrice[RecipeLevel.VERY_EASY],
      level: RecipeLevel.VERY_EASY,
      steps: [
        {
          action: RecipeStepsActions.ADD,
          ingredient: Ingredients.CUP,
        },
        {
          action: RecipeStepsActions.ADD,
          ingredient: Ingredients.TEA,
        },
        {
          action: RecipeStepsActions.HEAT,
          ingredient: Ingredients.TEA,
        },
        {
          action: RecipeStepsActions.ADD,
          ingredient: Ingredients.ICE,
        },
        {
          action: RecipeStepsActions.BLEND,
          ingredient: Ingredients.ICE,
        },
        {
          action: RecipeStepsActions.SERVE,
        },
      ],
    },
    {
      id: "lemon_water",
      name: "Água com Limão",
      price: RecipePrice[RecipeLevel.VERY_EASY],
      level: RecipeLevel.VERY_EASY,
      steps: [
        {
          action: RecipeStepsActions.ADD,
          ingredient: Ingredients.CUP,
        },
        {
          action: RecipeStepsActions.ADD,
          ingredient: Ingredients.WATER,
        },
        {
          action: RecipeStepsActions.ADD,
          ingredient: Ingredients.LEMON,
        },
        {
          action: RecipeStepsActions.MIX,
          ingredient: Ingredients.LEMON,
        },
        {
          action: RecipeStepsActions.SERVE,
        },
      ],
    },
    {
      id: "orange_juice",
      name: "Suco de Laranja",
      price: RecipePrice[RecipeLevel.VERY_EASY],
      level: RecipeLevel.VERY_EASY,
      steps: [
        {
          action: RecipeStepsActions.ADD,
          ingredient: Ingredients.CUP,
        },
        {
          action: RecipeStepsActions.ADD,
          ingredient: Ingredients.ORANGE_JUICE,
        },
        {
          action: RecipeStepsActions.CLOSE,
          ingredient: Ingredients.LID,
        },
        {
          action: RecipeStepsActions.SERVE,
        },
      ],
    },
    {
      id: "espresso",
      name: "Espresso",
      price: RecipePrice[RecipeLevel.VERY_EASY],
      level: RecipeLevel.VERY_EASY,
      steps: [
        {
          action: RecipeStepsActions.ADD,
          ingredient: Ingredients.CUP,
        },
        {
          action: RecipeStepsActions.ADD,
          ingredient: Ingredients.COFFEE,
        },
        {
          action: RecipeStepsActions.HEAT,
          ingredient: Ingredients.COFFEE,
        },
        {
          action: RecipeStepsActions.SERVE,
        },
      ],
    },
    {
      id: "hot_milk",
      name: "Leite Quente",
      price: RecipePrice[RecipeLevel.VERY_EASY],
      level: RecipeLevel.VERY_EASY,
      steps: [
        {
          action: RecipeStepsActions.ADD,
          ingredient: Ingredients.CUP,
        },
        {
          action: RecipeStepsActions.ADD,
          ingredient: Ingredients.MILK,
        },
        {
          action: RecipeStepsActions.HEAT,
        },
        {
          action: RecipeStepsActions.SERVE,
        },
      ],
    },
    {
      id: "hot_chocolate",
      name: "Chocolate Quente",
      price: RecipePrice[RecipeLevel.VERY_EASY],
      level: RecipeLevel.VERY_EASY,
      steps: [
        {
          action: RecipeStepsActions.ADD,
          ingredient: Ingredients.CUP,
        },
        {
          action: RecipeStepsActions.ADD,
          ingredient: Ingredients.CHOCOLATE,
        },
        {
          action: RecipeStepsActions.HEAT,
        },
        {
          action: RecipeStepsActions.SERVE,
        },
      ],
    },
    {
      id: "lemon_tea",
      name: "Chá de Limão",
      price: RecipePrice[RecipeLevel.VERY_EASY],
      level: RecipeLevel.VERY_EASY,
      steps: [
        {
          action: RecipeStepsActions.ADD,
          ingredient: Ingredients.CUP,
        },
        {
          action: RecipeStepsActions.ADD,
          ingredient: Ingredients.TEA,
        },
        {
          action: RecipeStepsActions.HEAT,
          ingredient: Ingredients.TEA,
        },
        {
          action: RecipeStepsActions.ADD,
          ingredient: Ingredients.LEMON,
        },
        {
          action: RecipeStepsActions.SERVE,
        },
      ],
    },
    {
      id: "simple_milkshake",
      name: "Milkshake Simples",
      price: RecipePrice[RecipeLevel.VERY_EASY],
      level: RecipeLevel.VERY_EASY,
      steps: [
        {
          action: RecipeStepsActions.ADD,
          ingredient: Ingredients.CUP,
        },
        {
          action: RecipeStepsActions.ADD,
          ingredient: Ingredients.WHIPPED_CREAM,
        },
        {
          action: RecipeStepsActions.BLEND,
        },
        {
          action: RecipeStepsActions.SERVE,
        },
      ],
    },
    {
      id: "soda_ice",
      name: "Refrigerante com Gelo",
      price: RecipePrice[RecipeLevel.VERY_EASY],
      level: RecipeLevel.VERY_EASY,
      steps: [
        {
          action: RecipeStepsActions.ADD,
          ingredient: Ingredients.CUP,
        },
        {
          action: RecipeStepsActions.ADD,
          ingredient: Ingredients.SODA,
        },
        {
          action: RecipeStepsActions.ADD,
          ingredient: Ingredients.ICE,
        },
        {
          action: RecipeStepsActions.BLEND,
          ingredient: Ingredients.ICE,
        },
        {
          action: RecipeStepsActions.SERVE,
        },
      ],
    },
  ],
  [RecipeLevel.EASY]: [
    {
      id: "coffee_milk",
      name: "Café com Leite",
      price: RecipePrice[RecipeLevel.EASY],
      level: RecipeLevel.EASY,
      steps: [
        {
          action: RecipeStepsActions.ADD,
          ingredient: Ingredients.CUP,
        },
        {
          action: RecipeStepsActions.ADD,
          ingredient: Ingredients.COFFEE,
        },
        {
          action: RecipeStepsActions.HEAT,
          ingredient: Ingredients.COFFEE,
        },
        {
          action: RecipeStepsActions.ADD,
          ingredient: Ingredients.MILK,
        },
        {
          action: RecipeStepsActions.SERVE,
        },
      ],
    },
    {
      id: "honey_tea",
      name: "Chá com Mel",
      price: RecipePrice[RecipeLevel.EASY],
      level: RecipeLevel.EASY,
      steps: [
        {
          action: RecipeStepsActions.ADD,
          ingredient: Ingredients.CUP,
        },
        {
          action: RecipeStepsActions.ADD,
          ingredient: Ingredients.TEA,
        },
        {
          action: RecipeStepsActions.ADD,
          ingredient: Ingredients.HONEY,
        },
        {
          action: RecipeStepsActions.HEAT,
          ingredient: Ingredients.TEA,
        },
        {
          action: RecipeStepsActions.SERVE,
        },
      ],
    },
    {
      id: "lemonade",
      name: "Limonada",
      price: RecipePrice[RecipeLevel.EASY],
      level: RecipeLevel.EASY,
      steps: [
        {
          action: RecipeStepsActions.ADD,
          ingredient: Ingredients.CUP,
        },
        {
          action: RecipeStepsActions.ADD,
          ingredient: Ingredients.WATER,
        },
        {
          action: RecipeStepsActions.ADD,
          ingredient: Ingredients.LEMON,
        },
        {
          action: RecipeStepsActions.ADD,
          ingredient: Ingredients.SUGAR,
        },
        {
          action: RecipeStepsActions.MIX,
          ingredient: Ingredients.SUGAR,
        },
        {
          action: RecipeStepsActions.SERVE,
        },
      ],
    },
    {
      id: "strawberry_juice",
      name: "Suco de Morango",
      price: RecipePrice[RecipeLevel.EASY],
      level: RecipeLevel.EASY,
      steps: [
        {
          action: RecipeStepsActions.ADD,
          ingredient: Ingredients.CUP,
        },
        {
          action: RecipeStepsActions.ADD,
          ingredient: Ingredients.STRAWBERRY,
        },
        {
          action: RecipeStepsActions.BLEND,
        },
        {
          action: RecipeStepsActions.SERVE,
        },
      ],
    },
    {
      id: "cappuccino",
      name: "Cappuccino",
      price: RecipePrice[RecipeLevel.EASY],
      level: RecipeLevel.EASY,
      steps: [
        {
          action: RecipeStepsActions.ADD,
          ingredient: Ingredients.CUP,
        },
        {
          action: RecipeStepsActions.ADD,
          ingredient: Ingredients.COFFEE,
        },
        {
          action: RecipeStepsActions.HEAT,
          ingredient: Ingredients.COFFEE,
        },
        {
          action: RecipeStepsActions.ADD,
          ingredient: Ingredients.MILK,
        },
        {
          action: RecipeStepsActions.ADD,
          ingredient: Ingredients.FOAM,
        },
        {
          action: RecipeStepsActions.MIX,
          ingredient: Ingredients.FOAM,
        },
        {
          action: RecipeStepsActions.SERVE,
        },
      ],
    },
    {
      id: "iced_chocolate",
      name: "Chocolate Gelado",
      price: RecipePrice[RecipeLevel.EASY],
      level: RecipeLevel.EASY,
      steps: [
        {
          action: RecipeStepsActions.ADD,
          ingredient: Ingredients.CUP,
        },
        {
          action: RecipeStepsActions.ADD,
          ingredient: Ingredients.CHOCOLATE,
        },
        {
          action: RecipeStepsActions.HEAT,
          ingredient: Ingredients.CHOCOLATE,
        },
        {
          action: RecipeStepsActions.ADD,
          ingredient: Ingredients.MILK,
        },
        {
          action: RecipeStepsActions.ADD,
          ingredient: Ingredients.ICE,
        },
        {
          action: RecipeStepsActions.BLEND,
          ingredient: Ingredients.ICE,
        },
        {
          action: RecipeStepsActions.SERVE,
        },
      ],
    },
    {
      id: "vanilla_milkshake",
      name: "Milkshake de Baunilha",
      price: RecipePrice[RecipeLevel.EASY],
      level: RecipeLevel.EASY,
      steps: [
        {
          action: RecipeStepsActions.ADD,
          ingredient: Ingredients.CUP,
        },
        {
          action: RecipeStepsActions.ADD,
          ingredient: Ingredients.WHIPPED_CREAM,
        },
        {
          action: RecipeStepsActions.ADD,
          ingredient: Ingredients.MILK,
        },
        {
          action: RecipeStepsActions.BLEND,
        },
        {
          action: RecipeStepsActions.SERVE,
        },
      ],
    },
    {
      id: "strawberry_milkshake",
      name: "Milkshake de Morango",
      price: RecipePrice[RecipeLevel.EASY],
      level: RecipeLevel.EASY,
      steps: [
        {
          action: RecipeStepsActions.ADD,
          ingredient: Ingredients.CUP,
        },
        {
          action: RecipeStepsActions.ADD,
          ingredient: Ingredients.STRAWBERRY,
        },
        {
          action: RecipeStepsActions.ADD,
          ingredient: Ingredients.MILK,
        },
        {
          action: RecipeStepsActions.BLEND,
        },
        {
          action: RecipeStepsActions.SERVE,
        },
      ],
    },
    {
      id: "peach_tea",
      name: "Chá de Pêssego",
      price: RecipePrice[RecipeLevel.EASY],
      level: RecipeLevel.EASY,
      steps: [
        {
          action: RecipeStepsActions.ADD,
          ingredient: Ingredients.CUP,
        },
        {
          action: RecipeStepsActions.ADD,
          ingredient: Ingredients.TEA,
        },
        {
          action: RecipeStepsActions.HEAT,
          ingredient: Ingredients.TEA,
        },
        {
          action: RecipeStepsActions.ADD,
          ingredient: Ingredients.PEACH,
        },
        {
          action: RecipeStepsActions.ADD,
          ingredient: Ingredients.ICE,
        },
        {
          action: RecipeStepsActions.BLEND,
          ingredient: Ingredients.ICE,
        },
        {
          action: RecipeStepsActions.SERVE,
        },
      ],
    },
    {
      id: "vanilla_coffee",
      name: "Café com Baunilha",
      price: RecipePrice[RecipeLevel.EASY],
      level: RecipeLevel.EASY,
      steps: [
        {
          action: RecipeStepsActions.ADD,
          ingredient: Ingredients.CUP,
        },
        {
          action: RecipeStepsActions.ADD,
          ingredient: Ingredients.COFFEE,
        },
        {
          action: RecipeStepsActions.HEAT,
          ingredient: Ingredients.COFFEE,
        },
        {
          action: RecipeStepsActions.ADD,
          ingredient: Ingredients.VANILLA,
        },
        {
          action: RecipeStepsActions.ADD,
          ingredient: Ingredients.MILK,
        },
        {
          action: RecipeStepsActions.SERVE,
        },
      ],
    },
  ],
  [RecipeLevel.NORMAL]: [
    {
      id: "classic_bubble_tea",
      name: "Bubble Tea Clássico",
      price: RecipePrice[RecipeLevel.NORMAL],
      level: RecipeLevel.NORMAL,
      steps: [
        {
          action: RecipeStepsActions.ADD,
          ingredient: Ingredients.CUP,
        },
        {
          action: RecipeStepsActions.ADD,
          ingredient: Ingredients.TEA,
        },
        {
          action: RecipeStepsActions.HEAT,
          ingredient: Ingredients.TEA,
        },
        {
          action: RecipeStepsActions.ADD,
          ingredient: Ingredients.MILK,
        },
        {
          action: RecipeStepsActions.ADD,
          ingredient: Ingredients.TAPIOCA,
        },
        {
          action: RecipeStepsActions.ADD,
          ingredient: Ingredients.ICE,
        },
        {
          action: RecipeStepsActions.BLEND,
          ingredient: Ingredients.ICE,
        },
        {
          action: RecipeStepsActions.SERVE,
        },
      ],
    },
    {
      id: "strawberry_bubble_tea",
      name: "Bubble Tea de Morango",
      price: RecipePrice[RecipeLevel.NORMAL],
      level: RecipeLevel.NORMAL,
      steps: [
        {
          action: RecipeStepsActions.ADD,
          ingredient: Ingredients.CUP,
        },
        {
          action: RecipeStepsActions.ADD,
          ingredient: Ingredients.TEA,
        },
        {
          action: RecipeStepsActions.HEAT,
          ingredient: Ingredients.TEA,
        },
        {
          action: RecipeStepsActions.ADD,
          ingredient: Ingredients.STRAWBERRY,
        },
        {
          action: RecipeStepsActions.ADD,
          ingredient: Ingredients.TAPIOCA,
        },
        {
          action: RecipeStepsActions.ADD,
          ingredient: Ingredients.ICE,
        },
        {
          action: RecipeStepsActions.BLEND,
          ingredient: Ingredients.ICE,
        },
        {
          action: RecipeStepsActions.SERVE,
        },
      ],
    },
    {
      id: "creamy_cappuccino",
      name: "Cappuccino Cremoso",
      price: RecipePrice[RecipeLevel.NORMAL],
      level: RecipeLevel.NORMAL,
      steps: [
        {
          action: RecipeStepsActions.ADD,
          ingredient: Ingredients.CUP,
        },
        {
          action: RecipeStepsActions.ADD,
          ingredient: Ingredients.COFFEE,
        },
        {
          action: RecipeStepsActions.HEAT,
          ingredient: Ingredients.COFFEE,
        },
        {
          action: RecipeStepsActions.ADD,
          ingredient: Ingredients.MILK,
        },
        {
          action: RecipeStepsActions.ADD,
          ingredient: Ingredients.FOAM,
        },
        {
          action: RecipeStepsActions.MIX,
          ingredient: Ingredients.FOAM,
        },
        {
          action: RecipeStepsActions.ADD,
          ingredient: Ingredients.CINNAMON,
        },
        {
          action: RecipeStepsActions.SERVE,
        },
      ],
    },
    {
      id: "mocha",
      name: "Mocha",
      price: RecipePrice[RecipeLevel.NORMAL],
      level: RecipeLevel.NORMAL,
      steps: [
        {
          action: RecipeStepsActions.ADD,
          ingredient: Ingredients.CUP,
        },
        {
          action: RecipeStepsActions.ADD,
          ingredient: Ingredients.COFFEE,
        },
        {
          action: RecipeStepsActions.HEAT,
          ingredient: Ingredients.COFFEE,
        },
        {
          action: RecipeStepsActions.ADD,
          ingredient: Ingredients.CHOCOLATE,
        },
        {
          action: RecipeStepsActions.ADD,
          ingredient: Ingredients.MILK,
        },
        {
          action: RecipeStepsActions.ADD,
          ingredient: Ingredients.FOAM,
        },
        {
          action: RecipeStepsActions.MIX,
          ingredient: Ingredients.FOAM,
        },
        {
          action: RecipeStepsActions.SERVE,
        },
      ],
    },
    {
      id: "strawberry_smoothie",
      name: "Smoothie de Morango",
      price: RecipePrice[RecipeLevel.NORMAL],
      level: RecipeLevel.NORMAL,
      steps: [
        {
          action: RecipeStepsActions.ADD,
          ingredient: Ingredients.CUP,
        },
        {
          action: RecipeStepsActions.ADD,
          ingredient: Ingredients.STRAWBERRY,
        },
        {
          action: RecipeStepsActions.ADD,
          ingredient: Ingredients.MILK,
        },
        {
          action: RecipeStepsActions.ADD,
          ingredient: Ingredients.HONEY,
        },
        {
          action: RecipeStepsActions.BLEND,
        },
        {
          action: RecipeStepsActions.SERVE,
        },
      ],
    },
    {
      id: "banana_smoothie",
      name: "Smoothie de Banana",
      price: RecipePrice[RecipeLevel.NORMAL],
      level: RecipeLevel.NORMAL,
      steps: [
        {
          action: RecipeStepsActions.ADD,
          ingredient: Ingredients.CUP,
        },
        {
          action: RecipeStepsActions.ADD,
          ingredient: Ingredients.BANANA,
        },
        {
          action: RecipeStepsActions.ADD,
          ingredient: Ingredients.MILK,
        },
        {
          action: RecipeStepsActions.ADD,
          ingredient: Ingredients.HONEY,
        },
        {
          action: RecipeStepsActions.BLEND,
        },
        {
          action: RecipeStepsActions.SERVE,
        },
      ],
    },
    {
      id: "crunchy_chocolate",
      name: "Chocolate Crocante",
      price: RecipePrice[RecipeLevel.NORMAL],
      level: RecipeLevel.NORMAL,
      steps: [
        {
          action: RecipeStepsActions.ADD,
          ingredient: Ingredients.CUP,
        },
        {
          action: RecipeStepsActions.ADD,
          ingredient: Ingredients.CHOCOLATE,
        },
        {
          action: RecipeStepsActions.HEAT,
          ingredient: Ingredients.CHOCOLATE,
        },
        {
          action: RecipeStepsActions.ADD,
          ingredient: Ingredients.MILK,
        },
        {
          action: RecipeStepsActions.ADD,
          ingredient: Ingredients.WHIPPED_CREAM,
        },
        {
          action: RecipeStepsActions.ADD,
          ingredient: Ingredients.SPRINKLES,
        },
        {
          action: RecipeStepsActions.TOP,
          ingredient: Ingredients.SPRINKLES,
        },
        {
          action: RecipeStepsActions.SERVE,
        },
      ],
    },
    {
      id: "caramel_coffee",
      name: "Café com Caramelo",
      price: RecipePrice[RecipeLevel.NORMAL],
      level: RecipeLevel.NORMAL,
      steps: [
        {
          action: RecipeStepsActions.ADD,
          ingredient: Ingredients.CUP,
        },
        {
          action: RecipeStepsActions.ADD,
          ingredient: Ingredients.COFFEE,
        },
        {
          action: RecipeStepsActions.HEAT,
          ingredient: Ingredients.COFFEE,
        },
        {
          action: RecipeStepsActions.ADD,
          ingredient: Ingredients.CARAMEL,
        },
        {
          action: RecipeStepsActions.ADD,
          ingredient: Ingredients.MILK,
        },
        {
          action: RecipeStepsActions.ADD,
          ingredient: Ingredients.FOAM,
        },
        {
          action: RecipeStepsActions.MIX,
          ingredient: Ingredients.FOAM,
        },
        {
          action: RecipeStepsActions.SERVE,
        },
      ],
    },
    {
      id: "tropical_tea",
      name: "Chá Tropical",
      price: RecipePrice[RecipeLevel.NORMAL],
      level: RecipeLevel.NORMAL,
      steps: [
        {
          action: RecipeStepsActions.ADD,
          ingredient: Ingredients.CUP,
        },
        {
          action: RecipeStepsActions.ADD,
          ingredient: Ingredients.TEA,
        },
        {
          action: RecipeStepsActions.HEAT,
          ingredient: Ingredients.TEA,
        },
        {
          action: RecipeStepsActions.ADD,
          ingredient: Ingredients.MANGO,
        },
        {
          action: RecipeStepsActions.ADD,
          ingredient: Ingredients.PASSION_FRUIT,
        },
        {
          action: RecipeStepsActions.ADD,
          ingredient: Ingredients.ICE,
        },
        {
          action: RecipeStepsActions.BLEND,
          ingredient: Ingredients.ICE,
        },
        {
          action: RecipeStepsActions.SERVE,
        },
      ],
    },
    {
      id: "chocolate_milkshake",
      name: "Milkshake de Chocolate",
      price: RecipePrice[RecipeLevel.NORMAL],
      level: RecipeLevel.NORMAL,
      steps: [
        {
          action: RecipeStepsActions.ADD,
          ingredient: Ingredients.CUP,
        },
        {
          action: RecipeStepsActions.ADD,
          ingredient: Ingredients.CHOCOLATE,
        },
        {
          action: RecipeStepsActions.ADD,
          ingredient: Ingredients.WHIPPED_CREAM,
        },
        {
          action: RecipeStepsActions.ADD,
          ingredient: Ingredients.MILK,
        },
        {
          action: RecipeStepsActions.BLEND,
        },
        {
          action: RecipeStepsActions.SERVE,
        },
      ],
    },
  ],
  [RecipeLevel.HARD]: [
    {
      id: "mango_bubble_tea",
      name: "Bubble Tea de Manga",
      price: RecipePrice[RecipeLevel.HARD],
      level: RecipeLevel.HARD,
      steps: [
        {
          action: RecipeStepsActions.ADD,
          ingredient: Ingredients.CUP,
        },
        {
          action: RecipeStepsActions.ADD,
          ingredient: Ingredients.TEA,
        },
        {
          action: RecipeStepsActions.HEAT,
          ingredient: Ingredients.TEA,
        },
        {
          action: RecipeStepsActions.ADD,
          ingredient: Ingredients.MILK,
        },
        {
          action: RecipeStepsActions.ADD,
          ingredient: Ingredients.MANGO,
        },
        {
          action: RecipeStepsActions.ADD,
          ingredient: Ingredients.TAPIOCA,
        },
        {
          action: RecipeStepsActions.ADD,
          ingredient: Ingredients.ICE,
        },
        {
          action: RecipeStepsActions.BLEND,
          ingredient: Ingredients.ICE,
        },
        {
          action: RecipeStepsActions.SERVE,
        },
      ],
    },
    {
      id: "chocolate_bubble_tea",
      name: "Bubble Tea de Chocolate",
      price: RecipePrice[RecipeLevel.HARD],
      level: RecipeLevel.HARD,
      steps: [
        {
          action: RecipeStepsActions.ADD,
          ingredient: Ingredients.CUP,
        },
        {
          action: RecipeStepsActions.ADD,
          ingredient: Ingredients.TEA,
        },
        {
          action: RecipeStepsActions.HEAT,
          ingredient: Ingredients.TEA,
        },
        {
          action: RecipeStepsActions.ADD,
          ingredient: Ingredients.MILK,
        },
        {
          action: RecipeStepsActions.ADD,
          ingredient: Ingredients.CHOCOLATE,
        },
        {
          action: RecipeStepsActions.ADD,
          ingredient: Ingredients.TAPIOCA,
        },
        {
          action: RecipeStepsActions.ADD,
          ingredient: Ingredients.ICE,
        },
        {
          action: RecipeStepsActions.BLEND,
          ingredient: Ingredients.ICE,
        },
        {
          action: RecipeStepsActions.SERVE,
        },
      ],
    },
    {
      id: "caramel_mocha",
      name: "Mocha com Caramelo",
      price: RecipePrice[RecipeLevel.HARD],
      level: RecipeLevel.HARD,
      steps: [
        {
          action: RecipeStepsActions.ADD,
          ingredient: Ingredients.CUP,
        },
        {
          action: RecipeStepsActions.ADD,
          ingredient: Ingredients.COFFEE,
        },
        {
          action: RecipeStepsActions.HEAT,
          ingredient: Ingredients.COFFEE,
        },
        {
          action: RecipeStepsActions.ADD,
          ingredient: Ingredients.CHOCOLATE,
        },
        {
          action: RecipeStepsActions.ADD,
          ingredient: Ingredients.CARAMEL,
        },
        {
          action: RecipeStepsActions.ADD,
          ingredient: Ingredients.MILK,
        },
        {
          action: RecipeStepsActions.ADD,
          ingredient: Ingredients.FOAM,
        },
        {
          action: RecipeStepsActions.MIX,
          ingredient: Ingredients.FOAM,
        },
        {
          action: RecipeStepsActions.SERVE,
        },
      ],
    },
    {
      id: "vanilla_cappuccino",
      name: "Cappuccino de Baunilha",
      price: RecipePrice[RecipeLevel.HARD],
      level: RecipeLevel.HARD,
      steps: [
        {
          action: RecipeStepsActions.ADD,
          ingredient: Ingredients.CUP,
        },
        {
          action: RecipeStepsActions.ADD,
          ingredient: Ingredients.COFFEE,
        },
        {
          action: RecipeStepsActions.HEAT,
          ingredient: Ingredients.COFFEE,
        },
        {
          action: RecipeStepsActions.ADD,
          ingredient: Ingredients.VANILLA,
        },
        {
          action: RecipeStepsActions.ADD,
          ingredient: Ingredients.MILK,
        },
        {
          action: RecipeStepsActions.ADD,
          ingredient: Ingredients.FOAM,
        },
        {
          action: RecipeStepsActions.MIX,
          ingredient: Ingredients.FOAM,
        },
        {
          action: RecipeStepsActions.ADD,
          ingredient: Ingredients.CINNAMON,
        },
        {
          action: RecipeStepsActions.SERVE,
        },
      ],
    },
    {
      id: "tropical_smoothie",
      name: "Smoothie Tropical",
      price: RecipePrice[RecipeLevel.HARD],
      level: RecipeLevel.HARD,
      steps: [
        {
          action: RecipeStepsActions.ADD,
          ingredient: Ingredients.CUP,
        },
        {
          action: RecipeStepsActions.ADD,
          ingredient: Ingredients.MANGO,
        },
        {
          action: RecipeStepsActions.ADD,
          ingredient: Ingredients.PASSION_FRUIT,
        },
        {
          action: RecipeStepsActions.ADD,
          ingredient: Ingredients.BANANA,
        },
        {
          action: RecipeStepsActions.ADD,
          ingredient: Ingredients.MILK,
        },
        {
          action: RecipeStepsActions.BLEND,
        },
        {
          action: RecipeStepsActions.SERVE,
        },
      ],
    },
    {
      id: "oreo_milkshake",
      name: "Milkshake de Oreo",
      price: RecipePrice[RecipeLevel.HARD],
      level: RecipeLevel.HARD,
      steps: [
        {
          action: RecipeStepsActions.ADD,
          ingredient: Ingredients.CUP,
        },
        {
          action: RecipeStepsActions.ADD,
          ingredient: Ingredients.WHIPPED_CREAM,
        },
        {
          action: RecipeStepsActions.ADD,
          ingredient: Ingredients.MILK,
        },
        {
          action: RecipeStepsActions.ADD,
          ingredient: Ingredients.COOKIE,
        },
        {
          action: RecipeStepsActions.BLEND,
          ingredient: Ingredients.COOKIE,
        },
        {
          action: RecipeStepsActions.ADD,
          ingredient: Ingredients.WHIPPED_CREAM,
        },
        {
          action: RecipeStepsActions.ADD,
          ingredient: Ingredients.SPRINKLES,
        },
        {
          action: RecipeStepsActions.TOP,
          ingredient: Ingredients.SPRINKLES,
        },
        {
          action: RecipeStepsActions.SERVE,
        },
      ],
    },
    {
      id: "special_chocolate",
      name: "Chocolate Especial",
      price: RecipePrice[RecipeLevel.HARD],
      level: RecipeLevel.HARD,
      steps: [
        {
          action: RecipeStepsActions.ADD,
          ingredient: Ingredients.CUP,
        },
        {
          action: RecipeStepsActions.ADD,
          ingredient: Ingredients.CHOCOLATE,
        },
        {
          action: RecipeStepsActions.HEAT,
          ingredient: Ingredients.CHOCOLATE,
        },
        {
          action: RecipeStepsActions.ADD,
          ingredient: Ingredients.MILK,
        },
        {
          action: RecipeStepsActions.ADD,
          ingredient: Ingredients.CARAMEL,
        },
        {
          action: RecipeStepsActions.ADD,
          ingredient: Ingredients.WHIPPED_CREAM,
        },
        {
          action: RecipeStepsActions.ADD,
          ingredient: Ingredients.SPRINKLES,
        },
        {
          action: RecipeStepsActions.TOP,
          ingredient: Ingredients.SPRINKLES,
        },
        {
          action: RecipeStepsActions.SERVE,
        },
      ],
    },
    {
      id: "berry_tea",
      name: "Chá de Frutas Vermelhas",
      price: RecipePrice[RecipeLevel.HARD],
      level: RecipeLevel.HARD,
      steps: [
        {
          action: RecipeStepsActions.ADD,
          ingredient: Ingredients.CUP,
        },
        {
          action: RecipeStepsActions.ADD,
          ingredient: Ingredients.TEA,
        },
        {
          action: RecipeStepsActions.HEAT,
          ingredient: Ingredients.TEA,
        },
        {
          action: RecipeStepsActions.ADD,
          ingredient: Ingredients.STRAWBERRY,
        },
        {
          action: RecipeStepsActions.ADD,
          ingredient: Ingredients.RASPBERRY,
        },
        {
          action: RecipeStepsActions.ADD,
          ingredient: Ingredients.ICE,
        },
        {
          action: RecipeStepsActions.BLEND,
          ingredient: Ingredients.ICE,
        },
        {
          action: RecipeStepsActions.ADD,
          ingredient: Ingredients.HONEY,
        },
        {
          action: RecipeStepsActions.SERVE,
        },
      ],
    },
    {
      id: "coffee_frappe",
      name: "Café Frappê",
      price: RecipePrice[RecipeLevel.HARD],
      level: RecipeLevel.HARD,
      steps: [
        {
          action: RecipeStepsActions.ADD,
          ingredient: Ingredients.CUP,
        },
        {
          action: RecipeStepsActions.ADD,
          ingredient: Ingredients.COFFEE,
        },
        {
          action: RecipeStepsActions.HEAT,
          ingredient: Ingredients.COFFEE,
        },
        {
          action: RecipeStepsActions.ADD,
          ingredient: Ingredients.MILK,
        },
        {
          action: RecipeStepsActions.ADD,
          ingredient: Ingredients.ICE,
        },
        {
          action: RecipeStepsActions.BLEND,
          ingredient: Ingredients.ICE,
        },
        {
          action: RecipeStepsActions.ADD,
          ingredient: Ingredients.WHIPPED_CREAM,
        },
        {
          action: RecipeStepsActions.ADD,
          ingredient: Ingredients.CARAMEL,
        },
        {
          action: RecipeStepsActions.SERVE,
        },
      ],
    },
    {
      id: "caramel_milkshake",
      name: "Milkshake de Caramelo",
      price: RecipePrice[RecipeLevel.HARD],
      level: RecipeLevel.HARD,
      steps: [
        {
          action: RecipeStepsActions.ADD,
          ingredient: Ingredients.CUP,
        },
        {
          action: RecipeStepsActions.ADD,
          ingredient: Ingredients.WHIPPED_CREAM,
        },
        {
          action: RecipeStepsActions.ADD,
          ingredient: Ingredients.MILK,
        },
        {
          action: RecipeStepsActions.BLEND,
          ingredient: Ingredients.MILK,
        },
        {
          action: RecipeStepsActions.ADD,
          ingredient: Ingredients.CARAMEL,
        },
        {
          action: RecipeStepsActions.ADD,
          ingredient: Ingredients.WHIPPED_CREAM,
        },
        {
          action: RecipeStepsActions.ADD,
          ingredient: Ingredients.SPRINKLES,
        },
        {
          action: RecipeStepsActions.TOP,
          ingredient: Ingredients.SPRINKLES,
        },
        {
          action: RecipeStepsActions.SERVE,
        },
      ],
    },
  ],
  [RecipeLevel.VERY_HARD]: [
    {
      id: "supreme_bubble_tea",
      name: "Bubble Tea Supremo",
      price: RecipePrice[RecipeLevel.VERY_HARD],
      level: RecipeLevel.VERY_HARD,
      steps: [
        {
          action: RecipeStepsActions.ADD,
          ingredient: Ingredients.CUP,
        },
        {
          action: RecipeStepsActions.ADD,
          ingredient: Ingredients.TEA,
        },
        {
          action: RecipeStepsActions.HEAT,
          ingredient: Ingredients.TEA,
        },
        {
          action: RecipeStepsActions.ADD,
          ingredient: Ingredients.MILK,
        },
        {
          action: RecipeStepsActions.ADD,
          ingredient: Ingredients.STRAWBERRY,
        },
        {
          action: RecipeStepsActions.ADD,
          ingredient: Ingredients.TAPIOCA,
        },
        {
          action: RecipeStepsActions.ADD,
          ingredient: Ingredients.ICE,
        },
        {
          action: RecipeStepsActions.BLEND,
          ingredient: Ingredients.ICE,
        },
        {
          action: RecipeStepsActions.ADD,
          ingredient: Ingredients.WHIPPED_CREAM,
        },
        {
          action: RecipeStepsActions.SERVE,
        },
      ],
    },
    {
      id: "tropical_supreme_bubble_tea",
      name: "Bubble Tea Supremo Tropical",
      price: RecipePrice[RecipeLevel.VERY_HARD],
      level: RecipeLevel.VERY_HARD,
      steps: [
        {
          action: RecipeStepsActions.ADD,
          ingredient: Ingredients.CUP,
        },
        {
          action: RecipeStepsActions.ADD,
          ingredient: Ingredients.TEA,
        },
        {
          action: RecipeStepsActions.HEAT,
          ingredient: Ingredients.TEA,
        },
        {
          action: RecipeStepsActions.ADD,
          ingredient: Ingredients.MANGO,
        },
        {
          action: RecipeStepsActions.ADD,
          ingredient: Ingredients.PASSION_FRUIT,
        },
        {
          action: RecipeStepsActions.ADD,
          ingredient: Ingredients.TAPIOCA,
        },
        {
          action: RecipeStepsActions.ADD,
          ingredient: Ingredients.ICE,
        },
        {
          action: RecipeStepsActions.BLEND,
          ingredient: Ingredients.ICE,
        },
        {
          action: RecipeStepsActions.ADD,
          ingredient: Ingredients.HONEY,
        },
        {
          action: RecipeStepsActions.SERVE,
        },
      ],
    },
    {
      id: "caramel_frappe",
      name: "Frappê de Caramelo",
      price: RecipePrice[RecipeLevel.VERY_HARD],
      level: RecipeLevel.VERY_HARD,
      steps: [
        {
          action: RecipeStepsActions.ADD,
          ingredient: Ingredients.CUP,
        },
        {
          action: RecipeStepsActions.ADD,
          ingredient: Ingredients.COFFEE,
        },
        {
          action: RecipeStepsActions.HEAT,
          ingredient: Ingredients.COFFEE,
        },
        {
          action: RecipeStepsActions.ADD,
          ingredient: Ingredients.MILK,
        },
        {
          action: RecipeStepsActions.ADD,
          ingredient: Ingredients.ICE,
        },
        {
          action: RecipeStepsActions.BLEND,
          ingredient: Ingredients.ICE,
        },
        {
          action: RecipeStepsActions.ADD,
          ingredient: Ingredients.CARAMEL,
        },
        {
          action: RecipeStepsActions.ADD,
          ingredient: Ingredients.WHIPPED_CREAM,
        },
        {
          action: RecipeStepsActions.ADD,
          ingredient: Ingredients.SPRINKLES,
        },
        {
          action: RecipeStepsActions.SERVE,
        },
      ],
    },
    {
      id: "chocolate_frappe",
      name: "Frappê de Chocolate",
      price: RecipePrice[RecipeLevel.VERY_HARD],
      level: RecipeLevel.VERY_HARD,
      steps: [
        {
          action: RecipeStepsActions.ADD,
          ingredient: Ingredients.CUP,
        },
        {
          action: RecipeStepsActions.ADD,
          ingredient: Ingredients.COFFEE,
        },
        {
          action: RecipeStepsActions.HEAT,
          ingredient: Ingredients.COFFEE,
        },
        {
          action: RecipeStepsActions.ADD,
          ingredient: Ingredients.CHOCOLATE,
        },
        {
          action: RecipeStepsActions.ADD,
          ingredient: Ingredients.MILK,
        },
        {
          action: RecipeStepsActions.ADD,
          ingredient: Ingredients.ICE,
        },
        {
          action: RecipeStepsActions.BLEND,
          ingredient: Ingredients.ICE,
        },
        {
          action: RecipeStepsActions.ADD,
          ingredient: Ingredients.WHIPPED_CREAM,
        },
        {
          action: RecipeStepsActions.ADD,
          ingredient: Ingredients.SPRINKLES,
        },
        {
          action: RecipeStepsActions.SERVE,
        },
      ],
    },
    {
      id: "supreme_milkshake",
      name: "Milkshake Supremo",
      price: RecipePrice[RecipeLevel.VERY_HARD],
      level: RecipeLevel.VERY_HARD,
      steps: [
        {
          action: RecipeStepsActions.ADD,
          ingredient: Ingredients.CUP,
        },
        {
          action: RecipeStepsActions.ADD,
          ingredient: Ingredients.WHIPPED_CREAM,
        },
        {
          action: RecipeStepsActions.ADD,
          ingredient: Ingredients.MILK,
        },
        {
          action: RecipeStepsActions.BLEND,
          ingredient: Ingredients.MILK,
        },
        {
          action: RecipeStepsActions.ADD,
          ingredient: Ingredients.CHOCOLATE,
        },
        {
          action: RecipeStepsActions.ADD,
          ingredient: Ingredients.WHIPPED_CREAM,
        },
        {
          action: RecipeStepsActions.ADD,
          ingredient: Ingredients.CARAMEL,
        },
        {
          action: RecipeStepsActions.ADD,
          ingredient: Ingredients.SPRINKLES,
        },
        {
          action: RecipeStepsActions.TOP,
          ingredient: Ingredients.SPRINKLES,
        },
        {
          action: RecipeStepsActions.SERVE,
        },
      ],
    },
    {
      id: "supreme_mocha",
      name: "Mocha Supremo",
      price: RecipePrice[RecipeLevel.VERY_HARD],
      level: RecipeLevel.VERY_HARD,
      steps: [
        {
          action: RecipeStepsActions.ADD,
          ingredient: Ingredients.CUP,
        },
        {
          action: RecipeStepsActions.ADD,
          ingredient: Ingredients.COFFEE,
        },
        {
          action: RecipeStepsActions.HEAT,
          ingredient: Ingredients.COFFEE,
        },
        {
          action: RecipeStepsActions.ADD,
          ingredient: Ingredients.CHOCOLATE,
        },
        {
          action: RecipeStepsActions.ADD,
          ingredient: Ingredients.CARAMEL,
        },
        {
          action: RecipeStepsActions.ADD,
          ingredient: Ingredients.MILK,
        },
        {
          action: RecipeStepsActions.ADD,
          ingredient: Ingredients.FOAM,
        },
        {
          action: RecipeStepsActions.MIX,
          ingredient: Ingredients.FOAM,
        },
        {
          action: RecipeStepsActions.ADD,
          ingredient: Ingredients.CINNAMON,
        },
        {
          action: RecipeStepsActions.SERVE,
        },
      ],
    },
    {
      id: "energy_smoothie",
      name: "Smoothie Energético",
      price: RecipePrice[RecipeLevel.VERY_HARD],
      level: RecipeLevel.VERY_HARD,
      steps: [
        {
          action: RecipeStepsActions.ADD,
          ingredient: Ingredients.CUP,
        },
        {
          action: RecipeStepsActions.ADD,
          ingredient: Ingredients.BANANA,
        },
        {
          action: RecipeStepsActions.ADD,
          ingredient: Ingredients.STRAWBERRY,
        },
        {
          action: RecipeStepsActions.ADD,
          ingredient: Ingredients.HONEY,
        },
        {
          action: RecipeStepsActions.ADD,
          ingredient: Ingredients.MILK,
        },
        {
          action: RecipeStepsActions.ADD,
          ingredient: Ingredients.ICE,
        },
        {
          action: RecipeStepsActions.BLEND,
        },
        {
          action: RecipeStepsActions.SERVE,
        },
      ],
    },
    {
      id: "supreme_chocolate",
      name: "Chocolate Supremo",
      price: RecipePrice[RecipeLevel.VERY_HARD],
      level: RecipeLevel.VERY_HARD,
      steps: [
        {
          action: RecipeStepsActions.ADD,
          ingredient: Ingredients.CUP,
        },
        {
          action: RecipeStepsActions.ADD,
          ingredient: Ingredients.CHOCOLATE,
        },
        {
          action: RecipeStepsActions.HEAT,
          ingredient: Ingredients.CHOCOLATE,
        },
        {
          action: RecipeStepsActions.ADD,
          ingredient: Ingredients.MILK,
        },
        {
          action: RecipeStepsActions.ADD,
          ingredient: Ingredients.CARAMEL,
        },
        {
          action: RecipeStepsActions.ADD,
          ingredient: Ingredients.WHIPPED_CREAM,
        },
        {
          action: RecipeStepsActions.ADD,
          ingredient: Ingredients.SPRINKLES,
        },
        {
          action: RecipeStepsActions.TOP,
          ingredient: Ingredients.SPRINKLES,
        },
        {
          action: RecipeStepsActions.ADD,
          ingredient: Ingredients.SYRUP,
        },
        {
          action: RecipeStepsActions.SERVE,
        },
      ],
    },
    {
      id: "berry_bubble_tea",
      name: "Bubble Tea de Frutas Vermelhas",
      price: RecipePrice[RecipeLevel.VERY_HARD],
      level: RecipeLevel.VERY_HARD,
      steps: [
        {
          action: RecipeStepsActions.ADD,
          ingredient: Ingredients.CUP,
        },
        {
          action: RecipeStepsActions.ADD,
          ingredient: Ingredients.TEA,
        },
        {
          action: RecipeStepsActions.HEAT,
          ingredient: Ingredients.TEA,
        },
        {
          action: RecipeStepsActions.ADD,
          ingredient: Ingredients.STRAWBERRY,
        },
        {
          action: RecipeStepsActions.ADD,
          ingredient: Ingredients.RASPBERRY,
        },
        {
          action: RecipeStepsActions.ADD,
          ingredient: Ingredients.TAPIOCA,
        },
        {
          action: RecipeStepsActions.ADD,
          ingredient: Ingredients.ICE,
        },
        {
          action: RecipeStepsActions.BLEND,
          ingredient: Ingredients.ICE,
        },
        {
          action: RecipeStepsActions.ADD,
          ingredient: Ingredients.HONEY,
        },
        {
          action: RecipeStepsActions.SERVE,
        },
      ],
    },
    {
      id: "house_special_coffee",
      name: "Café Especial da Casa",
      price: RecipePrice[RecipeLevel.VERY_HARD],
      level: RecipeLevel.VERY_HARD,
      steps: [
        {
          action: RecipeStepsActions.ADD,
          ingredient: Ingredients.CUP,
        },
        {
          action: RecipeStepsActions.ADD,
          ingredient: Ingredients.COFFEE,
        },
        {
          action: RecipeStepsActions.HEAT,
          ingredient: Ingredients.COFFEE,
        },
        {
          action: RecipeStepsActions.ADD,
          ingredient: Ingredients.VANILLA,
        },
        {
          action: RecipeStepsActions.ADD,
          ingredient: Ingredients.CARAMEL,
        },
        {
          action: RecipeStepsActions.ADD,
          ingredient: Ingredients.MILK,
        },
        {
          action: RecipeStepsActions.ADD,
          ingredient: Ingredients.FOAM,
        },
        {
          action: RecipeStepsActions.MIX,
          ingredient: Ingredients.FOAM,
        },
        {
          action: RecipeStepsActions.ADD,
          ingredient: Ingredients.CINNAMON,
        },
        {
          action: RecipeStepsActions.SERVE,
        },
      ],
    },
  ],
};
