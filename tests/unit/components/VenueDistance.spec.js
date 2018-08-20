import { shallowMount } from '@vue/test-utils';
import VenueDistance from '@/components/VenueDistance.vue';

describe('VenueDistance', () => {
  let component;
  let location;
  beforeEach(() => {
    location = {
      distance: 100,
    };
    component = shallowMount(VenueDistance, {
      propsData: {
        location,
      },
      stubs: ['v-layout', 'v-flex'],
    });
  });
  it('should have name', () => {
    expect(component.name()).toEqual('VenueDistance');
  });
  describe('snapshot', () => {
    it('should render', () => {
      expect(component.element).toMatchSnapshot();
    });
  });
});
