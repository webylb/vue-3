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
