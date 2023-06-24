<script lang="ts">
  import { A } from "flowbite-svelte";

    export let title:string;
</script>
<style>
    .spanLeft {
    position: absolute;
    left: 2px;
    opacity: 0;
    transition: 0.25s;
  }

  .spanRight {
    position: absolute;
    right: 2px;
    opacity: 0;
    transition: 0.25s;
    
  }

  .hoverHelper::after {
    content: "";
    position: absolute;
    background-color: theme("colors.primary.100");
    height: 2px;
    width: 0;
    left: 0;
    bottom: -4px;
    transition: 0.25s;
  }

  .hoverHelper:hover::after {
    width: 100%;
  }

  .hoverHelper:hover .spanLeft {
    position: absolute;
    left: -20px;
    opacity: 1;
    color: theme("colors.primary.100");
  }

  .hoverHelper:hover .spanRight {
    position: absolute;
    right: -20px;
    opacity: 1;
    color: theme("colors.primary.100");
  }
</style>
<div class="hoverHelper" style="position: relative;">
<A color="text-gray-900 dark:text-white" aClass="text-base" class="navtext" href=""><span class="spanLeft">[</span><span>{title}</span><span class="spanRight">]</span></A>
</div>