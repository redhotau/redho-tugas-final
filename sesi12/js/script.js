var numbers = [];

let i = 1;
while (i <= 30) {
  numbers.push(i);
  i++;
}

let konten_el = document.getElementById("konten-holder");

function show_all(){

konten_el.innerHTML = "";
numbers.forEach(num => {
  konten_el.innerHTML += `
    <div class="card col-md-3 pd-3">
      <div class="card-body">
        <h4>${num}</h4>
      </div>
    </div>
  `
})
}

function show_ganjil() {
  let filtered_nums = numbers.filter(num => num % 2 !== 0);

  konten_el.innerHTML = "";

  filtered_nums.forEach(num => {
    konten_el.innerHTML += `
      <div class="card col-md-3 pd-3">
        <div class="card-body">
          <h4>${num}</h4>
        </div>
      </div>
    `
  })
}

function show_genap() {
    let filtered_nums = numbers.filter(num => num % 2 == 0);
  
    konten_el.innerHTML = "";
  
    filtered_nums.forEach(num => {
      konten_el.innerHTML += `
        <div class="card col-md-3 pd-3">
          <div class="card-body">
            <h4>${num}</h4>
          </div>
        </div>
      `
    })
  }