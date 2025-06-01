import React from 'react';
import Sidebar from '../components/sidebar';

export interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  console.log('Admin layout rendered');
  // This layout is used for the admin section of the application.
  // It includes a sidebar and renders the children passed to it.
  // The sidebar is a persistent component that provides navigation links.
  // The children are the specific pages or components that will be displayed
  // within the admin layout, allowing for a consistent structure across admin pages.
  // The layout is designed to be responsive and works well with the sidebar.
  // The sidebar is expected to be a component that provides navigation links
  // for the admin section, such as links to manage companies, users, etc.
  return (
    <>
      <Sidebar />
      <div className="ml-60">{children}</div>
    </>
  );
}
