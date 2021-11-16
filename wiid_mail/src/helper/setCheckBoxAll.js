function setCheckBoxAll (list, chats, selectedAll, setSelectedAll) {
    if(!chats.subMenuItems.length){
        setSelectedAll(false)
        return
      }
      if(list.length === chats.subMenuItems.length){
        setSelectedAll(true)
      }else if(list.length !== chats.subMenuItems.length && selectedAll){
        setSelectedAll(false)
      }
}

export default setCheckBoxAll;