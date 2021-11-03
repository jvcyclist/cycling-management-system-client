export interface IAddress {
    id?: number,
    street?: string,
    buildingNumber?: string,
    city? : string,
    postalCode?: string,
    voivodeship?: string

}

export class Address implements IAddress {
    constructor(public id?: number,
                public street?: string,
                public buildingNumber?: string,
                public city?: string,
                public postalCode?: string,
                public voivodeship?: string
    )
    {}
}