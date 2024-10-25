
IF unAuthenticated user Access only
        landing page
        product list
        single product

IF unAuthenticated user Access Authenticated pages After login Redirect old URL
    ex:
        unAuthenticatedUser ===> checkout ===> login ===>  AuthenticatedUser  ===>  checkout


IF Authenticated user Access Admin pages
    ex:
        AuthenticatedUser  ===>  adminPages  ===>  userURL

If Authenticated User or Admin To Access Authenticate Pages It Redirect 
    ex:
        AuthenticatedUser  ===>  login/signup   ===>    '/'
    ex:
        AuthenticatedAdmin  ===>  login/signup   ===>    '/admin'

IF