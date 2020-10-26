import Counter from './Counter';
import {
  shallow
} from 'enzyme';

//--------------------------------------------//

describe('Counter testing', () => {
  //it will defined the thing passed within 'beforeeach' before running any test
  let wrapper;
  beforeEach(() => {
    wrapper = shallow( < Counter / > );
  })
  test('renders the title of counter', () => {
    console.log(wrapper.debug());
    expect(wrapper.find('h1').text()).toContain("This is counter app");
  });

  test('render a button with text of `increment`', () => {
    expect(wrapper.find('#increment-btn').text()).toBe("Increment");
  });
  test('render the initial value of state in a div', () => {
    expect(wrapper.find('#counter-value').text()).toBe("0")
  });
  test("render click event of increment button and decrement counter value", () => {
    wrapper.find('#increment-btn').simulate('click');
    expect(wrapper.find("#counter-value").text()).toBe("1");
  })
  test("render click event of decrement button and decrement counter value", () => {
    wrapper.find('#increment-btn').simulate('click');
    expect(wrapper.find("#counter-value").text()).toBe("1");
    wrapper.find('#decrement-btn').simulate('click');
    expect(wrapper.find("#counter-value").text()).toBe("0");
    wrapper.find('#decrement-btn').simulate('click');
    expect(Number(wrapper.find("#counter-value").text())).toBeGreaterThanOrEqual(0);
  })
});
