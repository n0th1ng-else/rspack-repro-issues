# rspack-repro

- [Rspack website](https://rspack.dev/)
- [Rspack repo](https://github.com/web-infra-dev/rspack)

A GitHub template for creating a Rspack minimal reproducible example.

webpack is included for comparing the outputs.

## Usages

`pnpm run build` would both run Rspack and webpack with config `./rspack.config.mjs`

- Rspack will emits output in `./rspack-dist`
- webpack will emits output in `./webpack-dist`

`./webpack-dist` and `./rspack-dist` are purposely not added to `.gitignore`.

It is recommended to commit these files so we quickly compare the outputs.

# How to reproduce the issue with native watchers

1. clone the repo
2. install the dependencies (pnpm install)

## Expected

If we disable native watchers, we can see the expected behavior. 
For convenience, I have wrapped it into the command `pnpm dev:normal`

The dev server starts -> plugin touches the file -> dev server rebuild -> dev server stops

## Actual

If we enable native watcher, the behavior is different.
For convenience, I have wrapped it into the command `pnpm dev:native`

The dev server starts -> plugin touches the file -> dev server **DOES NOT** rebuild
