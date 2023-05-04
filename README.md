# 🧿 Getting started

## 🎯 Todos

- [ ] Two options for downloading Habbo resources:
  - [ ] Default data extraction. (Without conversion)
  - [ ] Using [Scuti](https://scuti.netlify.app/) dataset for its [renderer.](https://github.com/kozennnn/scuti-renderer)
- [x] Languages feature. (Default: EN)
- [ ] Download Habbo assets. (>800 MB of disk memory, make sure the IPC handles it correctly)
- [x] Fix rendering animation issues.
- [ ] Add "abort" button with data suppression feature.
- [x] Convert front-end with SolidJS
- [x] Fix issue of prettier-plugin-tailwindcss

- [ ] Export helpers/utils methods into Rust:

  - [ ] Implementing typesafety with types' collections using Tauri Specta
  - [ ] Handling extracted data in:
    - [ ] JSON (Default + Adjustements for Scuti)
    - [ ] XML (Using quickxml_to_serde)
    - [ ] TXT (no idea...)
  - [ ] Parsing data using `std::{fs::File, io::Write}`

- [ ] Learning Rust:

  - [ ] Getting to know about vectors in depth.

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

![Tauri](https://img.shields.io/badge/tauri-%2324C8DB.svg?style=for-the-badge&logo=tauri&logoColor=%23FFFFFF)
![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)
![SolidJS](https://img.shields.io/badge/SolidJS-2c4f7c?style=for-the-badge&logo=solid&logoColor=c8c9cb)
![Tailwind framework](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

![Eslint linter](https://img.shields.io/badge/eslint-3A33D1?style=for-the-badge&logo=eslint&logoColor=white)
![Prettier formatter](https://img.shields.io/badge/prettier-1A2C34?style=for-the-badge&logo=prettier&logoColor=F7BA3E)

## 🏗️ How it works

### Gamedata/Generic

It comes first with fetching data using the `@tauri-apps/api/http` module.
Converting uncoming data into minified JSON file formats.
(No need for avro, parquet, protobuf nor CSV for efficient data compression
and encoding schemas for fast data storing/retrieval)

## 📤 Interesting topics

### 🦀 Rust-related

- [Why serde_json crate is the best choice?](https://blog.logrocket.com/json-and-rust-why-serde_json-is-the-top-choice/)

### Misc

```shell
npx cloc . \
    --exclude-dir=target,_site,node_modules \
    --not-match-f=pnpm-lock.yaml
```

```shell
-------------------------------------------------------------------------------
Language                     files          blank        comment           code
-------------------------------------------------------------------------------
TypeScript                      43            158             19            855
JSON                             6              0              0            138
Rust                             5             39             81             83
Markdown                         1             19              0             45
CSS                              2              4              0             30
TOML                             1              5              2             27
SVG                              1              0              0             24
JavaScript                       3              0              1             23
HTML                             1              2              0             11
-------------------------------------------------------------------------------
SUM:                            63            227            103           1236
-------------------------------------------------------------------------------
```

## 🤝 Credits

This wouldn't be possible without [KOZEN](https://github.com/kozennnn)'s help and bare bones the
