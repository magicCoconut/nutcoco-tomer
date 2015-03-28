<?php

/** 
 * api.php used for the calls from javascript for our tomato counting of every user.
 * so far, two parameter type:
 * api.php?action=new_tomato  -> used for create a tomato record in db and return a unique tomato id.
 * api.php?action=confirm$$id=... _> used for confirm the tomato has been finished and update the tomato status in db
 * @author Yudi An
 */

// ini_set("display_errors", 1); test error use

require_once("../config/db.php");
require_once("../classes/Login.php"); //need to check login

//check login otherwise return -1
$login = new Login();
if ($login->isUserLoggedIn() == true) {

	$user_id = $login->user_id();
	if (isset($_GET['action'])) {

        /*used for api.php?action=new_tomato */
        if($_GET['action']=='new_tomato'){

        	$id = create_toma($user_id);

            echo '2015'.$id;
        }

        /*used for pi.php?action=confirm$$id=... */
        else if($_GET['action']=='confirm'&& isset($_GET['id'])){
        	$id = $_GET['id'];
            // echo $id;
        	if(substr($id,0,4)=='2015')
                $toma_id = substr($id,4,strlen($id));
                // echo $toma_id;
        		 echo comfirm_toma($toma_id);   		
        } 
    } 
}    
echo -1;



?>