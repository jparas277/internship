console.log("linked successfully");

const fun = () => {
  let w = window.innerWidth;
  let h = window.innerHeight;

  if (w >= 900) {
    // console.log(w);
    var ele2 = (document.getElementById("show2").innerHTML = ``);
    var ele1 = document.getElementById("show1");
    // desktop
    ele1.innerHTML = `<div class="row my-5 mx-3" style="background-color: yellow">
    <div class="card col-3" style="width: 18rem; border: 2px solid black">
      <div class="card-body" style="padding: 15px">
        <div class="card-title text-center"><b>Limited Liability</b></div>
        <div class="text-center"><b>Partnership</b></div>
        <div class="my-10 text-center" style="background-color: #cfe2ff">
          <div><b>Starting</b></div>
          <p style="font-size: 50px">
            <sup style="font-size: 20px">₹</sup>999
          </p>
          <a href="#" style="color: purple">+ Fee</a>
        </div>
        <p class="card-text">
          LLP sdlsdcnsdlkvsdkvnlsdkvnsldnvsldvklsdnvlndslv
          advnksdkvndskvnslvlksvnlksndvlksdnvs
        </p>
        <div class="text-center" style="margin-top: 67px">
          <a href="#">Know More</a>
        </div>
      </div>
    </div>
    <div
      class="card col-3"
      style="width: 18rem; border: 2px solid black; margin-left: 110px"
    >
      <div class="card-body" style="padding: 15px">
        <div class="card-title text-center"><b>Limited Liability</b></div>
        <div class="text-center"><b>Partnership</b></div>
        <div class="my-10 text-center" style="background-color: #cfe2ff">
          <div><b>Starting</b></div>
          <p style="font-size: 50px">
            <sup style="font-size: 20px">₹</sup>999
          </p>
          <a href="#" style="color: purple">+ Fee</a>
        </div>
        <p class="card-text">
          LLP sdlsdcnsdlkvsdkvnlsdkvnsldnvsldvklsdnvlndslv
          advnksdkvndskvnslvlksvnlksndvlksdnvs
        </p>
        <div class="text-center" style="margin-top: 67px">
          <a href="#">Know More</a>
        </div>
      </div>
    </div>
    <div
      class="card col-3"
      style="width: 18rem; border: 2px solid black; margin-left: 110px"
    >
      <div class="card-body" style="padding: 15px">
        <div class="card-title text-center"><b>Limited Liability</b></div>
        <div class="text-center"><b>Partnership</b></div>
        <div class="my-10 text-center" style="background-color: #cfe2ff">
          <div><b>Starting</b></div>
          <p style="font-size: 50px">
            <sup style="font-size: 20px">₹</sup>999
          </p>
          <a href="#" style="color: purple">+ Fee</a>
        </div>
        <p class="card-text">
          LLP sdlsdcnsdlkvsdkvnlsdkvnsldnvsldvklsdnvlndslv
          advnksdkvndskvnslvlksvnlksndvlksdnvs
        </p>
        <div class="text-center" style="margin-top: 67px">
          <a href="#">Know More</a>
        </div>
      </div>
    </div>
    <div
      class="card col-3"
      style="width: 18rem; border: 2px solid black; margin-left: 132px;"
    >
      <div class="card-body" style="padding: 15px">
        <div class="card-title text-center"><b>Limited Liability</b></div>
        <div class="text-center"><b>Partnership</b></div>
        <div class="my-10 text-center" style="background-color: #cfe2ff">
          <div><b>Starting</b></div>
          <p style="font-size: 50px">
            <sup style="font-size: 20px">₹</sup>999
          </p>
          <a href="#" style="color: purple">+ Fee</a>
        </div>
        <p class="card-text">
          LLP sdlsdcnsdlkvsdkvnlsdkvnsldnvsldvklsdnvlndslv
          advnksdkvndskvnslvlksvnlksndvlksdnvs
        </p>
        <div class="text-center" style="margin-top: 67px">
          <a href="#">Know More</a>
        </div>
      </div>
    </div>
  </div>`;
  } else {
    // mobile
    // console.log(w);
    var ele1 = (document.getElementById("show1").innerHTML = ``);
    var ele2 = document.getElementById("show2");
    ele2.innerHTML = `<div
    id="carouselExampleDark"
    class="carousel carousel-dark slide my-5"
    data-bs-ride="carousel"
  >
    <div class="carousel-indicators my-5">
      <button
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide-to="0"
        class="active"
        aria-current="true"
        aria-label="Slide 1"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide-to="1"
        aria-label="Slide 2"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide-to="2"
        aria-label="Slide 3"
      ></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active" data-bs-interval="1000">
        <center>
          <div class="card" style="width: 18rem; border: 2px solid black">
            <div class="card-body" style="padding: 15px">
              <div class="card-title text-center">
                <b>Limited Liability</b>
              </div>
              <div class="text-center"><b>Partnership</b></div>
              <div
                class="my-10 text-center"
                style="background-color: #cfe2ff"
              >
                <div><b>Starting</b></div>
                <p style="font-size: 50px">
                  <sup style="font-size: 20px">₹</sup>999
                </p>
                <a href="#" style="color: purple">+ Fee</a>
              </div>
              <p class="card-text">
                LLP sdlsdcnsdlkvsdkvnlsdkvnsldnvsldvklsdnvlndslv
                advnksdkvndskvnslvlksvnlksndvlksdnvs
              </p>
              <div class="text-center" style="margin-top: 67px">
                <a href="#">Know More</a>
              </div>
            </div>
          </div>
        </center>
      </div>
      <div class="carousel-item" data-bs-interval="1000">
        <center>
          <div class="card" style="width: 18rem; border: 2px solid black">
            <div class="card-body" style="padding: 15px">
              <div class="card-title text-center">
                <b>Limited Liability</b>
              </div>
              <div class="text-center"><b>Partnership</b></div>
              <div
                class="my-10 text-center"
                style="background-color: #cfe2ff"
              >
                <div><b>Starting</b></div>
                <p style="font-size: 50px">
                  <sup style="font-size: 20px">₹</sup>999
                </p>
                <a href="#" style="color: purple">+ Fee</a>
              </div>
              <p class="card-text">
                LLP sdlsdcnsdlkvsdkvnlsdkvnsldnvsldvklsdnvlndslv
                advnksdkvndskvnslvlksvnlksndvlksdnvs
              </p>
              <div class="text-center" style="margin-top: 67px">
                <a href="#">Know More</a>
              </div>
            </div>
          </div>
        </center>
      </div>
      <div class="carousel-item" data-bs-interval="1000">
        <center>
          <div class="card" style="width: 18rem; border: 2px solid black">
            <div class="card-body" style="padding: 15px">
              <div class="card-title text-center">
                <b>Limited Liability</b>
              </div>
              <div class="text-center"><b>Partnership</b></div>
              <div
                class="my-10 text-center"
                style="background-color: #cfe2ff"
              >
                <div><b>Starting</b></div>
                <p style="font-size: 50px">
                  <sup style="font-size: 20px">₹</sup>999
                </p>
                <a href="#" style="color: purple">+ Fee</a>
              </div>
              <p class="card-text">
                LLP sdlsdcnsdlkvsdkvnlsdkvnsldnvsldvklsdnvlndslv
                advnksdkvndskvnslvlksvnlksndvlksdnvs
              </p>
              <div class="text-center" style="margin-top: 67px">
                <a href="#">Know More</a>
              </div>
            </div>
          </div>
        </center>
      </div>
    </div>
  </div>`;
  }
  //   console.log("This is height ", h);
  //   console.log("This is width ", w);
};

setInterval(() => {
  fun();
}, 100);
