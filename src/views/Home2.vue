<template>
  <v-container fluid
               fill-height>
    <v-layout align-center
              justify-center>
      <v-flex xs12
              md6>
        <VenueFilter></VenueFilter>
        <Venues></Venues>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Venues from './../components/Venues.vue';
import VenueFilter from './../components/VenueFilter.vue';

export default {
  name: 'Home',
  components: {
    Venues,
    VenueFilter,
  },
};
</script>
