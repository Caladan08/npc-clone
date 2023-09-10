<script lang="ts">
  import LogoFacebook from "carbon-icons-svelte/lib/LogoFacebook.svelte";
  import LogoInstagram from "carbon-icons-svelte/lib/LogoInstagram.svelte";
  import { Divider } from "@svelteuidev/core"
</script>

<div class="footer bg-primary w-full h-auto">
	<img src="/FooterDesign.png" alt="footer design" class="w-full" />
	<div class="footerContent w-full p-16 flex uppercase justify-start">
		<div class="flex gap-72">
			<div class="flex flex-col gap-4">
				<h1 class="text-white text-3xl">about</h1>
				<hr class="border-secondary" />
				<ul class="uppercase">
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
				<ul>
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
						<a href="#"><LogoFacebook size={24} /></a>
					</li>
					<li class="flex items-center">
						<a href="#"><LogoInstagram size={24} /></a>
					</li>
				</ul>
			</div>
		</div>
	</div>
  <div class="w-full bg-black p-4 flex justify-between">
    <h1 class="text-white font-extralight flex gap-2">© 2023 All Rights Reserved <Divider orientation="vertical" /> Newcastle Premiere League T20</h1>
    <h1 class="text-white font-extralight">© 2023 Website made by <a href="https://github.com/Caladan08" class="makerLink hover:text-gray-400 transition-all">Caladan</a></h1>
  </div>
</div>

<style>
	a:not(a.makerLink) {
		color: white;
		text-decoration: none;
		padding: 12px;
		position: relative;
		font-weight: 100;
	}
	a:after:not(a.makerLink) {
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
	a:hover:after:not(a.makerLink) {
		width: 100%;
		left: 0;
	}
</style>
