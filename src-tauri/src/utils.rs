use serde_json::Value;

use crate::structs::{Converters, FurniData, IFloorItem, IFurni};

pub fn debug_typeof<T>(_: &T) {
    println!("{}", std::any::type_name::<T>())
}

pub fn convert_json(data: &str, file_name: Converters) {
    let object: Value = serde_json::from_str(data).unwrap();

    match file_name {
        Converters::FurniData => {
            let mut data = FurniData {
                floor_items: Vec::new(),
                wall_items: Vec::new(),
            };

            let floor_items_result: Result<_, Vec<IFloorItem>> =
                Ok(serde_json::from_value::<Vec<IFloorItem>>(
                    object["wallitemtypes"]["furnitype"].clone(),
                ));

            let wall_items_result: Result<_, Vec<IFurni>> = Ok(
                serde_json::from_value::<Vec<IFurni>>(object["roomitemtypes"]["furnitype"].clone()),
            );

            // Handle the floor_items_result and wall_items_result appropriately
            match (floor_items_result, wall_items_result) {
                (Ok(floor_items), Ok(wall_items)) => {
                    while let Ok(ref value) = wall_items {
                        println!("{:?}", value);
                    }
                    while let Ok(ref value) = floor_items {
                        println!("{:?}", value);
                    }
                }
                (Err(e), _) => {
                    println!("Error deserializing floor items: {:?}", e);
                }
                (_, Err(e)) => {
                    println!("Error deserializing wall items: {:?}", e);
                }
            }

            // loop through each key value pairs (make sure your handle null exceptions)
            // parse the data to the global variable above
            //
        }
        Converters::FigureData => {}
        Converters::FigureMap => {}
        Converters::EffectMap => {}
    }
}
