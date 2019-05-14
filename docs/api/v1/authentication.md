# Authentication

KATSANA API uses OAuth2 server implementation for API integration which is built on top of [Laravel Passport](https://laravel.com/docs/5.8/passport).

[[toc]]

## Personal Access Token

Each API developer should be able to generate Personal Access Token. From the top right menu on the Platform, click on **[Account Settings](https://my.katsana.com/account/edit)**.

![](/images/account-settings.png)

Next go to **[API Token](https://my.katsana.com/account/edit#api)** sub-menu and click on **Create New Token**.

![](/images/api-token.png)

Type-in a name for the personal access token, add click **Create**.

![](/images/create-access-token.png)

Once generated, you're see a modal containing your access token.

![](/images/personal-access-token.png)

::: warning
Please copy this information to your application and on no condition share this key to anyone else.
:::
