import { Ipayer } from './ipayer';


export interface Iactivity 
{
    "id"?: number,
    "idGroup": number, 
    "name": string,
    "amount": number,
    "type"?: boolean,
    "date": string,
    "idPayer"?: number; 
}
