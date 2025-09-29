# Lineicons Vue — Essential UI Icons for Vue

**Lineicons Vue** provides ready-to-use Vue components for [Lineicons](https://lineicons.com), making it easy to add scalable SVG icons to your Vue 3 projects.
Customize size, color, and style with simple props — perfect for modern UI development.

---

## Installation

```bash
npm install @lineiconshq/vue-lineicons @lineiconshq/free-icons
```

---

## Usage

### With Composition API

```vue
<template>
  <div>
    <Lineicons :icon="Home2Outlined" :size="24" color="blue" />
    <Lineicons :icon="CloudBolt1Bulk" :size="40" color="orange" />
    <Lineicons :icon="CloudBolt1Outlined" :size="50" color="blue" />
    <Lineicons :icon="CloudBolt1Duotone" :size="30" color="green" />
    <Lineicons :icon="CloudBolt1Solid" :size="24" class="bg-success-500" />
    <Lineicons :icon="Home2Stroke" :size="80" :stroke-width="2" /> 
  </div>
</template>

<script setup lang="ts">
import { Lineicons } from "@lineiconshq/vue-lineicons";
import {
  Home2Outlined,
  CloudBolt1Bulk,
  CloudBolt1Outlined,
  CloudBolt1Duotone,
  CloudBolt1Solid,
  Home2Stroke,
} from "@lineiconshq/free-icons";
</script>
```

---

### With Options API

```vue
<template>
  <Lineicons :icon="currentIcon" :size="24" color="red" />
</template>

<script>
import { Lineicons } from "@lineiconshq/vue-lineicons";
import { Home2Outlined } from "@lineiconshq/free-icons";

export default {
  components: {
    Lineicons,
  },
  data() {
    return {
      currentIcon: Home2Outlined,
    };
  },
};
</script>
```

---

## API Reference

### Lineicons

Main component for rendering icons.

```typescript
interface LineiconsProps {
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

| Prop          | Type               | Default        | Description                           |
| ------------- | ------------------ | -------------- | ------------------------------------- |
| `icon`        | `IconData`         | — *(required)* | The icon object to render.            |
| `size`        | `number \| string` | `24`           | Icon size (pixels or CSS units).      |
| `color`       | `string`           | `currentColor` | Icon color.                           |
| `class`       | `string`           | —              | CSS class applied to the SVG element. |
| `strokeWidth` | `number`           | `1.5`          | Stroke width for outlined icons.      |

All other valid SVG attributes are supported and passed through.

---

## TypeScript Support

Full **TypeScript** support with type definitions for all components and icons for better autocomplete and DX.

---

## Available Icon Styles

* **Stroke** — Outline icons with customizable stroke width
* **Solid** — Fully filled icons
* **Duotone** — Two-tone icons
* **Bulk** — Filled icons with background accents
* **Outlined** — Alternative outline style

---

## License

* **Free Icons:** [MIT License](https://opensource.org/licenses/MIT)

---

## Resources & Support

* [📖 Documentation](https://lineicons.com/docs)
* [💬 Support](https://lineicons.com/support)
* [🔌 Figma Plugin](https://www.figma.com/community/plugin/1217738304122072948/Lineicons)
* [📁 Figma Source](https://www.figma.com/community/file/1198194066179400874)
