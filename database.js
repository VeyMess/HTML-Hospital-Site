var db;
//версия бд
var version = 1.0;
//имя бд
var dbName = "HospitalDB";
//отображаемое имя бд
var dbDisplayName = "MainDB";
//размер бд
var dbSize = 2 * 1024 * 1024;

function TestShitCode() {
    alert("Nahuya");
}

function startDB() {
    if (window.openDatabase) {
        //openDatabase(name, version, displayname, estimatedsize, callback);
        db = openDatabase(dbName, version, dbDisplayName, dbSize);

        createTable(db);

        dataView(db);
        document.alert("ShitHappens");
    } else {
        alert("Web SQL Database not supported in this browser");
    }
}

function createTable(db) {
    db.transaction(function(t) {
        t.executeSql("CREATE TABLE Schedule (id INTEGER PRIMARY KEY, Name TEXT, birth DATE, Email TEXT, Doctor TEXT, Email DATE, DocTime TIME)", []);
    });
}

function insertData(db, Name, birth, Email, Doctor, DocDate, DocTime) {
    db.transaction(function(e) {
        e.executeSql("INSERT INTO Schedule(Name, birth, Email, Doctor, DocDate, DocTime) VALUES (?, ?, ?)", [Name, birth, Email, Doctor, DocDate, DocTime], onSuccess, onError);
    });
}

function editElement(db, id) {
    var a = prompt('Имя'),
        b = prompt('Рождение'),
        c = prompt('Email'),
        d = prompt("Doctor"),
        f = prompt("DocDate"),
        g = prompt("DocTime");
    if (a, b, c, d, f, g) {
        db.transaction(function(e) {
            e.executeSql("UPDATE Schedule SET Name=?, birth=?, Email=?, Doctor=?, DocDate=?, DocTime=? WHERE id=?", [a, b, c, d, f, g, id], onSuccess, onError);
        });
    }
}

function onSuccess(e) {}

function onError(e) {}

function dropTable(db) {
    db.transaction(function(e) {
        e.executeSql("DROP TABLE Schedule");
    });
}

function dataView(db) {
    var html = document.getElementById("tbody01");
    html.innerHTML = "";

    db.transaction(function(t) {
        t.executeSql("SELECT * FROM Products", [],
            function(tran, r) {
                for (var i = 0; i < r.rows.length; i++) {
                    var id = r.rows.item(i).id;
                    var Name = r.rows.item(i).Name;
                    var birth = r.rows.item(i).birth;
                    var Email = r.rows.item(i).Email;
                    var Doctor = r.rows.item(i).Doctor;
                    var DocDate = r.rows.item(i).DocDate;
                    var DocTime = r.rows.item(i).DocTime;
                }
            });
    });
}