import Vue from 'vue';
import {
  Vuetify,
  VApp,
  VCard,
  VDataIterator,
  VNavigationDrawer,
  VFooter,
  VList,
  VBtn,
  VIcon,
  VGrid,
  VTextField,
  VToolbar,
  VTooltip,
  VSelect,
  VSwitch,
  transitions,
} from 'vuetify';
import 'vuetify/src/stylus/app.styl';

Vue.use(Vuetify, {
  components: {
    VApp,
    VCard,
    VDataIterator,
    VNavigationDrawer,
    VFooter,
    VList,
    VBtn,
    VIcon,
    VGrid,
    VTextField,
    VToolbar,
    VTooltip,
    VSelect,
    VSwitch,
    transitions,
  },
  theme: {
    primary: '#1A237E',
    secondary: '#689F38',
    accent: '#D50000',
    error: '#f44336',
    warning: '#ffeb3b',
    info: '#2196f3',
    success: '#4caf50',
  },
});
