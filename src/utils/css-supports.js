export function cssSupports (property, value) {
  if (typeof CSS !== 'undefined') {
    return CSS.supports(property, value)
  }

  if (typeof document === 'undefined') {
    return false;
  }

  return toCamelCase(property) in document.body.style
}

export function toCamelCase (cssProperty) {
  // Optimized to use regex for better performance
  return cssProperty.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
}
