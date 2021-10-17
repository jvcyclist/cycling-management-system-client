export interface IEquipment {
    id?: number,
    ref_no?: string,
    mark?: string,
    model?: string,
    type?: string,
    isa?: string
 
}

export class Equipment implements IEquipment {
    constructor(public id?: number,
                public ref_no?: string,
                public mark?: string,
                public model?: string,
                public type?: string,
                public isa?: string
    )
    {}
}