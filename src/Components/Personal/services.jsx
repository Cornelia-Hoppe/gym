import { list } from "./data";

export function getTrainer() {
  const trainerList = list;
  return trainerList;
}

export function filterTrainer(persionType) {
  let trainersPersion = getTrainer().filter(type => type.job === persionType);
  return trainersPersion;
}