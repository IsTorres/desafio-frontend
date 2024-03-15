import { Comic } from "../types/Comic";

export const addSpaces = (str: string) => {
  let novaString = "";
  for (let i = 0; i < str.length; i++) {
    // Verifica se o caractere atual é uma letra maiúscula
    if (str[i] === str[i].toUpperCase() && str[i] !== " ") {
      // Adiciona um espaço antes da letra maiúscula
      novaString += " ";
    }
    novaString += str[i];
  }
  return novaString;
};

export const comicCoverImg = (comic: Comic) =>
  `${comic.thumbnail.path}.${comic.thumbnail.extension}`;
