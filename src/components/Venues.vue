<template>
  <v-container fluid
               grid-list-md
               class="pa-0">

    <v-layout column
              justify-center
              v-if="loading">
      <v-progress-circular :size="128"
                           :width="10"
                           color="primary"
                           class="loader"
                           indeterminate>
      </v-progress-circular>
    </v-layout>

    <v-data-iterator :items="venues.groups[0].items"
                     :rows-per-page-items="rowsPerPageItems"
                     :pagination.sync="pagination"
                     :loading="true"
                     content-tag="v-layout"
                     item-key="referralId"
                     row
                     wrap
                     v-if="!loading"
                     key="transition-key-data-venues">
      <v-flex slot="item"
              slot-scope="props"
              xs12>
        <v-card height="auto">
          <v-container fluid
                       class="pt-0 pb-0 pl-1 pr-1 mb-1">
            <v-layout row>
              <v-flex xs3
                      sm2
                      class="pa-0">
                <venue-category-icon :categories="props.item.venue.categories">
                </venue-category-icon>
              </v-flex>
              <v-flex xs6
                      sm8
                      class="pa-0">
                <VenueInformations :item="props.item"></VenueInformations>
              </v-flex>
              <v-flex xs3
                      sm2
                      class="pa-0">
                <venue-distance :location="props.item.venue.location">
                </venue-distance>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
      </v-flex>
    </v-data-iterator>
  </v-container>
</template>

<script>
import VenueCategoryIcon from './VenueCategoryIcon.vue';
import VenueDistance from './VenueDistance.vue';
import VenueInformations from './VenueInformations.vue';


export default {
  name: 'Venues',
  components: {
    VenueCategoryIcon,
    VenueDistance,
    VenueInformations,
  },
  props: {
    venues: {
      required: true,
      type: Object,
    },
    loading: {
      required: true,
      type: Boolean,
    },
  },
  data() {
    return {
      rowsPerPageItems: [5, 10, 20],
      pagination: {
        rowsPerPage: 5,
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.loader {
  height: 500px;
  align-self: center;
}
</style>
