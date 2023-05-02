use serde_json::Value;

use crate::structs::Converters;

pub fn debug_typeof<T>(_: &T) {
    println!("{}", std::any::type_name::<T>())
}

pub fn convert_json(data: &str, file_name: Converters) {
    let object: Value = serde_json::from_str(data).unwrap();

    println!("{}", object);

    match file_name {
        /* Converters::FurniData => {
            for (key, value) in object["wallitemtypes"]["furnitype"].as_object().unwrap() {
                println!("{}       {}", key, value);
            }
        } */
        Converters::FigureData => unimplemented!(),
        Converters::FigureMap => todo!(),
        Converters::EffectMap => todo!(),
        Converters::FurniData => todo!(),
    }
}
