function removeVirus(str) {
  var arr = str.split(" ");
  for (var i = 0; i < arr.length; i++) {
    if (i >= 2) {
      if (arr[i].includes("virus") || arr[i].includes("malware")) {
        if (arr[i].includes("antivirus") || arr[i].includes("notvirus")) {
        } else {
          arr.splice(i, 1);
          i--;
        }
      }
    }
  }
  if (arr[2] == undefined) {
    arr[2] = "Empty";
  }
  return arr.join(" ")
}
console.log(removeVirus("PC Files: spotifysetup.exe, virus.exe, dog.jpg"))
