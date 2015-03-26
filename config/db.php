<?php

/**
 * Configuration for: Database Connection
 *
 * For more information about constants please @see http://php.net/manual/en/function.define.php
 * If you want to know why we use "define" instead of "const" @see http://stackoverflow.com/q/2447791/1114320
 *
 * DB_HOST: database host, usually it's "127.0.0.1" or "localhost", some servers also need port info
 * DB_NAME: name of the database. please note: database and database table are not the same thing
 * DB_USER: user for your database. the user needs to have rights for SELECT, UPDATE, DELETE and INSERT.
 * DB_PASS: the password of the above user
 */


define("DB_HOST", "127.0.0.1");
define("DB_NAME", "tomer");
define("DB_USER", "tomer");
define("DB_PASS", "ZFCfLdcJer6JBtbr");

// escaping, additionally removing everything that could be (html/javascript-) code
// function db_escape($value){
// 	 $db_connection = new mysqli(DB_HOST, DB_USER, DB_PASS, DB_NAME);
// 	 $value = $db_connection->real_escape_string(strip_tags($value, ENT_QUOTES));
// 	 return $value;
// }

function user_dblogin($user_name,$user_password){
			// session_start();
			$errors = '';
			$db_connection = null;
            // create a database connection, using the constants from config/db.php (which we loaded in index.php)
            $db_connection = new mysqli(DB_HOST, DB_USER, DB_PASS, DB_NAME);

            // change character set to utf8 and check it
            if (!$db_connection->set_charset("utf8")) {
                $errors = $db_connection->error;
            }

            // if no connection errors (= working database connection)
            if (!$db_connection->connect_errno) {

                // escape the POST stuff
                $user_name = $db_connection->real_escape_string($user_name);

                // database query, getting all the info of the selected user (allows login via email address in the
                // username field)
                $sql = "SELECT user_name, user_email, user_password_hash
                        FROM users
                        WHERE user_name = '" . $user_name . "' OR user_email = '" . $user_name . "';";
                $result_of_login_check = $db_connection->query($sql);

                // if this user exists
                if ($result_of_login_check->num_rows == 1) {

                    // get result row (as an object)
                    $result_row = $result_of_login_check->fetch_object();

                    // using PHP 5.5's password_verify() function to check if the provided password fits
                    // the hash of that user's password
                    if (password_verify($user_password, $result_row->user_password_hash)) {

                        // write user data into PHP SESSION (a file on your server)
                        $_SESSION['user_name'] = $result_row->user_name;
                        $_SESSION['user_email'] = $result_row->user_email;
                        $_SESSION['user_login_status'] = 1;


                    } else {
                        $errors = "Wrong password. Try again.";
                    }
                } else {
                    $errors = "This user does not exist.";
                }
            } else {
                $errors = "Database connection problem.";
            }

            return $errors;
}
