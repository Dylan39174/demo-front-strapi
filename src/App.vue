<template>
  <router-view />
</template>

<style lang="sass">
html, body
  margin: 0
  padding: 0

p, h1, h2, h3, h4, h5, h6
  margin: 0

ul
  margin: 0
  padding: 0

  li
    list-style-type: none

a
  color: black
  text-decoration: none
  transition: color .5s ease-in-out

  &:hover
    color: orange

*
  box-sizing: border-box
</style>
