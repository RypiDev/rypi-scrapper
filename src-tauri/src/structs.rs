use serde::{Deserialize, Serialize};
use specta::Type;

/* pub struct Badge {
    pub code: String,
    pub name: Option<String>,
    pub description: Option<String>,
} */

#[derive(Serialize, Deserialize, Type, Debug)]
pub enum ConvertTypes {
    TXT,
    XML,
    JSON,
}

#[derive(Serialize, Deserialize, Type, Debug)]
pub enum Converters {
    FigureData,
    FigureMap,
    EffectMap,
    FurniData,
}

#[derive(Serialize, Deserialize, Type, Debug)]
pub struct GamedataEndpoints {
    pub src: String,
    pub convert: ConvertTypes,
    pub file_name: Converters,
}

#[derive(Serialize, Deserialize, Type, Debug)]
pub struct FurniData {
    pub floor_items: Vec<IFloorItem>,
    pub wall_items: Vec<IFurni>,
}

#[derive(Serialize, Deserialize, Type, Debug)]
pub struct IFloorItem {
    dimensions: IFloorItemDimensions,
    permissions: IFloorItemPermissions,
}

#[derive(Serialize, Deserialize, Type, Debug)]
pub struct IFloorItemDimensions {
    x: i32,
    y: i32,
    default_direction: i32,
}

#[derive(Serialize, Deserialize, Type, Debug)]
pub struct IFloorItemPermissions {
    can_sit_on: bool,
    can_lay_on: bool,
    can_stand_on: bool,
}

#[derive(Serialize, Deserialize, Type, Debug)]
pub struct IFurni {
    id: i32,
    classname: String,
    description: Option<String>,
    name: Option<String>,
    furni_line: Option<String>,
    custom_params: Option<String>,
    adurl: Option<String>,
    offer_id: Option<i32>,
    exclude_dynamic: bool,
    special_type: i32,
}
