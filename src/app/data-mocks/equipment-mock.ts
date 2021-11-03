import { Equipment } from "../models/equipment.model";

export class EquipmentMock{
    
    equipments: Equipment[] = [
        {
            id: 1,
            refNo: "1REF1123",
            mark: "Scott",
            model: "Addict",
            type: "ROAD_BIKE",
            isa: "BIKE"
        },
        {
            id: 2,
            refNo: "1REF1124",
            mark: "Cicli B",
            model: "Standard",
            type: "ROAD_BIKE",
            isa: "BIKE"
        },
        {
            id: 3,
            refNo: "1REF1124",
            mark: "Trek",
            model: "Madone 6.5",
            type: "ROAD_BIKE",
            isa: "BIKE"
        },
        {
            id: 4,
            refNo: "1REF1154",
            mark: "Reynolds",
            model: "Assault 50mm",
            type: "ROAD_WHEELS",
            isa: "WHEELS"
        },
        {
            id: 5,
            refNo: "1REF1152",
            mark: "Reynolds",
            model: "Assault 40mm",
            type: "ROAD_WHEELS",
            isa: "WHEELS"
        },
        {
            id: 6,
            refNo: "1REF1152",
            mark: "Reynolds",
            model: "Assault 35mm",
            type: "ROAD_WHEELS",
            isa: "WHEELS"
        },
       
    
    ]
    
}