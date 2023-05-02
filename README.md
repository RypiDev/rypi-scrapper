# 🧿 Getting started

## 🎯 Todos

- [ ] Two options for downloading Habbo resources:
  - [ ] Default data extraction. (Without conversion)
  - [ ] Using [Scuti](https://scuti.netlify.app/) dataset for its [renderer.](https://github.com/kozennnn/scuti-renderer)
- [ ] Languages feature. (Default: EN)
- [ ] Download Habbo assets. (>800 MB of disk memory, make sure the IPC handles it correctly)
- [ ] Fix rendering animation issues.
- [ ] Add "abort" button with written data suppression feature.
- [x] Convert front-end with SolidJS
- [x] Fix issue of prettier-plugin-tailwindcss

- [ ] Export helpers/utils methods into Rust.

  - [ ] Implementing typesafety with types' collections using Tauri Specta
  - [ ] Handling extracted data in:
    - [ ] JSON (Default + Adjustements for Scuti)
    - [ ] XML (Using quickxml_to_serde)
    - [ ] TXT (no idea...)
  - [ ] Parsing data using `std::{fs::File, io::Write}`

- [ ] Avoid conflicts in open-source.
- [ ] Undertsand: Memory cache and disk cache.

## Overview

- [How it works](#🏗️-how-it-works)
- [Techs stack](#📦-techs-stack)
- [Interesting topics](#📤-interesting-topics)
- [Credits](#🤝-credits)

## 📦 Techs stack

![Rust lang](https://img.shields.io/badge/Rust-black?style=for-the-badge&logo=rust&logoColor=#E57324)
![Typescript lang](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)

![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)
![SolidJS](https://img.shields.io/badge/Solid%20JS-2C4F7C?style=for-the-badge&logo=solid&logoColor=white)
![Tailwind framework](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

## 🏗️ How it works

### Gamedata/Generic

It comes first with fetching data using the `@tauri-apps/api/http` module.
Converting uncoming data into minified JSON file formats.
(No need for avro, parquet, protobuf nor CSV for efficient data compression
and encoding schemas for fast data storing/retrieval)

## 📤 Interesting topics

### 🦀 Rust-related

- [Why serde_json crate is the best choice?](https://blog.logrocket.com/json-and-rust-why-serde_json-is-the-top-choice/)

## 🤝 Credits

This wouldn't be possible without the help of [KOZEN](https://github.com/kozennnn)'s contribution.
