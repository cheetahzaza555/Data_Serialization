<?php
require("config.php");
header("Content-Type:application/json");
if (isset($_GET['eid']) && $_GET['eid'] != "") {
    $eid = $_GET['eid'];
    require("connect.php");
    $result = mysqli_query(
        $link,
        "SELECT * FROM employee WHERE eid=$eid"
    );
    if (mysqli_num_rows($result) > 0) {
        $row = mysqli_fetch_array($result, MYSQLI_ASSOC);
        $ename = $row["ename"];
        $edep = $row["edep"];
        $etel = $row["etel"];
        response($eid, $ename, $edep,$etel);
        require("unconn.php");
    } else {
        response(NULL, NULL, 200, "No Record Found");    
    }
} else {
    response(NULL, NULL, 400, "Invalid Request"); 
}
function response($eid,$ename,$edep,$etel)
{

    $result = array("eid" => $eid, "ename" => $ename, "edep" => $edep, "etel" => $etel);


    echo json_encode($result);

}
?>