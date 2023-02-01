---
layout: page
title: Help&#58; Langcodes
---
<div id="searchtool"  style="margin: 20px; border: 1px solid gray">
  <h2> Langcode Search Tool </h2>
  Search langcodes fast! <br> <br>

  Input a langcode or language name: <input id="search">
  <button type="button" onclick="search()">Search</button>

  <br> <br> <div id="output"></div>
  
  <script src="langcodes.js"></script>
</div>  
  
  
**Langcodes** are a system invented by me to indicate various languages in my constructed world. Here's an example:

<img src="https://sidlangs.com/assets/langcode-demo.svg" width="500" />

As you can see, a langcode has 3 parts. The first, a period, is a *relative* marker of a language's history. Below are some periods:

 * Modern Period: m-
 * Middle Period: d-
 * Classical Period: c-
 * Archaic Period: a-
 * Old Period: o-
 * Protolanguage Period: p-

Again, these prefixes are relative. The English language might have periods looking like this (I've reserved ENG as an identifier for English because of translator purposes):

 * pGER: Proto-West-Germanic (4th-5th centuries)
 * oENG: Anglo-Saxon (7th-10th centuries)
 * aENG: Nonexistent, because we don't need it!
 * cENG: Anglo-Saxon, after Norman invasion (11th-13th centuries)
 * dENG: Later Middle English (14th-16th centuries)
 * mENG: [Modern English](https://www.youtube.com/watch?v=LuN6gs0AJls) (16th-21st centuries)

| ID    | Language Name      | Status | Modern | Middle | Classical | Archaic | Old | Proto |
|:-----:|--------------------|--------|:------:|:------:|:---------:|:-------:|:---:|:-----:|
| `AAR` | Aarnor Iirisis     |        |        |        |           |         |     |       |
| `AED` | Aeð̣rhu             |        | -      | -      | -         | -       |     |       |
| `ALQ` | ǂàliq              |        |        |        |           |         |     |       |
| `AZE` | Azent Čel          |        |        |        |           |         |     |       |
| `BEN` | Bęn̥p̚olxúú          |        |        |        |           |         |     |       |
| `BIM` | Bim                |        |        |        |           |         |     |       |
| `CAD` | Ćadj               |        |        |        |           |         |     |       |
| `CIY` | Ciyig              |        |        |        |           |         |     |       |
| `CYT` | cʎt’eel’tl         |        |        |        |           |         |     |       |
| `DHI` | Dhir Tokktoi       |        |        |        |           |         |     |       |
| `DYR` | Dhyrüṃƞ̤            |        |        |        |           |         |     |       |
| `DJE` | Djei               |        |        |        |           |         |     |       |
| `DWA` | Dwańni             |        |        |        |           |         |     |       |
| `EAI` | Eaïyyᵫ             |        |        |        |           |         |     |       |
| `EGN` | Égnèkhʷà           |        |        |        |           |         |     |       |
| `ENG` | [ENGLISH]          |        |        |        |           |         |     |       |
| `FRS` | Frísú              |        |        |        |           |         |     |       |
| `GEN` | Bhom Gëndœ         |        |        |        |           |         |     |       |
| `GYL` | Gylhevř            |        |        |        |           |         |     |       |
| `HAL` | Hali               |        |        |        |           |         |     |       |
| `HHX` | Ɦhŏxekh’on ʕlajrhh |        |        |        |           |         |     |       |
| `HTY` | Ƕiꝧyãp             |        |        |        |           |         |     |       |
| `IAR` | Îär Tôr            |        |        |        |           |         |     |       |
| `IKT` | Iktør              |        |        |        |           |         |     |       |
| `JER` | Jʻẹr               |        |        |        |           |         |     |       |
| `JIL` | Jilkha             |        |        |        |           |         |     |       |
| `KAS` | Kas                |        |        |        |           |         |     |       |
| `KHO` | Khơlīvh Ɯr         |        |        |        |           |         |     |       |
| `KPU` | Kpəré              |        |        |        |           |         |     |       |
| `LAT` | ʔlat'ûl            |        |        |        |           |         |     |       |
| `LES` | Leſitàli           |        |        |        |           |         |     |       |
| `LIB` | Llibcinist’iiallib |        |        |        |           |         |     |       |
| `MAE` | Maërnü             |        |        |        |           |         |     |       |
| `MBA` | mBasaaric          |        |        |        |           |         |     |       |
| `NGO` | Ngørja Senrøbaki   |        |        |        |           |         |     |       |
| `NME` | Nmem               |        |        |        |           |         |     |       |
| `OAN` | Oaniima            |        |        |        |           |         |     |       |
| `OLE` | ‘Ŏle̋xh             |        |        |        |           |         |     |       |
| `PAU` | Pau                |        |        |        |           |         |     |       |
| `QOP` | Q̈oþpor             |        |        |        |           |         |     |       |
| `RAL` | Ralit              |        |        |        |           |         |     |       |
| `RLT` | Ṛeliteṭ            |        |        |        |           |         |     |       |
| `SAQ` | Saaiqnewak         |        |        |        |           |         |     |       |
| `SET` | Ʃeteol             |        |        |        |           |         |     |       |
| `THE` | Thelodar           |        |        |        |           |         |     |       |
| `TLI` | Taali              |        |        |        |           |         |     |       |
| `TLX` | !ƛŋẍáḍ             |        |        |        |           |         |     |       |
| `UAT` | Ɥatl               |        |        |        |           |         |     |       |
| `UME` | uṃ12ëksim1f        |        |        |        |           |         |     |       |
| `UOR` | Ur                 |        |        |        |           |         |     |       |
| `URL` | Ȣ̈rlibb’gẉ          |        |        |        |           |         |     |       |
| `UVI` | U̇vįolıhu           |        |        |        |           |         |     |       |
| `UVX` | Uvyx               |        |        |        |           |         |     |       |
| `VOQ` | Voq                |        |        |        |           |         |     |       |
| `WGQ` | Wolgq              |        |        |        |           |         |     |       |
| `WUL` | Wùlɤlu             |        |        |        |           |         |     |       |
| `XOV` | Ẋov̆ii              |        |        |        |           |         |     |       |
| `XLV` | Xolvik             |        |        |        |           |         |     |       |
| `YML` | Yȫml Ḫėr           |        |        |        |           |         |     |       |
| `YYH` | Yyhreven Ynqa      |        |        |        |           |         |     |       |
| `YVN` | Yßnúú              |        |        |        |           |         |     |       |
| `ZHI` | Zhidorik           |        |        |        |           |         |     |       |

<table style="text-align: center">
  <tr>
    <td> PAGE SExQOmxuZ2Nkcw (HLP:lngcds) </td>
  </tr>
<table style="text-align: center">  
