<script lang="ts">
  import { Grid } from "@svelteuidev/core";

  let teamsSources = [
    "/teams/AgencyXI.png",
    "/teams/BlueStallions.png",
    "/teams/BlueTigers.png",
    "/teams/BrownMunde.png",
    "/teams/NewcastleFalcons.png",
    "/teams/NewcastleHunters.png",
    "/teams/NewcastleQalandars.png",
    "/teams/ElermoreValeLions.png",
    "/teams/KnightsWatchmen.png",
    "/teams/MaitlandMonsters.png",
    "/teams/MightyDarkHorses.png",
    "/teams/TheFineLegs.png",
    "/teams/TuranaTitans.png",
    "/teams/WallsendTigers.png"
  ]
</script>

<div class="heroSection h-full">
	<div
		class="h-full bg-[url('/HeroImage.jpg')] bg-cover bg-center overflow-hidden bg-no-repeat uppercase flex justify-center items-center flex-col gap-8"
	>
		<h1 class="text-secondary text-7xl">npl-2</h1>
		<h1 class="text-tertiary text-7xl">qualifying final matches on</h1>
		<h1 class="text-white text-7xl">09 september 2023</h1>
	</div>
</div>

<div class="sponsors w-full flex flex-col items-center uppercase p-12 gap-12 bg-background">
  <h1 class="text-primary text-5xl">sponsors</h1>
  <div class="flex gap-4">
    <div>
      <img src="/sponsors/SponsorOne.png" alt="sponsor one">
    </div>
    <div>
      <img src="/sponsors/SponsorTwo.png" alt="sponsor two">
    </div>
    <div>
      <img src="/sponsors/SponsorThree.png" alt="sponsor three">
    </div>
    <div>
      <img src="/sponsors/SponsorFour.png" alt="sponsor four">
    </div>
  </div>
  <a href="#" class="py-4 px-36 bg-primary hover:bg-secondary transition-all text-white uppercase font-extralight cursor-pointer">more</a>
</div>

<div class="teams bg-background p-12 px-48 uppercase flex flex-col items-center gap-12">
  <h1 class="text-primary text-5xl">teams</h1>
  <Grid cols={7} spacing={50}>
    {#each teamsSources as teamSrc}
      <Grid.Col span={1}>
        <img src={teamSrc} alt={teamSrc} class="w-32 h-32" />
      </Grid.Col>
    {/each}
  </Grid>
</div>
