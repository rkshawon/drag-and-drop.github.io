 const item = document.querySelectorAll(".item")
 const item_slot = document.querySelectorAll(".item-list")

 let dragable = null

 item.forEach((i)=>{
     i.addEventListener ("dragstart",(e)=>{
         setTimeout(()=>i.className = "item hide",0)
         console.log("drag start")
         dragable = i
     })
     i.addEventListener ("dragend",(e)=>{
        i.className = "item stay"
        console.log("drag end")
    })
 })
 item_slot.forEach((slot)=>{
    slot.addEventListener("dragover",(e)=>{
         e.preventDefault()
     })
     slot.addEventListener("dragenter",(e)=>{
        slot.className = "item-list red"
        e.preventDefault()
    })
    slot.addEventListener("dragleave",(e)=>{
        e.preventDefault()
        slot.className = "item-list"
    })
    slot.addEventListener("drop",(e)=>{

         slot.append(dragable)
         slot.className = "item-list"
     })
 })