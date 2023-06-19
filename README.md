# Page Downloader 

LHL challenge
Node app with two arguments
URL and Local file path

## Asynchronous Operations
There are two operations in this problem which will take an unknown amount of time:

You need to make an http request and wait for the response.
After the http request is complete, you need to take the data you receive and write it to a file in your local filesystem.
When you're trying to control the order of asynchronous operations, you can use nested callbacks.
## Edge Cases

Missing parameter
File Path is Invalid
URL is Invalid

## Example run

``` node fetcher.js http://www.example.edu/ ./index.html```