<?php
/**
 * if user has not been loged in, this php file will work.
 * @author Yudi An
 */
// show potential errors / feedback (from login object)
$MASSAGE = '<p class="login-box-msg"> Sign in to start your session </p>';
if (isset($login)) {
    if ($login->errors) {
        // foreach ($login->errors as $error) {
        //     echo $error;
        // }
        $MASSAGE = $login->errors;
        if(isset($MASSAGE))
            $MASSAGE = '<p class="login-box-msg login-box-msg-danger">'.$MASSAGE.'</p>'; 
    }
    if ($login->messages) {
        // foreach ($login->messages as $message) {
        //     echo $message;
        // }
        $MASSAGE = $login->messages;
        if(isset($MASSAGE))
            $MASSAGE = '<p class="login-box-msg login-box-msg-danger">'.$MASSAGE.'</p>'; 
    }
}

$BASE_URL = 'template/';

include("template/login.php");

?>

<!-- login form box -->
<!-- <form method="post" action="index.php" name="loginform">

    <label for="login_input_username">Username</label>
    <input id="login_input_username" class="login_input" type="text" name="user_name" required />
    </br>
    </br>

    <label for="login_input_password">Password</label>
    <input id="login_input_password" class="login_input" type="password" name="user_password" autocomplete="off" required />
    </br>

    <input type="submit"  name="login" value="Log in" />

</form>

<a href="register.php">Register new account</a> -->

