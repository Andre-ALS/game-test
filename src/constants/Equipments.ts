import cupStationIcon from "../assets/equipments/cup_station.png";
import coffeeStationIcon from "../assets/equipments/coffee_station.png";
import teaStationIcon from "../assets/equipments/tea_station.png";
import waterStationIcon from "../assets/equipments/water_station.png";
import milkStationIcon from "../assets/equipments/milk_station.png";
import sodaStationIcon from "../assets/equipments/soda_station.png";
import juiceStationIcon from "../assets/equipments/juice_station.png";
import chocolateStationIcon from "../assets/equipments/chocolate_station.png";
import iceStationIcon from "../assets/equipments/ice_station.png";
import preparationStationIcon from "../assets/equipments/preparation_station.png";
import mixerIcon from "../assets/equipments/mixer.png";
import blenderIcon from "../assets/equipments/blender.png";
import heatingStationIcon from "../assets/equipments/heating_station.png";
import toppingStationIcon from "../assets/equipments/topping_station.png";
import cupSealerIcon from "../assets/equipments/cup_sealer.png";
import servingCounterIcon from "../assets/equipments/serving_counter.png";
import trashBinIcon from "../assets/equipments/trash_bin.png";
import { OBJ_TILE_BOTTOM_OFFSET } from "./layout";
import type { EquipmentImageProperties } from "../interfaces/Equipment";

export enum Equipments {
  CUP_STATION = "cup_station",
  COFFEE_STATION = "coffee_station",
  TEA_STATION = "tea_station",
  WATER_STATION = "water_station",
  MILK_STATION = "milk_station",
  SODA_STATION = "soda_station",
  JUICE_STATION = "juice_station",
  CHOCOLATE_STATION = "chocolate_station",
  ICE_STATION = "ice_station",
  PREPARATION_STATION = "preparation_station",
  MIXER = "mixer",
  BLENDER = "blender",
  HEATING_STATION = "heating_station",
  TOPPING_STATION = "topping_station",
  CUP_SEALER = "cup_sealer",
  SERVING_COUNTER = "serving_counter",
  TRASH_BIN = "trash_bin",
}

// Max 9 characters
export const EQUIPMENT_NAMES: Record<Equipments, string> = {
  [Equipments.CUP_STATION]: "Copos",
  [Equipments.COFFEE_STATION]: "Café",
  [Equipments.TEA_STATION]: "Chá",
  [Equipments.WATER_STATION]: "Água",
  [Equipments.MILK_STATION]: "Leite",
  [Equipments.SODA_STATION]: "Refri",
  [Equipments.JUICE_STATION]: "Suco",
  [Equipments.CHOCOLATE_STATION]: "Cocoa",
  [Equipments.ICE_STATION]: "Gelo",
  [Equipments.PREPARATION_STATION]: "Preparo",
  [Equipments.MIXER]: "Mixer",
  [Equipments.BLENDER]: "Blender",
  [Equipments.HEATING_STATION]: "Aquecer",
  [Equipments.TOPPING_STATION]: "Cobertura",
  [Equipments.CUP_SEALER]: "Selador",
  [Equipments.SERVING_COUNTER]: "Servir",
  [Equipments.TRASH_BIN]: "Lixo",
};

/**
 * How many tiles each equipment occupies.
 * 1 = one item per cell (adjacent copies are separate).
 * N>1 = a straight 1×N row or N×1 column; leftovers become floor.
 */
export const EQUIPMENT_FOOTPRINT: Record<Equipments, number> = {
  [Equipments.CUP_STATION]: 2,
  [Equipments.COFFEE_STATION]: 1,
  [Equipments.TEA_STATION]: 1,
  [Equipments.WATER_STATION]: 1,
  [Equipments.MILK_STATION]: 1,
  [Equipments.SODA_STATION]: 1,
  [Equipments.JUICE_STATION]: 1,
  [Equipments.CHOCOLATE_STATION]: 1,
  [Equipments.ICE_STATION]: 1,
  [Equipments.PREPARATION_STATION]: 2,
  [Equipments.MIXER]: 1,
  [Equipments.BLENDER]: 1,
  [Equipments.HEATING_STATION]: 1,
  [Equipments.TOPPING_STATION]: 2,
  [Equipments.CUP_SEALER]: 1,
  [Equipments.SERVING_COUNTER]: 2,
  [Equipments.TRASH_BIN]: 1,
};

export const EQUIPMENT_ICONS: Record<Equipments, EquipmentImageProperties> = {
  [Equipments.CUP_STATION]: {
    src: cupStationIcon,
    alt: EQUIPMENT_NAMES[Equipments.CUP_STATION],
    orientations: {
      horizontal: { width: 76, height: 45, bottom: OBJ_TILE_BOTTOM_OFFSET, left: 1.5 },
      vertical: { width: 45, height: 86, bottom: OBJ_TILE_BOTTOM_OFFSET, left: -2 },
    },
  },
  [Equipments.COFFEE_STATION]: {
    src: coffeeStationIcon,
    alt: EQUIPMENT_NAMES[Equipments.COFFEE_STATION],
    orientations: {
      single: { width: 38, height: 48, bottom: OBJ_TILE_BOTTOM_OFFSET, left: 0.5 },
    },
  },
  [Equipments.TEA_STATION]: {
    src: teaStationIcon,
    alt: EQUIPMENT_NAMES[Equipments.TEA_STATION],
    orientations: {
      single: { width: 38, height: 40, bottom: OBJ_TILE_BOTTOM_OFFSET, left: 0.5 },
    },
  },
  [Equipments.WATER_STATION]: {
    src: waterStationIcon,
    alt: EQUIPMENT_NAMES[Equipments.WATER_STATION],
    orientations: {
      single: { width: 38, height: 44, bottom: OBJ_TILE_BOTTOM_OFFSET, left: 0.5 },
    },
  },
  [Equipments.MILK_STATION]: {
    src: milkStationIcon,
    alt: EQUIPMENT_NAMES[Equipments.MILK_STATION],
    orientations: {
      single: { width: 38, height: 44, bottom: OBJ_TILE_BOTTOM_OFFSET, left: 0.5 },
    },
  },
  [Equipments.SODA_STATION]: {
    src: sodaStationIcon,
    alt: EQUIPMENT_NAMES[Equipments.SODA_STATION],
    orientations: {
      single: { width: 38, height: 44, bottom: OBJ_TILE_BOTTOM_OFFSET, left: 0.5 },
    },
  },
  [Equipments.JUICE_STATION]: {
    src: juiceStationIcon,
    alt: EQUIPMENT_NAMES[Equipments.JUICE_STATION],
    orientations: {
      single: { width: 38, height: 44, bottom: OBJ_TILE_BOTTOM_OFFSET, left: 0.5 },
    },
  },
  [Equipments.CHOCOLATE_STATION]: {
    src: chocolateStationIcon,
    alt: EQUIPMENT_NAMES[Equipments.CHOCOLATE_STATION],
    orientations: {
      single: { width: 38, height: 44, bottom: OBJ_TILE_BOTTOM_OFFSET, left: 0.5 },
    },
  },
  [Equipments.ICE_STATION]: {
    src: iceStationIcon,
    alt: EQUIPMENT_NAMES[Equipments.ICE_STATION],
    orientations: {
      single: { width: 38, height: 32, bottom: OBJ_TILE_BOTTOM_OFFSET, left: 0.5 },
    },
  },
  [Equipments.PREPARATION_STATION]: {
    src: preparationStationIcon,
    alt: EQUIPMENT_NAMES[Equipments.PREPARATION_STATION],
    orientations: {
      horizontal: { width: 78, height: 42, bottom: OBJ_TILE_BOTTOM_OFFSET, left: 1 },
      vertical: { width: 45, height: 86, bottom: OBJ_TILE_BOTTOM_OFFSET, left: -2 },
    },
  },
  [Equipments.MIXER]: {
    src: mixerIcon,
    alt: EQUIPMENT_NAMES[Equipments.MIXER],
    orientations: {
      single: { width: 38, height: 44, bottom: OBJ_TILE_BOTTOM_OFFSET, left: 0.5 },
    },
  },
  [Equipments.BLENDER]: {
    src: blenderIcon,
    alt: EQUIPMENT_NAMES[Equipments.BLENDER],
    orientations: {
      single: { width: 38, height: 48, bottom: OBJ_TILE_BOTTOM_OFFSET, left: 0.5 },
    },
  },
  [Equipments.HEATING_STATION]: {
    src: heatingStationIcon,
    alt: EQUIPMENT_NAMES[Equipments.HEATING_STATION],
    orientations: {
      single: { width: 38, height: 38, bottom: OBJ_TILE_BOTTOM_OFFSET, left: 1 },
    },
  },
  [Equipments.TOPPING_STATION]: {
    src: toppingStationIcon,
    alt: EQUIPMENT_NAMES[Equipments.TOPPING_STATION],
    orientations: {
      horizontal: { width: 78, height: 40, bottom: OBJ_TILE_BOTTOM_OFFSET, left: 0.5 },
      vertical: { width: 45, height: 86, bottom: OBJ_TILE_BOTTOM_OFFSET, left: -2 },
    },
  },
  [Equipments.CUP_SEALER]: {
    src: cupSealerIcon,
    alt: EQUIPMENT_NAMES[Equipments.CUP_SEALER],
    orientations: {
      single: { width: 38, height: 48, bottom: OBJ_TILE_BOTTOM_OFFSET, left: 0.5 },
    },
  },
  [Equipments.SERVING_COUNTER]: {
    src: servingCounterIcon,
    alt: EQUIPMENT_NAMES[Equipments.SERVING_COUNTER],
    orientations: {
      horizontal: { width: 78, height: 45, bottom: OBJ_TILE_BOTTOM_OFFSET, left: 0.5 },
      vertical: { width: 45, height: 86, bottom: OBJ_TILE_BOTTOM_OFFSET, left: -2 },
    },
  },
  [Equipments.TRASH_BIN]: {
    src: trashBinIcon,
    alt: EQUIPMENT_NAMES[Equipments.TRASH_BIN],
    orientations: {
      single: { width: 38, height: 42, bottom: OBJ_TILE_BOTTOM_OFFSET, left: 0.5 },
    },
  },
};
