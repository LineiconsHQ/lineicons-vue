import { defineComponent, computed, h } from 'vue';

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

export interface LineiconsProps {
  icon: IconData;
  size?: number | string;
  color?: string;
  strokeWidth?: number;
}

const Lineicons = defineComponent({
  name: 'Lineicons',
  props: {
    icon: {
      type: Object as () => IconData,
      required: true
    },
    size: {
      type: [Number, String],
      default: 24
    },
    color: {
      type: String,
      default: 'currentColor'
    },
    strokeWidth: {
      type: Number,
      default: 1.5
    }
  },
  setup(props: LineiconsProps, { attrs }) {
    const processedSvgContent = computed(() => {
      let content = props.icon.svg;
      const color = props.color || 'currentColor';
      const sw = props.strokeWidth || 1.5;

      if (props.icon.hasFill) {
        content = content.replace(/fill="{color}"/g, `fill="${color}"`);
      }
      if (props.icon.hasStroke) {
        content = content.replace(/stroke="{color}"/g, `stroke="${color}"`);
      }
      if (props.icon.hasStrokeWidth && sw) {
        content = content.replace(/stroke-width="{strokeWidth}"/g, `stroke-width="${sw}"`);
      }
      return content;
    });

    const computedFill = computed(() =>
      props.icon.hasFill && !processedSvgContent.value.includes('fill=') 
        ? props.color || 'currentColor' 
        : props.icon.defaultFill || 'none'
    );

    const computedStroke = computed(() =>
      props.icon.hasStroke && !processedSvgContent.value.includes('stroke=') 
        ? props.color || 'currentColor' 
        : props.icon.defaultStroke || 'none'
    );

    const computedStrokeWidth = computed(() =>
      props.icon.hasStrokeWidth && !processedSvgContent.value.includes('stroke-width=') 
        ? props.strokeWidth || 1.5 
        : undefined
    );

    return () =>
      h('svg', {
        width: props.size,
        height: props.size,
        viewBox: props.icon.viewBox,
        fill: computedFill.value,
        stroke: computedStroke.value,
        'stroke-width': computedStrokeWidth.value,
        ...attrs,
        innerHTML: processedSvgContent.value
      });
  }
});

export default Lineicons;
