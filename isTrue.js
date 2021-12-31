export default function isTrue(bool) {
  return Object.prototype.toString.call(bool) === '[object Boolean]' && bool;
}
