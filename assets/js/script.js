/* Author: 

*/
async function fetchData() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      return await response.json();
    } catch (error) {
      return console.error('Error fetching data:', error);
    }
    }
  
  // Function to create HTML elements for each item and append them to the div
  function renderData(data) {
    var title = document.querySelector('.title');
    data.forEach(item => {
        var h2 = document.createElement('h2');
        var p = document.createElement('p');
        h2.textContent = item.title;
        p.textContent = item.body;
        title.appendChild(h2);
        h2.appendChild(p);
    });
  }
  
  var offset = 0;
  var limit = 3; 
  
  function loadMore() {
    fetchData()
          .then(data => {
              var itemsToShow = data.slice(offset, offset + limit);
              renderData(itemsToShow);
              offset += limit;
              if (offset >= data.length) {
                  document.querySelector('.loadmore').style.display = 'none';
              }
          });
  }
  
  document.querySelector('.loadmore').addEventListener('click', loadMore);
  loadMore();
  
  //   async function getUsers() {
  //     try {
  //       var response = await fetch('https://jsonplaceholder.typicode.com/posts');
  //       var data = await response.json();
  //       //console.log(data);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   data.forEach((element,index) => {
  //     //console.log(element,index);
  //     var h2 = document.createElement("h2");
  //     var para = document.createElement("p");
  
  //     Object.keys(element,index).map((item) => {
  //       //console.log(element[item],index);
  //       var title = document.querySelector(".title");
  //       title.appendChild(h2);
  //       // console.log(h2.appendChild(para));
  //       h2.innerHTML = element.title;
  //       //para.innerHTML = element.body;
  //     })
  
  //     Object.keys(element).map((i) => {
  //       //console.log(element[i]);
  //       h2.appendChild(para);
  //       para.innerHTML = element.body;
  //     })
    
  //   });
  // }
  
  // let btn = document.querySelector(".loadmore");
  // btn.addEventListener("click", function(){
  //   if(this.classList.toggle('active')) {
  //      getUsers();
  //   } else(btn.remove()) 
  // });
  





















