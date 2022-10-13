module.exports = {
  platform: "bitbucket",
  username: process.env.USERNAME,
  password: process.env.PASSWORD,
  baseDir: `${process.env.BITBUCKET_CLONE_DIR}/renovate`,
  repositories: ["your-bitbucket-username/your-repo-name"],
};
