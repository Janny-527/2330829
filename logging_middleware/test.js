const { Log } = require("./index");

async function test() {
  console.log("Testing logger...");
  await Log("backend", "info", "middleware", "Logger test successful!");
  console.log("Done!");
}

test();