
<template>
  <v-jumbotron dark
               src="https://s3.eu-central-1.amazonaws.com/euobs-media/107425944ee4ad8015c1082c05c7df8a.jpg">
    <v-container fill-height>
      <v-layout align-center>
        <v-flex text-xs-center>
          <h3 class="display-3">Welcome to Foursquare Venue</h3>
          <h1 class="body-1">
            <!-- eslint-disable-next-line max-len -->
            **Please, allow chrome to access you location, otherwise we will consider you in the center of Amsterdam**
          </h1>
        </v-flex>
      </v-layout>
    </v-container>
  </v-jumbotron>
</template>

<script>
export default {
  name: 'PageHeader',
};
</script>

