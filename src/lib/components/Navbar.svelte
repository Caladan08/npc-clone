<script lang="ts">
	import ChevronDown from 'carbon-icons-svelte/lib/ChevronDown.svelte';
</script>

<div class="h-48 p-4 px-12 flex justify-center bg-white">
	<div class="navbarContent w-full flex justify-between">
		<div class="logo flex items-center gap-4 h-full">
			<img src="/NPLLogo.png" alt="npl logo" class="h-32" />
			<div class="logoText">
				<h1 class="text-primary font-bold text-xl">newcastle <br /> premier <br /> league t20</h1>
			</div>
		</div>
		<div class="navbarItems h-full flex items-center">
			<ul class="flex gap-4">
				<li>
					<a href="#">Home</a>
				</li>
				<li class="flex gap-2 items-center">
					<a href="#">Matches</a>
					<ChevronDown />
				</li>
				<li class="flex gap-2 items-center">
					<a href="#">Stats</a>
					<ChevronDown />
				</li>
				<li class="flex gap-2 items-center">
					<a href="#">Points Table</a>
					<ChevronDown />
				</li>
				<li class="flex gap-2 items-center">
					<a href="#">Teams</a>
					<ChevronDown />
				</li>
				<li class="flex gap-2 items-center">
					<a href="#">Sponsors</a>
					<ChevronDown />
				</li>
				<li class="flex gap-2 items-center">
					<a href="#">Gallery</a>
					<ChevronDown />
				</li>
			</ul>
		</div>
	</div>
</div>

<style>
	* {
		text-transform: uppercase;
	}
	a {
		color: #090164;
		text-transform: uppercase;
		text-decoration: none;
		letter-spacing: 0.15em;

		display: inline-block;
		padding: 15px 20px;
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
		background-color: #552121;
		transition: width 0.3s ease 0s, left 0.3s ease 0s;
		width: 0;
	}
	a:hover:after {
		width: 100%;
		left: 0;
	}
</style>
