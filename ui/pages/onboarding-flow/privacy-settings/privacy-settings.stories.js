import React from 'react';
import PrivacySettings from './privacy-settings';

export default {
  title: 'Pages/Onboarding Page/Privacy Settings',
  id: __filename,
};

export const Base = () => {
  return (
    <div style={{ maxHeight: '2000px' }}>
      <PrivacySettings />
    </div>
  );
};
