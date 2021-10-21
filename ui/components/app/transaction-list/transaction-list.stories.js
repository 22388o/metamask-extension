/* eslint-disable react/prop-types */
import React from 'react';
import TransactionList from '.';

export default {
  title: 'App/Transaction/Transaction List',
  id: __filename,
};

const PageSet = ({ children }) => {
  return children;
};

export const Base = () => {
  return (
    <PageSet>
      <TransactionList />
    </PageSet>
  );
};
