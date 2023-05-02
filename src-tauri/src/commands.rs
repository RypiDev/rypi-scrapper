use quickxml_to_serde::{xml_string_to_json, Config, NullValue};
use specta::specta;

use crate::{
    structs::{ConvertTypes, GamedataEndpoints},
    utils::convert_json,
};

#[specta]
#[tauri::command]
pub fn download_gamedata(data: &str, endpoint: GamedataEndpoints) {
    match endpoint.convert {
        ConvertTypes::XML => {
            let conf = Config::new_with_custom_values(true, "", "txt", NullValue::Null);
            let json = xml_string_to_json(data.to_owned(), &conf);

            println!("{}", json.expect("Malformed XML").to_string());
        }

        ConvertTypes::TXT => println!("TXT CONVERTION"),
        ConvertTypes::JSON => convert_json(data, endpoint.file_name),
    }
}

/* #[specta]
#[tauri::command]
pub fn parse_data(
    path: String,
    file_name: String,
    file_content: String,
) -> Result<(), Box<dyn std::error::Error>> {
    let file_dir = PathBuf::from(&path).join(format!("{}.json", file_name));

    // By default, output files will be overwritten. I cannot recursively remove the entire output folder
    // and create it again because it just won't parse files' contents for some reason
    if !exists(&Convertion::gamedata_dir()) {
        create_dir_all(&Convertion::gamedata_dir())?;
    }

    write_file(&file_dir, file_content.as_bytes());

    Ok(())
} */

/* pub async fn convert_txt(path: &str, data: &str) -> Result<(), Box<dyn std::error::Error>> {
    let mut badges: Vec<Badge> = Vec::new();

    let lines: Vec<&str> = data.split('\n').collect();

    let badge_pattern = Regex::new(r"^badge_(?:name|desc)_([^=]+)").unwrap();
    let description_pattern = Regex::new(r"^badge_desc_(\s*\w+)").unwrap();
    let name_pattern = Regex::new(r"^badge_name_(\s*\w+)").unwrap();

    for (index, line) in lines.iter().enumerate() {
        let parts: Vec<&str> = line.split('=').collect();

        if parts.len() < 2 {
            continue;
        }

        let key = parts[0];
        let value = parts[1];

        if badge_pattern.is_match(key) {
            if name_pattern.is_match(key) {
                let badge_code = name_pattern.captures(key).unwrap()[1].to_owned();
                let existing_badge = badges.iter_mut().find(|badge| badge.code == badge_code);

                if let Some(badge) = existing_badge {
                    badge.name = Some(value.to_owned());
                } else {
                    badges.push(Badge {
                        code: badge_code,
                        name: Some(value.to_owned()),
                        description: None,
                    });
                }
            } else if description_pattern.is_match(key) {
                let badge_code = description_pattern.captures(key).unwrap()[1].to_owned();
                let existing_badge = badges.iter_mut().find(|badge| badge.code == badge_code);

                if let Some(badge) = existing_badge {
                    badge.description = Some(value.to_owned());
                } else {
                    badges.push(Badge {
                        code: badge_code,
                        name: None,
                        description: Some(value.to_owned()),
                    });
                }
            }

            // Remove the line from the vector
            lines[index] = "";
        }
    }

    // Remove empty lines
    let lines: Vec<&str> = lines
        .iter()
        .filter(|line| !line.is_empty())
        .cloned()
        .collect();

    parse_habbo_data(path, "Badges", &badges);

    Ok(())
} */
