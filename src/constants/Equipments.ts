export enum Equipments {
  PREPARATION_STATION = "preparation_station",
  MIXER = "mixer",
  BLENDER = "blender",
  HEATING_STATION = "heating_station",
  TOPPING_STATION = "topping_station",
  CUP_SEALER = "cup_sealer",
  SERVING_COUNTER = "serving_counter",
}

export const EQUIPMENTS_NAMES: Record<Equipments, string> = {
  [Equipments.PREPARATION_STATION]: "Estação de preparo",
  [Equipments.MIXER]: "Misturador",
  [Equipments.BLENDER]: "Liquidificador",
  [Equipments.HEATING_STATION]: "Estação de aquecimento",
  [Equipments.TOPPING_STATION]: "Estação de cobertura",
  [Equipments.CUP_SEALER]: "Seladora de copos",
  [Equipments.SERVING_COUNTER]: "Balcão de atendimento",
};
