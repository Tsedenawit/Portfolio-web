import React from 'react';
import { Button, Modal } from 'antd';
import { useState } from 'react';

export default function Port(props) {
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
    <div id='port' className="mb-[50px] w-full ">
      <div className="flex justify-between ml-7 w-full">
        <div className="max-w-[430px] min-h-[515px] rounded-md mt-20 shadow-2xl ">
          <img
            src={props.image}
            className="max-h-50 min-h-[50px] rounded-md"
          ></img>
          <>
            <Button type="link" onClick={showModal}>
              {props.name}
            </Button>
            <Modal
              footer={null}
              centered={true}
              title={props.name}
              open={isModalOpen}
              onOk={handleOk}
              onCancel={handleCancel}
            >
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              varius enim in eros.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              varius enim in eros.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              varius enim in eros.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              varius enim in eros.</p>
            </Modal>
          </>
          <h2 className="mt-2 pl-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros.
          </h2>
          <button className="underline-offset-8 underline mt-4 pl-5">
            <a href={props.links} target="_blank">
              View in Github
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}
