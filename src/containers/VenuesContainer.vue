<template>
  <div>
    <VenueFilter @onFilter="onFilter"></VenueFilter>
    <Venues :venues="venues"></Venues>
  </div>
</template>

<script>
import Venues from './../components/Venues.vue';
import VenueFilter from './../components/VenueFilter.vue';
import search from './../services/venue.service';

const emptyVenues = {
  totalResults: 0,
  groups: [{ items: [] }],
};

export default {
  name: 'VenuesContainer',
  components: {
    Venues,
    VenueFilter,
  },
  data() {
    return {
      venues: emptyVenues,
    };
  },
  methods: {
    async onFilter(filter) {
      try {
        this.venues = await search(filter);
      } catch (error) {
        this.venues = emptyVenues;
        console.log(error);
      }
    },
  },
};
</script>
