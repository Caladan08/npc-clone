<script lang="ts">
	import LogoFacebook from 'carbon-icons-svelte/lib/LogoFacebook.svelte';
	import LogoInstagram from 'carbon-icons-svelte/lib/LogoInstagram.svelte';
</script>

<div class="footer bg-background w-full h-auto">
	<img src="/FooterDesign.png" alt="footer design" class="w-full" />
	<div class="footerContent w-full p-16 flex uppercase justify-start bg-primary">
		<div class="flex gap-72">
			<div class="flex flex-col gap-4">
				<h1 class="text-white text-3xl">about</h1>
				<hr class="border-secondary" />
				<ul class="uppercase links">
					<li class="flex items-center">
						<a href="#">about</a>
					</li>
					<li class="flex items-center">
						<a href="#">fixtures</a>
					</li>
					<li class="flex items-center">
						<a href="#">gallery</a>
					</li>
					<li class="flex items-center">
						<a href="#">teams</a>
					</li>
				</ul>
			</div>
			<div class="flex flex-col gap-4">
				<h1 class="text-white text-3xl">terms</h1>
				<hr class="border-secondary" />
				<ul class="links">
					<li class="flex items-center">
						<a href="#">Privacy Policy</a>
					</li>
					<li class="flex items-center">
						<a href="#">Game Rules</a>
					</li>
					<li class="flex items-center">
						<a href="#">Code of Conduct</a>
					</li>
				</ul>
			</div>
			<div class="flex flex-col gap-4">
				<h1 class="text-white text-3xl">social media</h1>
				<hr class="border-secondary" />
				<ul class="uppercase">
					<li class="flex items-center">
						<a href="#" class="text-white py-2 hover:text-gray-400 transition-all px-3"><LogoFacebook size={24} /></a>
					</li>
					<li class="flex items-center">
						<a href="#" class="text-white py-2 hover:text-gray-400 transition-all px-3"><LogoInstagram size={24} /></a>
					</li>
				</ul>
			</div>
		</div>
	</div>
	<div class="w-full bg-black p-4 px-8 flex justify-end">
		<h1 class="text-white font-extralight">
			Website made by <a
				href="https://github.com/Caladan08"
				target="_blank"
				class="makerLink hover:text-gray-400 transition-all">Caladan</a
			>
		</h1>
	</div>
</div>

<style>
	.links > li > a {
		color: white;
		text-decoration: none;
		padding: 12px;
		position: relative;
		font-weight: 100;
	}
	a:after {
		background: none repeat scroll 0 0 transparent;
		bottom: 0;
		content: '';
		display: block;
		height: 3px;
		left: 50%;
		position: absolute;
		background-color: white;
		transition: width 0.3s ease 0s, left 0.3s ease 0s;
		width: 0;
	}
	a:hover:after {
		width: 100%;
		left: 0;
	}
</style>
