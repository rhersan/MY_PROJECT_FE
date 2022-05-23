export interface MenuItem{
    label: string;
    icon?: string;
    routerLink?: string;
    item?:Item;
}

export interface Item{
    label: string;
    icon?: string;
    routerLink?: string;
}