export interface Props {
  text: string;
  id: string;
  active: boolean;
  handleNavigation: (id: string) => void;
}
