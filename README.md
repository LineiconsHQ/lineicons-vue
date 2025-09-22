# Lineicons Vue - Essential UI Icons for Vue

Create stunning designs with 26082+ Free and Premium Icons. Find the perfect style and category to match your project's unique needs.

Vue Components for [Lineicons](https://lineicons.com)

### [Explore and Download All 26082+ Icons](https://lineicons.com/)

## Installation

### Free Icons

```bash
npm install @lineiconshq/vue-lineicons @lineiconshq/free-icons
```

## Usage

### Basic Usage

After installing the package import icon and use anywhere for example
### With Composition API

```vue
<template>
  <div>
    <LineIcon :icon="Home2Outlined" :size="24" color="blue" :stroke-width="1.5" />
    <LineIcon :icon="CloudBolt1Bulk" :size="40" color="orange" />
    <LineIcon :icon="CloudBolt1Outlined" :size="50" color="blue" />
    <LineIcon :icon="CloudBolt1Duotone" :size="30" color="green" />
    <LineIcon :icon="CloudBolt1Solid" :size="24" class="bg-success-500" />
  </div>
</template>

<script setup lang="ts">
import { LineIcon } from "@lineiconshq/vue-lineicons";
import {
  Home2Outlined,
  CloudBolt1Bulk,
  CloudBolt1Outlined,
  CloudBolt1Duotone,
  CloudBolt1Solid,
} from "@lineiconshq/free-icons";
</script>
```

### With Options API

```vue
<template>
  <LineIcon :icon="currentIcon" :size="24" color="red" />
</template>

<script>
import { LineIcon } from "@lineiconshq/vue-lineicons";
import { Home2Outlined } from "@lineiconshq/free-icons";

export default {
  components: {
    LineIcon,
  },
  data() {
    return {
      currentIcon: Home2Outlined,
    };
  },
};
</script>
```

## API Reference

### LineIcon

Main component for rendering icons.

```typescript
interface LineIconProps {
  icon: IconData;
  size?: number | string;
  color?: string;
  class?: string;
  strokeWidth?: number;
}

interface IconData {
  name: string;
  svg: string;
  viewBox: string;
  defaultFill?: string;
  defaultStroke?: string;
  hasFill: boolean;
  hasStroke: boolean;
  hasStrokeWidth: boolean;
}
```

**Props:**

- `icon` - The icon data object to render (required)
- `size` - Size of the icon (default: 24)
- `color` - Color of the icon (default: 'currentColor')
- `class` - CSS class to apply to the SVG element (optional)
- `strokeWidth` - Stroke width for stroke icons (default: 1.5)
- All other attributes are passed through to the SVG element

## TypeScript Support

Full TypeScript support is included with type definitions for all components and icons.

## Available Icon Styles

- **Stroke**: Outline icons with customizable stroke width
- **Solid**: Filled icons
- **Duotone**: Two-tone icons
- **Bulk**: Filled icons with background
- **Outlined**: Alternative outline style


## License

- **Free Icons**: MIT License

## Support

- [Documentation](https://lineicons.com/docs)
- [Support](https://lineicons.com/support)


### [Lineicons Figma Plugin](https://www.figma.com/community/plugin/1217738304122072948/Lineicons)

### [Lineicons - Figma Source](https://www.figma.com/community/file/1198194066179400874)
