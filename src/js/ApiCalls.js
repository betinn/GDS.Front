const apiBaseAdress = "https://localhost:5001";
const apiKey = "";

function loadListProfiles(){
    fetch(apiBaseAdress + "/profile/listprofiles").then(response =>
        {
            if(response.ok)
                return response.json();
            else{
                alert("Error " + response.status + " msg: " + response.json());
                throw new Error(response.json());
            }

        }
    )
    .then(data => {
        var divToFill = document.getElementById("sectioncontainer");
        divToFill.innerHTML = "";
        data.forEach(profile => {
            divToFill.innerHTML += `<div class="cardbox">\
                      <div class="column is-narrow">\
              <article\
                class="message is-purple animate__animated animate__backInRight"\
              >\
                <div class="message-header">\
                  <label>${profile.name}</label>\
                </div>\
                <div id="${profile.name}" class="message-body cursorPoint" onclick="profileLoginClick(this)">\
                  <p hidden>${profile.fileName}</p>\
                  <img src="data:image/jpeg;base64,${profile.img}" >\
                </div>\
              </article>\
            </div>\
          </div>`
        });
    });
}