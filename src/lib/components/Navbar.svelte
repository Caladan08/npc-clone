<script lang="ts">
	import ChevronDown from 'carbon-icons-svelte/lib/ChevronDown.svelte';
	import { Menu, createStyles } from '@svelteuidev/core';

	const useStyles = createStyles(() => ({
		menuItem: {
			fontFamily: 'Oswald',
			fontSize: '15px',
			fontWeight: '100',
			textTransform: 'uppercase'
		}
	}));
	$: ({ classes } = useStyles());

	let matchesOpen = false,
		statsOpen = false,
		pointsOpen = false,
		teamsOpen = false,
		galleryOpen = false;
</script>

<div class="h-48 p-4 px-12 flex justify-center bg-white">
	<div class="navbarContent w-full flex justify-between">
		<div class="logo flex items-center gap-4 h-full max-w-xs w-full">
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
					<Menu transition="fly" transitionOptions={{ y: -20 }}>
						<a
							href="#"
							slot="control"
							class="flex gap-2 items-center"
							on:click={() => (matchesOpen = !matchesOpen)}
							>Matches <ChevronDown
								class={`${matchesOpen ? 'rotate-180' : ''} transition-all`}
							/></a
						>
						<Menu.Item class={classes.menuItem}>Fixtures</Menu.Item>
						<Menu.Item class={classes.menuItem}>Results</Menu.Item>
					</Menu>
				</li>
				<li class="flex gap-2 items-center">
					<Menu transition="fly" transitionOptions={{ y: -20 }}>
						<a
							href="#"
							slot="control"
							class="flex gap-2 items-center"
							on:click={() => (statsOpen = !statsOpen)}
							>Stats <ChevronDown class={`${statsOpen ? 'rotate-180' : ''} transition-all`} /></a
						>
						<Menu.Item class={classes.menuItem}>2023</Menu.Item>
						<Menu.Item class={classes.menuItem}>2022</Menu.Item>
					</Menu>
				</li>
				<li class="flex gap-2 items-center">
					<Menu transition="fly" transitionOptions={{ y: -20 }}>
						<a
							href="#"
							slot="control"
							class="flex gap-2 items-center"
							on:click={() => (pointsOpen = !pointsOpen)}
							>Points Table <ChevronDown
								class={`${pointsOpen ? 'rotate-180' : ''} transition-all`}
							/></a
						>
						<Menu.Item class={classes.menuItem}>2023</Menu.Item>
						<Menu.Item class={classes.menuItem}>2022</Menu.Item>
					</Menu>
				</li>
				<li class="flex gap-2 items-center">
					<Menu transition="fly" transitionOptions={{ y: -20 }}>
						<a
							href="#"
							slot="control"
							class="flex gap-2 items-center"
							on:click={() => (teamsOpen = !teamsOpen)}
							>Teams <ChevronDown class={`${teamsOpen ? 'rotate-180' : ''} transition-all`} /></a
						>
						<Menu.Item class={classes.menuItem}>Agency XI</Menu.Item>
						<Menu.Item class={classes.menuItem}>Blue Stallions</Menu.Item>
						<Menu.Item class={classes.menuItem}>Blue Tigers</Menu.Item>
						<Menu.Item class={classes.menuItem}>Brown Munde</Menu.Item>
						<Menu.Item class={classes.menuItem}>Elermore Vale Lions</Menu.Item>
						<Menu.Item class={classes.menuItem}>Knights Watchmen</Menu.Item>
						<Menu.Item class={classes.menuItem}>Maitland Monsters</Menu.Item>
						<Menu.Item class={classes.menuItem}>Mighty Dark Horses</Menu.Item>
						<Menu.Item class={classes.menuItem}>Newcastle Falcons</Menu.Item>
						<Menu.Item class={classes.menuItem}>Newcastle Hunters</Menu.Item>
						<Menu.Item class={classes.menuItem}>Newcastle Qalandars</Menu.Item>
						<Menu.Item class={classes.menuItem}>The Fine Legs</Menu.Item>
						<Menu.Item class={classes.menuItem}>Turana Titans</Menu.Item>
						<Menu.Item class={classes.menuItem}>Wallsend Tigers</Menu.Item>
					</Menu>
				</li>
				<li class="flex items-center">
					<a href="#">Sponsors</a>
				</li>
				<li class="flex gap-2 items-center">
					<Menu transition="fly" transitionOptions={{ y: -20 }}>
						<a
							href="#"
							slot="control"
							class="flex gap-2 items-center"
							on:click={() => (galleryOpen = !galleryOpen)}
							>Gallery <ChevronDown
								class={`${galleryOpen ? 'rotate-180' : ''} transition-all`}
							/></a
						>
						<Menu.Item class={classes.menuItem}>Super Stars of the Week</Menu.Item>
					</Menu>
				</li>
				<li class="flex items-center">
					<a href="#">About</a>
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
