export enum RecipeStepsActions {
  ADD = "ADD",
  MIX = "MIX",
  BLEND = "BLEND",
  HEAT = "HEAT",
  TOP = "TOP",
  CLOSE = "CLOSE",
  SERVE = "SERVE",
}

export const RECIPE_STEPS_ACTION_NAMES: Record<RecipeStepsActions, string> = {
  [RecipeStepsActions.ADD]: "Adicionar",
  [RecipeStepsActions.MIX]: "Misturar",
  [RecipeStepsActions.BLEND]: "Bater",
  [RecipeStepsActions.HEAT]: "Aquecer",
  [RecipeStepsActions.TOP]: "Finalizar",
  [RecipeStepsActions.CLOSE]: "Fechar",
  [RecipeStepsActions.SERVE]: "Servir",
};
