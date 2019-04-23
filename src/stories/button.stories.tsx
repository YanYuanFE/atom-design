import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Button from '../components/button/Button';
import './demo.less';


storiesOf('Button', module)
  .add('Button', () => (
    <div className="atom-button-demo">
      <h3>按钮类型</h3>
      <Button onClick={action('clicked')}>Default</Button>
      <Button onClick={action('clicked')} type="primary">Primary</Button>
      <Button onClick={action('clicked')} type="danger">Danger</Button>
      <Button onClick={action('clicked')} type="success">Success</Button>
      <Button onClick={action('clicked')} type="dashed">Dashed</Button>
      <h3>按钮尺寸</h3>
      <Button onClick={action('clicked')} size="large" type="primary">Large</Button>
      <Button onClick={action('clicked')} size="small" type="success">Small</Button>
      <h3>幽灵按钮</h3>
      <Button onClick={action('clicked')} ghost>Default</Button>
      <Button onClick={action('clicked')} type="primary" ghost>Primary</Button>
      <Button onClick={action('clicked')} type="danger" ghost>Danger</Button>
      <Button onClick={action('clicked')} type="success" ghost>Success</Button>
      <Button onClick={action('clicked')} type="dashed" ghost>Dashed</Button>
      <h3>禁用按钮</h3>
      <Button onClick={action('clicked')} ghost disabled>Default</Button>
      <Button onClick={action('clicked')} type="primary" ghost disabled>Primary</Button>
      <Button onClick={action('clicked')} type="danger" ghost disabled>Danger</Button>
      <Button onClick={action('clicked')} type="success" ghost disabled>Success</Button>
      <Button onClick={action('clicked')} type="dashed" ghost disabled>Dashed</Button>
      <h3>按钮形状</h3>
      <Button onClick={action('clicked')} shape="circle">D</Button>
      <Button onClick={action('clicked')} type="primary" shape="circle">P</Button>
      <Button onClick={action('clicked')} type="danger" shape="circle-outline">D</Button>
      <Button onClick={action('clicked')} type="success" shape="round">S</Button>
      <h3>with some emoji</h3>
      <Button onClick={action('clicked')}>
        <span role="img" aria-label="so cool">
          😀 😎 👍 💯
        </span>
      </Button>
    </div>
  ));
