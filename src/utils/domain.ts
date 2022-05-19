import { createDomain } from "effector";
import { attachLogger } from "effector-logger/attach";

export const domain = createDomain();

attachLogger(domain, {
  reduxDevtools: "enabled",
  console: "enabled",
  inspector: "enabled",
});
