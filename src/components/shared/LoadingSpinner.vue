<template>
  <div class="flex justify-center align-middle items-center h-64">
    <svg viewBox="0 0 50 50" class="spinner">
      <circle class="ring" cx="25" cy="25" r="22.5" />
      <circle class="line" cx="25" cy="25" r="22.5" />
    </svg></div
></template>

<style scoped>
.spinner {
  --spinner-size: 3;
  --line-color: #5a67d8;
  --line-alpha: 1;
  --ring-color: #718096;
  --ring-alpha: 0.3;
  --ring-size: 10;

  font-size: calc(var(--spinner-size) * 1em);
  width: 1em;
  height: 1em;
  border-radius: 50%;
}
.spinner .line {
  fill: none;
  stroke: var(--line-color);
  stroke-width: var(--ring-size);
  opacity: var(--line-alpha);
  stroke-linecap: round;
  transform-origin: 50% 50%;
  transform: rotate3d(0, 0, 1, 0deg);
  animation: 2156ms spinner-arc ease-in-out infinite,
    1829ms spinner-rotate linear infinite;
}
.spinner .ring {
  fill: none;
  stroke: var(--ring-color);
  stroke-width: var(--ring-size);
  opacity: var(--ring-alpha);
}
@keyframes spinner-rotate {
  to {
    transform: rotate3d(0, 0, 1, 360deg);
  }
}
@keyframes spinner-arc {
  from {
    stroke-dasharray: 0 150;
    stroke-dashoffset: 0;
  }
  to {
    stroke-dasharray: 100 150;
    stroke-dashoffset: -140;
  }
}
</style>
