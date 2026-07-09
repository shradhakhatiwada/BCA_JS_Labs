<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="post_exercise.php" method="post">
        <label> quantity:</label> </br>
        <input type="text" name="quantity"  placeholder="Enter your quantity"> </br>
        <input type="submit" name="submit" value="Submit"> </br>
    </form>
</body>
</html>
<?php
    $item ="pizza";
    $price =10;
    $quantity = $_POST["quantity"];
    echo "You ordered {$quantity} x {$item}s<br>";
    echo "Total price: $" . ($price * $quantity) . "<br>";
    ?>