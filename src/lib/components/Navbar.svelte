<script lang="ts">
	import ChevronDown from 'carbon-icons-svelte/lib/ChevronDown.svelte';
</script>

<div class="h-48 p-4 px-12 flex justify-center bg-white">
	<div class="navbarContent w-full flex justify-between">
		<div class="logo flex items-center gap-4 h-full">
			<img src="/NPLLogo.png" alt="npl logo" class="h-32" />
			<div class="logoText w-full">
				<h1 class="text-primary font-bold text-xl">newcastle <br /> premier <br /> league t20</h1>
			</div>
		</div>
		<div class="navbarItems h-full flex items-center">
			<ul class="flex gap-1">
				<li class="flex items-center">
					<a href="#">Home</a>
				</li>
				<li class="flex gap-2 items-center">
					<a href="#" class="flex gap-2 items-center">Matches <ChevronDown /></a>
				</li>
				<li class="flex gap-2 items-center">
					<a href="#" class="flex gap-2 items-center">Stats <ChevronDown /></a>
				</li>
				<li class="flex gap-2 items-center">
					<a href="#" class="flex gap-2 items-center">Points Table <ChevronDown /></a>
				</li>
				<li class="flex gap-2 items-center">
					<a href="#" class="flex gap-2 items-center">Teams <ChevronDown /></a>
				</li>
				<li class="flex items-center">
					<a href="#">Sponsors</a>
				</li>
				<li class="flex gap-2 items-center">
					<a href="#" class="flex gap-2 items-center">Gallery <ChevronDown /></a>
				</li>
			</ul>
		</div>
	</div>
</div>

<style>
	* {
		text-transform: uppercase;
	}
	a:hover {
		color: #ee1924;
		transition-property: all;
		transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
		transition-duration: 350ms;
	}
	a {
		color: #090164;
		text-transform: uppercase;
		text-decoration: none;
		padding: 12px 10px;
		position: relative;
	}
	a:after {
		background: none repeat scroll 0 0 transparent;
		bottom: 0;
		content: '';
		display: block;
		height: 2px;
		left: 50%;
		position: absolute;
		background-color: #ee1924;
		transition: width 0.3s ease 0s, left 0.3s ease 0s;
		width: 0;
	}
	a:hover:after {
		width: 100%;
		left: 0;
	}
</style>
