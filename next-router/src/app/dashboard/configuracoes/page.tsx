import RedirectServer from "@/app/redirect";
import Button from "@/components/Button";

export default function SettingsPage() {
  return <RedirectServer path="/dashboard/settings" />

  return (
    <div>
      <h1>Configurações</h1>
      <Button />
    </div>
  );
}
