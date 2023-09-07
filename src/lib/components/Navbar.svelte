<script lang="ts">
  import ChevronDown from "carbon-icons-svelte/lib/ChevronDown.svelte";
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
</style>