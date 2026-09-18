import { Ingredients } from "./Ingredients";
import { type Recipe } from "../interfaces/Recipe";
import { RecipeStepsActions } from "./RecipeSteps";

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
