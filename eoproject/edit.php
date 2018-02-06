<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Admin Area | Edit Sessions</title>
    <!-- Bootstrap core CSS -->
    <link href="css/bootstrap.min.css" rel="stylesheet">
    <link href="css/style.css" rel="stylesheet">
    <script src="https://cdn.ckeditor.com/4.8.0/standard/ckeditor.js"></script>
    <?php include 'functions/functions.php';?>
</head>

<body>

    <nav class="navbar navbar-default">
        <div class="container">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
                <a class="navbar-brand" href="index.html">EOP Database</a>
            </div>
            <div id="navbar" class="collapse navbar-collapse">
                <ul class="nav navbar-nav">
                    <li><a href="index.html">Dashboard</a></li>
                    <li><a href="students.html">Students</a></li>
                    <li><a href="sessions.html">Sessions</a></li>
                </ul>
                <ul class="nav navbar-nav navbar-right">
                    <li><a href="#">Welcome, Med</a></li>
                    <li><a href="login.html">Logout</a></li>
                </ul>
            </div>
            <!--/.nav-collapse -->
        </div>
    </nav>

    <header id="header">
        <div class="container">
            <div class="row">
                <div class="col-md-10">
                    <h1><span class="glyphicon glyphicon-cog" aria-hidden="true"></span> Edit Sessions <small></small></h1>
                </div>
            </div>
        </div>
    </header>


    <section id="breadcrumb">
        <div class="container">
            <ol class="breadcrumb">
                <li><a href="index.html">Dashboard</a></li>
                <li><a href="sessions.html">Sessions</a></li>
                <li class="active">Edit Session</li>
            </ol>
        </div>
    </section>

    <section id="main">
        <div class="container">
            <div class="row">
              <?php sessionsFrom() ?>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer id="footer">
        <p>Copyright EOP Database, &copy; 2018</p>
    </footer>

    <script>
        CKEDITOR.replace('editor1');
    </script>
    <!-- Bootstrap core JavaScript
    ================================================== -->
    <!-- Placed at the end of the document so the pages load faster -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
    <script src="js/bootstrap.min.js"></script>
</body>

</html>