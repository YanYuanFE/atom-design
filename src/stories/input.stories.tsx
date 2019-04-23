import React from 'react';
import { storiesOf } from '@storybook/react';

import Input from '../components/input/Input';

storiesOf('Input', module)
  .add('Input', () => (
    <div className="atom-input-demo">
        <div className="input-item">
            <h3>基本用法</h3>
            <Input placeholder="请输入" />
        </div>
    </div>
  ))