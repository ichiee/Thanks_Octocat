
<?php
if (isset($_POST['submit'])){
$file = 'data.xml';
// name of each element
$userNode = 'member';

$doc = new DOMDocument('1.0');
$doc->preserveWhiteSpace = false;
$doc->load($file);
$doc->formatOutput = true;

// direct access to the child node of member
$root = $doc->documentElement;

$post = $_POST;
unset($post['submit']);

// creates a new instance of class DOMElement
$user = $doc->creatElement($userNode);
// this nde will show up
$user = $root->appendChild($user);
// POST use key - [name attribute] to access value - imput
foreach ($post as  $key => $value){
    
}   
    $node = $doc->createElement($key, $value);
        
   $user->appendChild($node);
   

}
$doc->save($file) or die('Sorry cannot save it');
// re direct
header('Location:thankyou.php');
?>

<!DOCTYPE html>
<!--

make form area
-->
<html>
    <head lang="en">
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width,initial-scale=1">
        <title>Blog 1</title>
        <link rel="stylesheet" type="text/css" href="style.css">
        <link href="https://fonts.googleapis.com/css?family=Roboto+Slab" rel="stylesheet">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    </head>
    
    <body>
        <!-- if need add <?php //require 'include/pagetop.php'; ?> -->
        <header>
            <div id = "navbar">
                <ul>
                    <li><a href ="index2.php">Home</a></li>
                    <li><a href ="login.php">Log In</a></li>
                </ul>
            </div>
        </header>
        
        <section>
            <h5>Congratulation! You have logged into password protected page. <a href="logout.php">Click here</a> to Logout.</h5>
        </section>
    </body>
</html>
