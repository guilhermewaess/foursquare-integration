<template>
  <div>
    <VenueFilter @onFilter="onFilter"></VenueFilter>
    <Venues :venues="venues"
            :loading="loading"></Venues>
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
  mounted() {
    this.onFilter({});
  },
  data() {
    return {
      venues: emptyVenues,
      loading: true,
    };
  },
  methods: {
    async onFilter(filter) {
      this.loading = true;
      try {
        this.venues = await search(filter);
      } catch (error) {
        this.venues = emptyVenues;
        console.log(error);
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>
