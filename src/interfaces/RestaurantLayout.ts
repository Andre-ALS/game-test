export interface RestaurantTile {
  x: number;
  y: number;
  // it can be an Equipment or a Furniture
  objectId: string;
}

export interface RestaurantLayout {
  width: number;
  height: number;
  tiles: RestaurantTile[];
}
