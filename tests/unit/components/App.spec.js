import { shallowMount } from '@vue/test-utils';
import App from '@/App.vue';

describe('App', () => {
  let component;
  beforeEach(() => {
    component = shallowMount(App, {
      stubs: ['v-app', 'v-content', 'router-view'],
    });
  });
  it('should have name', () => {
    expect(component.name()).toEqual('App');
  });
  describe('snapshot', () => {
    it('should render', () => {
      expect(component.element).toMatchSnapshot();
    });
  });
});
