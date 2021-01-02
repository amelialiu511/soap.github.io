function createMainCarousel(src_path, img_folder) {
  newElem = document.createElement("div");
  newElem.classList.add("carousel-item");

  img = document.createElement("img");
  img.classList.add("d-block");
  img.classList.add("img-fluid");
  img.classList.add("w-80");
  img.src = src_path;

  captionDiv = document.createElement("div");
  captionDiv.classList.add("carousel-caption");
  caption = document.createElement("h3");
  caption.classList.add(src_path);
  caption.classList.add("title_"+img_folder);

  // caption.textContent = title;
  captionDiv.appendChild(caption);

  newElem.appendChild(img);
  newElem.appendChild(captionDiv);
  $(".carousel-inner").append(newElem);
}

// function createCard(mark, url, name, img_folder, price, mileage) {
function createCard(food_name, food_img, price, description) {


  divCol = document.createElement("div");
  divCol.classList.add("col-lg-4");
  divCol.classList.add("col-md-6");
  divCol.classList.add("mb-4");

  divCard = document.createElement("div");
  divCard.classList.add("card");
  divCard.classList.add("h-80");
  divCard.classList.add(food_img);


  aElem = document.createElement("a");
  // aElem.setAttribute("href", url); @todo

  imgElem = document.createElement("img");
  imgElem.classList.add("card-img-top");
  imgElem.src = "menu_img/"+food_img+".jpg";
  aElem.appendChild(imgElem);

  divCardBody = document.createElement("div");
  divCardBody.classList.add("card-body");

  nameElem = document.createElement("h4");
  nameElem.classList.add("card-title");
  nameElem.classList.add(food_img);
  nameElem.textContent = food_name;

  divCardBody.appendChild(nameElem);

  priceElem = document.createElement("h5");
  priceElem.textContent = price;
  divCardBody.appendChild(priceElem);

  descElem = document.createElement("p");
  descElem.classList.add("card-text");
  descElem.textContent = description;
  divCardBody.appendChild(descElem);

  divCard.appendChild(aElem);
  divCard.appendChild(divCardBody);
  divCol.appendChild(divCard);

  // cardListElem = document.getElementById('cardlist_id');
  // cardListElem.appendChild(divCard);

  // $(".cardlists").append(divCol);
  $("#cardlist_id").append(divCol);
}

function setCarInfo(price, desc, img_src) {
  $(".title-info").find(".card-subtitle").text(price);
  $(".title-info").find(".card-text").text(desc);

  $("#big_pic").attr("src", img_src) ;
}

function setDesc(car_desc) {
  $(".car-desc").text(car_desc);
}

function setCarList(val1, val2) {
  tr = document.createElement("tr");
  if (val2 == "") {
    tr.innerHTML = `
      <td>
        <i class="fas fa-asterisk mr-2"></i>${val1}
      </td>
    `
  }else {
    tr.innerHTML = `
      <td>
        <i class="fas fa-asterisk mr-2"></i>${val1}
      </td>
      <td>
        <i class="fas fa-asterisk mr-2"></i>${val2}
      </td>
      `
  }


  $("#features-list").append(tr);

}
