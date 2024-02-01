//import { generateRandomNumber } from "@/api/userApi";

export const buildRandomUrlImage = (id: number | undefined) => {
  const randomUrlImage = (randomGenre: string) => {
    //const randomNumber = generateRandomNumber(0, 78);
    //return `${getRandomAvatarEndPoint}/${randomGenre}/${randomNumber}.jpg`;
  };
  const determinateGenre = (id: number | undefined) =>
    id === 7 || id === 9 ? "female" : "male";
  const genre = determinateGenre(id);
  const randomUrl = randomUrlImage(genre);
  return randomUrl;
};
