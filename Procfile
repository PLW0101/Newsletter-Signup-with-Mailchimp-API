// Heroku step 4.

web: node app.js

// Step 5. (a few steps)
// $ touch Procfile
// $ git add .
// $ git commit -m "initial commit"
// $ heroku create
// $ git push heroku master
// successful message---> remote: Verifying deploy... done.
// if anything gone wrong, run $ heroku logs to check


/* 
plw@plw:~/Desktop/Udemy/GitHub/Newsletter-signup-Mailchimp-API-1$ heroku logs
 ›   Warning: heroku update available from 7.52.0 to 7.53.1.
2021-05-11T01:29:46.936733+00:00 app[web.1]: targetSchema: 'https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/CollectionResponse.json',
2021-05-11T01:29:46.936733+00:00 app[web.1]: schema: 'https://us4.api.mailchimp.com/schema/3.0/Paths/Lists/Collection.json'
2021-05-11T01:29:46.936734+00:00 app[web.1]: },
2021-05-11T01:29:46.936734+00:00 app[web.1]: {
2021-05-11T01:29:46.936734+00:00 app[web.1]: rel: 'update',
2021-05-11T01:29:46.936734+00:00 app[web.1]: href: 'https://us4.api.mailchimp.com/3.0/lists/4dc8cb4e30',
2021-05-11T01:29:46.936734+00:00 app[web.1]: method: 'PATCH',
2021-05-11T01:29:46.936734+00:00 app[web.1]: targetSchema: 'https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/Response.json',
2021-05-11T01:29:46.936735+00:00 app[web.1]: schema: 'https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/PATCH.json'
2021-05-11T01:29:46.936735+00:00 app[web.1]: },
2021-05-11T01:29:46.936735+00:00 app[web.1]: {
2021-05-11T01:29:46.936735+00:00 app[web.1]: rel: 'batch-sub-unsub-members',
2021-05-11T01:29:46.936735+00:00 app[web.1]: href: 'https://us4.api.mailchimp.com/3.0/lists/4dc8cb4e30',
2021-05-11T01:29:46.936736+00:00 app[web.1]: method: 'POST',
2021-05-11T01:29:46.936736+00:00 app[web.1]: targetSchema: 'https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/BatchPOST-Response.json',
2021-05-11T01:29:46.936736+00:00 app[web.1]: schema: 'https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/BatchPOST.json'
2021-05-11T01:29:46.936736+00:00 app[web.1]: },
2021-05-11T01:29:46.936736+00:00 app[web.1]: {
2021-05-11T01:29:46.936736+00:00 app[web.1]: rel: 'delete',
2021-05-11T01:29:46.936737+00:00 app[web.1]: href: 'https://us4.api.mailchimp.com/3.0/lists/4dc8cb4e30',
2021-05-11T01:29:46.936737+00:00 app[web.1]: method: 'DELETE'
2021-05-11T01:29:46.936737+00:00 app[web.1]: },
2021-05-11T01:29:46.936737+00:00 app[web.1]: {
2021-05-11T01:29:46.936738+00:00 app[web.1]: rel: 'abuse-reports',
2021-05-11T01:29:46.936738+00:00 app[web.1]: href: 'https://us4.api.mailchimp.com/3.0/lists/4dc8cb4e30/abuse-reports',
2021-05-11T01:29:46.936738+00:00 app[web.1]: method: 'GET',
2021-05-11T01:29:46.936739+00:00 app[web.1]: targetSchema: 'https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/Abuse/CollectionResponse.json',
2021-05-11T01:29:46.936739+00:00 app[web.1]: schema: 'https://us4.api.mailchimp.com/schema/3.0/Paths/Lists/Abuse/Collection.json'
2021-05-11T01:29:46.936739+00:00 app[web.1]: },
2021-05-11T01:29:46.936739+00:00 app[web.1]: {
2021-05-11T01:29:46.936740+00:00 app[web.1]: rel: 'activity',
2021-05-11T01:29:46.936740+00:00 app[web.1]: href: 'https://us4.api.mailchimp.com/3.0/lists/4dc8cb4e30/activity',
2021-05-11T01:29:46.936740+00:00 app[web.1]: method: 'GET',
2021-05-11T01:29:46.936740+00:00 app[web.1]: targetSchema: 'https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/Activity/Response.json'
2021-05-11T01:29:46.936740+00:00 app[web.1]: },
2021-05-11T01:29:46.936741+00:00 app[web.1]: {
2021-05-11T01:29:46.936741+00:00 app[web.1]: rel: 'clients',
2021-05-11T01:29:46.936741+00:00 app[web.1]: href: 'https://us4.api.mailchimp.com/3.0/lists/4dc8cb4e30/clients',
2021-05-11T01:29:46.936741+00:00 app[web.1]: method: 'GET',
2021-05-11T01:29:46.936741+00:00 app[web.1]: targetSchema: 'https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/Clients/Response.json'
2021-05-11T01:29:46.936741+00:00 app[web.1]: },
2021-05-11T01:29:46.936742+00:00 app[web.1]: {
2021-05-11T01:29:46.936742+00:00 app[web.1]: rel: 'growth-history',
2021-05-11T01:29:46.936742+00:00 app[web.1]: href: 'https://us4.api.mailchimp.com/3.0/lists/4dc8cb4e30/growth-history',
2021-05-11T01:29:46.936742+00:00 app[web.1]: method: 'GET',
2021-05-11T01:29:46.936749+00:00 app[web.1]: targetSchema: 'https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/Growth/CollectionResponse.json',
2021-05-11T01:29:46.936749+00:00 app[web.1]: schema: 'https://us4.api.mailchimp.com/schema/3.0/Paths/Lists/Growth/Collection.json'
2021-05-11T01:29:46.936749+00:00 app[web.1]: },
2021-05-11T01:29:46.936749+00:00 app[web.1]: {
2021-05-11T01:29:46.936750+00:00 app[web.1]: rel: 'interest-categories',
2021-05-11T01:29:46.936750+00:00 app[web.1]: href: 'https://us4.api.mailchimp.com/3.0/lists/4dc8cb4e30/interest-categories',
2021-05-11T01:29:46.936750+00:00 app[web.1]: method: 'GET',
2021-05-11T01:29:46.936750+00:00 app[web.1]: targetSchema: 'https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/InterestCategories/CollectionResponse.json',
2021-05-11T01:29:46.936751+00:00 app[web.1]: schema: 'https://us4.api.mailchimp.com/schema/3.0/Paths/Lists/InterestCategories/Collection.json'
2021-05-11T01:29:46.936751+00:00 app[web.1]: },
2021-05-11T01:29:46.936751+00:00 app[web.1]: {
2021-05-11T01:29:46.936751+00:00 app[web.1]: rel: 'members',
2021-05-11T01:29:46.936751+00:00 app[web.1]: href: 'https://us4.api.mailchimp.com/3.0/lists/4dc8cb4e30/members',
2021-05-11T01:29:46.936752+00:00 app[web.1]: method: 'GET',
2021-05-11T01:29:46.936752+00:00 app[web.1]: targetSchema: 'https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json',
2021-05-11T01:29:46.936752+00:00 app[web.1]: schema: 'https://us4.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json'
2021-05-11T01:29:46.936752+00:00 app[web.1]: },
2021-05-11T01:29:46.936752+00:00 app[web.1]: {
2021-05-11T01:29:46.936752+00:00 app[web.1]: rel: 'merge-fields',
2021-05-11T01:29:46.936753+00:00 app[web.1]: href: 'https://us4.api.mailchimp.com/3.0/lists/4dc8cb4e30/merge-fields',
2021-05-11T01:29:46.936753+00:00 app[web.1]: method: 'GET',
2021-05-11T01:29:46.936759+00:00 app[web.1]: targetSchema: 'https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/CollectionResponse.json',
2021-05-11T01:29:46.936760+00:00 app[web.1]: schema: 'https://us4.api.mailchimp.com/schema/3.0/Paths/Lists/MergeFields/Collection.json'
2021-05-11T01:29:46.936760+00:00 app[web.1]: },
2021-05-11T01:29:46.936760+00:00 app[web.1]: {
2021-05-11T01:29:46.936760+00:00 app[web.1]: rel: 'segments',
2021-05-11T01:29:46.936760+00:00 app[web.1]: href: 'https://us4.api.mailchimp.com/3.0/lists/4dc8cb4e30/segments',
2021-05-11T01:29:46.936760+00:00 app[web.1]: method: 'GET',
2021-05-11T01:29:46.936761+00:00 app[web.1]: targetSchema: 'https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/Segments/CollectionResponse.json',
2021-05-11T01:29:46.936761+00:00 app[web.1]: schema: 'https://us4.api.mailchimp.com/schema/3.0/Paths/Lists/Segments/Collection.json'
2021-05-11T01:29:46.936761+00:00 app[web.1]: },
2021-05-11T01:29:46.936761+00:00 app[web.1]: {
2021-05-11T01:29:46.936761+00:00 app[web.1]: rel: 'webhooks',
2021-05-11T01:29:46.936762+00:00 app[web.1]: href: 'https://us4.api.mailchimp.com/3.0/lists/4dc8cb4e30/webhooks',
2021-05-11T01:29:46.936762+00:00 app[web.1]: method: 'GET',
2021-05-11T01:29:46.936762+00:00 app[web.1]: targetSchema: 'https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/Webhooks/CollectionResponse.json',
2021-05-11T01:29:46.936763+00:00 app[web.1]: schema: 'https://us4.api.mailchimp.com/schema/3.0/Paths/Lists/Webhooks/Collection.json'
2021-05-11T01:29:46.936763+00:00 app[web.1]: },
2021-05-11T01:29:46.936763+00:00 app[web.1]: {
2021-05-11T01:29:46.936763+00:00 app[web.1]: rel: 'signup-forms',
2021-05-11T01:29:46.936763+00:00 app[web.1]: href: 'https://us4.api.mailchimp.com/3.0/lists/4dc8cb4e30/signup-forms',
2021-05-11T01:29:46.936764+00:00 app[web.1]: method: 'GET',
2021-05-11T01:29:46.936764+00:00 app[web.1]: targetSchema: 'https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/SignupForms/CollectionResponse.json',
2021-05-11T01:29:46.936764+00:00 app[web.1]: schema: 'https://us4.api.mailchimp.com/schema/3.0/Paths/Lists/SignupForms/Collection.json'
2021-05-11T01:29:46.936764+00:00 app[web.1]: },
2021-05-11T01:29:46.936765+00:00 app[web.1]: {
2021-05-11T01:29:46.936765+00:00 app[web.1]: rel: 'locations',
2021-05-11T01:29:46.936765+00:00 app[web.1]: href: 'https://us4.api.mailchimp.com/3.0/lists/4dc8cb4e30/locations',
2021-05-11T01:29:46.936765+00:00 app[web.1]: method: 'GET',
2021-05-11T01:29:46.936766+00:00 app[web.1]: targetSchema: 'https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/Locations/CollectionResponse.json',
2021-05-11T01:29:46.936766+00:00 app[web.1]: schema: 'https://us4.api.mailchimp.com/schema/3.0/Paths/Lists/Locations/Collection.json'
2021-05-11T01:29:46.936766+00:00 app[web.1]: }
2021-05-11T01:29:46.936766+00:00 app[web.1]: ]
2021-05-11T01:29:46.936766+00:00 app[web.1]: }
2021-05-11T01:29:46.940418+00:00 heroku[router]: at=info method=POST path="/" host=desolate-meadow-32909.herokuapp.com request_id=f9c864b4-24d8-4cab-bd57-df61965214d8 fwd="79.140.120.72" dyno=web.1 connect=0ms service=126ms status=200 bytes=1086 protocol=https
*/

