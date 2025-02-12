const path = require("path");
const { browser } = require("protractor");

exports.config = {
  allScriptsTimeout: 60000,
  getPageTimeout: 50000,
  specs: [path.resolve(__dirname, "../../test/features/*.feature")],
  framwork: "custom",
  frameworkPath: require.resolve("protractor-cucumber-framework"),
  capabilities: {
    browserName: "chrome",
    chromeOptions: {
      args: ["--no-sandbox", "--window-size=1920,1080"],
    },
  },

  disableChecks: true,
  directConnect: true,
  cucumberOpts: {
    require: [path.resolve("./test/step_defenitions/*.js")],
    ignoreUncaughtExceptions: true,
    format: ["json:./test/reports/reports.json"],
    tags: "@smoke",
  },
  // onPrepere: () => {
  //   return browser.waitForAngularEnabled(false);
  // },
};
