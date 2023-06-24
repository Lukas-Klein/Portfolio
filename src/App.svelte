<script lang="ts">
  import DarkModeButton from './components/darkModeButton.svelte';
  import app from "./app.css"
  import HeaderTag from './components/headerTag.svelte';
  import { P } from 'flowbite-svelte';
</script>

<nav class="navHeader">
  <div class="menuL">  <HeaderTag title="lukas" />
  </div>
  <div class="menuR">
  <HeaderTag title="projects" />
  <HeaderTag title="career" />
  <HeaderTag title="contact" />
  <DarkModeButton />
</div>
<P>123123123</P>
</nav>

