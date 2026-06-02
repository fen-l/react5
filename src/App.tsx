import { useState } from 'react';

import { Button } from './components/ui/Button';
import { Input } from './components/ui/Input';
import { Badge } from './components/ui/Badge';
import { LayoutCard } from './components/ui/LayoutCard';

function App() {
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);

const handleSave = () => {
    setLoading(true);

    setTimeout(() => {
        setLoading(false);
    }, 2000);
};

  return (
      <div
          style={{
            maxWidth: '700px',
            margin: '40px auto',
            padding: '20px',
          }}
      >
        <LayoutCard
            title="Система мониторинга"
            footer={
              <Button variant="primary"
              isLoading={loading}
              onClick={handleSave}
              >
                Сохранить
              </Button>
            }
        >
          <Input
              label="Имя пользователя"
              value={name}
              onChange={(e) =>
                  setName(e.target.value)
              }
              isFullWidth
              error={
                name.length < 3 && name.length > 0
                    ? 'Минимум 3 символа'
                    : undefined
              }
          />

          <br />

          <Badge
              color="green"
              text="ONLINE"
          />

          <br />
          <br />

          <Button
              variant="primary"
              size="medium"
          >
            Primary
          </Button>

          {' '}

          <Button
              variant="secondary"
              size="medium"
          >
            Secondary
          </Button>

          {' '}

          <Button
              variant="danger"
              size="medium"
          >
            Delete
          </Button>
        </LayoutCard>
      </div>
  );
}

export default App;