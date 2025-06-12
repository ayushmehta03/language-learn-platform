import React from 'react'
import useAuthUser from '../hooks/useAuthUser'

const Onboarding = () => {
  const {isLoading,authUser}=useAuthUser()

  return (
    <div>Onboarding</div>
  )
}

export default Onboarding