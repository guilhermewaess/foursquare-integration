<template>
  <v-container fluid
               fill-height>
    <v-layout align-center
              justify-center>
      <v-flex xs12
              md6>
        <VenuesContainer></VenuesContainer>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import VenuesContainer from './../containers/VenuesContainer.vue';

export default {
  name: 'Home',
  components: {
    VenuesContainer,
  },
};
</script>
