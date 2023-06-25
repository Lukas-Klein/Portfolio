<script lang="ts">
  import DarkModeButton from './components/darkModeButton.svelte';
  import app from "./app.css"
  import HeaderTag from './components/headerTag.svelte';
  import { P, Heading } from 'flowbite-svelte';
  import WelcomeText from './components/welcomeText.svelte';

</script>

<section id="home">
    <nav class="navHeader">
      <div class="menuL">  <HeaderTag title="lukas" />
      </div>
      <div class="menuR">
        <HeaderTag title="projects" />
        <HeaderTag title="career" />
        <HeaderTag title="contact" />
        <DarkModeButton />
      </div>
    </nav>
    <WelcomeText/>
</section>
<section id="about">
  <div>
    <Heading class="text-left">about me:</Heading>
  </div>
</section>