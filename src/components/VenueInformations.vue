<template>
  <div>
    <v-layout row>
      <v-flex xs12
              class="text-xs-center">
        <span :class="venueNameSize">{{ item.venue.name }}</span>
      </v-flex>
    </v-layout>
    <v-layout row
              class="ml-1">
      <v-flex xs12>
        <div>Address</div>
        <span class="body-1">{{ address }}</span>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  name: 'VenueInformations',
  props: {
    item: {
      required: true,
      type: Object,
    },
  },
  computed: {
    address() {
      return this.item.venue.location.formattedAddress.toString().replace(/,/gi, ', ');
    },
    venueNameSize() {
      if (this.item.venue.name.length > 30) {
        return 'headline';
      }
      return 'display-1';
    },
  },
};
</script>

<style lang="scss" scoped>
.headline{
  line-height: 40px !important;
}
</style>
