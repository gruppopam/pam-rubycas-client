$.ajaxSetup({
    statusCode: {
        302: function (response) {
            var redirect_url = response.getResponseHeader('X-Ajax-Redirect-Url');
            if (redirect_url != undefined) {
                window.location.pathname = redirect_url;
            }
        }
    }
});
