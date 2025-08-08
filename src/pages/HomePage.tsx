import { Link } from "react-router";
import { useTranslation, Trans } from "react-i18next";
import { LanguageSwitch } from "../features/i18n";

const DUMMY_COUNT = 2;

export default function HomePage() {
  const { t } = useTranslation();

  return (
    <div className="flex gap-4 flex-col">
      <Link to="/quotes">속담 리스트</Link>
      <Link to="/todo">할 일 리스트</Link>
      <Link to="/api-test">API 테스트</Link>
      <div>
        <LanguageSwitch />
        <p>{t("title", { name: "John" })}</p>
        <p>{t("description.part1")}</p>
        <p>{t("description.part2")}</p>
        {/* count 갯수에 따라 자동으로 복수형을 조절 */}
        <Trans i18nKey="userMessagesUnread" count={DUMMY_COUNT}>
          You have {{ DUMMY_COUNT }} unread message.
        </Trans>
      </div>
    </div>
  );
}
