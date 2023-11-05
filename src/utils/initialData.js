import { dict } from "./dict";
const initialData = () => {
  const { nameOfData } = dict;
  if (localStorage.getItem(nameOfData)) {
    return;
  }
  const users = [];
  localStorage.setItem(nameOfData, JSON.stringify(users));
};
export default initialData;
