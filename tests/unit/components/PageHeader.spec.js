import { shallowMount } from '@vue/test-utils';
import PageHeader from '@/components/PageHeader.vue';

describe('PageHeader', () => {
  let component;
  beforeEach(() => {
    component = shallowMount(PageHeader, {
      stubs: ['v-jumbotron', 'v-container', 'v-layout', 'v-flex'],
    });
  });
  it('should have name', () => {
    expect(component.name()).toEqual('PageHeader');
  });
  describe('snapshot', () => {
    it('should render', () => {
      expect(component.element).toMatchSnapshot();
    });
  });
});
