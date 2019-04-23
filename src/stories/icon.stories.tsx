import React from 'react';
import { storiesOf } from '@storybook/react';
import Icon from '../components/icon/Icon';

const iconList = ['home', 'file', 'spinner'];

storiesOf('Icon', module)
  .add('Icon', () => (
      <div className="atom-icon-demo">
        {
            iconList.map(icon => {
                return (
                    <div className="icon-item" key={icon}>
                        <Icon type={icon} /> <span>{icon}</span>
                    </div>
                )
            })
        }
      </div>
  ))