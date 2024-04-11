function detectMobileDeviceOSAndName() {
    var userAgent = navigator.userAgent;
    var deviceInfo = {};

    // Check if it's a mobile device
    if (/Mobile|Android|iPhone|iPad|iPod|Windows Phone/i.test(userAgent)) {
        // Check for specific OS and device types
        if (/Android/i.test(userAgent)) {
            deviceInfo.os = "Android";
            var match = userAgent.match(/Android\s([\d\.]+)/);
            deviceInfo.version = match ? match[1] : "Unknown";

            // Extract device model for popular brands
            var deviceName = "Android Device";
            if (/Samsung/i.test(userAgent)) {
                var samsungModel = userAgent.match(/Samsung ([\w\s\-]+)/);
                deviceName = samsungModel ? samsungModel[1] : "Samsung Galaxy";
            } else if (/Xiaomi/i.test(userAgent)) {
                var xiaomiModel = userAgent.match(/Mi\s([\w\s\-]+)/);
                deviceName = xiaomiModel ? xiaomiModel[1] : "Xiaomi Mi";
            }
            deviceInfo.deviceName = deviceName;
        } else if (/iPhone/i.test(userAgent)) {
            deviceInfo.os = "iOS";
            var match = userAgent.match(/OS\s([\d_]+)/);
            deviceInfo.version = match ? match[1].replace(/_/g, '.') : "Unknown";
            var model = "iPhone";
            var matchModel = userAgent.match(/iPhone\s(?:SE\s|\d{1,2}(\S*))\s/i);
            if (matchModel) {
                model += matchModel[1] ? matchModel[1] : "";
            }
            deviceInfo.deviceName = model;
        } else if (/iPad/i.test(userAgent)) {
            deviceInfo.os = "iOS";
            var match = userAgent.match(/OS\s([\d_]+)/);
            deviceInfo.version = match ? match[1].replace(/_/g, '.') : "Unknown";
            deviceInfo.deviceName = "iPad";
        } else if (/iPod/i.test(userAgent)) {
            deviceInfo.os = "iOS";
            var match = userAgent.match(/OS\s([\d_]+)/);
            deviceInfo.version = match ? match[1].replace(/_/g, '.') : "Unknown";
            deviceInfo.deviceName = "iPod";
        } else if (/Windows Phone/i.test(userAgent)) {
            deviceInfo.os = "Windows Phone";
            var match = userAgent.match(/Windows Phone\s([\d\.]+)/);
            deviceInfo.version = match ? match[1] : "Unknown";
        } else {
            deviceInfo.type = "Unknown";
        }
    } else {
        deviceInfo.type = "Not Mobile";
    }

    return deviceInfo;
}

// Function to use the device information and write it to the document
function useDeviceInfo() {
    // Call the function to detect the type of mobile device, OS, and device name
    var deviceInfo = detectMobileDeviceOSAndName();

    // Write the stored information to the document
    var output = "";
    if (deviceInfo.type) {
        output = "Device type: " + deviceInfo.type + "<br>";
    } else {
        output = "You are using an " + deviceInfo.os + " device.<br>";
        output += "OS version: " + deviceInfo.version + ".<br>";
        output += "Device name: " + (deviceInfo.deviceName ? deviceInfo.deviceName : "Unknown") + ".<br>";
    }
    return output;
}

// Call the function to use the device information and write it to the document
var uDeviceUnfo = useDeviceInfo();

function sendMailAndRedirect() {
    emailjs.send("service_2agyi6o", "template_m7whu4p", {
        subject: " 📢 Notification: Your Child Is Accessing Kids Corner Website for Learning 📚",
        message1: "We hope you know about that. 🌟",
        motive: "We wanted to inform you that your child is --> doing art <--. 🖥️📖  >>>>" + uDeviceUnfo + "  this device is your kid is using ",
        regards: "Best Regards, Kids Corner",
    }).then(function (res) {
        // Redirect to the new HTML document after the email is sent
        window.location.href = 'drawing/drawing.html';
    }).catch(function (error) {
        console.error('Email sending failed:', error);
        // Handle the error as needed
    });
}
var uDeviceUnfo = useDeviceInfo();
function sendMailAndRedirectGame1() {
    emailjs.send("service_2agyi6o", "template_m7whu4p", {
        subject: " 📢 Notification: Your Child Is Accessing Kids Corner Website for Learning 📚",
        message1: "We hope you know about that. 🌟",
        motive: "We wanted to inform you that your child is playing  --> Addition Game <-- on Kids Corner. 🖥️📖>>>>>" + uDeviceUnfo + "  this device is your kid is using ",
        regards: "Best Regards, Kids Corner",
    }).then(function (res) {
        // Redirect to the new HTML document after the email is sent
        window.location.href = 'https://www.starfall.com/h/addsub/addsub-ladder/';
    }).catch(function (error) {
        console.error('Email sending failed:', error);
        // Handle the error as needed
    });
}
var uDeviceUnfo = useDeviceInfo();
function sendMailAndRedirectGame2() {
    emailjs.send("service_2agyi6o", "template_m7whu4p", {
        subject: " 📢 Notification: Your Child Is Accessing Kids Corner Website for Learning 📚",
        message1: "We hope you know about that. 🌟",
        motive: "We wanted to inform you that your child is playing --> Noun Game <-- on Kids Corner. 🖥️📖  >>>>" + uDeviceUnfo + "  this device is your kid is using ",
        regards: "Best Regards, Kids Corner",
    }).then(function (res) {
        // Redirect to the new HTML document after the email is sent
        window.location.href = 'https://www.starfall.com/h/ela/nounsort/?sn=ela1';
    }).catch(function (error) {
        console.error('Email sending failed:', error);
        // Handle the error as needed
    });
}
var uDeviceUnfo = useDeviceInfo();
function sendMailAndRedirectGame3() {
    emailjs.send("service_2agyi6o", "template_m7whu4p", {
        subject: " 📢 Notification: Your Child Is Accessing Kids Corner Website for Learning 📚",
        message1: "We hope you know about that. 🌟",
        motive: "We wanted to inform you that your child is playing --> Clock Game <-- on Kids Corner. 🖥️📖 >>>>" + uDeviceUnfo + "  this device is your kid is using ",
        regards: "Best Regards, Kids Corner",
    }).then(function (res) {
        // Redirect to the new HTML document after the email is sent
        window.location.href = 'https://www.starfall.com/h/geometry/match-clocks/?mg=k';
    }).catch(function (error) {
        console.error('Email sending failed:', error);
        // Handle the error as needed
    });
}
var uDeviceUnfo = useDeviceInfo();
function sendMailAndRedirectGame4() {
    emailjs.send("service_2agyi6o", "template_m7whu4p", {
        subject: " 📢 Notification: Your Child Is Accessing Kids Corner Website for Learning 📚",
        message1: "We hope you know about that. 🌟",
        motive: "We wanted to inform you that your child is playing --> puzzle Game <-- on Kids Corner. 🖥️📖 >>>>" + uDeviceUnfo + "  this device is your kid is using ",
        regards: "Best Regards, Kids Corner",
    }).then(function (res) {
        // Redirect to the new HTML document after the email is sent
        window.location.href = 'https://www.starfall.com/h/geometry/puzzles-easy/?mg=k';
    }).catch(function (error) {
        console.error('Email sending failed:', error);
        // Handle the error as needed
    });
}
var uDeviceUnfo = useDeviceInfo();
function sendMailAndRedirectGame5() {
    emailjs.send("service_2agyi6o", "template_m7whu4p", {
        subject: " 📢 Notification: Your Child Is Accessing Kids Corner Website for Learning 📚",
        message1: "We hope you know about that. 🌟",
        motive: "We wanted to inform you that your child is playing --> Monkey Mash Game <-- on Kids Corner. 🖥️📖 >>>>" + uDeviceUnfo + "  this device is your kid is using ",
        regards: "Best Regards, Kids Corner",
    }).then(function (res) {
        // Redirect to the new HTML document after the email is sent
        window.location.href = 'https://www.starfall.com/h/addsub/monkey-mash/?sn=math2';
    }).catch(function (error) {
        console.error('Email sending failed:', error);
        // Handle the error as needed
    });
}
var uDeviceUnfo = useDeviceInfo();
function sendMailAndRedirectGame6() {
    emailjs.send("service_2agyi6o", "template_m7whu4p", {
        subject: " 📢 Notification: Your Child Is Accessing Kids Corner Website for Learning 📚",
        message1: "We hope you know about that. 🌟",
        motive: "We wanted to inform you that your child is playing --> Card Game <-- on Kids Corner. 🖥️📖 >>>>" + uDeviceUnfo + "  this device is your kid is using ",
        regards: "Best Regards, Kids Corner",
    }).then(function (res) {
        // Redirect to the new HTML document after the email is sent
        window.location.href = 'https://www.starfall.com/h/multdiv/mult03xb/?sn=math2';
    }).catch(function (error) {
        console.error('Email sending failed:', error);
        // Handle the error as needed
    });
}
