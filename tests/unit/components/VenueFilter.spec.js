import { shallowMount } from '@vue/test-utils';
import VenueFilter from '@/components/VenueFilter.vue';

describe('VenueFilter', () => {
  let component;
  beforeEach(() => {
    component = shallowMount(VenueFilter, {
      stubs: ['v-container', 'v-layout', 'v-flex', 'v-select', 'v-switch', 'v-btn', 'v-text-field'],
    });
  });
  it('should have name', () => {
    expect(component.name()).toEqual('VenueFilter');
  });
  describe('snapshot', () => {
    it('should render', () => {
      expect(component.element).toMatchSnapshot();
    });
  });
  describe('data', () => {
    it('should start filter properties', () => {
      expect(component.vm.filter).toEqual({
        query: '',
        section: '',
        openNow: true,
      });
    });
    it('should start sections options', () => {
      expect(component.vm.sections).toEqual([
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
      ]);
    });
  });
  describe('methods', () => {
    it('search should emit onFilter event with filter', () => {
      component.vm.search();
      const emittedPayload = component.emitted().onFilter[0][0];
      expect(emittedPayload).toEqual(component.vm.filter);
    });
  });
});
