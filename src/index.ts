
import LineIcon, { type IconData, type LineIconProps } from './LineIcon';

// Re-export free icons (adjust import path)
export * from '@lineiconshq/free-icons';

export type IconStyle = 'stroke' | 'solid' | 'duotone' | 'bulk' | 'outlined';
export type IconTier = 'free' | 'pro';

export default LineIcon;
export { LineIcon, type IconData, type LineIconProps };
