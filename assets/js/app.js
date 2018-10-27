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

    function getNumberOfMonths(){
        moment(unixTimestamp)
    }

    database.ref().on("child_added", function(childSnapshot) {

        let childS = childSnapshot.val();
        let convertedStartDate = moment(childS.startDate)
        console.log(convertedStartDate);
        let months = moment().diff(convertedStartDate, "months");
        let newRow = $("<tr>");
        let tableRowName = $("<th>").attr("scope", "row").text(childS.name);
        let tableRole = $("<td>").text(childS.role);
        let tableStartDate = $("<td>").text(childS.startDate);
        let tableMonths = $("<td>").text(months);
        let tableMonthlyRate = $("<td>").text(childS.monthlyRate);
        let totalBill = months * childS.monthlyRate
        let tableTotalBill = $("<td>").text(totalBill);

        $("#table").append(newRow, [tableRowName, tableRole, tableStartDate, tableMonths, tableMonthlyRate, tableTotalBill])
     })

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