import React from 'react';
import { select } from '@storybook/addon-knobs';
import { COLORS, SIZES } from '../../../helpers/constants/design-system';
import ColorIndicator from './color-indicator';

export default {
  title: 'UI/Icon/Color Indicator',
  id: __filename,
};

export const Base = () => (
  <ColorIndicator
    size={select('size', SIZES, SIZES.LG)}
    type={select('type', ColorIndicator.TYPES, ColorIndicator.TYPES.FILLED)}
    color={select('color', COLORS, COLORS.PRIMARY1)}
    borderColor={select('borderColor', { NONE: undefined, ...COLORS })}
  />
);

export const WithIcon = () => (
  <ColorIndicator
    size={select('size', SIZES, SIZES.LG)}
    type={select('type', ColorIndicator.TYPES, ColorIndicator.TYPES.FILLED)}
    color={select('color', COLORS, COLORS.PRIMARY1)}
    iconClassName="fa fa-question"
    borderColor={select('borderColor', { NONE: undefined, ...COLORS })}
  />
);
