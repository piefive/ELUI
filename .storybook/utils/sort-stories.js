const position = (item, array = []) => {
  const index = array.indexOf(item);
  return index === -1 ? 10000 : index;
};

const splitStoryName = name => name.split('/');

export const sortStories = sortOrder => {
  const groups = Object.keys(sortOrder);

  return (a, b) => {
    const aKind = a[1].kind;
    const bKind = b[1].kind;
    const [aGroup, aComponent] = splitStoryName(aKind);
    const [bGroup, bComponent] = splitStoryName(bKind);

    if (aKind === bKind) return 0;

    if (aGroup === bGroup) {
      const group = sortOrder[aGroup];

      return position(aComponent, group) - position(bComponent, group);
    }

    return position(aGroup, groups) - position(bGroup, groups);
  };
};
