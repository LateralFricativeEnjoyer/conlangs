const codes = new Map();
//         code    name                 wikipage
codes.set("AAR", ["Aarnor Iirisis", "aarnor_iirisis"]);
codes.set("AED", ["Aeð̣rhu", "proto_aedrhu"]);
codes.set("ALQ", ["ǂàliq", "aliq"]);
codes.set("AZE", ["Azent Čel", "azent_cel"]);
codes.set("BEN", ["Bęn̥p̚olxúú", "benpolxuu"]);
codes.set("BIM", ["Bim", "bim_language"]);
codes.set("CAD", ["Ćadj", "cadj"]);
codes.set("CIY", ["Ciýig", "ciyig"]);
codes.set("CYT", ["cʎt’eel’tl", "cteeltl"]);
codes.set("DHI", ["Dhir Tokktoi", "dhir_tokktoi"]);
codes.set("DYR", ["Dhyrüṃƞ̤", "dhyrumn"]);
codes.set("DJE", ["Djei Çer", "djei_cer"]);
codes.set("DWA", ["Dwańni", "dwanni_language"]);
codes.set("EAI", ["Eaïyyᵫ", "eaiyyue"]);
codes.set("EGN", "Égnèkhʷà");
codes.set("FRS", "Frísú");
codes.set("GEN", "Bhom Gëndœ");
codes.set("GHB", "Ɣeb Sìlæu")
codes.set("GYL", "Gylhevř");
codes.set("HAL", "Hali");
codes.set("HHX", "Ɦhŏxekh’on ʕlajrhh");
codes.set("HTY", "Ƕiꝧyãp");
codes.set("IAR", "Îär Tôr");
codes.set("IKT", "Iktør");
codes.set("JER", "Jʻẹr");
codes.set("JIL", "Jilkha");
codes.set("KAS", "Kas");
codes.set("KHO", "Khơlīvh Ɯr");
codes.set("KPU", "Kpəré");
codes.set("LAT", "ʔlat‘ûl");
codes.set("LES", "Leſitàli");
codes.set("LIB", "Llibcinist’iiallib");
codes.set("MAE", "Maërnü");
codes.set("MBA", "mBasaaric");
codes.set("NGO", "Ngørja Senrøbaki");
codes.set("NME", "Nmem");
codes.set("OAN", "Oaniima")
codes.set("OLE", "‘Ŏle̋xh");
codes.set("PAU", "Pau");
codes.set("QOP", "Q̈oþpor");
codes.set("RAL", "Ralit");
codes.set("RLT", "Ṛeliteṭ");
codes.set("SAQ", "Saaiqnewak");
codes.set("SET", "Ʃeteol");
codes.set("THE", "Thelodar");
codes.set("TLI", "Taali");
codes.set("TLX", "!ƛŋẍáḍ");
codes.set("UAT", "Ɥatl");
codes.set("UME", "uṃ12ëksim1f");
codes.set("UOR", "Ur");
codes.set("URL", "Ȣ̈rlibb’gẉ");
codes.set("UVI", "U̇vįolıhu");
codes.set("UVX", "Uvyx");
codes.set("VOQ", "Voq");
codes.set("WGQ", "Wolgq");
codes.set("WUL", "Wùlɤlu");
codes.set("XOV", "Ẋov̆ii");
codes.set("XLV", "Xolvik");
codes.set("YML", "Yȫml Ḫėr");
codes.set("YYH", "Yyhreven Yñqa");
codes.set("YVN", "Yßnúú");
codes.set("ZHI", "Zhidorik");

const langs = new Map();
//             name          code
langs.set("Aarnor Iirisis", "AAR");
langs.set("Aeð̣rhu", "AED");
langs.set("ǂàliq", "ALQ");
langs.set("Azent Čel", "AZE");
langs.set("Bęn̥p̚olxúú", "BEN");
langs.set("Bim", "BIM");
langs.set("Ćadj", "CAD");
langs.set("Ciyig", "CIY");
langs.set("cʎt’eel’tl", "CYT");
langs.set("Dhir Tokktoi", "DHI");
langs.set("Dhyrüṃƞ̤", "DYR");
langs.set("Djei Çer", "DJE");
langs.set("Dwańni", "DWA");
langs.set("Eaïyyᵫ", "EAI");
langs.set("Égnèkhʷà", "EGN");
langs.set("Frísú", "FRS");
langs.set("Bhom Gëndœ", "GEN");
langs.set("Ɣeb Sìlæu", "GHB");
langs.set("Gylhevř", "GYL");
langs.set("Hali", "HAL");
langs.set("Ɦhŏxekh’on ʕlajrhh", "HHX");
langs.set("Ƕiꝧyãp", "HTY");
langs.set("Îär Tôr", "IAR");
langs.set("Iktør", "IKT");
langs.set("Jʻẹr", "JER");
langs.set("Jilkha", "JIL");
langs.set("Kas", "KAS");
langs.set("Khơlīvh Ɯr", "KHO");
langs.set("Kpəré", "KPU");
langs.set("ʔlat‘ûl", "LAT");
langs.set("Leſitàli", "LES");
langs.set("Llibcinist’iiallib", "LIB");
langs.set("Maërnü", "MAE");
langs.set("mBasaaric", "MBA");
langs.set("Ngørja Senrøbaki", "NGO");
langs.set("Nmem", "NME");
langs.set("Oaniima", "OAN");
langs.set("‘Ŏle̋xh", "OLE");
langs.set("Pau", "PAU");
langs.set("Q̈oþpor", "QOP");
langs.set("Ralit", "RAL");
langs.set("Ṛeliteṭ", "RLT");
langs.set("Saaiqnewak", "SAQ");
langs.set("Ʃeteol", "SET");
langs.set("Thelodar", "THE");
langs.set("Taali", "TLI");
langs.set("!ƛŋẍáḍ", "TLX");
langs.set("Ɥatl", "UAT");
langs.set("uṃ12ëksim1f", "UME");
langs.set("Ur", "UOR");
langs.set("Ȣ̈rlibb’gẉ", "URL");
langs.set("U̇vįolıhu", "UVI");
langs.set("Uvyx", "UVX");
langs.set("Voq", "VOQ");
langs.set("Wolgq", "WGQ");
langs.set("Wùlɤlu", "WUL");
langs.set("Ẋov̆ii", "XOV");
langs.set("Xolvik", "XLV");
langs.set("Yȫml Ḫėr", "YML");
langs.set("Yyhreven Yñqa", "YYH");
langs.set("Yßnúú", "YVN");
langs.set("Zhidorik", "ZHI");

function search() {
  let input = document.getElementById("search").value;
  if(codes.has(input)){ // input is a name
    document.getElementById("output").innerHTML = 
    input + " is the langcode for <a href='https://sidlangs.com/wiki/" + codes.get(input)[1] + "'>" + codes.get(input)[0] + "</a>.";
  } else if(langs.has(input)){ // input is a code
    document.getElementById("output").innerHTML = 
    input + "'s langcode is " + "<a href='https://sidlangs.com/wiki/" + codes.get(langs.get(input))[1] + "'>" + langs.get(input) + "</a>" + "."
  }
}
