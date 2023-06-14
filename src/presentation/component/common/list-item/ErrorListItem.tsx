import { ListItemProps } from "./ListItem";

export type ErrorListItemProps = ListItemProps & {
    onRetry: () => void;
    mesage: string
};

export default () => {

};