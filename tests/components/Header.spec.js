import Header from '@/components/Header';
import { shallowMount } from '@vue/test-utils';
import flushPromises from 'flush-promises';

jest.mock('axios', () => ({
  get: jest.fn(() => Promise.resolve())
}));

const {get} = require('axios');

describe('Component header', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('it has a name', () => {
    const wrapper = shallowMount(Header);
    expect(wrapper.name()).toBe('Header');
  });

  test('user comes from api call', async() => {
    get.mockImplementationOnce(() => Promise.resolve('USER'));
    const wrapper = shallowMount(Header);

    await flushPromises();

    expect(get).toHaveBeenCalled();
    expect(get.mock.calls[0][0]).toBe('/api/user');
    expect(wrapper.vm.user).toBe('USER');
  });

  test('sets error to true when api call fails', async() => {
    get.mockImplementationOnce(() => Promise.reject());
    const wrapper = shallowMount(Header);

    await flushPromises();

    expect(get).toHaveBeenCalled();
    expect(get.mock.calls[0][0]).toBe('/api/user');
    expect(wrapper.vm.error).toBe(true);
  });
});