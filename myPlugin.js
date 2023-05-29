class MyPlugin {
  apply(compiler) {
    compiler.hooks.done.tap("My Plugin", (stats) => {
      console.log("Myplugin: done");
    });
  }
}

module.exports = MyPlugin;
