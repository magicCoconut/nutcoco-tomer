<?php

/** 
 * api.php used for the calls from javascript for our tomato counting of every user.
 * so far, two parameter type:
 * api.php?action=new_tomato  -> used for create a tomato record in db and return a unique tomato id.
 * api.php?action=confirm$$id=... _> used for confirm the tomato has been finished and update the tomato status in db
 * @author Yudi An
 */

ini_set("display_errors", 1); 

require_once("../config/db.php");
require_once("../classes/Login.php"); //need to check login
header('Content-Type: text/javascript');
//check login otherwise return -1
$login = new Login();
if ($login->isUserLoggedIn() == true) {

	$user_id = $login->user_id();

	if (isset($_GET['action'])) {

        /*used for api.php?action=new_tomato */
        if($_GET['action']=='new_tomato'){

        	$id = create_toma($user_id);
            echo 'var toma_id = 2015'. $id.";" ;
            // echo '2015'.$id;
        }

        /*used for pi.php?action=confirm$$id=... */
        else if($_GET['action']=='confirm'&& isset($_GET['id'])){
        	$id = $_GET['id'];
            // echo $id;
        	if(substr($id,0,4)=='2015')
                $toma_id = substr($id,4,strlen($id));
                comfirm_toma($toma_id);
                // echo $toma_id;
        		 echo 'operate successfull!';   		
        }

        else if($_GET['action']=='check_history') {
            $st = '1999-01-01';
            $et = '2037-01-01';

            if(isset($_GET['start_time']))
                $st = $_GET['start_time'];
            if(isset($_GET['end_time']))
                $et = $_GET['end_time'];

            $info = get_toma_info($user_id,$st,$et);
            // $info=get_toma_info($user_id);


            if(isset($_GET['format']) && $_GET['format']=='js')
                echo "var remote_toma_info =", json_encode($info, JSON_FORCE_OBJECT), "\n\n";             
            else if(isset($_GET['format']) && $_GET['format']=='json') 
                echo json_encode($info, JSON_FORCE_OBJECT);          
        }

    } 

}  else{
    echo "var none= 'YOU NEED TO LOGIN';";
}  




?>