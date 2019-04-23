import React from 'react';
import { storiesOf } from '@storybook/react';
import Icon from '../components/icon/Icon';

const iconList = ['home', 'file', 'spinner', 'book', 'clock-o', 'check', 'close', 'code',
 'bookmark', 'cog', 'download', 'edit', 'comment', 'filter', 'flash',
 'heart', 'folder', 'flag', 'send', 'search', 'star', 'rocket', 'server', 'tag', 'thumbs-up',
 'unlock', 'user', 'wifi', 'upload', 'toggle-left', 'toggle-down', 'toggle-up', 'toggle-off', 'toggle-on',
 'plus', 'plug'
];

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