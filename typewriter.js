const sentence = "hello there from lighthouse labs";
const temp = sentence + "\n";

for (const index in temp) {
  setTimeout(() => {
    process.stdout.write(temp[index]);
  }, (index * 50))
}
