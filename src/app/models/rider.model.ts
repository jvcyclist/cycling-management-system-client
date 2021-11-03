import { Achievement } from "./achievement.model";
import { Address } from "./address.model";
import { Category } from "./category.model";
import { MedicalCard } from "./medical-card.model";

export interface IRider {
    id?: number,
    firstName?: string,
    lastName?: string,
    gender?: string,
    licenseNo?: string,
    category?: Category,
    address?: Address,
    achievements?: Achievement[],
    medicalCards?: MedicalCard[]
 
}

export class Rider implements IRider {
    constructor(public id?: number,
                public firstName?: string,
                public lastName?: string,
                public gender?: string,
                public licenseNo?: string,
                public category?: Category,
                public address?: Address,
                public achievements?: Achievement[],
                public medicalCards?: MedicalCard[]
    )
    {}
}