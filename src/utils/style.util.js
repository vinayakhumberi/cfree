import { ROOT_FONT_SIZE } from '../constants/style.constants';

export const rem = (size) => `${size / ROOT_FONT_SIZE}rem`;

export const getLineHeight = (size) => {
  const newSize = size * 1.5;
  return rem(newSize);
} 
