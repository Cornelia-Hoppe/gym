import React, { useEffect, useState } from 'react'

function CheckUser() {


    const [STYLE_LVL3, setSTYLE_LVL3] = useState({display:'none'})
    const [STYLE_LVL2, setSTYLE_LVL2] = useState({display:'none'})
    const [STYLE_LVL1, setSTYLE_LVL1] = useState({display:'flex'})

    const user = JSON.parse(localStorage.getItem('user'))

  const checkUser = () => {
    if (user.level == 3) {
        setSTYLE_LVL3({display:'flex'})
        setSTYLE_LVL2({display:'flex'})
    } else if (user.level == 2) {
        setSTYLE_LVL3({display:'none'})
        setSTYLE_LVL2({display:'flex'})

    } else if (!user.level || user.level == 1) {
        setSTYLE_LVL3({display:'none'})
        setSTYLE_LVL2({display:'none'})
    }
  }

  useEffect(() => {
    checkUser()
  }, [user])

  useEffect(() => {
    checkUser()
  }, [])
}

export default CheckUser