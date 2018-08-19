<template>
  <v-layout column
            class="ma-0 primary"
            fill-height>
    <v-flex>
      <div class="text-xs-center white--text">Distance</div>
    </v-flex>
    <v-flex>
      <div class="white--text text-xs-center headline font-weight-medium">
        {{ location.distance }}m
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'VenueDistance',
  props: {
    location: {
      required: true,
      type: Object,
    },
  },
};
</script>
