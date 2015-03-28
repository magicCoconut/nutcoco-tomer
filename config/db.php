<?php

/**
 * Configuration for: Database Connection
 * @author Yudi An
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
                $sql = "SELECT user_id, user_name, user_email, user_password_hash
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
                        $_SESSION['user_id'] = $result_row->user_id;
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

function create_toma($user_id){
    $errors = '';
    $db_connection = null;
    $db_connection = new mysqli(DB_HOST, DB_USER, DB_PASS, DB_NAME);

            // change character set to utf8 and check it
    if (!$db_connection->set_charset("utf8")) {
        $errors = $db_connection->error;
    }

    if (!$db_connection->connect_errno) {

        // escaping, additionally removing everything that could be (html/javascript-) code
        $u_id = $db_connection->real_escape_string(strip_tags($user_id, ENT_QUOTES));

        // write new user's data into database
        date_default_timezone_set('Asia/Shanghai');
        $date = date('Y-m-d H:i:s');
        $status = 0;

        $sql = "INSERT INTO tomato (user_id, toma_time,toma_status)
                VALUES('" . $u_id . "', '" . $date . "', '" . $status . "');";
        $query_new_user_insert = $db_connection->query($sql);



        // if user has been added successfully
        if (!$query_new_user_insert) {
            $errors = "insert error.";
        }
        // $errors = mysql_insert_id();
        
        $sql = "SELECT toma_id
                FROM tomato
                WHERE user_id = '" . $u_id . "' AND toma_time = '" . $date . "';";
        $result_of_login_check = $db_connection->query($sql);
        if ($result_of_login_check->num_rows == 1) {

            // get result row (as an object)
            $result_row = $result_of_login_check->fetch_object();
            $errors = $result_row->toma_id;
        }

    } else {
        $errors = "Sorry, no database connection.";
    }
    
    
    return $errors;
}

function comfirm_toma($id){
    $errors = '';
    $db_connection = null;
    $db_connection = new mysqli(DB_HOST, DB_USER, DB_PASS, DB_NAME);
                // change character set to utf8 and check it
        if (!$db_connection->set_charset("utf8")) {
            $errors = $db_connection->error;
        }

        // if no connection errors (= working database connection)
        if (!$db_connection->connect_errno) {

            // escape the POST stuff
            $id = $db_connection->real_escape_string($id);

            // database query, getting all the info of the selected user (allows login via email address in the
            // username field)
            


            // $sql = "SELECT toma_time
            //     FROM tomato
            //     WHERE toma_id = '" . $id . "' ";
            // $result_of_login_check = $db_connection->query($sql);
            // if ($result_of_login_check->num_rows == 1) {

            // // get result row (as an object)
            // $result_row = $result_of_login_check->fetch_object();
            // $start_time = $result_row->toma_time;           
            // }

            // date_default_timezone_set('Asia/Shanghai');
            // $due_time = date('Y-m-d H:i:s');
            // $to_time = strtotime($start_time);
            // $from_time = strtotime($due_time);
            // $total = round(abs($to_time - $from_time) / 60,2);
            $total = 25;
            if($total>=24&&$total<=27){


                $sql = " UPDATE tomato 
                        SET toma_status='1' 
                        WHERE toma_id='" . $id . "' ";
                $db_connection->query($sql);


                // if this update success
                if ($db_connection->affected_rows > 0)
                    return 1;
                else {
                    $errors = 0;
                    return $errors;
                }
            }



        } else {
            $errors = 0;
            return $errors;
        }

}