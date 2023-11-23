/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
const { exec } = require('child_process');
const fs = require('fs');

const { version, name } = require('./package.json');

const getBranchName = async () => new Promise((resolve, _reject) => {
  // the tfs build process doesn't check out a branch, it checks out
  // the specific commit -- so we can't figure out what branch we're on
  // by doing git status. So TFS passes in the branch name from an environment
  // variable that it has.
  if (process.argv[2]) {
    console.log('got ', process.argv[2], ' as branch name');
    resolve(process.argv[2]);
  } else {
    exec('git rev-parse --abbrev-ref HEAD', (err, stdout, _stderr) => {
      if (err) {
        console.error('Error getting branch name', err);
        resolve('N/A');
      }
      resolve(stdout.trim());
    });
  }
});

const getCommitHash = async () => new Promise((resolve, _reject) => {
  exec('git rev-parse --verify HEAD', (err, stdout, _stderr) => {
    if (err) {
      console.error('Error getting commit hash', err);
      resolve('N/A');
    }
    resolve(stdout.trim());
  });
});

const getCommitCount = async () => new Promise((resolve, _reject) => {
  exec('git rev-list --count HEAD', (err, stdout, _stderr) => {
    if (err) {
      console.error('Error getting commit count', err);
      resolve('N/A');
    }
    resolve(stdout.trim());
  });
});

const getVersion = async () => {
  const commitCount = await getCommitCount();
  return `${version}.${commitCount}`;
};

const writeAboutJson = async () => {
  const json = {
    name,
    version: await getVersion(),
    commitHash: await getCommitHash(),
    repositoryBranch: await getBranchName(),
  };
  await fs.promises.writeFile('./about.json', JSON.stringify(json));
};

writeAboutJson();
