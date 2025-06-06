'use client';

import { Dialog, Transition } from '@headlessui/react';
import React, { Fragment } from 'react';

export interface ModalProps {
  children?: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

export default function Modal({ isOpen, children, onClose }: ModalProps) {
  return (
    <Transition.Root as={Fragment} show={isOpen}>
      <Dialog
        as="div"
        className="fixed z-50 inset-0 flex items-center"
        onClose={onClose}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>
        <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white shadow-xl transition-all p-7 mx-auto sm:my-10 sm:w-full sm:max-w-2xl">
          {children}
        </Dialog.Panel>
      </Dialog>
    </Transition.Root>
  );
}
