import wordCount from "word-count";

export const CalculateReadTime = ({content}) => {
  const wordsPerMinute = 200;
  const wordCountValue = wordCount(content);
  const readTime = Math.ceil(wordCountValue / wordsPerMinute);

  return readTime;
};