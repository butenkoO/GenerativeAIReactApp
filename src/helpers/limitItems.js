export function limitItems(data, limit) {
  if (!limit) return data;
  return data.slice(0, limit);
}
  