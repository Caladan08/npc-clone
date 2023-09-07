<script lang="ts">
	import { Accordion, createStyles } from '@svelteuidev/core';

	const useStyles = createStyles(() => ({
		'.svelteui-AccordionItem-panel': {
			padding: '0 !important',
			paddingBottom: '8px !important'
		},
		'.svelteui-AccordionItem-root': {
			borderBottom: '0 !important'
		},
		'.svelteui-AccordionItem-control': {
			paddingLeft: '0 !important',
			paddingRight: '0 !important'
		},
		'.svelteui-AccordionItem-chevron': {
			marginRight: '6px !important'
		},
		'.svelteui-AccordionItem-controlContent': {
			paddingTop: '8px !important',
			paddingBottom: '8px !important'
		}
	}));
	$: ({ getStyles } = useStyles());

	export let value: string;
</script>

<Accordion {value} class={getStyles()} on:change={(e) => (value = e.detail || '')}>
	<Accordion.Item value="typescript">
		<div slot="control"><slot /></div>
		Build type safe applications...
	</Accordion.Item>
</Accordion>
