import { deleteObject, ref } from "firebase/storage";
import { storage } from "../config/firebase.config";

export const filters = [
  { id: 2, name: "English", value: "english" },
  { id: 3, name: "Kannada", value: "kannada" },
  { id: 4, name: "Hindi", value: "hindi" },
  { id: 5, name: "Punjabi", value: "punjabi" },
  { id: 6, name: "Rock", value: "rock"}

];

export const filterByLanguage = [
  { id: 1, name: "English", value: "english" },
  { id: 2, name: "Hindi", value: "hindi" },
  { id: 3, name: "Punjabi", value: "punjabi" },
  { id: 4, name: "Tamil", value: "tamil" },
  { id: 5, name: "Kannada", value: "kannada" },
  { id: 6, name: "Malayalam", value: "malayalam" },
];

export const deleteAnObject = (referenceUrl) => {
  const deleteRef = ref(storage, referenceUrl);
  deleteObject(deleteRef)
    .then(() => {
      return true;
    })
    .catch((error) => {
      return false;
    });
};
