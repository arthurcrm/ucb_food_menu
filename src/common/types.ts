import { IconBaseProps } from "react-icons";

export interface IFood {
  id: number;
  name: string;
  description: string;
  price: string;
  available: boolean;
  image: string;
}

export interface FoodProps {
  food: IFood;
  handleEditFood: (food: IFood) => void;
  handleDelete: (id: number) => void;
}

export interface AddFood {
  image: string;
  name: string;
  price: string;
  description: string;
}

export interface ModalAddFoodProps {
  isOpen: boolean;
  setIsOpen: () => void;
  handleAddFood: (data: AddFood) => void;
}

export interface ModalEditFoodProps {
  isOpen: boolean;
  setIsOpen: () => void;
  handleUpdateFood: (data: AddFood) => void;
  editingFood: IFood;
}

export interface FoodContainerComponent {
  available: boolean;
}

export interface HeaderProps {
  openModal: () => void;
}

export interface InputProps {
  name: string;
  placeholder?: string;
  icon?: React.ComponentType<IconBaseProps>;
}

export interface ModalProps {
  isOpen: boolean;
  children?: React.ReactNode;
  setIsOpen: () => void;
}

export interface InputContainerProps {
  isFocused: boolean;
  isFilled: boolean;
}
