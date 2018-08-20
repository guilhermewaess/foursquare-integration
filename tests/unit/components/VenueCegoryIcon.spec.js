import { shallowMount } from '@vue/test-utils';
import VenueCategoryIcon from '@/components/VenueCategoryIcon.vue';

describe('VenueInformations', () => {
  let categories;
  let component;
  beforeEach(() => {
    categories = [
      {
        id: '4bf58dd8d48988d1fd941735',
        name: 'Shopping Mall',
        pluralName: 'Shopping Malls',
        shortName: 'Mall',
        icon: {
          prefix: 'prefix',
          suffix: 'suffix',
        },
        primary: false,
      },
      {
        id: '4bf58dd8d48988d181941735',
        name: 'Museum',
        pluralName: 'Museums',
        shortName: 'Museum',
        icon: {
          prefix: 'prefix2',
          suffix: 'suffix2',
        },
        primary: true,
      },
    ];
    component = shallowMount(VenueCategoryIcon, {
      propsData: { categories },
      stubs: ['v-tooltip', 'v-card-media'],
    });
  });
  it('should have name', () => {
    expect(component.name()).toEqual('VenueCategoryIcon');
  });
  describe('snapshot', () => {
    it('should render', () => {
      expect(component.element).toMatchSnapshot();
    });
  });
  describe('methods', () => {
    it('getIconSrc should return interpolation of icon prefix 32 and suffix', () => {
      const expected = `${categories[1].icon.prefix}32${categories[1].icon.suffix}`;
      expect(component.vm.getIconSrc()).toEqual(expected);
    });
  });
  describe('computed', () => {
    it('category should return the primary category', () => {
      expect(component.vm.category).toEqual(categories[1]);
    });
  });
});
