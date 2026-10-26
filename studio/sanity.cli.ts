import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: process.env.SANITY_PROJECT_ID,
    dataset: 'production',
  },
  deployment: {
    appId: 'prkicu3s3c9m60kw614yr1p4',
  },
})
