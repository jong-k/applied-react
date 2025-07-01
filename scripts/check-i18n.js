import { readFile } from "fs/promises";

const loadJson = async (path) => {
  try {
    const jsonContent = await readFile(path, "utf-8");
    return JSON.parse(jsonContent);
  } catch (err) {
    console.log(`Error reading file at ${path}:`, err);
  }
};

const getAllkeys = (obj, parentKey = "") => {
  let keys = [];
  for (const key in obj) {
    const newKey = parentKey ? `${parentKey}.${key}` : key;
    if (typeof obj[key] === "object" && obj[key] !== null) {
      keys = keys.concat(getAllkeys(obj[key], newKey));
    } else {
      keys.push(newKey);
    }
  }
  return keys;
};

const checkKeys = async () => {
  const koJson = await loadJson("src/locales/ko.json");
  const enJson = await loadJson("src/locales/en.json");

  const koKeys = getAllkeys(koJson);
  const enKeys = getAllkeys(enJson);

  const missingInKo = enKeys.filter((key) => !koKeys.includes(key));
  const missingInEn = koKeys.filter((key) => !enKeys.includes(key));
  console.log("Checking for missing keys between ko.json and en.json...");
  if (missingInKo.length > 0) {
    console.log("Missing keys in ko.json:", missingInKo);
  } else {
    console.log("No missing keys in ko.json");
  }
  if (missingInEn.length > 0) {
    console.log("Missing keys in en.json:", missingInEn);
  } else {
    console.log("No missing keys in en.json");
  }
};

const main = async () => {
  await checkKeys();
};

main()
  .then(() => {
    console.log("i18n check completed successfully");
  })
  .catch((err) => {
    console.error("Error during i18n check:", err);
  });
