import { Equipments } from "./Equipments";
import { Ingredients } from "./Ingredients";
import type { RecipeStepsActions } from "./RecipeSteps";

export const INGREDIENT_OPERATIONS: Record<
  Ingredients,
  Partial<Record<RecipeStepsActions, Equipments[]>>
> = {
  [Ingredients.CUP]: {
    ADD: [Equipments.PREPARATION_STATION],
  },
  [Ingredients.COFFEE]: {
    ADD: [Equipments.PREPARATION_STATION],
    HEAT: [Equipments.HEATING_STATION],
  },
  [Ingredients.LID]: {
    ADD: [Equipments.PREPARATION_STATION],
    CLOSE: [Equipments.CUP_SEALER],
  },
  [Ingredients.TEA]: {
    ADD: [Equipments.PREPARATION_STATION],
    HEAT: [Equipments.HEATING_STATION],
  },
  [Ingredients.ICE]: {
    ADD: [Equipments.PREPARATION_STATION],
    BLEND: [Equipments.BLENDER],
  },
  [Ingredients.WATER]: {
    ADD: [Equipments.PREPARATION_STATION],
    HEAT: [Equipments.HEATING_STATION],
  },
  [Ingredients.LEMON]: {
    ADD: [Equipments.PREPARATION_STATION],
    MIX: [Equipments.MIXER],
    TOP: [Equipments.TOPPING_STATION],
  },
  [Ingredients.ORANGE_JUICE]: {
    ADD: [Equipments.PREPARATION_STATION],
    MIX: [Equipments.MIXER],
  },
  [Ingredients.MILK]: {
    ADD: [Equipments.PREPARATION_STATION],
    MIX: [Equipments.MIXER],
    BLEND: [Equipments.BLENDER],
  },
  [Ingredients.CHOCOLATE]: {
    ADD: [Equipments.PREPARATION_STATION],
    MIX: [Equipments.MIXER],
    HEAT: [Equipments.HEATING_STATION],
    TOP: [Equipments.TOPPING_STATION],
  },
  [Ingredients.ICE_CREAM]: {
    ADD: [Equipments.PREPARATION_STATION],
    BLEND: [Equipments.BLENDER],
    TOP: [Equipments.TOPPING_STATION],
  },
  [Ingredients.SODA]: {
    ADD: [Equipments.PREPARATION_STATION],
    MIX: [Equipments.MIXER],
  },
  [Ingredients.HONEY]: {
    ADD: [Equipments.PREPARATION_STATION],
    MIX: [Equipments.MIXER],
    TOP: [Equipments.TOPPING_STATION],
  },
  [Ingredients.SUGAR]: {
    ADD: [Equipments.PREPARATION_STATION],
    MIX: [Equipments.MIXER],
    HEAT: [Equipments.HEATING_STATION],
  },
  [Ingredients.STRAWBERRY]: {
    ADD: [Equipments.PREPARATION_STATION],
    MIX: [Equipments.MIXER],
    BLEND: [Equipments.BLENDER],
    TOP: [Equipments.TOPPING_STATION],
  },
  [Ingredients.FOAM]: {
    ADD: [Equipments.PREPARATION_STATION],
    MIX: [Equipments.MIXER],
    TOP: [Equipments.TOPPING_STATION],
  },
  [Ingredients.PEACH]: {
    ADD: [Equipments.PREPARATION_STATION],
    MIX: [Equipments.MIXER],
    BLEND: [Equipments.BLENDER],
    TOP: [Equipments.TOPPING_STATION],
  },
  [Ingredients.VANILLA]: {
    ADD: [Equipments.PREPARATION_STATION],
    MIX: [Equipments.MIXER],
    TOP: [Equipments.TOPPING_STATION],
  },
  [Ingredients.TAPIOCA]: {
    ADD: [Equipments.PREPARATION_STATION],
    HEAT: [Equipments.HEATING_STATION],
    TOP: [Equipments.TOPPING_STATION],
  },
  [Ingredients.CINNAMON]: {
    ADD: [Equipments.PREPARATION_STATION],
    TOP: [Equipments.TOPPING_STATION],
  },
  [Ingredients.BANANA]: {
    ADD: [Equipments.PREPARATION_STATION],
    MIX: [Equipments.MIXER],
    BLEND: [Equipments.BLENDER],
    TOP: [Equipments.TOPPING_STATION],
  },
  [Ingredients.WHIPPED_CREAM]: {
    ADD: [Equipments.PREPARATION_STATION],
    TOP: [Equipments.TOPPING_STATION],
  },
  [Ingredients.SPRINKLES]: {
    ADD: [Equipments.PREPARATION_STATION],
    TOP: [Equipments.TOPPING_STATION],
  },
  [Ingredients.CARAMEL]: {
    ADD: [Equipments.PREPARATION_STATION],
    MIX: [Equipments.MIXER],
    HEAT: [Equipments.HEATING_STATION],
    TOP: [Equipments.TOPPING_STATION],
  },
  [Ingredients.MANGO]: {
    ADD: [Equipments.PREPARATION_STATION],
    MIX: [Equipments.MIXER],
    BLEND: [Equipments.BLENDER],
    TOP: [Equipments.TOPPING_STATION],
  },
  [Ingredients.PASSION_FRUIT]: {
    ADD: [Equipments.PREPARATION_STATION],
    MIX: [Equipments.MIXER],
    BLEND: [Equipments.BLENDER],
    TOP: [Equipments.TOPPING_STATION],
  },
  [Ingredients.COOKIE]: {
    ADD: [Equipments.PREPARATION_STATION],
    BLEND: [Equipments.BLENDER],
    TOP: [Equipments.TOPPING_STATION],
  },
  [Ingredients.RASPBERRY]: {
    ADD: [Equipments.PREPARATION_STATION],
    MIX: [Equipments.MIXER],
    BLEND: [Equipments.BLENDER],
    TOP: [Equipments.TOPPING_STATION],
  },
  [Ingredients.SYRUP]: {
    ADD: [Equipments.PREPARATION_STATION],
    MIX: [Equipments.MIXER],
    TOP: [Equipments.TOPPING_STATION],
  },
};
