function getDependencies({ dependencies = false }) {
  if (!dependencies) {
    return [];
  }
  const acc = new Set();
  for (const dependencyKey of Object.keys(dependencies)) {
    acc.add(`${dependencyKey}@${dependencies[dependencyKey]['version']}`);
    if (dependencies[dependencyKey].hasOwnProperty('dependencies')) {
      for (const child of getDependencies(dependencies[dependencyKey])) {
        // if (!acc.includes(child)) {
          acc.add(child);

        // }
      }
    }
  }
  const x = [...acc];
  x.sort();
  return x;
}

module.exports = getDependencies
