import React from 'react';
import StatusLabel, { Status } from './components/status-label';
import AddCompanyButton from './components/add-company-button';

export default function Home() {
  return (
    <main>
      <h1 className="text-xl">Home Page {new Date().toTimeString()}</h1>
      <StatusLabel status={Status.Active}>Status Label</StatusLabel>
      <StatusLabel status={Status.NotActive}>Status Label</StatusLabel>
      <StatusLabel status={Status.Pending}>Status Label</StatusLabel>
      <StatusLabel status={Status.Suspended}>Status Label</StatusLabel>
      <AddCompanyButton />
    </main>
  );
}
