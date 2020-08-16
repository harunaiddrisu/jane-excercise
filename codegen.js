module.exports = {
    "schema": [
        {
            "https://api.github.com/graphql": {
                "headers": {
                    "Authorization": "Bearer " + process.env.GITHUB_AUTH_TOKEN
                }
            }
        }
    ],
    "documents": [
        "./src/**/*.tsx",
        "./src/**/*.ts"
    ],
    "overwrite": true,
    "generates": {
        "./src/generated/graphql.ts": {
            "plugins": [
                "typescript",
                "typescript-operations",
                "typescript-react-apollo"
            ],
            "config": {
              "skipTypename": false,
              "withHooks": true,
              "withHOC": false,
              "withComponent": false
            }
        },
        "./graphql.schema.json": {
          "plugins": [
                "introspection"
          ]
        }
    }
};