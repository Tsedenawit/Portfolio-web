import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import { Footer } from 'antd/es/layout/layout';
const Mymodal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  
  return (
    <>
      <Button type="" onClick={showModal}>
        Open Modal
      </Button>
      <Modal footer={null} className='mt-[10rem]' title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  );
};
export default Mymodal;