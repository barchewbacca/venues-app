export default function getTimestamp() {
  const now = new Date();
  const y = now.getFullYear();
  const m = now.getMonth() + 1;
  const d = now.getDate();

  return `${y}${m.toString().padStart(2, '0')}${d.toString().padStart(2, '0')}`;
}
