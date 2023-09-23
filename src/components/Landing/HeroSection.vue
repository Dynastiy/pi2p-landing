<template>
  <div class="tw-flex lg:tw-flex-row md:tw-flex-row tw-flex-col tw-items-center lg:tw-space-x-8 md:tw-space-x-8 tw-space-x-0 lg:tw-space-y-0 md:tw-space-y-0 tw-space-y-8  tw-min-h-44 lg:tw-py-16 md:tw-py-16 tw-py-12 tw-justify-between">
    <div class="tw-w-full sm:tw-text-center lg:tw-text-left md:tw-text-left">
      <h2 class="animate__animated animate__fadeInUp animate__fast hero-header ">
        Buy, sell and trade Pi at the best rates.
      </h2>
      <p
        class="tw-mt-2 tw-text-sm animate__animated animate__fadeInUp animate__fast animate__delay-1s"
      >
        Your smartest and safest way to trade Pi at the best rates possible
      </p>
      <div
        class="mt-3 animate__animated animate__fadeInUp animate__fast animate__delay-1s"
      >
        <a
          href="https://play.google.com/store/apps/details?id=com.mings.pi2p&pli=1"
          target="_blank"
          ><button class="primary-btn">Download App</button>
        </a>
      </div>
    </div>
    <div class="tw-w-full tw-flex lg:tw-justify-end md:tw-justify-end tw-justify-center">
      <img src="@/assets/img/hero-image.svg"  class="tw-w-10/12" alt="" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.hero-header {
    font-family: var(--header-font);
    font-weight: 800;
    font-size: 60px;
    line-height: 50px;
}

@media (max-width:990px) {
    .hero-header {
        font-size: 40px;
        line-height: 40px;
    }
}
</style>
