import { Card } from 'antd';
import './index.css';

function PageOne() {
  return (
    <Card className="card-root" data-testid="card">
      <h1>Page One</h1>
      <h4>Test deploy</h4>
      <h4>Test2</h4>
    </Card>
  );
}

export default PageOne;
