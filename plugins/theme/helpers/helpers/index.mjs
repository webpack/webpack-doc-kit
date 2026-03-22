export default {
  renderExamples(comment, headingLevel = 4) {
    const examples = comment?.blockTags?.filter(
      (tag) => tag.tag === "@example",
    );

    if (!examples || examples.length === 0) return "";

    const heading = "#".repeat(headingLevel);

    return examples
      .map((example) => {
        const content = example.content
          .map((c) => c.text)
          .join("")
          .trim();

        return ["", `${heading} Examples`, "", "```js", content, "```"].join(
          "\n",
        );
      })
      .join("\n");
  },
};
