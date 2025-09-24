
import { useAuth } from '../hooks/useAuth';
import { Button } from '../components/ui/Button/Button';
import Card from '../components/ui/Card/Card';
import Alert from '../components/ui/Alert/Alert';
import Checkbox from '../components/form/Checkbox/Checkbox';
import Text from '../components/form/Text/Text';
import { formatName } from '../utils/formatName';
import '../styles/global.css';
import { useState } from 'react';

export default function HomePage() {
  const { user, login, logout } = useAuth();
  const [checked, setChecked] = useState(false);

  return (
    <div className="main-container" style={{ maxWidth: 500, margin: '0 auto' }}>
      <Card>
        <Text size="large" color="#1976d2">
          Mini App de Estrutura
        </Text>
        {user ? (
          <>
            <Alert type="success" message={`Bem-vindo, ${formatName(user.name)}!`} />
            <div style={{ margin: '16px 0' }}>
              <Checkbox
                label="Receber notificações?"
                checked={checked}
                onChange={setChecked}
              />
            </div>
            <Text size="small" color="#555">
              {checked
                ? 'Você receberá notificações.'
                : 'Você não receberá notificações.'}
            </Text>
            <div style={{ marginTop: 24 }}>
              <Button onClick={logout}>Logout</Button>
            </div>
          </>
        ) : (
          <>
            <Alert type="info" message="Faça login para acessar mais recursos." />
            <div style={{ marginTop: 24 }}>
              <Button onClick={login}>Login</Button>
            </div>
          </>
        )}
      </Card>
    </div>
  );
}
