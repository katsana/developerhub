---
title: Getting Started
---

# Getting Started

KATSANA Insure API allows our partner to create motor insurance renewal for their users. Our API is organized around REST and JSON will be returned in all responses from the API, including errors.

Let’s walk through core API concepts as we tackle some everyday use cases.

[[toc]]


## Request

Making a request to KATSANA API is quite simple. The best way to do this is using a tool such as [Postman](http://www.getpostman.com/).


### Versioning Header

Because we aren't versioning the API in the URI we need to define an Accept header to request a specific version. The header is formatted like so.

    Accept: application/vnd.insure.v1+json

In the above example we're requesting `v1` of our API. This is then followed by a plus sign and the desired format. If the format is invalid the package will attempt to use the default format you defined in your configuration.

If you don't want to use Postman you can use a command line tool such as cURL.

```bash
curl --request GET \
    --url https://api.insure.katsana.com \
    --header 'Accept: application/vnd.insure.v1+json'
