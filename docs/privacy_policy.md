<!doctype html>
<html lang="en">

<head>
  <title>COVID Contact Tracing</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.4.0/css/bootstrap.min.css"
    integrity="sha256-/ykJw/wDxMa0AQhHDYfuMEwVb4JHMx9h4jD4XvHqVzU=" crossorigin="anonymous" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootswatch/4.4.1/cosmo/bootstrap.min.css"
    integrity="sha256-KgiMiZgZazlcRqcTnpKlQRyoi1Y79W1dsn5CtKFtwH0=" crossorigin="anonymous" />
  <link rel="stylesheet" href="/css/style.css?rev=6">

  <script async src="https://www.googletagmanager.com/gtag/js?id=UA-608030-15"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag() { dataLayer.push(arguments); }
    gtag('js', new Date());

    gtag('config', 'UA-608030-15');
  </script>
  
  <script src="https://cdnjs.cloudflare.com/ajax/libs/marked/1.1.0/marked.min.js" integrity="sha256-POA+Q3FC8tyo/jZhQrw40H5mKcWAABdxNeUQ/uhIm4U=" crossorigin="anonymous"></script>
  <script>
    fetch("/md/privacy_policy.md")
    .then((data) => {
        data.text().then(value => {
            document.getElementById("markdown-content").innerHTML = marked(value);
        })
    });
  </script>

</head>

<body>

  <nav class="navbar navbar-expand-sm navbar-light bg1">
    <a class="navbar-brand font-weight-bold" href="#"></a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsingNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="navbar-collapse collapse" id="collapsingNavbar">
      <ul class="navbar-nav">
        <li class="nav-item">
            <a class="nav-link font-weight-bold" href="/">Home</a>
        </li>
      </ul>
      <ul class="navbar-nav ml-auto">
        <li class="nav-item ml-auto">
          <a class="nav-link font-weight-bold" href="/#approach">Approach</a>
        </li>
        <li class="nav-item ml-auto">
          <a class="nav-link font-weight-bold" href="/#contact">Contact</a>
        </li>
      </ul>
    </div>
  </nav>

  
  <section class="approach py-5 bg2">
    <a name="approach"></a>
    <div class="container">
      <div class="row">
        <div class="col-lg-12" id="markdown-content">
        </div>
      </div>
    </div>
  </section>


  <footer class="page-footer font-small p-5 bg1">
    <div class="row">
        <div class="col-md-6">
            <a class="text-muted" href="/docs/privacy_policy.md">Privacy Policy</a>
        </div>
        <div class="footer-copyright text-right col-md-6">
            <span class="d-block text-muted">COVID Contact Tracing</span>
            <span class="d-block text-muted">San Francisco, CA</span>
        </div>
    </div>
  </footer>

  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"
    integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossorigin="anonymous"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.4.0/js/bootstrap.min.js"
    integrity="sha256-oKpAiD7qu3bXrWRVxnXLV1h7FlNV+p5YJBIr8LOCFYw=" crossorigin="anonymous"></script>
  <script src="js/main.js"></script>
</body>

</html>