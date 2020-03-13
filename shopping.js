    //select the items we need
const shoppingForm = document.querySelector('.shopping')
const list = document.querySelector('.list')
    //array to hold out items(state)
const items = []

     //create a function that output from the input of .item
    function handleSubmit(e){
      e.preventDefault()
      const name = e.currentTarget.item.value
      const item = {
        name: name,
        id:  Date.now(),
        complete: false
      }
      //push the item into a state
      items.push(item)
      console.log(`there are ${items.length} in your state` );
    
        //clear the form 2 ways
    //e.currentTarget.item.value = ''
    e.target.reset()
      displayItems()
  }
    //dislpay the items

    function displayItems(){
      console.log(items);
      //const maped to return un  array of tag whit the item name
      //and join in the end to convert it into strign
    const html = items.map(item => `<li> ${item.name}</li>`).join()
    console.log(html);
      
    }

    //Event Listener
    shoppingForm.addEventListener('submit', handleSubmit)

