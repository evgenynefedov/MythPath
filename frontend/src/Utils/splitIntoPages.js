export function splitStoryIntoPages(story) {
  const lines = story.split(". ");
  const newPages = [];
  for (let i = 0; i < lines.length; i += 4) {
    newPages.push(lines.slice(i, i + 4).join(". "));
  }
  return newPages;
}
