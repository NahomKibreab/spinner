let counter = 0;
for (let i = 1; i <= 17; i++) {
  if (i % 2 !== 0) {
    setTimeout(() => {
      const spinner = ["|", "/", "-", "\\", "|", "/", "-", "\\", "\r|"];
      process.stdout.write(`\r${spinner[counter]}   ${counter === 8 ? "\n" : ""}`);
      counter++;
    }, 100 * i);
  }
}
