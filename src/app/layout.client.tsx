"use client";
const getEffects = () => {
  "use strict";
  const effects = globalThis.localStorage.getItem('effects');
  if (effects == null || effects == `${!![]}`) {
    return '';
  } else {
    return "noEffects";
  }
}

export const useEffects = () => {
  try {
    return getEffects();
  } catch {
    return '';
  }
  return '';
}
