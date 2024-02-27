import type { Favorite } from "./data-model";

export type FavoriteFormData = Pick<Favorite, "blurb"|"path"|"type">;