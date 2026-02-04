<template>
  <Typo variant="display1" underline color="primary">display1</Typo>
  <Typo variant="display2" underline color="primary">display2</Typo>
  <Typo variant="title24" underline color="primary">title24</Typo>
  <Typo variant="title20" underline color="primary">title20</Typo>
  <Typo variant="title16-m" underline color="primary">title16-m</Typo>
  <Typo variant="body16-r" underline color="primary">body16-r</Typo>

  <br/>
  <Typo 
    bullet="dash"
    ellipsis
    >caption12-r</Typo>
</template>

<script lang="ts" setup>
import Typo from '@/components/Typo.vue'
</script>