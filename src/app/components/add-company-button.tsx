'use client';

import React, { useState } from 'react';
import Button from './button';
import dynamic from 'next/dynamic';

const CompanyFormModal = dynamic(() => import('./company-form-modal'), {
  ssr: false,
});

export default function AddCompanyButton() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Add Company</Button>
      <CompanyFormModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onSubmit={console.log}
      />
    </>
  );
}
