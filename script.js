const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  },

];

//Funzione per nuova card
function newCard(name, role, email) {
  const newCard = `
  <div class=" card bg-dark text-white col-md-6 col-lg-4 mb-3 fw-bold">
    <div class="row">
      <div class="col-md-4"> 
        img
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">${name}</h5>
          <p class="card-text">${role}</p>
          <p class="card-text">${email}</p>
        </div>
      </div>
    </div>
  </div>`
  teamCardsContainer.innerHTML += newCard
}


//Creazione card
const teamCardsContainer = document.getElementById("cards")

teamMembers.forEach((member) => {
  const card = document.createElement("div")
  card.className = "col-md-4 mb-4"

  card.innerHTML = `
<div class="card mb-3 bg-dark text-white fw-bold">
  <div class="row">
    <div class="col-md-4">
      <img src="${member.img} ">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">${member.name}</h5>
        <p class="card-text">${member.role}</p>
        <p class="card-text text-primary"> ${member.email}</p>
      </div>
    </div>
  </div>
</div>
  `
  teamCardsContainer.appendChild(card)
})



//Form
let formElement = document.getElementById('form-element')
const btnSubmit = document.querySelector('button')

formElement = addEventListener('submit', function (event) {
  event.preventDefault();

  let nameUser = document.getElementById("InputName").value
  let workUser = document.getElementById("InputWork").value
  let emailUser = document.getElementById("InputEmail").value

  let newUser = {}
  newUser.name = nameUser
  newUser.role = workUser
  newUser.email = emailUser
  console.log(newUser, teamMembers)

  teamMembers.push(newUser)


  //Funzione 
  newCard(nameUser, workUser, emailUser)
})























// Creazioni costanti del 1 elemento
// const { name, role, email, img } = teamMembers[0]

// //Inserimento nome
// let info1 = document.getElementById('info1')
// teamMembers[0].name = document.createElement('h3')
// teamMembers[0].name = name
// info1.append(name)


// //Inserimento ruolo
// teamMembers[0].role = document.createElement('p')
// teamMembers[0].role = role
// info1.append(role)


// //Inserimento email
// teamMembers[0].email = document.createElement('p')
// teamMembers[0].email = email
// info1.append(email)



// //Inserimento Immagine
// const card1 = document.getElementById('card-1')
// teamMembers[0].img = document.createElement('img')
// teamMembers[0].img = img
// card1.append(img)


