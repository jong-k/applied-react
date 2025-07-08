import { Link } from "react-router";
import { useTranslation, Trans } from "react-i18next";

export default function App() {
  const { t, i18n } = useTranslation();
  const count = 5;

  const changeLanguage = () => {
    const lng = i18n.language === "en" ? "ko" : "en";
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex gap-4 flex-col">
      <Link to="/quotes">속담 리스트</Link>
      <Link to="/todo">할 일 리스트</Link>
      <Link to="/api-test">API 테스트</Link>
      <div>
        <div>
          <div>현재 언어: {i18n.language}</div>
          <button onClick={changeLanguage}>언어 변경</button>
        </div>
        <p>{t("title", { name: "John" })}</p>
        <p>{t("description.part1")}</p>
        <p>{t("description.part2")}</p>
        <Trans i18nKey="userMessagesUnread" count={count}>
          You have {{ count }} unread message.
        </Trans>
      </div>
    </div>
  );
}
