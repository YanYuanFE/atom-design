import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';

import Button from '../components/button/Button';
import Modal from '../components/modal/Modal';

const ModalDemo = () => {
    const [visible, setVisible] = useState(false);
    return (
        <div>
            <Button onClick={() => setVisible(true)}>打开弹窗</Button>
            <Modal visible={visible}>
                <div>Modal</div>
            </Modal>
        </div>
    )
}


storiesOf('Modal', module)
  .add('Modal', () => (
    <div className="atom-modal-demo">
        <ModalDemo />
    </div>
  ));