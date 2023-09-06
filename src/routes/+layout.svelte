<script lang="ts">
	import '../app.postcss';
	import Navbar from '$lib/components/Navbar.svelte';
</script>

<div class="bg-primary h-full">
	<Navbar />
	<slot />
</div>
