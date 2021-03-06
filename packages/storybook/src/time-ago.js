import React, { useState, useRef } from "react";
import { storiesOf } from "@storybook/react";
import useTimeAgo from "@rooks/use-time-ago";
import README from "@rooks/use-time-ago/README.md";

storiesOf("useTimeAgo", module)
  .addParameters({
    readme: {
      sidebar: README
    }
  })
  .add("basic example", () => <UseTimeAgoDemo />);

function UseTimeAgoDemo() {
  const [date, setDate] = useState(new Date());
  const timeAgo = useTimeAgo(date.getTime() - 1000 * 12, {
    locale: "zh_CN"
  });
  const timeAgo2 = useTimeAgo(date.getTime() - 1000 * 12);
  return (
    <>
      <p>{timeAgo}</p>
      <p>{timeAgo2}</p>
    </>
  );
}
