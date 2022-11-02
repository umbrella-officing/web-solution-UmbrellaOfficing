const informationsFieldsetForm = [
    {
      teste:'Teste'
    },
    {
      teste:'Teste2'
    }
]

const stepsForm = () =>{
  const optionsOffice = document.querySelectorAll('.space-box')
  const fieldsetForm = document.querySelectorAll('#form > fieldset')

  fieldsetForm.forEach((element,index,arr)=>{
    element.addEventListener('click',(e)=>{
      
      // console.log(e.target.getAttribute('name'))
    })

    

  })

  // form.addEventListener('click',(e)=>{

  //   if(e.target.id == 'advanceButton'){
  //     console.log('teste')
  //   }

  //   console.log(e.target.data)

  //   if(e.target.data == 6){
  //     console.log('teste4')
  //   }

  // })
  // optionsOffice.forEach((element, index, arr)=>{
  //   element.addEventListener('click',(ev)=>{
  //     console.log(index)
  //   })
  // })
  //   console.log('teste')
  

}



console.log(informationsFieldsetForm[1])
stepsForm() 