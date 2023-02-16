module.exports = ({ env }) => ({
    // Other plugin's configuration
    email: {
      config: {
        provider: 'nodemailer',
        providerOptions: {
          host: env('SMTP_HOST', 'smtp.gmail.com'),
          port: env('SMTP_PORT', 465),
          auth: {
            user: env('SMTP_USERNAME'),
            pass: env('SMTP_PASSWORD'),
          },
        },
        settings: {
          defaultFrom: 'chimarokeonyebi@gmail.com',
          defaultReplyTo: 'chimarokeonyebi@gmail.com',
        },
      },
    },
    // ...
  });
