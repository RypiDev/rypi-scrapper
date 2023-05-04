#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

pub mod commands;
pub mod structs;
pub mod utils;

use commands::download_gamedata;
use specta::collect_types;
use tauri_specta::ts;

fn main() {
    ts::export(collect_types![download_gamedata], "../src/tools/rusty.ts").unwrap();

    // This is useful for custom eslint, prettier overrides at the top of the file.
    /* ts::export_with_cfg_with_header(
    collect_types![download_gamedata].unwrap(),
    Default::default(),
    "../src/tools/rusty.ts",
    "/* eslint-disable */
        \n".into(),
    )
    .unwrap(); */

    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![download_gamedata])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
