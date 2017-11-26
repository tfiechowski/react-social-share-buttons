import { shallow, mount } from "enzyme";
import React from "react";

import ShareButton from "./share-button";

describe("Share button", () => {
  describe("Normal buttons", () => {
    it("should render empty button with unknown socialMedia type", () => {
      const wrapper = mount(<ShareButton socialMedia={""} url={"none"} />);
      expect(wrapper).toMatchSnapshot();
    });

    it("should render Facebook button ", () => {
      const wrapper = mount(
        <ShareButton
          socialMedia={"facebook"}
          url={"https://xkcd.com/1024/"}
          text="Sit by a lake"
        />
      );
      expect(wrapper).toMatchSnapshot();
    });

    it("should render Google Plus button ", () => {
      const wrapper = mount(
        <ShareButton
          socialMedia={"google-plus"}
          url={"https://xkcd.com/1024/"}
          text="Sit by a lake"
        />
      );
      expect(wrapper).toMatchSnapshot();
    });

    it("should render Twitter button ", () => {
      const wrapper = mount(
        <ShareButton
          socialMedia={"twitter"}
          url={"https://xkcd.com/1024/"}
          text="Sit by a lake"
        />
      );
      expect(wrapper).toMatchSnapshot();
    });

    it("should render Pinterest button ", () => {
      const wrapper = mount(
        <ShareButton
          socialMedia={"pinterest"}
          url={"https://xkcd.com/1024/"}
          media={"https://imgs.xkcd.com/comics/error_code.png"}
          text="Sit by a lake"
        />
      );
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe("Compact buttons", () => {
    it("should render empty button with unknown socialMedia type", () => {
      const wrapper = mount(
        <ShareButton compact socialMedia={""} url={"none"} />
      );
      expect(wrapper).toMatchSnapshot();
    });

    ["facebook", "google-plus", "twitter", "pinterest"].forEach(socialMedia => {
      it(`should render comapct ${socialMedia} button`, () => {
        const wrapper = mount(
          <ShareButton
            compact
            socialMedia={socialMedia}
            url={"https://xkcd.com/1024/"}
            media={"https://imgs.xkcd.com/comics/error_code.png"}
            text="Sit by a lake"
          />
        );
        expect(wrapper).toMatchSnapshot();
      });
    });
  });
});
