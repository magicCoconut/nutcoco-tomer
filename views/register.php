<?php
// show potential errors / feedback (from registration object)
$MASSAGE = '<p class="login-box-msg"> Register a new membership </p>';
if (isset($registration)) {
    if ($registration->errors) {
        // foreach ($registration->errors as $error) {
        //     echo $error;
        // }
        $MASSAGE = $registration->errors;
        if(isset($MASSAGE))
            $MASSAGE = '<p class="login-box-msg login-box-msg-danger">'.$MASSAGE.'</p>';        
    }
    // if ($registration->messages) {
    //     foreach ($registration->messages as $message) {
    //         echo $message;
    //     }
    // }
}




$BASE_URL = 'template/';
include("template/register.php");

?>

<!-- register form -->
<!-- <form method="post" action="register.php" name="registerform"> -->

    <!-- the user name input field uses a HTML5 pattern check -->
    <!-- <label for="login_input_username">Username (only letters and numbers, 2 to 64 characters)</label>
    <input id="login_input_username" class="login_input" type="text" pattern="[a-zA-Z0-9]{2,64}" name="user_name" required />
    </br>
    </br> -->
    <!-- the email input field uses a HTML5 email type check -->
    <!-- <label for="login_input_email">User's email</label>
    <input id="login_input_email" class="login_input" type="email" name="user_email" required />
    </br>
    </br>
    <label for="login_input_password_new">Password (min. 6 characters)</label>
    <input id="login_input_password_new" class="login_input" type="password" name="user_password_new" pattern=".{6,}" required autocomplete="off" />
    </br>
    </br>
    <label for="login_input_password_repeat">Repeat password</label>
    <input id="login_input_password_repeat" class="login_input" type="password" name="user_password_repeat" pattern=".{6,}" required autocomplete="off" />
    </br>
    </br>
    <input type="submit"  name="register" value="Register" />

</form> -->

<!-- backlink -->
<!-- <a href="index.php">Back to Login Page</a> -->
