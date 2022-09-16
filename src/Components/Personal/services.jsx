import { list } from "./data";

export function getTrainer() {
  const pokemonList = list;
  return pokemonList;
}

export function filterTrainer(persionType) {
  let trainersPersion = getTrainer().filter(type => type.job === persionType);
  return trainersPersion;
}
