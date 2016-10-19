# sepa-mailer
Simple SEPA form mailer.
User composes the SEPA mandate on the client side by entering the required data into a form.
The SEPA mandate is built on the client side and then sent to the server when the user submits the form.
After submission, the mandate is sent to a recipient via email, using mandrill.

## Configuration

The app is configured via environment parameters.
The following parameters *have* to be provided in order to make the mail sending work:
* MAIL_FROM_EMAIL=The email address used as the sender of the SEPA mandate, e.g.: recipient@domain.com
* MAIL_FROM_NAME=The display name of the sender of the SEPA mandate, e.g.: SEPA-Mailer
* MAIL_TO_EMAIL=The sepa mandate email is sent to this address, e.g. recipient@domain.com
* MAIL_TO_NAME=The recipient's display name, e.g. SEPA-Recipient 
* MANDRILL_API_KEY=The mandrill API key to authorize the sending

## Development

Start developing:

npm install
nodemon npm start

## Deployment

Dockerfile is provided as part of the project.

docker build -t sepa-mailer .
run --rm --name=sepa-mailer -e MAIL_FROM_EMAIL=... -e MAIL_FROM_NAME=... -e MAIL_TO_EMAIL=... -e MAIL_TO_NAME=... -e MANDRILL_API_KEY=... -port 4000:3000 sepa-mailer

=> sepa-mailer is listening on port 4000 on the localhost/dockerhost



