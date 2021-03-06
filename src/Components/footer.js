import React from "react";

export class Header extends React.Component {
  render() {
    return (
    <footer class="my-4">
    <div class="container">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
          
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <form class="form-inline my-2 my-lg-0">
                    <label><b>NEWS LETTER SIGN IN</b></label>
                    <input class="form-control mr-sm-2" type="search" placeholder="EnterYourEmail" aria-label="Search">
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Subscribe</button>
                  </form>
              <ul class="navbar-nav ml-auto">
                
                <li class="nav-item">
                  <a href="www.facebook.com" class="fa fa-facebook"></a>
                  <a href="www.twitter.com" class="fa fa-twitter"></a>
                  <a href="www.instagram.com" class="fa fa-instagram"></a>
                </li>
              </ul>
            </div>
          </nav>
    </div>
</footer>);
  }
}
