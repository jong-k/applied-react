import { useTranslation } from "react-i18next";

export default function LanguageSwitch() {
  const { i18n } = useTranslation();

  const changeLanguage = () => {
    const lng = i18n.language === "en" ? "ko" : "en";
    i18n.changeLanguage(lng);
  };

  return (
    <div>
      <div>현재 언어: {i18n.language}</div>
      <button onClick={changeLanguage}>언어 변경</button>
    </div>
  );
}