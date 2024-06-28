import { formatArrayStrings } from './arrayManipulation.js';

let id = 1;

function createUserProfiles(names, modifiedNames) {
  return names.map((name, i) => {
    return {
      originalName: name,
      modifiedName: modifiedNames[i],
      id: id++
    };
  });
}

export { createUserProfiles };
