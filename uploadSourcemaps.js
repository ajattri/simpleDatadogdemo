const { execSync } = require("child_process");
const packageJson = require("./package.json");

const datadogApiKey = process.env.DATADOG_API_KEY;

if (!datadogApiKey) {
  console.error("DATADOG_API_KEY is not set.");
  process.exit(1);
}

try {
  execSync(
    `npx datadog-ci sourcemaps upload \
  --service=simpledemo \
  --release-version=1.0.0 \
  --minified-path-prefix=https://ajattri.github.io/simpleDatadogdemo/ \
  --project-root=/home/runner/work/simpleDatadogdemo/simpleDatadogdemo \
  ./.next`,
    {
      stdio: "inherit", // this will show the command output in console
      env: {
        ...process.env,
        DATADOG_API_KEY: datadogApiKey,
      },
    }
  );
} catch (error) {
  console.error("Error uploading sourcemaps to Datadog:", error);
  process.exit(1);
}
