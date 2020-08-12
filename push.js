const webPush = require ('web-push');

const vapidKey = {
    "publicKey":"BGKgtuUBoytNPqVvbw_ndMb9szRT2TGBXZui_bLTCIE7-e0JzFJmo-6U8Qjsv-fT-3bFLcN8KzFlnZK-b83KHw8",
    "privateKey":"JANGcNET9rzM278oRelIw1IEFLSg4dHT_e19HubOMu0"
};

webPush.setVapidDetails(
    'mailto:example@yourdomain.org',
    vapidKey.publicKey,
    vapidKey.privateKey
)

const pushSubscription = {
    "endpoint": "https://fcm.googleapis.com/fcm/send/fX7feeu5nnU:APA91bFOcbOiLs2c0r9StrQwNmKkNlqjVoEebSyLJ9iJGOr19aXTFcLwfuyFH7HWfcCmvmmF5vEbtqFzeGk6IZUbcIiaA2MihAwqp5GpxRkIsr2xck8hsg6G54K3Jo7oRBPBypJF-Z3M",
    "keys": {
        "p256dh": "BDlhaPMk8CZDPJGnUftx8pSgnRfdJeIKInnZWWAomnfj6JHh0YXUWg/jL3b26mobDOXj1eLvMXmPF/9uE+mOe8k=",
        "auth": "oWmiycZAey2vaW7kiZbBWA=="
    }
};


const payload = 'The list now updated, check your app now.';

const options = {
    gcmAPIKey: '428222986684',
    TTL: 60
};
webPush.sendNotification(
    pushSubscription,
    payload,
    options
);