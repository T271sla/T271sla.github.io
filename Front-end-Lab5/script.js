let clickedCell = null;
let currentColumn = null;
let colorClicked = "";

function fillTable() {
    const tableBody = document.querySelector("#myTable tbody");
    let number = 1;

    for (let i = 1; i <= 6; i++) {
        const newRow = document.createElement("tr");
        for (let j = 1; j <= 6; j++) {
            const newCell = document.createElement("td");
            newCell.textContent = number;

            if (i === 1 && j === 2) {
                const colorPicker = document.querySelector("#colorPicker");

                newCell.addEventListener("mouseover", function () {
                    newCell.style.backgroundColor = getRandomColor();
                });

                newCell.addEventListener("mouseout", function () {
                    newCell.style.backgroundColor = colorClicked;
                });

                newCell.addEventListener("click", function () {
                    isCellClicked = true;
                    clickedCell = newCell;
                    newCell.style.backgroundColor = colorPicker.value;
                    colorClicked = newCell.style.backgroundColor;
                });

                newCell.addEventListener("dblclick", function () {
                    currentColumn = j;
                    colorizeColumn(colorPicker.value);
                });
            }

            newRow.appendChild(newCell);
            number++;
        }
        tableBody.appendChild(newRow);
    }
}

function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function colorizeColumn(color) {
    if (currentColumn) {
        const tableRows = document.querySelectorAll("#myTable tbody tr");
        for (let i = 0; i < tableRows.length; i++) {
            const cells = tableRows[i].getElementsByTagName("td");
            cells[currentColumn - 1].style.backgroundColor = color;
        }
    }
}

fillTable();

document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const group = document.getElementById("group").value;
    const phone = document.getElementById("phone").value;
    const ID = document.getElementById("ID").value;
    const faculty = document.getElementById("faculty").value;

    const nameRegex = /^[A-Z][a-z]+\s[A-Z]\.[A-Z]\.$/;

    const groupRegex = /^[A-Z]{2}-\d{2}$/;

    const phoneRegex = /^\(\d{3}\)-\d{3}-\d{2}-\d{2}$/;

    const idRegex = /^[A-Z]{2} \u2116\d{6}$/;

    const facultyRegex = /^[A-Z]{4}$/;

    if (!name.match(nameRegex)) {
        alert("Please enter a valid name (LLLLLL L.L).");
        return;
    }

    if (!group.match(groupRegex)) {
        alert("Please enter a valid group (LL-NN).");
        return;
    }

    if (!phone.match(phoneRegex)) {
        alert("Please enter a valid phone number ((NNN)-NNN-NN-NN).");
        return;
    }

    if (!ID.match(idRegex)) {
        alert("Please enter a valid ID (LL №NNNNN).");
        return;
    }

    if (!faculty.match(facultyRegex)) {
        alert("Please enter a valid faculty (LLLL).");
        return;
    }

    const outputData = {
        "Name": name,
        "Group": group,
        "Phone number": phone,
        "ID": ID,
        "Faculty": faculty
    };
    
    const newWindow = window.open("", "Form Output", "width=400, height=300");
    newWindow.document.write("<h1>Submitted Form Data</h1>");
    for (const key in outputData) {
        newWindow.document.write(`<p><strong>${key}:</strong> ${outputData[key]}<p>`);
    }
});
