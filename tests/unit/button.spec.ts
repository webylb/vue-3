import { shallowMount, mount } from "@vue/test-utils";
import Button from "@/components/Button.vue";

describe("Button.vue", () => {
  it("should show content", () => {
    const content = "foo";
    const wrapper = mount(Button, {
      slots: {
        default: content
      }
    });
    expect(wrapper.text()).toContain(content);
  });
});

describe("set button size", () => {
  it.only('by props.size', () => {
    const size = 'small'
    const wrapper = mount(Button, {
      props: {
        size
      }
    })
    expect(wrapper.classes()).toContain(`el-button--${size}`)
  })
})
