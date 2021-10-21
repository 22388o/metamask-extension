import React from 'react';
import { action } from '@storybook/addon-actions';
import Slider from '.';

export default {
  title: 'UI/Slider/General',
  id: __filename,
};

export const Base = () => <Slider />;

export const WithSteps = () => <Slider step={10} />;

export const WithHeader = () => (
  <Slider
    titleText="Slider Title Text"
    tooltipText="Slider Tooltip Text"
    valueText="$ 00.00"
    titleDetail="100 GWEI"
  />
);

export const WithFooter = () => (
  <Slider
    titleText="Slider Title Text"
    tooltipText="Slider Tooltip Text"
    valueText="$ 00.00"
    titleDetail="100 GWEI"
    infoText="Footer Info Text"
    onEdit={() => {
      action('On edit click')();
    }}
  />
);
