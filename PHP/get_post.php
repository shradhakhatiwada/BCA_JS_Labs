<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="get_post.php" method="get">
   <label >username:</label> </br>
    <input type="text" name="username"  placeholder="Enter your username"> </br>
  <label >password:</label> </br>
    <input type="text" name="password"  placeholder="Enter your password"> </br>
    <input type="submit" name="submit" value="Login"> </br>
    </form>
</body>
</html>
  <?php
        echo "{$_GET["username"]}<br>";
        echo "{$_GET["password"]}<br>"; 
    ?>