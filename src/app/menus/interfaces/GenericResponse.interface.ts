
export interface GenericResponse {
    data:           Producto[];
    systemCode:     number;
    totalRows:      number;
    systemCodeName: string;
    message:        string;
    fields:         null;
}

export interface Producto {
    id:          string;
    product:     string;
    ingredients: string;
    weight:      number;
    calories:    number;
    price:       number;
    idCategory:  number;
    imgSrc:      string;
    quantity?:   number;
    status:      number;
}
