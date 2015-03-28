<!DOCTYPE html>

<!-- register GUI webpage coded by Yudi An -->
<!-- This webpage is based on Responsive Web Design -->
<html>
  <head>
    <meta charset="UTF-8">
    <title>Tomer | Registration Page</title>
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
    <div class="register-box">
      <div class="register-logo">
        <a href="#"><b>Prom</b>Tomer</a>
      </div>

      <div class="register-box-body">
        <?php echo $MASSAGE;?>
        <form method="post" action="register.php" name="registerform">
          <div class="form-group has-feedback">
            <input type="text" id="login_input_username" pattern="[a-zA-Z0-9]{2,64}" class="form-control" placeholder="User name" name="user_name" required/>
            <span class="glyphicon glyphicon-user form-control-feedback"></span>
          </div>
          <div class="form-group has-feedback">
            <input type="text" id="login_input_email" class="form-control" placeholder="Email" name="user_email" required/>
            <span class="glyphicon glyphicon-envelope form-control-feedback"></span>
          </div>
          <div class="form-group has-feedback">
            <input type="password" id="login_input_password_new" name="user_password_new" pattern=".{6,}"  class="form-control" placeholder="Password" autocomplete="off" required/>
            <span class="glyphicon glyphicon-lock form-control-feedback"></span>
          </div>
          <div class="form-group has-feedback">
            <input type="password" id="login_input_password_repeat" class="form-control" placeholder="Retype password" name="user_password_repeat" pattern=".{6,}" autocomplete="off" required/>
            <span class="glyphicon glyphicon-log-in form-control-feedback"></span>
          </div>
          <div class="row">
            <div class="col-xs-8">    
              <div class="checkbox icheck">
                <label>
                  <input type="checkbox" id="term_commit" name="term_commit"> I agree to the <a href="javascript:void(0)">terms</a>
                </label>
              </div>                        
            </div><!-- /.col -->
           <!--  <div class="col-xs-4">
              <button type="submit" class="btn btn-primary btn-block btn-flat">Register</button>
            </div> -->
            <!-- /.col -->
          </div>
          <div class="text-center">
              <button type="submit" name="register" class="btn btn-primary btn-block btn-flat">Register</button>
          </div><!-- /.col -->
        </form>        

        <!-- <div class="social-auth-links text-center">
          <p>- OR -</p>
          <a href="#" class="btn btn-block btn-social btn-facebook btn-flat"><i class="fa fa-facebook"></i> Sign up using Facebook</a>
          <a href="#" class="btn btn-block btn-social btn-google-plus btn-flat"><i class="fa fa-google-plus"></i> Sign up using Google+</a>
        </div> -->
        </br>
        <a href="index.php" class="text-center">I already have a membership</a>
      </div><!-- /.form-box -->
    </div><!-- /.register-box -->

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