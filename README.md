# Renovate

Update our app dependencies by create pull request everytime new release is available. Works in Bitbucket.

# How to use

1. Copy files from this repo to your except requirements.txt that just for sample.
1. Open config.js and change this line:

```
  repositories: ["your-bitbucket-username/your-reponame"],
```

2. In bitbucket repo, open "repository settings" menu
3. Under "pipelines", open "Settings" menu and make sure pipeline is enabled
4. Still under pipelines, open "Repository variables" menu and add variables from [bottom of this page](https://github.com/renovatebot/docker-renovate/blob/main/docs/bitbucket.md).
5. Back to bitbucket repo front page, in pipeline menu if you see "Run Initial" please click that button.
6. Now everytime you push to branch pipeline would run and check new version of each dependencies.