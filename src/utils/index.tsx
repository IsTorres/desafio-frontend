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

export const myState: { id: number; qtd: number; price: number }[] = JSON.parse(
  localStorage.getItem("myState") || "{}",
);

export function getMonths() {
  const months = [];
  for (let i = 1; i <= 12; i++) {
    months.push(String(i).padStart(2, "0"));
  }

  return months;
}

export function getYears() {
  const years = [];
  for (let i = 2023; i <= 2050; i++) {
    years.push(String(i).padStart(2, "0"));
  }

  return years;
}

export const cardPlaceholder = {
  cardNumber: "0000-0000-0000-0000",
  cardHolder: "XXXXX XXXXX XXXXX",
  cvv: "000",
  expiresMonth: "00",
  expiresYear: "00",
};
