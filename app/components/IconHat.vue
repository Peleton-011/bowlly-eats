<template>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      :fill="color"
      :width="size"
      :height="size"
      class="icon-chef-hat"
    >
      <path d="M12 2a5 5 0 0 1 5 4.92 3.5 3.5 0 0 1 1.68 6.6V16a2 2 0 0 1-2 2h-9a2 2 0 0 1-2-2v-2.48a3.5 3.5 0 0 1 1.68-6.6A5 5 0 0 1 12 2zm0 2a3 3 0 0 0-3 3 1 1 0 0 1-1 1h-.5a1.5 1.5 0 1 0 0 3h11a1.5 1.5 0 1 0 0-3H16a1 1 0 0 1-1-1 3 3 0 0 0-3-3zm-5 10v2h10v-2H7z"/>
    </svg>
  </template>
  
  <script>
  export default {
    name: "IconHat",
    props: {
      color: {
        type: String,
        default: "currentColor", // Defaults to inherit current text color
      },
      size: {
        type: [String, Number],
        default: 24, // Defaults to 24px
      },
    },
  };
  </script>
  
  <style scoped>
  .icon-chef-hat {
    display: inline-block;
    vertical-align: middle;
  }
  </style>
  