function spinalCase(str) {
  let seperatedStr = str.replace(/([a-z0-9])([A-Z])/g, '$1 $2');

  let regex = /[\s_]/g;
  let spinal = seperatedStr.replace(regex, '-');

  return spinal.toLowerCase();
}
