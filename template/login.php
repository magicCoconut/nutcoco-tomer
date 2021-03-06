<!DOCTYPE html>
<!-- login GUI webpage coded by Yudi An -->
<!-- This webpage is based on Responsive Web Design -->
<html>
  <head>
    <meta charset="UTF-8">
    <title>Tomer | Log in</title>
    <meta content='width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no' name='viewport'>
    <!-- Bootstrap 3.3.2 -->
    <link href="<?php echo $BASE_URL;?>AdminLTE-2.0.4/bootstrap/css/bootstrap.min.css" rel="stylesheet" type="text/css" />
    <!-- Font Awesome Icons -->
    <link href="<?php echo $BASE_URL;?>AdminLTE-2.0.4/plugins/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet" type="text/css" />
    <!-- Theme style -->
    <link href="<?php echo $BASE_URL;?>AdminLTE-2.0.4/dist/css/AdminLTE.min.css" rel="stylesheet" type="text/css" />
    <!-- iCheck -->
    <link href="<?php echo $BASE_URL;?>AdminLTE-2.0.4/plugins/iCheck/square/blue.css" rel="stylesheet" type="text/css" />
    <link href="<?php echo $BASE_URL;?>build_tomer/css/tomer.css" rel="stylesheet" type="text/css" />
    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
        <script src="https://oss.maxcdn.com/libs/respond.js/1.3.0/respond.min.js"></script>
    <![endif]-->
  </head>
  <body>
    <div class="login-box">
      <div class="login-logo">
        <a href="#"><b>Prom</b>Tomer</a>
      </div><!-- /.login-logo -->
      <div class="login-box-body">
        <?php echo $MASSAGE;?>
        <form method="post" action="index.php" name="loginform">
          <div class="form-group has-feedback" >
            <input type="text" class="form-control" placeholder="User name" id="login_input_username" name="user_name" required/>
            <span class="glyphicon glyphicon-user form-control-feedback"></span>
          </div>
          <div class="form-group has-feedback">
            <input type="password" class="form-control" placeholder="Password" id="login_input_password" name="user_password" required/>
            <span class="glyphicon glyphicon-lock form-control-feedback"></span>
          </div>
          <div class="row">
            <div class="col-xs-8">    
              <div class="checkbox icheck">
                <label>
                  <input type="checkbox"> Remember Me
                </label>
              </div>                        
            </div>
            <!-- <div class="col-xs-4">
              <button type="submit" class="btn btn-danger btn-block btn-flat">Sign In</button>
            </div> -->
          </div>
          </br>
          <div class="text-center">
          
            <!-- <button type="submit" class="btn btn-danger btn-block btn-flat">Sign In</button> -->
            <button type="submit" class="btn btn-block btn-danger btn-flat" name="login"> Sign In</button>
            <a href="register.php" class="btn btn-block btn-primary btn-flat"> Create a new acount</a>
          </div>

        </form>
        </br>
        <a href="javascript:void(0)">I forgot my password</a><br>
        <!-- <a href="register.html" class="text-center">Register a new membership</a> -->
      </div><!-- /.login-box-body -->
    </div><!-- /.login-box -->


    <!-- jQuery 2.1.3 -->
    <script src="<?php echo $BASE_URL;?>AdminLTE-2.0.4/plugins/jQuery/jQuery-2.1.3.min.js"></script>
    <!-- Bootstrap 3.3.2 JS -->
    <script src="<?php echo $BASE_URL;?>AdminLTE-2.0.4/bootstrap/js/bootstrap.min.js" type="text/javascript"></script>
    <!-- iCheck -->
    <script src="<?php echo $BASE_URL;?>AdminLTE-2.0.4/plugins/iCheck/icheck.min.js" type="text/javascript"></script>
    <script>
      $(function () {
        $('input').iCheck({
          checkboxClass: 'icheckbox_square-blue',
          radioClass: 'iradio_square-blue',
          increaseArea: '20%' // optional
        });
      });
    </script>
  </body>
</html>