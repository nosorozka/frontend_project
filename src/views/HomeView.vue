<script lang="ts">
import CategoriesSection from '@/components/CategoriesSection.vue';
import CtaSection from '@/components/CtaSection.vue';
import FeaturesSection from '@/components/FeaturesSection.vue';
import MainBanner from '@/components/MainBanner.vue';
import MostPlayedSection from '@/components/MostPlayedSection.vue';
import TrendingSection from '@/components/TrendingSection.vue';

export default {
  components: {
    MainBanner,
    FeaturesSection,
    TrendingSection,
    MostPlayedSection,
    CategoriesSection,
    CtaSection,
  }
}
</script>

<template>
  <main>
    <MainBanner />
    <FeaturesSection />
    <TrendingSection />
    <MostPlayedSection />
    <CategoriesSection />
    <CtaSection />
  </main>
</template>
