import { InjectionToken } from "@angular/core";


export interface Config {
    customerLimit: number,
    apiUrl: string
}

export const CONFIG = new InjectionToken<Config>('app.config')
//injectionToken jest nam potrzebny aby podany w providers Config był dostępny po stworzeniu obiektu
// gdyby tego nie było, wówczas Config jako interface byłby dostępny tylko po stworzeniu obiektu a później już nie 
// tworzymy instancję tokena o typie generycznym w trójkątnych nawiasach podajemy to co ten typ generyczny oznacza tym razem jest to Config
// w nawiasie () podajemy napis który będzie jednoznaczenie identyfikował ten token