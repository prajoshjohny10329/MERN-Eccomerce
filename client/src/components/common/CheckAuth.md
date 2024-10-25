
IF unAuthenticated user Access only
        landing page
        product list
        single product

Logics For CheckAuth.jsx

    1.IF unAuthenticated user Access Authenticated pages After login Redirect old URL
        ex:
            unAuthenticatedUser ===> checkout ===> login ===>  AuthenticatedUser  ===>  checkout

    2.IF Authenticated user Access Admin pages
        ex:
            AuthenticatedUser  ===>  adminPages  ===>  userURL

    3.If Authenticated User or Admin To Access Authenticate Pages It Redirect 
        ex:
            AuthenticatedUser  ===>  login/signup   ===>    '/'
        ex:
            AuthenticatedAdmin  ===>  login/signup   ===>    '/admin'
