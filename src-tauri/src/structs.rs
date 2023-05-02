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

pub struct FigureData {
    pub floor_items: Vec<IFloorItem>,
    pub wall_items: Vec<IFurni>,
}

pub struct IFloorItem {}

pub struct IFurni {}
