// To parse this data:
//
//   import { Convert, Filter } from "./file";
//
//   const filter = Convert.toFilter(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

export interface Filter {
    skip:         number;
    limit:        number;
    sortProperty: string;
    typeSort:     string;
    search:       string;
    data?:         Data;
}

export interface Data {
    id:          string;
    product:     string;
    ingredients: string;
    weight:      number;
    calories:    number;
    price:       number;    
    idCategory:  number;
    status:      number;
}

