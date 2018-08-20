<template>
  <div>
    <PageHeader></PageHeader>
    <v-container fluid
                 fill-height>
      <v-layout align-center
                justify-center>
        <v-flex xs12
                sm11
                md11
                lg8
                xl6>
          <VenuesContainer></VenuesContainer>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import VenuesContainer from './../containers/VenuesContainer.vue';
import PageHeader from './../components/PageHeader.vue';

export default {
  name: 'Home',
  components: {
    VenuesContainer,
    PageHeader,
  },
};
</script>
