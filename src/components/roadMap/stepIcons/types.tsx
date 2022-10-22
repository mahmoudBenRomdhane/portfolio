export interface Props {
  items: Item;
}
interface Icon {
  fill: string;
  xmlns: string;
  height: string;
  width: string;
  viewBox: string;
  path: string;
}
interface Item {
  icon: Icon;
  isNotLast: boolean;
}
