# Bulk Document Downloader Extension

This Chrome extension allows users to easily download multiple documents at once from a webpage. Featuring a user-friendly popup interface, the extension enables users to input link selectors and timeout duration, automating the bulk document download process and saving time.

![Extension screenshot](./screenshot.png)

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Development](#development)

## Features

- Automatically download multiple documents with a single click
- Customizable link selector for identifying document download links
- Adjustable timeout duration between downloads
- Download progress feedback in the popup

## Installation

1. Download or clone this repository to your local machine.
2. Open Chrome and navigate to `chrome://extensions`.
3. Enable "Developer mode" using the toggle in the top right corner of the page.
4. Click on "Load unpacked" and select the folder containing the downloaded or cloned repository.
5. The extension should now be installed and visible in your Chrome extensions list.

## Usage

1. Navigate to the webpage containing the documents you want to download.
2. Click on the extension icon in the toolbar to open the popup.
3. Enter the CSS selector that identifies the document download links in the "All Documents Selector" input field (e.g., `a.download-link`).
4. Enter the desired timeout duration (in milliseconds) between downloads in the "Timeout (ms)" input field.
5. Click on the "Download All Documents" button to start the download process.
6. The extension will automatically download the documents one by one, with the specified timeout duration between each download.

**Note:** Make sure to disable the "Ask where to save each file before downloading" property in your Chrome settings at [chrome://settings/?search=Downloads](chrome://settings/?search=Downloads) for a seamless experience.

## Development

Feel free to contribute to this project by submitting pull requests or reporting issues.

To set up the development environment, follow the [Installation](#installation) steps to load the extension as an unpacked extension in Chrome.

When making changes to the code, simply reload the extension in the `chrome://extensions` page to see your updates.

