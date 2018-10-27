$(document).ready(function () {

    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyCab84s_UdomIuhBxB8Pc6EyCIQW4g6Z6s",
        authDomain: "billablehours-1d5c6.firebaseapp.com",
        databaseURL: "https://billablehours-1d5c6.firebaseio.com",
        projectId: "billablehours-1d5c6",
        storageBucket: "",
        messagingSenderId: "818301197068"
    };
    firebase.initializeApp(config);

    let database = firebase.database();
    let name;
    let role;
    let startDate;
    let monthlyRate;

    $("#submitBtn").on("click", function (event) {

        event.preventDefault();


        name = $("#name").val();
        role = $("#role").val();
        startDate = $("#start").val();
        monthlyRate = $("#rate").val();

        console.log(startDate)

        database.ref().push({
            name: name,
            role: role,
            startDate: startDate,
            monthlyRate: monthlyRate,
        })

    })
}); 