Logics Manual For CheckAuth.jsx

    This file mainly check User or Admin is Authenticated and its Logics

    0.IF unAuthenticated user Access to Authenticated pages store current url
        ex:
            *unAuthenticatedUser ===> checkout ===> login

        unAuthenticated user can Access only
            *landing page
            *product list
            *single product

    1.IF unAuthenticated user Access Authenticated pages After login Redirect old URL
        ex:
            *unAuthenticatedUser ===> checkout ===> login ===>  AuthenticatedUser  ===>  checkout

    2.IF Authenticated user Access Admin pages
        ex:
            *AuthenticatedUser  ===>  adminPages  ===>  userURL

    3.If Authenticated User or Admin To Access Authenticate Pages It Redirect 
        ex:
            AuthenticatedUser  ===>  login/signup   ===>    '/'
        ex:
            AuthenticatedAdmin  ===>  login/signup   ===>    '/admin'

