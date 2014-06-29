<?php
if(isset($_POST['email'])) {
     
    // CHANGE THE TWO LINES BELOW
    $email_to = "aurelized@gmail.com";
     $from_add = "info@bitcharities.org"; 
    $email_subject = "Bitcharities website contact form submission";
     
     
    function died($error) {
        // your error code can go here
        echo "We are very sorry, but there were error(s) found with the form you submitted. ";
        echo "These errors appear below.<br /><br />";
        echo $error."<br /><br />";
        echo "Please go back and fix these errors.<br /><br />  ";
header("Refresh: 3; URL=http://www.bitcharities.org");
        die();
    }
     
    // validation expected data exists
    if(!isset($_POST['email'])) {
        died('You need to fill at least your email!');       
    }
     //get IP address
		$ip = $_SERVER['REMOTE_ADDR']; 
		//make time
		$time = time();
		$date = date("r", $time); 
    $form_name = $_POST['name']; // not required
    $form_email_from = $_POST['email']; // required
    $form_message = $_POST['message']; // not required
     
    $error_message = "";
    $email_exp = '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/';
  if(!preg_match($email_exp,$form_email_from)) {
    $error_message .= 'The Email Address you entered does not appear to be valid.<br />';
  }
  if(strlen($error_message) > 0) {
    died($error_message);
  }
    $email_message = "Message received :\n\n";
     
    function clean_string($string) {
      $bad = array("content-type","bcc:","to:","cc:","href");
      return str_replace($bad,"",$string);
    }
     
    $email_message .= "Name: ".clean_string($form_name)."\n";
    $email_message .= "Email: ".clean_string($form_email_from)."\n";
    $email_message .= "Message: ".clean_string($form_message)."\n";
     $email_message .= "IP user: ".clean_string($ip)."\n";
	 $email_message .= "Time: ".clean_string($time)."\n";
	 $email_message .= "Date: ".clean_string($date)."\n";
     
// create email headers
$headers = 'From: '.$from_add."\r\n".
'Reply-To: '.$from_add."\r\n" .
'X-Mailer: PHP/' . phpversion();
@mail($email_to, $email_subject, $email_message, $headers);  
?>
<!-- place your own success html below -->
<script language="javascript">
 location.replace("http://www.bitcharities.org");
 </script>

 <meta http-equiv="refresh" content="5; url=http://www.bitcharities.org">

 <a href="http://www.bitcharities.org"><font face="arial,helvetica">Thanks! We'll keep you up to date !</font></a>
 
<?php
}
die();
?>