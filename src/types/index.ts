// Types for Vue LineIcons
import type { DefineComponent } from 'vue';

export interface IconData {
  name: string;
  svg: string;
  viewBox: string;
  defaultFill?: string;
  defaultStroke?: string;
  hasFill: boolean;
  hasStroke: boolean;
  hasStrokeWidth: boolean;
}

export interface LineIconProps {
  icon: IconData;
  size?: number | string;
  color?: string;
  strokeWidth?: number;
}

export interface IconSvgObject {
  name: string;
  component: DefineComponent<LineIconProps, {}, any>;
  data: IconData;
  tier: 'free' | 'pro';
  style: 'stroke' | 'solid' | 'duotone' | 'bulk' | 'outlined';
}

export type IconName = string;

export interface IconRegistry {
  [key: string]: DefineComponent<LineIconProps, {}, any>;
}

export declare const iconRegistry: IconRegistry;

export type IconStyle = 'stroke' | 'solid' | 'duotone' | 'bulk' | 'outlined';
export type IconTier = 'free' | 'pro';
