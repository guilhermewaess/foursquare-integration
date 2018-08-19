<template>
  <v-container class="pa-0">
    <form @submit.prevent="search()">
      <v-layout row>
        <v-flex xs12
                sm2>
          <v-select v-model="filter.section"
                    :items="sections"
                    item-text="name"
                    item-value="value"
                    label="Section"
                    class="pr-4">
          </v-select>
        </v-flex>
        <v-flex xs12
                sm5>
          <v-text-field v-model="filter.search"
                        label="Search Term"
                        prepend-icon="search">
          </v-text-field>
        </v-flex>
        <v-flex xs12
                sm3>
          <v-switch label="Open Now"
                    v-model="filter.openNow"
                    color="primary"
                    class="pl-5">
          </v-switch>
        </v-flex>
        <v-flex xs12
                sm2>
          <v-btn color="primary"
                 type="submit"
                 block
                 outline
                 class="mt-3"
                 dark>Search</v-btn>
        </v-flex>
      </v-layout>
    </form>
  </v-container>
</template>

<script>
export default {
  name: 'VenueFilter',
  data() {
    return {
      filter: {
        search: '',
        section: '',
        openNow: true,
      },
      sections: [
        { name: 'All', value: '' },
        { name: 'Food', value: 'food' },
        { name: 'Drinks', value: 'drinks' },
        { name: 'Coffee', value: 'coffee' },
        { name: 'Shops', value: 'shops' },
        { name: 'Arts', value: 'arts' },
        { name: 'Outdoors', value: 'outdoors' },
        { name: 'Sights', value: 'sights' },
        { name: 'Trending', value: 'trending' },
        { name: 'NextVenues', value: 'nextVenues' },
        { name: 'TopPicks', value: 'topPick' },
      ],
    };
  },
  methods: {
    search() {
      console.log(this.filter);
    },
  },
};
</script>
