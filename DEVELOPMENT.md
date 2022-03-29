# Development

Development workflow is simple. Storybook will allow you to view and interact with the components during development. Jest will aid in preventing regressions. And ESLint will enforce code quality.

## Running Storybook

```shell
# generates a file that storybook uses for jest integration
yarn test:out

# runs storybook
yarn storybook:start
```

## Running Unit Tests

```shell
yarn test:coverage
```

## Running Linting

```shell
yarn lint
```
