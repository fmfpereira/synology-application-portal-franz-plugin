# Synology DSM Application Portal for Franz
This is the official Franz recipe for Synology DSM Application Portal

## Background

This plugin allows Synology DSM Aplications published on the Application Portal to be run on [Franz](https://meetfranz.com/).

## Installation

1. Clone/download the folder `synology-application-portal-franz-plugin`.

2. Open the Franz Recipe folder on your machine:
  * Mac: `~/Library/Application Support/Franz/recipes/`
  * Windows: `%appdata%/Franz/recipes/`
  * Linux: `~/.config/Franz/recipes/`

3. Create a `dev` folder if you have not already done so.

3. Copy the `synology-application-portal-franz-plugin` folder into the recipes dev directory

4. Restart Franz

5. Add the new service for each published application on Synology DSM Application Portal.

## Known limitations

This plugin works with any Synology DSM Application published on the Application Portal but the [Chat Application does not trigger notifications on mentions](https://github.com/fmfpereira/synology-application-portal-franz-plugin/issues/1).

## Support

Please [open an issue](https://github.com/fmfpereira/synology-application-portal-franz-plugin/issues/new) for support.

## Contributing

Please contribute using [Github Flow](https://guides.github.com/introduction/flow/). Create a branch, add commits, and [open a pull request](https://github.com/fmfpereira/synology-application-portal-franz-plugin/compare).
