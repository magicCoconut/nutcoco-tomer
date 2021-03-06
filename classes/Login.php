<?php

/**
 * Class login
 * handles the user's login and logout process
 * @author Yudi An
 */
class Login
{
    /**
     * @var object The database connection
     */
    private $db_connection = null;
    /**
     * @var array Collection of error messages
     */
    public $errors = "";
    /**
     * @var array Collection of success / neutral messages
     */
    public $messages = "";

    /**
     * the function "__construct()" automatically starts whenever an object of this class is created,
     * you know, when you do "$login = new Login();"
     */
    public function __construct()
    {
        // create/read session, absolutely necessary
        session_start();
        // $this->errors[] = "Sign in to start your session";
        // check the possible login actions:
        // if user tried to log out (happen when user clicks logout button)
        if (isset($_GET["logout"])) {
            $this->doLogout();
        }
        // login via post data (if user just submitted a login form)
        elseif (isset($_POST["login"])) {
            $this->dologinWithPostData();
        }
    }

    /**
     * log in with post data
     */
    private function dologinWithPostData()
    {
        // check login form contents
        if (empty($_POST['user_name'])) {
            $this->errors = "Username field was empty.";
        } elseif (empty($_POST['user_password'])) {
            $this->errors = "Password field was empty.";
        } elseif (!empty($_POST['user_name']) && !empty($_POST['user_password'])) {
            // if(isset(user_dblogin($_POST['user_name'],$_POST['user_password'])))
            $this->errors = user_dblogin($_POST['user_name'],$_POST['user_password']);
            
        }
    }


    /**
     * perform the logout
     */
    public function doLogout()
    {
        // delete the session of the user
        $_SESSION = array();
        session_destroy();
        // return a little feeedback message
        $this->messages = "You have been logged out.";

    }

    /**
     * simply return the current state of the user's login
     * @return boolean user's login status
     */
    public function isUserLoggedIn()
    {
        if (isset($_SESSION['user_login_status']) AND $_SESSION['user_login_status'] == 1) {
            
            return true;
        }
        // default return
        return false;
    }

    public function user_id(){
        if (isset($_SESSION['user_id']))
            return $_SESSION['user_id'];
    }
}
